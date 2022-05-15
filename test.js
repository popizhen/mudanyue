{
    "author": "春风",
    "ua": "",
    "homeUrl": "https://www.mianfeikk.com/",
    "dcVipFlag": "true",
    "dcPlayUrl": "true",
    "cateManual": {
        "电影": "dianying",
        "连续剧": "dianshiju",
        "动漫": "dongman",
        "综艺": "zongyi"
    },
    "homeVodNode": "//a[@class='thumbnail']",
    "homeVodName": "/img/@alt",
    "homeVodId": "/@href",
    "homeVodIdR": "/(\\S+).html",
    "homeVodImg": "/img/@src",
    "homeVodImgR": "",
    "homeVodMark": "//span/text()",
    "cateUrl": "https://www.mianfeikk.com/{cateId}/---{catePg}-.html",
    "cateVodNode": "//a[@class='thumbnail']",
    "cateVodName": "//img/@alt",
    "cateVodId": "/@href",
    "cateVodIdR": "/(\\S+).html",
    "cateVodImg": "/img/@src",
    "cateVodImgR": "",
    "cateVodMark": "/span/text()",
    "dtUrl": "https://www.mianfeikk.com/{vid}.html",
    "dtNode": "//body",
    "dtName": "//h1[@class='product-title']/text()",
    "dtNameR": "",
    "dtImg": "//header[@class='product-header']/img/@src",
    "dtImgR": "",
    "dtCate": "//div[contains(text(), '类型')]/child::span/a/text()",
    "dtCateR": "",
    "dtYear": "//h1[@class='product-title']/span/text()",
    "dtYearR": "(\\S+)",
    "dtArea": "//div[contains(text(), '地区')]/child::span/a/text()",
    "dtAreaR": "",
    "dtDirector": "//div[contains(text(), '导演')]/child::span/a/text()",
    "dtDirectorR": "",
    "dtActor": "//div[contains(text(), '主演')]/child::span/a/text()",
    "dtActorR": "",
    "dtDesc": "//div[contains(text(), '剧情')]/child::span/text()",
    "dtDescR": "",
    "dtFromNode": "//dl/dt",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//div[@class='playlist clearfix']/ul",
//    "dtUrlNode": "",
//    "dtUrlSubNode": "/li/a",
    "dtUrlSubNode": "//div[@class='playlist clearfix']/ul/li/a",
//    "dtUrlId": "/@onclick",
/    "dtUrlId": "//meta[13]/@content",
//    "dtUrlIdR": "\\S+\\('(.*)'\\);",
    "dtUrlIdR": "https://www.mianfeikk.com/(\\S+).html",
//    "dtUrlName": "/text()",
    "dtUrlName": "/text()",
//    "dtUrlNameR": "",
//    "playUrl": "https://x.yizhimianfei.cn/aaaaa/{playUrl}",
    "playUrl": "https://www.mianfeikk.com/dianying/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.mianfeikk.com/so/{wd}.html",
    "scVodNode": "//a[@class='thumbnail']",
    "scVodName": "/img/@alt",
    "scVodId": "/@href",
    "scVodIdR": "/(\\S+).html",
    "scVodImg": "/@data-original",
    "scVodMark": "//span/text()"
}
