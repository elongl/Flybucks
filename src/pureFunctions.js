export const digitsAfterDot = (numString, digitsAfterDot = 6) =>
  !numString.toString().includes('.')
    ? numString
    : numString
        .toString()
        .substring(0, numString.toString().indexOf('.') + digitsAfterDot + 1)
