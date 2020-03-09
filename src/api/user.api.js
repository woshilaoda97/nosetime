import axios from 'utils/request';
import { cookieUtil } from 'utils';

const url = '/user';

const user = {
  //模拟后端验证
  async login({ user, pwd }) {
    
    let res = await axios.get(`${url}?user=${user}`);
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
  }
};

export default user;