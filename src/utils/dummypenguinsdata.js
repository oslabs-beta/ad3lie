//convert this to json

export const sampleData = [
  {
    species: 'Adelie',
    island: 'Torgersen',
    culmen_length_mm: 39.2,
    culmen_depth_mm: 19.6,
    flipper_length_mm: 195,
    body_mass_g: 4675,
    sex: 'MALE'
  },
  {
    species: 'Gentoo',
    island: 'Torgersen',
    culmen_length_mm: 34.1,
    culmen_depth_mm: 18.1,
    flipper_length_mm: 193,
    body_mass_g: 3475,
    sex: null
  },
  {
    species: 'Emperor',
    island: 'Torgersen',
    culmen_length_mm: 42,
    culmen_depth_mm: 20.2,
    flipper_length_mm: 190,
    body_mass_g: 4250,
    sex: null
  },
  {
    species: 'Fairy',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.1,
    flipper_length_mm: 186,
    body_mass_g: 3300,
    sex: null
  },
  {
    species: 'Rock',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.3,
    flipper_length_mm: 180,
    body_mass_g: 3700,
    sex: null
  }
];

let xKey = 'species';
let yKey = 'body_mass_g';

const getLineChartData = (data, xKey, yKey) => {
  const result = [];
  data.reduce(function (acc, curr) {
    if (!acc[curr[xKey]]) {
      acc[curr[xKey]] = { [xKey]: curr[xKey], [yKey]: 0 };
      result.push(acc[curr[xKey]]);
    }
    acc[curr[xKey]][yKey] += curr[yKey];
    return acc;
  }, []);
  return result;
};
// console.log(getLineChartData(penguins, 'species', 'body_mass_g'));
