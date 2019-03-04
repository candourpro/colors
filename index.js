import _ from 'lodash'

export default (colors) => ({
  match: (_theme, value, key) => (
    colors && value && key.match(/color|fill/i) && _.has(colors, value)
  ),
  value: (_theme, value) => colors[value],
})
