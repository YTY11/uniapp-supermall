import {ADD_COUNTER,ADD_TO_CAR} from "./mutation-type";

export default {
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CAR](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
