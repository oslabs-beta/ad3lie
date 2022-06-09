//convert this to json

const timelineData = []
for (let i = 0; i < 50; i++) {
  const obj = {
    x: i,
    y: Math.random() * 100
  }
  timelineData.push(obj)
}

export default timelineData