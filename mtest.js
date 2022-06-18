{
    "author":"",
	"ua": "",
    "homeUrl": "https://www.huya.com",

    "cateManual": {
        "王者荣耀": "/g/2336",
        "绝地求生": "/g/2793",
        "英雄联盟": "/g/1",
        "星秀": "/g/1663",
        "吃喝玩乐": "/g/100044",
        "主机游戏": "/g/100032",
        "和平精英": "/g/3203",
        "穿越火线": "/g/4",
        "颜值": "/g/2168",
        "二次元": "/g/2633",
        "地下城与勇士": "/g/2",
        "暴雪专区": "/g/100043",       
        "一起看": "/g/2135",   
        "我的世界": "/g/1732",   
        "体育": "/g/2356",   
        "美食": "/g/2752",   
        "户外": "/g/2165"
    },
	"homeVodNode": "//ul[@class='index-list clearfix j_live-list']/li",
	"homeVodName": "/a[contains(@class,'title')]/text()",
	"homeVodId": "/a[contains(@class,'video-info')]/@href",
	"homeVodIdR": "https://www.huya.com/(\\w+)",
	"homeVodImg": "/a[contains(@class,'video-info')]/img/@data-original",
	"homeVodImgR": "\\S*(//\\S+)",
	"homeVodMark": "concat(/a[contains(@class,'video-info')]/em/text(),'-',/a[contains(@class,'video-info')]/p/em/text(),'-',/span/span[2]/a/text())",
	"cateUrl": "https://www.huya.com/g/{cateId}?page={catePg}",
	"cateVodNode": "//ul[@class='live-list clearfix']/li",
	"cateVodName": "/a[contains(@class,'title')]/text()",
	"cateVodId": "/a[contains(@class,'video-info')]/@href",
	"cateVodIdR": "https://www.huya.com/(\\w+)",
	"cateVodImg": "/a[contains(@class,'video-info')]/img/@data-original",
	"cateVodImgR": "\\S+(http\\S+)",
	"cateVodMark": "concat(/a[contains(@class,'video-info')]/em/text(),'-',/a[contains(@class,'video-info')]/p/em/text(),'-',/span/span[2]/i[2]/text())",
	"dtUrl": "https://www.huya.com/{vid}",
	"dtNode": "//body",
	"dtName": "//div[@class='host-info']/h1/text()",
	"dtNameR": "",
	"dtImg": "//div[@class='host-pic']/img/@src",
	"dtImgR": "\\S+(http\\S+)",
    "dtCate": "//span[@class='host-channel']/a[2]/text()",
    "dtArea": "//span[@class='host-channel']/a[1]/text()",
	"dtFromNode": "//h3[@class='host-name']",
	"dtFromName": "/text()",
	"dtFromNameR": "",
	"dtUrlNode": "//span[@class='host-rid']",
	"dtUrlSubNode": "/em",
	"dtUrlId": "text()",
	"dtUrlIdR": "(\\w+)",
	"dtUrlName": "\"直播\"",
	"dtUrlNameR": "",
    "playUrl": "http://yj1211.work:8089/huya/{playUrl}.m3u8",
	"playUa": "",
	"searchUrl": "https://www.huya.com/search?hsk={wd}",
	"scVodNode": "//ul[@class='js-live-list']/li",
	"scVodName": "/a[@class='title new-clickstat']/@title",
	"scVodId": "/a[@class='title new-clickstat']/@href",
	"scVodIdR": "https://www.huya.com/(\\w+)",
	"scVodImg": "/a[@class='video-info new-clickstat']/img/@src",
	"scVodMark": ""
}
