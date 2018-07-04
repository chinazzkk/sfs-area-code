import data from '../dist/data.json'
const SFSArea = function(){
    this.province = data['province_list']
    this.city = data['city_list']
    this.county = data['county_list']
    this.getList = function(type, code) {
        let result = [];
        if (type !== 'province' && !code) {
            return result;
        }
        const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
        console.log('compareNum',compareNum)
        if (code) {
            code = code.slice(0, compareNum - 2);
            console.log(code)
        }
        const list = this[type];
        result = Object.keys(list).map(code => ({
            code,
            name: list[code]
        }));
        if (code) {
            result = result.filter(item => {
                return  item.code.indexOf(code) === 0
            });
        }
        return result;
    }
    // 获取索引位置
    this.getIndex = function(type, code) {
        const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
        const list = this.getList(type, code.slice(0, compareNum - 2));
        code = code.slice(0, compareNum);
        for (let i = 0; i < list.length; i++) {
            if (list[i].code.slice(0, compareNum) === code) {
                return i;
            }
        }
        return 0;
    }
}
export default new SFSArea()
