/ * ziye CK導入導出專用的預先下載或複製到本地使用

github地址https://github.com/ziye12
TG頻道地址https://t.me/ziyescript
TG交流群https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs鏈接https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/ziye.boxjs.json


轉載請備註個名字，謝謝



* /

const $ = Env（“ CK導入導出”）;

//填寫賬號數，
const Count = 5 

//設置1，導入CK
常量DR = 0 

//設置1，導出CK
const DC = 0

// 0可批量導入ck，1清空ck 2單獨導入ck
常量QK = 0





//👇👇👇👇👇👇👇👇👇👇👇👇CK單獨介紹👇👇👇👇👇👇👇👇👇👇👇👇👇👇

// //將您要單獨導入的ck名字，去boxjs裡看或者ck獲取處如$ .setdata（refreshtokenVal，“ refreshtoken” + $ .idx）; 想要介紹賬號2的ck則在''中填寫refreshtoken2
const JSCKNAME ='refreshtoken2'

//填寫想要單獨導入的ck數據，如token = abc則在``中填寫token = abc
const JSCK =`token = abc`





//👇👇👇👇👇👇👇👇👇👇👇👇CK批量導入👇👇👇👇👇👇👇👇👇👇👇👇👇👇


// //填入您要導入的ck名字，去boxjs裡看或者ck獲取處如$ .setdata（refreshtokenVal，“ refreshtoken” + $ .idx）; 則在''中填寫refreshtoken

const JSA ='刷新令牌'
const JSB =''
const JSC =''
const JSD =''
const JSE =''
const JSF =''
const JSG =''
const JSH =''
const JSI =''
const JSJ =''
const JSK =''
const JSL =''

//填寫想要的導入的ck數據，多賬號換行如token = abc則在``中填寫token = abc
const JSAVal =“''
const JSBVal =“''
const JSCVal =“''
const JSDVal =“''
const JSEVal =“''
const JSFVal =“''
const JSGVal =“''
const JSHVal =“''
const JSIVal =“''
const JSJVal =“''
const JSKVal =“''
const JSLVal =“''
//👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆









//👇👇👇👇👇👇👇👇👇👇👇👇CK導出👇👇👇👇👇👇👇👇👇👇👇👇👇👇

let K = 1; //從其中賬號開始
讓Z = 5; //到那裡賬號結束

const GG =''//替代為換行，也可以將需要替換的符號填充在''內

//填寫您要打印的ck名字，去js裡獲取ck處看如$ .setdata（refreshtokenVal，“ refreshtoken” + $ .idx）; 則在''中填寫refreshtoken

const jsA ='刷新令牌'
const jsB =''
const jsC =''
const jsD =''
const jsE =''
const jsF =''
const jsG =''
const jsH =''
const jsI =''
const jsJ =''
const jsK =''
const jsL =''

//開啟打印則設置為1
const jsAA = 1  
const jsBB = 0  
const jsCC = 0  
const jsDD = 0  
const jsEE = 0  
const jsFF = 0  
常量jsGG = 0  
常量jsHH = 0  
const jsII = 0  
const jsJJ = 0  
const jsKK = 0  
const jsLL = 0 

//👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆



//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️以下內容不要隨意放置
 如果（DR == 1）{
如果（QK == 1）
{
const JSAVal =“''
const JSBVal =“''
const JSCVal =“''
const JSDVal =“''
const JSEVal =“''
const JSFVal =“''
const JSGVal =“''
const JSHVal =“''
const JSIVal =“''
const JSJVal =“''
const JSKVal =“''
const JSLVal =“''
}
         如果（QK == 2）{
			 $ .setdata（JSCK，`$ {JSCKNAME}`）;
			 console.log（$。name +'，ck獨立導入成功'，'✅已導入'+ JSCKNAME，）
			 $ .msg（$。name +'，ck獨立導入成功'，'✅已導入'+ JSCKNAME，）
 }
         if（（QK == 0 && JSAVal！=''）|| QK == 1）{
                $ .setdata（JSAVal.split（'\ n'）[0]，`$ {JSA}`）;
				$ .setdata（JSBVal.split（'\ n'）[0]，`$ {JSB}`）;
				$ .setdata（JSCVal.split（'\ n'）[0]，`$ {JSC}`）;
				$ .setdata（JSDVal.split（'\ n'）[0]，`$ {JSD}`）;
				$ .setdata（JSEVal.split（'\ n'）[0]，`$ {JSE}`）;
				$ .setdata（JSFVal.split（'\ n'）[0]，`$ {JSF}`）;
				$ .setdata（JSGVal.split（'\ n'）[0]，`$ {JSG}`）;
				$ .setdata（JSHVal.split（'\ n'）[0]，`$ {JSH}`）;
				$ .setdata（JSIVal.split（'\ n'）[0]，`$ {JSI}`）;
				$ .setdata（JSJVal.split（'\ n'）[0]，`$ {JSJ}`）;
				$ .setdata（JSKVal.split（'\ n'）[0]，`$ {JSK}`）;
				$ .setdata（JSLVal.split（'\ n'）[0]，`$ {JSL}`）;
 for（讓i = 2; i <= Count; i ++）{
				$ .setdata（JSAVal.split（'\ n'）[i-1]，`$ {JSA + i}`）;
				$ .setdata（JSBVal.split（'\ n'）[i-1]，`$ {JSB + i}`）;
				$ .setdata（JSCVal.split（'\ n'）[i-1]，`$ {JSC + i}`）;
				$ .setdata（JSDVal.split（'\ n'）[i-1]，`$ {JSD + i}`）;
				$ .setdata（JSEVal.split（'\ n'）[i-1]，`$ {JSE + i}`）;
				$ .setdata（JSFVal.split（'\ n'）[i-1]，`$ {JSF + i}`）;
				$ .setdata（JSGVal.split（'\ n'）[i-1]，`$ {JSG + i}`）;
				$ .setdata（JSHVal.split（'\ n'）[i-1]，`$ {JSH + i}`）;
				$ .setdata（JSIVal.split（'\ n'）[i-1]，`$ {JSI + i}`）;
				$ .setdata（JSJVal.split（'\ n'）[i-1]，`$ {JSJ + i}`）;
				$ .setdata（JSKVal.split（'\ n'）[i-1]，`$ {JSK + i}`）;
				$ .setdata（JSLVal.split（'\ n'）[i-1]，`$ {JSL + i}`）;
    }
	
	如果（QK == 0 && JSAVal！=''）{
	console.log（$。name +'，ck批量導入成功✅'）
			 $ .msg（$。name +'，ck批量導入成功✅'）
	
	   }
	
	如果（QK == 1）{
	console.log（$。name +'，ck清除成功✅'）
			 $ .msg（$。name +'，ck清除成功✅'）
	
	   }
   }

$ .done（）
 }
 如果（DC == 1）{
令R = K
const jsAArr = [];
讓jsAVal =``;
const jsBArr = [];
讓jsBVal =``;
const jsCArr = [];
讓jsCVal =``;
const jsDArr = [];
讓jsDVal =``;
const jsEArr = [];
讓jsEVal =``;
const jsFArr = [];
讓jsFVal =``;
const jsGArr = [];
讓jsGVal =``;
const jsHArr = [];
讓jsHVal =``;
const jsIArr = [];
讓jsIVal =``;
const jsJArr = [];
讓jsJVal =``;
const jsKArr = [];
讓jsKVal =``;
const jsLArr = [];
讓jsLVal =``;
		jsAArr.push（$。getdata（`$ {jsA}`）））;
		jsBArr.push（$。getdata（`$ {jsB}`）））;
		jsCArr.push（$。getdata（`$ {jsC}`）））;
		jsDArr.push（$。getdata（`$ {jsD}`）））;
		jsEArr.push（$。getdata（`$ {jsE}`）））;
		jsFArr.push（$。getdata（`$ {jsF}`）））;
		jsGArr.push（$。getdata（`$ {jsG}`）））;
		jsHArr.push（$。getdata（`$ {jsH}`）））;
		jsIArr.push（$。getdata（`$ {jsI}`）））;
		jsJArr.push（$。getdata（`$ {jsJ}`）））;
		jsKArr.push（$。getdata（`$ {jsK}`）））;
		jsLArr.push（$。getdata（`$ {jsL}`）））;
        //根據boxjs中設置的額外賬號數，添加存在的賬號數據進行任務處理
        for（讓i = 2; i <= Count; i ++）{
            如果（$ .getdata（`$ {jsA + i}`））{
				jsAArr.push（$。getdata（`$ {jsA + i}`）））;
				jsBArr.push（$。getdata（`$ {jsB + i}`）））;
				jsCArr.push（$。getdata（`$ {jsC + i}`）））;
				jsDArr.push（$。getdata（`$ {jsD + i}`）））;
				jsEArr.push（$。getdata（`$ {jsE + i}`）））;
				jsFArr.push（$。getdata（`$ {jsF + i}`）））;
				jsGArr.push（$。getdata（`$ {jsG + i}`）））;
				jsHArr.push（$。getdata（`$ {jsH + i}`）））;
				jsIArr.push（$。getdata（`$ {jsI + i}`）））;
				jsJArr.push（$。getdata（`$ {jsJ + i}`））;
				jsKArr.push（$。getdata（`$ {jsK + i}`））;
				jsLArr.push（$。getdata（`$ {jsL + i}`）））;
    }
  }
  console.log（
    `=============腳本執行-北京時間（UTC + 8）：$ {new Date（
      新的Date（）。getTime（）+ 8 * 60 * 60 * 1000
    ）.toLocaleString（）} ============ \ n`
  ）;
如果（Z <K）{
    $ .msg（'⚠️提示：請不要調皮🐶'）
   $ .done（）;
}
全部（）;
函數all（）{
如果（！jsAArr [K-1]）{
如果（K> R）
    $ .msg（$。name + R +'到'+（K-1）+'打印成功'+ K +'到'+ Z +'打印失敗'，'⚠️提示：請先獲取'+ K +'到'+ Z + '的ck'，'並設置好賬號數'）
如果（K == R && Z> R）
    $ .msg（$。name + K +'到'+ Z +'打印失敗'，'⚠️提示：請先獲取'+ K +'到'+ Z +'的ck'，'並設置好賬號數'）
如果（Z == R）
    $ .msg（$。name + K +'打印失敗'，'⚠️提示：請先獲取'+ K +'的ck'，'並設置好賬號數'）
   $ .done（）;
  }
  jsAVal = jsAArr [K-1];  
  jsBVal = jsBArr [K-1];  
  jsCVal = jsCArr [K-1];  
  jsDVal = jsDArr [K-1];  
  jsEVal = jsEArr [K-1];  
  jsFVal = jsFArr [K-1];  
  jsGVal = jsGArr [K-1];  
  jsHVal = jsHArr [K-1];  
  jsIVal = jsIArr [K-1];  
  jsJVal = jsJArr [K-1];  
  jsKVal = jsKArr [K-1];  
  jsLVal = jsLArr [K-1]; 
if（jsAA == 1）console.log（jsAVal + GG）
if（jsBB == 1）console.log（jsBVal + GG）
if（jsCC == 1）console.log（jsCVal + GG）
if（jsDD == 1）console.log（jsDVal + GG）
if（jsEE == 1）console.log（jsEVal + GG）
if（jsFF == 1）console.log（jsFVal + GG）
if（jsGG == 1）console.log（jsGVal + GG）
if（jsHH == 1）console.log（jsHVal + GG）
if（jsII == 1）console.log（jsIVal + GG）
if（jsJJ == 1）console.log（jsJVal + GG）
if（jsKK == 1）console.log（jsKVal + GG）
if（jsLL == 1）console.log（jsLVal + GG）
  for（讓i = 0; i <1; i ++）{
    （功能（i）{
      setTimeout（
        功能 （） {
      如果（i == 0）{  
       如果（K <Z）{
              K + = 1;
              全部（）;
}否則，如果（K == Z）{
          令F = Z-R + 1
              $ .msg（$。name + R +'到'+ Z +'，ck打印成功'，'✅已打印'+ F +'個ck'，）
              $ .done（）;
  }
 }
}，
        （i + 1）* 10
      ）;
    }）（一世）;
  }
}
}


if（DC == 0 && DR == 0）{

console.log（'😂你玩了個寂寞'）
			 $ .msg（'😂你玩了個寂寞'）
$ .done（）;

}

//更漂亮的忽略
函數Env（t，e）{class s {constructor（t）{this.env = t} send（t，e =“ GET”）{t =“ string” == typeof t？{url：t}：t ; let s = this.get;返回“ POST” === e &&（s = this.post），新的Promise（（e，i）=> {s.call（this，t，（t，s，r） => {t？i（t）：e（s）}）}}}} get（t）{返回this.send.call（this.env，t）} post（t）{返回this.send.call（ this.env，t，“ POST”）}}返回新類{constructor（t，e）{this.name = t，this.http = new s（this），this.data = null，this.dataFile =“ box.dat”，this.logs = []，this.isMute =！1，this.isNeedRewrite =！1，this.logSeparator =“ \ n”，this.startTime =（新日期）.getTime（），對象。分配（this，e），this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u5f00 \ u59cb！`）} isNode（）{返回“未定義”！== module && !!模塊的類型。 export} isQuanX（）{返回“未定義”！= typeof $ task} isSurge（）{返回“未定義”！= typeof $ httpClient &&“未定義” == typeof $ loon} isLoon（）{返回“ undefined”！== typeof $ loon} toObj（t，e = null）{try {return JSON.parse（t）} catch {return e }} toStr（t，e = null）{嘗試{返回JSON.stringify（t）}捕獲{返回e}} getjson（t，e）{let s = e; const i = this.getdata（t）; if （i）嘗試{s = JSON.parse（this.getdata（t））}捕獲{}返回s} setjson（t，e）{嘗試{返回this.setdata（JSON.stringify（t），e）}捕獲{return！1}} getScript（t）{返回新的Promise（e => {this.get（{url：t}，（t，s，i）=> e（i））}）} runScript（t， e）{返回新的Promise（s => {let i = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi”）; i = i？i.replace（/ \ n / g，“”）。trim（）：i;讓r = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi_timeout”）; r = r？1 * r：20，r = e && e.timeout？e.timeout：r; const [o，h] = i.split（“ @ “），a = {url：`http：// $ {h} / v1 / scripting / evaluate`，body：{script_text：t，mock_type：”cron“，timeout：r}，標題：{” X-Key“：o，Accept：” * / *“}} ;; this.post（a，（t，e，i）=> s（i））} ）.catch（t => this.logErr（t））} loaddata（）{if（！this.isNode（））return {}; {this.fs = this.fs？this.fs：require（“ fs” ），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（process.cwd（），this .dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e）; if（！s &&！i）return {}; {const i = s？t：e; try { return JSON.parse（this.fs.readFileSync（i））catch（t）{return {}}}}} writedata（）{if（this.isNode（））{this.fs = this.fs？this。 fs：require（“ fs”），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（ process.cwd（），this.dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e），r = JSON.stringify（this.data）; s？this。fs.writeFileSync（t，r）：i？this.fs.writeFileSync（e，r）：this.fs.writeFileSync（t，r）}} lodash_get（t，e，s）{const i = e.replace（ / \ [（\ d +）\] / g，“。$ 1”）。split（“。”）;讓r = t; for（i的常量t）if（r = Object（r）[t]，void 0 === r）返回s；返回r} lodash_set（t，e，s）{返回對象（t）！== t？t：（Array.isArray（e）||（e = e.toString（） .match（/[^.[\]]+/ g）|| []），e.slice（0，-1）.reduce（（t，s，i）=> Object（t [s]）= == t [s]？t [s]：t [s] = Math.abs（e [i + 1]）>> 0 == + e [i + 1]？[]：{}，t）[ e [e.length-1]] = s，t）} getdata（t）{讓e = this.getval（t）; if（/ ^ @ /。test（t））{const [，s，i] = / ^ @（。*？）\。（。*？）$ /。exec（t），r = s？this.getval（s）：“”; if（r）try {const t = JSON.parse （r）; e = t？this.lodash_get（t，i，“”）：e} catch（t）{e =“”}}返回e} setdata（t，e）{讓s =！1; if （/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i ），h = i？“ null” === o？null：o ||“ {}”：“ {}”;try {const e = JSON.parse（h）; this.lodash_set（e，r，t），s = this.setval（JSON.stringify（e），i）} catch（e）{const o = {}; this.lodash_set（o，r，t），s = this.setval（JSON.stringify（o），i）}}其他s = this.setval（t，e）;返回s} getval（t）{返回.isSurge（）|| this.isLoon（）？$ persistentStore.read（t）：this.isQuanX（）？$ prefs.valueForKey（t）：this.isNode（）？（this.data = this.loaddata（） ，this.data [t]）：this.data && this.data [t] || null} setval（t，e）{返回this.isSurge（）|| this.isLoon（）？$ persistentStore.write（t，e） ）：this.isQuanX（）？$ prefs.setValueForKey（t，e）：this.isNode（）？（this.data = this.loaddata（），this.data [e] = t，this.writedata（）， ！0）：this.data && this.data [e] || null} initGotEnv（t）{this.got = this.got？this.got：require（“ got”），this.cktough = this.cktough？this。 cktough：require（“ tough-cookie”），this.ckjar = this.ckjar？this.ckjar：new this.cktough.CookieJar，t &&（t.headers = t。標頭？t.headers：{}，無效0 === t.headers.Cookie && void 0 === t.cookieJar &&（（t.cookieJar = this.ckjar））} get（t，e =（（）=> {} ））{t.headers &&（刪除t.headers [“ Content-Type”]，刪除t.headers [“ Content-Length”]）），this.isSurge（）|| this.isLoon（）？（this.isSurge（ ）&& this.isNeedRewrite &&&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.get（t，（ t，s，i）=> {！t && s &&（s.body = i，s.statusCode = s.status），e（t，s，i）}）））：this.isQuanX（）？（this.isNeedRewrite &&（ t.opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode ：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t）））： this.isNode（）&&（this.initGotEnv（t），this.got（t）.on（“ redirect”，（t，e）=> {try {if（t。headers [“ set-cookie”]）{const s = t.headers [“ set-cookie”]。map（this.cktough.Cookie.parse）.toString（）; this.ckjar.setCookieSync（s，null）， e.cookieJar = this.ckjar}}捕獲（t）{this.logErr（t）}）。然後（t => {const {statusCode：s，statusCode：i，headers：r，body：o} = t ; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message：s，response：i} = t; e（s，i， i && i.body）}））} post（t，e =（（（）=> {}））{if（t.body && t.headers &&！t.headers [“ Content-Type”] &&（t.headers [“ Content -Type“] =” application / x-www-form-urlencoded“），t.headers &&刪除t.headers [” Content-Length“]，this.isSurge（）|| this.isLoon（））this.isSurge（） && this.isNeedRewrite &&&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.post（t，（t ，s，i）=> {！t && s＆＆（s.body = i，s.statusCode = s.status），e（t，s，i）}）;否則if（this.isQuanX（））t.method =“ POST”，this.isNeedRewrite &&（t .opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode： i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t））;否則（this.isNode（））{this.initGotEnv（t）; const {url：s，... i} = t; this.got.post（s，i）.then（t => {const {statusCode： s，statusCode：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message ：s，response：i} = t; e（s，i，i && i.body）}}}} time（t）{let e = {“ M +” :( new Date）.getMonth（）+ 1，“ d + “ :(新日期）.getDate（），” H +“ :(新日期）.getHours（），” m +“ :(新日期）.getMinutes（），” s +“ :(新日期）.getSeconds（）， “ q +”：Math.floor（（（（new Date）.getMonth（）+ 3）/ 3），S：（new Date）。getMilliseconds（）}; /（y +）/。test（t）&&（t = t.replace（RegExp。$ 1，（（（New Date）.getFullYear（）+“”））。substr（4-RegExp。$ 1.length ）））; for（在e中使用）new RegExp（“（” + s +“）”）。test（t）&&（t = t.replace（RegExp。$ 1,1 == RegExp。$ 1.length？e [s] :(“ 00” + e [s]）。substr（（“” + e [s]）。length））））;返回t} msg（e = t，s =“”，i =“” ，r）{const o = t => {if（！t）返回t; if（“ string” == typeof t）返回this.isLoon（）？t：this.isQuanX（）？{“ open-url” ：t}：this.isSurge（）？{url：t}：void 0; if（“ object” == typeof t）{if（this.isLoon（））{let e = t.openUrl || t.url || t [“ open-url”]，s = t.mediaUrl || t [“ media-url”];返回{openUrl：e，mediaUrl：s}} if（this.isQuanX（））{let e = t [“ open-url”] || t.url || t.openUrl，s = t [“ media-url”] || t.mediaUrl; return {“ open-url”：e，“ media-url” ：s}} if（this。isSurge（））{讓e = t.url || t.openUrl || t [“ open-url”]; return {url：e}}}} ;; this.isMute ||（（this.isSurge（）|| this.isLoon（）？$ notification.post（e，s，i，o（r））：this.isQuanX（）&& $ notify（e，s，i，o（r）））;讓h = [“ “，” ============== \ ud83d \ udce3 \ u7cfb \ u7edf \ u901a \ u77e5 \ ud83d \ udce3 ===============]; h.push（e），s && h.push（s），i && h.push（i），console.log（h.join（“ \ n”）），this.logs = this.logs.concat（h）} log （... t）{t.length> 0 &&（this.logs = [... this.logs，... t]），console.log（t.join（this.logSeparator））} logErr（t， e）{const s =！this.isSurge（）&&！this.isQuanX（）&&！this.isLoon（）; s？this.log（“”，\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t.stack）：this.log（“”，`\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t）} wait（t）{返回新的承諾（e = > setTimeout（e，t））}完成（t = {}）{const e =（新日期）.getTime（），s =（e-this。startTime）/1e3;this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u7ed3 \ u675f！\ ud83d \ udd5b $ {s} \ u79d2`），this.log（），（this .isSurge（）|| this.isQuanX（）||| this.isLoon（））&& $ done（t）}}（t，e）}
