# legend #

提供一个快速生成图例的jQuery方法

## 示例 ##
### [Demo](https://unique1319.github.io/legend) ###
## 调用 ##
```
   $('#myLegend').Legend({
       legend: [
           {"background": " url('img/weathers.png') 0 0 no-repeat", "label": "能见度"},
           {"background": " url('img/weathers.png') -30px 0 no-repeat", "label": "大风"},
           {"background": " url('img/weathers.png') -60px 0 no-repeat", "label": "高温"},
           {"background": " url('img/weathers.png') -90px 0 no-repeat", "label": "降水"}
       ]
   })
```
## 默认参数 ##
```
   'imgCell_width': 30,
   'imgCell_height': 30,
   'labelCell_width': 70,
   'labelCell_padding_left': 12,
   'legend': []
```
