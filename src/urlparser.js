/**
 * @param {string} url
 * @return {object}
 */
function urlparser(url){
    const reg = /(https?:\/\/[^\/\?#]*)\/?([^#\?]*)\??([^#]*)#?(.*)/;
    const matchObj = reg.exec(url);
    console.log(matchObj);
}

urlparser('http://www.baidu.com/hello?usrname=aaa&pwd=bbb#kkk');
urlparser('http://www.zju.com#here');