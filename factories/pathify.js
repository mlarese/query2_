import pathify from 'vuex-pathify'

pathify.options.mapping = (type, name, formatters) => {
  switch (type) {
    case 'mutations':
      return formatters.camel('set', name)
    case 'actions':
      return formatters.camel('set', name)
    case 'getters':
      return formatters.camel('get', name)
  }
  return name
}

export default pathify
