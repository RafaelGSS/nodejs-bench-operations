## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,929,195|36018614|
|Using dot notation|63,356,307|31684119|
|Using define property (writable)|4,497,471|2248738|
|Using define property initialized (writable)|5,963,578|2983463|
|Using define property (getter)|2,164,033|1082177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":36018614,"opsSec":71929195.81450549},{"name":"Using dot notation","samples":31684119,"opsSec":63356307.500447206},{"name":"Using define property (writable)","samples":2248738,"opsSec":4497471.808356274},{"name":"Using define property initialized (writable)","samples":2983463,"opsSec":5963578.440659591},{"name":"Using define property (getter)","samples":1082177,"opsSec":2164033.1344790845}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.035ms
new Array(length)|100|0.012ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.283ms
new Array(length)|10,000|0.336ms
array.push|1,000,000|29.813ms
new Array(length)|1,000,000|13.12ms
array.push|10,000,000|260.026ms
new Array(length)|10,000,000|70.422ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.021ms
array.push|100|0.02ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.229ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|28.201ms
new Array(length)|1,000,000|10.01ms
array.push|10,000,000|229.41ms
new Array(length)|10,000,000|69.876ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|229|115|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:22:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":115,"opsSec":229.10551296815},{"name":"Array.from","samples":12,"opsSec":22.5843907825016}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,200|2101|
|new Blob (1024)|543|275|
|text (128)|4,337|2180|
|text (1024)|518|260|
|arrayBuffer (128)|4,506|2262|
|arrayBuffer (1024)|555|280|
|slice (0, 64)|68,109|34352|
|slice (0, 512)|23,782|11892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2101,"opsSec":4200.960934322505},{"name":"new Blob (1024)","samples":275,"opsSec":543.842812894252},{"name":"text (128)","samples":2180,"opsSec":4337.475921288342},{"name":"text (1024)","samples":260,"opsSec":518.4826873764924},{"name":"arrayBuffer (128)","samples":2262,"opsSec":4506.141979091183},{"name":"arrayBuffer (1024)","samples":280,"opsSec":555.9987792490803},{"name":"slice (0, 64)","samples":34352,"opsSec":68109.25432609604},{"name":"slice (0, 512)","samples":11892,"opsSec":23782.16563400032}]}-->

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
|Sort using default|258,337|129169|
|Sort using first char|1,325,846|663550|
|Sort using localeCompare|1,211,550|605873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":129169,"opsSec":258337.71531183776},{"name":"Sort using first char","samples":663550,"opsSec":1325846.4148664365},{"name":"Sort using localeCompare","samples":605873,"opsSec":1211550.1214225688}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,697|850|
|{...smallObject} - Total keys: 2|37,243,605|18645783|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,039|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,588|3295|
|{ ...bigObject, ...anotherBigObject }|1,092|547|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,104,457|6054717|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,705,863|14355307|
|{ ...smallObject, ...anotherSmallObject }|20,036,837|10021574|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":850,"opsSec":1697.786493880738},{"name":"{...smallObject} - Total keys: 2","samples":18645783,"opsSec":37243605.844522566},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1039.804254769431},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3295,"opsSec":6588.7003129762625},{"name":"{ ...bigObject, ...anotherBigObject }","samples":547,"opsSec":1092.7794003787178},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6054717,"opsSec":12104457.32499757},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14355307,"opsSec":28705863.007437088},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10021574,"opsSec":20036837.558305714}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,116|1066|
|streams.web.Readable reading 1e3 * "some data"|519|261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1066,"opsSec":2116.493775035419},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":261,"opsSec":519.7639846935998}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,137|3074|
|streams.web.WritableStream writing 1e3 * "some data"|1,570|797|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:58:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3074,"opsSec":6137.21302572075},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":797,"opsSec":1570.4342768210845}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,838,126|50457492|
|Using backtick (`)|100,458,899|50251238|
|Using array.join|10,765,516|5384352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:07:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":50457492,"opsSec":100838126.99469094},{"name":"Using backtick (`)","samples":50251238,"opsSec":100458899.94297172},{"name":"Using array.join","samples":5384352,"opsSec":10765516.567385761}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,723,838|27373715|
|(short string) (true) String#slice and strict comparison|61,211,158|30618463|
|(long string) (true) String#endsWith|51,091,884|25545970|
|(long string) (true) String#slice and strict comparison|57,301,626|28652449|
|(short string) (false) String#endsWith|59,785,847|29898605|
|(short string) (false) String#slice and strict comparison|62,691,140|31345578|
|(long string) (false) String#endsWith|54,760,897|27380566|
|(long string) (false) String#slice and strict comparison|57,821,920|28927726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27373715,"opsSec":54723838.4437992},{"name":"(short string) (true) String#slice and strict comparison","samples":30618463,"opsSec":61211158.6730673},{"name":"(long string) (true) String#endsWith","samples":25545970,"opsSec":51091884.51421342},{"name":"(long string) (true) String#slice and strict comparison","samples":28652449,"opsSec":57301626.53553783},{"name":"(short string) (false) String#endsWith","samples":29898605,"opsSec":59785847.10189981},{"name":"(short string) (false) String#slice and strict comparison","samples":31345578,"opsSec":62691140.954126164},{"name":"(long string) (false) String#endsWith","samples":27380566,"opsSec":54760897.623358175},{"name":"(long string) (false) String#slice and strict comparison","samples":28927726,"opsSec":57821920.72124223}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,027,636|7513821|
|Using indexof|15,047,849|7523926|
|Using RegExp.test|12,650,658|6325331|
|Using RegExp.text with cached regex pattern|13,482,026|6741015|
|Using new RegExp.test|4,245,238|2122624|
|Using new RegExp.test with cached regex pattern|5,088,793|2544527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7513821,"opsSec":15027636.139221905},{"name":"Using indexof","samples":7523926,"opsSec":15047849.201100048},{"name":"Using RegExp.test","samples":6325331,"opsSec":12650658.533719562},{"name":"Using RegExp.text with cached regex pattern","samples":6741015,"opsSec":13482026.440745018},{"name":"Using new RegExp.test","samples":2122624,"opsSec":4245238.762360454},{"name":"Using new RegExp.test with cached regex pattern","samples":2544527,"opsSec":5088793.4028898375}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,771,871|44393296|
|(short string) (true) String#slice and strict comparison|63,419,926|31790734|
|(long string) (true) String#startsWith|66,165,767|33082940|
|(long string) (true) String#slice and strict comparison|57,771,785|28890825|
|(short string) (false) String#startsWith|89,429,278|44714649|
|(short string) (false) String#slice and strict comparison|63,409,829|31705550|
|(long string) (false) String#startsWith|92,475,067|46237549|
|(long string) (false) String#slice and strict comparison|57,562,781|28781442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44393296,"opsSec":88771871.84821013},{"name":"(short string) (true) String#slice and strict comparison","samples":31790734,"opsSec":63419926.032807745},{"name":"(long string) (true) String#startsWith","samples":33082940,"opsSec":66165767.1212013},{"name":"(long string) (true) String#slice and strict comparison","samples":28890825,"opsSec":57771785.58315525},{"name":"(short string) (false) String#startsWith","samples":44714649,"opsSec":89429278.50441729},{"name":"(short string) (false) String#slice and strict comparison","samples":31705550,"opsSec":63409829.90110709},{"name":"(long string) (false) String#startsWith","samples":46237549,"opsSec":92475067.85312787},{"name":"(long string) (false) String#slice and strict comparison","samples":28781442,"opsSec":57562781.30799815}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|95,596,369|47798196|
|Using this|100,561,145|50280612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:25:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":47798196,"opsSec":95596369.82164219},{"name":"Using this","samples":50280612,"opsSec":100561145.7634286}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,232,626|5116314|
|Date.now()|19,747,052|9874274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5116314,"opsSec":10232626.9358068},{"name":"Date.now()","samples":9874274,"opsSec":19747052.51621884}]}-->
