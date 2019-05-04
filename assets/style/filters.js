import format from 'date-fns/format'
import numeral from 'numeral'

numeral.register('locale', 'it', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? '' : ''
  },
  currency: {
    symbol: '€'
  }
})

// switch between locales
numeral.locale('it')

export const dmy = (date) => date ? format(date, 'DD-MM-YYYY') : ''
export const ymd = (date) => date ? format(date, 'YYYY-MM-DD') : ''
export const time = (date) => date ? format(date, 'HH:mm:ss') : ''
export const dec2 = (number) => {
  const ret = number ? numeral(number).format('0,0.00') : ''
  return ret
}
