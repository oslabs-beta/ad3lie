import * as d3 from "d3"
import PropTypes from "prop-types";

const randomAroundMean = (mean, deviation) => mean + boxMullerRandom() * deviation
const boxMullerRandom = () => (
  Math.sqrt(-2.0 * Math.log(Math.random())) * 
  Math.cos(2.0 * Math.PI * Math.random())
)

const today = new Date()

// TYPE: DATE
const formatDate = d3.timeFormat("%m/%d/%Y")
export const getTimelineData = (length = 100) => {
  let lastTemperature = randomAroundMean(70, 20)
  const firstTemperature = d3.timeDay.offset(today, -length)

  return new Array(length).fill(0).map((d, i) => {
    lastTemperature += randomAroundMean(0, 2)
    return {
      date: formatDate(d3.timeDay.offset(firstTemperature, i)),
      temperature: lastTemperature,
    }
  })
}

// TYPE: NUMBER
export const getScatterData = (count = 100) => (
  new Array(count).fill(0).map((d, i) => ({
    temperature: randomAroundMean(70, 20),
    humidity: randomAroundMean(0.5, 0.1),
  }))
)


// ============================================================================================================= //
import { userEnteredData, userAxisData } from "../components/Charts/ScatterPlot/EnteredData";

// TYPE: NUMBER/STRING ---- BAR CHART
export const getBarChartData = (arrOfObj = userEnteredData, userAxis = userAxisData, count = userEnteredData.length) => {
  const cache = {};

  return () => {
    const cache = {}
    const result = arr.reduce((acc, curr) => {
      if (curr[userAxis["x2"]] in cache) {
        return acc[cache[userAxis["x2"]]][userAxis["y"]] += curr[userAxis["y"]]
      }
      // else add to cache and accumulator
      cache[curr[userAxis["x2"]]] = Object.keys(cache).length;
      return acc.push(curr)
    }, [])
    return result;
  };
}

console.log(getBarChartData())

// TYPE: NUMBERS ---- LINE GRAPHS (ORDERED)

export const getUONumData = (userAxis = userAxisData, count = userEnteredData.length) => {
  return (new Array(count).fill({}).map((d, i) => ({
    [userAxis["x"]]: userEnteredData[i][userAxis["x"]],
    [userAxis["y"]]: userEnteredData[i][userAxis["y"]]
  }))
  )
}

// TYPE: DATE ---- TIMELINE
export const getTimelineData3 = (length = userEnteredData.length, userAxis = userAxisData) => {

  return (new Array(length).fill({}).map((d, i) => ({
    [userAxis["x"]]: new Date(userEnteredData[i][userAxis["x"]]),
    [userAxis["y"]]: userEnteredData[i][userAxis["y"]]
  }))
  )
}
console.log("gettimelineData", getTimelineData3())

// TYPE: NUMBERS ---- LINE GRAPHS (ORDERED)
const objectComparisonCallback = (arrayItemA, arrayItemB) => {
  if (arrayItemA[userAxisData["x"]] < arrayItemB[userAxisData["x"]]) return -1;
  if (arrayItemA[userAxisData["x"]] > arrayItemB[userAxisData["x"]]) return 1;
  return 0
}
userEnteredData.sort(objectComparisonCallback)

export const getNumbersData = (userAxis = userAxisData, count = userEnteredData.length) => {
  return (new Array(count).fill({}).map((d, i) => ({
    [userAxis["x"]]: userEnteredData[i][userAxis["x"]],
    [userAxis["y"]]: userEnteredData[i][userAxis["y"]]
  }))
  )
}
