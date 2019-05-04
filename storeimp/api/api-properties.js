export const rowsPerPageItems = [20, 100]

let url = '/monitor'
let doMock = true

// if (process.env.NODE_ENV === 'development') {
if (window.location.host === 'localhost:3000') {
  url = 'http://localhost:8080/monitorver'
  doMock = true
}

export const baseURL = url
export const mockApp = doMock
