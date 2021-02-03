import {EventEmitter} from 'events'

const eventEmitter =  new EventEmitter()

export const on = (event,callback) => {
  if(!event)return
  eventEmitter.addListener(event,callback)
}

export const emit = (event,params) => {
  if(!event)return
  eventEmitter.emit(event,params)
}