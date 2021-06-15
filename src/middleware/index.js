import  thunkMiddleware   from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunkMiddleware ,
    logger,
    
  ) 
