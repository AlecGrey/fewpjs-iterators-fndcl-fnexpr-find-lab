const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arrayOfObjects) => {
  // object: {year: "2018", result: "L"}
  const result = arrayOfObjects.find(object => object.result === "W")
  
  return !!result ? result.year : undefined
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

console.log(superbowlWin(record))
