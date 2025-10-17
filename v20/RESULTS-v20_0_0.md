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
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.008ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.381ms
array.push|1,000,000|27.695ms
new Array(length)|1,000,000|12.395ms
array.push|10,000,000|251.186ms
new Array(length)|10,000,000|66.03ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.021ms
new Array(length)|100|0.014ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.25ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|26.609ms
new Array(length)|1,000,000|9.533ms
array.push|10,000,000|223.43ms
new Array(length)|10,000,000|68.19ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|237|120|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:57:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":120,"opsSec":237.19062083374058},{"name":"Array.from","samples":12,"opsSec":22.547339195547575}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,851|1926|
|new Blob (1024)|539|270|
|text (128)|4,594|2298|
|text (1024)|577|290|
|arrayBuffer (128)|4,658|2337|
|arrayBuffer (1024)|576|289|
|slice (0, 64)|84,608|43074|
|slice (0, 512)|27,197|13600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1926,"opsSec":3851.276067934958},{"name":"new Blob (1024)","samples":270,"opsSec":539.3305893444726},{"name":"text (128)","samples":2298,"opsSec":4594.266968991025},{"name":"text (1024)","samples":290,"opsSec":577.0029061169197},{"name":"arrayBuffer (128)","samples":2337,"opsSec":4658.544310273452},{"name":"arrayBuffer (1024)","samples":289,"opsSec":576.7291830125237},{"name":"slice (0, 64)","samples":43074,"opsSec":84608.06003675115},{"name":"slice (0, 512)","samples":13600,"opsSec":27197.155231957047}]}-->

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
|Deflate|163.58 ms|1|
|Gzip|163.57 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:06:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.163584171},{"name":"Gzip","samples":1,"totalTime":0.163572853}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,415|3208|
|crypto.verify('RSA-SHA256')|6,483|3247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:16:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3208,"opsSec":6415.6763419599},{"name":"crypto.verify('RSA-SHA256')","samples":3247,"opsSec":6483.72816661949}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,493,469|746736|
|fromUnixToISOString(new Date())|2,245,042|1122522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:19:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":746736,"opsSec":1493469.983815522},{"name":"fromUnixToISOString(new Date())","samples":1122522,"opsSec":2245042.7831868115}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,167|6084|
|Intl.DateTimeFormat().format(new Date())|11,857|5929|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,891|6447|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,724|6363|
|Reusing Intl.DateTimeFormat()|619,972|310032|
|Date.toLocaleDateString()|617,923|308980|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,722|6510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6084,"opsSec":12167.514126825889},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5929,"opsSec":11857.555768530687},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6447,"opsSec":12891.202480149781},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6363,"opsSec":12724.526398046894},{"name":"Reusing Intl.DateTimeFormat()","samples":310032,"opsSec":619972.687942629},{"name":"Date.toLocaleDateString()","samples":308980,"opsSec":617923.6512591384},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6510,"opsSec":12722.143129316317}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,074,907|537490|
|Using brackets {}|1,094,977|547489|
|Using '' + |1,104,258|552184|
|Using date.toString()|1,220,247|610124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":537490,"opsSec":1074907.1427938615},{"name":"Using brackets {}","samples":547489,"opsSec":1094977.2466556542},{"name":"Using '' + ","samples":552184,"opsSec":1104258.360395913},{"name":"Using date.toString()","samples":610124,"opsSec":1220247.914582646}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,758,207|1880185|
|Using delete property (proto: null)|17,211,229|8605616|
|Using delete property (cached proto: null)|3,778,609|1889448|
|Using undefined assignment|85,298,342|42649177|
|Using undefined assignment (proto: null)|17,121,761|8563719|
|Using undefined property (cached proto: null)|85,410,962|42713964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:33:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1880185,"opsSec":3758207.4898282783},{"name":"Using delete property (proto: null)","samples":8605616,"opsSec":17211229.005246155},{"name":"Using delete property (cached proto: null)","samples":1889448,"opsSec":3778609.853433019},{"name":"Using undefined assignment","samples":42649177,"opsSec":85298342.91121541},{"name":"Using undefined assignment (proto: null)","samples":8563719,"opsSec":17121761.41697629},{"name":"Using undefined property (cached proto: null)","samples":42713964,"opsSec":85410962.13730296}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|312,716|156368|
|NodeError|310,087|155045|
|NodeError Range|275,067|137534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:37:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":156368,"opsSec":312716.0262019745},{"name":"NodeError","samples":155045,"opsSec":310087.8064388572},{"name":"NodeError Range","samples":137534,"opsSec":275067.5637428439}]}-->

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
|using Array.includes|72,729,601|36367072|
|using Array.includes (first item)|85,134,701|42567951|
|Using raw comparison|101,132,574|50578099|
|Using raw comparison (first item)|100,907,840|50453939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:38:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36367072,"opsSec":72729601.018202},{"name":"using Array.includes (first item)","samples":42567951,"opsSec":85134701.26017344},{"name":"Using raw comparison","samples":50578099,"opsSec":101132574.23971818},{"name":"Using raw comparison (first item)","samples":50453939,"opsSec":100907840.46228336}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,636,591|21321074|
|Using Object.getOwnPropertyNames()|43,513,569|21757841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:44:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21321074,"opsSec":42636591.42885863},{"name":"Using Object.getOwnPropertyNames()","samples":21757841,"opsSec":43513569.67727359}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,967,927|50484026|
|Length = 10_000 - Array.at|97,097,135|48550306|
|Length = 1_000_000 - Array.at|97,122,636|48572628|
|Length = 100 - Array[length - 1]|98,504,607|49259066|
|Length = 10_000 - Array[length - 1]|98,737,712|49369952|
|Length = 1_000_000 - Array[length - 1]|98,944,444|49472238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50484026,"opsSec":100967927.40557759},{"name":"Length = 10_000 - Array.at","samples":48550306,"opsSec":97097135.339972},{"name":"Length = 1_000_000 - Array.at","samples":48572628,"opsSec":97122636.72064358},{"name":"Length = 100 - Array[length - 1]","samples":49259066,"opsSec":98504607.71137966},{"name":"Length = 10_000 - Array[length - 1]","samples":49369952,"opsSec":98737712.61520621},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49472238,"opsSec":98944444.53566663}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|101,619,447|50809728|
|~ (small)|99,741,226|49870620|
|Math.floor (long)|100,346,288|50173146|
|~ (long)|100,771,691|50397256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50809728,"opsSec":101619447.6672053},{"name":"~ (small)","samples":49870620,"opsSec":99741226.43519321},{"name":"Math.floor (long)","samples":50173146,"opsSec":100346288.78891876},{"name":"~ (long)","samples":50397256,"opsSec":100771691.0413034}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,413,007|18744815|
|Object.create({})|2,065,638|1032820|
|new Function with empty prototype|84,469,842|42236475|
|Empty class|83,974,219|41989203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18744815,"opsSec":37413007.86059743},{"name":"Object.create({})","samples":1032820,"opsSec":2065638.3350955017},{"name":"new Function with empty prototype","samples":42236475,"opsSec":84469842.69236673},{"name":"Empty class","samples":41989203,"opsSec":83974219.38131852}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|99,960,926|49988486|
|Using parseInt(x, 10) - big number (10 len)|100,570,212|50360739|
|Using + - small number (2 len)|99,860,590|49930301|
|Using + - big number (10 len)|101,207,034|50618171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49988486,"opsSec":99960926.47200458},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50360739,"opsSec":100570212.35500109},{"name":"Using + - small number (2 len)","samples":49930301,"opsSec":99860590.0167292},{"name":"Using + - big number (10 len)","samples":50618171,"opsSec":101207034.87167001}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,025,324|514703|
|Using ? operator to avoid rejection|1,060,200|531789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:02:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":514703,"opsSec":1025324.0598282884},{"name":"Using ? operator to avoid rejection","samples":531789,"opsSec":1060200.2444292582}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|99,102,133|50247653|
|Raw usage underscore usage|101,129,913|50577126|
|Manipulating private properties using #|101,359,969|50692308|
|Manipulating private properties using underscore(_)|99,198,267|49630138|
|Manipulating private properties using Symbol|100,800,562|50408615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:07:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":50247653,"opsSec":99102133.94887055},{"name":"Raw usage underscore usage","samples":50577126,"opsSec":101129913.87266758},{"name":"Manipulating private properties using #","samples":50692308,"opsSec":101359969.10719195},{"name":"Manipulating private properties using underscore(_)","samples":49630138,"opsSec":99198267.75801407},{"name":"Manipulating private properties using Symbol","samples":50408615,"opsSec":100800562.42540184}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,668,972|3834570|
|Adding property in the object creation - small object|7,631,135|3815573|
|Adding property after the function creation - small class|246,200|124004|
|Adding property in the function creation - small class|254,276|127545|
|Adding property after the class creation - small class|213,897|107227|
|Adding property in the class creation - small class|212,260|106131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3834570,"opsSec":7668972.8470678255},{"name":"Adding property in the object creation - small object","samples":3815573,"opsSec":7631135.896376072},{"name":"Adding property after the function creation - small class","samples":124004,"opsSec":246200.76085295132},{"name":"Adding property in the function creation - small class","samples":127545,"opsSec":254276.83691504854},{"name":"Adding property after the class creation - small class","samples":107227,"opsSec":213897.28739113425},{"name":"Adding property in the class creation - small class","samples":106131,"opsSec":212260.95185541973}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,019,696|50584003|
|Getter|53,181,491|26595387|
|Method|101,434,089|50765073|
|DefineProperty (getter)|102,553,367|51276783|
|DefineProperty (getter & enumerable=false)|50,803,381|25457029|
|DefineProperty (getter & configurable=false)|97,862,648|48931332|
|DefineProperty (getter & enumerable=false & configurable=false)|51,544,576|25772307|
|DefineProperty (writable)|102,370,178|51190794|
|DefineProperty (writable & enumerable=false)|101,208,361|51086116|
|DefineProperty (writable & enumerable=false & configurable=false)|102,184,099|51107539|
|DefineProperties (getter)|53,355,392|26677705|
|DefineProperties (getter & enumerable=false)|53,322,975|26661624|
|DefineProperties (getter & enumerable=false & configurable=false)|52,756,811|26414635|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:18:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50584003,"opsSec":101019696.559009},{"name":"Getter","samples":26595387,"opsSec":53181491.06437173},{"name":"Method","samples":50765073,"opsSec":101434089.33747466},{"name":"DefineProperty (getter)","samples":51276783,"opsSec":102553367.25157426},{"name":"DefineProperty (getter & enumerable=false)","samples":25457029,"opsSec":50803381.10694356},{"name":"DefineProperty (getter & configurable=false)","samples":48931332,"opsSec":97862648.146251},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25772307,"opsSec":51544576.269370176},{"name":"DefineProperty (writable)","samples":51190794,"opsSec":102370178.22941527},{"name":"DefineProperty (writable & enumerable=false)","samples":51086116,"opsSec":101208361.21727704},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51107539,"opsSec":102184099.45967141},{"name":"DefineProperties (getter)","samples":26677705,"opsSec":53355392.286009766},{"name":"DefineProperties (getter & enumerable=false)","samples":26661624,"opsSec":53322975.83953132},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26414635,"opsSec":52756811.052346535}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,386,771|52193888|
|Setter|10,711,212|5356165|
|Method|97,526,903|48763460|
|DefineProperty (setter)|101,831,517|50948250|
|DefineProperty (setter & enumerable=false)|10,911,755|5458545|
|DefineProperty (setter & configurable=false)|11,039,943|5520467|
|DefineProperty (setter & enumerable=false & configurable=false)|11,118,770|5559388|
|DefineProperty (writable)|104,529,317|52265422|
|DefineProperty (writable & enumerable=false)|102,808,091|51404197|
|DefineProperty (writable & enumerable=false & configurable=false)|102,754,370|51386422|
|DefineProperties (setter)|97,842,637|48922172|
|DefineProperties (setter & enumerable=false)|10,947,908|5474423|
|DefineProperties (setter & enumerable=false & configurable=false)|11,039,078|5519543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52193888,"opsSec":104386771.17294069},{"name":"Setter","samples":5356165,"opsSec":10711212.841923015},{"name":"Method","samples":48763460,"opsSec":97526903.6154802},{"name":"DefineProperty (setter)","samples":50948250,"opsSec":101831517.64265758},{"name":"DefineProperty (setter & enumerable=false)","samples":5458545,"opsSec":10911755.242861766},{"name":"DefineProperty (setter & configurable=false)","samples":5520467,"opsSec":11039943.717048582},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5559388,"opsSec":11118770.974315519},{"name":"DefineProperty (writable)","samples":52265422,"opsSec":104529317.87195906},{"name":"DefineProperty (writable & enumerable=false)","samples":51404197,"opsSec":102808091.94982585},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51386422,"opsSec":102754370.81921412},{"name":"DefineProperties (setter)","samples":48922172,"opsSec":97842637.8200817},{"name":"DefineProperties (setter & enumerable=false)","samples":5474423,"opsSec":10947908.114607636},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5519543,"opsSec":11039078.868755052}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,516,231|1758162|
|Using replaceAll()|3,048,841|1524421|
|Using replaceAll(//g)|3,113,466|1556915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1758162,"opsSec":3516231.473884996},{"name":"Using replaceAll()","samples":1524421,"opsSec":3048841.2621804145},{"name":"Using replaceAll(//g)","samples":1556915,"opsSec":3113466.44052374}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,203,001|11106961|
|{ ...object, __proto__: null }|22,047,348|11024207|
|{ ...object, newProp: true }|829,039|415175|
|structuredClone|264,459|132296|
|JSON.parse + JSON.stringify|202,614|101310|
|loop + object.keys starting with {}|1,537,313|768670|
|loop + object.keys starting with { __proto__: null }|773,980|386993|
|loop + object.keys starting with { randomProp: true }|577,271|288951|
|object.keys + reduce(FN, {})|1,552,936|776471|
|object.keys + reduce(FN, { __proto__: null })|821,762|410888|
|object.keys + reduce(FN, { newProp: true })|565,290|282656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:30:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11106961,"opsSec":22203001.808808368},{"name":"{ ...object, __proto__: null }","samples":11024207,"opsSec":22047348.804389864},{"name":"{ ...object, newProp: true }","samples":415175,"opsSec":829039.4014556573},{"name":"structuredClone","samples":132296,"opsSec":264459.243046746},{"name":"JSON.parse + JSON.stringify","samples":101310,"opsSec":202614.0030307383},{"name":"loop + object.keys starting with {}","samples":768670,"opsSec":1537313.266122302},{"name":"loop + object.keys starting with { __proto__: null }","samples":386993,"opsSec":773980.9180412922},{"name":"loop + object.keys starting with { randomProp: true }","samples":288951,"opsSec":577271.1327062488},{"name":"object.keys + reduce(FN, {})","samples":776471,"opsSec":1552936.294512054},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":410888,"opsSec":821762.4606416983},{"name":"object.keys + reduce(FN, { newProp: true })","samples":282656,"opsSec":565290.7235877456}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|273,141|137365|
|Sort using first char|1,381,752|690936|
|Sort using localeCompare|1,254,776|627428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:38:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":137365,"opsSec":273141.13962962135},{"name":"Sort using first char","samples":690936,"opsSec":1381752.8846108292},{"name":"Sort using localeCompare","samples":627428,"opsSec":1254776.6479247853}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|39,565,306|19782805|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,630|3316|
|{ ...bigObject, ...anotherBigObject }|1,126|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,170,032|6085019|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,592,739|14296376|
|{ ...smallObject, ...anotherSmallObject }|20,777,605|10393485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":888,"opsSec":1775.8733411615617},{"name":"{...smallObject} - Total keys: 2","samples":19782805,"opsSec":39565306.85061891},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1075.4815834932708},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3316,"opsSec":6630.117749351665},{"name":"{ ...bigObject, ...anotherBigObject }","samples":564,"opsSec":1126.4943344315648},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6085019,"opsSec":12170032.645185636},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14296376,"opsSec":28592739.362009205},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10393485,"opsSec":20777605.699332155}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,309|1156|
|streams.web.Readable reading 1e3 * "some data"|532|267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:44:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1156,"opsSec":2309.5337274565954},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":267,"opsSec":532.3006450949524}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,872|2937|
|streams.web.WritableStream writing 1e3 * "some data"|1,574|795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:47:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2937,"opsSec":5872.412158476469},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":795,"opsSec":1574.939112408177}]}-->

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
