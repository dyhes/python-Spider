import requests
import csv
import time
from bs4 import BeautifulSoup
import bs4


def getHTMLText(url):
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()
        return r.text
    except:
        return ''


def getInfo(order, j, lst, updic, zonedic, viewdic, timedic, html, fpath):
    try:
        if html == '': return
        soup = BeautifulSoup(html, 'html.parser')
        # 读取标题
        atitles = soup.find_all(name='a', attrs={'class': 'title'})
        azones = soup.find_all(name='span', attrs={'class': 'type'})
        aviews = soup.find_all(name='span', attrs={'title': '观看'})
        atimes = soup.find_all(name='span', attrs={'title': '上传时间'})
        aups = soup.find_all(name='span', attrs={'title': 'up主'})
        # 遍历每次读取到的标题
        for i in range(20):
            atitle = atitles[i]
            realtitle = atitle.attrs['title']
            # 如果标题已存在则跳过
            if realtitle not in lst:
                lst.append(realtitle)
                infodic = {}
                infodic['title'] = realtitle
                # 获取链接
                ref = atitle.attrs['href']
                infodic['href'] = ref
                # 读取分区信息
                azone = azones[i]
                realzone = azone.text.strip()
                infodic['zone'] = realzone
                if realzone in zonedic:
                    zonedic[realzone] += 1
                else:
                    zonedic[realzone] = 1
                # 读取播放量
                aview = aviews[i]
                realview = aview.text.strip()
                infodic['view'] = realview
                viewnum = 0
                if realview[-1] == '万':
                    viewnum = float(realview[:-1])
                    viewnum = int(viewnum)
                if viewnum in viewdic:
                    viewdic[viewnum] += 1
                else:
                    viewdic[viewnum] = 1
                # 读取上传时间
                atime = atimes[i]
                realtime = atime.text.strip()
                if realtime in timedic:
                    timedic[realtime] += 1
                else:
                    timedic[realtime] = 1
                infodic['time'] = realtime
                # 读取up主
                aup = aups[i]
                realup = aup.text.strip()
                if realup in updic:
                    updic[realup] += 1
                else:
                    updic[realup] = 1
                infodic['up'] = realup
                with open(fpath, 'a', encoding='utf-8') as f:
                    f.write(str(infodic) + '\n')
                print(f'{order}-{j}-{i}-succeed')
            else:
                print(f'{order}-{j}-{i}-repeated')
    except:
        print(f'{order}-{j}-failed')


def dataStorage(dict, s):
    keyslist = list(dict.keys())
    valueslist = list(dict.values())
    with open(f'D://dyhs/{s}.csv', 'a', encoding='utf_8_sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerows([keyslist, valueslist])


def main():
    orders = ['totalrank', 'click', 'pubdate', 'dm', 'stow']
    path = 'D://dyhs/videoinfo.txt'
    lst = []
    updict, timedict, zonedict, viewdict = {}  # 储存up主,上传时间,分区,播放量
    # 对五种排序方式和五十页分页的搜索结果进行遍历
    for order in orders:
        for i in range(1, 51):
            url = f'https://search.bilibili.com/video?keyword=%E5%98%89%E7%84%B6&order={order}&page={i}'  # 使用f字符串
            text = getHTMLText(url)  # 获取页面
            getInfo(order, i, lst, updict, zonedict, viewdict, timedict, text, path)  # 对取得页面进行处理
            time.sleep(2)
    # 将数据存储起来等待后期处理
    dataStorage(updict, 'ups')
    dataStorage(timedict, 'times')
    dataStorage(zonedict, 'zones')
    dataStorage(viewdict, 'views')


main()
