/ *
更新時間：2020-12-06 15:46
讚賞：快手邀請碼`774010415`，農婦山泉->有點咸，萬分感謝
Github操作使用方法見[@ lxk0301]（https://raw.githubusercontent.com/lxk0301/scripts/master/githubAction.md）使用方法大同小異

請自行抓包，刷視頻即，獲得更多包數據，抓包地址為“ http://ali2.a.yximgs.com/ksc1/xxxxxx.kpg”，在Github Actions中的秘密新建名稱為' KUAISHOUMV'的一個值，拷貝文件的請求正文到下面的文本框中，本腳本不包含任何推送通知

多個請求時用'＃'號或者換行替換“！️

* /

const $ = new Env（“快手視頻”）

讓ksUrl = []，ksArr = []；

  如果（process.env.KUAISHOUMV && process.env.KUAISHOUMV.indexOf（'＃'）> -1）{
  ksUrl = process.env.KUAISHOUMV.split（'＃'）;
  console.log（`您選擇的是用“＃”重置\ n`）
  }
  否則（process.env.KUAISHOUMV && process.env.KUAISHOUMV.indexOf（'\ n'）> -1）{
  ksUrl = process.env.KUAISHOUMV.split（'\ n'）;
  console.log（`您選擇的是用換行替換\ n`）
  } 別的 {
  ksUrl = process.env.KUAISHOUMV.split（）
  }
  Object.keys（ksUrl）.forEach（（item）=> {
        如果（ksUrl [item]）{
          ksArr.push（ksUrl [item]）
        }
    }）
      console.log（`===========腳本執行-國際標準時間（UTC）：$ {new Date（）。toLocaleString（）} ============ = \ n`）
      console.log（`===========腳本執行-北京時間（UTC + 8）：$ {new Date（new Date（）。getTime（）+ 8 * 60 * 60 * 1000） .toLocaleString（）} ============= \ n`）

！（異步（）=> {
  如果（！ksArr [0]）{
    console.log（$。name，'【提示】請把抓包地址填入Github的秘密中，請以＃或者換行替換'）
    返回;
  }
  for（讓i = 0; i <ksArr.length; i ++）{
    如果（ksArr [i]）{
      playUrl = ksArr [i];
      $ .index = i + 1;
    console.log（`------------------------- \ n \ n開始快手極速版第$ {$。index}個視頻`）
    }
     for（讓j = 0; j <5; j ++）{
      等待AutoRead（）;
      await $ .wait（10000）;
      console.log（`\ n請等待10s後繼續視頻$ {$。index}第$ {j + 1}次任務`）
    }
 };
   console.log（`------------------------- \ n \ n快手視頻共完成任務（$ {$。index} * 5）次，視頻金幣詳情見App，任務全部結束`）
}）（）
  .catch（（e）=> $ .logErr（e））
  .finally（（）=> $ .done（））

函數AutoRead（）{
 返回新的Promise（（resolve）=> { 
   const myRequest = {
    網址：playUrl，
    標頭：{
      'Accept-Encoding'：`gzip，deflate`，
      'Connection'：`close`，
      'Accept'：`application / json`，
      '主機'：`tx2.a.yximgs.com`，
      'User-Agent'：`kwai-ios`，
      'Accept-Language'：`zh-Hans-CN; q = 1，en-CN; q = 0.9，zh-Hant-CN; q = 0.8`}，
};
  $ .get（myRequest，（錯誤，響應，數據）=> {
     如果（錯誤）{
     console.log（“響應數據失敗：” + response.statusCode +“ \ n \ n” +數據）；
     }
    //console.log(response.statusCode +“ \ n \ n” +數據）;
    // $。done（）;
      }）
    解決（）
   }） 
}

函數Env（t，e）{class s {constructor（t）{this.env = t} send（t，e =“ GET”）{t =“ string” == typeof t？{url：t}：t ; let s = this.get;返回“ POST” === e &&（s = this.post），新的Promise（（e，i）=> {s.call（this，t，（t，s，r） => {t？i（t）：e（s）}）}）}} get（t）{返回this.send.call（this.env，t）} post（t）{返回this.send.call（ this.env，t，“ POST”）}}返回新類{constructor（t，e）{this.name = t，this.http = new s（this），this.data = null，this.dataFile =“ box.dat”，this.logs = []，this.isMute =！1，this.isNeedRewrite =！1，this.logSeparator =“ \ n”，this.startTime =（新日期）.getTime（），對象。分配（this，e），this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u5f00 \ u59cb！`）} isNode（）{返回“未定義”！=模塊類型&& !!模塊。 export} isQuanX（）{返回“未定義”！= typeof $ task} isSurge（）{返回“未定義”！= typeof $ httpClient &&“未定義” == typeof $ loon} isLoon（）{返回“ undefined”！== typeof $ loon} toObj（t，e = null）{try {return JSON.parse（t）} catch {return e }} toStr（t，e = null）{try {return JSON.stringify（t）} catch {return e}} getjson（t，e）{let s = e; const i = this.getdata（t）; if （i）嘗試{s = JSON.parse（this.getdata（t））}捕獲{}返回s} setjson（t，e）{嘗試{返回this.setdata（JSON.stringify（t），e）}捕獲{return！1}} getScript（t）{返回新的Promise（e => {this.get（{url：t}，（t，s，i）=> e（i））}）} runScript（t， e）{返回新的Promise（s => {let i = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi”）; i = i？i.replace（/ \ n / g，“”）。trim（）：i;讓r = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi_timeout”）; r = r？1 * r：20，r = e && e.timeout？e.timeout：r; const [o，h] = i.split（“ @ “），a = {url：`http：// $ {h} / v1 / scripting / evaluate`，body：{script_text：t，mock_type：”cron“，超時：r}，標題：{” X-Key“：o，接受：” * / *“}} ;; this.post（a，（t，e，i）=> s（i））} ）.catch（t => this.logErr（t））} loaddata（）{if（！this.isNode（））return {}; {this.fs = this.fs？this.fs：require（“ fs” ），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（process.cwd（），this .dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e）; if（！s &&！i）return {}; {const i = s？t：e; try { return JSON.parse（this.fs.readFileSync（i））catch（t）{return {}}}}} writedata（）{if（this.isNode（））{this.fs = this.fs？this。 fs：require（“ fs”），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（ process.cwd（），this.dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e），r = JSON.stringify（this.data）; s？this。fs.writeFileSync（t，r）：i？this.fs.writeFileSync（e，r）：this.fs.writeFileSync（t，r）}} lodash_get（t，e，s）{const i = e.replace（ / \ [（\ d +）\] / g，“。$ 1”）。split（“。”）;讓r = t; for（i的常量t）if（r = Object（r）[t]，void 0 === r）返回s；返回r} lodash_set（t，e，s）{返回Object（t）！== t？t：（Array.isArray（e）||（e = e.toString（） .match（/[^.[\]]+/ g）|| []），e.slice（0，-1）.reduce（（t，s，i）=> Object（t [s]）= == t [s]？t [s]：t [s] = Math.abs（e [i + 1]）>> 0 == + e [i + 1]？[]：{}，t）[ e [e.length-1]] = s，t）} getdata（t）{讓e = this.getval（t）; if（/ ^ @ /。test（t））{const [，s，i] = / ^ @（。*？）\。（。*？）$ /。exec（t），r = s？this.getval（s）：“”; if（r）try {const t = JSON.parse （r）; e = t？this.lodash_get（t，i，“”）：e} catch（t）{e =“”}}返回e} setdata（t，e）{讓s =！1; if （/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i ），h = i？“ null” === o？null：o ||“ {}”：“ {}”;try {const e = JSON.parse（h）; this.lodash_set（e，r，t），s = this.setval（JSON.stringify（e），i）} catch（e）{const o = {}; this.lodash_set（o，r，t），s = this.setval（JSON.stringify（o），i）}}其他s = this.setval（t，e）; return s} getval（t）{return this .isSurge（）|| this.isLoon（）？$ persistentStore.read（t）：this.isQuanX（）？$ prefs.valueForKey（t）：this.isNode（）？（this.data = this.loaddata（） ，this.data [t]）：this.data && this.data [t] || null} setval（t，e）{返回this.isSurge（）|| this.isLoon（）？$ persistentStore.write（t，e ）：this.isQuanX（）？$ prefs.setValueForKey（t，e）：this.isNode（）？（this.data = this.loaddata（），this.data [e] = t，this.writedata（）， ！0）：this.data && this.data [e] || null} initGotEnv（t）{this.got = this.got？this.got：require（“ got”），this.cktough = this.cktough？this。 cktough：require（“ tough-cookie”），this.ckjar = this.ckjar？this.ckjar：new this.cktough.CookieJar，t &&（t.headers = t。標頭？t.headers：{}，無效0 ==== t.headers.Cookie && void 0 === t.cookieJar &&（（t.cookieJar = this.ckjar））} get（t，e =（（）=> {} ））{t.headers &&（刪除t.headers [“ Content-Type”]，刪除t.headers [“ Content-Length”]）），this.isSurge（）|| this.isLoon（）？（this.isSurge（ ）&& this.isNeedRewrite &&&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.get（t，（ t，s，i）=> {！t && s &&（s.body = i，s.statusCode = s.status），e（t，s，i）}）））：this.isQuanX（）？（this.isNeedRewrite &&（ t.opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode ：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t）））： this.isNode（）&&（this.initGotEnv（t），this.got（t）.on（“ redirect”，（t，e）=> {try {if（t。headers [“ set-cookie”]）{const s = t.headers [“ set-cookie”]。map（this.cktough.Cookie.parse）.toString（）; this.ckjar.setCookieSync（s，null）， e.cookieJar = this.ckjar}}捕獲（t）{this.logErr（t）}）。然後（t => {const {statusCode：s，statusCode：i，headers：r，body：o} = t ; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message：s，response：i} = t; e（s，i， i && i.body）}））} post（t，e =（（）=> {}））{if（t.body && t.headers &&！t.headers [“ Content-Type”] &&（t.headers [“ Content -Type“] =” application / x-www-form-urlencoded“），t.headers &&刪除t.headers [” Content-Length“]，this.isSurge（）|| this.isLoon（））this.isSurge（） && this.isNeedRewrite &&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.post（t，（t ，s，i）=> {！t && s＆＆（s.body = i，s.statusCode = s.status），e（t，s，i）}）;否則if（this.isQuanX（））t.method =“ POST”，this.isNeedRewrite &&（t .opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode： i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t））;否則（this.isNode（））{this.initGotEnv（t）; const {url：s，... i} = t; this.got.post（s，i）.then（t => {const {statusCode： s，statusCode：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message ：s，response：i} = t; e（s，i，i && i.body）}}}} time（t）{let e = {“ M +” :( new Date）.getMonth（）+ 1，“ d + “ :(新日期）.getDate（），” H +“ :(新日期）.getHours（），” m +“ :(新日期）.getMinutes（），” s +“ :(新日期）.getSeconds（）， “ q +”：Math.floor（（（（new Date）.getMonth（）+ 3）/ 3），S：（new Date）。getMilliseconds（）}; /（y +）/。test（t）&&（t = t.replace（RegExp。$ 1，（（（New Date）.getFullYear（）+“”））。substr（4-RegExp。$ 1.length ）））; for（在e中使用）new RegExp（“（” + s +“）”）。test（t）&&（t = t.replace（RegExp。$ 1,1 == RegExp。$ 1.length？e [s] :(“ 00” + e [s]）。substr（（“” + e [s]）。length））））;返回t} msg（e = t，s =“”，i =“” ，r）{const o = t => {if（！t）返回t; if（“ string” == typeof t）返回this.isLoon（）？t：this.isQuanX（）？{“ open-url” ：t}：this.isSurge（）？{url：t}：void 0; if（“ object” == typeof t）{if（this.isLoon（））{let e = t.openUrl || t.url || t [“ open-url”]，s = t.mediaUrl || t [“ media-url”];返回{openUrl：e，mediaUrl：s}} if（this.isQuanX（））{let e = t [“ open-url”] || t.url || t.openUrl，s = t [“ media-url”] || t.mediaUrl; return {“ open-url”：e，“ media-url” ：s}} if（this。isSurge（））{讓e = t.url || t.openUrl || t [“ open-url”]; return {url：e}}}} ;; this.isMute ||（（this.isSurge（）|| this.isLoon（）？$ notification.post（e，s，i，o（r））：this.isQuanX（）&& $ notify（e，s，i，o（r）））;讓h = [“ “，” ============== \ ud83d \ udce3 \ u7cfb \ u7edf \ u901a \ u77e5 \ ud83d \ udce3 ===============]; h.push（e），s && h.push（s），i && h.push（i），console.log（h.join（“ \ n”）），this.logs = this.logs.concat（h）} log （... t）{t.length> 0 &&（this.logs = [... this.logs，... t]），console.log（t.join（this.logSeparator））} logErr（t， e）{const s =！this.isSurge（）&&！this.isQuanX（）&&！this.isLoon（）; s？this.log（“”，\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t.stack）：this.log（“”，`\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t）} wait（t）{返回新的承諾（e = > setTimeout（e，t））}完成（t = {}）{const e =（新日期）.getTime（），s =（e-this。startTime）/1e3;this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u7ed3 \ u675f！\ ud83d \ udd5b $ {s} \ u79d2`），this.log（），（this .isSurge（）|| this.isQuanX（）||| this.isLoon（））&& $ done（t）}}（t，e）}
