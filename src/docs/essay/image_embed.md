---
title: 图片隐写
---

利用隐写技术，将对小熊的生日祝福嵌入图片中，图中为其出生之日的月相

```python
from blind_watermark import WaterMark

def embed():
    bwm1.read_img('moon.jpg')
    bwm1.read_wm(content, mode='str')
    bwm1.embed('embedded.jpg')
    return len(bwm1.wm_bit)

def extract():
    extract = bwm1.extract(filename='embedded.jpg', wm_shape=wm_len, mode='str')
    print(extract)

if __name__ == '__main__':
    bwm1 = WaterMark(password_wm=1999, password_img=925)
    content = '月亮照回湖心，野鹤奔向闲云，我步入你、n\t 熊宝生日快乐！！！'
    wm_len = embed()
    extract()
```
