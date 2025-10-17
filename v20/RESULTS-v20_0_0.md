## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,190,738|52604718|
|Using dot notation|77,363,756|38681879|
|Using define property (writable)|4,548,113|2274063|
|Using define property initialized (writable)|5,979,285|2989650|
|Using define property (getter)|2,216,452|1108227|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52604718,"opsSec":105190738.13591488},{"name":"Using dot notation","samples":38681879,"opsSec":77363756.9169074},{"name":"Using define property (writable)","samples":2274063,"opsSec":4548113.565457513},{"name":"Using define property initialized (writable)","samples":2989650,"opsSec":5979285.613838813},{"name":"Using define property (getter)","samples":1108227,"opsSec":2216452.5415742276}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.288ms
new Array(length)|10,000|0.299ms
array.push|1,000,000|26.428ms
new Array(length)|1,000,000|11.586ms
array.push|10,000,000|241.806ms
new Array(length)|10,000,000|62.766ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.021ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.256ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|24.189ms
new Array(length)|1,000,000|10.511ms
array.push|10,000,000|214.594ms
new Array(length)|10,000,000|65.022ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|250|126|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":126,"opsSec":250.65118780733317},{"name":"Array.from","samples":12,"opsSec":22.479060811052157}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,978|2028|
|new Blob (1024)|517|263|
|text (128)|4,506|2260|
|text (1024)|574|288|
|arrayBuffer (128)|4,579|2290|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|73,741|36888|
|slice (0, 512)|21,282|13730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2028,"opsSec":3978.957741096719},{"name":"new Blob (1024)","samples":263,"opsSec":517.394460436928},{"name":"text (128)","samples":2260,"opsSec":4506.32736116614},{"name":"text (1024)","samples":288,"opsSec":574.0537591339353},{"name":"arrayBuffer (128)","samples":2290,"opsSec":4579.630936702072},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.1199840414034},{"name":"slice (0, 64)","samples":36888,"opsSec":73741.80592459276},{"name":"slice (0, 512)","samples":13730,"opsSec":21282.310944368568}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|398,657|199364|
|[True conditional] Using constructor name|313,121|156562|
|[True conditional] Check if property is valid then instanceof |323,157|161580|
|[False conditional] Using instanceof only|45,911,827|22955992|
|[False conditional] Using constructor name|99,758,451|49879232|
|[False conditional] Check if property is valid then instanceof |99,778,497|49907113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":398657.49343571096,"samples":199364},{"name":"[True conditional] Using constructor name","opsSec":313121.3672755439,"samples":156562},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323157.70493397955,"samples":161580},{"name":"[False conditional] Using instanceof only","opsSec":45911827.8079618,"samples":22955992},{"name":"[False conditional] Using constructor name","opsSec":99758451.03140135,"samples":49879232},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99778497.9141379,"samples":49907113}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|163.87 ms|1|
|Gzip|163.81 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:52:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.163874517},{"name":"Gzip","samples":1,"totalTime":0.163806168}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,375|3188|
|crypto.verify('RSA-SHA256')|6,507|3275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:58:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3188,"opsSec":6375.157165971716},{"name":"crypto.verify('RSA-SHA256')","samples":3275,"opsSec":6507.753615851974}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,462,814|731539|
|fromUnixToISOString(new Date())|2,118,577|1059290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":731539,"opsSec":1462814.6056021154},{"name":"fromUnixToISOString(new Date())","samples":1059290,"opsSec":2118577.3348297128}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,404|6203|
|Intl.DateTimeFormat().format(new Date())|12,377|6189|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,206|6604|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,039|6520|
|Reusing Intl.DateTimeFormat()|631,283|315659|
|Date.toLocaleDateString()|637,832|319089|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,741|6371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:04:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6203,"opsSec":12404.261592354878},{"name":"Intl.DateTimeFormat().format(new Date())","samples":6189,"opsSec":12377.277315532101},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6604,"opsSec":13206.163735757198},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6520,"opsSec":13039.524448543361},{"name":"Reusing Intl.DateTimeFormat()","samples":315659,"opsSec":631283.0610077055},{"name":"Date.toLocaleDateString()","samples":319089,"opsSec":637832.0730508451},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6371,"opsSec":12741.641373761893}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,087,776|543940|
|Using brackets {}|1,085,916|543017|
|Using '' + |1,081,420|540734|
|Using date.toString()|1,184,649|592325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":543940,"opsSec":1087776.0086135764},{"name":"Using brackets {}","samples":543017,"opsSec":1085916.495147893},{"name":"Using '' + ","samples":540734,"opsSec":1081420.2855741598},{"name":"Using date.toString()","samples":592325,"opsSec":1184649.3887209154}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,648,442|1824328|
|Using delete property (proto: null)|16,874,861|8439567|
|Using delete property (cached proto: null)|3,715,465|1858329|
|Using undefined assignment|82,341,212|41170709|
|Using undefined assignment (proto: null)|17,266,668|8633762|
|Using undefined property (cached proto: null)|81,082,371|40541192|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1824328,"opsSec":3648442.186694091},{"name":"Using delete property (proto: null)","samples":8439567,"opsSec":16874861.285122607},{"name":"Using delete property (cached proto: null)","samples":1858329,"opsSec":3715465.8333399193},{"name":"Using undefined assignment","samples":41170709,"opsSec":82341212.14696965},{"name":"Using undefined assignment (proto: null)","samples":8633762,"opsSec":17266668.263920844},{"name":"Using undefined property (cached proto: null)","samples":40541192,"opsSec":81082371.67547952}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|317,883|158944|
|NodeError|308,010|154365|
|NodeError Range|274,091|137048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:15:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":158944,"opsSec":317883.48351146624},{"name":"NodeError","samples":154365,"opsSec":308010.5956682486},{"name":"NodeError Range","samples":137048,"opsSec":274091.355247894}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,619,748|809914|
|Function returning explicitly undefined|1,594,439|797238|
|Function returning implicitly undefined|1,601,011|800568|
|Function returning string|1,575,831|787916|
|Function returning integer|1,611,488|805858|
|Function returning float|1,608,787|804396|
|Function returning functions|1,548,880|774441|
|Function returning arrow functions|1,589,253|794627|
|Function returning empty object|1,604,140|802071|
|Function returning empty array|1,617,059|808600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1619748.991883674,"samples":809914},{"name":"Function returning explicitly undefined","opsSec":1594439.6850417336,"samples":797238},{"name":"Function returning implicitly undefined","opsSec":1601011.809513936,"samples":800568},{"name":"Function returning string","opsSec":1575831.1458995189,"samples":787916},{"name":"Function returning integer","opsSec":1611488.892870328,"samples":805858},{"name":"Function returning float","opsSec":1608787.0288480807,"samples":804396},{"name":"Function returning functions","opsSec":1548880.2156899914,"samples":774441},{"name":"Function returning arrow functions","opsSec":1589253.930072827,"samples":794627},{"name":"Function returning empty object","opsSec":1604140.8450185915,"samples":802071},{"name":"Function returning empty array","opsSec":1617059.0603664168,"samples":808600}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|75,163,096|37581578|
|using Array.includes (first item)|80,318,442|40223107|
|Using raw comparison|97,905,946|48953393|
|Using raw comparison (first item)|98,051,266|49025663|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":37581578,"opsSec":75163096.92180581},{"name":"using Array.includes (first item)","samples":40223107,"opsSec":80318442.6182984},{"name":"Using raw comparison","samples":48953393,"opsSec":97905946.35860403},{"name":"Using raw comparison (first item)","samples":49025663,"opsSec":98051266.97313727}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,489,828|21746376|
|Using Object.getOwnPropertyNames()|43,857,606|21932197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:22:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21746376,"opsSec":43489828.17885154},{"name":"Using Object.getOwnPropertyNames()","samples":21932197,"opsSec":43857606.59680308}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|98,740,313|49374172|
|Length = 10_000 - Array.at|99,988,077|49994149|
|Length = 1_000_000 - Array.at|94,469,777|47234891|
|Length = 100 - Array[length - 1]|98,039,005|49021107|
|Length = 10_000 - Array[length - 1]|96,248,425|48124220|
|Length = 1_000_000 - Array[length - 1]|95,204,426|47602222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49374172,"opsSec":98740313.45030709},{"name":"Length = 10_000 - Array.at","samples":49994149,"opsSec":99988077.82625264},{"name":"Length = 1_000_000 - Array.at","samples":47234891,"opsSec":94469777.65439023},{"name":"Length = 100 - Array[length - 1]","samples":49021107,"opsSec":98039005.77157514},{"name":"Length = 10_000 - Array[length - 1]","samples":48124220,"opsSec":96248425.75523299},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47602222,"opsSec":95204426.86320317}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|101,578,414|50789216|
|~ (small)|94,808,634|47404441|
|Math.floor (long)|101,423,012|50711514|
|~ (long)|101,123,161|50580715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":50789216,"opsSec":101578414.73166949},{"name":"~ (small)","samples":47404441,"opsSec":94808634.35984704},{"name":"Math.floor (long)","samples":50711514,"opsSec":101423012.5837021},{"name":"~ (long)","samples":50580715,"opsSec":101123161.35530934}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,807,256|17403634|
|Object.create({})|2,016,396|1008199|
|new Function with empty prototype|81,155,275|40577747|
|Empty class|80,987,092|40531464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17403634,"opsSec":34807256.51360535},{"name":"Object.create({})","samples":1008199,"opsSec":2016396.1812106445},{"name":"new Function with empty prototype","samples":40577747,"opsSec":81155275.36768816},{"name":"Empty class","samples":40531464,"opsSec":80987092.9819252}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,080,685|76040794|
|Using optional chain (obj.field?.field2) (undefined)|100,228,919|50115154|
|Using and operator (obj.field && obj.field.field2) (Valid)|100,249,458|50149533|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,758,292|49879152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:23:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152080685.55321193,"samples":76040794},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":100228919.82946037,"samples":50115154},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":100249458.35752745,"samples":50149533},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99758292.02900496,"samples":49879152}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,334,709|49538154|
|Using parseInt(x, 10) - big number (10 len)|98,060,383|49038351|
|Using + - small number (2 len)|99,403,486|49780173|
|Using + - big number (10 len)|65,164,099|32596594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49538154,"opsSec":97334709.52791278},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49038351,"opsSec":98060383.96762472},{"name":"Using + - small number (2 len)","samples":49780173,"opsSec":99403486.50307025},{"name":"Using + - big number (10 len)","samples":32596594,"opsSec":65164099.78848002}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|921,985|463791|
|Using ? operator to avoid rejection|1,052,843|529345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:36:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":463791,"opsSec":921985.1518308014},{"name":"Using ? operator to avoid rejection","samples":529345,"opsSec":1052843.1178666905}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|101,281,837|50649380|
|Raw usage underscore usage|97,468,416|48734216|
|Manipulating private properties using #|100,756,872|50439114|
|Manipulating private properties using underscore(_)|101,602,346|50801183|
|Manipulating private properties using Symbol|100,938,173|50469112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:40:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":50649380,"opsSec":101281837.02041593},{"name":"Raw usage underscore usage","samples":48734216,"opsSec":97468416.79492697},{"name":"Manipulating private properties using #","samples":50439114,"opsSec":100756872.39261544},{"name":"Manipulating private properties using underscore(_)","samples":50801183,"opsSec":101602346.89875878},{"name":"Manipulating private properties using Symbol","samples":50469112,"opsSec":100938173.12716074}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,627,220|3813647|
|Adding property in the object creation - small object|7,722,828|3861416|
|Adding property after the function creation - small class|244,733|122372|
|Adding property in the function creation - small class|249,113|124557|
|Adding property after the class creation - small class|211,464|105735|
|Adding property in the class creation - small class|210,011|108413|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3813647,"opsSec":7627220.992240663},{"name":"Adding property in the object creation - small object","samples":3861416,"opsSec":7722828.648292367},{"name":"Adding property after the function creation - small class","samples":122372,"opsSec":244733.12552830024},{"name":"Adding property in the function creation - small class","samples":124557,"opsSec":249113.61038631338},{"name":"Adding property after the class creation - small class","samples":105735,"opsSec":211464.8808581642},{"name":"Adding property in the class creation - small class","samples":108413,"opsSec":210011.75366898457}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,985,312|51022787|
|Getter|52,335,201|26173687|
|Method|88,356,455|44184439|
|DefineProperty (getter)|101,435,050|50719612|
|DefineProperty (getter & enumerable=false)|53,241,633|26621331|
|DefineProperty (getter & configurable=false)|101,369,785|50685020|
|DefineProperty (getter & enumerable=false & configurable=false)|53,508,905|26754467|
|DefineProperty (writable)|102,758,089|51379056|
|DefineProperty (writable & enumerable=false)|102,548,879|51275858|
|DefineProperty (writable & enumerable=false & configurable=false)|102,314,082|51165965|
|DefineProperties (getter)|53,225,268|26612636|
|DefineProperties (getter & enumerable=false)|53,341,237|26670624|
|DefineProperties (getter & enumerable=false & configurable=false)|53,142,711|26571533|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":51022787,"opsSec":101985312.30675232},{"name":"Getter","samples":26173687,"opsSec":52335201.9833931},{"name":"Method","samples":44184439,"opsSec":88356455.25910348},{"name":"DefineProperty (getter)","samples":50719612,"opsSec":101435050.75914167},{"name":"DefineProperty (getter & enumerable=false)","samples":26621331,"opsSec":53241633.90404931},{"name":"DefineProperty (getter & configurable=false)","samples":50685020,"opsSec":101369785.96731637},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26754467,"opsSec":53508905.10519124},{"name":"DefineProperty (writable)","samples":51379056,"opsSec":102758089.8042526},{"name":"DefineProperty (writable & enumerable=false)","samples":51275858,"opsSec":102548879.49799308},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51165965,"opsSec":102314082.33147809},{"name":"DefineProperties (getter)","samples":26612636,"opsSec":53225268.91293441},{"name":"DefineProperties (getter & enumerable=false)","samples":26670624,"opsSec":53341237.43843499},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26571533,"opsSec":53142711.75068347}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,138,697|51088917|
|Setter|11,119,298|5559652|
|Method|97,899,900|48952180|
|DefineProperty (setter)|104,265,943|52140234|
|DefineProperty (setter & enumerable=false)|11,100,308|5550934|
|DefineProperty (setter & configurable=false)|11,107,581|5553793|
|DefineProperty (setter & enumerable=false & configurable=false)|11,242,832|5621420|
|DefineProperty (writable)|105,030,092|52532839|
|DefineProperty (writable & enumerable=false)|100,974,613|50487327|
|DefineProperty (writable & enumerable=false & configurable=false)|103,825,626|51931592|
|DefineProperties (setter)|96,772,307|48386161|
|DefineProperties (setter & enumerable=false)|11,242,068|5622206|
|DefineProperties (setter & enumerable=false & configurable=false)|11,334,548|5667608|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:50:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":51088917,"opsSec":102138697.92367138},{"name":"Setter","samples":5559652,"opsSec":11119298.373635024},{"name":"Method","samples":48952180,"opsSec":97899900.2679432},{"name":"DefineProperty (setter)","samples":52140234,"opsSec":104265943.33702938},{"name":"DefineProperty (setter & enumerable=false)","samples":5550934,"opsSec":11100308.939408842},{"name":"DefineProperty (setter & configurable=false)","samples":5553793,"opsSec":11107581.867979545},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5621420,"opsSec":11242832.13001751},{"name":"DefineProperty (writable)","samples":52532839,"opsSec":105030092.75427394},{"name":"DefineProperty (writable & enumerable=false)","samples":50487327,"opsSec":100974613.81210369},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51931592,"opsSec":103825626.94831273},{"name":"DefineProperties (setter)","samples":48386161,"opsSec":96772307.48415388},{"name":"DefineProperties (setter & enumerable=false)","samples":5622206,"opsSec":11242068.972952934},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5667608,"opsSec":11334548.145754155}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,422,561|1711282|
|Using replaceAll()|3,033,094|1516762|
|Using replaceAll(//g)|2,989,919|1495150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1711282,"opsSec":3422561.9327725926},{"name":"Using replaceAll()","samples":1516762,"opsSec":3033094.0710478052},{"name":"Using replaceAll(//g)","samples":1495150,"opsSec":2989919.0185388196}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,914,982|10959140|
|{ ...object, __proto__: null }|22,014,121|11007631|
|{ ...object, newProp: true }|801,790|400917|
|structuredClone|265,583|132792|
|JSON.parse + JSON.stringify|200,313|100200|
|loop + object.keys starting with {}|1,508,585|754308|
|loop + object.keys starting with { __proto__: null }|741,898|370950|
|loop + object.keys starting with { randomProp: true }|581,773|291055|
|object.keys + reduce(FN, {})|1,534,108|767072|
|object.keys + reduce(FN, { __proto__: null })|771,023|385513|
|object.keys + reduce(FN, { newProp: true })|573,718|287037|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":10959140,"opsSec":21914982.5402371},{"name":"{ ...object, __proto__: null }","samples":11007631,"opsSec":22014121.05213411},{"name":"{ ...object, newProp: true }","samples":400917,"opsSec":801790.4820197979},{"name":"structuredClone","samples":132792,"opsSec":265583.34932079416},{"name":"JSON.parse + JSON.stringify","samples":100200,"opsSec":200313.58632136963},{"name":"loop + object.keys starting with {}","samples":754308,"opsSec":1508585.8313005457},{"name":"loop + object.keys starting with { __proto__: null }","samples":370950,"opsSec":741898.7283855797},{"name":"loop + object.keys starting with { randomProp: true }","samples":291055,"opsSec":581773.8487431009},{"name":"object.keys + reduce(FN, {})","samples":767072,"opsSec":1534108.5037974392},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":385513,"opsSec":771023.2937082391},{"name":"object.keys + reduce(FN, { newProp: true })","samples":287037,"opsSec":573718.2258537835}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|277,307|138694|
|Sort using first char|1,394,549|697331|
|Sort using localeCompare|1,248,965|624645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:00:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":138694,"opsSec":277307.4870988107},{"name":"Sort using first char","samples":697331,"opsSec":1394549.3622480112},{"name":"Sort using localeCompare","samples":624645,"opsSec":1248965.2016034622}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,759|880|
|{...smallObject} - Total keys: 2|38,703,914|19352703|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,056|529|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,603|3302|
|{ ...bigObject, ...anotherBigObject }|1,112|558|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,117,248|6060061|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,457,305|14228666|
|{ ...smallObject, ...anotherSmallObject }|20,506,528|10253342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:05:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":880,"opsSec":1759.9184876153276},{"name":"{...smallObject} - Total keys: 2","samples":19352703,"opsSec":38703914.89297483},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":529,"opsSec":1056.5201955533003},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3302,"opsSec":6603.571348976595},{"name":"{ ...bigObject, ...anotherBigObject }","samples":558,"opsSec":1112.526931226528},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6060061,"opsSec":12117248.128026979},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14228666,"opsSec":28457305.36396218},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10253342,"opsSec":20506528.02734782}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,153|1085|
|streams.web.Readable reading 1e3 * "some data"|526|264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:07:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1085,"opsSec":2153.556369591042},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":264,"opsSec":526.3235699546874}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,073|3037|
|streams.web.WritableStream writing 1e3 * "some data"|1,481|741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:10:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3037,"opsSec":6073.929335906106},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":741,"opsSec":1481.2612683427747}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,004,120|50030610|
|Using backtick (`)|99,898,013|49950838|
|Using array.join|10,614,780|5307539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50030610,"opsSec":100004120.24744584},{"name":"Using backtick (`)","samples":49950838,"opsSec":99898013.33923893},{"name":"Using array.join","samples":5307539,"opsSec":10614780.19172694}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,412,442|27209768|
|(short string) (true) String#slice and strict comparison|64,154,693|32078960|
|(long string) (true) String#endsWith|50,702,267|25358075|
|(long string) (true) String#slice and strict comparison|59,500,887|29750463|
|(short string) (false) String#endsWith|58,891,345|29467243|
|(short string) (false) String#slice and strict comparison|63,906,823|31953420|
|(long string) (false) String#endsWith|53,889,303|26946837|
|(long string) (false) String#slice and strict comparison|58,654,318|29351324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27209768,"opsSec":54412442.576335974},{"name":"(short string) (true) String#slice and strict comparison","samples":32078960,"opsSec":64154693.66045582},{"name":"(long string) (true) String#endsWith","samples":25358075,"opsSec":50702267.71909851},{"name":"(long string) (true) String#slice and strict comparison","samples":29750463,"opsSec":59500887.80043003},{"name":"(short string) (false) String#endsWith","samples":29467243,"opsSec":58891345.96898927},{"name":"(short string) (false) String#slice and strict comparison","samples":31953420,"opsSec":63906823.89548038},{"name":"(long string) (false) String#endsWith","samples":26946837,"opsSec":53889303.1464004},{"name":"(long string) (false) String#slice and strict comparison","samples":29351324,"opsSec":58654318.601102255}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,195,588|7597796|
|Using indexof|15,116,588|7558297|
|Using RegExp.test|12,732,162|6366083|
|Using RegExp.text with cached regex pattern|13,385,215|6692707|
|Using new RegExp.test|4,416,444|2208285|
|Using new RegExp.test with cached regex pattern|5,110,736|2555373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:00:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7597796,"opsSec":15195588.170711782},{"name":"Using indexof","samples":7558297,"opsSec":15116588.195230132},{"name":"Using RegExp.test","samples":6366083,"opsSec":12732162.460458837},{"name":"Using RegExp.text with cached regex pattern","samples":6692707,"opsSec":13385215.122473711},{"name":"Using new RegExp.test","samples":2208285,"opsSec":4416444.5553088505},{"name":"Using new RegExp.test with cached regex pattern","samples":2555373,"opsSec":5110736.299822503}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,946,742|42975815|
|(short string) (true) String#slice and strict comparison|64,309,288|32158095|
|(long string) (true) String#startsWith|65,803,059|32901749|
|(long string) (true) String#slice and strict comparison|59,579,886|29806337|
|(short string) (false) String#startsWith|99,021,848|49510942|
|(short string) (false) String#slice and strict comparison|63,863,843|31940909|
|(long string) (false) String#startsWith|92,314,610|46157306|
|(long string) (false) String#slice and strict comparison|59,067,163|29538850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:08:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42975815,"opsSec":85946742.03688687},{"name":"(short string) (true) String#slice and strict comparison","samples":32158095,"opsSec":64309288.19857195},{"name":"(long string) (true) String#startsWith","samples":32901749,"opsSec":65803059.620016806},{"name":"(long string) (true) String#slice and strict comparison","samples":29806337,"opsSec":59579886.47351498},{"name":"(short string) (false) String#startsWith","samples":49510942,"opsSec":99021848.94626547},{"name":"(short string) (false) String#slice and strict comparison","samples":31940909,"opsSec":63863843.26585745},{"name":"(long string) (false) String#startsWith","samples":46157306,"opsSec":92314610.33833702},{"name":"(long string) (false) String#slice and strict comparison","samples":29538850,"opsSec":59067163.36313063}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|96,119,002|48060705|
|Using this|101,762,602|50905781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:11:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":48060705,"opsSec":96119002.02676122},{"name":"Using this","samples":50905781,"opsSec":101762602.99407353}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,707,244|5355298|
|Date.now()|20,569,829|10287538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:13:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5355298,"opsSec":10707244.247089867},{"name":"Date.now()","samples":10287538,"opsSec":20569829.829460632}]}-->
