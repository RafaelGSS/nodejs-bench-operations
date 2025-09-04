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

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,686,404|37344376|
|using Array.includes (first item)|87,356,267|43739709|
|Using raw comparison|98,116,441|49073432|
|Using raw comparison (first item)|100,198,153|50099081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37344376,"opsSec":74686404.15819888},{"name":"using Array.includes (first item)","samples":43739709,"opsSec":87356267.15295605},{"name":"Using raw comparison","samples":49073432,"opsSec":98116441.81981646},{"name":"Using raw comparison (first item)","samples":50099081,"opsSec":100198153.18256253}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,822,788|21915072|
|Using Object.getOwnPropertyNames()|43,520,516|21764866|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:13:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21915072,"opsSec":43822788.78313064},{"name":"Using Object.getOwnPropertyNames()","samples":21764866,"opsSec":43520516.35657943}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,658,228|45329678|
|Length = 10_000 - Array.at|89,754,687|44879271|
|Length = 1_000_000 - Array.at|92,380,372|46204293|
|Length = 100 - Array[length - 1]|91,333,835|46017192|
|Length = 10_000 - Array[length - 1]|91,939,826|45980502|
|Length = 1_000_000 - Array[length - 1]|92,814,694|46407356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45329678,"opsSec":90658228.75558364},{"name":"Length = 10_000 - Array.at","samples":44879271,"opsSec":89754687.75419845},{"name":"Length = 1_000_000 - Array.at","samples":46204293,"opsSec":92380372.47996238},{"name":"Length = 100 - Array[length - 1]","samples":46017192,"opsSec":91333835.76094939},{"name":"Length = 10_000 - Array[length - 1]","samples":45980502,"opsSec":91939826.76418279},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46407356,"opsSec":92814694.17957872}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,116,412|51058362|
|~ (small)|98,252,630|49190103|
|Math.floor (long)|102,570,525|51326170|
|~ (long)|102,235,360|51118615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:25:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51058362,"opsSec":102116412.13647734},{"name":"~ (small)","samples":49190103,"opsSec":98252630.2652426},{"name":"Math.floor (long)","samples":51326170,"opsSec":102570525.85090134},{"name":"~ (long)","samples":51118615,"opsSec":102235360.52419746}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,422,327|14216139|
|Object.create({})|1,839,365|919685|
|new Function with empty prototype|104,309,408|52158800|
|Empty class|78,223,367|39138398|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14216139,"opsSec":28422327.627320953},{"name":"Object.create({})","samples":919685,"opsSec":1839365.2801886909},{"name":"new Function with empty prototype","samples":52158800,"opsSec":104309408.58214405},{"name":"Empty class","samples":39138398,"opsSec":78223367.09357408}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|102,236,083|51139382|
|Using parseInt(x, 10) - big number (10 len)|99,594,515|49835882|
|Using + - small number (2 len)|101,261,644|50673244|
|Using + - big number (10 len)|101,542,852|50789257|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":51139382,"opsSec":102236083.50222033},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49835882,"opsSec":99594515.70497279},{"name":"Using + - small number (2 len)","samples":50673244,"opsSec":101261644.7158351},{"name":"Using + - big number (10 len)","samples":50789257,"opsSec":101542852.35333923}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|990,540|495271|
|Using ? operator to avoid rejection|998,628|500360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:38:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":495271,"opsSec":990540.6370160836},{"name":"Using ? operator to avoid rejection","samples":500360,"opsSec":998628.9249571018}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,996,473|48998238|
|Raw usage underscore usage|102,038,686|51297187|
|Manipulating private properties using #|100,443,544|50222025|
|Manipulating private properties using underscore(_)|102,812,863|51407483|
|Manipulating private properties using Symbol|101,886,187|50955185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:40:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":48998238,"opsSec":97996473.4520917},{"name":"Raw usage underscore usage","samples":51297187,"opsSec":102038686.00956272},{"name":"Manipulating private properties using #","samples":50222025,"opsSec":100443544.7689698},{"name":"Manipulating private properties using underscore(_)","samples":51407483,"opsSec":102812863.88818495},{"name":"Manipulating private properties using Symbol","samples":50955185,"opsSec":101886187.31344116}]}-->
