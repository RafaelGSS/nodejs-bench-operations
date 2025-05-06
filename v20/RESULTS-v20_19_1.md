## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|70,373,555|35205350|
|Using dot notation|65,567,148|32790602|
|Using define property (writable)|4,380,990|2190656|
|Using define property initialized (writable)|5,847,392|2923698|
|Using define property (getter)|2,168,420|1084225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":35205350,"opsSec":70373555.00795437},{"name":"Using dot notation","samples":32790602,"opsSec":65567148.763722405},{"name":"Using define property (writable)","samples":2190656,"opsSec":4380990.890891661},{"name":"Using define property initialized (writable)","samples":2923698,"opsSec":5847392.994440001},{"name":"Using define property (getter)","samples":1084225,"opsSec":2168420.257947742}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.137ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.297ms
array.push|1,000,000|36.94ms
new Array(length)|1,000,000|8.365ms
array.push|100,000,000|1,916.961ms
new Array(length)|100,000,000|4,821.271ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.237ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|5.096ms
array.push|100,000,000|2,668.586ms
new Array(length)|100,000,000|4,442.547ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|224|113|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":224.74698476710483},{"name":"Array.from","samples":11,"opsSec":21.376689135205826}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,170|2095|
|new Blob (1024)|537|272|
|text (128)|4,416|2209|
|text (1024)|552|278|
|arrayBuffer (128)|4,462|2234|
|arrayBuffer (1024)|546|275|
|slice (0, 64)|58,316|29753|
|slice (0, 512)|24,695|12350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2095,"opsSec":4170.476390213525},{"name":"new Blob (1024)","samples":272,"opsSec":537.9264797566884},{"name":"text (128)","samples":2209,"opsSec":4416.43505390439},{"name":"text (1024)","samples":278,"opsSec":552.8890514338505},{"name":"arrayBuffer (128)","samples":2234,"opsSec":4462.32641969694},{"name":"arrayBuffer (1024)","samples":275,"opsSec":546.6623421368367},{"name":"slice (0, 64)","samples":29753,"opsSec":58316.47089047497},{"name":"slice (0, 512)","samples":12350,"opsSec":24695.357618502727}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.04 ms|1|
|Gzip|135.54 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:19:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134036983},{"name":"Gzip","samples":1,"totalTime":0.135540509}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,779|3390|
|crypto.verify('RSA-SHA256')|6,602|3345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3390,"opsSec":6779.248981239361},{"name":"crypto.verify('RSA-SHA256')","samples":3345,"opsSec":6602.18838563941}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,202|730320|
|fromUnixToISOString(new Date())|2,099,626|1049867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":730320,"opsSec":1459202.8981889072},{"name":"fromUnixToISOString(new Date())","samples":1049867,"opsSec":2099626.8308473}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,398|9209|
|Intl.DateTimeFormat().format(new Date())|18,013|9007|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,671|9336|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,649|8825|
|Reusing Intl.DateTimeFormat()|484,729|242367|
|Date.toLocaleDateString()|985,578|492790|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,033|10946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9209,"opsSec":18398.649698544446},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9007,"opsSec":18013.372774359996},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9336,"opsSec":18671.94088463516},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8825,"opsSec":17649.407227008873},{"name":"Reusing Intl.DateTimeFormat()","samples":242367,"opsSec":484729.82162893756},{"name":"Date.toLocaleDateString()","samples":492790,"opsSec":985578.9651420865},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10946,"opsSec":21033.558997262335}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,038,354|519178|
|Using brackets {}|1,038,383|519212|
|Using '' + |1,048,051|524026|
|Using date.toString()|1,153,866|577002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":519178,"opsSec":1038354.4424683363},{"name":"Using brackets {}","samples":519212,"opsSec":1038383.6982519033},{"name":"Using '' + ","samples":524026,"opsSec":1048051.1322136626},{"name":"Using date.toString()","samples":577002,"opsSec":1153866.362204851}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,604,501|1802741|
|Using delete property (proto: null)|16,466,847|8233425|
|Using delete property (cached proto: null)|3,639,871|1819978|
|Using undefined assignment|82,512,010|41303319|
|Using undefined assignment (proto: null)|16,754,381|8378058|
|Using undefined property (cached proto: null)|82,764,602|41383034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1802741,"opsSec":3604501.741333437},{"name":"Using delete property (proto: null)","samples":8233425,"opsSec":16466847.299437042},{"name":"Using delete property (cached proto: null)","samples":1819978,"opsSec":3639871.7078509894},{"name":"Using undefined assignment","samples":41303319,"opsSec":82512010.75071077},{"name":"Using undefined assignment (proto: null)","samples":8378058,"opsSec":16754381.75394465},{"name":"Using undefined property (cached proto: null)","samples":41383034,"opsSec":82764602.90099944}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|314,645|157357|
|NodeError|302,159|151113|
|NodeError Range|272,820|136428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:48:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":157357,"opsSec":314645.49349528324},{"name":"NodeError","samples":151113,"opsSec":302159.4107133858},{"name":"NodeError Range","samples":136428,"opsSec":272820.14052072994}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,512,058|34756870|
|using Array.includes (first item)|74,904,902|37454263|
|Using raw comparison|87,510,325|43755174|
|Using raw comparison (first item)|88,876,943|44438508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34756870,"opsSec":69512058.50330481},{"name":"using Array.includes (first item)","samples":37454263,"opsSec":74904902.40044147},{"name":"Using raw comparison","samples":43755174,"opsSec":87510325.24731544},{"name":"Using raw comparison (first item)","samples":44438508,"opsSec":88876943.29866038}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,088,098|20066642|
|Using Object.getOwnPropertyNames()|40,024,354|20013938|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:52:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20066642,"opsSec":40088098.85972266},{"name":"Using Object.getOwnPropertyNames()","samples":20013938,"opsSec":40024354.257068925}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,504,350|46752183|
|Length = 10_000 - Array.at|93,255,382|46627700|
|Length = 1_000_000 - Array.at|93,914,047|46963102|
|Length = 100 - Array[length - 1]|93,495,827|46749347|
|Length = 10_000 - Array[length - 1]|92,919,477|46459746|
|Length = 1_000_000 - Array[length - 1]|92,299,823|46149924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:56:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46752183,"opsSec":93504350.10426047},{"name":"Length = 10_000 - Array.at","samples":46627700,"opsSec":93255382.46798809},{"name":"Length = 1_000_000 - Array.at","samples":46963102,"opsSec":93914047.95346099},{"name":"Length = 100 - Array[length - 1]","samples":46749347,"opsSec":93495827.97888914},{"name":"Length = 10_000 - Array[length - 1]","samples":46459746,"opsSec":92919477.69040042},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46149924,"opsSec":92299823.07904777}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,277,648|50178292|
|~ (small)|99,263,564|49633223|
|Math.floor (long)|101,142,058|50626787|
|~ (long)|101,149,160|50574588|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":50178292,"opsSec":99277648.41588691},{"name":"~ (small)","samples":49633223,"opsSec":99263564.77576882},{"name":"Math.floor (long)","samples":50626787,"opsSec":101142058.81163663},{"name":"~ (long)","samples":50574588,"opsSec":101149160.82762589}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,978,559|15991159|
|Object.create({})|1,914,240|966731|
|new Function with empty prototype|78,208,966|39214013|
|Empty class|78,284,639|39144545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15991159,"opsSec":31978559.623844527},{"name":"Object.create({})","samples":966731,"opsSec":1914240.8132015578},{"name":"new Function with empty prototype","samples":39214013,"opsSec":78208966.43903464},{"name":"Empty class","samples":39144545,"opsSec":78284639.36168301}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,206,464|50127341|
|Using parseInt(x, 10) - big number (10 len)|99,697,320|49906266|
|Using + - small number (2 len)|100,183,586|50375627|
|Using + - big number (10 len)|96,403,082|48361708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50127341,"opsSec":100206464.05238849},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49906266,"opsSec":99697320.38080546},{"name":"Using + - small number (2 len)","samples":50375627,"opsSec":100183586.15020318},{"name":"Using + - big number (10 len)","samples":48361708,"opsSec":96403082.43909875}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|849,054|424618|
|Using ? operator to avoid rejection|951,573|477797|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:12:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":424618,"opsSec":849054.0018784814},{"name":"Using ? operator to avoid rejection","samples":477797,"opsSec":951573.1429098049}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|103,016,533|51516717|
|Raw usage underscore usage|99,500,595|49750310|
|Manipulating private properties using #|101,103,039|50551570|
|Manipulating private properties using underscore(_)|102,319,875|51171964|
|Manipulating private properties using Symbol|98,269,925|49139188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:16:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":51516717,"opsSec":103016533.5195769},{"name":"Raw usage underscore usage","samples":49750310,"opsSec":99500595.72185464},{"name":"Manipulating private properties using #","samples":50551570,"opsSec":101103039.9079905},{"name":"Manipulating private properties using underscore(_)","samples":51171964,"opsSec":102319875.87141865},{"name":"Manipulating private properties using Symbol","samples":49139188,"opsSec":98269925.57256016}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,554,915|3779356|
|Adding property in the object creation - small object|7,554,664|3777639|
|Adding property after the function creation - small class|241,550|120776|
|Adding property in the function creation - small class|245,642|122932|
|Adding property after the class creation - small class|239,582|122207|
|Adding property in the class creation - small class|234,075|117042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3779356,"opsSec":7554915.307531861},{"name":"Adding property in the object creation - small object","samples":3777639,"opsSec":7554664.772751066},{"name":"Adding property after the function creation - small class","samples":120776,"opsSec":241550.25649024866},{"name":"Adding property in the function creation - small class","samples":122932,"opsSec":245642.4158024013},{"name":"Adding property after the class creation - small class","samples":122207,"opsSec":239582.15783225652},{"name":"Adding property in the class creation - small class","samples":117042,"opsSec":234075.99460098465}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,780,596|49890305|
|Getter|53,978,315|26989423|
|Method|101,040,779|50520394|
|DefineProperty (getter)|103,508,260|51770592|
|DefineProperty (getter & enumerable=false)|54,158,850|27081340|
|DefineProperty (getter & configurable=false)|103,659,177|51838145|
|DefineProperty (getter & enumerable=false & configurable=false)|53,994,205|27000125|
|DefineProperty (writable)|101,194,538|50634100|
|DefineProperty (writable & enumerable=false)|102,181,050|51090528|
|DefineProperty (writable & enumerable=false & configurable=false)|101,528,108|50764185|
|DefineProperties (getter)|53,865,025|26948517|
|DefineProperties (getter & enumerable=false)|53,546,217|26782992|
|DefineProperties (getter & enumerable=false & configurable=false)|53,654,059|26827631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49890305,"opsSec":99780596.4298389},{"name":"Getter","samples":26989423,"opsSec":53978315.824981965},{"name":"Method","samples":50520394,"opsSec":101040779.71465607},{"name":"DefineProperty (getter)","samples":51770592,"opsSec":103508260.29958043},{"name":"DefineProperty (getter & enumerable=false)","samples":27081340,"opsSec":54158850.860926434},{"name":"DefineProperty (getter & configurable=false)","samples":51838145,"opsSec":103659177.94290519},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27000125,"opsSec":53994205.78061651},{"name":"DefineProperty (writable)","samples":50634100,"opsSec":101194538.67379765},{"name":"DefineProperty (writable & enumerable=false)","samples":51090528,"opsSec":102181050.68658535},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50764185,"opsSec":101528108.26053691},{"name":"DefineProperties (getter)","samples":26948517,"opsSec":53865025.139730915},{"name":"DefineProperties (getter & enumerable=false)","samples":26782992,"opsSec":53546217.520894594},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26827631,"opsSec":53654059.07599551}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,696,245|50916601|
|Setter|11,890,780|5946149|
|Method|101,004,790|50511848|
|DefineProperty (setter)|103,901,803|51951397|
|DefineProperty (setter & enumerable=false)|11,668,823|5834491|
|DefineProperty (setter & configurable=false)|11,571,407|5786080|
|DefineProperty (setter & enumerable=false & configurable=false)|11,841,074|5921124|
|DefineProperty (writable)|103,230,130|51615237|
|DefineProperty (writable & enumerable=false)|104,462,167|52231637|
|DefineProperty (writable & enumerable=false & configurable=false)|104,040,791|52020425|
|DefineProperties (setter)|95,072,683|47536346|
|DefineProperties (setter & enumerable=false)|11,412,988|5706831|
|DefineProperties (setter & enumerable=false & configurable=false)|11,689,643|5848327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":50916601,"opsSec":101696245.22584447},{"name":"Setter","samples":5946149,"opsSec":11890780.355921611},{"name":"Method","samples":50511848,"opsSec":101004790.12539391},{"name":"DefineProperty (setter)","samples":51951397,"opsSec":103901803.19240475},{"name":"DefineProperty (setter & enumerable=false)","samples":5834491,"opsSec":11668823.794087},{"name":"DefineProperty (setter & configurable=false)","samples":5786080,"opsSec":11571407.372521678},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5921124,"opsSec":11841074.146955514},{"name":"DefineProperty (writable)","samples":51615237,"opsSec":103230130.24366629},{"name":"DefineProperty (writable & enumerable=false)","samples":52231637,"opsSec":104462167.32779934},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52020425,"opsSec":104040791.11291224},{"name":"DefineProperties (setter)","samples":47536346,"opsSec":95072683.82374918},{"name":"DefineProperties (setter & enumerable=false)","samples":5706831,"opsSec":11412988.930390818},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5848327,"opsSec":11689643.837487096}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,429,865|1715107|
|Using replaceAll()|2,921,604|1460804|
|Using replaceAll(//g)|3,031,082|1515564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1715107,"opsSec":3429865.6628432814},{"name":"Using replaceAll()","samples":1460804,"opsSec":2921604.236973743},{"name":"Using replaceAll(//g)","samples":1515564,"opsSec":3031082.4367688103}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,584,590|10292427|
|{ ...object, __proto__: null }|20,648,301|10327161|
|{ ...object, newProp: true }|801,231|400618|
|structuredClone|283,944|141978|
|JSON.parse + JSON.stringify|191,082|95543|
|loop + object.keys starting with {}|1,501,471|750839|
|loop + object.keys starting with { __proto__: null }|739,455|369905|
|loop + object.keys starting with { randomProp: true }|518,453|259297|
|object.keys + reduce(FN, {})|1,515,383|757696|
|object.keys + reduce(FN, { __proto__: null })|754,239|377258|
|object.keys + reduce(FN, { newProp: true })|501,494|250748|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:42:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10292427,"opsSec":20584590.311398108},{"name":"{ ...object, __proto__: null }","samples":10327161,"opsSec":20648301.079295088},{"name":"{ ...object, newProp: true }","samples":400618,"opsSec":801231.0515970252},{"name":"structuredClone","samples":141978,"opsSec":283944.5774775372},{"name":"JSON.parse + JSON.stringify","samples":95543,"opsSec":191082.93579404158},{"name":"loop + object.keys starting with {}","samples":750839,"opsSec":1501471.724811502},{"name":"loop + object.keys starting with { __proto__: null }","samples":369905,"opsSec":739455.8435393836},{"name":"loop + object.keys starting with { randomProp: true }","samples":259297,"opsSec":518453.91686238727},{"name":"object.keys + reduce(FN, {})","samples":757696,"opsSec":1515383.3077613465},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":377258,"opsSec":754239.743100815},{"name":"object.keys + reduce(FN, { newProp: true })","samples":250748,"opsSec":501494.73121833004}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|255,349|127688|
|Sort using first char|1,324,746|662929|
|Sort using localeCompare|1,146,839|573426|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:46:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":127688,"opsSec":255349.23122939173},{"name":"Sort using first char","samples":662929,"opsSec":1324746.5164767317},{"name":"Sort using localeCompare","samples":573426,"opsSec":1146839.7288149016}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,743|873|
|{...smallObject} - Total keys: 2|39,371,466|19695681|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,054|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,587|3294|
|{ ...bigObject, ...anotherBigObject }|1,106|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,258,776|6129390|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,602,889|14302242|
|{ ...smallObject, ...anotherSmallObject }|20,331,231|10169831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:53:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":873,"opsSec":1743.466022074992},{"name":"{...smallObject} - Total keys: 2","samples":19695681,"opsSec":39371466.810391374},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":528,"opsSec":1054.3891169597782},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3294,"opsSec":6587.020022683146},{"name":"{ ...bigObject, ...anotherBigObject }","samples":554,"opsSec":1106.1582575627406},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6129390,"opsSec":12258776.984340863},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14302242,"opsSec":28602889.846537292},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10169831,"opsSec":20331231.08575582}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,916|959|
|streams.web.Readable reading 1e3 * "some data"|1,507|754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:57:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":959,"opsSec":1916.24722399419},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":754,"opsSec":1507.9039073156023}]}-->
