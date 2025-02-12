const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BOULDER_PLACE_ID = process.env.BOULDER_PLACE_ID;
const ARVADA_PLACE_ID = process.env.ARVADA_PLACE_ID;

async function fetchLocationReviews(placeId) {
  const fields = [
    'reviews',
    'rating',
    'user_ratings_total',
    'name',
    'formatted_address',
    'formatted_phone_number',
    'opening_hours',
    'website',
    'url',      // Google Maps URL
    'photos',
    'business_status',
    'price_level',
    'types'
  ].join(',');

  const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&reviews_sort=newest&reviews_no_translations=true&key=${GOOGLE_PLACES_API_KEY}`;
  const response = await fetch(placeDetailsUrl);
  const data = await response.json();

  if (!data.result) {
    throw new Error(`Failed to fetch reviews for place_id: ${placeId}`);
  }

  return data.result;
}

export default async function handler(req, res) {
  try {
    const [boulderData, arvadaData] = await Promise.all([
      fetchLocationReviews(BOULDER_PLACE_ID),
      fetchLocationReviews(ARVADA_PLACE_ID)
    ]);

    const response = {
      boulder: {
        reviews: boulderData.reviews || [],
        rating: boulderData.rating || 0,
        user_ratings_total: boulderData.user_ratings_total || 0,
        name: boulderData.name || '',
        formatted_address: boulderData.formatted_address || '',
        formatted_phone_number: boulderData.formatted_phone_number || '',
        website: boulderData.website || '',
        url: boulderData.url || '',
        currentPage: 1,
        location: 'Boulder'
      },
      arvada: {
        reviews: arvadaData.reviews || [],
        rating: arvadaData.rating || 0,
        user_ratings_total: arvadaData.user_ratings_total || 0,
        name: arvadaData.name || '',
        formatted_address: arvadaData.formatted_address || '',
        formatted_phone_number: arvadaData.formatted_phone_number || '',
        website: arvadaData.website || '',
        url: arvadaData.url || '',
        currentPage: 1,
        location: 'Arvada'
      }
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ error: error.message });
  }
}
