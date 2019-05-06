import _cloneDeep from 'lodash/cloneDeep'
import _isEmpty from 'lodash/isEmpty'
import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'
import _startsWith from 'lodash/startsWith'
import _keys from 'lodash/keys'


import {mockApp, rowsPerPageItems} from '../storeimp/api/api-properties'

export const state = () => {
  return {
    comboOptions: [],
    comboSelected: null,
    list: [],
    cacheList: false,
    record: {},
    $record: {},
    filter: {},
    resetFilter: {},
    filterActive: false,
    mountingForm: false,
    grid: {
      paginate: true,
      pagination: {sortBy: '', descending: false, page: 1, rowsPerPage: rowsPerPageItems[0]},
      totalItems: 0,
      loading: false
    },
    form: {valid: false, dirty: false},
    search: {criteria: ''},
    mode: 'list',
    countries: [
          {'name': 'Afghanistan', 'code': 'AF'},
          {'name': 'Åland Islands', 'code': 'AX'},
          {'name': 'Albania', 'code': 'AL'},
          {'name': 'Algeria', 'code': 'DZ'},
          {'name': 'American Samoa', 'code': 'AS'},
          {'name': 'AndorrA', 'code': 'AD'},
          {'name': 'Angola', 'code': 'AO'},
          {'name': 'Anguilla', 'code': 'AI'},
          {'name': 'Antarctica', 'code': 'AQ'},
          {'name': 'Antigua and Barbuda', 'code': 'AG'},
          {'name': 'Argentina', 'code': 'AR'},
          {'name': 'Armenia', 'code': 'AM'},
          {'name': 'Aruba', 'code': 'AW'},
          {'name': 'Australia', 'code': 'AU'},
          {'name': 'Austria', 'code': 'AT'},
          {'name': 'Azerbaijan', 'code': 'AZ'},
          {'name': 'Bahamas', 'code': 'BS'},
          {'name': 'Bahrain', 'code': 'BH'},
          {'name': 'Bangladesh', 'code': 'BD'},
          {'name': 'Barbados', 'code': 'BB'},
          {'name': 'Belarus', 'code': 'BY'},
          {'name': 'Belgium', 'code': 'BE'},
          {'name': 'Belize', 'code': 'BZ'},
          {'name': 'Benin', 'code': 'BJ'},
          {'name': 'Bermuda', 'code': 'BM'},
          {'name': 'Bhutan', 'code': 'BT'},
          {'name': 'Bolivia', 'code': 'BO'},
          {'name': 'Bosnia and Herzegovina', 'code': 'BA'},
          {'name': 'Botswana', 'code': 'BW'},
          {'name': 'Bouvet Island', 'code': 'BV'},
          {'name': 'Brazil', 'code': 'BR'},
          {'name': 'British Indian Ocean Territory', 'code': 'IO'},
          {'name': 'Brunei Darussalam', 'code': 'BN'},
          {'name': 'Bulgaria', 'code': 'BG'},
          {'name': 'Burkina Faso', 'code': 'BF'},
          {'name': 'Burundi', 'code': 'BI'},
          {'name': 'Cambodia', 'code': 'KH'},
          {'name': 'Cameroon', 'code': 'CM'},
          {'name': 'Canada', 'code': 'CA'},
          {'name': 'Cape Verde', 'code': 'CV'},
          {'name': 'Cayman Islands', 'code': 'KY'},
          {'name': 'Central African Republic', 'code': 'CF'},
          {'name': 'Chad', 'code': 'TD'},
          {'name': 'Chile', 'code': 'CL'},
          {'name': 'China', 'code': 'CN'},
          {'name': 'Christmas Island', 'code': 'CX'},
          {'name': 'Cocos (Keeling) Islands', 'code': 'CC'},
          {'name': 'Colombia', 'code': 'CO'},
          {'name': 'Comoros', 'code': 'KM'},
          {'name': 'Congo', 'code': 'CG'},
          {'name': 'Congo, The Democratic Republic of the', 'code': 'CD'},
          {'name': 'Cook Islands', 'code': 'CK'},
          {'name': 'Costa Rica', 'code': 'CR'},
          {'name': 'Cote D\'Ivoire', 'code': 'CI'},
          {'name': 'Croatia', 'code': 'HR'},
          {'name': 'Cuba', 'code': 'CU'},
          {'name': 'Cyprus', 'code': 'CY'},
          {'name': 'Czech Republic', 'code': 'CZ'},
          {'name': 'Denmark', 'code': 'DK'},
          {'name': 'Djibouti', 'code': 'DJ'},
          {'name': 'Dominica', 'code': 'DM'},
          {'name': 'Dominican Republic', 'code': 'DO'},
          {'name': 'Ecuador', 'code': 'EC'},
          {'name': 'Egypt', 'code': 'EG'},
          {'name': 'El Salvador', 'code': 'SV'},
          {'name': 'Equatorial Guinea', 'code': 'GQ'},
          {'name': 'Eritrea', 'code': 'ER'},
          {'name': 'Estonia', 'code': 'EE'},
          {'name': 'Ethiopia', 'code': 'ET'},
          {'name': 'Falkland Islands (Malvinas)', 'code': 'FK'},
          {'name': 'Faroe Islands', 'code': 'FO'},
          {'name': 'Fiji', 'code': 'FJ'},
          {'name': 'Finland', 'code': 'FI'},
          {'name': 'France', 'code': 'FR'},
          {'name': 'French Guiana', 'code': 'GF'},
          {'name': 'French Polynesia', 'code': 'PF'},
          {'name': 'French Southern Territories', 'code': 'TF'},
          {'name': 'Gabon', 'code': 'GA'},
          {'name': 'Gambia', 'code': 'GM'},
          {'name': 'Georgia', 'code': 'GE'},
          {'name': 'Germany', 'code': 'DE'},
          {'name': 'Ghana', 'code': 'GH'},
          {'name': 'Gibraltar', 'code': 'GI'},
          {'name': 'Greece', 'code': 'GR'},
          {'name': 'Greenland', 'code': 'GL'},
          {'name': 'Grenada', 'code': 'GD'},
          {'name': 'Guadeloupe', 'code': 'GP'},
          {'name': 'Guam', 'code': 'GU'},
          {'name': 'Guatemala', 'code': 'GT'},
          {'name': 'Guernsey', 'code': 'GG'},
          {'name': 'Guinea', 'code': 'GN'},
          {'name': 'Guinea-Bissau', 'code': 'GW'},
          {'name': 'Guyana', 'code': 'GY'},
          {'name': 'Haiti', 'code': 'HT'},
          {'name': 'Heard Island and Mcdonald Islands', 'code': 'HM'},
          {'name': 'Holy See (Vatican City State)', 'code': 'VA'},
          {'name': 'Honduras', 'code': 'HN'},
          {'name': 'Hong Kong', 'code': 'HK'},
          {'name': 'Hungary', 'code': 'HU'},
          {'name': 'Iceland', 'code': 'IS'},
          {'name': 'India', 'code': 'IN'},
          {'name': 'Indonesia', 'code': 'ID'},
          {'name': 'Iran, Islamic Republic Of', 'code': 'IR'},
          {'name': 'Iraq', 'code': 'IQ'},
          {'name': 'Ireland', 'code': 'IE'},
          {'name': 'Isle of Man', 'code': 'IM'},
          {'name': 'Israel', 'code': 'IL'},
          {'name': 'Italy', 'code': 'IT'},
          {'name': 'Jamaica', 'code': 'JM'},
          {'name': 'Japan', 'code': 'JP'},
          {'name': 'Jersey', 'code': 'JE'},
          {'name': 'Jordan', 'code': 'JO'},
          {'name': 'Kazakhstan', 'code': 'KZ'},
          {'name': 'Kenya', 'code': 'KE'},
          {'name': 'Kiribati', 'code': 'KI'},
          {'name': 'Korea, Democratic People/S Republic of', 'code': 'KP'},
          {'name': 'Korea, Republic of', 'code': 'KR'},
          {'name': 'Kuwait', 'code': 'KW'},
          {'name': 'Kyrgyzstan', 'code': 'KG'},
          {'name': 'Lao People/S Democratic Republic', 'code': 'LA'},
          {'name': 'Latvia', 'code': 'LV'},
          {'name': 'Lebanon', 'code': 'LB'},
          {'name': 'Lesotho', 'code': 'LS'},
          {'name': 'Liberia', 'code': 'LR'},
          {'name': 'Libyan Arab Jamahiriya', 'code': 'LY'},
          {'name': 'Liechtenstein', 'code': 'LI'},
          {'name': 'Lithuania', 'code': 'LT'},
          {'name': 'Luxembourg', 'code': 'LU'},
          {'name': 'Macao', 'code': 'MO'},
          {'name': 'Macedonia, The Former Yugoslav Republic of', 'code': 'MK'},
          {'name': 'Madagascar', 'code': 'MG'},
          {'name': 'Malawi', 'code': 'MW'},
          {'name': 'Malaysia', 'code': 'MY'},
          {'name': 'Maldives', 'code': 'MV'},
          {'name': 'Mali', 'code': 'ML'},
          {'name': 'Malta', 'code': 'MT'},
          {'name': 'Marshall Islands', 'code': 'MH'},
          {'name': 'Martinique', 'code': 'MQ'},
          {'name': 'Mauritania', 'code': 'MR'},
          {'name': 'Mauritius', 'code': 'MU'},
          {'name': 'Mayotte', 'code': 'YT'},
          {'name': 'Mexico', 'code': 'MX'},
          {'name': 'Micronesia, Federated States of', 'code': 'FM'},
          {'name': 'Moldova, Republic of', 'code': 'MD'},
          {'name': 'Monaco', 'code': 'MC'},
          {'name': 'Mongolia', 'code': 'MN'},
          {'name': 'Montserrat', 'code': 'MS'},
          {'name': 'Morocco', 'code': 'MA'},
          {'name': 'Mozambique', 'code': 'MZ'},
          {'name': 'Myanmar', 'code': 'MM'},
          {'name': 'Namibia', 'code': 'NA'},
          {'name': 'Nauru', 'code': 'NR'},
          {'name': 'Nepal', 'code': 'NP'},
          {'name': 'Netherlands', 'code': 'NL'},
          {'name': 'Netherlands Antilles', 'code': 'AN'},
          {'name': 'New Caledonia', 'code': 'NC'},
          {'name': 'New Zealand', 'code': 'NZ'},
          {'name': 'Nicaragua', 'code': 'NI'},
          {'name': 'Niger', 'code': 'NE'},
          {'name': 'Nigeria', 'code': 'NG'},
          {'name': 'Niue', 'code': 'NU'},
          {'name': 'Norfolk Island', 'code': 'NF'},
          {'name': 'Northern Mariana Islands', 'code': 'MP'},
          {'name': 'Norway', 'code': 'NO'},
          {'name': 'Oman', 'code': 'OM'},
          {'name': 'Pakistan', 'code': 'PK'},
          {'name': 'Palau', 'code': 'PW'},
          {'name': 'Palestinian Territory, Occupied', 'code': 'PS'},
          {'name': 'Panama', 'code': 'PA'},
          {'name': 'Papua New Guinea', 'code': 'PG'},
          {'name': 'Paraguay', 'code': 'PY'},
          {'name': 'Peru', 'code': 'PE'},
          {'name': 'Philippines', 'code': 'PH'},
          {'name': 'Pitcairn', 'code': 'PN'},
          {'name': 'Poland', 'code': 'PL'},
          {'name': 'Portugal', 'code': 'PT'},
          {'name': 'Puerto Rico', 'code': 'PR'},
          {'name': 'Qatar', 'code': 'QA'},
          {'name': 'Reunion', 'code': 'RE'},
          {'name': 'Romania', 'code': 'RO'},
          {'name': 'Russian Federation', 'code': 'RU'},
          {'name': 'RWANDA', 'code': 'RW'},
          {'name': 'Saint Helena', 'code': 'SH'},
          {'name': 'Saint Kitts and Nevis', 'code': 'KN'},
          {'name': 'Saint Lucia', 'code': 'LC'},
          {'name': 'Saint Pierre and Miquelon', 'code': 'PM'},
          {'name': 'Saint Vincent and the Grenadines', 'code': 'VC'},
          {'name': 'Samoa', 'code': 'WS'},
          {'name': 'San Marino', 'code': 'SM'},
          {'name': 'Sao Tome and Principe', 'code': 'ST'},
          {'name': 'Saudi Arabia', 'code': 'SA'},
          {'name': 'Senegal', 'code': 'SN'},
          {'name': 'Serbia and Montenegro', 'code': 'CS'},
          {'name': 'Seychelles', 'code': 'SC'},
          {'name': 'Sierra Leone', 'code': 'SL'},
          {'name': 'Singapore', 'code': 'SG'},
          {'name': 'Slovakia', 'code': 'SK'},
          {'name': 'Slovenia', 'code': 'SI'},
          {'name': 'Solomon Islands', 'code': 'SB'},
          {'name': 'Somalia', 'code': 'SO'},
          {'name': 'South Africa', 'code': 'ZA'},
          {'name': 'South Georgia and the South Sandwich Islands', 'code': 'GS'},
          {'name': 'Spain', 'code': 'ES'},
          {'name': 'Sri Lanka', 'code': 'LK'},
          {'name': 'Sudan', 'code': 'SD'},
          {'name': 'Suriname', 'code': 'SR'},
          {'name': 'Svalbard and Jan Mayen', 'code': 'SJ'},
          {'name': 'Swaziland', 'code': 'SZ'},
          {'name': 'Sweden', 'code': 'SE'},
          {'name': 'Switzerland', 'code': 'CH'},
          {'name': 'Syrian Arab Republic', 'code': 'SY'},
          {'name': 'Taiwan, Province of China', 'code': 'TW'},
          {'name': 'Tajikistan', 'code': 'TJ'},
          {'name': 'Tanzania, United Republic of', 'code': 'TZ'},
          {'name': 'Thailand', 'code': 'TH'},
          {'name': 'Timor-Leste', 'code': 'TL'},
          {'name': 'Togo', 'code': 'TG'},
          {'name': 'Tokelau', 'code': 'TK'},
          {'name': 'Tonga', 'code': 'TO'},
          {'name': 'Trinidad and Tobago', 'code': 'TT'},
          {'name': 'Tunisia', 'code': 'TN'},
          {'name': 'Turkey', 'code': 'TR'},
          {'name': 'Turkmenistan', 'code': 'TM'},
          {'name': 'Turks and Caicos Islands', 'code': 'TC'},
          {'name': 'Tuvalu', 'code': 'TV'},
          {'name': 'Uganda', 'code': 'UG'},
          {'name': 'Ukraine', 'code': 'UA'},
          {'name': 'United Arab Emirates', 'code': 'AE'},
          {'name': 'United Kingdom', 'code': 'GB'},
          {'name': 'United States', 'code': 'US'},
          {'name': 'United States Minor Outlying Islands', 'code': 'UM'},
          {'name': 'Uruguay', 'code': 'UY'},
          {'name': 'Uzbekistan', 'code': 'UZ'},
          {'name': 'Vanuatu', 'code': 'VU'},
          {'name': 'Venezuela', 'code': 'VE'},
          {'name': 'Viet Nam', 'code': 'VN'},
          {'name': 'Virgin Islands, British', 'code': 'VG'},
          {'name': 'Virgin Islands, U.S.', 'code': 'VI'},
          {'name': 'Wallis and Futuna', 'code': 'WF'},
          {'name': 'Western Sahara', 'code': 'EH'},
          {'name': 'Yemen', 'code': 'YE'},
          {'name': 'Zambia', 'code': 'ZM'},
          {'name': 'Zimbabwe', 'code': 'ZW'}
      ]
  }
}

const root = {root: true}

export const actionsFn = (endPoint, apiRoute = '/res', extractResult = true, options = {}) => {
  if (mockApp) {
    apiRoute = ''
    extractResult = true
  }
  return {
    info ({dispatch}, payload) {
      console.log('info')
      console.dir(payload)
    },
    save ({dispatch, commit, state, getters}, {data, id, options = {}}) {
      if (!mockApp) {
        let ndata = {}
        ndata[endPoint + 's'] = [data]
        data = ndata
      }

      if (getters.isAddMode) {
        return dispatch('insert', {data, options})
      } else {
        return dispatch('update', {data, id, options})
      }
    },
    delete ({dispatch, commit, state}, {item, idName, options = {}}) {
      const id = item[idName]
      if (mockApp) {
        console.log('-----', idName)
        console.dir(item)
      }
      const url = `/res/del/${endPoint}/${id}`
      return dispatch('api/post', {url, options}, root)
        .then(() => {
          const index = state.list.findIndex(o => o[idName] === id)
          if (index >= 0) commit('removeListItem', index)
        })
    },
    update ({dispatch, commit, state}, {data, id, options = {}}) {
      const url = `/res/put/${endPoint}/${id}`
      return dispatch('api/post', {url, data, options}, root)
        .then(r => {
          if (mockApp) return r
          else return r[endPoint + 's']
        })
    },
    insert ({dispatch, commit}, {data, options = {}}) {
      const url = '/res/' + endPoint
      return dispatch('api/post', {url, data, options}, root)
        .then(r => {
          if (mockApp) return r
          else return r[endPoint + 's']
        })
    },
    find ({commit, dispatch, state}) {
      return dispatch('api/get', {url: `${apiRoute}/${endPoint}?search=${state.search.criteria}`}, {root: true})
        .then(result => {
          commit('setList', result.data)
        })
    },
    loadOptions ({dispatch, commit}, {id = null, options = {}}) {
      return dispatch('api/get', {url: `${apiRoute}/${endPoint}_opt`, options, debug: false}, root)
        .then(res => {
          if (extractResult) commit('setComboOptions', res.data[`${endPoint}s`])
          else commit('setComboOptions', res.data)
          return res
        })
    },
    load ({dispatch, commit, state}, {id = null, force = false, options = {}}) {
      if (id === null) {
        if (force) {
          commit('setCacheList', false)
        }

        if (state.cacheList) {
          return Promise.resolve({})
        }
        // let filter = ''
        // let {sortBy, descending, page, rowsPerPage} = state.grid.pagination

        // let url = `/${endPoint}?f=${filter}&sort=${sortBy}&desc=${descending}&page=${page},perPage=${rowsPerPage}`
        let url = `${apiRoute}/${endPoint}`

        // if (mockApp) url = `http://localhodt${endPoint}`

        return dispatch('api/get', {url, options, debug: false}, root)
          .then(res => {
            console.log(endPoint)
            if (mockApp) {
              console.dir(res.data)
            }
            if (extractResult) commit('setList', res.data[`${endPoint}s`])
            else commit('setList', res.data)
            commit('setCacheList', true)
            return res
          })
      } else {
        return dispatch('api/get', {url: `${apiRoute}/${endPoint}/${id}`, options}, root)
          .then(res => {commit('setRecord', res.data)
            return res
          })
      }
    }
  }
}

export const mutations = {
  setFilterActive (s, p) {
    s.filterActive = p
    if (!p) s.filter = _cloneDeep(s.resetFilter)

    s.grid.pagination.page = 1
  },
  removeListItem (s, index) {
    s.list.splice(index, 1)
    console.log(index, s.list)
  },
  setCacheList (s, p) { s.cacheList = p },
  setFilter (s, p) { s.filter = p },
  setResetFilter (s, p) { s.resetFilter = p },
  resetFilter (s) { s.filter = _cloneDeep(s.resetFilter) },
  setComboOptions (s, p) { s.comboOptions = p },
  setMountingForm (s, p) { s.mountingForm = p },
  setComboSelected (s, p) { s.comboSelected = p },
  setList (s, p) {
    s.list = p
  },
  setGrid (s, p) { s.grid = p },
  setPaginateGrid (s, p) { s.grid.paginate = p },
  setPagination (s, p) { s.grid.pagination = p },
  setLoading (s, p) { s.grid.loading = p },
  setRecord (s, p) {
    s.record = _cloneDeep(p)
    s.$record = _cloneDeep(p)
  },
  set$Record (s, p) { s.$record = _cloneDeep(p) },
  setMode (s, p) { s.mode = p },
  setForm (s, p) { s.form = p },
  setFormValid (s, p) { s.form.valid = p },
  setFormDirty (s, p) { s.form.dirty = p },
  setListMode (s) { s.mode = 'list' },
  setViewMode (s) { s.mode = 'view' },
  setEditMode (s) { s.mode = 'edit' },
  setAddMode (s) { s.mode = 'add' },
  setSearchMode (s) { s.mode = 'search' }
}

export const getters = {
  filteredList: s => {
    if (!s.filterActive) return s.list
    if (_isEmpty(s.filter)) return s.list

    const filterKeys = _keys(s.filter)
    return s.list.filter(a => {
      for (let i = 0; i < filterKeys.length; i++) {
        let key = filterKeys[i]
        let f = s.filter[key]
        let aValue = a[key]
        if (_isArray(f)) {
          if (_isString(aValue)) aValue = aValue.substr(0, 10)
          let fromdt = '1900-01-01'
          let todt = '2900-01-01'

          if (f[0] !== null) fromdt = f[0]
          if (f[1] !== null) todt = f[1]

          if (fromdt > aValue) return false
          if (todt < aValue) return false
        } else if (_isObject(f)) {
          if (f[key]) {
            if (f[key] !== aValue) return false
          } else {
            if (f.value !== aValue) return false
          }
        } else if (_isString(f)) {
          if (f === null) {
            return false
          } else {
            return _startsWith(f, aValue) // f.contains(aValue)
          }
        } else {
          if (f !== aValue) return false
        }
      }
      return true
    })
  },
  isSearchMode: s => s.mode === 'search',
  isListMode: s => s.mode === 'list',
  isEditMode: s => s.mode === 'edit',
  isAddMode: s => s.mode === 'add',
  isViewMode: s => s.mode === 'view'
}
