## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.09ms
new Array(length)|100|0.01ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.138ms
array.push|1,000,000|28.774ms
new Array(length)|1,000,000|6.867ms
array.push|100,000,000|1,921.474ms
new Array(length)|100,000,000|4,139.22ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|176.347ms
new Array(length)|10,000|0.049ms
array.push|1,000,000|19.261ms
new Array(length)|1,000,000|7.215ms
array.push|100,000,000|2,075.939ms
new Array(length)|100,000,000|4,761.87ms

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,912|2041|
|new Blob (1024)|569|290|
|text (128)|4,141|2072|
|text (1024)|517|259|
|arrayBuffer (128)|4,152|2077|
|arrayBuffer (1024)|521|261|
|slice (0, 64)|235,542|117772|
|slice (0, 512)|39,017|19510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3912.7308198701585,"samples":2041},{"name":"new Blob (1024)","opsSec":569.5762108270412,"samples":290},{"name":"text (128)","opsSec":4141.745382916821,"samples":2072},{"name":"text (1024)","opsSec":517.8526605610128,"samples":259},{"name":"arrayBuffer (128)","opsSec":4152.066349484893,"samples":2077},{"name":"arrayBuffer (1024)","opsSec":521.4066965340799,"samples":261},{"name":"slice (0, 64)","opsSec":235542.96737964044,"samples":117772},{"name":"slice (0, 512)","opsSec":39017.93774593493,"samples":19510}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|288,754|144378|
|[True conditional] Using constructor name|306,969|153485|
|[True conditional] Check if property is valid then instanceof |320,325|160164|
|[False conditional] Using instanceof only|14,854,366|7427184|
|[False conditional] Using constructor name|15,214,345|7607173|
|[False conditional] Check if property is valid then instanceof |13,692,590|6846296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":288754.87039093126,"samples":144378},{"name":"[True conditional] Using constructor name","opsSec":306969.79862806445,"samples":153485},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320325.835238135,"samples":160164},{"name":"[False conditional] Using instanceof only","opsSec":14854366.276986094,"samples":7427184},{"name":"[False conditional] Using constructor name","opsSec":15214345.574190352,"samples":7607173},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13692590.904629616,"samples":6846296}]}-->
