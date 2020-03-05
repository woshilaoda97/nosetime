import axios from 'utils/request';

const url = '/article';

const article = {
  async getList() {
    const res = await axios.get(`${url}?_sort=time&_order=desc`);
    return res;
  },
  async getNoseList() {
    const res = await axios.get(`${url}?type=nose`);
    return res;
  },
  async getSpecialList() {
    const res = await axios.get(`${url}?type=special`);
    return res;
  },
  async getKnowledgeList() {
    const res = await axios.get(`${url}?type=knowledge`);
    return res;
  },
};

export default article;