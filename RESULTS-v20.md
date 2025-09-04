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
