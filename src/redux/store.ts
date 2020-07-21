import { createStore } from 'redux';



const themeReducer = (state:any, action:any) => {
    if (!state) return {
      themeColor: 'red'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}

const store = createStore(themeReducer)


export default store
