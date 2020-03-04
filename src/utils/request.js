import axios from 'axios'
import { Toast } from 'antd-mobile'
import { DEV_BASE_URL } from 'api/url';

const instance = axios.create({
  baseURL: DEV_BASE_URL,
  timeout: 5000
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios拦截器

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
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
    Toast.hide()
    if (res.status === 200) {
      return res;
    } else {
      Promise.reject(res);
    }
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;