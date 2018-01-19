export const digitsAfterDot = (numString, digitsAfterDot) =>
  !numString.toString().includes('.')
    ? numString
    : numString
        .toString()
        .substring(0, numString.toString().indexOf('.') + digitsAfterDot + 1)
