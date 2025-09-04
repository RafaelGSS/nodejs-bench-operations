## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,190,177|38608869|
|Using dot notation|68,394,303|34255120|
|Using define property (writable)|4,393,420|2197651|
|Using define property initialized (writable)|5,969,949|2984977|
|Using define property (getter)|2,179,309|1089661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":38608869,"opsSec":77190177.5558644},{"name":"Using dot notation","samples":34255120,"opsSec":68394303.03866728},{"name":"Using define property (writable)","samples":2197651,"opsSec":4393420.877769607},{"name":"Using define property initialized (writable)","samples":2984977,"opsSec":5969949.474778297},{"name":"Using define property (getter)","samples":1089661,"opsSec":2179309.0200354764}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.12ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.295ms
new Array(length)|10,000|0.297ms
array.push|1,000,000|34.396ms
new Array(length)|1,000,000|9.181ms
array.push|10,000,000|250.446ms
new Array(length)|10,000,000|71.799ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.014ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.025ms
array.push|10,000|20.565ms
new Array(length)|10,000|0.189ms
array.push|1,000,000|40.02ms
new Array(length)|1,000,000|5.515ms
array.push|10,000,000|235.712ms
new Array(length)|10,000,000|119.554ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|115|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:22:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":115,"opsSec":227.8640823006705},{"name":"Array.from","samples":12,"opsSec":22.817305883761954}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,071|2039|
|new Blob (1024)|516|259|
|text (128)|4,194|2109|
|text (1024)|531|266|
|arrayBuffer (128)|4,217|2109|
|arrayBuffer (1024)|529|267|
|slice (0, 64)|58,609|29846|
|slice (0, 512)|24,784|12393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2039,"opsSec":4071.8254513110282},{"name":"new Blob (1024)","samples":259,"opsSec":516.5189521512837},{"name":"text (128)","samples":2109,"opsSec":4194.51539486792},{"name":"text (1024)","samples":266,"opsSec":531.0316998055602},{"name":"arrayBuffer (128)","samples":2109,"opsSec":4217.945858446961},{"name":"arrayBuffer (1024)","samples":267,"opsSec":529.3692062907168},{"name":"slice (0, 64)","samples":29846,"opsSec":58609.160247280386},{"name":"slice (0, 512)","samples":12393,"opsSec":24784.70187645452}]}-->
