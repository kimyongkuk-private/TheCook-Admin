export default {
  date: state => state.date,
  dateFormatted: state => formatDate(state.date),
  dateParsed: getters => parseDate(getters['feeds/dateFormatted']),
  headers: state => state.headers
}

function formatDate (date) {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${month}/${day}/${year}`
}
function parseDate (date) {
  if (!date) return null

  const [month, day, year] = date.split('/')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
