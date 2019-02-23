// const BASEURL = "http://rap2api.taobao.org/app/mock/118670";
const BASEURL = "http://120.25.162.182:8081/profession";

export const TO_LOGIN = `${BASEURL}/SystemController/login`;//登录
export const TO_REGISTER = `${BASEURL}/SystemController/register`;//注册
export const GET_VERIFYCODE = `${BASEURL}/user/getVerifyCode`;//获取验证码
export const HOME_PAGE = `${BASEURL}/news/search`;//首页数据初始查询
export const NEWS_CONTENT = `${BASEURL}/news/detailNewsContent`;//查询资讯详情
export const ADD_COLLECT = `${BASEURL}/news/addCollect`;//收藏
export const DEL_COLLECT = `${BASEURL}/news/delCollect`;//取消收藏
export const ADD_FOLLOW = `${BASEURL}/news/addFollow`;//关注
export const DEL_FOLLOW = `${BASEURL}/news/delFollow`;//取消关注
export const SENSATION = `${BASEURL}/user/getInternetSensation`;//查询网络红人
export const INFO_SEARCH = `${BASEURL}/dynamic/search`;//资讯详情的搜索


