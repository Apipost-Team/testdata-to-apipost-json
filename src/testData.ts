import trim from "lodash/trim";

const isJSON = (str: string) => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};
// 字符串转测试对象
export const str2testData = (str: string) => {
  let returnList: any = [];
  let jsonObj;
  if (!isJSON(str)) {
    jsonObj = str.split(/((\r\n)|[\r\n])+/gi);
    let testDataheader: string | any[] = [];
    for (const x in jsonObj) {
      if (typeof jsonObj[x] !== 'string' || jsonObj[x].length <= 0) {
        continue;
      }
      const row = `${jsonObj[x]}`;
      if (trim(row).length <= 0) {
        continue;
      }
      const kv = jsonObj[x].split(',');
      if (x == '0') {
        testDataheader = kv;
      } else {
        const obj = {};
        for (let index = 0; index < testDataheader.length; index++) {
          const name = String(testDataheader[index]);
          if (!obj[name]) {
            try {
              if (kv[index]) {
                obj[name] = String(kv[index]);
              } else {
                obj[name] = '';
              }
            } catch (error) {
              obj[name] = '';
            }
          }
        }
        returnList.push(obj);
      }
    }
  } else {
    jsonObj = JSON.parse(str);
    if (jsonObj instanceof Array) {
      returnList = jsonObj;
    } else {
      returnList.push(jsonObj);
    }
  }
  return returnList;
};

export default str2testData;
