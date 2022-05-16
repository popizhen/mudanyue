{
  "ua": "",
  "homeUrl": "https://v.xuangz.cn/",
  "cateNode": "//ul[@class='nav navbar-nav']/li/a[contains(@href,'whole') and not(contains(@href, '5'))]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/whole(\\S+).html",
  "cateManual": {
      "电影":"1",  "电视剧":"2",  "动漫":"3",  "综艺":"4" },
  "homeVodNode": "//div[@class='movie-item-in']",
  "homeVodName": "/div/h1/a/text()",
  "homeVodId": "/div/h1/a/@href",
  "homeVodIdR": "/show(\\S+).html",
  "homeVodImg": "/a/img/@src",
  "homeVodImgR": "",
  "homeVodMark": "concat(/div/h1/em/text(),' ㅤ',/div/div/a/text())",
  "homeVodMarkR": "- (\\S+)",
  "cateUrl": "https://v.xuangz.cn/whole/{cateId}_{area}_{class}__{year}___0_{by}_{catePg}.html",
  "cateVodNode": "//div[@class='movie-item-in']",
  "cateVodName": "/div/h1/a/text()",
  "cateVodId": "/div/h1/a/@href",
  "cateVodIdR": "/show(\\S+).html",
  "cateVodImg": "/a/img/@src",
  "cateVodImgR": "",
  "cateVodMark": "concat(/div/h1/em/text(),' ㅤ',//span[@class='qtag hdtag']/text())",
  "cateVodMarkR": "- (\\S+)",
  "dtUrl": "https://v.xuangz.cn/show/{vid}.html",
  "dtNode": "//div[@class='row']",
  "dtName": "/div/h1/text()",
  "dtNameR": "",
  "dtImg": "/div/div/div[1]/img/@src",
  "dtImgR": "",
  "dtCate": "/div/div/div[2]/table/tbody/tr[3]/td[2]/a/text()",
  "dtCateR": "",
  "dtYear": "div/div/div[2]/table/tbody/tr[6]/td[2]/a/text()",
  "dtYearR": "",
  "dtArea": "/div/div/div[2]/table/tbody/tr[4]/td[2]/a/text()",
  "dtAreaR": "",
  "dtMark": "/div/div/div[2]/table/tbody/tr[7]/td[2]/text()",
  "dtMarkR": "",
  "dtActor": "/div/div/div[2]/table/tbody/tr[2]/td[2]/a/text()",
  "dtActorR": "",
  "dtDirector": "/div/div/div[2]/table/tbody/tr[1]/td[2]/a/text()",
  "dtDirectorR": "",
  "dtDesc": "/div/div[2]/div[2]/p/span//span//br/following-sibling::text()",
  "dtDescR": "",
  "dtFromNode": "//ul[@id='tvTabs']/li/a",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//div[@class='row tv-js-list']",
  "dtUrlSubNode": "/div/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/play(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://v.xuangz.cn//play/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://v.xuangz.cn/?c=search&wd={wd}",
  "scVodNode": "//div[@class='movie-item-in']",
  "scVodName": "/a/@title",
  "scVodId": "/div/h1/a/@href",
  "scVodIdR": "/show/(\\S+).html",
  "scVodImg": "/a/img/@src",
  "scVodMark": "/a/span/text()",
  "filter":{
"1": [
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},
{"name":"类型","key":"class","value":[{"n":"全部","v":""},{"n":"警匪片","v":"警匪片"},{"n":"恐怖片","v":"恐怖片"},{"n":"惊悚片","v":"惊悚片"},{"n":"悬疑片","v":"悬疑片"},{"n":"科幻片","v":"科幻片"},{"n":"战争片","v":"战争片"},{"n":"动作片","v":"动作片"},{"n":"喜剧片","v":"喜剧片"},{"n":"爱情片","v":"爱情片"},{"n":"微电影","v":"微电影"},{"n":"纪录片","v":"纪录片"},{"n":"剧情片","v":"剧情片"},{"n":"其他片","v":"其他片"}]},
{"name":"排序","key":"by","value":[{"n":"最新","v":"id"},{"n":"日榜","v":"rhits"},{"n":"周榜","v":"zhits"},{"n":"月榜","v":"yhits"},{"n":"总榜","v":"hits"}]}
],
"2": [
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},
{"name":"类型","key":"class","value":[{"n":"全部","v":""},{"n":"国产剧","v":"国产剧"},{"n":"日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"}]},
{"name":"排序","key":"by","value":[{"n":"最新","v":"id"},{"n":"日榜","v":"rhits"},{"n":"周榜","v":"zhits"},{"n":"月榜","v":"yhits"},{"n":"总榜","v":"hits"}]}
],
"3": [
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},
{"name":"类型","key":"class","value":[{"n":"全部","v":"全部"},{"n":"国产动漫","v":"国产动漫"},{"n":"日韩动漫","v":"日韩动漫"},{"n":"欧美动漫","v":"欧美动漫"},{"n":"动画片","v":"动画片"},{"n":"动漫片","v":"动漫片"}]},
{"name":"排序","key":"by","value":[{"n":"最新","v":"id"},{"n":"日榜","v":"rhits"},{"n":"周榜","v":"zhits"},{"n":"月榜","v":"yhits"},{"n":"总榜","v":"hits"}]}
],
"4": [
{"name":"年份","key":"year","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
{"name":"地区","key":"area","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},
{"name":"排序","key":"by","value":[{"n":"最新","v":"id"},{"n":"日榜","v":"rhits"},{"n":"周榜","v":"zhits"},{"n":"月榜","v":"yhits"},{"n":"总榜","v":"hits"}]}
]
}

}
