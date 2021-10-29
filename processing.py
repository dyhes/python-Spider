import matplotlib.pyplot as plt
import csv


# 单独写一个读取数据的函数，提高代码可重用性
def dataread(csvfile, x, y):
    with open(f'D://dyhs/{csvfile}', 'r', encoding='UTF-8-sig') as f:
        reader = csv.reader(f)
        rows = [row for row in reader]
        x.extend(rows[0])
        y.extend(rows[1])


# 对数据进行排序
def mysort(keys, values, pos):
    rawlist = [[keys[i], values[i]] for i in range(len(keys))]
    sortedlist = sorted(rawlist, key=lambda x: x[pos])
    keys.clear()
    values.clear()
    keys.extend([sortedlist[i][0] for i in range(len(sortedlist))])
    values.extend([sortedlist[i][1] for i in range(len(sortedlist))])


# 将数据可视化
def myPlot(way, title, saveas, x, y):
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签
    if way == 'pie':
        exp = [0.05 for i in range(len(x))]
        plt.pie(y, explode=exp, labels=x, autopct='%1.1f%%')
        plt.axis('equal')  # 该行代码使饼图长宽相等
    elif way == 'plot':
        plt.plot(x, y)
    elif way == 'bar':
        ax = range(len(y))
        plt.barh(ax, y, tick_label=x, facecolor='#9999ff')
        for i in range(len(y)):
            plt.text(y[i], ax[i] - 0.1, y[i])
        plt.xlabel('二创数')
    elif way == 'hist':
        plt.hist(x, bins=14, range=(0, 700), facecolor='#9999ff')
        plt.ylabel('二创数')
        plt.xlabel('播放量（万）')
    plt.title(title)
    plt.savefig(f'D://dyhs/{saveas}.jpg')
    plt.show()


# 可视化up主数据
def upVisualize():
    rawkeys, keys, rawvalues, values = [], [], [], []
    dataread('ups.csv', rawkeys, rawvalues)
    for i in range(len(rawkeys)):
        realvalue = eval(rawvalues[i])
        # 仅展示二创数大于十的up主
        if realvalue >= 20:
            keys.append(rawkeys[i])
            values.append(realvalue)
    # 将up主根据所创作二创数排名
    mysort(keys, values, 1)
    myPlot('bar', 'up主随创作数排名', 'up', keys, values)


# 可视化播放量数据
def viewVisualize():
    rawkeys, keys, rawvalues, values = [], [], [], []
    dataread('views.csv', rawkeys, rawvalues)
    realvalues = [eval(rawkeys[i]) * eval(rawvalues[i]) for i in range(len(rawkeys))]
    myPlot('hist', '播放量区间分布', 'view', realvalues, rawvalues)


# 可视化上传时间数据
def timeVisualize():
    rawkeys, keys, rawvalues, values = [], [], [], []
    dataread('times.csv', rawkeys, rawvalues)
    monthdict = {}
    daydict = {}
    for i in range(len(rawkeys)):
        key = rawkeys[i]
        value = eval(rawvalues[i])
        # 统计2021年二创
        if rawkeys[i][:4] == '2021':
            # 将九月分单独进行处理
            if key[5:7] == '09':
                if key[5:] in daydict:
                    daydict[key[5:]] += value
                else:
                    daydict[key[5:]] = value
            else:
                if key[:7] in monthdict:
                    monthdict[key[:7]] += value
                else:
                    monthdict[key[:7]] = value
    monthkeys = list(monthdict.keys())
    monthvalues = list(monthdict.values())
    mysort(monthkeys, monthvalues, 0)
    myPlot('plot', '每月二创数', 'month', monthkeys, monthvalues)
    daykeys = list(daydict.keys())
    dayvalues = list(daydict.values())
    mysort(daykeys, dayvalues, 0)
    myPlot('plot', '九月', 'day', daykeys, dayvalues)


# 可视化视频分区数据
def zoneVisualize():
    rawkeys, keys, rawvalues, values = [], [], [], []
    cntother = 0
    dataread('zones.csv', rawkeys, rawvalues)
    for i in range(len(rawkeys)):
        realvalue = eval(rawvalues[i])
        # 将二创数目小于100的分区并入其他
        if realvalue <= 100:
            cntother += realvalue
        else:
            keys.append(rawkeys[i])
            values.append(realvalue)
    keys.append('其他')
    values.append(cntother)
    myPlot('pie', '嘉然二创分布', 'zone', keys, values)


zoneVisualize()
upVisualize()
viewVisualize()
timeVisualize()
