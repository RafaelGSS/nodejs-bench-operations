## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|87,003,730|43706056|
|Using dot notation|90,928,111|45495336|
|Using define property (writable)|4,524,750|2262455|
|Using define property initialized (writable)|6,007,291|3003827|
|Using define property (getter)|2,232,346|1119032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":43706056,"opsSec":87003730.23685756},{"name":"Using dot notation","samples":45495336,"opsSec":90928111.64062902},{"name":"Using define property (writable)","samples":2262455,"opsSec":4524750.249167703},{"name":"Using define property initialized (writable)","samples":3003827,"opsSec":6007291.08753082},{"name":"Using define property (getter)","samples":1119032,"opsSec":2232346.211284573}]}-->

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
|Deflate|163.69 ms|1|
|Gzip|164.26 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:36:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.16368769},{"name":"Gzip","samples":1,"totalTime":0.164261043}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,269|3135|
|crypto.verify('RSA-SHA256')|6,303|3152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3135,"opsSec":6269.264665408864},{"name":"crypto.verify('RSA-SHA256')","samples":3152,"opsSec":6303.493690779768}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,497,816|748920|
|fromUnixToISOString(new Date())|1,964,603|982447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":748920,"opsSec":1497816.804808961},{"name":"fromUnixToISOString(new Date())","samples":982447,"opsSec":1964603.4390805669}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,479|6240|
|Intl.DateTimeFormat().format(new Date())|11,697|5922|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,614|6308|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,496|6249|
|Reusing Intl.DateTimeFormat()|636,235|318119|
|Date.toLocaleDateString()|627,150|313698|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,210|6106|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6240,"opsSec":12479.526401973044},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5922,"opsSec":11697.73112549305},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6308,"opsSec":12614.196321296411},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6249,"opsSec":12496.72330975323},{"name":"Reusing Intl.DateTimeFormat()","samples":318119,"opsSec":636235.7095514456},{"name":"Date.toLocaleDateString()","samples":313698,"opsSec":627150.3790626416},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6106,"opsSec":12210.632775448132}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,074,759|537380|
|Using brackets {}|1,037,194|518603|
|Using '' + |1,085,269|542673|
|Using date.toString()|1,171,613|585807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":537380,"opsSec":1074759.4067328076},{"name":"Using brackets {}","samples":518603,"opsSec":1037194.8978658133},{"name":"Using '' + ","samples":542673,"opsSec":1085269.8856818376},{"name":"Using date.toString()","samples":585807,"opsSec":1171613.1142604856}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,686,735|1845348|
|Using delete property (proto: null)|17,721,321|8861541|
|Using delete property (cached proto: null)|3,701,310|1850855|
|Using undefined assignment|84,922,224|42468086|
|Using undefined assignment (proto: null)|17,652,571|8826574|
|Using undefined property (cached proto: null)|84,956,696|42478360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1845348,"opsSec":3686735.7674264032},{"name":"Using delete property (proto: null)","samples":8861541,"opsSec":17721321.493037596},{"name":"Using delete property (cached proto: null)","samples":1850855,"opsSec":3701310.295501189},{"name":"Using undefined assignment","samples":42468086,"opsSec":84922224.03423572},{"name":"Using undefined assignment (proto: null)","samples":8826574,"opsSec":17652571.184583973},{"name":"Using undefined property (cached proto: null)","samples":42478360,"opsSec":84956696.55195175}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|314,776|157389|
|NodeError|306,084|153043|
|NodeError Range|272,666|136381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:02:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":157389,"opsSec":314776.1837414198},{"name":"NodeError","samples":153043,"opsSec":306084.7542350503},{"name":"NodeError Range","samples":136381,"opsSec":272666.198185935}]}-->

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
|using Array.includes|73,577,104|36799381|
|using Array.includes (first item)|80,633,340|40318608|
|Using raw comparison|98,415,954|49207985|
|Using raw comparison (first item)|100,563,892|50294782|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:06:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36799381,"opsSec":73577104.72637801},{"name":"using Array.includes (first item)","samples":40318608,"opsSec":80633340.92290193},{"name":"Using raw comparison","samples":49207985,"opsSec":98415954.25344732},{"name":"Using raw comparison (first item)","samples":50294782,"opsSec":100563892.45179047}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,393,913|21199273|
|Using Object.getOwnPropertyNames()|42,322,903|21164425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21199273,"opsSec":42393913.19316625},{"name":"Using Object.getOwnPropertyNames()","samples":21164425,"opsSec":42322903.632039696}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,836,510|49958316|
|Length = 10_000 - Array.at|98,393,671|49197290|
|Length = 1_000_000 - Array.at|99,126,576|49563823|
|Length = 100 - Array[length - 1]|99,251,327|49625671|
|Length = 10_000 - Array[length - 1]|97,463,816|48732157|
|Length = 1_000_000 - Array[length - 1]|96,876,358|48445156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49958316,"opsSec":99836510.60449062},{"name":"Length = 10_000 - Array.at","samples":49197290,"opsSec":98393671.03926693},{"name":"Length = 1_000_000 - Array.at","samples":49563823,"opsSec":99126576.4242404},{"name":"Length = 100 - Array[length - 1]","samples":49625671,"opsSec":99251327.70780882},{"name":"Length = 10_000 - Array[length - 1]","samples":48732157,"opsSec":97463816.15482707},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48445156,"opsSec":96876358.70430312}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,583,676|50192591|
|~ (small)|97,723,485|48861753|
|Math.floor (long)|100,458,066|50314423|
|~ (long)|100,429,908|50214962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50192591,"opsSec":99583676.80223659},{"name":"~ (small)","samples":48861753,"opsSec":97723485.67351499},{"name":"Math.floor (long)","samples":50314423,"opsSec":100458066.48331383},{"name":"~ (long)","samples":50214962,"opsSec":100429908.93551366}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,335,465|13668047|
|Object.create({})|1,880,255|943237|
|new Function with empty prototype|78,518,050|39261926|
|Empty class|78,736,580|39392833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13668047,"opsSec":27335465.229628786},{"name":"Object.create({})","samples":943237,"opsSec":1880255.858497527},{"name":"new Function with empty prototype","samples":39261926,"opsSec":78518050.92936124},{"name":"Empty class","samples":39392833,"opsSec":78736580.35602076}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|98,081,462|49040739|
|Using parseInt(x, 10) - big number (10 len)|91,796,587|45911927|
|Using + - small number (2 len)|98,310,241|49193967|
|Using + - big number (10 len)|98,158,143|49079079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49040739,"opsSec":98081462.30696604},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45911927,"opsSec":91796587.65956748},{"name":"Using + - small number (2 len)","samples":49193967,"opsSec":98310241.3824403},{"name":"Using + - big number (10 len)","samples":49079079,"opsSec":98158143.27627851}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|887,527|443773|
|Using ? operator to avoid rejection|1,010,237|505842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:36:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":443773,"opsSec":887527.9760818616},{"name":"Using ? operator to avoid rejection","samples":505842,"opsSec":1010237.5237292491}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,259,852|49129948|
|Raw usage underscore usage|100,722,613|50361416|
|Manipulating private properties using #|100,029,046|50014587|
|Manipulating private properties using underscore(_)|101,446,961|50723627|
|Manipulating private properties using Symbol|101,327,542|50664221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:39:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49129948,"opsSec":98259852.17610593},{"name":"Raw usage underscore usage","samples":50361416,"opsSec":100722613.02903928},{"name":"Manipulating private properties using #","samples":50014587,"opsSec":100029046.162879},{"name":"Manipulating private properties using underscore(_)","samples":50723627,"opsSec":101446961.2240699},{"name":"Manipulating private properties using Symbol","samples":50664221,"opsSec":101327542.00877188}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,686,479|3843241|
|Adding property in the object creation - small object|7,715,122|3857635|
|Adding property after the function creation - small class|242,546|122453|
|Adding property in the function creation - small class|246,484|123683|
|Adding property after the class creation - small class|209,053|104544|
|Adding property in the class creation - small class|206,221|106957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3843241,"opsSec":7686479.217494523},{"name":"Adding property in the object creation - small object","samples":3857635,"opsSec":7715122.594867702},{"name":"Adding property after the function creation - small class","samples":122453,"opsSec":242546.02379285122},{"name":"Adding property in the function creation - small class","samples":123683,"opsSec":246484.25434178568},{"name":"Adding property after the class creation - small class","samples":104544,"opsSec":209053.22483226203},{"name":"Adding property in the class creation - small class","samples":106957,"opsSec":206221.22449002412}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,166,394|49083283|
|Getter|50,647,232|25324052|
|Method|92,487,503|46243770|
|DefineProperty (getter)|99,188,262|49594361|
|DefineProperty (getter & enumerable=false)|52,175,014|26087514|
|DefineProperty (getter & configurable=false)|101,467,627|50734064|
|DefineProperty (getter & enumerable=false & configurable=false)|51,390,931|25695471|
|DefineProperty (writable)|102,813,243|51406629|
|DefineProperty (writable & enumerable=false)|102,589,581|51294798|
|DefineProperty (writable & enumerable=false & configurable=false)|100,817,379|50408706|
|DefineProperties (getter)|52,824,905|26474245|
|DefineProperties (getter & enumerable=false)|53,152,390|26576202|
|DefineProperties (getter & enumerable=false & configurable=false)|52,613,016|26306575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49083283,"opsSec":98166394.20881014},{"name":"Getter","samples":25324052,"opsSec":50647232.5637165},{"name":"Method","samples":46243770,"opsSec":92487503.18997373},{"name":"DefineProperty (getter)","samples":49594361,"opsSec":99188262.95671904},{"name":"DefineProperty (getter & enumerable=false)","samples":26087514,"opsSec":52175014.747546256},{"name":"DefineProperty (getter & configurable=false)","samples":50734064,"opsSec":101467627.15579236},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25695471,"opsSec":51390931.41346813},{"name":"DefineProperty (writable)","samples":51406629,"opsSec":102813243.40051945},{"name":"DefineProperty (writable & enumerable=false)","samples":51294798,"opsSec":102589581.8426377},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50408706,"opsSec":100817379.13353439},{"name":"DefineProperties (getter)","samples":26474245,"opsSec":52824905.81589428},{"name":"DefineProperties (getter & enumerable=false)","samples":26576202,"opsSec":53152390.81820707},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26306575,"opsSec":52613016.468164206}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,516,853|51760321|
|Setter|11,012,237|5507220|
|Method|88,570,296|44285155|
|DefineProperty (setter)|102,039,317|51025033|
|DefineProperty (setter & enumerable=false)|10,818,430|5409218|
|DefineProperty (setter & configurable=false)|11,164,610|5582800|
|DefineProperty (setter & enumerable=false & configurable=false)|11,177,473|5588740|
|DefineProperty (writable)|103,048,486|51524260|
|DefineProperty (writable & enumerable=false)|100,843,442|50426429|
|DefineProperty (writable & enumerable=false & configurable=false)|102,307,188|51153602|
|DefineProperties (setter)|97,247,550|48623781|
|DefineProperties (setter & enumerable=false)|11,119,871|5560013|
|DefineProperties (setter & enumerable=false & configurable=false)|11,075,410|5537708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:59:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51760321,"opsSec":103516853.49019596},{"name":"Setter","samples":5507220,"opsSec":11012237.310268724},{"name":"Method","samples":44285155,"opsSec":88570296.7144555},{"name":"DefineProperty (setter)","samples":51025033,"opsSec":102039317.58644271},{"name":"DefineProperty (setter & enumerable=false)","samples":5409218,"opsSec":10818430.958611174},{"name":"DefineProperty (setter & configurable=false)","samples":5582800,"opsSec":11164610.681518288},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5588740,"opsSec":11177473.762969641},{"name":"DefineProperty (writable)","samples":51524260,"opsSec":103048486.81838724},{"name":"DefineProperty (writable & enumerable=false)","samples":50426429,"opsSec":100843442.24779731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51153602,"opsSec":102307188.85853605},{"name":"DefineProperties (setter)","samples":48623781,"opsSec":97247550.52478904},{"name":"DefineProperties (setter & enumerable=false)","samples":5560013,"opsSec":11119871.900815198},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5537708,"opsSec":11075410.883160172}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,478,965|1740125|
|Using replaceAll()|3,062,786|1531394|
|Using replaceAll(//g)|3,139,375|1569886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1740125,"opsSec":3478965.357252181},{"name":"Using replaceAll()","samples":1531394,"opsSec":3062786.768759719},{"name":"Using replaceAll(//g)","samples":1569886,"opsSec":3139375.2143666563}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,466,180|10233339|
|{ ...object, __proto__: null }|20,127,953|10064188|
|{ ...object, newProp: true }|756,023|379568|
|structuredClone|259,390|129699|
|JSON.parse + JSON.stringify|198,039|99021|
|loop + object.keys starting with {}|1,494,357|747220|
|loop + object.keys starting with { __proto__: null }|717,402|358704|
|loop + object.keys starting with { randomProp: true }|553,702|277251|
|object.keys + reduce(FN, {})|1,504,843|752493|
|object.keys + reduce(FN, { __proto__: null })|749,118|374616|
|object.keys + reduce(FN, { newProp: true })|544,429|272438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:11:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10233339,"opsSec":20466180.753672406},{"name":"{ ...object, __proto__: null }","samples":10064188,"opsSec":20127953.312980425},{"name":"{ ...object, newProp: true }","samples":379568,"opsSec":756023.5086725816},{"name":"structuredClone","samples":129699,"opsSec":259390.71423361858},{"name":"JSON.parse + JSON.stringify","samples":99021,"opsSec":198039.0904096837},{"name":"loop + object.keys starting with {}","samples":747220,"opsSec":1494357.6011218743},{"name":"loop + object.keys starting with { __proto__: null }","samples":358704,"opsSec":717402.2263468824},{"name":"loop + object.keys starting with { randomProp: true }","samples":277251,"opsSec":553702.3320180529},{"name":"object.keys + reduce(FN, {})","samples":752493,"opsSec":1504843.0218548074},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":374616,"opsSec":749118.0576451961},{"name":"object.keys + reduce(FN, { newProp: true })","samples":272438,"opsSec":544429.3338416363}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,058|130632|
|Sort using first char|1,349,789|675316|
|Sort using localeCompare|1,212,737|606370|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:13:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":130632,"opsSec":261058.8896851988},{"name":"Sort using first char","samples":675316,"opsSec":1349789.3346171344},{"name":"Sort using localeCompare","samples":606370,"opsSec":1212737.581801262}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,665|833|
|{...smallObject} - Total keys: 2|37,735,451|18874592|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,034|518|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,510|3256|
|{ ...bigObject, ...anotherBigObject }|1,082|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,087,700|6043915|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,764,131|14382314|
|{ ...smallObject, ...anotherSmallObject }|19,565,040|9784146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":833,"opsSec":1665.4961141436427},{"name":"{...smallObject} - Total keys: 2","samples":18874592,"opsSec":37735451.465444505},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":518,"opsSec":1034.1499285291598},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3256,"opsSec":6510.495164147759},{"name":"{ ...bigObject, ...anotherBigObject }","samples":542,"opsSec":1082.5010456470777},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6043915,"opsSec":12087700.153924948},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14382314,"opsSec":28764131.416035235},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9784146,"opsSec":19565040.564168803}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,115|1058|
|streams.web.Readable reading 1e3 * "some data"|523|262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:25:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1058,"opsSec":2115.1820886988494},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":262,"opsSec":523.8125348271609}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,096|3054|
|streams.web.WritableStream writing 1e3 * "some data"|1,410|717|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:27:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3054,"opsSec":6096.349485965952},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":717,"opsSec":1410.8015884791605}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,259,173|48157615|
|Using backtick (`)|90,829,397|45422170|
|Using array.join|10,657,039|5329169|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48157615,"opsSec":96259173.27792327},{"name":"Using backtick (`)","samples":45422170,"opsSec":90829397.47416273},{"name":"Using array.join","samples":5329169,"opsSec":10657039.908596894}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,969,723|27491356|
|(short string) (true) String#slice and strict comparison|63,184,074|31663164|
|(long string) (true) String#endsWith|51,061,487|25534987|
|(long string) (true) String#slice and strict comparison|57,814,785|28954709|
|(short string) (false) String#endsWith|59,608,258|29804146|
|(short string) (false) String#slice and strict comparison|62,693,899|31346958|
|(long string) (false) String#endsWith|54,789,713|27407393|
|(long string) (false) String#slice and strict comparison|57,735,789|28884430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27491356,"opsSec":54969723.86358496},{"name":"(short string) (true) String#slice and strict comparison","samples":31663164,"opsSec":63184074.994453035},{"name":"(long string) (true) String#endsWith","samples":25534987,"opsSec":51061487.17234006},{"name":"(long string) (true) String#slice and strict comparison","samples":28954709,"opsSec":57814785.256308064},{"name":"(short string) (false) String#endsWith","samples":29804146,"opsSec":59608258.14250938},{"name":"(short string) (false) String#slice and strict comparison","samples":31346958,"opsSec":62693899.44881054},{"name":"(long string) (false) String#endsWith","samples":27407393,"opsSec":54789713.8981819},{"name":"(long string) (false) String#slice and strict comparison","samples":28884430,"opsSec":57735789.97874439}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,905,838|7453820|
|Using indexof|15,131,734|7565869|
|Using RegExp.test|12,710,845|6356166|
|Using RegExp.text with cached regex pattern|13,424,633|6712393|
|Using new RegExp.test|4,329,059|2164559|
|Using new RegExp.test with cached regex pattern|5,101,433|2551071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7453820,"opsSec":14905838.539977415},{"name":"Using indexof","samples":7565869,"opsSec":15131734.822335687},{"name":"Using RegExp.test","samples":6356166,"opsSec":12710845.64455371},{"name":"Using RegExp.text with cached regex pattern","samples":6712393,"opsSec":13424633.25452283},{"name":"Using new RegExp.test","samples":2164559,"opsSec":4329059.488431954},{"name":"Using new RegExp.test with cached regex pattern","samples":2551071,"opsSec":5101433.074251404}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,391,003|43712074|
|(short string) (true) String#slice and strict comparison|63,766,400|31883216|
|(long string) (true) String#startsWith|66,514,422|33265149|
|(long string) (true) String#slice and strict comparison|57,759,744|28879884|
|(short string) (false) String#startsWith|99,170,657|49585348|
|(short string) (false) String#slice and strict comparison|62,938,176|31470079|
|(long string) (false) String#startsWith|90,901,939|45451027|
|(long string) (false) String#slice and strict comparison|58,315,624|29173637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43712074,"opsSec":87391003.0394952},{"name":"(short string) (true) String#slice and strict comparison","samples":31883216,"opsSec":63766400.88199637},{"name":"(long string) (true) String#startsWith","samples":33265149,"opsSec":66514422.33767644},{"name":"(long string) (true) String#slice and strict comparison","samples":28879884,"opsSec":57759744.7805826},{"name":"(short string) (false) String#startsWith","samples":49585348,"opsSec":99170657.91846736},{"name":"(short string) (false) String#slice and strict comparison","samples":31470079,"opsSec":62938176.706197284},{"name":"(long string) (false) String#startsWith","samples":45451027,"opsSec":90901939.64535993},{"name":"(long string) (false) String#slice and strict comparison","samples":29173637,"opsSec":58315624.710894406}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|95,191,080|47598844|
|Using this|91,965,647|45982854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:51:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":47598844,"opsSec":95191080.78708257},{"name":"Using this","samples":45982854,"opsSec":91965647.67053512}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,861,356|5430680|
|Date.now()|20,122,789|10070716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5430680,"opsSec":10861356.024743695},{"name":"Date.now()","samples":10070716,"opsSec":20122789.241906837}]}-->
