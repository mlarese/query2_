import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import query from '../fixtures/query.json'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/query').reply(() => [200, query])
    .onPut('/query/booked').reply(() => [200, "booked"])
    .onPut('/query/book').reply(() => [200, "book"])
    .onPut('/query/prebooked').reply(() => [200, "prebooked"])
    .onPut('/query/reservation').reply(() => [200, "reservation"])
    .onPut('/query/occupied').reply(() => [200, "occupied"])
    .onPut('/query/unbook').reply(() => [200, "unbook"])
    .onPost('/query').reply(() => [200, code])


    .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
