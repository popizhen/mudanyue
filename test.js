{
    "author": "春风",
    "ua": "",
    "homeUrl": "https://www.youbotv.cn/",
    "dcVipFlag": "true",
    "pCfgJs": "https://www.youbotv.cn/static/js/playerconfig.js",
    "pCfgJsR": "MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateManual": {
        "电影": "1",
        "连续剧": "2",
        "动漫": "4",
        "综艺": "3"
    },
    "homeVodNode": "//div[@class='module-item']",
    "homeVodName": "//div[@class='module-item-pic']/a/@title",
    "homeVodId": "//div[@class='module-item-pic']/a/@href",
    "homeVodIdR": "/voddetail/(\\w+).html",
    "homeVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "homeVodImgR": "\\S*(http\\S+)",
    "homeVodMark": "//div[@class='module-item-text']/text()",
//   "cateUrl": "https://www.youbotv.cn/vodshow/{cateId}--------{catePg}---.html",
    "cateUrl": "https://www.youbotv.cn/vodshow/{cateId}-{area}-{by}-{area}-----{catePg}---{year}.html",
    "cateVodNode": "//div[@class='module-item']",
    "cateVodName": "//div[@class='module-item-pic']/a/@title",
    "cateVodId": "//div[@class='module-item-pic']/a/@href",
    "cateVodIdR": "/voddetail/(\\w+).html",
    "cateVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "cateVodImgR": "\\S*(http\\S+)",
    "cateVodMark": "//div[@class='module-item-text']/text()",
    "dtUrl": "https://www.youbotv.cn/voddetail/{vid}.html",
    "dtNode": "//body",
    "dtName": "//h1[@class='page-title']/text()",
    "dtNameR": "",
    "dtImg": "//div[@class='mobile-play']//div[@class='module-item-pic']/img/@data-src",
    "dtImgR": "\\S*(http\\S+)",
    "dtCate": "//div[@class='tag-link']/a/text()",
    "dtCateR": "",
    "dtYear": "//a[@class='tag-link'][2]/text()",
    "dtYearR": "",
    "dtArea": "//a[@class='tag-link'][3]/text()",
    "dtAreaR": "",
    "dtDirector": "//span[contains(text(), '导演')]/following-sibling::/div/a/text()",
    "dtDirectorR": "",
    "dtActor": "//span[contains(text(), '主演')]/following-sibling::/div/a/text()",
    "dtActorR": "",
    "dtDesc": "//span[contains(text(), '剧情')]/following-sibling::/div/span/text()",
    "dtDescR": "",
    "dtFromNode": "//div[@class='module-tab-content']/div/span",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//div[@class='module-blocklist']/div",
    "dtUrlSubNode": "/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.youbotv.cn/vodplay/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.youbotv.cn/vodsearch/-------------.html?wd={wd}",
    "scVodNode": "//div[@class='module-items']",
    "scVodName": "//h3/a/@title",
    "scVodId": "//h3/a/@href",
    "scVodIdR": "/voddetail/(\\w+).html",
    "scVodImg": "//img/@data-src",
    "scVodImgR": "\\S*(http\\S+)",
    "scVodMark": "//a[@class='video-serial']/text()"
   "filter":{
"1": [
{"name":"类型","key":"class","value":[{"n":"全部","v":"1"},{"n":"4K","v":"4K"},{"n":"蓝光","v":"蓝光"},{"n":"院线","v":"院线"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"战争","v":"战争"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"动画","v":"动画"}]},
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"}]},
{"name":"排序","key":"by","value":[{"n":"全部","v":""},{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}
],
"2": [
{"name":"类型","key":"class","value":[{"n":"全部","v":"2"},{"n":"4K","v":"4K"},{"n":"蓝光","v":"蓝光"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"都市","v":"都市"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"奇幻","v":"奇幻"},{"n":"动作","v":"动作"}]},
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"}]},
{"name":"排序","key":"by","value":[{"n":"全部","v":""},{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}
],
"3": [
{"name":"类型","key":"class","value":[{"n":"全部","v":"3"}]},
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"米国","v":"米国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"}]},
{"name":"排序","key":"by","value":[{"n":"全部","v":""},{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}
],
"4": [
{"name":"类型","key":"class","value":[{"n":"全部","v":"4"},{"n":"国创","v":"国创"},{"n":"番剧","v":"番剧"}]},
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"米国","v":"米国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"}]},
{"name":"排序","key":"by","value":[{"n":"全部","v":""},{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}
]
}





}
