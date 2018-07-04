'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SFSArea = function () {
    this.province = _data2.default['province_list'];
    this.city = _data2.default['city_list'];
    this.county = _data2.default['county_list'];
    this.getList = function (type, code) {
        let result = [];
        if (type !== 'province' && !code) {
            return result;
        }
        const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
        console.log('compareNum', compareNum);
        if (code) {
            code = code.slice(0, compareNum - 2);
            console.log(code);
        }
        const list = this[type];
        result = Object.keys(list).map(code => ({
            code,
            name: list[code]
        }));
        if (code) {
            result = result.filter(item => {
                return item.code.indexOf(code) === 0;
            });
        }
        return result;
    };
    // 获取索引位置
    this.getIndex = function (type, code) {
        const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
        const list = this.getList(type, code.slice(0, compareNum - 2));
        code = code.slice(0, compareNum);
        for (let i = 0; i < list.length; i++) {
            if (list[i].code.slice(0, compareNum) === code) {
                return i;
            }
        }
        return 0;
    };
};
exports.default = new SFSArea();