export const CORE_LOCATIONS = [
  'erie',
  'arvada',
  'aurora',
  'denver',
  'golden',
  'boulder',
  'longmont',
  'frederick',
  'broomfield',
  'westminster',
  'fort-collins', 
  'eastlake'
];

export const isValidLocation = (location) => {
  return CORE_LOCATIONS.includes(location?.toLowerCase());
};

export const locationData = {
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
    nearestOffice: 'Boulder',
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
    nearestOffice: 'Boulder',
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
