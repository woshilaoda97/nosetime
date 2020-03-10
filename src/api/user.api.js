import axios from 'utils/request';
import { cookieUtil } from 'utils';

const url = '/user';

const user = {
  //登陆模拟后端验证
  async login({ user, pwd }) {
    let res = await axios.get(`${url}?username=${user}`);
    if ( !res.data.length ){
      return {
        status: 0,
        msg: '用户名不存在'
      }
    }
    const { password, token, id } = res.data[0];
    res = res.data[0];
    if (pwd === password){
      cookieUtil.set('token', token, 30);
      cookieUtil.set('userid', id, 30);
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
  //通过id获取用户信息
  async getUserById(id) {
    let res = await axios.get(`${url}?id=${id}`);
    res = res.data[0];
    return {
      status: 1,
      msg: '登陆成功',
      data: res
    }
  },
  //注册
  async registry(data) {
    //验证是否重复
    let isHasUser  = await axios.get(`${url}?username=${data.user}`);
    let isHasEmail = await axios.get(`${url}?email=${data.email}`);
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
    let fakerToken = '1235234asd.12425esdfsd.31231qwe'
    data = { ...data, token: fakerToken };
    let res = await axios.post(url, data);
    let { id, token } = res.data;
    cookieUtil.set('token', token, 30);
    cookieUtil.set('userid', id , 30);
    return {
      status: 1,
      msg: '注册成功',
      data
    }
  }
};

export default user;