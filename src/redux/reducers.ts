import {  combineReducers } from 'redux';


// reducer就是根据action来对state进行操作 相当于vue的computed
const themeReducer = (state:any, action:any) => {
    switch (action.type) {
      case 'CHANGE_THEME_COLOR':
        return { themeColor: action.themeColor }
      default:
        return { themeColor: 'red' }
    }
}
const fontSizeReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'CHANGE_FONT_SIZE':
      return { fontSize: action.fontSize }
    default:
      return {  fontSize: 14 }
  }
}

// 将所有reducer合并为一个
const allReducers = combineReducers({
  theme:themeReducer,
  fontSize:fontSizeReducer
})

export default allReducers