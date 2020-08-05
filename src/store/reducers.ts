import {  combineReducers } from 'redux';
import { handleAction } from 'redux-actions'

const initState = {
  themeColor:'red',
  fontSize:14
}

// const themeReducer = (prevState:any = initState, action:any) => {
//     switch (action.type) {
//       case 'CHANGE_THEME_COLOR':
//         return Object.assign({},prevState,{ themeColor: action.payload })
//       default:
//         return prevState
//     }
// }



// reducer根据action对state进行操作 vue的mutations
const fontSizeReducer = (prevState:any = initState, action:any) => {
  switch (action.type) {
    case 'CHANGE_FONT_SIZE':
        return Object.assign({},prevState,{ fontSize: action.fontSize })
    default:
      return prevState
  }
}

// const fontSizeReducer  = handleAction(
//   'CHANGE_FONT_SIZE',
//   (state:any, action:any) => ({fontSize:  action.fontSize}),
//   initState
// );

const themeReducer  = handleAction(
  'CHANGE_THEME_COLOR',
  (state:any, action:any) => ({themeColor:  action.payload}),
  initState
);


// 将所有reducer合并为一个
const allReducers = combineReducers({
  themeColor:themeReducer,
  fontSize:fontSizeReducer
})

export default allReducers