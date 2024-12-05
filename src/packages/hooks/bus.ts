import type { Emitter } from 'mitt'
import mitt from 'mitt'

const bus = mitt() as Emitter<any>
export const useBus = () => {
  return bus
}
