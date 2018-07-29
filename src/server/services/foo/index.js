import '../../setup'

export default (req, res) => {
  boxlog(`${time_stamp()} GET /foo`)
  res.end('GET -> Ya hit the /foo route on port 8001.')
}
