# sfs-china-area
#### 中国省市区Json文件
对应的KEY是邮编地址。
前两位是省/直辖市,第三四位是市,四五位是区。

NPM安装：
    npm install sfs-area-code
    
或yarn：

    yarn add sfs-area-code

使用示例：

    import TEST from 'sfs-china-area'
    
    
    
    // 获取所有省
    const province = TEST.getList('province')
    //返回 [{name:'北京',code:'110000'}]
    
    // 获取所有城市 
    // 例如获取北京 110000 
    // 上一级代码会返回这个邮编code
    const city = TEST.getList('city','110000')
    
    // 获取所有区
    const county = TEST.getList('county','110101')
    
    //不筛选直接获取所有数据
    TEST.province //省
    TEST.city //市
    TEST.county //区
 
    
    
    
数据示例：


    '110000': '北京市'
    '110200': '县'
    '110101': '东城区',
    '110102': '西城区',
    '110105': '朝阳区',
    '110106': '丰台区',
    '110107': '石景山区',
    '110108': '海淀区',
    '110109': '门头沟区',
    '110111': '房山区',
    '110112': '通州区',
    '110113': '顺义区',
    '110114': '昌平区',
    '110115': '大兴区',
    '110116': '怀柔区',
    '110117': '平谷区',
    '110228': '密云县',
    '110229': '延庆县',

    NPM 安装后，直接 import Area from sfs-china-area 即可使用
