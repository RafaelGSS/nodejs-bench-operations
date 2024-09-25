## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.1ms
new Array(length)|100|0.009ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.255ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|29.736ms
new Array(length)|1,000,000|6.838ms
array.push|100,000,000|1,897.851ms
new Array(length)|100,000,000|4,102.613ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|17.143ms
new Array(length)|10,000|5.242ms
array.push|1,000,000|163.908ms
new Array(length)|1,000,000|7.565ms
array.push|100,000,000|2,025.821ms
new Array(length)|100,000,000|4,868.68ms

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,774|2388|
|new Blob (1024)|553|289|
|text (128)|4,194|2098|
|text (1024)|527|264|
|arrayBuffer (128)|4,187|2094|
|arrayBuffer (1024)|525|263|
|slice (0, 64)|149,110|87710|
|slice (0, 512)|39,641|19821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4774.648755303772,"samples":2388},{"name":"new Blob (1024)","opsSec":553.6435631552614,"samples":289},{"name":"text (128)","opsSec":4194.627937201869,"samples":2098},{"name":"text (1024)","opsSec":527.371609304196,"samples":264},{"name":"arrayBuffer (128)","opsSec":4187.2899193756175,"samples":2094},{"name":"arrayBuffer (1024)","opsSec":525.0730758973702,"samples":263},{"name":"slice (0, 64)","opsSec":149110.32249118472,"samples":87710},{"name":"slice (0, 512)","opsSec":39641.40989797482,"samples":19821}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,605|160803|
|[True conditional] Using constructor name|316,105|158053|
|[True conditional] Check if property is valid then instanceof |316,207|158104|
|[False conditional] Using instanceof only|14,881,972|7440987|
|[False conditional] Using constructor name|14,955,756|7477879|
|[False conditional] Check if property is valid then instanceof |14,815,601|7407801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:26:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321605.7440017025,"samples":160803},{"name":"[True conditional] Using constructor name","opsSec":316105.1642178422,"samples":158053},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316207.95067146246,"samples":158104},{"name":"[False conditional] Using instanceof only","opsSec":14881972.482033422,"samples":7440987},{"name":"[False conditional] Using constructor name","opsSec":14955756.653887317,"samples":7477879},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14815601.377640612,"samples":7407801}]}-->
