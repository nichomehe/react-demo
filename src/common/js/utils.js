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