## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,721,200|37862180|
|Using dot notation|67,767,856|33883941|
|Using define property (writable)|4,540,581|2270871|
|Using define property initialized (writable)|5,989,911|2994957|
|Using define property (getter)|2,063,922|1032362|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:09:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":37862180,"opsSec":75721200.76006189},{"name":"Using dot notation","samples":33883941,"opsSec":67767856.6548216},{"name":"Using define property (writable)","samples":2270871,"opsSec":4540581.000681612},{"name":"Using define property initialized (writable)","samples":2994957,"opsSec":5989911.02900413},{"name":"Using define property (getter)","samples":1032362,"opsSec":2063922.3024043879}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.123ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|36.708ms
new Array(length)|1,000,000|9.318ms
array.push|10,000,000|253.522ms
new Array(length)|10,000,000|70.586ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.013ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.236ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|30.012ms
new Array(length)|1,000,000|10.508ms
array.push|10,000,000|226.713ms
new Array(length)|10,000,000|70.897ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|231|116|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":116,"opsSec":231.04656647344262},{"name":"Array.from","samples":12,"opsSec":22.31889909619767}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,127|2075|
|new Blob (1024)|533|267|
|text (128)|4,344|2173|
|text (1024)|545|273|
|arrayBuffer (128)|4,358|2184|
|arrayBuffer (1024)|539|272|
|slice (0, 64)|57,641|29544|
|slice (0, 512)|24,764|12383|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2075,"opsSec":4127.857651447572},{"name":"new Blob (1024)","samples":267,"opsSec":533.530898292985},{"name":"text (128)","samples":2173,"opsSec":4344.790992389711},{"name":"text (1024)","samples":273,"opsSec":545.3486453942168},{"name":"arrayBuffer (128)","samples":2184,"opsSec":4358.767033014782},{"name":"arrayBuffer (1024)","samples":272,"opsSec":539.3434724195453},{"name":"slice (0, 64)","samples":29544,"opsSec":57641.60755724086},{"name":"slice (0, 512)","samples":12383,"opsSec":24764.576185456794}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.64 ms|1|
|Gzip|134.76 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:29:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133638489},{"name":"Gzip","samples":1,"totalTime":0.134755649}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,618|3310|
|crypto.verify('RSA-SHA256')|6,707|3354|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:39:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3310,"opsSec":6618.096039950267},{"name":"crypto.verify('RSA-SHA256')","samples":3354,"opsSec":6707.786276513658}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,371,991|686042|
|fromUnixToISOString(new Date())|2,029,911|1015315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":686042,"opsSec":1371991.7280683205},{"name":"fromUnixToISOString(new Date())","samples":1015315,"opsSec":2029911.3058423437}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,588|9803|
|Intl.DateTimeFormat().format(new Date())|19,261|9632|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,604|9803|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,584|9293|
|Reusing Intl.DateTimeFormat()|435,944|217991|
|Date.toLocaleDateString()|991,035|495578|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,579|11291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9803,"opsSec":19588.264276229427},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9632,"opsSec":19261.485836776697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9803,"opsSec":19604.879267471795},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9293,"opsSec":18584.178750482453},{"name":"Reusing Intl.DateTimeFormat()","samples":217991,"opsSec":435944.53143941186},{"name":"Date.toLocaleDateString()","samples":495578,"opsSec":991035.0263364052},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11291,"opsSec":22579.791244820433}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,171|528170|
|Using brackets {}|1,084,325|542167|
|Using '' + |1,057,621|529041|
|Using date.toString()|1,193,600|596801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":528170,"opsSec":1056171.0950061446},{"name":"Using brackets {}","samples":542167,"opsSec":1084325.8220146503},{"name":"Using '' + ","samples":529041,"opsSec":1057621.3614769797},{"name":"Using date.toString()","samples":596801,"opsSec":1193600.429221835}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,712,236|1856370|
|Using delete property (proto: null)|17,224,324|8612618|
|Using delete property (cached proto: null)|3,745,709|1873224|
|Using undefined assignment|84,671,399|42340792|
|Using undefined assignment (proto: null)|18,345,933|9173141|
|Using undefined property (cached proto: null)|82,981,516|41509033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1856370,"opsSec":3712236.063954318},{"name":"Using delete property (proto: null)","samples":8612618,"opsSec":17224324.1442798},{"name":"Using delete property (cached proto: null)","samples":1873224,"opsSec":3745709.158868413},{"name":"Using undefined assignment","samples":42340792,"opsSec":84671399.55471876},{"name":"Using undefined assignment (proto: null)","samples":9173141,"opsSec":18345933.61072073},{"name":"Using undefined property (cached proto: null)","samples":41509033,"opsSec":82981516.12736958}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|301,707|150854|
|NodeError|286,133|143116|
|NodeError Range|266,125|133066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:03:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":150854,"opsSec":301707.98370776884},{"name":"NodeError","samples":143116,"opsSec":286133.3612463776},{"name":"NodeError Range","samples":133066,"opsSec":266125.14621298446}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,138,696|33627826|
|using Array.includes (first item)|76,462,377|38231286|
|Using raw comparison|99,187,516|49606807|
|Using raw comparison (first item)|99,826,949|49913480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33627826,"opsSec":67138696.79301874},{"name":"using Array.includes (first item)","samples":38231286,"opsSec":76462377.4797117},{"name":"Using raw comparison","samples":49606807,"opsSec":99187516.17749345},{"name":"Using raw comparison (first item)","samples":49913480,"opsSec":99826949.01903561}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,419,280|21237287|
|Using Object.getOwnPropertyNames()|43,430,177|21716926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21237287,"opsSec":42419280.80682256},{"name":"Using Object.getOwnPropertyNames()","samples":21716926,"opsSec":43430177.54639851}]}-->
