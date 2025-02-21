export const MAIN_LOCATIONS = [
  'denver',
  'boulder',
  'arvada',
  'fort-collins'
];

export const LOCATION_MAPPING = {
  'erie': 'boulder',
  'arvada': 'arvada',
  'aurora': 'denver',
  'denver': 'denver',
  'golden': 'denver',
  'boulder': 'boulder',
  'longmont': 'boulder',
  'frederick': 'denver',
  'broomfield': 'arvada',
  'westminster': 'arvada',
  'fort-collins': 'fort-collins',
  'eastlake': 'denver',
  'superior': 'boulder',
  'thornton': 'denver',
  'greeley': 'fort-collins',
  'loveland': 'fort-collins',
  'estes-park': 'fort-collins',
  'wheat-ridge': 'denver',
  'commerce-city': 'denver',
  'louisville': 'boulder',
  'niwot': 'boulder'
};

export const CORE_LOCATIONS = Object.keys(LOCATION_MAPPING);

export const isValidLocation = (location) => {
  return CORE_LOCATIONS.includes(location?.toLowerCase());
};

export const locationData = {
  'superior': {
    name: 'Superior',
    nearestOffice: 'Boulder',
    distanceFromOffice: 6,
    landmarks: ['Superior Marketplace', 'Coal Creek Trail', 'Davidson Mesa Open Space'],
    neighborhoods: ['Rock Creek', 'Sagamore', 'Original Superior']
  },
  'thornton': {
    name: 'Thornton',
    nearestOffice: 'Arvada',
    distanceFromOffice: 12,
    landmarks: ['Carpenter Recreation Center', 'Margaret W. Carpenter Park', 'Trail Winds Recreation Center'],
    neighborhoods: ['Original Thornton', 'Hunters Glen', 'Thornton Valley']
  },
  'greeley': {
    name: 'Greeley',
    nearestOffice: 'Boulder',
    distanceFromOffice: 43,
    landmarks: ['University of Northern Colorado', 'Island Grove Regional Park', 'Poudre River Trail'],
    neighborhoods: ['Downtown Greeley', 'University District', 'West Greeley']
  },
  'loveland': {
    name: 'Loveland',
    nearestOffice: 'Boulder',
    distanceFromOffice: 35,
    landmarks: ['Benson Sculpture Garden', 'Devil\'s Backbone Open Space', 'Lake Loveland'],
    neighborhoods: ['Downtown Loveland', 'North Lake', 'West Loveland']
  },
  'estes-park': {
    name: 'Estes Park',
    nearestOffice: 'Boulder',
    distanceFromOffice: 40,
    landmarks: ['Rocky Mountain National Park', 'Lake Estes', 'Estes Park Aerial Tramway'],
    neighborhoods: ['Downtown Estes', 'Fall River', 'Mary\'s Lake']
  },
  'wheat-ridge': {
    name: 'Wheat Ridge',
    nearestOffice: 'Arvada',
    distanceFromOffice: 5,
    landmarks: ['Crown Hill Park', 'Anderson Park', 'Wheat Ridge Greenbelt'],
    neighborhoods: ['The Ridge', 'Applewood', 'Paramount Heights']
  },
  'commerce-city': {
    name: 'Commerce City',
    nearestOffice: 'Arvada',
    distanceFromOffice: 15,
    landmarks: ['Rocky Mountain Arsenal National Wildlife Refuge', 'Dick\'s Sporting Goods Park', 'Pioneer Park'],
    neighborhoods: ['Historic Commerce City', 'Reunion', 'Buffalo Run']
  },
  'louisville': {
    name: 'Louisville',
    nearestOffice: 'Boulder',
    distanceFromOffice: 8,
    landmarks: ['Downtown Louisville', 'Coal Creek Golf Course', 'Memory Square Park'],
    neighborhoods: ['Old Town', 'Steel Ranch', 'North End']
  },
  'niwot': {
    name: 'Niwot',
    nearestOffice: 'Boulder',
    distanceFromOffice: 10,
    landmarks: ['Niwot Historic District', 'Left Hand Valley Grange Park', 'Cottonwood Trail'],
    neighborhoods: ['Old Town Niwot', 'Somerset', 'Countryside']
  },
  'erie': {
    name: 'Erie',
    nearestOffice: 'Boulder',
    distanceFromOffice: 12,
    landmarks: ['Erie Community Center', 'Erie Community Park', 'Coal Creek Trail'],
    neighborhoods: ['Historic Downtown Erie', 'Erie Commons', 'Northridge']
  },
  'arvada': {
    name: 'Arvada',
    nearestOffice: 'Arvada',
    distanceFromOffice: 0,
    landmarks: ['Olde Town Arvada', 'Majestic View Nature Center', 'Ralston Creek Trail'],
    neighborhoods: ['Olde Town', 'West Woods', 'Lake Arbor']
  },
  'aurora': {
    name: 'Aurora',
    nearestOffice: 'Arvada',
    distanceFromOffice: 28,
    landmarks: ['Cherry Creek State Park', 'Aurora Reservoir', 'Plains Conservation Center'],
    neighborhoods: ['Southlands', 'Aurora Highlands', 'Murphy Creek']
  },
  'denver': {
    name: 'Denver',
    nearestOffice: 'Arvada',
    distanceFromOffice: 15,
    landmarks: ['Denver Botanic Gardens', 'Washington Park', 'City Park'],
    neighborhoods: ['LoDo', 'Highland', 'Cherry Creek']
  },
  'golden': {
    name: 'Golden',
    nearestOffice: 'Arvada',
    distanceFromOffice: 8,
    landmarks: ['Colorado School of Mines', 'Clear Creek Trail', 'Buffalo Bill Museum'],
    neighborhoods: ['Downtown Golden', 'South Golden', 'Pleasant View']
  },
  'boulder': {
    name: 'Boulder',
    nearestOffice: 'Boulder',
    distanceFromOffice: 0,
    landmarks: ['Chautauqua Park', 'Pearl Street Mall', 'Boulder Creek Path'],
    neighborhoods: ['Downtown Boulder', 'North Boulder', 'South Boulder']
  },
  'longmont': {
    name: 'Longmont',
    nearestOffice: 'Boulder',
    distanceFromOffice: 15,
    landmarks: ['Union Reservoir', 'McIntosh Lake', 'St. Vrain Greenway'],
    neighborhoods: ['Old Town', 'Prospect', 'Southmoor Park']
  },
  'broomfield': {
    name: 'Broomfield',
    nearestOffice: 'Arvada',
    distanceFromOffice: 10,
    landmarks: ['Flatiron Crossing', '1st Bank Center', 'Broomfield Commons'],
    neighborhoods: ['Interlocken', 'Anthem', 'McKay Landing']
  },
  'westminster': {
    name: 'Westminster',
    nearestOffice: 'Arvada',
    distanceFromOffice: 6,
    landmarks: ['Stanley Marketplace', 'Westminster City Park', 'Butterfly Pavilion'],
    neighborhoods: ['The Ranch', 'Legacy Ridge', 'Bradburn']
  },
  'fort-collins': {
    name: 'Fort Collins',
    nearestOffice: 'Boulder',
    distanceFromOffice: 45,
    landmarks: ['Old Town Fort Collins', 'Horsetooth Reservoir', 'Spring Canyon Park'],
    neighborhoods: ['Old Town', 'Midtown', 'Front Range Village']
  },
  'frederick': {
    name: 'Frederick',
    nearestOffice: 'Boulder',
    distanceFromOffice: 20,
    landmarks: ['Frederick Recreation Area', 'Centennial Park', 'Thunder Valley K-8'],
    neighborhoods: ['Wyndham Hill', 'Raspberry Hill', 'Eagle Valley']
  },
  'eastlake': {
    name: 'Eastlake',
    nearestOffice: 'Arvada',
    distanceFromOffice: 8,
    landmarks: ['Eastlake Reservoir', 'Eastlake Station', 'York Street Park'],
    neighborhoods: ['Historic Eastlake', 'Village at Eastlake', 'Lake Avenue']
  }
};

export const getLocationData = (location) => {
  if (!location) return null;
  return locationData[location.toLowerCase()];
};
