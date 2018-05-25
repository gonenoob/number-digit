const isNumber = require('isnumber')
const language = 'en'

//最小整数位数
function minInt(num, len) {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(len, 1, 21)) {
    return
  }

  return num.toLocaleString(language, {
    minimumIntegerDigits: len,
    maximumFractionDigits: 20,
    useGrouping: false
  })
}

//最小小数位数
function minDec(num, len) {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(len, 0, 20)) {
    return
  }

  if (len <= 3) {
    return String(num)
  }

  return num.toLocaleString(language, {
    minimumFractionDigits: len,
    useGrouping: false
  })
}

//最多小数位数
function maxDec(num, len) {
  if (!isNumber(num)) {
    return
  }

  if (!isIntAndRange(len, 0, 20)) {
    return
  }

  return num.toLocaleString(language, {
    maximumFractionDigits: len,
    useGrouping: false
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

module.exports = {
  minInt,
  minDec,
  maxDec
}