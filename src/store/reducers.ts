import {  combineReducers } from 'redux';

const initState = {
  themeColor:'red',
  fontSize:14
}


// reducer根据action对state进行操作 vue的mutations
const themeReducer = (prevState:any = initState, action:any) => {
    switch (action.type) {
      case 'CHANGE_THEME_COLOR':
        return Object.assign({},prevState,{ themeColor: action.payload })
      default:
        return prevState
    }
}
const fontSizeReducer = (prevState:any = initState, action:any) => {
  switch (action.type) {
    case 'CHANGE_FONT_SIZE':
        return Object.assign({},prevState,{ fontSize: action.fontSize })
    default:
      return prevState
  }
}

// 将所有reducer合并为一个
const allReducers = combineReducers({
  themeColor:themeReducer,
  fontSize:fontSizeReducer
})

export default allReducers