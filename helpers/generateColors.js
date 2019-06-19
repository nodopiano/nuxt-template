import Color from 'color'

export default (baseColor, toBeGenerated) => {
  let baseHsl = Color(baseColor)
    .hsl()
    .array()
  let baseHue = baseHsl[0].toFixed(2)
  let baseSat = baseHsl[1].toFixed(2)

  let colorArray = []

  for (let i = 1; i < toBeGenerated + 1; i++) {
    let light = (85 / toBeGenerated) * i
    colorArray.push(
      Color(`hsl(${baseHue}, ${baseSat}%, ${light}%)`)
        .hex()
        .toString()
    )
  }

  return colorArray
}
