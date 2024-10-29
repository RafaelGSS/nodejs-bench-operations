## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,188,193|54100299|
|Using dot notation|66,411,065|33217082|
|Using define property (writable)|4,255,099|2127550|
|Using define property initialized (writable)|5,674,180|2837633|
|Using define property (getter)|2,128,752|1067070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108188193.57447752,"samples":54100299},{"name":"Using dot notation","opsSec":66411065.30173314,"samples":33217082},{"name":"Using define property (writable)","opsSec":4255099.080898598,"samples":2127550},{"name":"Using define property initialized (writable)","opsSec":5674180.109455734,"samples":2837633},{"name":"Using define property (getter)","opsSec":2128752.5870128293,"samples":1067070}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.084ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.285ms
new Array(length)|10,000|0.317ms
array.push|1,000,000|32.133ms
new Array(length)|1,000,000|7.056ms
array.push|100,000,000|1,768.426ms
new Array(length)|100,000,000|4,427.88ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|25.401ms
new Array(length)|1,000,000|4.618ms
array.push|100,000,000|2,475.612ms
new Array(length)|100,000,000|4,115.02ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|258|130|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:57:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":258.92845359478474,"samples":130},{"name":"Array.from","opsSec":22.32475793367294,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|2207|
|new Blob (1024)|576|289|
|text (128)|4,489|2245|
|text (1024)|564|284|
|arrayBuffer (128)|4,541|2275|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|63,916|36623|
|slice (0, 512)|24,690|12346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.217033513217,"samples":2207},{"name":"new Blob (1024)","opsSec":576.642355544675,"samples":289},{"name":"text (128)","opsSec":4489.486232174562,"samples":2245},{"name":"text (1024)","opsSec":564.3592081339233,"samples":284},{"name":"arrayBuffer (128)","opsSec":4541.335903123943,"samples":2275},{"name":"arrayBuffer (1024)","opsSec":567.0394906726706,"samples":284},{"name":"slice (0, 64)","opsSec":63916.070685914005,"samples":36623},{"name":"slice (0, 512)","opsSec":24690.84970269405,"samples":12346}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|390,674|195503|
|[True conditional] Using constructor name|317,239|158620|
|[True conditional] Check if property is valid then instanceof |316,449|158225|
|[False conditional] Using instanceof only|97,094,140|48547929|
|[False conditional] Using constructor name|97,085,882|48542946|
|[False conditional] Check if property is valid then instanceof |97,105,488|48552806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":390674.87803767086,"samples":195503},{"name":"[True conditional] Using constructor name","opsSec":317239.634539941,"samples":158620},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316449.57279307675,"samples":158225},{"name":"[False conditional] Using instanceof only","opsSec":97094140.2104714,"samples":48547929},{"name":"[False conditional] Using constructor name","opsSec":97085882.29141177,"samples":48542946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":97105488.28760792,"samples":48552806}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,643|3322|
|crypto.verify('RSA-SHA256')|6,710|3356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:15:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6643.616025568185,"samples":3322},{"name":"crypto.verify('RSA-SHA256')","opsSec":6710.885831890646,"samples":3356}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,202|698353|
|fromUnixToISOString(new Date())|2,099,075|1049858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396202.2613937072,"samples":698353},{"name":"fromUnixToISOString(new Date())","opsSec":2099075.173340331,"samples":1049858}]}-->
