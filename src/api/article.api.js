import axios from 'utils/request';

const url = '/article';

const article = {
  async getList() {
    const res = await axios.get(url);
    return res;
  }
};

export default article;