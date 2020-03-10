import axios from 'utils/request';
import { cookieUtil } from 'utils';

const url = '/user';

const user = {
  //登陆模拟后端验证
  async login({ user, pwd }) {
    let res = await axios.get(`${url}?username=${user}`);
    console.log(res)
    if ( !res.data.length ){
      return {
        status: 0,
        msg: '用户名不存在'
      }
    }
    const { password, token } = res.data[0];
    if (pwd === password){
      cookieUtil.set('token', token);
      return {
        status: 1,
        msg: '登陆成功',
        data: res
      }
    }else {
      return {
        status: 0,
        msg: '密码错误'
      }
    }
  },
  //注册
  async registry(data) {
    //验证是否重复
    let isHasUser  = await axios.get(`${url}?username=${data.user}`);
    let isHasEmail = await axios.get(`${url}?email=${data.email}`);
    console.log(isHasEmail.data)
    if (isHasUser.data.length){
      return {
        status: 0,
        msg: '用户名重复',
      }
    }
    if (isHasEmail.data.length){
      return {
        status: 0,
        msg: '邮箱重复',
      }
    }
    //添加
    await axios.post(url, data);
    let token = '1235234asd.12425esdfsd.31231qwe'
    data = { ...data, token }
    cookieUtil.set('token', token);
    return {
      status: 1,
      msg: '注册成功',
      data
    }
  }
};

export default user;