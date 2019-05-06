import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import query from '../fixtures/query.json'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/query').reply(() => [200, query])
  .onGet('/clients').reply(() => [200, clients])
  .onPut('/clients/0').reply(() => [200, 0])
  .onPut('/clients/10').reply(() => [200, 10])
  .onPut('/clients/20').reply(() => [200, 20])
  .onPost('/clients').reply(() => [200, clients])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
