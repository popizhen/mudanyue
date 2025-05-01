# WWGZ影视TVBox爬虫实现

# -*- coding: utf-8 -*-
import re
import sys
from base64 import b64decode
from Crypto.Cipher import AES
from Crypto.Hash import MD5
from Crypto.Util.Padding import unpad
sys.path.append("..")
import json
import time
from pyquery import PyQuery as pq
from base.spider import Spider

class Spider(Spider):
    def init(self, extend=""):
        self.host = 'https://www.wwgz.cn'
        self.timeout = 20
        self.retry = 2
        self.did = self.getdid()
        print("WWGZ爬虫初始化完成")

    def getName(self):
        return "WWGZ影视"

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    def action(self, action):
        pass

    def destroy(self):
        pass

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Referer': 'https://www.wwgz.cn/',
        'X-Requested-With': 'XMLHttpRequest'
    }

    def homeContent(self, filter):
        try:
            print("正在获取首页内容...")
            html = self.fetch(self.host, headers=self.headers).text
            doc = pq(html)
            
            result = {}
            classes = []
            
            # 获取分类
            for item in doc('.nav-item a').items():
                href = item.attr('href')
                if href and '/type/' in href:
                    classes.append({
                        'type_name': item.text(),
                        'type_id': href.split('/')[-1]
                    })
            
            # 获取推荐视频
            videos = []
            for item in doc('.video-item').items():
                vid = item.attr('data-id')
                if vid:
                    videos.append({
                        'vod_id': vid,
                        'vod_name': item('.video-title').text(),
                        'vod_pic': item('img').attr('data-src') or item('img').attr('src'),
                        'vod_remarks': item('.video-tag').text()
                    })
            
            result['class'] = classes
            result['list'] = videos
            print("首页内容获取成功")
            return result
            
        except Exception as e:
            print(f"首页内容获取失败: {str(e)}")
            return {"class": [], "list": []}

    def categoryContent(self, tid, pg, filter, extend):
        try:
            print(f"正在获取分类内容: tid={tid}, pg={pg}")
            params = {
                'type': tid,
                'page': pg,
                'order': extend.get('sort', 'time')
            }
            
            # 处理筛选条件
            if extend.get('area'):
                params['area'] = extend['area']
            if extend.get('year'):
                params['year'] = extend['year']
            
            rsp = self.post(f"{self.host}/api/getList", headers=self.headers, data=params)
            data = rsp.json()
            
            result = {
                'list': data.get('data', []),
                'page': pg,
                'pagecount': data.get('pagecount', 999),
                'limit': 20,
                'total': data.get('total', 9999)
            }
            print(f"分类内容获取成功, 共 {len(result['list'])} 条数据")
            return result
            
        except Exception as e:
            print(f"分类内容获取失败: {str(e)}")
            return {"list": [], "page": 1, "pagecount": 1, "limit": 20, "total": 0}

    def detailContent(self, ids):
        try:
            vid = ids[0]
            print(f"正在获取详情内容: vid={vid}")
            
            rsp = self.fetch(f"{self.host}/detail/{vid}/", headers=self.headers)
            doc = pq(rsp.text)
            
            vod = {
                'vod_id': vid,
                'vod_name': doc('.video-title').text(),
                'vod_pic': doc('.video-cover img').attr('src'),
                'vod_year': doc('.video-info-item:contains("年份")').text().replace('年份：', ''),
                'vod_area': doc('.video-info-item:contains("地区")').text().replace('地区：', ''),
                'vod_remarks': doc('.video-tag').text(),
                'vod_actor': doc('.video-info-item:contains("主演")').text().replace('主演：', ''),
                'vod_director': doc('.video-info-item:contains("导演")').text().replace('导演：', ''),
                'vod_content': doc('.video-desc').text()
            }
            
            # 处理播放源
            play_from = []
            play_url = []
            
            for tab in doc('.play-tab-item').items():
                play_from.append(tab.text())
            
            for source in doc('.play-list').items():
                episodes = []
                for ep in source('a').items():
                    episodes.append(f"{ep.text()}${ep.attr('href')}")
                play_url.append('#'.join(episodes))
            
            vod["vod_play_from"] = "$$$".join(play_from)
            vod["vod_play_url"] = "$$$".join(play_url)
            
            print(f"详情内容获取成功: {vod['vod_name']}")
            return {"list": [vod]}
            
        except Exception as e:
            print(f"详情内容获取失败: {str(e)}")
            return {"list": []}

    def searchContent(self, key, quick, pg="1"):
        try:
            print(f"正在搜索: key={key}, pg={pg}")
            params = {
                'wd': key,
                'page': pg
            }
            
            rsp = self.post(f"{self.host}/api/search", headers=self.headers, data=params)
            data = rsp.json()
            
            result = {
                'list': data.get('data', []),
                'page': pg,
                'pagecount': data.get('pagecount', 1),
                'limit': 20,
                'total': data.get('total', 0)
            }
            print(f"搜索成功, 共 {len(result['list'])} 条结果")
            return result
            
        except Exception as e:
            print(f"搜索失败: {str(e)}")
            return {"list": [], "page": 1, "pagecount": 1, "limit": 20, "total": 0}

    def playerContent(self, flag, id, vipFlags):
        try:
            print(f"正在解析播放地址: flag={flag}, id={id}")
            
            # 如果是直接播放的URL
            if id.startswith('http'):
                return {
                    "parse": 0,
                    "url": id,
                    "header": self.headers
                }
            
            # 需要解析的URL
            rsp = self.fetch(f"{self.host}{id}", headers=self.headers)
            doc = pq(rsp.text)
            
            # 尝试从script中提取播放地址
            script = doc('script:contains("player")').text()
            url = re.search(r'url:\s*["\'](.*?)["\']', script).group(1)
            
            # 如果是加密地址
            if 'encrypt=' in url:
                enc_data = re.search(r'encrypt=([^&]+)', url).group(1)
                url = self.aes_decrypt(enc_data)
            
            result = {
                "parse": 1 if url.endswith('.m3u8') else 0,
                "url": url,
                "header": {
                    "User-Agent": self.headers['User-Agent'],
                    "Referer": f"{self.host}/"
                }
            }
            
            print("播放地址解析成功")
            return result
            
        except Exception as e:
            print(f"播放地址解析失败: {str(e)}")
            return {"parse": 0, "url": ""}

    def localProxy(self, param):
        # 本地代理处理
        return None

    # 辅助方法
    def getdid(self):
        did = self.getCache('did')
        if not did:
            t = str(int(time.time()))
            did = self.md5(t)
            self.setCache('did', did)
        return did

    def md5(self, text):
        h = MD5.new()
        h.update(text.encode('utf-8'))
        return h.hexdigest()

    def aes_decrypt(self, ciphertext):
        try:
            key = b"wwgz2024abcd1234"  # 根据实际修改
            iv = b"wwgz2024abcd1234"   # 根据实际修改
            cipher = AES.new(key, AES.MODE_CBC, iv)
            pt = unpad(cipher.decrypt(b64decode(ciphertext)), AES.block_size)
            return pt.decode('utf-8')
        except Exception as e:
            print(f"AES解密失败: {str(e)}")
            return ""

    def fetch(self, url, headers=None, params=None, data=None, method="GET"):
        for i in range(self.retry + 1):
            try:
                req_headers = self.headers.copy()
                if headers:
                    req_headers.update(headers)
                
                print(f"请求URL: {url}")
                if method == "GET":
                    return super().fetch(url, headers=req_headers, params=params, timeout=self.timeout)
                else:
                    return super().fetch(url, headers=req_headers, data=data, timeout=self.timeout)
            except Exception as e:
                if i == self.retry:
                    print(f"请求失败: {str(e)}")
                    return None
                time.sleep(1)