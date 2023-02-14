//公共列表
var obj = [
    {value: '用车申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S091618024343128be17966f2db10aa&ProcessName=%E7%94%A8%E8%BD%A6%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '行政类'},
    {value: '酒店预订申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S07082022d20c9cae18461c3a10c0a7&ProcessName=%E9%85%92%E5%BA%97%E9%A2%84%E8%AE%A2%E7%94%B3%E8%AF%B7&ProcessVersion=3', tag: '行政类'},
    {value: '培训参会申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S04211990b12855a2a850b1dfa220cb&ProcessName=%E5%9F%B9%E8%AE%AD%E5%8F%82%E4%BC%9A%E7%94%B3%E8%AF%B7&ProcessVersion=5', tag: '行政类'},
    {value: '特殊文件签批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0724174ef4bf1686f47609265e7846&ProcessName=%E7%89%B9%E6%AE%8A%E6%96%87%E4%BB%B6%E7%AD%BE%E6%89%B9&ProcessVersion=1', tag: '行政类'},
    {value: '行政物资需求申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0513113c6b4157a23f52617a77ccfe&ProcessName=%E8%A1%8C%E6%94%BF%E7%89%A9%E8%B5%84%E9%9C%80%E6%B1%82%E7%94%B3%E8%AF%B7&ProcessVersion=5', tag: '行政类'},
    {value: '客人机票预定申请 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0403175e24559cbedb092d0f06148d&ProcessName=%E5%AE%A2%E4%BA%BA%E6%9C%BA%E7%A5%A8%E9%A2%84%E5%AE%9A%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: '印章制作申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0403175211e356afdf789ca37908c6&ProcessName=%E5%8D%B0%E7%AB%A0%E5%88%B6%E4%BD%9C%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: ' 名片制作申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S091618c374fe3db113f7ec55f420fa&ProcessName=%E5%90%8D%E7%89%87%E5%88%B6%E4%BD%9C%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '行政类'},
    {value: '定制品申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S09161858d8cc49ab6b304153acb321&ProcessName=%E5%AE%9A%E5%88%B6%E5%93%81%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '行政类'},
    {value: '办公用品及家具申请 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0109140fabd27b94d92946c86d9f90&ProcessName=%E5%8A%9E%E5%85%AC%E7%94%A8%E5%93%81%E5%8F%8A%E5%AE%B6%E5%85%B7%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: '访客预约申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S103109ee7fd9b58f50f886aed51326&ProcessName=%E8%AE%BF%E5%AE%A2%E9%A2%84%E7%BA%A6%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: '物品出厂证申请 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S031722ad4dd115987a93565fa66ad5&ProcessName=%E7%89%A9%E5%93%81%E5%87%BA%E5%8E%82%E8%AF%81%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: '车辆通行证权限申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0601218fd93ad2b19e96914557b3f1&ProcessName=%E8%BD%A6%E8%BE%86%E9%80%9A%E8%A1%8C%E8%AF%81%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '行政类'},
    {value: '外包人力需求申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S111819cea590068f2aaa2b27175fa9&ProcessName=%E5%A4%96%E5%8C%85%E4%BA%BA%E5%8A%9B%E9%9C%80%E6%B1%82%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '行政类'},
    {value: '公租房申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S092320f5afd995a3fb6f94d0340450&ProcessName=%E5%85%AC%E7%A7%9F%E6%88%BF%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '行政类'},
    {value: '预付款申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0715228a29026ab806142b1090ff63&ProcessName=%E9%A2%84%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7&ProcessVersion=4', tag: '财务类'},
    {value: '应付单申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0929226a15e1a891b625681b209a96&ProcessName=%E5%BA%94%E4%BB%98%E5%8D%95%E7%94%B3%E8%AF%B7&ProcessVersion=5', tag: '财务类'},
    {value: '信用申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S12102011b70d6fb1c608bc0ac237a3&ProcessName=%E4%BF%A1%E7%94%A8%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '财务类'},
    {value: '费用预提申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S070516a5d06055b3eab8e1eea7ca19&ProcessName=%E8%B4%B9%E7%94%A8%E9%A2%84%E6%8F%90%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '财务类'},
    {value: '财务服务需求单', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S02272339258702879327075c93dc0b&ProcessName=%E8%B4%A2%E5%8A%A1%E6%9C%8D%E5%8A%A1%E9%9C%80%E6%B1%82%E5%8D%95&ProcessVersion=1', tag: '财务类'},
    {value: '预算变更申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S012720c3dca435883f2c9e16d0d447&ProcessName=%E9%A2%84%E7%AE%97%E5%8F%98%E6%9B%B4%E7%94%B3%E8%AF%B7&ProcessVersion=3', tag: '财务类'},
    {value: 'Finance Request For Oversea Employee', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0324197ebbc750ae95ce149f1bad8d&ProcessName=%E5%9B%BD%E5%A4%96%E5%91%98%E5%B7%A5%E5%90%88%E5%90%8C%E7%AD%BE%E6%89%B9&ProcessVersion=1', tag: '财务类'},
    {value: '员工请休假申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0203216909329590365428e6015897&ProcessName=%E5%91%98%E5%B7%A5%E8%AF%B7%E4%BC%91%E5%81%87%E7%94%B3%E8%AF%B7&ProcessVersion=6', tag: 'HR类'},
    {value: '员工加班申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S02032101d8164289fac475d6c9d9b8&ProcessName=%E5%91%98%E5%B7%A5%E5%8A%A0%E7%8F%AD%E7%94%B3%E8%AF%B7&ProcessVersion=6', tag: 'HR类'},
    {value: '员工外出申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S032911bfa7c5e882d04cdc48f34678&ProcessName=%E5%91%98%E5%B7%A5%E5%A4%96%E5%87%BA%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: 'HR类'},
    {value: '招聘需求申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S012119258196cc87d7e5cdda40b0dd&ProcessName=%E6%8B%9B%E8%81%98%E9%9C%80%E6%B1%82%E7%94%B3%E8%AF%B7&ProcessVersion=3', tag: 'HR类'},
    {value: '组织架构和岗位变更', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0106223247cd78b43260417ddcc738&ProcessName=%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84%E5%92%8C%E5%B2%97%E4%BD%8D%E5%8F%98%E6%9B%B4&ProcessVersion=5', tag: 'HR类'},
    {value: '员工离职申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0602196d46aa37a0072c1f374b4962&ProcessName=%E5%91%98%E5%B7%A5%E7%A6%BB%E8%81%8C%E7%94%B3%E8%AF%B7&ProcessVersion=8', tag: 'HR类'},
    {value: '开具员工收入证明', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S08122360e46671989543288a820ebc&ProcessName=%E5%BC%80%E5%85%B7%E5%91%98%E5%B7%A5%E6%94%B6%E5%85%A5%E8%AF%81%E6%98%8E&ProcessVersion=3', tag: 'HR类'},
    {value: '员工销假申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0923156cc8e914b22985bef8ae865b&ProcessName=%E5%91%98%E5%B7%A5%E9%94%80%E5%81%87%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: 'HR类'},
    {value: '即时奖励申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S122320e9c0fad59db5dd76d85620a9&ProcessName=%E5%8D%B3%E6%97%B6%E5%A5%96%E5%8A%B1%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: 'HR类'},
    {value: '部门团队建设申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S090223a152eb559167f0276d36eda1&ProcessName=%E9%83%A8%E9%97%A8%E5%9B%A2%E9%98%9F%E5%BB%BA%E8%AE%BE%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: 'HR类'},
    {value: '导师面谈记录', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S09291902c71692ac72492fbb775e14&ProcessName=%E5%AF%BC%E5%B8%88%E9%9D%A2%E8%B0%88%E8%AE%B0%E5%BD%95&ProcessVersion=1', tag: 'HR类'},
    {value: '员工档案借阅申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S1014214c23eec39077cc284d322f28&ProcessName=%E5%91%98%E5%B7%A5%E6%A1%A3%E6%A1%88%E5%80%9F%E9%98%85%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: 'HR类'},
    {value: '请购单', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S071522ea719ef3843ed0f0aa803e4a&ProcessName=%E8%AF%B7%E8%B4%AD%E5%8D%95&ProcessVersion=3', tag: '采购类'},
    {value: '采购需求申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S080720dbe34df0bfb4e86f8dc32d9b&ProcessName=%E9%87%87%E8%B4%AD%E9%9C%80%E6%B1%82%E7%94%B3%E8%AF%B7&ProcessVersion=3', tag: '采购类'},
    {value: '供应商创建', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S022121193f8c7b96918bee7dcd2835&ProcessName=%E4%BE%9B%E5%BA%94%E5%95%86%E5%88%9B%E5%BB%BA&ProcessVersion=1', tag: '采购类'},
    {value: '供应商准入申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0426223a36ea46bb4fb9ed1cd6b24b&ProcessName=%E4%BE%9B%E5%BA%94%E5%95%86%E5%87%86%E5%85%A5%E7%94%B3%E8%AF%B7&ProcessVersion=5', tag: '采购类'},
    {value: '供应商评估', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S070820fd49aa31854265e35690ab11&ProcessName=%E4%BE%9B%E5%BA%94%E5%95%86%E8%AF%84%E4%BC%B0&ProcessVersion=1', tag: '采购类'},
    {value: '指定供应商申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S042119ad98ae56a487a35e676ab3ba&ProcessName=%E7%8B%AC%E5%AE%B6%E4%BE%9B%E5%BA%94%E5%95%86%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '采购类'},
    {value: '采购信息记录审批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S062321c9b34d81bee48df9b0d5deba&ProcessName=%E7%89%A9%E6%96%99%E4%BB%B7%E6%A0%BC%E4%BF%A1%E6%81%AF%E8%AE%B0%E5%BD%95&ProcessVersion=2', tag: '采购类'},
    {value: '货源清单审批 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S062321778cfdefad6aa1f9d0338194&ProcessName=%E4%BE%9B%E5%BA%94%E5%95%86%E8%B4%A7%E6%BA%90%E4%B8%8E%E4%BF%A1%E6%81%AF%E8%AE%B0%E5%BD%95%E5%AE%A1%E6%89%B9&ProcessVersion=2', tag: '采购类'},
    {value: '海外采购申请单 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0303209e8d79908087aebab81de43d&ProcessName=%E6%B5%B7%E5%A4%96%E9%87%87%E8%B4%AD%E7%94%B3%E8%AF%B7%E5%8D%95&ProcessVersion=1', tag: '采购类'},
    {value: '专利新案申请审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0915133a82df9080df1489ec25b449&ProcessName=%E4%B8%93%E5%88%A9%E6%96%B0%E6%A1%88%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '专利后续申请审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S09142063d9757ea3f4dc34d2da9345&ProcessName=%E4%B8%93%E5%88%A9%E5%90%8E%E7%BB%AD%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: 'PCT进国家阶段审批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S091020a32c98528610c6aec7808e32&ProcessName=PCT%E8%BF%9B%E5%9B%BD%E5%AE%B6%E9%98%B6%E6%AE%B5%E5%AE%A1%E6%89%B9&ProcessVersion=2', tag: '注册与知识产权类'},
    {value: '专利审查审批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S09230912f60c91bba135c59560ee31&ProcessName=%E4%B8%93%E5%88%A9%E5%AE%A1%E6%9F%A5%E5%AE%A1%E6%89%B9&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '专利检索需求表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0923097446baafb9cbc78ac05ef53b&ProcessName=%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2%E9%9C%80%E6%B1%82%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '专利奖励申请审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0910209b3d5585963ca0acb1fb5dcc&ProcessName=%E4%B8%93%E5%88%A9%E5%A5%96%E5%8A%B1%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '商标奖励申请审批 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0923107358acb78e411351668f686b&ProcessName=%E5%95%86%E6%A0%87%E5%A5%96%E5%8A%B1%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '专利管理奖励申请审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S092310c8efb6e392499d95128ba785&ProcessName=%E4%B8%93%E5%88%A9%E7%AE%A1%E7%90%86%E5%A5%96%E5%8A%B1%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '商标申请审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0915132006e22e8ed306ad1abe4364&ProcessName=%E5%95%86%E6%A0%87%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '申报资料审批及放行', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S11191696aa25c5bd5c186889185b30&ProcessName=%E7%94%B3%E6%8A%A5%E8%B5%84%E6%96%99%E5%AE%A1%E6%89%B9&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '实验记录本管理 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0413142af0b62ca130016f12bdba56&ProcessName=%E5%AE%9E%E9%AA%8C%E8%AE%B0%E5%BD%95%E6%9C%AC%E7%AE%A1%E7%90%86&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: 'IND相关文件需求申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S02262001ea1ca5ab00511872121e38&ProcessName=IND%E7%9B%B8%E5%85%B3%E6%96%87%E4%BB%B6%E9%9C%80%E6%B1%82%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '注册与知识产权类'},
    {value: '欧洲专利生效国家审批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S09102086448f64b16b23aeaa325d23&ProcessName=%E6%AC%A7%E6%B4%B2%E4%B8%93%E5%88%A9%E7%94%9F%E6%95%88%E5%9B%BD%E5%AE%B6%E5%AE%A1%E6%89%B9&ProcessVersion=2', tag: '注册与知识产权类'},
    {value: '研究过程文件审核', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S092919615c21a090edcc545546a4a3&ProcessName=%E7%A0%94%E7%A9%B6%E8%BF%87%E7%A8%8B%E6%96%87%E4%BB%B6%E5%AE%A1%E6%A0%B8&ProcessVersion=1', tag: '注册与知识产权类'},
    {value: '记录领用申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S02241950e6cbdc898bef1c3a15b671&ProcessName=%E8%AE%B0%E5%BD%95%E9%A2%86%E7%94%A8%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '注册与知识产权类'},
    {value: '合同签批', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S042622f9db78128b3cd0be169d4355&ProcessName=%E5%90%88%E5%90%8C%E7%AD%BE%E6%89%B9&ProcessVersion=10', tag: '法务合规类'},
    {value: '文件用印/签字', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S080916d0c2b34e8788c6347bb6178f&ProcessName=%E6%96%87%E4%BB%B6%E7%94%A8%E5%8D%B0&ProcessVersion=3', tag: '法务合规类'},
    {value: '规章制度发布 ', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0602191fc48aa6985ecd9297a960e1&ProcessName=%E8%A7%84%E7%AB%A0%E5%88%B6%E5%BA%A6%E5%8F%91%E5%B8%83&ProcessVersion=5', tag: '法务合规类'},
    {value: '证照批文用印', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S082111aba91b3998c0052794b890f9&ProcessName=%E8%AF%81%E7%85%A7%E6%89%B9%E6%96%87%E7%94%A8%E5%8D%B0&ProcessVersion=3', tag: '法务合规类'},
    {value: '活动申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S05122187bd3f49a5508a2805e82359&ProcessName=%E4%BC%9A%E8%AE%AE%E8%AE%A1%E5%88%92&ProcessVersion=3', tag: '法务合规类'},
    {value: '推广和教育材料审核', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S05122196c99fcf91076f87d3e09590&ProcessName=%E4%B8%93%E5%AE%B6%E8%87%AA%E5%88%B6%E8%AE%B2%E7%A8%BF%E5%AE%A1%E6%A0%B8%E6%B5%81%E7%A8%8B&ProcessVersion=2', tag: '法务合规类'},
    {value: '患者补偿申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S042119b0aebcdaa3119f734eca0aaa&ProcessName=%E6%82%A3%E8%80%85%E8%A1%A5%E5%81%BF%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '法务合规类'},
    {value: 'Contract Signing Application', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0303207265156cbb7ab06d83e54f89&ProcessName=%E5%9B%BD%E5%A4%96%E5%90%88%E5%90%8C&ProcessVersion=1', tag: '法务合规类'},
    {value: '产品立项', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S07162211d7132da061406866593822&ProcessName=%E4%BA%A7%E5%93%81%E7%AB%8B%E9%A1%B9&ProcessVersion=1', tag: '项目管理类'},
    {value: 'FTE录入', hrefLink: 'http://portal.innoventbio.com:8000/NNForm/WebForms/FTE/FTEV2.aspx', tag: '项目管理类'},
    {value: 'IT服务申请单', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0729207ca2ca998433c108a3873bd2&ProcessName=IT%E6%9C%8D%E5%8A%A1%E7%94%B3%E8%AF%B7%E5%8D%95&ProcessVersion=9', tag: 'IT类'},
    {value: '档案归档申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S042622e5e0253a91edc290e6592896&ProcessName=%E6%A1%A3%E6%A1%88%E5%BD%92%E6%A1%A3%E7%94%B3%E8%AF%B7&ProcessVersion=3', tag: '档案管理类'},
    {value: '档案借阅申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S1119222306ce30af1fdbbe08857bbf&ProcessName=%E6%A1%A3%E6%A1%88%E5%80%9F%E9%98%85%E7%94%B3%E8%AF%B7&ProcessVersion=2', tag: '档案管理类'},
    {value: '人员参与外部活动报审表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S051113ffa4b87db4c77d6b450987b8&ProcessName=%E4%BA%BA%E5%91%98%E5%8F%82%E4%B8%8E%E5%A4%96%E9%83%A8%E6%B4%BB%E5%8A%A8%E6%8A%A5%E5%AE%A1%E8%A1%A8&ProcessVersion=2', tag: '企宣'},
    {value: '对外传播审批表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S0511130665b5b4931658c760c34cd8&ProcessName=%E5%AF%B9%E5%A4%96%E4%BC%A0%E6%92%AD%E5%AE%A1%E6%89%B9%E8%A1%A8&ProcessVersion=2', tag: '企宣'},
    {value: '活动拍摄申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S102218cab4c137aeae324a99ca749f&ProcessName=%E6%B4%BB%E5%8A%A8%E6%8B%8D%E6%91%84%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '企宣'},
    {value: '传播信息报送表', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S11111965579ab4a45f14d4432f8fe2&ProcessName=%E4%BC%A0%E6%92%AD%E4%BF%A1%E6%81%AF%E6%8A%A5%E9%80%81%E8%A1%A8&ProcessVersion=1', tag: '企宣'},
    {value: '不良反应报告', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S011511e00903cd921cb49b43fbb0e4&ProcessName=%E4%B8%8D%E8%89%AF%E5%8F%8D%E5%BA%94%E6%8A%A5%E5%91%8A&ProcessVersion=1', tag: '其它'},
    {value: 'CSA申请', hrefLink: 'http://portal.innoventbio.com:8000/workflow/task?TaskId=S060919827f7edbab34974875081db0&ProcessName=CSA%E7%94%B3%E8%AF%B7&ProcessVersion=1', tag: '其它'},
    {value: '三级安全培训', hrefLink: 'http://shareedit/_layouts/15/WopiFrame.aspx?sourcedoc={BB6529AD-F5D3-4734-A171-FCCE73182BD4}&file=%E4%B8%89%E7%BA%A7%E5%AE%89%E5%85%A8%E5%9F%B9%E8%AE%AD%E7%BB%9F%E8%AE%A1.xlsx&action=default', tag: '统计表'},
    {value: '缩略词', hrefLink: 'http://shareedit/_layouts/15/WopiFrame2.aspx?sourcedoc={F5385DCF-AD29-4310-B346-320C0FA5227F}&file=%E7%BA%AF%E5%8C%96%E6%9C%AF%E8%AF%AD.xlsx&action=default', tag: '统计表'},
    {value: 'M2设备使用域密码修改', hrefLink: 'http://10.1.198.43/', tag: 'MFG域修改密码'},
    {value: 'TrackWise使用域密码修改', hrefLink: 'http://172.16.0.50/RDWeb/Pages/zh-CN/login.aspx', tag: 'LAB域修改密码'},
	{value: "Search-data", hrefLink: "http://shareedit/_layouts/15/WopiFrame.aspx?sourcedoc={E29CD54E-AEB2-4537-A57D-934CB83A8561}&file=hrefLink.xlsx&action=default",tag:'xpy'},
    {value: "html", hrefLink: "https://www.jq22.com/webide/",tag:'xpy'},
	{value: "纯化公共物料", hrefLink: "http://shareedit/_layouts/15/WopiFrame.aspx?sourcedoc={9E6AF6CF-A140-4339-83CC-809EFBA93BFB}&file=%E7%BA%AF%E5%8C%96%E7%89%A9%E6%96%99.xlsx&action=default",tag: "纯化、表"},
	{value: "IBI305批记录-草稿", hrefLink: "http://shareedit/_layouts/15/WopiFrame.aspx?sourcedoc={463908DA-FDE5-4C85-81AB-C20784729E8D}&file=%E8%B4%9D%E4%BC%90%E7%8F%A0%E5%8D%95%E6%8A%97%E6%B3%A8%E5%B0%84%E6%B6%B2M2b%E4%BA%8C%E7%BA%BF3000L%E5%8E%9F%E6%B6%B2%E7%BA%AF%E5%8C%96%E6%89%B9%E7%94%9F%E4%BA%A7%E8%AE%B0%E5%BD%95.docx&action=default",tag: "纯化、记录"},
	{value: "吾道", hrefLink: "https://www.woodo.cn/?f=2314",tag: "PPT,ppt"},
	{value: "创客贴", hrefLink: "https://www.chuangkit.com/polymer/975.html?utm_source=pptzc&utm_campaign=gq",tag: "PPT,ppt"},
	{value: "可画", hrefLink: "https://www.canva.cn/?utm_source=zhihu&utm_medium=paid&utm_term=ppgq772&utm_content=qa&utm_campaign=ACQ-ppt",tag: "PPT,ppt"},
	{value: "OfficePlus", hrefLink: "https://www.officeplus.cn",tag: "PPT,ppt"},
	{value: "搞定设计", hrefLink: "https://www.gaoding.com/introduction",tag: "PPT,ppt"},
	{value: "Prezi", hrefLink: "https://prezi.com/",tag: "PPT,ppt"},
	{value: "MES知识库", hrefLink:"https://alidocs.dingtalk.com/i/spaces/gBVzxNB5NvylmOao/overview?nav=spaces&navQuery=spaceId%3DgBVzxNB5NvylmOao", tag:"MES/项目"},
	{value: "素材库", hrefLink:"https://alidocs.dingtalk.com/i/spaces/gBVzxgLeB70dQGOa/overview?nav=spaces&subNav=gBVzxgLeB70dQGOa&navQuery=spaceId%3DgBVzxgLeB70dQGOa",tag:"素材,xpy"},
	{value: "Teambition", hrefLink:"https://teambition.innoventbio.com/login?email=pengyun.xu%40innoventbio.com&t=1665198442&s=email",tag:"项目管理"},
	{value: "简道云-流程后台", hrefLink:"https://www.jiandaoyun.com/dashboard#/app/5d4d6c5a68ae6e78a6bba7a9/flow/todo",tag:"xpy,yh"},
	{value: "个人计划-xpy", hrefLink:"http://shareedit/_layouts/15/WopiFrame.aspx?sourcedoc={2f17ec09-8706-4c17-bd32-2159de4c7bc9}&action=default",tag:"个人计划"}

];


var searchInput = document.getElementById("search-input");

document.onkeyup = function(e){
   if(
		searchInput.value == ""
   ){
	   	document.getElementById("datarea").style.visibility = "hidden"; 
   }else if(
        e.keyCode == 13 && searchInput.value !== ""
   ){
		search();
	}else{
		fuzzyQuery();
		document.getElementById("datarea").style.visibility = "visible";
	}		
}
	

function fuzzyQuery() {
    document.getElementById("data").innerHTML = "";
    for (i = 0; i < obj.length; i++) {
      if (obj[i].value.indexOf(searchInput.value) >= 0 ||  obj[i].tag.indexOf(searchInput.value) >= 0) {
		var node = document.createElement("li");
		node.setAttribute("link",obj[i].hrefLink);
		var textnode = document.createTextNode(obj[i].value);
		node.appendChild(textnode);
		document.getElementById("data").appendChild(node);
      } 
    }
		var list = document.getElementById("data").getElementsByTagName("li");
		document.getElementById("total-num").innerHTML = list.length;
		for(i = 0; i < list.length; i ++){
				list[i].addEventListener("click",function(){
				window.open(this.getAttribute("link"),"_blank").location;
			});
		}	
}


function search(){ 
    for(i = 0; i < obj.length; i++){
        if(
            searchInput.value == obj[i].value
           ){
            window.open(obj[i].hrefLink,"_blank").location;
        }
    }
}