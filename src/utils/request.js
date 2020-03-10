import axios from 'axios'
import { Toast } from 'antd-mobile'
import { DEV_BASE_URL } from 'api/url';
import { cookieUtil } from 'utils';

const instance = axios.create({
  baseURL: DEV_BASE_URL,
  timeout: 5000
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios拦截器

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    //token
    //如果请求地址为登录接口
    let url = config.url;
    if(url.includes("login")){
      cookieUtil.set('token', "");
      config.headers.Authorization = "";
    }
    //如果请求地址为mine接口
    if(url.includes("mine")){
      let token = cookieUtil.get('token');
      config.headers.Authorization = token;
    }

    //loading
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!');
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  res => {
    //添加token
    if(res.headers.token){
      cookieUtil.set('token',res.headers.token);
    }
    //隐藏loading
    Toast.hide()
    //验证http状态码
    if (res.status === 200 || 201) {
      return res;
    } else {
      Promise.reject(res);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;