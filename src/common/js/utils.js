const prefix = 'Nicole_react'

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content == 'object') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(`${prefix}+${name}`, content);
  }
  
  /**
   * 获取localStorage
   */
  export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(`${prefix}+${name}`);
  }



  /**
 * 删除空参数
 */
export const filterData = (data) => {
    if (data) {
      for (const key in data) {
        const val = data[key];
        if ((typeof val === 'undefined') || val === '' || val === null) {
          delete data[key];
        }
      }
      return data;
    }
}



// 递归 将子路由children提出来和父路由一级进行注册， 也可在父页面里单独进行子路由的注册
export const renderFirstLevRoutes = (routes,targetRoutes) => {
  let self = this
  let firstLevelRoutes = [...targetRoutes]
  routes.forEach((route)=>{
    if(route.children && route.children.length){
      firstLevelRoutes = firstLevelRoutes.concat([...route.children])
      firstLevelRoutes = self.renderFirstLevRoutes(route.children,firstLevelRoutes)
    }
  })
  return firstLevelRoutes
}