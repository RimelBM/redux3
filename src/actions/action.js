
import {INCREMENT,DECREMENT,RESET} from './typeAction'

export const decrement = () => ({
    type: DECREMENT
  });
  
  export const increment = () => ({
    type: INCREMENT
  });

  export const reset = () => ({
    type: RESET
  });