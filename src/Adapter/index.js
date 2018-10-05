import * as mockData from '../MOCKDATA';

const baseURL = page => `https://api.unsplash.com/photos/?per_page=30&page=${page}&client_id=`
const key = `54f19c496f9f93a3e329d98fbd12b994245fed711b0a2fe423259bba61172932`

const breakDownArray = data => {
  const arr = [];
  let tempArray;
  for (let i=0; i < data.length; i += 10) {
    tempArray = data.slice(i, i + 10);
    arr.push(tempArray);
  }
  return arr;
}

const getRealPage = page => {
  const pages = [1, 2].map(p => {
    return fetch(baseURL(p) + key)
            .then(res => res.json())
  });
  return Promise.all(pages).then(data => {
    const allData = []
    data.forEach(d => {
      d.forEach(item => {
        allData.push(item);
      });
    });
    return breakDownArray(allData)[page];
  });
}

const getMockPage = page => {
  const mockPages = breakDownArray(mockData.default);
  return new Promise(res => {
    res(mockPages[page]);
  });
}

export default getRealPage;
