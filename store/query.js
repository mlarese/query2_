import {actionsFn, state as s} from '../factories/store'
export {mutations, getters} from '../factories/store'
const moduleName = 'query'

export const actions = {
    ...actionsFn(moduleName)
}
export const state = () => ({
    ...s()

})
