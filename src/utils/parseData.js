import * as d3 from 'd3';

const randomAroundMean = (mean, deviation) =>
  mean + boxMullerRandom() * deviation;
const boxMullerRandom = () =>
  Math.sqrt(-2.0 * Math.log(Math.random())) *
  Math.cos(2.0 * Math.PI * Math.random());

const today = new Date();

// TYPE: DATE
const formatDate = d3.timeFormat('%m/%d/%Y');
export const getTimelineData = (length = 100) => {
  let lastTemperature = randomAroundMean(70, 20);
  const firstTemperature = d3.timeDay.offset(today, -length);

  return new Array(length).fill(0).map((d, i) => {
    lastTemperature += randomAroundMean(0, 2);
    return {
      date: formatDate(d3.timeDay.offset(firstTemperature, i)),
      temperature: lastTemperature
    };
  });
};

// TYPE: NUMBER
export const getScatterData = (count = 100) =>
  new Array(count).fill(0).map((d, i) => ({
    temperature: randomAroundMean(70, 20),
    humidity: randomAroundMean(0.5, 0.1)
  }));

// ============================================================================================================= //

import { userEnteredData, userAxisData } from './EnteredData.jsx';

// TYPE: NUMBER/STRING ---- BAR CHART
// export const getBarChartData = (xKey, yKey, arr) => {
//   //   // Three Steps
//   //   // 1. Create a Set of Unique Keys
//   let set = new Set()
//   for (const obj of arr) {
//     set.push(obj[xKey]);
//   }
//   // 2. Create an Array to hold the Accumulated Results
//   let aggs = []
//   // 3. Iterate over the set, and use Map and Reduce to create an obj for each xKey
//   for (const key of set) {
//     const agg = arr.map(obj => key === obj[xKey]).reduce((acc, curr) => {
//       return acc + curr[xKey]
//     }, 0)
//     aggs.push(agg);
//   }
//   return aggs
// }

// console.log(getBarChartData("species","body_mass_g",userEnteredData))

// REDUCE GOD
// const test = (xKey, yKey, data) => {
//   const arrOfObj = Array.from(
//     data.reduce((m, { xKey, yKey }) =>
//         m.set(xKey, (m.get(xKey) || 0) + yKey),
//       new Map()
//     ),
//     ([xKey, yKey]) => ({ xKey, yKey })
//   );

//   return arrOfObj;
// }

export const getBarChartData = (data, xKey, yKey) => {
  const arrOfObj = Array.from(
    data
      .reduce((acc, { value, ...r }) => {
        const key = JSON.stringify(r);
        // console.log('key', key);
        const current = acc.get(key) || { ...r };
        return acc.set(key, { ...current });
      }, new Map())
      .values()
  );
  return arrOfObj;
};

// Works for reducing an array of objects, grouped by two keys
/** Ex. Group by Species and Body_mass_g
   * [ { species: 'Gentoo', body_mass_g: 392350 },
    { species: 'Adelie', body_mass_g: 10100 } ]
  */
const sampleData = [
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
    species: 'Chinstrap',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.1,
    flipper_length_mm: 186,
    body_mass_g: 3300,
    sex: null
  },
  {
    species: 'Emperor',
    island: 'Torgersen',
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.3,
    flipper_length_mm: 180,
    body_mass_g: 3700,
    sex: null
  }
];

export const getBarChartData2 = (data, xKey, yKey) => {
  // const data = JSON.parse(stringifiedData);
  const result = [];
  data.reduce(function (acc, curr) {
    if (!acc[curr[xKey]]) {
      acc[curr[xKey]] = { [xKey]: curr[xKey], [yKey]: 0 };
      result.push(acc[curr[xKey]]);
    }
    acc[curr[xKey]][yKey] += curr[yKey];
    return acc;
  }, []);
  console.log(result);
  return result;
};

// console.log(getBarChartData2(sampleData, 'species', 'body_mass_g'));

// console.log(
//   'this is reduce BarChartData',
//   getBarChartData('species', 'body_mass_g', userEnteredData)
// );

//   const penguins = Array.from(
//   data.reduce(
//     (m, { species, body_mass_g }) =>
//       m.set(species, (m.get(species) || 0) + body_mass_g),
//     new Map()
//   ),
//   ([species, body_mass_g]) => ({ species, body_mass_g })
// );

//   console.log('arr: ', arr)
//   console.log('xKey ', xKey)
//   // console.log(' ', )
//   const cache = {}
//   const result = arr.reduce((acc, curr) => {
//     console.log('acc', acc)
//     if (curr[xKey] in cache) {
//       return acc[cache[xKey]][yKey] += curr[yKey]
//     }
//     // else add to cache and accumulator
//     // ex) curr[xKey] = "Adelie"
//     //     cache["Adelie"] = length of cache properties ?????????
//     cache[curr[xKey]] = Object.keys(cache).length;
//     return acc.push(curr)
//   }, [])
//   return resut;
// }
// reached algos part of the project :upside_down_face:. Given an array of objects, how do you find the total for each unique x-value?
// Result should be [{“species”: “Adelie”, “body_mass_g”: 7200}, {“species”: “Gentoo”, “body_mass_g”: 10950}]
/*
[
  {
    "species": "Adelie",
    "body_mass_g": 3750,
  },
  {
    "species": "Adelie",
    "body_mass_g": 3450,
},
    {
    "species": "Gentoo",
    "body_mass_g": 5750,
  },
  {
    "species": "Gentoo",
    "body_mass_g": 5200,
  }
]
  */

// TYPE: NUMBERS ---- LINE GRAPHS (ORDERED)

export const getUONumData = (
  userAxis = userAxisData,
  count = userEnteredData.length
) => {
  return new Array(count).fill({}).map((d, i) => ({
    [userAxis['x']]: userEnteredData[i][userAxis['x']],
    [userAxis['y']]: userEnteredData[i][userAxis['y']]
  }));
};

// TYPE: DATE ---- TIMELINE
export const getTimelineData3 = (
  length = userEnteredData.length,
  userAxis = userAxisData
) => {
  return new Array(length).fill({}).map((d, i) => ({
    [userAxis['x']]: new Date(userEnteredData[i][userAxis['x']]),
    [userAxis['y']]: userEnteredData[i][userAxis['y']]
  }));
};
// console.log('gettimelineData', getTimelineData3());

// TYPE: NUMBERS ---- LINE GRAPHS (ORDERED)
const objectComparisonCallback = (arrayItemA, arrayItemB) => {
  if (arrayItemA[userAxisData['x']] < arrayItemB[userAxisData['x']]) return -1;
  if (arrayItemA[userAxisData['x']] > arrayItemB[userAxisData['x']]) return 1;
  return 0;
};
userEnteredData.sort(objectComparisonCallback);

export const getNumbersData = (
  userAxis = userAxisData,
  count = userEnteredData.length
) => {
  return new Array(count).fill({}).map((d, i) => ({
    [userAxis['x']]: userEnteredData[i][userAxis['x']],
    [userAxis['y']]: userEnteredData[i][userAxis['y']]
  }));
};
