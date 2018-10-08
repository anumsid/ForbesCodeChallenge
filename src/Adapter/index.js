
import * as mockData from '../MOCKDATA';

const baseURL = page => `https://api.unsplash.com/photos/?per_page=30&page=${page}&client_id=`;
const key = `54f19c496f9f93a3e329d98fbd12b994245fed711b0a2fe423259bba61172932`;

let instance;

export default class Adapter {
  constructor () {
    if (!instance) instance = this;
    else return instance;
    this.imageCache = [];
    this.getRealPage = this.getRealPage.bind(this);
    this.getMockPage = this.getMockPage.bind(this);
    this.getPageArray = this.getPageArray.bind(this);
  }

  breakDownArray (data) {
    const arr = [];
    let tempArray;
    for (let i = 0; i < data.length; i += 10) {
      tempArray = data.slice(i, i + 10);
      arr.push(tempArray);
    }
    return arr;
  }

  async getRealPage (page) {
    if (this.imageCache.length > 0) {
      const allData = [...this.imageCache[0], ...this.imageCache[1]];
      return this.breakDownArray(allData)[page];
    }

    const pages = [1, 2].map(p => {
      return fetch(baseURL(p) + key)
              .then(res => res.json())
              .then(data => {
                this.imageCache.push(data);
                return data;
              });
    });
    const data = await Promise.all(pages);
    const allData = [...data[0], ...data[1]];
    return this.breakDownArray(allData)[page];
  }

  async getMockPage (page) {
    this.imageCache = [mockData.default.slice(0, 29), mockData.default.slice(30, -1)];
    const mockPages = this.breakDownArray(mockData.default);
    return mockPages[page];
  }

  getPageArray () {
    const arr = this.breakDownArray([...this.imageCache[0], ...this.imageCache[1]]).map((item, index) => index + 1);
    return arr;
  }
}
