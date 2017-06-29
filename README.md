# 163mc_spider#
# 利用Python2.7爬取网易云音乐的用户评论数据 #
算法实现参考于知乎 https://www.zhihu.com/question/36081767/answer/140287795 

## 项目说明
以id是28875120的歌曲《小岁月太着急》为示例，通过Chrome的DevTools工具获取已加密评论数据，然后基于AES对称加密算法对已加密数据进行解密实现，最后使用Python成功实现了对用户评论数据的抓取与保存。具体介绍及使用方法可参照本人CSDN博客的说明：http://blog.csdn.net/weixin_37325825/article/details/73556908

## 项目依赖
Crypto.Cipher,base64,requests,json,codecs,time

## 项目运行 
```bash
python 163mc_spider.py
```

