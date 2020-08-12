/* eslint-disable  */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let indexArr = []
    nums.forEach((item,index)=>{
        let res =  nums.filter((i,idx)=>{
            if(idx !== index && i ===  target-item){
                indexArr = [index,idx]
            }
            return idx !== index && i ===  target-item
        })
    })
    return indexArr
};


/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    let isOverZero = !!(x>0)
    let num = Math.abs(x)
    let arr = String(num).split('')
    arr.reverse()
    let res = Number(arr.join(''))
    !isOverZero && (res = -res)
    if(res<-Math.pow(2,31) || res>Math.pow(2,31)-1){
        res = 0
    }
    return res
};