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
    species: 'fuck',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.1,
    flipper_length_mm: 186,
    body_mass_g: 3300,
    sex: null
  },
  {
    species: 'me',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.3,
    flipper_length_mm: 180,
    body_mass_g: 3700,
    sex: null
  }
];
// console.log(penguins.map((el) => el.species));

// var groupBy = function (data, key) {
//   // `data` is an array of objects, `key` is the key (or property accessor) to group by
//   // reduce runs this anonymous function on each element of `data` (the `item` parameter,
//   // returning the `storage` parameter at the end
//   return data.reduce(function (storage, item) {
//     // get the first instance of the key by which we're grouping
//     var group = item[key];

//     // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
//     storage[group] = storage[group] || [];

//     // add this item to its group within `storage`
//     storage[group].push(item);

//     // return the updated storage to the reduce function, which will then loop through the next
//     return storage;
//   }, {}); // {} is the initial curr of the storage
// };

// var groupBy = function (xs, key1, key2) {
//   return xs.reduce(function (rv, x) {
//     (rv[x[key1] + "," + x[key2]] = rv[x[key1] + "," + x[key2]] || []).push(x);
//     return rv;
//   }, {});
// };

// console.log(groupBy(penguins, "sex", "species"))

// const result = [];
// const r = penguins.reduce(function (res, curr) {
//   if (!res[curr.species]) {
//     res[curr.species] = { species: curr.species, body_mass_g: 0 };
//     result.push(res[curr.species]);
//   }
//   res[curr.species].body_mass_g += curr.body_mass_g;
//   return res;
// }, [])

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
