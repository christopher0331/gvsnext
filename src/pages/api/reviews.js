const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BOULDER_PLACE_ID = process.env.BOULDER_PLACE_ID;
const ARVADA_PLACE_ID = process.env.ARVADA_PLACE_ID;

async function fetchLocationReviews(placeId) {
  // First get the basic place details
  const fields = [
    'rating',
    'user_ratings_total',
    'name',
    'formatted_address',
    'formatted_phone_number',
    'website',
    'url'
  ].join(',');

  const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${GOOGLE_PLACES_API_KEY}`;
  const detailsResponse = await fetch(placeDetailsUrl);
  const detailsData = await detailsResponse.json();

  if (!detailsData.result) {
    throw new Error(`Failed to fetch details for place_id: ${placeId}`);
  }

  // Then get reviews using the Place Details API with a different session token
  const reviewsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_sort=highest_rating&key=${GOOGLE_PLACES_API_KEY}`;
  const reviewsResponse = await fetch(reviewsUrl);
  const reviewsData = await reviewsResponse.json();

  return {
    ...detailsData.result,
    reviews: reviewsData.result?.reviews || []
  };
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
