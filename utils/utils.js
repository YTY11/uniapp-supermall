//时间格式化
export  function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
    ;
  }
  ;
  return fmt;
}


//函数防抖
export function debounce(fun, wait) {
  let time = null
  //...args 可以传递多个参数
  return function(...args) {

    //判断time 是否为null 有就清楚定时器,防止连续触发,降低服务器压力
    if (time) {
      clearTimeout(time)

    }

    time = setTimeout(function() {
      //回调函数
      fun.apply(this, args)
    }, wait)
  }
}