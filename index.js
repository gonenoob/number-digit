const isNumber = require('isnumber')
const language = 'en'

//最小整数位数
export const minInt = (num, len) => {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(num, 1, 21)) {
    return
  }

  return num.toLocaleString(language, {
    minimumIntegerDigits: len
  })
}

//最小小数位数
export const minDec = (num, len) => {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(num, 0, 20)) {
    return
  }

  return num.toLocaleString(language, {
    minimumFractionDigits: len
  })
}

//最多小数位数
export const maxDec = (num, len) => {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(num, 0, 20)) {
    return
  }

  return num.toLocaleString(language, {
    maximumFractionDigits: len
  })
}

export const MinDig = (num, len) => {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(num, 0, 21)) {
    return
  }

  return num.toLocaleString(language, {
    minimumSignificantDigits: len
  })
}

export const MaxDig = (num, len) => {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(num, 0, 21)) {
    return
  }

  return num.toLocaleString(language, {
    maximumSignificantDigits: len
  })
}

function isIntAndRange(num, min, max) {
  if (!isNumber(num)) {
    return false
  }

  if (Number.isInteger(num) && num >= min && num <= max) {
    return true
  }

  return false
}