/ *子野 
github地址https://github.com/6Svip120apk69
TG頻道地址https://t.me/ziyescript
TG交流群https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs鏈接https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json

轉載請備註個名字，謝謝

⚠️步步寶
點擊http://bububao.yichengw.cn/?id=529742下載APP謝謝支持


2.21製作
2.23完成
2.23修復ck問題
2.24調整通知佈局，修復抽獎寶箱
3.1修復看看賺
3.2調整抽獎機制，一次運行5次抽獎，抽中1000金幣則兌獎
3.3修復簽到，增加10分鐘限速，完善提現決定，修復睡覺，調整為抽獎200金幣也領取
3.3-2調整刮獎機制分3個時間段刮獎
3.4取消限速
3.5優化提現
3.8替換為循環獲取ck
3.13修復0.3提現

⚠️時間設置0,30 0-23 * * *每天35次以上就行   

 
一視頻助力手動也是不行的 
二默認0點睡23點醒，時間包括這兩個點 

（已內置隨機udid，添加重組無視多設備檢測，如非必要，勿重複登錄）


⚠️一共1個位置1個ck👉2條機密 
多賬號換行

首先添加hostname = bububao.duoshoutuan.com，

第二步⚠️添加步步寶獲取TOKEN重新生成  

登錄步步寶獲取令牌
Val👉BBB_bububaoTOKEN


CASH👉BBB_CASH可設置0 0.3 50 100 200 888默認0關閉提現，設置888由上至下循環提現


主機️主機名以及重組👇
hostname = bububao.duoshoutuan.com，

###############圈x
＃步步寶獲取令牌
https：\ / \ / bububao \ .duoshoutuan \ .com \ / user \ / *網址script-request-header https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/bububao.js

############### loon
＃步步寶獲取令牌
http響應https：\ / \ / bububao \ .duoshoutuan \ .com \ / user \ / * script-path = https：//raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/bububao.js，要求- body = 1，max-size = 0，tag =步步寶獲取令牌

＃＃＃＃＃＃＃＃＃＃＃＃＃＃ 湧
＃步步寶獲取令牌
步步寶獲取令牌= type = http-response，pattern = https：\ / \ / bububao \ .duoshoutuan \ .com \ / user \ / *，script-path = https：//raw.githubusercontent.com/6Svip120apk69/ gitee_q8qsTAUA_cThxc1RBVUE / main / Task / bububao.js
* /
GXRZ ='3.13修復0.3提現'
const $ = Env（“步步寶”）;
$ .idx =（$ .idx =（$ .getval（'bububaoSuffix'）||'1'）-1）> 0嗎？（$ .idx +1 +''）：''; //賬號擴展字符
const notify = $ .isNode（）嗎？require（“ ./ sendNotify”）：``;
const COOKIE = $ .isNode（）嗎？require（“ ../ bububaoCOOKIE”）：``;
const日誌= 0; // 0為關閉日誌，1為開啟
const notifyttt = 1 // 0為關閉外部推進，1為12 23點外部推進
const notifyInterval = 2; // 0為關閉通知，1為所有通知，2為12 23點通知，3為6 12 18 23點通知
$ .message =''，COOKIES_SPLIT =''，CASH =``，ddtime ='';
CZ = 10
const bububaotokenArr = [];
let bububaotokenVal =``;
讓middlebububaoTOKEN = [];
如果（$ .isNode（））{
    //沒有設置FL_DHCASH則默認為0不兌換
    現金= process.env.BBB_CASH || 0;
}
如果（$ .isNode（）&& process.env.BBB_bububaoTOKEN）{
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || “ \ n”;
    console.log（
        `============ Cookies分隔符為：$ {JSON.stringify（
      COOKIES_SPLIT
    ）} ============= \ n`
    ）;
    如果 （
        process.env.BBB_bububaoTOKEN &&
        process.env.BBB_bububaoTOKEN.indexOf（COOKIES_SPLIT）> -1
    ）{
        middlebububaoTOKEN = process.env.BBB_bububaoTOKEN.split（COOKIES_SPLIT）;
    } 別的 {
        middlebububaoTOKEN = process.env.BBB_bububaoTOKEN.split（）;
    }
}
如果（COOKIE.bububaotokenVal）{
    BBB_COOKIES = {
        “ bububaotokenVal”：COOKIE.bububaotokenVal.split（'\ n'），
    }
    長度= BBB_COOKIES.bububaotokenVal.length;
}
如果（！COOKIE.bububaotokenVal）{
    如果（$ .isNode（））{
        Object.keys（middlebububaoTOKEN）.forEach（（item）=> {
            如果（middlebububaoTOKEN [item]）{
                bububaotokenArr.push（middlebububaoTOKEN [item]）;
            }
        }）;
    } 別的 {
        bububaotokenArr.push（$。getdata（“ bububaotoken”））;
        //根據boxjs中設置的額外賬號數，添加存在的賬號數據進行任務處理
        如果（“ bububaoCASH”）{
            現金= $ .getval（“ bububaoCASH”）|| '0';
        }
        let bububaoCount =（$ .getval（'bububaoCount'）||'1'）-0;
        for（令i = 2; i <= bububaoCount; i ++）{
            如果（$ .getdata（`bububaotoken $ {i}`））{
                bububaotokenArr.push（$。getdata（`bububaotoken $ {i}`）））;
            }
        }
    }
    如果（bububaotokenArr ==''）{
        長度= 0
    } else Length = bububaotokenArr.length
}

函數GetCookie（）{
    如果（$ request && $ request.url.indexOf（“ login”）> = 0）{
        modifiedHeaders = $ request.headers;
        modifiedHeaders ['imei'] = udid（）
        console.log（JSON.stringify（modifiedHeaders））;
        $ done（{
            標頭：modifiedHeaders
        }）;
    }
    如果（$ request && $ request.url.indexOf（“ profile”）> = 0）{
        const bububaotokenVal = $ request.headers.tokenstr;

        如果（bububaotokenVal）{
            曲奇餅（）

            函數cookie（）{
                正文= $ .getdata（'bububaotoken'+ $ .idx）;
                如果（身體）{
                    如果（bodys.indexOf（bububaotokenVal）> = 0）{
                        $ .log（
                            `[$ {$。name + $ .idx}] bububaotokenVal已存在✅：bububaotokenVal：$ {bububaotokenVal}`
                        ）;
                        $ .msg（$。name + $ .idx，`bububaotokenVal已存在：🎉`，``）;
                        $ .done（）;
                    } else if（$ .idx ==''）{
                        $ .idx = 2
                        曲奇餅（）
                    } 別的 {
                        $ .idx = $ .idx +1
                        曲奇餅（）
                    }
                } 別的 {
                    $ .setdata（bububaotokenVal，“ bububaotoken” + $ .idx）;
                    $ .log（
                        `[$ {$。name + $ .idx}]獲取bububaotokenVal✅：成功，bububaotokenVal：$ {bububaotokenVal}`
                    ）;
                    $ .msg（$。name + $ .idx，`獲取bububaotokenVal：成功🎉`，``）;

                    $ .done（）;
                };

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
//日期格式化本身
函數timecs（）{
    如果（$ .isNode（））{
        var date = new Date（newtime）.getTime（）-8 * 60 * 60 * 1000
    } else var date = new Date（newtime）.getTime（）

    歸期;
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
        等待all（）;
        等待$ .wait（1000）
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
            '提示：⚠️請點擊前往獲取http://bububao.yichengw.cn/?id=529742\n'，
            'http://bububao.yichengw.cn/?id=529742'，{
                “ open-url”：“ http://bububao.yichengw.cn/?id=529742”
            }
        ）;
        返回;
    }
    for（令i = 0; i <長度; i ++）{
        如果（COOKIE.bububaotokenVal）{
            bububaotokenVal = BBB_COOKIES.bububaotokenVal [i];
        }
        如果（！COOKIE.bububaotokenVal）{
            bububaotokenVal = bububaotokenArr [i];
        }
        標頭= {
            'tokenstr'：`$ {bububaotokenVal}`，
            'idfa'：``，
            'ini'：`21`，
            'store'：`0'，
            “內容類型”：`application / x-www-form-urlencoded`，
            'platform'：`1'，
            'version'：`18`，
            'imei'：``，
            'Cookie'：``，
            '主機'：`bububao.duoshoutuan.com`，
            'Accept-Language'：`zh-cn`，
            '接受'：`* / *`
        };
        O =（`$ {$。name +（i + 1）}🔔`）;
        等待console.log（`------------------------- \ n \n🔔開始運行【$ {$。name +（i + 1）} 】`）
        讓cookie_is_live =等待user（）; //用戶名
        如果（！cookie_is_live）{
            繼續;
        }
        //等待userjinbi（）//收益記錄
        如果（CZ> = 10）{
            await help_index（）//助力活動
            await home（）//家庭信息
            await jindan_click（）//首頁金蛋
            等待sign_html（）//簽到
            await dk_info（）//打卡
            await cy_info（）//答題
            等待water_info（）//喝水
            等待sleep_info（）//睡覺
            等待ggk（）//刮刮卡
            等待$ .wait（8000）
            await lucky（）//轉盤抽獎
            等待$ .wait（1000）
            await lucky（）//轉盤抽獎
            等待$ .wait（1000）
            await lucky（）//轉盤抽獎
            等待$ .wait（1000）
            await h5_list（）//看看賺
            等待新聞（）//看文章
            await renwu（）//賺賺任務
            等待tixian_html（）//提現
        }

        console.log（`$ {GXRZ} \ n`）;
        $ .message + =`$ {GXRZ} \ n`

    }
}
//通知
函數msgShow（）{
    返回新的承諾（異步解析=> {
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
//用戶名
函數用戶（超時= 0）{
    返回新的Promise（（resolve）=> {
        setTimeout（（）=> {
            讓url = {
                網址：“ https://bububao.duoshoutuan.com/user/profile？”，
                標頭：標頭，
            }
            $ .post（URL，async（err，resp，data）=> {
                嘗試 {
                    if（logs）$ .log（`$ {O}，用戶名🚩：$ {decodeUnicode（data）}`）;
                    $ .user = JSON.parse（數據）;
                    如果（$ .user.uid）{
                        console.log（`\ n $ {O} \ n =========== $ {$。user.username} ========= \ n微信綁定：$ {$ .user.wx_username}，今日收益：$ {$。user.day_jinbi / 10000}元\ n現金餘額：$ {$。user.money}元，累積收益：$ {$。user.leiji_jinbi / 10000}元，今日步數：$ {$。user.steps}步\ n`）
                        $ .message + =`\ n $ {O} \ n ===========【$ {$。user.username}】========= \ n【微信綁定】：$ {$。user.wx_username}，今日收益：$ {$。user.day_jinbi / 10000}元\ n【現金餘額】：$ {$。user.money}元，累積收益：$ {$。user .leiji_jinbi / 10000}元，今日步數：$ {$。user.steps}步\ n`;
                        resolve（true）;
                    }
                    如果（！$。user.uid）{
                        $ .msg（O，time（Number（tts（）））+“❌❌❌COOKIE無效”）;
                        如果（$ .isNode（））{
                            notify.sendNotify（O，time（Number（tts（）））+“❌❌❌COOKIE無效”）;
                        }
                        resolve（false）;
                    }
                }抓住（e）{
                    $ .logErr（e，resp）;
                } 最後 {
                    解決（）
                }
            }）
        }， 暫停）
    }）
}


//收益記錄
函數userjinbi（timeout = 0）{
    返回新的Promise（async（resolve）=> {
        setTimeout（（）=> {
                讓url = {
                    網址：`https：//bububao.duoshoutuan.com/user/userjinbi ?，
                    標頭：標頭，
                    正文：“ page = 1＆page_limit = 25＆”，
                }
                $ .post（URL，async（err，resp，data）=> {
                    嘗試 {
                        if（logs）$ .log（`$ {O}，收益記錄🚩：$ {decodeUnicode（data）}`）;
                        $ .userjinbi = JSON.parse（數據）;

                        如果（$ .userjinbi && $ .userjinbi [0] .add_date）{
                            newtime = $ .userjinbi [0] .add_date +'T'+ $ .userjinbi [0] .add_time
                            CZ =（（tts（）-timecs（newtime））/ 60000）.toFixed（0）

                            console.log（`收益記錄：距離上次收益$ {CZ}分鐘，已限速10分鐘\ n`）;
                            $ .message + =`【收益記錄】：距離上次收益$ {CZ}分鐘，已限速10分鐘\ n`;

                        }


                    }抓住（e）{
                        $ .logErr（e，resp）;
                    } 最後 {
                        解決（）
                    }
                }）
            }，
            暫停）
    }）
}



//首頁信息
函數home（timeout = 0）{
    返回新的Promise（（resolve）=> {
        setTimeout（（）=> {
            讓url = {
                網址：`https：//bububao.duoshoutuan.com/user/home？`，
                標頭：標頭，
            }
            $ .post（URL，async（err，resp，data）=> {
                嘗試 {
                    if（logs）$ .log（`$ {O}，首頁信息🚩：$ {decodeUnicode（data）}`）;
                    $ .home = JSON.parse（數據）;
                    如果（$ .home.right_jinbi）{
                        console.log（`家庭信息：金幣：$ {$。home.right_jinbi}金幣，紅包：$ {$。home.hb_jinbi}金幣\ n`）;
                        $ .message + =`【家庭信息】：金幣：$ {$。home.right_jinbi}金幣，紅包：$ {$。home.hb_jinbi}金幣\ n`;
                        如果（$ .home.right_time）{
                            console.log（`金幣等待：$ {$。home.right_time}秒\ n`）;
                            $ .message + =`【金幣等待】：$ {$。home.right_time}秒\ n`;
                        }
                        如果（$ .home.hb_time）{
                            console.log（`紅包等待：$ {$。home.hb_time}秒\ n`）;
                            $ .message + =`【紅包等待】：$ {$。home.hb_time}秒\ n`;
                        }
                        if（（！$。home.hb_time || $ .home.hb_time <= 0）&& $ .home.hb_st！= 2）{
                            await syhb（）//首頁紅包
                        }
                        if（（！$。home.right_time || $ .home.right_time <= 0）&& $ .home.right_st！= 2）{
                            await homejin（）//首頁金幣
                        }
                        如果（$ .home.right_st == 2）{
                            console.log（`家用金幣：已完成\ n`）;
                            $ .message + =`【家庭金幣】：已完成\ n`;
                        }
                        if ($.home.hb_st == 2) {
                            console.log(`首页红包：已完成\n`);
                            $.message += `【首页红包】：已完成\n`;
                        }
                        if ($.home.steps_btn_st == 1) {
                            await donejin() //步数奖励
                        }
                        if ($.home.jinbi > 0) {
                            collsteps() //步数金币
                        }
                        await step7() //7日达标
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
//步数奖励
function donejin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/donejin?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 步数奖励🚩: ${decodeUnicode(data)}`);
                    $.donejin = JSON.parse(data);
                    if ($.donejin.code == 1) {
                        console.log(`步数奖励：${$.donejin.tip},${$.donejin.msg}\n`);
                        $.message += `【步数奖励】：${$.donejin.tip},${$.donejin.msg}\n`;
                        nonce_str = $.donejin.nonce_str
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
//步数金币
function collsteps(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/collsteps?`,
                headers: header,
                body: `duihuan_dialog=0&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 步数金币🚩: ${decodeUnicode(data)}`);
                    $.collsteps = JSON.parse(data);
                    if ($.collsteps.code == 1) {
                        console.log(`步数金币：${$.collsteps.jinbi}金币,${$.collsteps.msg}\n`);
                        $.message += `【步数金币】：${$.collsteps.jinbi}金币,${$.collsteps.msg}\n`;
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
//7天达标
function step7(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/step7?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 7天达标🚩: ${decodeUnicode(data)}`);
                    $.step7 = JSON.parse(data);
                    if (data.match(/month_day/g) && !data.match(/"is_dabiao": 0/g)) {
                        console.log(`7天达标：已达标\n`);
                        $.message += `【7天达标】：已达标\n`;
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
//附加处理
function callback(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/you/callback?`,
                headers: header,
                body: `nonce_str=${nonce_str}&tid=${tid}&pos=${pos}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 附加处理🚩:${decodeUnicode(data)}`);
                    $.callback = JSON.parse(data);
                    if ($.callback.code == 1) {
                        console.log(`附加处理：成功\n`);
                        //$.message += `【附加处理】：成功\n`;
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
//前置处理
function chuansj(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/chuansj?`,
                headers: header,
                body: `mini_pos=${mini_pos}&c_type=${c_type}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 前置处理🚩: ${decodeUnicode(data)}`);
                    $.chuansj = JSON.parse(data);
                    if ($.chuansj.code == 1) {
                        console.log(`前置处理：成功\n`);
                        //$.message += `【前置处理】：成功\n`;
                        nonce_str = $.chuansj.nonce_str
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
//首页金币
function homejin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/homejin?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 首页金币🚩: ${decodeUnicode(data)}`);
                    $.homejin = JSON.parse(data);
                    if ($.homejin.code == 1) {
                        console.log(`首页金币：成功领取${$.homejin.jinbi}金币\n`);
                        $.message += `【首页金币】：成功领取${$.homejin.jinbi}金币\n`;
                    }
                    tid = 21
                    pos = 1
                    nonce_str = $.homejin.nonce_str
                    await callback()
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//首页红包
async function syhb() {
    console.log(`首页红包：开始执行\n`);
    $.message += `【首页红包】：开始执行\n`;
    mini_pos = 0
    c_type = 2
    tid = 17
    pos = 2
    await chuansj()
    await callback()
}
//金蛋前置
function jindan_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/jindan_click?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 金蛋前置🚩: ${decodeUnicode(data)}`);
                    $.jindan_click = JSON.parse(data);
                    if ($.jindan_click.code == 1) {
                        taskid = $.jindan_click.taskid
                        nonce_str = $.jindan_click.nonce_str
                        await jindan_done() //首页金蛋
                    }
                    if ($.jindan_click.code == -1) {
                        console.log(`首页金蛋：已完成\n`);
                        $.message += `【首页金蛋】：已完成\n`;
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
//首页金蛋
function jindan_done(timeout = 0) {
    return new Promise(async (resolve) => {
        setTimeout(() => {
                let url = {
                    url: `https://bububao.duoshoutuan.com/user/jindan_done?`,
                    headers: header,
                    body: `taskid=${taskid}&clicktime=${ts()}&donetime=${ts()}&nonce_str=${nonce_str}&`,
                }
                $.post(url, async (err, resp, data) => {
                    try {
                        if (logs) $.log(`${O}, 首页金蛋🚩: ${decodeUnicode(data)}`);
                        $.jindan_done = JSON.parse(data);
                        if ($.jindan_done.code == 1) {
                            console.log(`首页金蛋：${$.jindan_done.jinbi}金币,领取成功\n`);
                            $.message += `【首页金蛋】：${$.jindan_done.jinbi}金币,领取成功\n`;
                            nonce_str = $.jindan_done.nonce_str
                            tid = 5
                            pos = 2
                            await callback()
                        }
                    } catch (e) {
                        $.logErr(e, resp);
                    } finally {
                        resolve()
                    }
                })
            },
            timeout)
    })
}
//助力活动
function help_index(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/help_index?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 助力活动🚩: ${decodeUnicode(data)}`);
                    $.help_index = JSON.parse(data);
                    if ($.help_index.code == 1) {
                        console.log(`助力活动：现金${$.help_index.jinbi}元,差${$.help_index.diff_jinbi}元,时间剩余${($.help_index.time/3600).toFixed(0)}小时\n`);
                        $.message += `【助力活动】：现金${$.help_index.jinbi}元,差${$.help_index.diff_jinbi}元,时间剩余${($.help_index.time/3600).toFixed(0)}小时\n`;
                        nonce_str = $.help_index.nonce_str
                        //if ($.help_index.diff_jinbi > 0) {
                        //await help_click()
                        //}
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
//视频助力
function help_click(timeout = 0) {
    return new Promise(async (resolve) => {
        mini_pos = 5
        c_type = 1
        await chuansj()
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/help_click?`,
                headers: header,
                body: `nonce_str=${nonce_str}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频助力🚩: ${decodeUnicode(data)}`);
                    $.help_click = JSON.parse(data);
                    if ($.help_click.code == 1) {
                        console.log(`视频助力：${$.help_click.jinbi/10000}元,领取成功\n`);
                        $.message += `【视频助力】：${$.help_click.jinbi/10000}金币,领取成功\n`;
                        nonce_str = $.help_click.nonce_str
                        tid = 22
                        pos = 1
                        await callback()
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
//每日签到
function signget(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/sign?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日签到🚩: ${decodeUnicode(data)}`);
                    $.signget = JSON.parse(data);
                    if ($.signget.code == 1) {
                        console.log(`每日签到：${$.signget.msg}\n`);
                        $.message += `【每日签到】：${$.signget.msg}\n`;
                        tid = 2
                        pos = 1
                        nonce_str = $.signget.nonce_str
                        await callback()
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
//签到列表
function sign_html(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/sign_html?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到列表🚩: ${decodeUnicode(data)}`);
                    $.sign_html = JSON.parse(data);
                    if ($.sign_html.jinbi_html) {
                        console.log(`签到列表：已签到${$.sign_html.sign_day}天\n`);
                        $.message += `【签到列表】：已签到${$.sign_html.sign_day}天\n`;
                        if ($.sign_html.is_sign_day == 0) {
                            await signget() //签到
                        } else {
                            console.log(`每日签到：已签到\n`);
                            $.message += `【每日签到】：已签到\n`;

                        }
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
//早晚打卡页
function dk_info(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/dk_info?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 早晚打卡页🚩: ${decodeUnicode(data)}`);
                    $.dk_info = JSON.parse(data);
                    if ($.dk_info.code == 1) {
                        now_time = $.dk_info.now_time
                        console.log(`早晚打卡页：${$.dk_info.day},${$.dk_info.title1}\n`);
                        $.message += `【早晚打卡页】：${$.dk_info.day},${$.dk_info.title1}\n`;
                        if ($.dk_info.is_dk == 0) {
                            await dk_click() //早晚打卡
                        }
                        if ($.dk_info.is_dk == 1) {
                            console.log(`早晚打卡：已完成\n`);
                            $.message += `【早晚打卡】：已完成\n`;
                        }
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
//早晚打卡
function dk_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/dk_click?`,
                headers: header,
                body: `now_time=${now_time}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 早晚打卡🚩: ${decodeUnicode(data)}`);
                    $.dk_click = JSON.parse(data);
                    if ($.dk_click.code == 1) {
                        console.log(`早晚打卡：获得${$.dk_click.jinbi}金币\n`);
                        $.message += `【早晚打卡】：获得${$.dk_click.jinbi}金币\n`;
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
//答题活动页
function cy_info(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/cy_info?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 答题活动页🚩: ${decodeUnicode(data)}`);
                    $.cy_info = JSON.parse(data);
                    if ($.cy_info.code == 1) {
                        console.log(`答题活动页：剩余${$.cy_info.day_num}次\n`);
                        $.message += `【答题活动页】：剩余${$.cy_info.day_num}次\n`;
                        cy_id = $.cy_info.cy_id
                        site = $.cy_info.site
                        day_num = $.cy_info.day_num
                        if ($.cy_info.day_num >= 1) {
                            await cy_sp() //答题前置
                        }
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
//答题前置
function cy_sp(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/cy_sp?`,
                headers: header,
                body: `day_num=${day_num}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 答题前置🚩: ${decodeUnicode(data)}`);
                    $.cy_sp = JSON.parse(data);
                    if ($.cy_sp.code == 1) {
                        console.log(`答题前置：${$.cy_sp.msg}\n`);
                        $.message += `【答题前置】：${$.cy_sp.msg}\n`;
                        await cy_click() //答题                                         
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
//答题活动
function cy_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/cy_click?`,
                headers: header,
                body: `cy_id=${cy_id}&site=${site}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 答题活动🚩: ${decodeUnicode(data)}`);
                    $.cy_click = JSON.parse(data);
                    if ($.cy_click.code == 1) {
                        console.log(`答题成功：获得${$.cy_click.jinbi}金币\n`);
                        $.message += `【答题成功】：获得${$.cy_click.jinbi}金币\n`;
                        tid = 18
                        pos = 1
                        nonce_str = $.cy_click.nonce_str
                        await callback()
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
//每天喝水
function water_info(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/water_info?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每天喝水🚩: ${decodeUnicode(data)}`);
                    $.water_info = JSON.parse(data);
                    if ($.water_info.code == 1) {
                        day_num = $.water_info.day_num
                        if ($.water_info.day_num <= 6 && $.water_info.next_time == 0) {
                            await water_click() //开始喝水
                        }
                        if ($.water_info.next_time) {
                            console.log(`每天喝水：已喝${$.water_info.day_num}杯\n`);
                            $.message += `【每天喝水】：已喝${$.water_info.day_num}杯\n`;
                        }
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
//开始喝水
function water_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/water_click?`,
                headers: header,
                body: `day_num=${day_num}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 开始喝水🚩: ${decodeUnicode(data)}`);
                    $.water_click = JSON.parse(data);
                    if ($.water_click.code == 1) {
                        console.log(`${$.water_click.msg}：获得${$.water_click.jinbi}金币\n`);
                        $.message += `【${$.water_click.msg}】：获得${$.water_click.jinbi}金币\n`;
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
//睡觉状态
function sleep_info(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/sleep_info?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 睡觉状态🚩: ${decodeUnicode(data)}`);
                    $.sleep_info = JSON.parse(data);
                    if ($.sleep_info.is_sleep == 1) {
                        console.log(`睡觉状态：做梦中\n`);
                        $.message += `【睡觉状态】：做梦中\n`;
                        if (nowTimes.getHours() === 23) {
                            await sleep_end()
                        }
                    }
                    if ($.sleep_info.is_sleep == 0) {
                        console.log(`睡觉状态：清醒中\n`);
                        $.message += `【睡觉状态】：清醒中\n`;
                        if (nowTimes.getHours() === 0) {
                            await sleep_start()
                        }
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
//开始睡觉
function sleep_start(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/sleep_start?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 开始睡觉🚩: ${decodeUnicode(data)}`);
                    $.sleep_start = JSON.parse(data);
                    if ($.sleep_start.code == 1) {
                        console.log(`开始睡觉：开始睡觉\n`);
                        $.message += `【开始睡觉】：开始睡觉\n`;
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
//结束睡觉
function sleep_end(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/sleep_end?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 结束睡觉🚩: ${decodeUnicode(data)}`);
                    $.sleep_end = JSON.parse(data);
                    if ($.sleep_end.code == 1) {
                        console.log(`结束睡觉：结束睡觉，产生${$.sleep_end.jinbi}金币\n`);
                        $.message += `【结束睡觉】：结束睡觉，产生${$.sleep_end.jinbi}金币\n`;
                        taskid = $.sleep_end.taskid
                        nonce_str = $.sleep_end.nonce_str
                        await sleep_done() //睡觉奖励
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
//睡觉奖励
function sleep_done(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/mini/sleep_done?`,
                headers: header,
                body: `taskid=${taskid}&nonce_str=${nonce_str}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 睡觉奖励🚩: ${decodeUnicode(data)}`);
                    $.sleep_done = JSON.parse(data);
                    if ($.sleep_done.code == 1) {
                        console.log(`睡觉奖励：睡觉奖励领取${$.sleep_done.jinbi}金币\n`);
                        $.message += `【睡觉奖励】：睡觉奖励领取${$.sleep_done.jinbi}金币\n`;
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

//刮刮卡
async function ggk() {
    for (let i = 0; i < 5; i++) {
        setTimeout(async () => {
            await gualist()
        }, i * 2000);
    }
}

//刮刮卡列表
function gualist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/gua/gualist?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 刮刮卡列表🚩: ${decodeUnicode(data)}`);
                    $.gualist = JSON.parse(data);
                    if ($.gualist.ka && $.gualist.ka >= 1) {
                        idlist = $.gualist.list.find(item => item.is_ad === '0');
                        id = idlist.id
                        console.log(`刮刮卡列表：剩余${$.gualist.ka}张，下一张${idlist.jine}元\n`);
                        $.message += `【刮刮卡列表】：剩余${$.gualist.ka}张，下一张${idlist.jine}元\n`;
                        await guadet() //刮卡
                    }
                    if ($.gualist.ka && $.gualist.ka == 0) {
                        console.log(`刮刮卡列表：剩余${$.gualist.ka}张，已完成\n`);
                        $.message += `【刮刮卡列表】：剩余${$.gualist.ka}张，已完成\n`;
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
//刮刮卡
function guadet(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/gua/guadet?`,
                headers: header,
                body: `gid=${id}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 刮刮卡🚩: ${decodeUnicode(data)}`);
                    $.guadet = JSON.parse(data);
                    if ($.guadet.jine) {
                        guacs = data.match(/x(\d+).png/g).length + 1

                        if (!guacs) {
                            console.log(`【刮刮卡查询】：开启${$.guadet.jine}元,抽中1等奖\n`)
                            $.message += `【刮刮卡查询】：开启${$.guadet.jine}元,抽中1等奖\n`;
                            console.log(`【刮刮卡领取】：成功领奖\n`)
                            $.message += `【刮刮卡领取】：成功领奖\n`;
                            sign = $.guadet.sign
                            glid = $.guadet.glid
                            await guapost() //刮卡奖励
                        }
                        if (guacs) {
                            console.log(`【刮刮卡查询】：开启${$.guadet.jine}元,抽中${guacs}等奖\n`)
                            $.message += `【刮刮卡查询】：开启${$.guadet.jine}元,抽中${guacs}等奖\n`;

                            if (guacs <= 3 && nowTimes.getHours() >= 0 && nowTimes.getHours() <= 17) {
                                console.log(`【刮刮卡领取】：成功领奖\n`)
                                $.message += `【刮刮卡领取】：成功领奖\n`;
                                sign = $.guadet.sign
                                glid = $.guadet.glid
                                await guapost() //刮卡奖励
                            } else if (guacs <= 4 && nowTimes.getHours() >= 18 && nowTimes.getHours() <= 22) {
                                console.log(`【刮刮卡领取】：成功领奖\n`)
                                $.message += `【刮刮卡领取】：成功领奖\n`;
                                sign = $.guadet.sign
                                glid = $.guadet.glid
                                await guapost() //刮卡奖励
                            } else if (guacs <= 5 && nowTimes.getHours() == 23) {
                                console.log(`【刮刮卡领取】：成功领奖\n`)
                                $.message += `【刮刮卡领取】：成功领奖\n`;
                                sign = $.guadet.sign
                                glid = $.guadet.glid
                                await guapost() //刮卡奖励
                            } else {
                                console.log(`【刮刮卡领取】：再来一次\n`)
                                $.message += `【刮刮卡领取】：再来一次\n`;
                            }
                        }
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
//刮刮卡奖励
function guapost(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/gua/guapost?`,
                headers: header,
                body: `sign=${sign}&gid=${id}&glid=${glid}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 刮刮卡奖励🚩: ${decodeUnicode(data)}`);
                    $.guapost = JSON.parse(data);
                    if ($.guapost.jf) {
                        console.log(`刮刮卡奖励：获得${$.guapost.jf}金币\n`);
                        $.message += `【刮刮卡奖励】：获得${$.guapost.jf}金币\n`;
                        tid = 6
                        pos = 1
                        nonce_str = $.guapost.nonce_str
                        await callback()
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
//转盘列表
function lucky(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/lucky?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 转盘列表🚩: ${decodeUnicode(data)}`);
                    $.lucky = JSON.parse(data);
                    if ($.lucky.lucky_num) {
                        console.log(`转盘列表：剩余${$.lucky.lucky_num}次，已运行${$.lucky.lucky_count}次\n`);
                        $.message += `【转盘列表】：剩余${$.lucky.lucky_num}次，已运行${$.lucky.lucky_count}次\n`;
                        if ($.lucky.lucky_num >= 1) {
                            await lucky_click() //转盘抽奖
                        }
                    }
                    if ($.lucky && $.lucky.lucky_box.indexOf('1') >= 0) {
                        box = $.lucky.lucky_box.indexOf('1') + 1
                        await lucky_box() //抽奖宝箱
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
//转盘抽奖
function lucky_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/lucky_click?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 转盘抽奖🚩: ${decodeUnicode(data)}`);
                    $.lucky_click = JSON.parse(data);
                    if ($.lucky_click.jinbi) {
                        console.log(`转盘抽奖：获得${$.lucky_click.jinbi}金币\n`);
                        $.message += `【转盘抽奖】：获得${$.lucky_click.jinbi}金币\n`;
                        tid = 16
                        pos = 2
                        nonce_str = $.lucky_click.nonce_str
                        await callback()
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
//抽奖宝箱
function lucky_box(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/lucky_box?`,
                headers: header,
                body: `box=${box}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖宝箱🚩: ${decodeUnicode(data)}`);
                    $.lucky_box = JSON.parse(data);
                    if ($.lucky_box.jinbi) {
                        console.log(`抽奖宝箱：获得${$.lucky_box.jinbi}金币\n`);
                        $.message += `【抽奖宝箱】：获得${$.lucky_box.jinbi}金币\n`;
                        tid = 16
                        pos = 2
                        nonce_str = $.lucky_box.nonce_str
                        await callback()
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
//看看赚列表
function h5_list(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/h5_list?`,
                headers: header,
                body: `page=1&page_limit=25&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看看赚列表🚩: ${decodeUnicode(data)}`);
                    $.h5_list = JSON.parse(data);
                    is_ok = $.h5_list.find(item => item.is_ok === 0);
                    if (is_ok) {
                        id = is_ok.id
                        console.log(`看看赚列表：下个任务：${is_ok.mini_name}\n`);
                        $.message += `【看看赚列表】：下个任务：${is_ok.mini_name}\n`;

                        await h5_news() //看看赚执行
                    } else {
                        console.log(`看看赚：已完成\n`);
                        $.message += `【看看赚】：已完成\n`;
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
//看看赚执行
function h5_news(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/h5_news?`,
                headers: header,
                body: `mini_id=${id}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看看赚执行🚩: ${decodeUnicode(data)}`);
                    $.h5_news = JSON.parse(data);
                    if ($.h5_news.taskid) {
                        console.log(`看看赚执行：下个任务：${$.h5_news.mini_str}\n`);
                        $.message += `【看看赚执行】：下个任务：${$.h5_news.mini_str}\n`;
                        taskid = $.h5_news.taskid
                        nonce_str = $.h5_news.nonce_str
                        await $.wait(15000)
                        await h5_h5() //看看上传
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

//看看赚上传
function h5_h5(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://hunter-report.dui88.com/tuiaExtLog?group=1&type=9&json=%7B%22subtype%22%3A%22head%22%2C%22tck_rid_6c8%22%3A%220a56e7aaklm541ew-6681973%22%2C%22slotId%22%3A%22353024%22%2C%22activityId%22%3A%2216765%22%2C%22consumerId%22%3A%2226444115908%22%2C%22timestamp%22%3A${tts()}%7D`,
                headers: {
                    "Host": "hunter-report.dui88.com"
                },

            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看看赚上传🚩: ${decodeUnicode(data)}`);
                    $.h5_h5 = JSON.parse(data);
                    console.log(`看看赚：${$.h5_h5.msg}\n`);
                    $.message += `【看看赚】：${$.h5_h5.msg}\n`;

                    await $.wait(30000)
                    await h5_newsdone() //看看赚完成

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}


//看看赚完成
function h5_newsdone(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/h5_newsdone?`,
                headers: header,
                body: `taskid=${taskid}&nonce_str=${nonce_str}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看看赚完成🚩: ${decodeUnicode(data)}`);
                    $.h5_newsdone = JSON.parse(data);
                    if ($.h5_newsdone.msg) {
                        console.log(`看看赚完成：${$.h5_newsdone.msg}${$.h5_newsdone.jinbi}金币\n`);
                        $.message += `【看看赚完成】：${$.h5_newsdone.msg}${$.h5_newsdone.jinbi}金币\n`;
                        tid = 10
                        pos = 1
                        nonce_str = $.h5_newsdone.fb_str
                        await callback()
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
//赚赚任务
function renwu(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/renwu?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 赚赚任务🚩: ${decodeUnicode(data)}`);
                    $.renwu = JSON.parse(data);
                    if ($.renwu.v_st == 0) {
                        await sp() //看视频
                    }
                    if ($.renwu.first.admobile_st == 0) {
                        await admobile_show() //看广告
                    }
                    if ($.renwu.v_st == 2) {
                        console.log(`看视频：250金币，已完成\n`);
                        $.message += `【看视频】：250金币，已完成\n`;
                    }
                    if ($.renwu.first.admobile_st == 2) {
                        console.log(`看广告：200金币，已完成\n`);
                        $.message += `【看广告】：200金币，已完成\n`;
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
//看文章
function news(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/news?`,
                headers: header,
                body: `type_class=1&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看文章🚩: ${decodeUnicode(data)}`);
                    $.news = JSON.parse(data);
                    if ($.news.code == 1 && $.news.is_max == 0) {
                        nonce_str = $.news.nonce_str
                        await donenews() //看文章完成
                    }
                    if ($.news.code == 1 && $.news.is_max == 1) {
                        console.log(`看文章：900金币，完成\n`);
                        $.message += `【看文章】：900金币，完成\n`;
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
//看文章完成
function donenews(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/donenews?`,
                headers: header,
                body: `nonce_str=${nonce_str}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 看文章完成🚩: ${decodeUnicode(data)}`);
                    $.donenews = JSON.parse(data);
                    if ($.donenews.jinbi) {
                        console.log(`看文章：获得${$.donenews.jinbi}金币，今日获得${$.donenews.day_jinbi}金币\n`);
                        $.message += `【看文章】：获得${$.donenews.jinbi}金币，今日获得${$.donenews.day_jinbi}金币\n`;
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
//观看视频
async function sp() {
    console.log(`观看视频：开始执行\n`);
    $.message += `【观看视频】：开始执行\n`;
    mini_pos = 0
    c_type = 1
    tid = 9
    pos = 1
    await chuansj()
    await callback()
}
//激活广告
function admobile_show(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/admobile_show?`,
                headers: header,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 激活广告🚩: ${decodeUnicode(data)}`);
                    $.admobile_show = JSON.parse(data);
                    if ($.admobile_show.code == 1) {
                        ad_id = $.admobile_show.ad_id
                        await admobile_click() //点击广告
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
//点击广告
function admobile_click(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/admobile_click?`,
                headers: header,
                body: `ad_id=${ad_id}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 点击广告🚩: ${decodeUnicode(data)}`);
                    $.admobile_click = JSON.parse(data);
                    if ($.admobile_click.code == 1) {
                        nonce_str = $.admobile_click.nonce_str
                        await admobile_done() //广告奖励
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
//广告奖励
function admobile_done(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/admobile_done?`,
                headers: header,
                body: `nonce_str=${nonce_str}&ad_id=${ad_id}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 广告奖励🚩: ${decodeUnicode(data)}`);
                    $.admobile_done = JSON.parse(data);
                    if ($.admobile_done.code == 1) {
                        console.log(`广告奖励：获得${$.admobile_done.jinbi}金币\n`);
                        $.message += `【广告奖励】：获得${$.admobile_done.jinbi}金币\n`;
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
//提现页
function tixian_html(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/tixian_html?`,
                headers: header,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现页🚩: ${decodeUnicode(data)}`);
                    $.tixian_html = JSON.parse(data);
                    if ($.tixian_html.tixian_html) {

                        jine3 = $.tixian_html.tixian_html.find(item => item.jine === '50');
                        jine4 = $.tixian_html.tixian_html.find(item => item.jine === '100');
                        jine5 = $.tixian_html.tixian_html.find(item => item.jine === '200');
                        day_tixian_tip = $.tixian_html.tixian_html.find(item => item.day_tixian_tip);

                        if (day_tixian_tip) {
                            console.log(`提现查询：今日已提现\n`);
                            $.message += `【提现查询】：今日已提现\n`;
                        }

                        if (jine3 && jine3.fenshu_tixian_tip && jine4 && jine4.fenshu_tixian_tip && jine5 && jine5.fenshu_tixian_tip) {

                            fenshu3 = jine3.fenshu_tixian_tip.split('今日剩余')[1].split('份')[0]
                            fenshu4 = jine4.fenshu_tixian_tip.split('今日剩余')[1].split('份')[0]
                            fenshu5 = jine5.fenshu_tixian_tip.split('今日剩余')[1].split('份')[0]



                            console.log(`${jine3.jine}元：${jine3.fenshu_tixian_tip}\n${jine4.jine}元：${jine4.fenshu_tixian_tip}\n${jine5.jine}元：${jine5.fenshu_tixian_tip}\n`);
                            $.message += `【${jine3.jine}元】：${jine3.fenshu_tixian_tip}\n【${jine4.jine}元】：${jine4.fenshu_tixian_tip}\n【${jine5.jine}元】：${jine5.fenshu_tixian_tip}\n`;
                        }
                        if (!day_tixian_tip && ($.user.wx_username != "" || $.user.is_weixin == 1)) {

                            if (CASH == 0.3 && $.user.day_jinbi >= 5000 && $.user.money >= CASH) {
                                await tixian() //提现
                            }
                            if (CASH > 0.3 && CASH <= 200 && $.user.money >= CASH) {
                                await tixian() //提现
                            }
                            if (CASH == 888) {
                                if ($.user.money >= 200 && fenshu5 && fenshu5 > 0) {
                                    CASH = 200
                                } else if ($.user.money >= 100 && fenshu4 && fenshu4 > 0) {
                                    CASH = 100
                                } else if ($.user.money >= 50 && fenshu5 && fenshu5 > 0) {
                                    CASH = 50
                                } else if ($.user.money >= 0.3 && $.user.day_jinbi >= 5000) {
                                    CASH = 0.3
                                }
                                if (CASH != 888) {
                                    await tixian() //提现
                                }
                            }
                        }
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
//现金提现
function tixian(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://bububao.duoshoutuan.com/user/tixian?`,
                headers: header,
                body: `tx=${CASH}&`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 现金提现🚩: ${decodeUnicode(data)}`);
                    $.tixian = JSON.parse(data);
                    if ($.tixian.code == 1) {
                        console.log(`现金提现：${$.tixian.msg}\n`);
                        $.message += `【现金提现】：${$.tixian.msg}\n`;
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
}            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>logs</span><span class=pl-kos>)</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`<span class=pl-s1><span class=pl-kos>${</span><span class=pl-v>O</span><span class=pl-kos>}</span></span>, 广告奖励🚩: <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>data</span><span class=pl-kos>}</span></span>`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>admobile_done</span> <span class=pl-c1>=</span> <span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>admobile_done</span><span class=pl-kos>.</span><span class=pl-c1>code</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">                        <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`广告奖励：获得<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>admobile_done</span><span class=pl-kos>.</span><span class=pl-c1>jinbi</span><span class=pl-kos>}</span></span>金币\n`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>message</span> <span class=pl-c1>+=</span> <span class=pl-s>`【广告奖励】：获得<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>admobile_done</span><span class=pl-kos>.</span><span class=pl-c1>jinbi</span><span class=pl-kos>}</span></span>金币\n`</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>logErr</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span> <span class=pl-s1>resp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>finally</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>resolve</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>timeout</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//提现页</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>tixian_html</span><span class=pl-kos>(</span>timeout <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-v>Promise</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>resolve</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>setTimeout</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>let</span> <span class=pl-s1>url</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>url</span>: <span class=pl-s>`https://bububao.duoshoutuan.com/user/tixian_html?`</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>headers</span>: <span class=pl-s1>header</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s1>url</span><span class=pl-kos>,</span> <span class=pl-k>async</span> <span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>,</span> <span class=pl-s1>resp</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>logs</span><span class=pl-kos>)</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`<span class=pl-s1><span class=pl-kos>${</span><span class=pl-v>O</span><span class=pl-kos>}</span></span>, 提现页🚩: <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>data</span><span class=pl-kos>}</span></span>`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span> <span class=pl-c1>=</span> <span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">                       </td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>jine3</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>item</span> <span class=pl-c1>=&gt;</span> <span class=pl-s1>item</span><span class=pl-kos>.</span><span class=pl-c1>jine</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;50&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>jine4</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>item</span> <span class=pl-c1>=&gt;</span> <span class=pl-s1>item</span><span class=pl-kos>.</span><span class=pl-c1>jine</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;100&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>jine5</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>item</span> <span class=pl-c1>=&gt;</span> <span class=pl-s1>item</span><span class=pl-kos>.</span><span class=pl-c1>jine</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;200&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>day_tixian_tip</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-c1>tixian_html</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>item</span> <span class=pl-c1>=&gt;</span> <span class=pl-s1>item</span><span class=pl-kos>.</span><span class=pl-c1>day_tixian_tip</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>fenshu3</span> <span class=pl-c1>=</span> <span class=pl-s1>jine3</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;今日剩余&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;份&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>fenshu4</span> <span class=pl-c1>=</span> <span class=pl-s1>jine4</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;今日剩余&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;份&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>fenshu5</span> <span class=pl-c1>=</span> <span class=pl-s1>jine5</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;今日剩余&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;份&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">                        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>day_tixian_tip</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">                            <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`提现查询：今日已提现\n`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">                            <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>message</span> <span class=pl-c1>+=</span> <span class=pl-s>`【提现查询】：今日已提现\n`</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">                        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">                        <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine3</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine3</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine4</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine4</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine5</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine5</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>message</span> <span class=pl-c1>+=</span> <span class=pl-s>`【<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine3</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元】：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine3</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n【<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine4</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元】：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine4</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n【<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine5</span><span class=pl-kos>.</span><span class=pl-c1>jine</span><span class=pl-kos>}</span></span>元】：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>jine5</span><span class=pl-kos>.</span><span class=pl-c1>fenshu_tixian_tip</span><span class=pl-kos>}</span></span>\n`</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">                        <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>day_tixian_tip</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>wx_username</span> != <span class=pl-s>&quot;&quot;</span> <span class=pl-c1>||</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>is_weixin</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">                            </td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">                            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-c1>CASH</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>49</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-c1>CASH</span> &lt;= <span class=pl-c1>200</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>money</span> &gt;= <span class=pl-c1>CASH</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">                                <span class=pl-k>await</span> <span class=pl-en>tixian</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c>//提现</span></td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">                            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">                            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-c1>CASH</span> <span class=pl-c1>==</span> <span class=pl-c1>888</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">                                <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>money</span> &gt;= <span class=pl-c1>200</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>fenshu5</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">                                    <span class=pl-c1>CASH</span> <span class=pl-c1>=</span> <span class=pl-c1>200</span></td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">                                <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>money</span> &gt;= <span class=pl-c1>100</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>fenshu4</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">                                    <span class=pl-c1>CASH</span> <span class=pl-c1>=</span> <span class=pl-c1>100</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">                                <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>money</span> &gt;= <span class=pl-c1>50</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>fenshu5</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">                                    <span class=pl-c1>CASH</span> <span class=pl-c1>=</span> <span class=pl-c1>50</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">                                <span class=pl-kos>}</span> </td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">                                <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-c1>CASH</span> != <span class=pl-c1>888</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">                                    <span class=pl-k>await</span> <span class=pl-en>tixian</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c>//提现</span></td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">                                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">                            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">                        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>logErr</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span> <span class=pl-s1>resp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>finally</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>resolve</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>timeout</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//现金提现</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>tixian</span><span class=pl-kos>(</span>timeout <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-v>Promise</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>resolve</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>setTimeout</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>let</span> <span class=pl-s1>url</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>url</span>: <span class=pl-s>`https://bububao.duoshoutuan.com/user/tixian?`</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>headers</span>: <span class=pl-s1>header</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>body</span>: <span class=pl-s>`tx=<span class=pl-s1><span class=pl-kos>${</span><span class=pl-c1>CASH</span><span class=pl-kos>}</span></span>&amp;`</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>post</span><span class=pl-kos>(</span><span class=pl-s1>url</span><span class=pl-kos>,</span> <span class=pl-k>async</span> <span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>,</span> <span class=pl-s1>resp</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>logs</span><span class=pl-kos>)</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`<span class=pl-s1><span class=pl-kos>${</span><span class=pl-v>O</span><span class=pl-kos>}</span></span>, 现金提现🚩: <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>data</span><span class=pl-kos>}</span></span>`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian</span> <span class=pl-c1>=</span> <span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian</span><span class=pl-kos>.</span><span class=pl-c1>code</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">                        <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>`现金提现：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian</span><span class=pl-kos>.</span><span class=pl-c1>msg</span><span class=pl-kos>}</span></span>\n`</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">                        <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>message</span> <span class=pl-c1>+=</span> <span class=pl-s>`【现金提现】：<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>tixian</span><span class=pl-kos>.</span><span class=pl-c1>msg</span><span class=pl-kos>}</span></span>\n`</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>logErr</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span> <span class=pl-s1>resp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span> <span class=pl-k>finally</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">                    <span class=pl-s1>resolve</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>timeout</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// prettier-ignore</span></td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-v>Env</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>,</span> <span class=pl-s1>e</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>class</span> <span class=pl-s1>s</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>constructor</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>env</span> <span class=pl-c1>=</span> <span class=pl-s1>t</span></td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>send</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>,</span> e <span class=pl-c1>=</span> <span class=pl-s>&quot;GET&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>t</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;string&quot;</span> <span class=pl-c1>==</span> <span class=pl-k>typeof</span> <span class=pl-s1>t</span> ? <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>url</span>: <span class=pl-s1>t</span></td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span> : <span class=pl-s1>t</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>let</span> <span class=pl-s1>s</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>get</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>return</span> <span class=pl-s>&quot;POST&quot;</span> <span class=pl-c1>===</span> <span class=pl-s1>e</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-s1>s</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>post</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-k>new</span> <span class=pl-v>Promise</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-c1>=&gt;</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>s</span><span class=pl-kos>.</span>
