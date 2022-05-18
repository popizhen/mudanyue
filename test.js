{
    "author": "春风",
    "ua": "",
    "homeUrl": "https://www.qkw2.com/",
    "dcVipFlag": "true",
    "pCfgJs": "https://www.qkw2.com/static/js/playerconfig.js",
    "pCfgJsR": "MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateManual": {
        "电影": "1",
        "连续剧": "2",
        "动漫": "4",
        "综艺": "3"
    },
    "homeVodNode": "//ul[contains(@class,'vodlist vodlist_wi')]/li",
    "homeVodName": "/a/@title",
    "homeVodId": "/a/@href",
    "homeVodIdR": "/vod/detail/(\\w+).html",
    "homeVodImg": "/a/@data-original",
    "homeVodImgR": "",
    "homeVodMark": "//span[@class='pic_text text_right']/text()",
    "cateUrl": "https://www.qkw2.com/vod/show/{cateId}-{area}-{by}------{catePg}---{year}.html",
    "cateVodNode": "//ul[contains(@class,'vodlist vodlist_wi')]/li",
    "cateVodName": "/a/@title",
    "cateVodId": "/a/@href",
    "cateVodIdR": "/vod/detail/(\\w+).html",
    "cateVodImg": "/a/@data-original",
    "cateVodImgR": "",
    "cateVodMark": "//span[@class='pic_text text_right']/text()",
    "dtUrl": "https://www.qkw2.com/vod/play/{vid}-1-1.html",
    "dtNode": "//body",
    "dtName": "//h3[@class='title']/text()",
    "dtNameR": "",
    "dtImg": "//div[@class='play_vlist cblock']/div[contains(@class,'play_vlist_thumb')]/@data-original",
    "dtImgR": "",
    "dtCate": "//span[contains(text(), '类型')]/following-sibling::a/text()",
    "dtCateR": "",
    "dtYear": "//span[contains(text(), '年份')]/following-sibling::a/text()",
    "dtYearR": "",
    "dtArea": "//span[contains(text(), '地区')]/following-sibling::a/text()",
    "dtAreaR": "",
    "dtDirector": "//span[contains(text(), '导演')]/following-sibling::a/text()",
    "dtDirectorR": "",
    "dtActor": "//span[contains(text(), '主演')]/parent::text()",
    "dtActorR": "",
    "dtDesc": "//div[@class='panel play_content']/text()",
    "dtDescR": "",
    "dtFromNode": "//ul[@class='title_nav']/li/label/span",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//ul[@class='content_playlist clearfix']",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/vod/play/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.qkw2.com/vod/play/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.qkw2.com/vod/search/-------------.html?wd={wd}&submit=",
    "scVodNode": "//div[@class='searchlist_img']/a",
    "scVodName": "/@title",
    "scVodId": "/@href",
    "scVodIdR": "/vod/detail/(\\w+).html",
    "scVodImg": "/@data-original",
    "scVodMark": "/span[@class='pic_text text_right']/text()",
   "filter":{
"1": [
{
"name":"类型",
"key":"cateId",
"value":[
{"n":"全部","v":"1"},
{"n":"动作片","v":"6"},
{"n":"喜剧片","v":"7"},
{"n":"爱情片","v":"8"},
{"n":"科幻片","v":"9"},
{"n":"恐怖片","v":"10"},
{"n":"剧情片","v":"11"},
{"n":"战争片","v":"12"},
{"n":"奇幻片","v":"21"},
{"n":"纪录片","v":"22"},
{"n":"悬疑片","v":"25"},
{"n":"犯罪片","v":"26"},
{"n":"惊悚片","v":"27"}
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
{"n":"印度","v":"印度"},
{"n":"德国","v":"德国"},
{"n":"意大利","v":"意大利"},
{"n":"加拿大","v":"加拿大"}
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
{"n":"全部","v":"2"},
{"n":"国产剧","v":"13"},
{"n":"港台剧","v":"14"},
{"n":"日韩剧","v":"15"},
{"n":"欧美剧","v":"16"},
{"n":"海外剧","v":"20"}
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
{"n":"新加坡","v":"新加坡"},
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
{"n":"日本","v":"日本"},
{"n":"泰国","v":"泰国"},
{"n":"印度","v":"印度"},
{"n":"德国","v":"德国"},
{"n":"英国","v":"英国"},
{"n":"法国","v":"法国"}
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
{"n":"香港","v":"香港"},
{"n":"台湾","v":"台湾"},
{"n":"美国","v":"美国"},
{"n":"韩国","v":"韩国"},
{"n":"日本","v":"日本"},
{"n":"泰国","v":"泰国"},
{"n":"英国","v":"英国"},
{"n":"法国","v":"法国"},
{"n":"德国","v":"德国"}
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
