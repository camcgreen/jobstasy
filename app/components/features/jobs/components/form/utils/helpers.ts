export const getCurrentDateTime = (): string => {
  const now: string = new Date().toISOString().slice(0, 16)
  return now
}

export const getSixMonthsFromNowDateTime = (): string => {
  const sixMonthsFromNow: string = new Date(
    new Date().setMonth(new Date().getMonth() + 6)
  )
    .toISOString()
    .slice(0, 16)
  return sixMonthsFromNow
}
