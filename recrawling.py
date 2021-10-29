import requests
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

#获取每个视频bv号
def getInfo(j, lst, html):
    try:
        if html == '': return
        soup = BeautifulSoup(html, 'html.parser')
        atitles = soup.find_all(name='a', attrs={'class': 'title'})
        for i in range(20):
            atitle = atitles[i]
            ref = atitle.attrs['href']
            realref = ref.split('/')[-1][:-12]
            print(f'{j}-{i}-succeed')
            lst.append(realref)
    except:
        print(f'{j}-{i}-failed')

#取综合排序前1000的二创视频
def main():
    lst = []
    for i in range(1, 51):
        url = f'https://search.bilibili.com/video?keyword=%E5%98%89%E7%84%B6&order=totalrank&page={i}'
        text = getHTMLText(url)
        getInfo(i, lst, text)
        time.sleep(2)
    print(lst)


main()
