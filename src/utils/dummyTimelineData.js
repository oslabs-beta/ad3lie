// This generates random fake data to show for linechart
const fakeTimelineData = () => {
  const timelineData = []
  for (let i = 0; i < 50; i++) {
    const obj = {
      x: i,
      y: Math.random() * 100
    }
    timelineData.push(obj)
  }
  return timelineData
}

export default fakeTimelineData