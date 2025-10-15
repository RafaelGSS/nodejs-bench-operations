## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,369,436|42724802|
|Using dot notation|80,754,165|40384663|
|Using define property (writable)|3,828,660|1914332|
|Using define property initialized (writable)|5,477,789|2739784|
|Using define property (getter)|2,096,649|1056986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42724802,"opsSec":85369436.29419807},{"name":"Using dot notation","samples":40384663,"opsSec":80754165.37450093},{"name":"Using define property (writable)","samples":1914332,"opsSec":3828660.875812725},{"name":"Using define property initialized (writable)","samples":2739784,"opsSec":5477789.4932185},{"name":"Using define property (getter)","samples":1056986,"opsSec":2096649.282350886}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.378ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|26.62ms
new Array(length)|1,000,000|8.548ms
array.push|10,000,000|314.984ms
new Array(length)|10,000,000|55.015ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.231ms
new Array(length)|10,000|3.197ms
array.push|1,000,000|17.397ms
new Array(length)|1,000,000|10.981ms
array.push|10,000,000|229.446ms
new Array(length)|10,000,000|63.641ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:55:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":117,"opsSec":232.7314742916887},{"name":"Array.from","samples":11,"opsSec":21.397732821504235}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,037|2019|
|new Blob (1024)|556|279|
|text (128)|46,597|23300|
|text (1024)|30,773|15500|
|arrayBuffer (128)|50,027|25020|
|arrayBuffer (1024)|33,562|16782|
|slice (0, 64)|90,064|45133|
|slice (0, 512)|53,977|27201|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:00:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2019,"opsSec":4037.8628741767925},{"name":"new Blob (1024)","samples":279,"opsSec":556.9584642795418},{"name":"text (128)","samples":23300,"opsSec":46597.73618878047},{"name":"text (1024)","samples":15500,"opsSec":30773.86679499197},{"name":"arrayBuffer (128)","samples":25020,"opsSec":50027.99808314786},{"name":"arrayBuffer (1024)","samples":16782,"opsSec":33562.790866896226},{"name":"slice (0, 64)","samples":45133,"opsSec":90064.83874163314},{"name":"slice (0, 512)","samples":27201,"opsSec":53977.011246274305}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.30 ms|1|
|Gzip|139.53 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:12:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133296457},{"name":"Gzip","samples":1,"totalTime":0.139532758}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,827|3414|
|crypto.verify('RSA-SHA256')|6,825|3413|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:12:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3414,"opsSec":6827.639500634366},{"name":"crypto.verify('RSA-SHA256')","samples":3413,"opsSec":6825.389578108472}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,660,786|1330442|
|fromUnixToISOString(new Date())|2,229,801|1115305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1330442,"opsSec":2660786.6684236694},{"name":"fromUnixToISOString(new Date())","samples":1115305,"opsSec":2229801.7370067663}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,277|9139|
|Intl.DateTimeFormat().format(new Date())|17,296|8653|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,373|9187|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,182|8897|
|Reusing Intl.DateTimeFormat()|361,172|180593|
|Date.toLocaleDateString()|712,745|356374|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,483|10742|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9139,"opsSec":18277.37633936455},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8653,"opsSec":17296.91610937917},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9187,"opsSec":18373.45530054416},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8897,"opsSec":17182.252166107068},{"name":"Reusing Intl.DateTimeFormat()","samples":180593,"opsSec":361172.9349302518},{"name":"Date.toLocaleDateString()","samples":356374,"opsSec":712745.6008983073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10742,"opsSec":21483.260760997215}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,030,417|515210|
|Using brackets {}|1,058,413|529283|
|Using '' + |1,060,725|530363|
|Using date.toString()|1,153,015|576546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":515210,"opsSec":1030417.4548688864},{"name":"Using brackets {}","samples":529283,"opsSec":1058413.0698955308},{"name":"Using '' + ","samples":530363,"opsSec":1060725.522673515},{"name":"Using date.toString()","samples":576546,"opsSec":1153015.5712098468}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,285,640|1642821|
|Using delete property (proto: null)|19,189,902|9595261|
|Using delete property (cached proto: null)|3,339,090|1669546|
|Using undefined assignment|84,162,553|42081284|
|Using undefined assignment (proto: null)|20,755,245|10380724|
|Using undefined property (cached proto: null)|85,507,523|42753806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1642821,"opsSec":3285640.508319209},{"name":"Using delete property (proto: null)","samples":9595261,"opsSec":19189902.549945686},{"name":"Using delete property (cached proto: null)","samples":1669546,"opsSec":3339090.2837075945},{"name":"Using undefined assignment","samples":42081284,"opsSec":84162553.01906556},{"name":"Using undefined assignment (proto: null)","samples":10380724,"opsSec":20755245.170449343},{"name":"Using undefined property (cached proto: null)","samples":42753806,"opsSec":85507523.41420574}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|295,804|147938|
|NodeError|284,879|142441|
|NodeError Range|261,221|130628|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:02:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":147938,"opsSec":295804.5164721584},{"name":"NodeError","samples":142441,"opsSec":284879.03326974757},{"name":"NodeError Range","samples":130628,"opsSec":261221.60913027156}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,224,741|36612391|
|using Array.includes (first item)|85,828,338|42926264|
|Using raw comparison|106,332,200|53166862|
|Using raw comparison (first item)|106,125,582|53062908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36612391,"opsSec":73224741.72639205},{"name":"using Array.includes (first item)","samples":42926264,"opsSec":85828338.99921985},{"name":"Using raw comparison","samples":53166862,"opsSec":106332200.68489298},{"name":"Using raw comparison (first item)","samples":53062908,"opsSec":106125582.52371845}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,070,415|23035291|
|Using Object.getOwnPropertyNames()|45,086,971|22546515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23035291,"opsSec":46070415.96222087},{"name":"Using Object.getOwnPropertyNames()","samples":22546515,"opsSec":45086971.57345573}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,531,404|10765861|
|Length = 10_000 - Array.at|21,609,065|10806730|
|Length = 1_000_000 - Array.at|21,608,396|10805161|
|Length = 100 - Array[length - 1]|102,705,130|51359672|
|Length = 10_000 - Array[length - 1]|102,736,228|51371080|
|Length = 1_000_000 - Array[length - 1]|102,431,950|51226632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10765861,"opsSec":21531404.36872275},{"name":"Length = 10_000 - Array.at","samples":10806730,"opsSec":21609065.01870211},{"name":"Length = 1_000_000 - Array.at","samples":10805161,"opsSec":21608396.302938275},{"name":"Length = 100 - Array[length - 1]","samples":51359672,"opsSec":102705130.84235297},{"name":"Length = 10_000 - Array[length - 1]","samples":51371080,"opsSec":102736228.42111588},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51226632,"opsSec":102431950.77913749}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|100,482,835|50241430|
|~ (small)|107,075,719|53542174|
|Math.floor (long)|103,508,552|51754291|
|~ (long)|106,537,240|53268629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50241430,"opsSec":100482835.28122252},{"name":"~ (small)","samples":53542174,"opsSec":107075719.41022705},{"name":"Math.floor (long)","samples":51754291,"opsSec":103508552.60357106},{"name":"~ (long)","samples":53268629,"opsSec":106537240.52789254}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,992,830|14999234|
|Object.create({})|1,296,512|658789|
|new Function with empty prototype|79,113,680|39557126|
|Empty class|77,629,791|38829253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14999234,"opsSec":29992830.00780079},{"name":"Object.create({})","samples":658789,"opsSec":1296512.477887333},{"name":"new Function with empty prototype","samples":39557126,"opsSec":79113680.79922463},{"name":"Empty class","samples":38829253,"opsSec":77629791.98202252}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,187,187|46689348|
|Using parseInt(x, 10) - big number (10 len)|16,060,192|8030206|
|Using + - small number (2 len)|107,080,598|53552343|
|Using + - big number (10 len)|104,010,402|52005214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:30:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46689348,"opsSec":93187187.19796383},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8030206,"opsSec":16060192.00748988},{"name":"Using + - small number (2 len)","samples":53552343,"opsSec":107080598.86176965},{"name":"Using + - big number (10 len)","samples":52005214,"opsSec":104010402.20542024}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|690,772|351233|
|Using ? operator to avoid rejection|725,768|362886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:37:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":351233,"opsSec":690772.2101419244},{"name":"Using ? operator to avoid rejection","samples":362886,"opsSec":725768.8400024705}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|84,462,180|42306874|
|Raw usage underscore usage|82,910,478|41455251|
|Manipulating private properties using #|80,510,979|40255501|
|Manipulating private properties using underscore(_)|81,483,663|40754262|
|Manipulating private properties using Symbol|82,022,099|41020868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:41:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":42306874,"opsSec":84462180.61688301},{"name":"Raw usage underscore usage","samples":41455251,"opsSec":82910478.95088686},{"name":"Manipulating private properties using #","samples":40255501,"opsSec":80510979.29590383},{"name":"Manipulating private properties using underscore(_)","samples":40754262,"opsSec":81483663.82306956},{"name":"Manipulating private properties using Symbol","samples":41020868,"opsSec":82022099.08925703}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,730,311|1868384|
|Adding property in the object creation - small object|3,732,324|1866163|
|Adding property after the function creation - small class|184,206|92781|
|Adding property in the function creation - small class|189,187|94594|
|Adding property after the class creation - small class|157,977|79289|
|Adding property in the class creation - small class|156,053|78072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1868384,"opsSec":3730311.0553817973},{"name":"Adding property in the object creation - small object","samples":1866163,"opsSec":3732324.1263732887},{"name":"Adding property after the function creation - small class","samples":92781,"opsSec":184206.81075601716},{"name":"Adding property in the function creation - small class","samples":94594,"opsSec":189187.0336326322},{"name":"Adding property after the class creation - small class","samples":79289,"opsSec":157977.25830008966},{"name":"Adding property in the class creation - small class","samples":78072,"opsSec":156053.8370866541}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,289,672|46144847|
|Getter|53,006,173|26503273|
|Method|92,242,672|46122722|
|DefineProperty (getter)|92,780,886|46395314|
|DefineProperty (getter & enumerable=false)|53,121,069|26560543|
|DefineProperty (getter & configurable=false)|91,837,656|46063771|
|DefineProperty (getter & enumerable=false & configurable=false)|53,740,567|26873997|
|DefineProperty (writable)|92,497,646|46253860|
|DefineProperty (writable & enumerable=false)|89,999,485|45044525|
|DefineProperty (writable & enumerable=false & configurable=false)|78,266,702|39133353|
|DefineProperties (getter)|52,547,071|26284647|
|DefineProperties (getter & enumerable=false)|53,755,534|26913571|
|DefineProperties (getter & enumerable=false & configurable=false)|53,755,045|26877705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46144847,"opsSec":92289672.77337527},{"name":"Getter","samples":26503273,"opsSec":53006173.26058963},{"name":"Method","samples":46122722,"opsSec":92242672.84562238},{"name":"DefineProperty (getter)","samples":46395314,"opsSec":92780886.00696927},{"name":"DefineProperty (getter & enumerable=false)","samples":26560543,"opsSec":53121069.85119476},{"name":"DefineProperty (getter & configurable=false)","samples":46063771,"opsSec":91837656.98674728},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26873997,"opsSec":53740567.91336346},{"name":"DefineProperty (writable)","samples":46253860,"opsSec":92497646.08136527},{"name":"DefineProperty (writable & enumerable=false)","samples":45044525,"opsSec":89999485.93158136},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":39133353,"opsSec":78266702.55626509},{"name":"DefineProperties (getter)","samples":26284647,"opsSec":52547071.213019155},{"name":"DefineProperties (getter & enumerable=false)","samples":26913571,"opsSec":53755534.25282182},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26877705,"opsSec":53755045.00324443}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,529,894|52264956|
|Setter|10,901,325|5450753|
|Method|103,066,545|51534050|
|DefineProperty (setter)|104,930,323|52466295|
|DefineProperty (setter & enumerable=false)|10,897,792|5448903|
|DefineProperty (setter & configurable=false)|10,742,921|5374689|
|DefineProperty (setter & enumerable=false & configurable=false)|10,823,397|5411703|
|DefineProperty (writable)|91,882,808|45941416|
|DefineProperty (writable & enumerable=false)|101,850,961|50925498|
|DefineProperty (writable & enumerable=false & configurable=false)|99,028,668|49514904|
|DefineProperties (setter)|98,797,580|49402064|
|DefineProperties (setter & enumerable=false)|10,559,682|5280073|
|DefineProperties (setter & enumerable=false & configurable=false)|10,409,376|5204693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52264956,"opsSec":104529894.43897775},{"name":"Setter","samples":5450753,"opsSec":10901325.56125931},{"name":"Method","samples":51534050,"opsSec":103066545.34423004},{"name":"DefineProperty (setter)","samples":52466295,"opsSec":104930323.08530006},{"name":"DefineProperty (setter & enumerable=false)","samples":5448903,"opsSec":10897792.094417287},{"name":"DefineProperty (setter & configurable=false)","samples":5374689,"opsSec":10742921.482703052},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5411703,"opsSec":10823397.471162794},{"name":"DefineProperty (writable)","samples":45941416,"opsSec":91882808.29423545},{"name":"DefineProperty (writable & enumerable=false)","samples":50925498,"opsSec":101850961.37067313},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49514904,"opsSec":99028668.57613935},{"name":"DefineProperties (setter)","samples":49402064,"opsSec":98797580.88191012},{"name":"DefineProperties (setter & enumerable=false)","samples":5280073,"opsSec":10559682.282112265},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5204693,"opsSec":10409376.75647344}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,346,188|1673205|
|Using replaceAll()|2,824,360|1412192|
|Using replaceAll(//g)|2,983,304|1492287|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1673205,"opsSec":3346188.636236958},{"name":"Using replaceAll()","samples":1412192,"opsSec":2824360.5747533934},{"name":"Using replaceAll(//g)","samples":1492287,"opsSec":2983304.1565857492}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,390,502|9717743|
|{ ...object, __proto__: null }|19,609,150|9804596|
|{ ...object, newProp: true }|567,775|288628|
|structuredClone|255,559|127784|
|JSON.parse + JSON.stringify|198,256|99212|
|loop + object.keys starting with {}|1,229,707|614860|
|loop + object.keys starting with { __proto__: null }|700,097|350129|
|loop + object.keys starting with { randomProp: true }|503,674|251900|
|object.keys + reduce(FN, {})|1,253,365|626779|
|object.keys + reduce(FN, { __proto__: null })|718,310|359318|
|object.keys + reduce(FN, { newProp: true })|507,298|253691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:06:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9717743,"opsSec":19390502.67091185},{"name":"{ ...object, __proto__: null }","samples":9804596,"opsSec":19609150.467819307},{"name":"{ ...object, newProp: true }","samples":288628,"opsSec":567775.6758017809},{"name":"structuredClone","samples":127784,"opsSec":255559.14947553538},{"name":"JSON.parse + JSON.stringify","samples":99212,"opsSec":198256.23161168557},{"name":"loop + object.keys starting with {}","samples":614860,"opsSec":1229707.213504394},{"name":"loop + object.keys starting with { __proto__: null }","samples":350129,"opsSec":700097.9296093741},{"name":"loop + object.keys starting with { randomProp: true }","samples":251900,"opsSec":503674.3292254636},{"name":"object.keys + reduce(FN, {})","samples":626779,"opsSec":1253365.3076176068},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":359318,"opsSec":718310.0596273434},{"name":"object.keys + reduce(FN, { newProp: true })","samples":253691,"opsSec":507298.83444367896}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|260,172|130087|
|Sort using first char|1,290,603|645302|
|Sort using localeCompare|1,137,432|570640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:14:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":130087,"opsSec":260172.3463445666},{"name":"Sort using first char","samples":645302,"opsSec":1290603.9251449725},{"name":"Sort using localeCompare","samples":570640,"opsSec":1137432.176141602}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,657|829|
|{...smallObject} - Total keys: 2|38,049,691|19045397|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,021|511|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,076|3039|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,483,158|5741581|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,240,259|13120971|
|{ ...smallObject, ...anotherSmallObject }|18,497,683|9249199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":829,"opsSec":1657.4518939182965},{"name":"{...smallObject} - Total keys: 2","samples":19045397,"opsSec":38049691.42962821},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":511,"opsSec":1021.2049143625951},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3039,"opsSec":6076.560086168861},{"name":"{ ...bigObject, ...anotherBigObject }","samples":540,"opsSec":1078.1360041935336},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5741581,"opsSec":11483158.279456718},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13120971,"opsSec":26240259.159699567},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9249199,"opsSec":18497683.91541013}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,851|926|
|streams.web.Readable reading 1e3 * "some data"|583|292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":926,"opsSec":1851.4607953696432},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":292,"opsSec":583.5572889312106}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,884|2446|
|streams.web.WritableStream writing 1e3 * "some data"|1,585|800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2446,"opsSec":4884.364975582229},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":800,"opsSec":1585.391432837598}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,292,071|47646046|
|Using backtick (`)|107,152,146|53577484|
|Using array.join|11,046,348|5523175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47646046,"opsSec":95292071.41691257},{"name":"Using backtick (`)","samples":53577484,"opsSec":107152146.25538051},{"name":"Using array.join","samples":5523175,"opsSec":11046348.055842742}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,792,692|26423989|
|(short string) (true) String#slice and strict comparison|51,492,480|25747602|
|(long string) (true) String#endsWith|49,184,454|24601803|
|(long string) (true) String#slice and strict comparison|45,143,958|22571985|
|(short string) (false) String#endsWith|55,181,070|27839759|
|(short string) (false) String#slice and strict comparison|60,640,436|30321044|
|(long string) (false) String#endsWith|53,469,506|26738100|
|(long string) (false) String#slice and strict comparison|52,912,233|26462276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26423989,"opsSec":52792692.964001164},{"name":"(short string) (true) String#slice and strict comparison","samples":25747602,"opsSec":51492480.871641584},{"name":"(long string) (true) String#endsWith","samples":24601803,"opsSec":49184454.95040704},{"name":"(long string) (true) String#slice and strict comparison","samples":22571985,"opsSec":45143958.08199506},{"name":"(short string) (false) String#endsWith","samples":27839759,"opsSec":55181070.042993},{"name":"(short string) (false) String#slice and strict comparison","samples":30321044,"opsSec":60640436.760907},{"name":"(long string) (false) String#endsWith","samples":26738100,"opsSec":53469506.47330164},{"name":"(long string) (false) String#slice and strict comparison","samples":26462276,"opsSec":52912233.92611753}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,771,710|7885857|
|Using indexof|15,757,132|7878569|
|Using RegExp.test|13,344,486|6674066|
|Using RegExp.text with cached regex pattern|13,989,487|6994746|
|Using new RegExp.test|4,164,440|2083999|
|Using new RegExp.test with cached regex pattern|4,755,686|2379212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7885857,"opsSec":15771710.814114414},{"name":"Using indexof","samples":7878569,"opsSec":15757132.579546392},{"name":"Using RegExp.test","samples":6674066,"opsSec":13344486.446436672},{"name":"Using RegExp.text with cached regex pattern","samples":6994746,"opsSec":13989487.21559537},{"name":"Using new RegExp.test","samples":2083999,"opsSec":4164440.227096307},{"name":"Using new RegExp.test with cached regex pattern","samples":2379212,"opsSec":4755686.084941294}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|69,338,510|34689457|
|(short string) (true) String#slice and strict comparison|51,312,156|25662834|
|(long string) (true) String#startsWith|53,997,539|26998777|
|(long string) (true) String#slice and strict comparison|45,218,666|22617758|
|(short string) (false) String#startsWith|102,890,992|51455415|
|(short string) (false) String#slice and strict comparison|60,666,419|30346580|
|(long string) (false) String#startsWith|87,911,556|43955790|
|(long string) (false) String#slice and strict comparison|52,935,694|26467857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34689457,"opsSec":69338510.8657496},{"name":"(short string) (true) String#slice and strict comparison","samples":25662834,"opsSec":51312156.58555221},{"name":"(long string) (true) String#startsWith","samples":26998777,"opsSec":53997539.09667921},{"name":"(long string) (true) String#slice and strict comparison","samples":22617758,"opsSec":45218666.62044389},{"name":"(short string) (false) String#startsWith","samples":51455415,"opsSec":102890992.61662352},{"name":"(short string) (false) String#slice and strict comparison","samples":30346580,"opsSec":60666419.21307358},{"name":"(long string) (false) String#startsWith","samples":43955790,"opsSec":87911556.08805674},{"name":"(long string) (false) String#slice and strict comparison","samples":26467857,"opsSec":52935694.73140712}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|82,459,341|41265686|
|Using this|84,426,249|42218927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:52:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":41265686,"opsSec":82459341.62115104},{"name":"Using this","samples":42218927,"opsSec":84426249.10550295}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,670,863|4835433|
|Date.now()|19,063,737|9688760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4835433,"opsSec":9670863.775701333},{"name":"Date.now()","samples":9688760,"opsSec":19063737.814769458}]}-->
