

// 返回一个Action，Action 就是一个普通 Js 对象,用来描述进行什么操作
export const changeThemeColor = (themeColor:string) => {
    return{
        type:'CHANGE_THEME_COLOR',
        themeColor:themeColor
    }
}

export const changeFontSize = (fontSize:number | string) => {
    return{
        type:'CHANGE_FONT_SIZE',
        fontSize:fontSize
    }
}