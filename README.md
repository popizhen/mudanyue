# mudanyue
rules 订阅
{

"targetVersion":5,

"name":"小二订阅",

"author":"小二",

"contact":"2577454430@qq.com",

"message":"懂",

"version5Link":"",

"searchConfig":[

{

	"configName":"蛋蛋",

	"configType":"WebPage",

	"extensions":"unknown",

	"itemNameRegex":"<li><a href=\".*\\d*/sid/\\d*/nid/\\d*\\.html\">(.*)</a></li>",

	"itemRangeRegex":"<ul class=\"content_playlist.*?\">([\\w\\W]+?)</ul>",

	"itemUrlRegex":"<li><a href=\"(.*\\d*/sid/\\d*/nid/\\d*\\.html)\">.*</a></li>",

	"searchNameRegex":"<h4 class=\"vodlist_title\"><a href=\".*\" title=\"(.*)\"><span class=\"info_right\">.*</span>.*</a></h4>",

	"searchPictureRegex":"<a class=\"vodlist_thumb lazyload\" href=\".*\" title=\".*\" data-original=\"(.*)\"><span class=\"play hidden_xs\"></span><span class=\"pic_text text_right\">.*</span></a>",

	"searchStateRegex":"<a class=\"vodlist_thumb lazyload\" href=\".*\" title=\".*\" data-original=\".*\"><span class=\"play hidden_xs\"></span><span class=\"pic_text text_right\">(.*)</span></a>",

	"searchTypeRegex":"<h4 class=\"vodlist_title\"><a href=\".*\" title=\".*\"><span class=\"info_right\">(.*)</span>.*</a></h4>",

	"searchUrl":"http://www.wsba.com.cn/index.php/vod/search.html?wd={SearchWord}&submit=",

	"searchUrlRegex":"<h4 class=\"vodlist_title\"><a href=\"(.*)\" title=\".*\"><span class=\"info_right\">.*</span>.*</a></h4>",

	"sniffExcludeRegex":"http://collect-v6.51.la/v6/collect",

	"usable":true

}

],

}
