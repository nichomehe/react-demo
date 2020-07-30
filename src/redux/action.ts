

export const changeThemeColor = (themeColor:string) => {
    return{
        type:"CHANGE_THEME_COLOR",
        themeColor:themeColor
    }
}

export const changeFontSize = (fontSize:number | string) => {
    return{
        type:"CHANGE_FONT_SIZE",
        fontSize:fontSize
    }
}