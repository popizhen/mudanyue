{
	"targetVersion":5,
	"version4Link":"",
	"name":"羁绊か云隐",
	"author":"不念春风不念雨",
	"contact":"么事就不要联系啦，随缘维护",
	"message":"还有谁值得信任呢，伤心又失望",
	"searchConfig":[
		{
			"configName":"星空TV",
			"configType":"MacCMS",
			"matchSource":"anySource",
			"realUrl":"https://jx.parwix.com:4433/player/?url={ItemUrlOrId}",
			"searchUrl":"https://xkys.tv/api.php/provide/vod/?ac=videolist&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"策驰",
			"configType":"MacCMS",
			"matchSource":"anySource",
			"realUrl":"https://www.cecidy.cc/r/?url={ItemUrlOrId}",
			"searchUrl":"https://www.cecidy.cc/api.php/provide/vod/?ac=detail&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"萌果CJ",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"http://cache.languang.icu:88/didi.php?url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(.*?)\"",
			"searchUrl":"http://api.appearoo.top/api.php/provide/vod/?ac=videolist&wd={SearchWord}"
		},
		{
			"configName":"椰子资源CJ",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"http://cache.languang.icu:88/didi.php?url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(.*?)\"",
			"searchUrl":"https://zy.gbxy.net.cn/api.php/provide/vod/?ac=videolist&wd={SearchWord}"
		},
		{
			"configName":"人人迷CJ",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"https://kuba.renrenmi.cc:2266/api/?key=2WzAj2s0pgQ1AYQoPT&url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(.*?)\"",
			"searchUrl":"https://kuu.renrenmi.cc/api.php/provide/vod/?ac=detail&wd={SearchWord}"
		},
		{
			"configName":"麒麟CJ",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"http://cache.languang.icu:88/didi.php?url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(.*?)\"",
			"searchUrl":"http://www.qilinzyz.com/api.php/provide/vod/?ac=detail&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"百搜CJ",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"http://cache.languang.icu:88/didi.php?url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(.*?)\"",
			"searchUrl":"https://vip.baisou.ltd/api.php/provide/vod/?ac=detail&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"优全CJ",
			"configType":"MacCMS",
			"matchSource":"anySource",
			"realUrl":"http://pangujx.cc/?url={ItemUrlOrId}",
			"searchUrl":"https://xmyun.xyz/api.php/provide/vod/?ac=videolist&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"厂长",
			"configType":"WebPage",
			"itemNameRegex":"<a href=\"https://www.czspp.com/v_play/.*.html\">(.*?)</a>",
			"itemUrlRegex":"<a href=\"(https://www.czspp.com/v_play/.*.html)\">.*</a>",
			"searchNameRegex":"<a href=\".*\" target=\"_blank\"> <img class=\"thumb lazy\" src=\".*\" alt=\"(.*?)\" data-original=\".*\">",
			"searchPictureRegex":"<a href=\".*\" target=\"_blank\"> <img class=\"thumb lazy\" src=\".*\" alt=\".*\" data-original=\"(.*?)\">",
			"searchStateRegex":"<div class=\"jidi\">\n       <span>(.*?)</span>\n      </div>",
			"searchTypeRegex":"<p class=\"nostag\" style=\"display: none;\">(.*?)</p>",
			"searchUrl":"https://www.czspp.com/xssearch?q={SearchWord}",
			"searchUrlRegex":"<a href=\"(.*)\" target=\"_blank\"> <img class=\"thumb lazy\" src=\".*\" alt=\".*\" data-original=\".*\">"
		},
		{
			"configName":"解析测试",
			"configType":"MacCMS",
			"extensions":"undetermined",
			"matchSource":"anySource",
			"realExtensionsRegex":"\"type\":\\s?\"(.*?)\"",
			"realUrl":"https://json.pangujiexi.com:12345/json.php?url={ItemUrlOrId}",
			"realUrlRegex":"\"url\":\\s?\"(http.*?)\"",
			"searchUrl":"http://zy.yilans.net:8090/api.php/provide/vod/?ac=detail&wd={SearchWord}",
			"usable":true
		},
		{
			"configName":"1080影视",
			"configType":"WebPage",
			"itemNameRegex":"<a href=\"/vodplay/.*/\" title=\"(.*?)\"><span>.*</span></a>",
			"itemUrlRegex":"<a href=\"(/vodplay/.*?/)\" title=\".*\"><span>.*</span></a>",
			"searchNameRegex":"<h3><a href=\"/voddetail/1.*/\" title=\"(.*?)\">.*</a></h3>",
			"searchUrl":"http://www.1080kan.cc/vodsearch/-------------/?wd={SearchWord}&submit=",
			"searchUrlRegex":"<h3><a href=\"(/voddetail/1.*?/)\" title=\".*\">.*</a></h3>",
			"usable":true
		},
		{
			"configName":"极品",
			"configType":"WebPage",
			"extensions":" m3u8",
			"itemNameRegex":"<li class=\".*\"><a class=\"btn btn-default\" href=\"/vodplay/\\d*-1-\\d*\\.html\">(.*)</a></li>",
			"itemUrl":"https://www.jpysvip.net/voddetail/{SearchUrlOrId}.html",
			"itemUrlRegex":"<li class=\".*\"><a class=\"btn btn-default\" href=\"(/vodplay/\\d*-1-\\d*\\.html)\">.*</a></li>",
			"realUrl":"{ItemUrlOrId}",
			"realUrlRegex":"\"url\":\"(http.*?)\",\"url",
			"searchNameRegex":"\"name\":\"(.*?)\"",
			"searchPictureRegex":"\"pic\":\"(.*?)\"",
			"searchUrl":"https://www.jpysvip.net/index.php/ajax/suggest?mid=1&wd={SearchWord}",
			"searchUrlRegex":"\"id\":(.*?),"
		}
	],
	"searchManager":{},
	"analysisApi":{},
	"sniffUrlSkip":{},
	"televisionList":[],
	"fastVideoList":[]
}
