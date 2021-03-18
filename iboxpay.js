/ *子野 
github地址https://github.com/6Svip120apk69
TG頻道地址https://t.me/ziyescript
TG交流群https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs鏈接https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json
轉載請備註個名字，謝謝

⚠️笑譜
腳本運行一次   
則運行6次視頻1次金蛋1次直播（實時關閉，且在8點到23點有效）

1.15調整金蛋延遲為60秒
1.17增加ck重新提醒，以及金幣滿額停止
1.27笑譜恢復，活動id284
1.27-2增加觀看直播功能，或關閉關閉，設置LIVE來開啟如設置LIVE為60則開啟直播，並且次數達到60次停止
1.27-3調整直播運行次數，運行一次腳本，執行6次直播
1.27-4調整策略，6次視頻1次金蛋1次直播
1.28修復收益列表問題
1.29活動id302
1.30修復活動id不斷變化問題，修復金蛋視頻id
1.30解決ck失效問題
1.30-3增加提現
1.31增加180秒任務，優先直播，修改直播金幣顯示
1.31-2調整決策
2.1增加CK獲取時間
2.2優化
2.3修復直播問題，採用真實直播id
2.3設置LIVE為61時單跑直播
2.3修復錯誤，修復直播收益顯示
2.4修復金蛋問題，增加視頻收益統計，增加上限確定，達到上限以及19點後不執行視頻，
2.4直播限制為30設置LIVE為0不跑直播，1跑直播和視頻，2單跑直播
2.5增加首次視頻驗證，灰號直接停止視頻
2.6修復判定錯誤，增加浪湧獲取令牌重新
2.7增加紅包雨，設置LIVE等於3開啟
2.7-2調整紅包雨運行機制
2.8修復無人直播出現的錯誤
2.8-2修復紅包雨結束報錯
2.8-3增加通過驗證碼獲取令牌功能，並內置標題，新人設置LIVE為888
2.8-4修復錯誤
2.10修復紅包雨問題，LIVE設置3啟動紅包雨活動，修復版本問題
2.10-2可拆卸紅包雨模塊
2.11可移除視頻時間限制，LIVE設置666做新人180秒任務
2.26適應直播上限20次
3.5設置888由上至下循環提現
3.8替換為循環獲取ck
3.9因視頻功能無效，故取消視頻，交替開啟直播
3.17修復視頻功能，暫時設置ck上限為10
3.18修復視頻錯誤，修復小錯誤
⚠️一共1個位置3個ck👉7條秘密 
多賬號換行


⚠️方法一

首先進入進入譜選擇手機號登陸，輸入手機號，點擊獲取驗證碼

第二步⚠️進入boxjs（其他平台則輸入對應環境變量）輸入當前賬號序號輸入手機號和驗證碼

第三步運行js手機則自動獲取令牌（其他平台則復制令牌，填充環境變量）然後返回boxjs修改驗證碼為0


已全部操作完成


⚠️方法二

首先添加hostname = veishop.iboxpay.com，

第二步⚠️添加笑譜獲取更新TOKEN重組  

登錄笑譜（在登錄狀態就退出，重新登錄）獲取更新TOKEN



refreshtokenVal👉XP_refreshTOKEN
iboxpayvideoheaderVal👉XP_iboxpayvideoHEADER
iboxpayvideobodyVal👉XP_iboxpayvideoBODY


⚠️視頻ck
添加視頻ck重寫圈滿獲取header和body，若遇到網絡問題，請切換到4G



設置任務可設置0 1 2 0開視頻關直播1開視頻開直播2關視頻開直播
 LIVE👉XP_live

設置提現金額可設置0 1 15 30 50 100 888默認0關閉設置888由上至下循環提現
現金👉XP_CASH 

設置手機號 
 電話👉XP_phone

設置驗證碼默認0關閉獲取令牌功能
短信👉XP_sms

主機️主機名以及重組👇

（手機可以獲取refreshTOKEN其他開啟抓包，然後登錄笑譜，找到https://veishop.iboxpay.com/nf_gateway/nf-user-auth-web/ignore_tk/veishop/v1/裡的響應體refreshTOKEN）

hostname = veishop.iboxpay.com

###############圈x

＃笑譜獲取更新TOKEN
https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf-user-auth-web \ / ignore_tk \ / veishop \ / v1 \ / *網址腳本-響應正文https：//raw.githubusercontent .com / 6Svip120apk69 / gitee_q8qsTAUA_cThxc1RBVUE / main / Task / iboxpay.js

＃笑譜獲取視頻ck
https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf_customer_activity \ / day_cash \ / v1 \ /give_gold_coin_by_video.json url腳本請求正文https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThx main / Task / iboxpay.js

############### loon
http響應https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf-user-auth-web \ / ignore_tk \ / veishop \ / v1 \ / * script-path = https：// raw。 githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js，require-body = 1，max-size = 0，tag =笑普令牌

http-需要https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf_customer_activity \ / day_cash \ / v1 \ /give_gold_coin_by_video.json腳本路徑= https：//raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_ /main/Task/iboxpay.js，require-body = 1，max-size = 0，tag =笑譜獲取視頻ck
＃＃＃＃＃＃＃＃＃＃＃＃＃＃ 湧

＃笑譜獲取更新TOKEN
笑譜獲取更新令牌=類型= http響應，模式= https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf-user-auth-web \ / ignore_tk \ / veishop \ / v1 \ / *，requires-body = 1，max-size = 0，script-path = https：//raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js

＃笑譜獲取視頻ck
笑譜獲取視頻ck = type = http-requires，pattern = https：\ / \ / veishop \ .iboxpay \ .com \ / nf_gateway \ / nf_customer_activity \ / day_cash \ / v1 \ /give_gold_coin_by_video.json,requires-body=1 ，max-size = 0，script-path = https：//raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js



* /
GXRZ ='3.18修復視頻錯誤，修復小錯誤'
const $ = Env（“笑譜”）;
$ .idx =（$ .idx =（$ .getval（'iboxpaySuffix'）||'1'）-1）> 0嗎？（$ .idx +1 +''）：''; //賬號擴展字符
const notify = $ .isNode（）嗎？require（“ ./ sendNotify”）：``;
const COOKIE = $ .isNode（）嗎？require（“ ../ iboxpayCOOKIE”）：``;
const日誌= 0; // 0為關閉日誌，1為開啟
const notifyttt = 1 // 0為關閉外部推進，1為12 23點外部推進
const notifyInterval = 2; // 0為關閉通知，1為所有通知，2為12 23點通知，3為6 12 18 23點通知
const CS = 5
$ .message =''，COOKIES_SPLIT =''，CASH =''，LIVE =''，電話=''，sms =''，ddtime =''，spid =''，令牌='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'，zbid = ''，cashcs =''，newcashcs =''，liveId ='';
讓livecs = 0，
    videocs = 0，
    生命= 0，
    HBY = 0，
    liveIdcd = 0;
RT = 30000；
const refreshtokenArr = [];
讓refreshtokenVal =``;
讓middlerefreshTOKEN = [];
const iboxpayvideoheaderArr = [];
讓iboxpayvideoheaderVal =``;
讓middleiboxpayvideoHEADER = [];
const iboxpayvideobodyArr = [];
讓iboxpayvideobodyVal =``;
讓middleiboxpayvideoBODY = [];
如果（$ .isNode（））{
    //沒有設置XP_CASH則默認為0不提現
    現金= process.env.XP_CASH || 0;
    //沒有設置XP_live則默認0
    LIVE = process.env.XP_live || 0;
    //沒有設置XP_phone則默認為0 
    電話= process.env.XP_phone || 0;
    //沒有設置XP_sms則默認0不獲取TOKEN
    sms = process.env.XP_sms || 0

}
如果（$ .isNode（）&& process.env.XP_refreshTOKEN）{
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || “ \ n”;
    console.log（
        `============ Cookies分隔符為：$ {JSON.stringify（
      COOKIES_SPLIT
    ）} ============= \ n`
    ）;
    如果 （
        process.env.XP_refreshTOKEN &&
        process.env.XP_refreshTOKEN.indexOf（COOKIES_SPLIT）> -1
    ）{
        middlerefreshTOKEN = process.env.XP_refreshTOKEN.split（COOKIES_SPLIT）;
    } 別的 {
        middlerefreshTOKEN = process.env.XP_refreshTOKEN.split（）;
    }
    如果 （
        process.env.XP_iboxpayvideoHEADER &&
        process.env.XP_iboxpayvideoHEADER.indexOf（COOKIES_SPLIT）> -1
    ）{
        middleiboxpayvideoHEADER = process.env.XP_iboxpayvideoHEADER.split（COOKIES_SPLIT）;
    } 別的 {
        middleiboxpayvideoHEADER = process.env.XP_iboxpayvideoHEADER.split（）;
    }
    如果 （
        process.env.XP_iboxpayvideoBODY &&
        process.env.XP_iboxpayvideoBODY.indexOf（COOKIES_SPLIT）> -1
    ）{
        middleiboxpayvideoBODY = process.env.XP_iboxpayvideoBODY.split（COOKIES_SPLIT）;
    } 別的 {
        middleiboxpayvideoBODY = process.env.XP_iboxpayvideoBODY.split（）;
    }
}
如果（COOKIE.refreshtokenVal）{
    XP_COOKIES = {

        “ refreshtokenVal”：COOKIE.refreshtokenVal.split（'\ n'），
        “ iboxpayvideoheaderVal”：COOKIE.iboxpayvideoheaderVal.split（'\ n'），
        “ iboxpayvideobodyVal”：COOKIE.iboxpayvideobodyVal.split（'\ n'），
    }
    長度= XP_COOKIES.refreshtokenVal.length;
}
如果（！COOKIE.refreshtokenVal）{
    如果（$ .isNode（））{
        Object.keys（middlerefreshTOKEN）.forEach（（item）=> {
            如果（middlerefreshTOKEN [item]）{
                refreshtokenArr.push（middlerefreshTOKEN [item]）;
            }
        }）;
        Object.keys（middleiboxpayvideoHEADER）.forEach（（item）=> {
            如果（middleiboxpayvideoHEADER [item]）{
                iboxpayvideoheaderArr.push（middleiboxpayvideoHEADER [item]）;
            }
        }）;
        Object.keys（middleiboxpayvideoBODY）.forEach（（item）=> {
            如果（middleiboxpayvideoBODY [item]）{
                iboxpayvideobodyArr.push（middleiboxpayvideoBODY [item]）;
            }
        }）;
    } 別的 {
        iboxpayvideoheaderArr.push（$。getdata（“ iboxpayvideoheader”））;
        iboxpayvideobodyArr.push（$。getdata（“ iboxpayvideobody”））;

        refreshtokenArr.push（$。getdata（“ refreshtoken”））;

        //根據boxjs中設置的額外賬號數，添加存在的賬號數據進行任務處理
        如果（“ iboxpayCASH”）{
            現金= $ .getval（“ iboxpayCASH”）|| '0';
        }
        如果（“ iboxpayLIVE”）{
            LIVE = $ .getval（“ iboxpayLIVE”）|| '1';
        }
        如果（“ iboxpayphone”）{
            電話= $ .getval（“ iboxpayphone”）|| '0';
        }
        如果（“ iboxpaysms”）{
            sms = $ .getval（“ iboxpaysms”）|| '0';
        }
        讓iboxpayCount =（$ .getval（'iboxpayCount'）||'1'）-0;
        for（讓i = 2; i <= iboxpayCount; i ++）{
            如果（$ .getdata（`refreshtoken $ {i}`））{


                iboxpayvideoheaderArr.push（$。getdata（`iboxpayvideoheader $ {i}`））;
                iboxpayvideobodyArr.push（$。getdata（`iboxpayvideobody $ {i}`））;
                refreshtokenArr.push（$。getdata（`refreshtoken $ {i}`））;;
            }
        }
    }
    長度= refreshtokenArr.length
}


函數GetCookie（）{
    如果（$ request && $ request.url.indexOf（“ nf-user-auth-web”）> = 0）{
        const refreshtokenVal = JSON.parse（$ response.body）.data.refreshToken

        如果（refreshtokenVal）{
            曲奇餅（）

            函數cookie（）{
                正文= $ .getdata（'refreshtoken'+ $ .idx）;
                如果（身體）{
                    如果（bodys.indexOf（refreshtokenVal）> = 0）{
                        $ .log（
                            `[$ {$。name + $ .idx}] refreshtokenVal已存在✅：refreshtokenVal：$ {refreshtokenVal}`
                        ）;
                        $ .msg（$。name + $ .idx，`refreshtokenVal已存在：🎉`，``）;
                        $ .done（）;
                    } else if（$ .idx ==''）{
                        $ .idx = 2
                        曲奇餅（）
                    } 別的 {
                        $ .idx = $ .idx +1
                        曲奇餅（）
                    }
                } 別的 {
                    {
                        $ .setdata（refreshtokenVal，“ refreshtoken” + $ .idx）;
                        $ .log（
                            `[$ {$。name + $ .idx}]獲取refreshtokenVal✅：成功，refreshtokenVal：$ {refreshtokenVal}`
                        ）;
                        $ .msg（$。name + $ .idx，`獲取refreshtokenVal：成功🎉`，``）;

                        $ .done（）;
                    }
                };
            }
        }
    }


    如果（$ request && $ request.url.indexOf（“ give_gold_coin_by_video”）> = 0）{

        const iboxpayvideoheaderVal = JSON.stringify（$ request.headers）;
        const iboxpayvideobodyVal = $ request.body;

        如果（iboxpayvideobodyVal）{
            曲奇餅（）

            函數cookie（）{

                標頭= $ .getdata（'iboxpayvideoheader'+ $ .idx）;
                正文= $ .getdata（'iboxpayvideobody'+ $ .idx）;

                如果（正文和＆標題）{

                    iboxpayvideoHeader = headeres.split（'＆'）;
                    iboxpayvideoBody = bodys.split（'＆'）;

                    如果（iboxpayvideoHeader.length> = 10）{

                        如果（$ .idx ==''）{
                            $ .idx = 2
                            曲奇餅（）
                        } 別的 {
                            $ .idx = $ .idx +1
                            曲奇餅（）
                        }
                    }否則，如果（headeres.indexOf（iboxpayvideoheaderVal）> = 0）{
                        $ .msg（'重複跳過'）;
                        $ .done（）;
                    } 別的 {

                        標頭= iboxpayvideoheaderVal +'＆'+標頭；
                        $ .setdata（headeres，“ iboxpayvideoheader” + $ .idx）;
                        $ .log（
                            `[$ {$。name + $ .idx}]獲取iboxpayvideoheader $ {iboxpayvideoHeader.length + 1}✅：成功，iboxpayvideoheader $ {iboxpayvideoHeader.length + 1}：$ {iboxpayvideoheaderVal}`
                        ）;
                        $ .msg（$。name + $ .idx，`獲取iboxpayvideoheader $ {iboxpayvideoHeader.length + 1}✅：成功🎉`）

                        正文= iboxpayvideobodyVal +'＆'+正文；
                        $ .setdata（bodys，“ iboxpayvideobody” + $ .idx）;
                        $ .log（
                            `[$ {$。name + $ .idx}]獲取iboxpayvideobody $ {iboxpayvideoBody.length + 1}✅：成功，iboxpayvideobody $ {iboxpayvideoBody.length + 1}：$ {iboxpayvideobodyVal}`
                        ）;
                        $ .msg（$。name + $ .idx，`獲取iboxpayvideobody $ {iboxpayvideoBody.length + 1}✅：成功🎉`）

                        $ .done（）;
                    }
                } 別的 {
                    標頭= iboxpayvideoheaderVal;
                    $ .setdata（headeres，“ iboxpayvideoheader” + $ .idx）;
                    $ .log（
                        `[$ {$。name + $ .idx}]獲取iboxpayvideoheader✅：成功，iboxpayvideoheader：$ {iboxpayvideoheaderVal}`
                    ）;
                    $ .msg（$。name + $ .idx，`獲取iboxpayvideoheader✅：成功🎉`）

                    正文= iboxpayvideobodyVal;
                    $ .setdata（bodys，“ iboxpayvideobody” + $ .idx）;
                    $ .log（
                        `[$ {$。name + $ .idx}]獲取iboxpayvideobody✅：成功，iboxpayvideobody：$ {iboxpayvideobodyVal}`）;
                    $ .msg（$。name + $ .idx，`獲取iboxpayvideobody✅：成功🎉`）

                    $ .done（）;

                }
            }
        }
    }
}
console.log（
    `==================腳本執行-北京時間（UTC + 8）：$ {new Date（
    新的Date（）。getTime（）+
    新的Date（）。getTimezoneOffset（）* 60 * 1000 +
    8 * 60 * 60 * 1000
  ）.toLocaleString（）} ===================== n
）;
console.log（
    `============共$ {Length}個$ {$。name}賬號============ \ n
）;
console.log（`===========提現標準為：$ {CASH} ============ \ n`）;
//如果（LIVE == 0）{
// console.log（`===========看直播關閉，看視頻開啟============ \ n`）;
//}
如果（LIVE == 1）{
    console.log（`===========看直播開啟，看視頻開啟============ \ n`）;
}
如果（LIVE == 2）{
    console.log（`===========看直播開啟，看視頻關閉============ \ n`）;
}
如果（sms> = 1）{
    console.log（`============令牌獲取開啟============= \ n`）;
}
//時間
nowTimes =新日期（
    新的Date（）。getTime（）+
    新的Date（）。getTimezoneOffset（）* 60 * 1000 +
    8 * 60 * 60 * 1000
）;
//今天
Y = nowTimes.getFullYear（）+'-';
M =（nowTimes.getMonth（）+ 1 <10？'0'+（nowTimes.getMonth（）+ 1）：nowTimes.getMonth（）+ 1）+'-';
D =（nowTimes.getDate（）<10？'0'+（nowTimes.getDate（））：nowTimes.getDate（））;
ddtime = Y + M + D;
console.log（ddtime）
//當前常量
函數tts（inputTime）{
    如果（$ .isNode（））{
        TTS = Math.round（new Date（）。getTime（）+
            新的Date（）。getTimezoneOffset（）* 60 * 1000）.toString（）;
    } else TTS = Math.round（new Date（）。getTime（）+
        new Date（）。getTimezoneOffset（）* 60 * 1000 + 8 * 60 * 60 * 1000）.toString（）;
    返回TTS；
};
//當前10位飛行員
函數ts（inputTime）{
    如果（$ .isNode（））{
        TS = Math.round（（new Date（）。getTime（）+
            new Date（）。getTimezoneOffset（）* 60 * 1000）/ 1000）.toString（）;
    } else TS = Math.round（（new Date（）。getTime（）+
        新的Date（）。getTimezoneOffset（）* 60 * 1000 +
        8 * 60 * 60 * 1000）/ 1000）.toString（）;
    返回TS；
};
//今天0點體重有所改善
函數daytime（inputTime）{
    如果（$ .isNode（））{
        DAYTIME =
            new Date（new Date（）。toLocaleDateString（））。getTime（）-8 * 60 * 60 * 1000;
    } else DAYTIME = new Date（new Date（）。toLocaleDateString（））。getTime（）;
    返回DAYTIME；
};
//格式化格式化日期
函數時間（inputTime）{
    如果（$ .isNode（））{
        var date = new Date（inputTime + 8 * 60 * 60 * 1000）;
    } else var date = new Date（inputTime）;
    Y = date.getFullYear（）+'-';
    M =（date.getMonth（）+ 1 <10？'0'+（date.getMonth（）+ 1）：date.getMonth（）+ 1）+'-';
    D = date.getDate（）+'';
    h = date.getHours（）+'：';
    m = date.getMinutes（）+'：';
    s = date.getSeconds（）;
    返回Y + M + D + h + m + s;
};
//隨機udid大寫
函數udid（）{
    var s = [];
    var hexDigits =“ 0123456789ABCDEF”;
    對於（var i = 0; i <36; i ++）{
        s [i] = hexDigits.substr（Math.floor（Math.random（）* 0x10），1）;
    }
    s [14] =“ 4”; // time_hi_and_version字段的第12-15位為0010
    s [19] = hexDigits.substr（（s [19]＆0x3）| 0x8，1）; // clock_seq_hi_and_reserved的第6-7位為01
    s [8] = s [13] = s [18] = s [23] =“-”；
    var uuid = s.join（“”）;
    返回uuid;
}
//隨機研究小寫
函數udid2（）{
    函數S4（）{
        return（（（（1 + Math.random（））* 0x10000）| 0）.toString（16）.substring（1）;
    }
    返回（S4（）+ S4（）+“-” + S4（）+“-” + S4（）+“-” + S4（）+“-” + S4（）+ S4（）+ S4（）） ;
}
//編碼
函數encodeUnicode（str）{
    var res = [];
    對於（var i = 0; i <str.length; i ++）{
        res [i] =（“ 00” + str.charCodeAt（i）.toString（16））。slice（-4）;
    }
    返回“ \\ u” + res.join（“ \\ u”）;
}
//解碼
函數解碼Unicode（str）{
    str = str.replace（/ \\ / g，“％”）;
    返回unescape（str）;
}


let isGetCookie = typeof $ request！=='未定義'
如果（isGetCookie）{
    GetCookie（）
    $ .done（）;
} 別的 {
    ！（異步（）=> {
        如果（sms> = 1）{
            等待getTOKEN（）;
        }否則等待all（）;
        如果（HBY == 1）{
            等待$ .wait（500）
        }

        等待msgShow（）;
    }）（）
    .catch（（e）=> {
            $ .log（''，`❌$ {$。name}，失敗！原因：$ {e}！`，''）
        }）
        .finally（（）=> {
            $ .done（）;
        }）
}
異步功能all（）{
    如果（！Length）{
        $ .msg（
            $ .name，
            '提示：⚠️請點擊前往獲取https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970\n'，
            'https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970'，{
                “打開網址”：“ https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970”
            }
        ）;
        返回;
    }
    for（令i = 0; i <長度; i ++）{

        如果（COOKIE.refreshtokenVal）{

            refreshtokenVal = XP_COOKIES.refreshtokenVal [i];
            iboxpayvideoheaderVal = XP_COOKIES.iboxpayvideoheaderVal [i];
            iboxpayvideobodyVal = XP_COOKIES.iboxpayvideobodyVal [i];
        }
        如果（！COOKIE.refreshtokenVal）{

            refreshtokenVal = refreshtokenArr [i];
            iboxpayvideoheaderVal = iboxpayvideoheaderArr [i];
            iboxpayvideobodyVal = iboxpayvideobodyArr [i];
        }

        做RT = Math.floor（Math.random（）* 35000）;
        而（RT <30000）

        做VT = Math.floor（Math.random（）* 35000）;
        而（VT <30000）
        O =（`$ {$。name +（i + 1）}🔔`）;
        等待console.log（`------------------------- \ n \n🔔開始運行【$ {$。name +（i + 1）} 】`）



        等待refreshtoken（）; //更新代幣       
        讓cookie_is_live =等待用戶（i + 1）; //用戶名
        如果（！cookie_is_live）{
            繼續;
        }
        等待hdid（）; //活動ID
        等待goldcoin（）; //金幣信息
        等待coin（）; //賬戶信息
        等待sylist（）; //收益清單
        等待splimit（）; //視頻上限
        等待newcashlist（）; //提現查詢
        等待Cashlist（）; //今天提現查詢
        if（！cashcs.amount && CASH> = 1 && CASH <= 100 && $ .coin.data.balance / 100> = CASH）{
            等待withdraw（）; //提現
        }

        如果（！cashcs.amount &&現金== 888）{

            如果（$ .coin.data.balance / 100> = 100）{
                現金= 100
            } else if（$ .coin.data.balance / 100> = 50）{
                現金= 50
            } else if（$ .coin.data.balance / 100> = 30）{
                現金= 30
            } else if（$ .coin.data.balance / 100> = 15）{
                現金= 15
            } else if（$ .coin.data.balance / 100> = 1）{
                現金= 1
            }

            如果（現金！= 888）{
                等待withdraw（）; //提現
            }
        }

        如果（LIVE> = 1 && nowTimes.getHours（）> = 8 && nowTimes.getHours（）<= 23 && $ .sylist.resultCode && livecs <20）{
            等待livelist（）; //直播節目表
            如果（liveIdcd> = 1）{
                dd = liveIdcd * 35-34
                console.log（`📍本次直播運行需要$ {dd}秒`+'\ n'）

                等待生命（）; //看直播
                等待$ .wait（dd * 1000）
            }
        }

        如果（iboxpayvideoheaderVal && iboxpayvideobodyVal && iboxpayvideoheaderVal！=''&& iboxpayvideobodyVal！=``&& LIVE！= 2 &&（$ .splimit.data.isUperLimit == false || LIVE == 888））{

            videoHEADER = iboxpayvideoheaderVal.split（'＆'）;
            videoBODY = iboxpayvideobodyVal.split（'＆'）;
            console.log（`📍此賬號共有$ {videoHEADER.length}個body` +'\ n'）

            等待videoo（）; //視頻

            如果（LIVES！= 2 && videoHEADER.length> = 2）{
                等待$ .wait（VT）
                tt = videoHEADER.length * 35-34
                console.log（`📍本次視頻運行需要$ {tt}秒`+'\ n'）

                等待video（）; //視頻
                等待$ .wait（tt * 1000）

            }

        }否則，如果（！iboxpayvideoheaderVal &&！iboxpayvideobodyVal && iboxpayvideoheaderVal ==''&& iboxpayvideobodyVal ==））{
            console.log（'視頻獎勵：未獲取視頻ck \ n'）;
            $ .message + ='【視頻獎勵】：未獲取視頻ck \ n'
        }否則，如果（LIVE == 2）{
            console.log（'視頻獎勵：視頻已設置關閉\ n'）;
            $ .message + ='【視頻獎勵】：視頻已設置關閉\ n'
        }否則，如果（$ .splimit.data.isUperLimit！= false）{
            console.log（'視頻獎勵：視頻獎勵達到上限\ n'）;
            $ .message + ='【視頻獎勵】：視頻獎勵達到上限\ n'
        }
        console.log（`$ {GXRZ} \ n`）;
        $ .message + =`$ {GXRZ} \ n`
    }
}
//通知
函數msgShow（）{
    返回新的Promise（異步解析=> {
        如果（notifyInterval！= 1）{
            console.log（$。name +'\ n'+ $ .message）;
        }
        如果（notifyInterval == 1）{
            $ .msg（$。name，``，$ .message）;
        }
        if（notifyInterval == 2 &&（nowTimes.getHours（）=== 12 || nowTimes.getHours（）=== 23）&&（nowTimes.getMinutes（）> = 0 && nowTimes.getMinutes（）<= 10）） {
            $ .msg（$。name，``，$ .message）;
        }
        if（notifyInterval == 3 &&（nowTimes.getHours（）=== 6 || nowTimes.getHours（）=== 12 || nowTimes.getHours（）=== 18 || nowTimes.getHours（）=== 23 ）&&（nowTimes.getMinutes（）> = 0 && nowTimes.getMinutes（）<= 10））{
            $ .msg（$。name，``，$ .message）;
        }
        if（notifyttt == 1 && $ .isNode（）&&（nowTimes.getHours（）=== 12 || nowTimes.getHours（）=== 23）&&（nowTimes.getMinutes（）> = 0 && nowTimes.getMinutes（ ）<= 10））
            等待notify.sendNotify（$。name，$ .message）;
        解決（）
    }）
}


//令牌獲取  
函數getTOKEN（timeout = 0）{
    返回新的Promise（（resolve）=> {
        setTimeout（（）=> {

            getTOKENbodyVal =`{“ userPhone”：“ $ {phone}”，“ smsCode”：“ $ {sms}”，“ source”：“ VEISHOP_APP_IOS”}`
            讓url = {
                網址：`https：// veishop.iboxpay.com / nf_gateway / nf-user-auth-web / ignore_tk / veishop / v1 / app_register_by_phone.json`，
                標頭：{
                    “連接”：“保持活動”，
                    “ Accept-Encoding”：“ gzip，deflate，br”，
                    “ version”：“ 1.5.0”，
                    “ mchtNo”：“ 100529600058887”，
                    “ Content-Type”：“ application / json; charset = utf-8”，
                    “源”：“ VEISHOP_APP_IOS”，
                    “用戶代理”：“ VeiShop，1.5.0（iOS，14.2，zh_CN，Apple，iPhone，）”，
                    “ X-User-Agent”：“ VeiShop，1.5.0（iOS，14.2，zh_CN，Apple，iPhone，）”，
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: getTOKENbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, TOKEN获取🚩: ${decodeUnicode(data)}`);
                    $.getTOKEN = JSON.parse(data);
                    if ($.getTOKEN.resultCode == 1) {
                        const refreshtokenVal = $.getTOKEN.data.refreshToken
                        $.setdata(refreshtokenVal, "refreshtoken" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取refreshtoken✅: 成功,refreshtokenVal: ${refreshtokenVal}`
                        );
                        $.msg($.name + $.idx, `获取refreshtoken: 成功🎉`, ``);
                        $.message += '【TOKEN获取】：成功' + $.getTOKEN.data.refreshToken + '\n';
                    }
                    if ($.getTOKEN.resultCode == 0) {
                        console.log(`TOKEN获取：${$.getTOKEN.errorCode}\n`);
                        $.message += `【TOKEN获取】：${$.getTOKEN.errorCode}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//TOKEN更新  
function refreshtoken(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            refreshtokenbodyVal = `{"refreshToken":"${refreshtokenVal}","source":"VEISHOP_APP_IOS"}`
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_user_auth_web/uc/ignore_tk/v1/refresh_access_token_to_c.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: refreshtokenbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, TOKEN更新🚩: ${decodeUnicode(data)}`);
                    $.refreshtoken = JSON.parse(data);
                    if ($.refreshtoken.resultCode == 1) {
                        TOKEN = $.refreshtoken.data.accessToken
                        console.log('更新TOKEN成功:' + TOKEN + '\n');
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//用户名
function user(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_user_center_web/shopkeeper/v1/get_context_info.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户名🚩: ${decodeUnicode(data)}`);
                    $.user = JSON.parse(data);
                    if ($.user.resultCode == 1) {
                        $.message += `\n${O}`;
                        $.message += `\n========== 【${$.user.data.customerInfo.nickname}】 ==========\n`;
                        resolve(true);
                    }

                    if ($.user.resultCode == 0) {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//金币信息  
function goldcoin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/balance.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 金币信息🚩: ${decodeUnicode(data)}`);
                    $.goldcoin = JSON.parse(data);
                    $.message += '【金币信息】：今日金币' + $.goldcoin.data.coinSum + ',预估金额' + $.goldcoin.data.balanceSum / 100 + '元\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//活动id 
function hdid(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/ignore_tk/v1/query_act_list.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 活动id🚩: ${decodeUnicode(data)}`);
                    $.hdid = JSON.parse(data);
                    if ($.hdid.resultCode == 1) {
                        spid = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 9)
                        zbid = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 10)
                        //console.log(spid.actName + 'ID：' + spid.actId + '\n' +
                        //zbid.actName + 'ID：' + zbid.actId + '\n');
                        //$.message += '【' + spid.actName + 'ID】：' + spid.actId + '\n' +
                        //'【' + zbid.actName + 'ID】：' + zbid.actId + '\n';
                    }

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//账户信息  
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/withdraw_detail.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 账户信息🚩: ${decodeUnicode(data)}`);
                    $.coin = JSON.parse(data);
                    $.message += '【账户信息】：明日入账' + $.coin.data.tomorrowAmt / 100 + '元,可提余额' + $.coin.data.balance / 100 + '元\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//视频o
function videoo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            token = videoHEADER[0].split(`"token":"`)[1].split(`",`)[0]
            videoHEADER1 = videoHEADER[0].replace(`${token}`, `${TOKEN}`)

            SPID = videoBODY[0].split(`"actId":"`)[1].split(`"}`)[0]
            videoBODY1 = videoBODY[0].replace(`${SPID}`, `${spid.actId}`)
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
                headers: JSON.parse(videoHEADER1),
                body: videoBODY1,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频🚩: ${decodeUnicode(data)}`);
                    $.videoo = JSON.parse(data);
                    if ($.videoo.resultCode == 0) {
                        LIVES = 2

                        if ($.videoo.errorCode == "GATEWAY-ERROR-002") {
                            console.log('视频奖励：⚠️进入冷却中......\n');
                            $.message += '【视频奖励】：⚠️进入冷却中......\n'
                        }

                        if ($.videoo.errorCode == "GATEWAY-ERROR-003") {
                            console.log('视频奖励：⚠️TOKEN失效\n');
                            $.message += '【视频奖励】：⚠️TOKEN失效\n'
                        }

                    }
                    if ($.videoo.data && $.videoo.data.goldCoinNumber == 0) {
                        LIVES = 2
                        console.log(`视频奖励：恭喜您的账号已灰，已无法获取视频奖励\n`);
                        $.message += `【视频奖励】：恭喜您的账号已灰，已无法获取视频奖励\n`
                    }
                    if ($.videoo.data && $.videoo.data.goldCoinNumber != 0) {
                        LIVES = 0
                        console.log(`开始领取第1次视频奖励，获得${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                        console.log(`视频奖励：共领取1次视频奖励，共${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                        $.message += `【视频奖励】：共领取1次视频奖励，共${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`
                    }

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//视频
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var inss = 0;
            for (let i = 1; i < videoBODY.length; i++) {
                setTimeout(() => {
                    token = videoHEADER[i].split(`"token":"`)[1].split(`",`)[0]
                    videoHEADER2 = videoHEADER[i].replace(`${token}`, `${TOKEN}`)
                    SPID = videoBODY[i].split(`"actId":"`)[1].split(`"}`)[0]
                    videoBODY2 = videoBODY[i].replace(`${SPID}`, `${spid.actId}`)


                    let url = {
                        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
                        headers: JSON.parse(videoHEADER2),
                        body: videoBODY2,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 视频🚩: ${decodeUnicode(data)}`);
                            $.video = JSON.parse(data);

                            if ($.video.data && $.video.data.goldCoinNumber != 0) {
                                console.log(`开始领取第${i+1}次视频奖励，获得${$.video.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                                inss += $.video.data.goldCoinNumber;
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * VT);
            }
            setTimeout(() => {
                if ($.videoo.resultCode == 0) {

                    if ($.videoo.errorCode == "GATEWAY-ERROR-002") {
                        console.log('视频奖励：⚠️进入冷却中......\n');
                        $.message += '【视频奖励】：⚠️进入冷却中......\n'
                    }

                    if ($.videoo.errorCode == "GATEWAY-ERROR-003") {
                        console.log('视频奖励：⚠️TOKEN失效\n');
                        $.message += '【视频奖励】：⚠️TOKEN失效\n'
                    }

                }
                if ($.video.data && $.video.data.goldCoinNumber == 0) {
                    console.log(`视频奖励：恭喜您的账号已灰，已无法获取视频奖励\n`);
                    $.message += `【视频奖励】：恭喜您的账号已灰，已无法获取视频奖励\n`
                }
                if ($.video.data && $.video.data.goldCoinNumber != 0) {
                    console.log(`视频奖励：共领取${videoBODY.length-1}次视频奖励，共${inss}金币\n`);
                    $.message += `【视频奖励】：共领取${videoBODY.length-1}次视频奖励，共${inss}金币\n`
                }
            }, videoBODY.length * 35000 - 34000)

        }, timeout)
    })
}


//直播节目表
function liveslist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {



            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/live/ignore_tk/v1/query_living_list_id.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 直播节目表🚩: ${decodeUnicode(data)}`);
                    $.liveslist = JSON.parse(data);
                    if ($.liveslist.resultCode == 1 && $.liveslist.data.liveIdList.length) {
                        liveId = $.liveslist.data.liveIdList
                        liveIdcd = liveId.length
                    }
                    console.log(`直播节目表，当前${liveIdcd}个直播\n`);
                    $.message += `【直播节目表】：当前${liveIdcd}个直播\n`

                    if ($.liveslist.resultCode == 0) {
                        console.log($.liveslist.errorDesc + '\n');
                        $.message += '【直播节目表】：' + $.liveslist.errorDesc + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//直播
function lives(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var ins = 0;
            for (let i = 0; i < liveIdcd; i++) {
                $.index = i + 1

                setTimeout(() => {

                    livesbodyVal = `{
 "actId": "${zbid.actId}",
 "liveId": "${liveId[i]}"
}`
                    let url = {
                        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_redbag_by_live.json`,
                        headers: {
                            "Connection": "keep-alive",
                            "Accept-Encoding": "gzip, deflate, br",
                            "version": "1.5.0",
                            "mchtNo": "100529600058887",
                            "Content-Type": "application/json; charset=utf-8",
                            "source": "VEISHOP_APP_IOS",
                            "shopkeeperId": "1148855820752977920",
                            "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                            "token": `${TOKEN}`,
                            "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                            "traceid": "30000000000000000000" + tts() + "000000000000",
                            "Host": "veishop.iboxpay.com",
                            "Accept-Language": "zh-Hans-CN;q=1",
                            "Accept": "*/*"
                        },
                        body: livesbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 直播🚩: ${decodeUnicode(data)}`);
                            $.lives = JSON.parse(data);

                            if ($.lives.resultCode == 1) {
                                ins += $.lives.data.goldCoinAmt;
                                console.log(`开始领取第${i+1}次直播奖励，获得${$.lives.data.goldCoinAmt}金币,等待${RT/1000}秒继续\n`);

                            }
                            if ($.lives.resultCode == 0) {
                                console.log(`开始领取第${i+1}次直播奖励，${$.lives.errorDesc},等待${RT/1000}秒继续\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })

                }, i * RT);

            }
            setTimeout(() => {
                console.log(`直播奖励：共领取${ins/500}次直播奖励，共${ins}金币\n`);
                $.message += `【直播奖励】：共领取${ins/500}次直播奖励，共${ins}金币\n`
            }, liveIdcd * 35000 - 34000)
        }, timeout)
    })
}
//收益列表
function sylist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/list_gold_coin.json?source=WX_APP_KA_HTZP&date=${ddtime}&actTypeId=0&size=800`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 收益列表🚩: ${decodeUnicode(data)}`);
                    $.sylist = JSON.parse(data);

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":11,/g)) {
                        hby = data.match(/"actTypeId":11,/g);
                        hbycs = hby.length;
                    } else hbycs = 0

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":10,/g)) {
                        live = data.match(/"actTypeId":10,/g);
                        livecs = live.length;
                    } else livecs = 0

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":9,/g)) {

                        videos = data.match(/"actTypeId":9,/g);
                        videoscs = videos.length;
                    } else videoscs = 0;

                    spsy = $.goldcoin.data.coinSum - livecs * 500
                    //console.log('已获得红包雨奖励 ' + hbycs + ' 次\n')
                    //$.message +=
                    //'【红包雨收益】：已获得红包雨奖励 ' + hbycs + ' 次\n'
                    console.log('已获得直播奖励 ' + livecs + ' 次，共' + livecs * 500 + '金币\n')
                    $.message +=
                        '【直播收益】：已获得直播奖励 ' + livecs + ' 次，共' + livecs * 500 + '金币\n'
                    console.log('已获得视频奖励 ' + videoscs + ' 次，共' + spsy + '金币\n')
                    $.message +=
                        '【视频收益】：已获得视频奖励 ' + videoscs + ' 次，共' + spsy + '金币\n'

                    if ($.sylist.resultCode == 0) {
                        console.log($.sylist.errorDesc + '\n');
                        $.message +=
                            '【收益列表】：' + $.sylist.errorDesc + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//视频上限  
function splimit(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/ignore_tk/v1/get_video_act.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频上限🚩: ${decodeUnicode(data)}`);
                    $.splimit = JSON.parse(data);
                    if ($.splimit.resultCode == 1) {
                        console.log('视频上限：今日上限' + $.splimit.data.goldCoinDayLimit + '金币,今日未得' + ($.splimit.data.goldCoinDayLimit - spsy) + '金币\n');
                        $.message += '【视频上限】：今日上限' + $.splimit.data.goldCoinDayLimit + '金币,今日未得' + ($.splimit.data.goldCoinDayLimit - spsy) + '金币\n';
                    }
                    if ($.splimit.data.isUperLimit == true) {
                        console.log('视频上限：今日达到上限\n');
                        $.message += '【视频上限】：今日达到上限\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//提现记录
function newcashlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/in_out.json?source=WX_APP_KA_HTZP&date=&tradeType=0&current=1&size=40`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现记录🚩: ${decodeUnicode(data)}`);
                    $.newcashlist = JSON.parse(data);
                    if ($.newcashlist.resultCode == 1 && data.match(/新人福利/g)) {
                        newcashcs = $.newcashlist.data.records.find(item => item.tradeTypeName === "新人福利")
                    }
                    if ($.newcashlist.resultCode == 0) {
                        console.log($.newcashlist.errorDesc + '\n');
                        $.message +=
                            '【新人福利】：' + $.newcashlist.errorDesc + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//今日提现记录
function cashlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/in_out.json?source=WX_APP_KA_HTZP&date=${ddtime}&tradeType=0&current=1&size=40`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 今日提现记录🚩: ${decodeUnicode(data)}`);
                    $.cashlist = JSON.parse(data);
                    if ($.cashlist.resultCode == 1 && data.match(/提现/g)) {

                        cashcs = $.cashlist.data.records.find(item => item.tradeTypeName === "提现")
                        console.log('今日已提现' + cashcs.amount / 100 + '元\n')
                        $.message +=
                            '【提现查询】：今日已提现' + cashcs.amount / 100 + '元\n'
                    }
                    if ($.cashlist.resultCode == 0) {
                        console.log($.cashlist.errorDesc + '\n');
                        $.message +=
                            '【提现查询】：' + $.cashlist.errorDesc + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//提现
function withdraw(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            withdrawbodyVal = `{
 "source": "WX_APP_KA_HTZP",
 "bizType": 2,
 "amount": ${CASH*100}
}`
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/activity/v1/withdraw.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: withdrawbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现🚩: ${decodeUnicode(data)}`);
                    $.withdraw = JSON.parse(data);
                    if ($.withdraw.resultCode == 1 && $.withdraw.data.withdrawRes == 1) {
                        console.log('成功提现 ' + CASH + ' 元\n')
                        $.message +=
                            '【余额提现】：成功提现 ' + CASH + ' 元\n'
                    }
                    if ($.withdraw.resultCode == 0) {
                        console.log($.withdraw.errorDesc + '\n');
                        $.message +=
                            '【余额提现】：' + $.withdraw.errorDesc + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
