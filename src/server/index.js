import createProxy from 'micro-proxy'

import './setup'

const proxy = createProxy([
  { pathname: '/foo', method: ['GET'], dest: 'http://localhost:8001' },
  { pathname: '/**', dest: 'http://localhost:8999' }
])

proxy.listen(8000, (err) => {
  if (err) throw err
  boxlog(`${time_stamp()}> Server Ready @ http://localhost:8000`)
})
