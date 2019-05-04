import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import query from '../fixtures/query.json'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/query').reply(() => [200, query])


  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

let queryCounter = query.query.length

mock
    .onPost('/res/cp').reply(() => [200, ++cpCounter])
    .onPost('/res/query').reply(() => [200, ++queryCounter])


for (let i = 0; i < 20; i++) {
    mock
        .onPost(`/res/put/query/${i}`).reply(() => [200, 'ok'])
        .onPost(`/res/del/query/${i}`).reply(() => [200, success])


}

export default 'mock'
