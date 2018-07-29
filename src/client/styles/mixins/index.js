const themes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  invalid: (value) => ({
    theme: `invalid value: ${value}`
  })
}

exports.theme = (value, rule) => {
  return value in themes ? themes[value] : themes.invalid(value)
}
