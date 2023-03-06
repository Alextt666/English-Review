const status = {
    SUCCESS: {
      code:200,
      msg:'成功'
    },
    ERROR:{
      code: 500,
      msg: '出现错误'
    },
    LACK:{
      code:403,
      msg:'缺少参数'
    },
    NONE:{
      code:404,
      msg:'未查询到结果'
    }
  }
  
  module.exports = status