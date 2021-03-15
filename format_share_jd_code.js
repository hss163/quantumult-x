
const $ = new Env（“從日誌中獲取互助碼並格式化”）;
const notifyMsg =``;
const notify = $ .isNode（）嗎？require（“ ./ sendNotify”）：“”;
const fs = require（“ fs”）;
const path = require（“ path”）;
$ .shareCodeObj = {};
$ .exportStr =“”;

讓fsjd_notify_control = true

如果（！$。isNode（））{
  console.log（“不是nodejs環境”）;
} 別的 {
  如果（process.env.FSJD_NOTIFY_CONTROL ===“ true”）{
    fsjd_notify_control =假
  }

  讓filePath = path.resolve（__ dirname，“ ../log/export_sharecodes”）;
  讓readDir = fs.readdirSync（filePath）.reverse（）;
  讓fileName;

  如果（readDir && readDir.length> 0）{
    fileName = readDir [0];
  } 別的 {
    console.log（“沒有生成日誌，請手動運行bash export_sharecodes.sh”）;
  }

  //閱讀日誌
  讓文件= path.resolve（__ dirname，filePath，fileName）;
  fs.readFile（file，“ utf-8”，function（err，data）{
    如果（錯誤）{
      console.error（err）;
    } 別的 {
      console.log（“讀取文件成功”）;
      // console.log（data）;
      //按互助碼分割
      令arr =數據
        .split（“ \ n”）
        .map（（item）=> {
          如果（item ===“”）{
            返回“ $＆$”；
          } 別的 {
            歸還物品;
          }
        }）
        。加入（””）
        .split（“ $＆$”）;

      $ .shareCodeObj.Bean = exportShareCodes（arr，“種豆得豆：”）;
      $ .shareCodeObj.Fruit = exportShareCodes（arr，“東東農場：”）;
      $ .shareCodeObj.Pet = exportShareCodes（arr，“東東萌寵：”）;
      $ .shareCodeObj.DreamFactory = exportShareCodes（arr，“京喜工廠：”）;
      $ .shareCodeObj.Jxnc = exportShareCodes（arr，“京喜農場：”）;
      $ .shareCodeObj.JdFactory = exportShareCodes（arr，“東東工廠：”）;
      $ .shareCodeObj.Joy = exportShareCodes（arr，“瘋狂的JOY：”）;
      $ .shareCodeObj.Cash = exportShareCodes（arr，“簽到領現金：”）;
      $ .shareCodeObj.Sgmh = exportShareCodes（arr，“閃購盲盒：”）;
      $ .shareCodeObj.Cfd = exportShareCodes（arr，“京喜財富島：”）;
      $ .shareCodeObj.Kdsd = exportShareCodes（arr，“口袋書店：”）;
      $ .shareCodeObj.Jdcfd = exportShareCodes（arr，“京喜財富島：”）;
      $ .shareCodeObj.Global = exportShareCodes（arr，“環球挑戰賽：”）;

      showFormatMsg（$。shareCodeObj）;

    }
  }）;
}

//通用格式化
const exportShareCodes =（arr，zhName）=> {
  const resShareCodeArr = [];
  &&
    arr.forEach（（item）=> {
      如果（item.startsWith（zhName））{
        console.log（item）;
        //【】類型的分割
        let reg = /（[[]] | [：\ s *] | []]）（[A-Za-z0-9 = \ -_ {}：“'，] +）[\ u3010] / g;
        // let reg = /）】\ w +【京東/ g;
        讓resArr = item.match（reg）;
        讓itemSplits = item.split（/ []] | [：] /）;
        // console.log（resArr）;

        resArr &&
          resArr.forEach（（item）=> {
            // console.log（item）;
            resShareCodeArr.push（item.slice（1，-1））;
          }）;
        resShareCodeArr.push（itemSplits [itemSplits.length-1]）;
      }
    }）;
  返回resShareCodeArr;
};

函數showFormatMsg（shareCodeObj）{
  console.log（
    `\ n ==========【格式化互助碼只留隨機4-5個（一定有第一個）】==========`
  ）;
  console.log（`\ n提交機器人@Turing Lab Bot \ n`）;
  console.log（
    `/ submit_activity_codes bean $ {getRandomArrayElements（
      shareCodeObj.Bean
    ）.join（“＆”）} \ n`
  ）;
  console.log（
    `/ submit_activity_codes服務器場$ {getRandomArrayElements（
      shareCodeObj.Fruit
    ）.join（“＆”）} \ n`
  ）;
  console.log（
    `/ submit_activity_codes pet $ {getRandomArrayElements（shareCodeObj.Pet）.join（
      “＆”
    ）} \ n`
  ）;
  console.log（
    `/ submit_activity_codes jxfactory $ {getRandomArrayElements（
      shareCodeObj.DreamFactory
    ）.join（“＆”）} \ n`
  ）;
  console.log（
    `/ submit_activity_codes ddfactory $ {getRandomArrayElements（
      shareCodeObj.JdFactory
    ）.join（“＆”）} \ n`
  ）;
  //臨時活動
  console.log（
    `/ submit_activity_codes sgmh $ {getRandomArrayElements（
      shareCodeObj.Sgmh
    ）.join（“＆”）} \ n`
  ）;
  console.log（
    `/ submit_activity_codes jxcfd $ {getRandomArrayElements（
      shareCodeObj.Cfd
    ）.join（“＆”）} \ n`
  ）;

  console.log（`\ n提交機器人@Commit Code Bot \ n`）;
  console.log（
    `/ jdcash $ {getRandomArrayElements（shareCodeObj.Cash）.join（“＆”）} \ n`
  ）;
  console.log（
    `/ jdcrazyjoy $ {getRandomArrayElements（shareCodeObj.Joy）.join（“＆”）} \ n`
  ）;

  console.log（`\ n ==========【為docker格式化互助碼===========）；
  formatShareCodesForLinux（
    shareCodeObj.Bean，
    “種豆得豆”，
    “ MyBean”，
    “ ForOtherBean”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Fruit，
    “東東農場”，
    “ MyFruit”，
    “用於其他水果”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Pet，
    “東東萌寵”，
    “我的寵物”，
    “ ForOtherPet”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Jxnc，
    “京喜農場”，
    “ MyJxnc”，
    “ ForOtherJxnc”，
    “”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.DreamFactory，
    “京喜工廠”，
    “ MyDreamFactory”，
    “ ForOtherDreamFactory”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.JdFactory，
    “東東工廠”，
    “ MyJdFactory”，
    “ ForOtherJdFactory”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Cash，
    “簽到領現金”，
    “ MyCash”，
    “ ForOtherCash”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Joy，
    “瘋狂的快樂”，
    “個人喜樂”，
    “ ForOtherJoy”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Sgmh，
    “閃購盲盒”，
    “ MySgmh”，
    “ ForOtherSgmh”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Jdcfd，
    “京喜財富島”，
    “ MyCfd”，
    “ ForOtherMyCfd”
  ）;
  formatShareCodesForLinux（
    shareCodeObj.Global，
    “環球挑戰賽”，
    “ MyGlobal”，
    “ ForOtherGlobal”
  ）;
}

const formatShareCodesForLinux =（
  arr = []，
  名稱=“”，
  itemName =“”，
  forOtherName =“”，
  標記='“'
）=> {
  //我的系列格式化
  $ .exportStr + =`＃$ {name} \ n`;
  console.log（`＃$ {name}`）;
  const nameArr = [];
  for（讓i = 0; i <arr.length; i ++）{
    const item = arr [i];
    const log =`$ {itemName} $ {i + 1} = $ {marks} $ {item} $ {marks}`;
    $ .exportStr + =`$ {log} \ n`;
    console.log（log）;
    const name =“ $ {” + itemName +（i + 1）+“}”;
    nameArr.push（名稱）;
  }

  // ForOther系列格式化
  //以種豆得豆個數為準循環生成其他互助補齊沒有互助碼的號的互助名額
  for（讓m = 0; m <$ .shareCodeObj.Bean.length; m ++）{
    // for（let m = 0; m <nameArr.length; m ++）{
    // const item = nameArr [m]
    // console.log（
    //`$ {forOtherName} $ {m + 1} ='$ {nameArr
    // .filter（cell => cell！== item）
    // .join（'@'）}'`
    //）
    const log =`$ {forOtherName} $ {m + 1} =“ $ {nameArr.join（” @“）}”“`;;
    $ .exportStr + =`$ {log} \ n`;
    console.log（log）;
  }
};

//隨機區片斷中的幾個元素，必有第一個元素
函數getRandomArrayElements（arr = []，count = 4）{
  如果（arr.length <= 5）{
    返回arr;
  } 別的 {
    讓洗牌= arr.slice（0），
      i =長度，
      最小值=我-數，
      溫度，
      指數;
    而（i-->分鐘）{
      索引= Math.floor（（i + 1）* Math.random（））;
      temp = shuffled [index];
      shuffled [index] = shuffled [i];
      shuffled [i] = temp;
    }
    const res = [arr [0]，... shuffled.slice（min）];
    返回[... new Set（res）];
  }
};

//更漂亮的忽略
函數Env（t，e）{class s {constructor（t）{this.env = t} send（t，e =“ GET”）{t =“ string” == typeof t？{url：t}：t ; let s = this.get;返回“ POST” === e &&（s = this.post），新的Promise（（e，i）=> {s.call（this，t，（t，s，r） => {t？i（t）：e（s）}）}）}} get（t）{返回this.send.call（this.env，t）} post（t）{返回this.send.call（ this.env，t，“ POST”）}}返回新類{constructor（t，e）{this.name = t，this.http = new s（this），this.data = null，this.dataFile =“ box.dat”，this.logs = []，this.isMute =！1，this.isNeedRewrite =！1，this.logSeparator =“ \ n”，this.startTime =（新日期）.getTime（），對象。分配（this，e），this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u5f00 \ u59cb！`）} isNode（）{返回“未定義”！=模塊類型&& !!模塊。 export} isQuanX（）{返回“未定義”！= typeof $ task} isSurge（）{返回“未定義”！= typeof $ httpClient &&“未定義” == typeof $ loon} isLoon（）{返回“ undefined”！== typeof $ loon} toObj（t，e = null）{try {return JSON.parse（t）} catch {return e }} toStr（t，e = null）{try {return JSON.stringify（t）} catch {return e}} getjson（t，e）{let s = e; const i = this.getdata（t）; if （i）嘗試{s = JSON.parse（this.getdata（t））}捕獲{}返回s} setjson（t，e）{嘗試{返回this.setdata（JSON.stringify（t），e）}捕獲{return！1}} getScript（t）{返回新的Promise（e => {this.get（{url：t}，（t，s，i）=> e（i））}）} runScript（t， e）{返回新的Promise（s => {let i = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi”）; i = i？i.replace（/ \ n / g，“”）。trim（）：i;讓r = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi_timeout”）; r = r？1 * r：20，r = e && e.timeout？e.timeout：r; const [o，h] = i.split（“ @ “），a = {url：`http：// $ {h} / v1 / scripting / evaluate`，body：{script_text：t，mock_type：”cron“，超時：r}，標題：{” X-Key“：o，接受：” * / *“}} ;; this.post（a，（t，e，i）=> s（i））} ）.catch（t => this.logErr（t））} loaddata（）{if（！this.isNode（））return {}; {this.fs = this.fs？this.fs：require（“ fs” ），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（process.cwd（），this .dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e）; if（！s &&！i）return {}; {const i = s？t：e; try { return JSON.parse（this.fs.readFileSync（i））catch（t）{return {}}}}} writedata（）{if（this.isNode（））{this.fs = this.fs？this。 fs：require（“ fs”），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（ process.cwd（），this.dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e），r = JSON.stringify（this.data）; s？this。fs.writeFileSync（t，r）：i？this.fs.writeFileSync（e，r）：this.fs.writeFileSync（t，r）}} lodash_get（t，e，s）{const i = e.replace（ / \ [（\ d +）\] / g，“。$ 1”）。split（“。”）;讓r = t; for（i的t常數）if（r = Object（r）[t]，void 0 === r）返回s；返回r} lodash_set（t，e，s）{返回Object（t）！== t？t：（Array.isArray（e）||（e = e.toString（） .match（/[^.[\]]+/ g）|| []），e.slice（0，-1）.reduce（（t，s，i）=> Object（t [s]）= == t [s]？t [s]：t [s] = Math.abs（e [i + 1]）>> 0 == + e [i + 1]？[]：{}，t）[ e [e.length-1]] = s，t）} getdata（t）{讓e = this.getval（t）; if（/ ^ @ /。test（t））{const [，s，i] = / ^ @（。*？）\。（。*？）$ /。exec（t），r = s？this.getval（s）：“”; if（r）try {const t = JSON.parse （r）; e = t？this.lodash_get（t，i，“”）：e} catch（t）{e =“”}}返回e} setdata（t，e）{讓s =！1; if （/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i ），h = i？“ null” === o？null：o ||“ {}”：“ {}”;try {const e = JSON.parse（h）; this.lodash_set（e，r，t），s = this.setval（JSON.stringify（e），i）} catch（e）{const o = {}; this.lodash_set（o，r，t），s = this.setval（JSON.stringify（o），i）}}其他s = this.setval（t，e）; return s} getval（t）{return this .isSurge（）|| this.isLoon（）？$ persistentStore.read（t）：this.isQuanX（）？$ prefs.valueForKey（t）：this.isNode（）？（this.data = this.loaddata（） ，this.data [t]）：this.data && this.data [t] || null} setval（t，e）{返回this.isSurge（）|| this.isLoon（）？$ persistentStore.write（t，e ）：this.isQuanX（）？$ prefs.setValueForKey（t，e）：this.isNode（）？（this.data = this.loaddata（），this.data [e] = t，this.writedata（）， ！0）：this.data && this.data [e] || null} initGotEnv（t）{this.got = this.got？this.got：require（“ got”），this.cktough = this.cktough？this。 cktough：require（“ tough-cookie”），this.ckjar = this.ckjar？this.ckjar：new this.cktough.CookieJar，t &&（t.headers = t。標頭？t.headers：{}，無效0 ==== t.headers.Cookie && void 0 === t.cookieJar &&（（t.cookieJar = this.ckjar））} get（t，e =（（）=> {} ））{t.headers &&（刪除t.headers [“ Content-Type”]，刪除t.headers [“ Content-Length”]）），this.isSurge（）|| this.isLoon（）？（this.isSurge（ ）&& this.isNeedRewrite &&&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.get（t，（ t，s，i）=> {！t && s &&（s.body = i，s.statusCode = s.status），e（t，s，i）}）））：this.isQuanX（）？（this.isNeedRewrite &&（ t.opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode ：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t）））： this.isNode（）&&（this.initGotEnv（t），this.got（t）.on（“ redirect”，（t，e）=> {try {if（t。headers [“ set-cookie”]）{const s = t.headers [“ set-cookie”]。map（this.cktough.Cookie.parse）.toString（）; this.ckjar.setCookieSync（s，null）， e.cookieJar = this.ckjar}}捕獲（t）{this.logErr（t）}）。然後（t => {const {statusCode：s，statusCode：i，headers：r，body：o} = t ; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message：s，response：i} = t; e（s，i， i && i.body）}））} post（t，e =（（）=> {}））{if（t.body && t.headers &&！t.headers [“ Content-Type”] &&（t.headers [“ Content -Type“] =” application / x-www-form-urlencoded“），t.headers &&刪除t.headers [” Content-Length“]，this.isSurge（）|| this.isLoon（））this.isSurge（） && this.isNeedRewrite &&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.post（t，（t ，s，i）=> {！t && s＆＆（s.body = i，s.statusCode = s.status），e（t，s，i）}）;否則if（this.isQuanX（））t.method =“ POST”，this.isNeedRewrite &&（t .opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode： i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t））;否則（this.isNode（））{this.initGotEnv（t）; const {url：s，... i} = t; this.got.post（s，i）.then（t => {const {statusCode： s，statusCode：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message ：s，response：i} = t; e（s，i，i && i.body）}}}} time（t）{let e = {“ M +” :( new Date）.getMonth（）+ 1，“ d + “ :(新日期）.getDate（），” H +“ :(新日期）.getHours（），” m +“ :(新日期）.getMinutes（），” s +“ :(新日期）.getSeconds（）， “ q +”：Math.floor（（（（new Date）.getMonth（）+ 3）/ 3），S：（new Date）。getMilliseconds（）}; /（y +）/。test（t）&&（t = t.replace（RegExp。$ 1，（（（New Date）.getFullYear（）+“”））。substr（4-RegExp。$ 1.length ）））; for（在e中使用）new RegExp（“（” + s +“）”）。test（t）&&（t = t.replace（RegExp。$ 1,1 == RegExp。$ 1.length？e [s] :(“ 00” + e [s]）。substr（（“” + e [s]）。length））））;返回t} msg（e = t，s =“”，i =“” ，r）{const o = t => {if（！t）返回t; if（“ string” == typeof t）返回this.isLoon（）？t：this.isQuanX（）？{“ open-url” ：t}：this.isSurge（）？{url：t}：void 0; if（“ object” == typeof t）{if（this.isLoon（））{let e = t.openUrl || t.url || t [“ open-url”]，s = t.mediaUrl || t [“ media-url”];返回{openUrl：e，mediaUrl：s}} if（this.isQuanX（））{let e = t [“ open-url”] || t.url || t.openUrl，s = t [“ media-url”] || t.mediaUrl; return {“ open-url”：e，“ media-url” ：s}} if（this。isSurge（））{讓e = t.url || t.openUrl || t [“ open-url”]; return {url：e}}}} ;; this.isMute ||（（this.isSurge（）|| this.isLoon（）？$ notification.post（e，s，i，o（r））：this.isQuanX（）&& $ notify（e，s，i，o（r）））;讓h = [“ “，” ============== \ ud83d \ udce3 \ u7cfb \ u7edf \ u901a \ u77e5 \ ud83d \ udce3 ===============]; h.push（e），s && h.push（s），i && h.push（i），console.log（h.join（“ \ n”）），this.logs = this.logs.concat（h）} log （... t）{t.length> 0 &&（this.logs = [... this.logs，... t]），console.log（t.join（this.logSeparator））} logErr（t， e）{const s =！this.isSurge（）&&！this.isQuanX（）&&！this.isLoon（）; s？this.log（“”，\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t.stack）：this.log（“”，`\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t）} wait（t）{返回新的承諾（e = > setTimeout（e，t））}完成（t = {}）{const e =（新日期）.getTime（），s =（e-this。startTime）/1e3;this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u7ed3 \ u675f！\ ud83d \ udd5b $ {s} \ u79d2`），this.log（），（this .isSurge（）|| this.isQuanX（）||| this.isLoon（））&& $ done（t）}}（t，e）}
