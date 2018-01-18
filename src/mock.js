const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data',{'data|1-10':[{'id|+1':2}]})
