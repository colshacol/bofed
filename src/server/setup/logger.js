import dayjs from 'dayjs'
import boxen from 'boxen'

global.time_stamp = () => dayjs().format('hh:MMa')

global.boxlog = (log) => {
  console.log(
    boxen(log, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyan'
    })
  )
}
