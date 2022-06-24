
{
    "author": "春风",
    "ua": "",
    "homeUrl": "http://app.lmvideos.cn/",
    "dcVipFlag": "true",
    "pCfgJs": "http://app.lmvideos.cn/static/js/playerconfig.js",
    "pCfgJsR": "MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateManual": {
        "电影": "1",
        "剧集": "2",
        "动漫": "4",
        "综艺": "3",
        "音乐MV": "32",
        "4K剧集": "31",
        "4K电影": "30",
        "纪录片": "29"
    },
    "homeVodNode": "//a[@class='stui-vodlist__thumb lazyload' or @class='stui-vodlist__thumb active lazyload' and not(contains(@href,'topic'))]",
    "homeVodName": "/@title",
    "homeVodId": "/@href",
    "homeVodIdR": "/vod/play/(\\S+).html",
    "homeVodImg": "/@data-original",
    "homeVodImgR": "",
    "homeVodMark": "/span[contains(@class,'pic-text text-right') or contains(@class,'picc-text')]/text()",
//    "cateUrl": "http://app.lmvideos.cn/vod/type/id/{cateId}/page/{catePg}.html",
    "cateUrl": "http://app.lmvideos.cn/vod/show/area/{area}/by/{by}/id/{cateId}/page/{catePg}/year/{year}.html",
    "cateVodNode": "//a[@class='stui-vodlist__thumb lazyload']",
    "cateVodName": "/@title",
    "cateVodId": "/@href",
    "cateVodIdR": "/vod/play/(\\S+).html",
    "cateVodImg": "/@data-original",
    "cateVodImgR": "",
    "cateVodMark": "/span[@class='pic-text text-right']/text()",
    "dtUrl": "http://app.lmvideos.cn/vod/play/{vid}.html",
    "dtNode": "//body",
    "dtName": "//li[@class='title']/text()",
    "dtNameR": "",
    "dtImg": "//a[@class='stui-vodlist__thumb lazyload']/@data-original",
    "dtDirector": "//span[contains(text(), '导演')]/following-sibling::a/text()",
    "dtDirectorR": "",
    "dtActor": "//span[contains(text(), '主演')]/following-sibling::a/text()",
    "dtActorR": "",
    "dtDesc": "//*[contains(text(), '简介')]/text()",
    "dtDescR": "简介：([\\s\\S]*)",
    "dtFromNode": "//ul[contains(@class,'play-tab')]/li/a",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//ul[contains(@class,'stui-play__list')]",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/vod/play/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "http://app.lmvideos.cn/vod/play/{playUrl}.html",
    "playUa": "Mozilla/5.0 (Linux; Android 10; LYA-AL00; HMSCore 6.5.0.312; GMSCore 20.15.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 HuaweiBrowser/11.0.4.300 Mobile Safari/537.36",
    "searchUrl": "http://app.lmvideos.cn/vod/search.html?wd={wd}&submit=",
    "scVodNode": "//a[@class='stui-vodlist__thumb lazyload']",
    "scVodName": "/@title",
    "scVodId": "/@href",
    "scVodIdR": "/vod/play/(\\S+).html",
    "scVodImg": "/@data-original",
    "scVodMark": "/span[@class='pic-text text-right']/text()",
   "filter":{
"1": [
{
"name":"类型",
"key":"cateId",
"value":[
{"n":"全部","v":"1"}
]
},
{
"name":"年份",
"key":"year",
"value":[
{"n":"全部","v":""},
{"n":"2022","v":"2022"},
{"n":"2021","v":"2021"},
{"n":"2020","v":"2020"},
{"n":"2019","v":"2019"},
{"n":"2018","v":"2018"},
{"n":"2017","v":"2017"},
{"n":"2016","v":"2016"},
{"n":"2015","v":"2015"},
{"n":"2014","v":"2014"},
{"n":"2013","v":"2013"},
{"n":"2012","v":"2012"},
{"n":"2011","v":"2011"},
{"n":"2010","v":"2010"}
]
},
{
"name":"地区",
"key":"area",
"value":[
{"n":"全部","v":""},
{"n":"大陆","v":"大陆"},
{"n":"香港","v":"香港"},
{"n":"台湾","v":"台湾"},
{"n":"美国","v":"美国"},
{"n":"韩国","v":"韩国"},
{"n":"日本","v":"日本"},
{"n":"英国","v":"英国"},
{"n":"法国","v":"法国"},
{"n":"泰国","v":"泰国"},
{"n":"西班牙","v":"西班牙"},
{"n":"德国","v":"德国"},
{"n":"意大利","v":"意大利"},
{"n":"其它","v":"其它"}
]
},
{
"name":"排序",
"key":"by",
"value":[
{"n":"全部","v":""},
{"n":"时间","v":"time"},
{"n":"人气","v":"hits"},
{"n":"评分","v":"score"}
]
}
],
"2": [
{
"name":"类型",
"key":"cateId",
"value":[
{"n":"全部","v":"2"}
]
},
{
"name":"年份",
"key":"year",
"value":[
{"n":"全部","v":""},
{"n":"2022","v":"2022"},
{"n":"2021","v":"2021"},
{"n":"2020","v":"2020"},
{"n":"2019","v":"2019"},
{"n":"2018","v":"2018"},
{"n":"2017","v":"2017"},
{"n":"2016","v":"2016"},
{"n":"2015","v":"2015"},
{"n":"2014","v":"2014"},
{"n":"2013","v":"2013"},
{"n":"2012","v":"2012"},
{"n":"2011","v":"2011"},
{"n":"2010","v":"2010"}
]
},
{
"name":"地区",
"key":"area",
"value":[
{"n":"全部","v":""},
{"n":"大陆","v":"大陆"},
{"n":"香港","v":"香港"},
{"n":"台湾","v":"台湾"},
{"n":"美国","v":"美国"},
{"n":"韩国","v":"韩国"},
{"n":"日本","v":"日本"},
{"n":"泰国","v":"泰国"},
{"n":"新加坡","v":"新加坡"},
{"n":"英国","v":"英国"},
{"n":"其他","v":"其他"}
]
},
{
"name":"排序",
"key":"by",
"value":[
{"n":"全部","v":""},
{"n":"时间","v":"time"},
{"n":"人气","v":"hits"},
{"n":"评分","v":"score"}
]
}
],
"3": [
{
"name":"类型",
"key":"cateId",
"value":[
{"n":"全部","v":"3"}
]
},
{
"name":"年份",
"key":"year",
"value":[
{"n":"全部","v":""},
{"n":"2022","v":"2022"},
{"n":"2021","v":"2021"},
{"n":"2020","v":"2020"},
{"n":"2019","v":"2019"},
{"n":"2018","v":"2018"},
{"n":"2017","v":"2017"},
{"n":"2016","v":"2016"},
{"n":"2015","v":"2015"},
{"n":"2014","v":"2014"},
{"n":"2013","v":"2013"},
{"n":"2012","v":"2012"},
{"n":"2011","v":"2011"},
{"n":"2010","v":"2010"}
]
},
{
"name":"地区",
"key":"area",
"value":[
{"n":"全部","v":""},
{"n":"大陆","v":"大陆"},
{"n":"香港","v":"香港"},
{"n":"台湾","v":"台湾"},
{"n":"美国","v":"美国"},
{"n":"韩国","v":"韩国"},
{"n":"其它","v":"其它"}
]
},
{
"name":"排序",
"key":"by",
"value":[
{"n":"全部","v":""},
{"n":"时间","v":"time"},
{"n":"人气","v":"hits"},
{"n":"评分","v":"score"}
]
}
],
"4": [
{
"name":"类型",
"key":"cateId",
"value":[
{"n":"全部","v":"4"}
]
},
{
"name":"年份",
"key":"year",
"value":[
{"n":"全部","v":""},
{"n":"2022","v":"2022"},
{"n":"2021","v":"2021"},
{"n":"2020","v":"2020"},
{"n":"2019","v":"2019"},
{"n":"2018","v":"2018"},
{"n":"2017","v":"2017"},
{"n":"2016","v":"2016"},
{"n":"2015","v":"2015"},
{"n":"2014","v":"2014"},
{"n":"2013","v":"2013"},
{"n":"2012","v":"2012"},
{"n":"2011","v":"2011"},
{"n":"2010","v":"2010"}
]
},
{
"name":"地区",
"key":"area",
"value":[
{"n":"全部","v":""},
{"n":"大陆","v":"大陆"},
{"n":"欧美","v":"欧美"},
{"n":"日本","v":"日本"},
{"n":"其他","v":"其他"}
]
},
{
"name":"排序",
"key":"by",
"value":[
{"n":"全部","v":""},
{"n":"时间","v":"time"},
{"n":"人气","v":"hits"},
{"n":"评分","v":"score"}
]
}
]
}
}
