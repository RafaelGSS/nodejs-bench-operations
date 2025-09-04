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

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,447,878|3724245|
|Adding property in the object creation - small object|7,416,000|3708300|
|Adding property after the function creation - small class|234,854|117436|
|Adding property in the function creation - small class|240,494|120672|
|Adding property after the class creation - small class|230,800|115802|
|Adding property in the class creation - small class|224,050|115687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3724245,"opsSec":7447878.365332882},{"name":"Adding property in the object creation - small object","samples":3708300,"opsSec":7416000.104919514},{"name":"Adding property after the function creation - small class","samples":117436,"opsSec":234854.88894250142},{"name":"Adding property in the function creation - small class","samples":120672,"opsSec":240494.4916872335},{"name":"Adding property after the class creation - small class","samples":115802,"opsSec":230800.3329303074},{"name":"Adding property in the class creation - small class","samples":115687,"opsSec":224050.4438727919}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,415,037|50214038|
|Getter|53,640,343|26820177|
|Method|101,656,712|50830923|
|DefineProperty (getter)|100,635,971|50317991|
|DefineProperty (getter & enumerable=false)|53,811,453|26905917|
|DefineProperty (getter & configurable=false)|99,065,972|49532996|
|DefineProperty (getter & enumerable=false & configurable=false)|53,089,433|26574613|
|DefineProperty (writable)|100,060,912|50031631|
|DefineProperty (writable & enumerable=false)|100,259,084|50129772|
|DefineProperty (writable & enumerable=false & configurable=false)|100,088,608|50052985|
|DefineProperties (getter)|48,069,414|24034709|
|DefineProperties (getter & enumerable=false)|49,108,244|24567774|
|DefineProperties (getter & enumerable=false & configurable=false)|47,945,185|23972967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50214038,"opsSec":100415037.9106476},{"name":"Getter","samples":26820177,"opsSec":53640343.27193135},{"name":"Method","samples":50830923,"opsSec":101656712.13272388},{"name":"DefineProperty (getter)","samples":50317991,"opsSec":100635971.33258703},{"name":"DefineProperty (getter & enumerable=false)","samples":26905917,"opsSec":53811453.875889815},{"name":"DefineProperty (getter & configurable=false)","samples":49532996,"opsSec":99065972.97933319},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26574613,"opsSec":53089433.60069175},{"name":"DefineProperty (writable)","samples":50031631,"opsSec":100060912.56977285},{"name":"DefineProperty (writable & enumerable=false)","samples":50129772,"opsSec":100259084.81339157},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50052985,"opsSec":100088608.22966206},{"name":"DefineProperties (getter)","samples":24034709,"opsSec":48069414.7312798},{"name":"DefineProperties (getter & enumerable=false)","samples":24567774,"opsSec":49108244.79805718},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23972967,"opsSec":47945185.76743091}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,805,395|45935454|
|Setter|11,552,405|5776416|
|Method|89,449,806|44725630|
|DefineProperty (setter)|93,043,018|46521732|
|DefineProperty (setter & enumerable=false)|11,577,081|5790890|
|DefineProperty (setter & configurable=false)|11,357,232|5680139|
|DefineProperty (setter & enumerable=false & configurable=false)|11,535,536|5767771|
|DefineProperty (writable)|91,753,765|45876968|
|DefineProperty (writable & enumerable=false)|92,102,738|46051375|
|DefineProperty (writable & enumerable=false & configurable=false)|91,942,793|45971435|
|DefineProperties (setter)|83,461,443|41730846|
|DefineProperties (setter & enumerable=false)|11,692,600|5851305|
|DefineProperties (setter & enumerable=false & configurable=false)|11,660,950|5830480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:56:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45935454,"opsSec":91805395.30269042},{"name":"Setter","samples":5776416,"opsSec":11552405.300357824},{"name":"Method","samples":44725630,"opsSec":89449806.97733545},{"name":"DefineProperty (setter)","samples":46521732,"opsSec":93043018.51002736},{"name":"DefineProperty (setter & enumerable=false)","samples":5790890,"opsSec":11577081.279483585},{"name":"DefineProperty (setter & configurable=false)","samples":5680139,"opsSec":11357232.285589045},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5767771,"opsSec":11535536.163018703},{"name":"DefineProperty (writable)","samples":45876968,"opsSec":91753765.15448928},{"name":"DefineProperty (writable & enumerable=false)","samples":46051375,"opsSec":92102738.76346587},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45971435,"opsSec":91942793.68748124},{"name":"DefineProperties (setter)","samples":41730846,"opsSec":83461443.4518214},{"name":"DefineProperties (setter & enumerable=false)","samples":5851305,"opsSec":11692600.292282585},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5830480,"opsSec":11660950.624595698}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,374,246|1687456|
|Using replaceAll()|3,022,806|1511555|
|Using replaceAll(//g)|3,097,732|1549083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1687456,"opsSec":3374246.348925762},{"name":"Using replaceAll()","samples":1511555,"opsSec":3022806.6553065265},{"name":"Using replaceAll(//g)","samples":1549083,"opsSec":3097732.305086359}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,907,920|9971127|
|{ ...object, __proto__: null }|19,958,306|9990379|
|{ ...object, newProp: true }|758,825|380503|
|structuredClone|286,501|143266|
|JSON.parse + JSON.stringify|187,609|93808|
|loop + object.keys starting with {}|1,501,812|750953|
|loop + object.keys starting with { __proto__: null }|738,925|369683|
|loop + object.keys starting with { randomProp: true }|539,985|270019|
|object.keys + reduce(FN, {})|1,521,889|760966|
|object.keys + reduce(FN, { __proto__: null })|772,483|386423|
|object.keys + reduce(FN, { newProp: true })|547,281|273752|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9971127,"opsSec":19907920.322821178},{"name":"{ ...object, __proto__: null }","samples":9990379,"opsSec":19958306.820824027},{"name":"{ ...object, newProp: true }","samples":380503,"opsSec":758825.4392178635},{"name":"structuredClone","samples":143266,"opsSec":286501.001164676},{"name":"JSON.parse + JSON.stringify","samples":93808,"opsSec":187609.93794768502},{"name":"loop + object.keys starting with {}","samples":750953,"opsSec":1501812.316947669},{"name":"loop + object.keys starting with { __proto__: null }","samples":369683,"opsSec":738925.1262348329},{"name":"loop + object.keys starting with { randomProp: true }","samples":270019,"opsSec":539985.6192349917},{"name":"object.keys + reduce(FN, {})","samples":760966,"opsSec":1521889.6945102718},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":386423,"opsSec":772483.0951667217},{"name":"object.keys + reduce(FN, { newProp: true })","samples":273752,"opsSec":547281.8451642835}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,957|127050|
|Sort using first char|1,320,556|660279|
|Sort using localeCompare|1,242,685|621435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:16:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":127050,"opsSec":250957.84466222988},{"name":"Sort using first char","samples":660279,"opsSec":1320556.803575536},{"name":"Sort using localeCompare","samples":621435,"opsSec":1242685.7867443447}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,724|863|
|{...smallObject} - Total keys: 2|39,682,473|19842576|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,046|525|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,363|3182|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,130,637|6065416|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,803,481|14404860|
|{ ...smallObject, ...anotherSmallObject }|20,232,734|10121485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":863,"opsSec":1724.597005843806},{"name":"{...smallObject} - Total keys: 2","samples":19842576,"opsSec":39682473.11560491},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":525,"opsSec":1046.9028175788071},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3182,"opsSec":6363.637094503774},{"name":"{ ...bigObject, ...anotherBigObject }","samples":552,"opsSec":1103.0055522541986},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6065416,"opsSec":12130637.181966856},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14404860,"opsSec":28803481.569140863},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10121485,"opsSec":20232734.987748157}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,869|935|
|streams.web.Readable reading 1e3 * "some data"|1,476|740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:25:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":935,"opsSec":1869.7031210596258},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":740,"opsSec":1476.4503210909338}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,915|3959|
|streams.web.WritableStream writing 1e3 * "some data"|1,351|676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:26:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3959,"opsSec":7915.109133030906},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":676,"opsSec":1351.9717924605222}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,555,326|47780448|
|Using backtick (`)|96,719,802|48364794|
|Using array.join|10,648,894|5324520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47780448,"opsSec":95555326.84444086},{"name":"Using backtick (`)","samples":48364794,"opsSec":96719802.66412488},{"name":"Using array.join","samples":5324520,"opsSec":10648894.195340678}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,409,992|27205002|
|(short string) (true) String#slice and strict comparison|63,724,117|31862070|
|(long string) (true) String#endsWith|50,303,451|25151730|
|(long string) (true) String#slice and strict comparison|59,119,080|29560123|
|(short string) (false) String#endsWith|58,172,252|29088653|
|(short string) (false) String#slice and strict comparison|62,331,291|31167184|
|(long string) (false) String#endsWith|54,883,034|27441533|
|(long string) (false) String#slice and strict comparison|56,962,030|28481040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27205002,"opsSec":54409992.79154149},{"name":"(short string) (true) String#slice and strict comparison","samples":31862070,"opsSec":63724117.6965588},{"name":"(long string) (true) String#endsWith","samples":25151730,"opsSec":50303451.8508408},{"name":"(long string) (true) String#slice and strict comparison","samples":29560123,"opsSec":59119080.644682325},{"name":"(short string) (false) String#endsWith","samples":29088653,"opsSec":58172252.34374989},{"name":"(short string) (false) String#slice and strict comparison","samples":31167184,"opsSec":62331291.07814721},{"name":"(long string) (false) String#endsWith","samples":27441533,"opsSec":54883034.05807418},{"name":"(long string) (false) String#slice and strict comparison","samples":28481040,"opsSec":56962030.10126162}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,490,555|8245418|
|Using indexof|16,662,396|8331342|
|Using RegExp.test|12,913,915|6460535|
|Using RegExp.text with cached regex pattern|13,745,669|6872835|
|Using new RegExp.test|4,360,787|2180404|
|Using new RegExp.test with cached regex pattern|5,226,599|2613558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8245418,"opsSec":16490555.52863157},{"name":"Using indexof","samples":8331342,"opsSec":16662396.240416927},{"name":"Using RegExp.test","samples":6460535,"opsSec":12913915.510012636},{"name":"Using RegExp.text with cached regex pattern","samples":6872835,"opsSec":13745669.395190546},{"name":"Using new RegExp.test","samples":2180404,"opsSec":4360787.896767796},{"name":"Using new RegExp.test with cached regex pattern","samples":2613558,"opsSec":5226599.643314838}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,000,940|42000479|
|(short string) (true) String#slice and strict comparison|62,858,794|31477158|
|(long string) (true) String#startsWith|63,608,978|31809533|
|(long string) (true) String#slice and strict comparison|57,711,030|28972468|
|(short string) (false) String#startsWith|98,279,732|49139903|
|(short string) (false) String#slice and strict comparison|61,755,124|30877568|
|(long string) (false) String#startsWith|89,153,293|44576671|
|(long string) (false) String#slice and strict comparison|56,132,629|28083312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42000479,"opsSec":84000940.02379884},{"name":"(short string) (true) String#slice and strict comparison","samples":31477158,"opsSec":62858794.76972721},{"name":"(long string) (true) String#startsWith","samples":31809533,"opsSec":63608978.37933678},{"name":"(long string) (true) String#slice and strict comparison","samples":28972468,"opsSec":57711030.53851998},{"name":"(short string) (false) String#startsWith","samples":49139903,"opsSec":98279732.09364146},{"name":"(short string) (false) String#slice and strict comparison","samples":30877568,"opsSec":61755124.51354684},{"name":"(long string) (false) String#startsWith","samples":44576671,"opsSec":89153293.8572213},{"name":"(long string) (false) String#slice and strict comparison","samples":28083312,"opsSec":56132629.85482939}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|85,151,109|42576219|
|Using this|91,411,798|45705909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:50:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":42576219,"opsSec":85151109.9832887},{"name":"Using this","samples":45705909,"opsSec":91411798.62069869}]}-->
