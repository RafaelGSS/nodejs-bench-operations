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

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.93 ms|1|
|Gzip|134.95 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:35:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133928671},{"name":"Gzip","samples":1,"totalTime":0.134946319}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,711|3356|
|crypto.verify('RSA-SHA256')|6,854|3428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:40:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3356,"opsSec":6711.229403217464},{"name":"crypto.verify('RSA-SHA256')","samples":3428,"opsSec":6854.767416851706}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,426,844|713423|
|fromUnixToISOString(new Date())|2,122,790|1061800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":713423,"opsSec":1426844.5103743311},{"name":"fromUnixToISOString(new Date())","samples":1061800,"opsSec":2122790.779418141}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,302|9664|
|Intl.DateTimeFormat().format(new Date())|18,786|9394|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,428|9747|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,440|9223|
|Reusing Intl.DateTimeFormat()|420,379|210192|
|Date.toLocaleDateString()|993,051|496527|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,317|11159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9664,"opsSec":19302.48643668766},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9394,"opsSec":18786.464244120973},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9747,"opsSec":19428.595769487554},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9223,"opsSec":18440.248117807096},{"name":"Reusing Intl.DateTimeFormat()","samples":210192,"opsSec":420379.78359077056},{"name":"Date.toLocaleDateString()","samples":496527,"opsSec":993051.1261100409},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11159,"opsSec":22317.89827501966}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,066,400|533212|
|Using brackets {}|1,054,316|527162|
|Using '' + |1,023,526|511911|
|Using date.toString()|1,170,965|585484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":533212,"opsSec":1066400.1233012392},{"name":"Using brackets {}","samples":527162,"opsSec":1054316.3287943916},{"name":"Using '' + ","samples":511911,"opsSec":1023526.2459500753},{"name":"Using date.toString()","samples":585484,"opsSec":1170965.2833605427}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,721,168|1861669|
|Using delete property (proto: null)|16,717,603|8358802|
|Using delete property (cached proto: null)|3,767,528|1884126|
|Using undefined assignment|84,178,566|42089290|
|Using undefined assignment (proto: null)|17,721,800|8861356|
|Using undefined property (cached proto: null)|84,437,456|42218768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1861669,"opsSec":3721168.8562503145},{"name":"Using delete property (proto: null)","samples":8358802,"opsSec":16717603.699083135},{"name":"Using delete property (cached proto: null)","samples":1884126,"opsSec":3767528.2050864077},{"name":"Using undefined assignment","samples":42089290,"opsSec":84178566.69978647},{"name":"Using undefined assignment (proto: null)","samples":8861356,"opsSec":17721800.319704354},{"name":"Using undefined property (cached proto: null)","samples":42218768,"opsSec":84437456.62879077}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|315,936|157980|
|NodeError|302,613|151311|
|NodeError Range|268,553|134893|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:03:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":157980,"opsSec":315936.1562982841},{"name":"NodeError","samples":151311,"opsSec":302613.6805446944},{"name":"NodeError Range","samples":134893,"opsSec":268553.41234674974}]}-->
