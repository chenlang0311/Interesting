import { create } from './create'
import { run } from './run'

const createWrapper = () => {
  if (!window.Worker) {
    console.error('This browser does not support Workers.')
    return null
  }
  if (!(window.URL.createObjectURL || window.webkitURL.createObjectURL)) {
    console.error('This browser does not have URL.createObjectURL method.')
    return null
  }
  return { create, run }
}

const WorkerWrapper = createWrapper()

export default WorkerWrapper

WorkerWrapper.run((() => 'SWorker run 1: Function in other thread')
  .then(console.log) // logs 'SWorker run 1: Function in other thread'
  .catch(console.error)
) // logs any possible error
