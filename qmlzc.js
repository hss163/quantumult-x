
/*
微信公眾號檸檬玩機交流
下載地址：
http://qmlzc.agileloan.cn/lwzc/share/html/download_share.html?invitation=7094490
Tg群t.me/ningmengwj
使用方法
獲取數據打開APP獲取
因為我已經黑了無法看廣告那些
所以只寫了一天領過關紅包和存錢罐
每天獲取3毛錢也可以存著領5毛往上的
每天運行滿一百次關了就行了

【黑號專用】別管有沒有廣告掛著刷著就行了
[rewrite_local]
https://qmlzc-api.lw0591.com/v1/userinfo\S+ url script-request-header http://nm66.top/qmlzc.js

主機名 = qmlzc-api.lw0591.com
*/

// [task_local]
// */1 * * * * http://nm66.top/qmlzc.js, tag=檸檬全民來找茬, img-url=circles.hexagongrid.fill.system, enabled=true

const xnm = '全民來找茬'
const $ = Env('全民來找茬')


讓狀態；
status = (status = ($.getval("xnmstatus") || "1") ) > 1 ? `${status}` : "";
xnmheaderArr = []
xnmurlArr = []
讓 xnmheader = $.getdata('xnmheader')
讓 xnmurl = $.getdata('xnmurl')
const 日誌 =0;


讓 isGetCookie = typeof $request !== 'undefined'
如果（isGetCookie）{
   獲取Cookie();
   $.done()
} 
//xnmurlArr.push($.getdata('xnmurl'))
xnmheaderArr.push($.getdata('xnmheader'))
    讓 xnmcount = ($.getval('xnmcount') || '1');
  for (讓 i = 2; i <= xnmcount; i++) {
    xnmheaderArr.push($.getdata(`xnmheader${i}`))
xnmurlArr.push($.getdata(`xnmurl${i}`))
  }
!(異步 () => {
如果 (!xnmheaderArr[0]) {
    $.msg($.name, '【提示】請先獲取數據')
    返回;
  }
   console.log(`------------- 共${xnmheaderArr.length}賬號----------------\n`)
  for (讓我 = 0; i < xnmheaderArr.length; i++) {
    如果（xnmheaderArr[i]）{
      消息 = ''
      xnmheader = xnmheaderArr[i];
      //xnmurl = xnmurlArr[i];
      $.index = i + 1;
      console.log(`\n開始【全民來找茬${$.index}】`)
     
       等待 cqg()
       等待gghb()
       等待 lqcqg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
    
    
函數 GetCookie() {
if($request&&$request.url.indexOf("userinfo")>=0) {
   const xnmurl = JSON.stringify($request.url)
   const xnmheader = JSON.stringify($request.headers)
if(xnmurl) $.setdata(xnmurl,`xnmurl${status}`)
    if(xnmheader) $.setdata(xnmheader,`xnmheader${status}`)
    $.log(`[${xnm}] 獲取請求: 成功,xnmheader: ${xnmurl}`)
$.log(`[${xnm}] 獲取: 成功: ${xnmurl}`)
    $.msg(`全民來找茬${status}: 成功🎉`, ``)
}
}




異步函數 cqg(){
 返回新的承諾（（解決）=> {
    fj = xnmurl.match(/api_token=(\S+)"/)[1]

    讓 plant6_url = {
   		網址：`https://qmlzc-api.lw0591.com/v1/fast_award?api_token=`+fj，
        標頭：JSON.parse(xnmheader)，
        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    嘗試{
        const 結果 = JSON.parse(data)
        如果（日誌）$.log（數據）
        if(result.message == '調用成功')
          $.log("存錢罐次數"+result.data.remain_cnt+"\n金額"+result.data.award+"\n紅包🧧"+result.data.piggy_bank_balance)
         
        if(result.message == '已達最大')
          $.log("小伙子存每天錢罐100次刷完"+result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } 最後 {
        解決（）;
      } 
    })
   })
  }
    異步函數 gghb(){
 返回新的承諾（（解決）=> {
    //fj = xnmurl.match(/api_token=(\S+)"/)[1]

    讓 plant6_url = {
   		網址：`https://qmlzc-api.lw0591.com/v1/normal_award?api_token=`+fj，
        標頭：JSON.parse(xnmheader)，
        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    嘗試{
        const 結果 = JSON.parse(data)
        如果（日誌）$.log（數據）
        if(result.message == '調用成功')
          $.log("過關紅包次數"+result.data.remain_cnt+"\n存量"+result.data.award+"\n紅包當前🧧"+result.data.red_balance)
         
        if(result.message == '已達到最大次數')
          $.log每日("小伙子過關紅包100次刷完"+result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } 最後 {
        解決（）;
      } 
    })
   })
  }


    異步函數 lqcqg(){
 返回新的承諾（（解決）=> {
    //fj = xnmurl.match(/api_token=(\S+)"/)[1]

    讓 plant6_url = {
   		網址：`https://qmlzc-api.lw0591.com/v1/piggy/get_daily_balance?api_token=`+fj，
        標頭：JSON.parse(xnmheader)，
        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    嘗試{
        const 結果 = JSON.parse(data)
        如果（日誌）$.log（數據）
        if(result.message == '調用成功')
          $.log(數據)
         
        if(result.message == '明日我')
          $.log("小伙子存每天錢罐已經給你領了"+result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } 最後 {
        解決（）;
      } 
    })
   })
  }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t ;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r) =>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call( this.env,t,"POST")}}返回新類{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile=" box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object. assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.出口}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e }}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if (i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch {return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t, e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i; let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@ "),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))} ).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs" ),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this .dataFile),s=this.fs.existsSync(t),i=!s&&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{ return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this. fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve( process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace( /\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString() .match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])= ==t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[ e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i] =/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse (r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if (/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i ),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={}; this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this .isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata() ,this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e) ):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(), !0):this.data&&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this. cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{} )){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge() )&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,( t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&( t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode :i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))): this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null), e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t ;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i, i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content -Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge() &&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t) ,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t .opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode: i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if (this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode: s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message :s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+ ":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(), "q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4- RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp. $1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="" ,i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{ "open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl ||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX() ){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e, “媒體網址”：s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute| |(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r) ))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3== ============"];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")) ,this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t])，控制台。 log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log(" ",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef! `,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${ this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon()) &&$done(t)}}(t,e)}
