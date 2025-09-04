## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,664,198|44836868|
|Using dot notation|64,241,064|32161724|
|Using define property (writable)|4,914,654|2457330|
|Using define property initialized (writable)|7,186,657|3594650|
|Using define property (getter)|2,499,599|1249833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44836868,"opsSec":89664198.59852347},{"name":"Using dot notation","samples":32161724,"opsSec":64241064.23137266},{"name":"Using define property (writable)","samples":2457330,"opsSec":4914654.9870519135},{"name":"Using define property initialized (writable)","samples":3594650,"opsSec":7186657.609730054},{"name":"Using define property (getter)","samples":1249833,"opsSec":2499599.5706418105}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.317ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|30.832ms
new Array(length)|1,000,000|7.301ms
array.push|10,000,000|254.068ms
new Array(length)|10,000,000|66.034ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.473ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|20.658ms
new Array(length)|1,000,000|12.57ms
array.push|10,000,000|226.256ms
new Array(length)|10,000,000|64.605ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|280|142|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:21:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":142,"opsSec":280.6514010724702},{"name":"Array.from","samples":11,"opsSec":21.331462163328684}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,401|2201|
|new Blob (1024)|578|294|
|text (128)|4,087|2044|
|text (1024)|513|257|
|arrayBuffer (128)|4,097|2049|
|arrayBuffer (1024)|508|255|
|slice (0, 64)|154,546|81404|
|slice (0, 512)|31,544|15783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2201,"opsSec":4401.478169551174},{"name":"new Blob (1024)","samples":294,"opsSec":578.4967310664838},{"name":"text (128)","samples":2044,"opsSec":4087.1088467870463},{"name":"text (1024)","samples":257,"opsSec":513.5538490665158},{"name":"arrayBuffer (128)","samples":2049,"opsSec":4097.702982097046},{"name":"arrayBuffer (1024)","samples":255,"opsSec":508.6528857320388},{"name":"slice (0, 64)","samples":81404,"opsSec":154546.70613276638},{"name":"slice (0, 512)","samples":15783,"opsSec":31544.92508790817}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.30 ms|1|
|Gzip|137.10 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:30:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133295568},{"name":"Gzip","samples":1,"totalTime":0.137104927}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,899|3451|
|crypto.verify('RSA-SHA256')|6,617|3309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3451,"opsSec":6899.313572878247},{"name":"crypto.verify('RSA-SHA256')","samples":3309,"opsSec":6617.855598390844}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,496,695|748378|
|fromUnixToISOString(new Date())|2,230,017|1115178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":748378,"opsSec":1496695.2581196446},{"name":"fromUnixToISOString(new Date())","samples":1115178,"opsSec":2230017.857932166}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,745|10376|
|Intl.DateTimeFormat().format(new Date())|20,073|10037|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,493|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,816|9409|
|Reusing Intl.DateTimeFormat()|496,743|248375|
|Date.toLocaleDateString()|1,025,686|512845|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,602|12302|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10376,"opsSec":20745.689742059774},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10037,"opsSec":20073.676492629642},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9748,"opsSec":19493.820473908094},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9409,"opsSec":18816.88001930125},{"name":"Reusing Intl.DateTimeFormat()","samples":248375,"opsSec":496743.05751902814},{"name":"Date.toLocaleDateString()","samples":512845,"opsSec":1025686.9865316337},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12302,"opsSec":24602.339145288977}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,052,216|526119|
|Using brackets {}|1,084,478|542240|
|Using '' + |1,074,003|537939|
|Using date.toString()|1,189,274|594639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":526119,"opsSec":1052216.4169368558},{"name":"Using brackets {}","samples":542240,"opsSec":1084478.156387134},{"name":"Using '' + ","samples":537939,"opsSec":1074003.4344055885},{"name":"Using date.toString()","samples":594639,"opsSec":1189274.9031281522}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,986,477|1994757|
|Using delete property (proto: null)|17,549,199|8775059|
|Using delete property (cached proto: null)|4,091,760|2045884|
|Using undefined assignment|71,271,738|35636874|
|Using undefined assignment (proto: null)|19,351,063|9676723|
|Using undefined property (cached proto: null)|72,086,829|36053985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1994757,"opsSec":3986477.5638232767},{"name":"Using delete property (proto: null)","samples":8775059,"opsSec":17549199.720575422},{"name":"Using delete property (cached proto: null)","samples":2045884,"opsSec":4091760.823051517},{"name":"Using undefined assignment","samples":35636874,"opsSec":71271738.13698454},{"name":"Using undefined assignment (proto: null)","samples":9676723,"opsSec":19351063.148785986},{"name":"Using undefined property (cached proto: null)","samples":36053985,"opsSec":72086829.3838939}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|338,708|169355|
|NodeError|309,085|155542|
|NodeError Range|300,061|150104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:05:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":169355,"opsSec":338708.2062013399},{"name":"NodeError","samples":155542,"opsSec":309085.54313109297},{"name":"NodeError Range","samples":150104,"opsSec":300061.61794030404}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,977,798|34489583|
|using Array.includes (first item)|76,145,375|38072705|
|Using raw comparison|94,198,153|47099089|
|Using raw comparison (first item)|95,222,854|47615158|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34489583,"opsSec":68977798.72207373},{"name":"using Array.includes (first item)","samples":38072705,"opsSec":76145375.58229023},{"name":"Using raw comparison","samples":47099089,"opsSec":94198153.88527259},{"name":"Using raw comparison (first item)","samples":47615158,"opsSec":95222854.33713414}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,855,420|21031268|
|Using Object.getOwnPropertyNames()|43,104,518|21555452|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:15:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21031268,"opsSec":41855420.14574591},{"name":"Using Object.getOwnPropertyNames()","samples":21555452,"opsSec":43104518.15184484}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,096,041|46049516|
|Length = 10_000 - Array.at|95,561,484|47796798|
|Length = 1_000_000 - Array.at|95,015,203|47516409|
|Length = 100 - Array[length - 1]|94,104,451|47057983|
|Length = 10_000 - Array[length - 1]|91,871,457|45935838|
|Length = 1_000_000 - Array[length - 1]|93,501,247|46750649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46049516,"opsSec":92096041.825714},{"name":"Length = 10_000 - Array.at","samples":47796798,"opsSec":95561484.47437209},{"name":"Length = 1_000_000 - Array.at","samples":47516409,"opsSec":95015203.70147702},{"name":"Length = 100 - Array[length - 1]","samples":47057983,"opsSec":94104451.5675151},{"name":"Length = 10_000 - Array[length - 1]","samples":45935838,"opsSec":91871457.16218905},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46750649,"opsSec":93501247.50932634}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|90,393,603|45196822|
|~ (small)|97,087,228|48557123|
|Math.floor (long)|94,590,005|47332915|
|~ (long)|97,138,519|48573982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45196822,"opsSec":90393603.50366563},{"name":"~ (small)","samples":48557123,"opsSec":97087228.37191421},{"name":"Math.floor (long)","samples":47332915,"opsSec":94590005.7055264},{"name":"~ (long)","samples":48573982,"opsSec":97138519.22177607}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,937,996|13969305|
|Object.create({})|2,106,039|1053024|
|new Function with empty prototype|73,679,680|36883649|
|Empty class|74,788,352|37397368|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13969305,"opsSec":27937996.4257225},{"name":"Object.create({})","samples":1053024,"opsSec":2106039.205180279},{"name":"new Function with empty prototype","samples":36883649,"opsSec":73679680.33453658},{"name":"Empty class","samples":37397368,"opsSec":74788352.51495942}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,047,861|46544344|
|Using parseInt(x, 10) - big number (10 len)|96,145,609|48073376|
|Using + - small number (2 len)|97,271,189|48645614|
|Using + - big number (10 len)|95,047,959|47533403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46544344,"opsSec":93047861.76188618},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48073376,"opsSec":96145609.59786677},{"name":"Using + - small number (2 len)","samples":48645614,"opsSec":97271189.16232066},{"name":"Using + - big number (10 len)","samples":47533403,"opsSec":95047959.51039644}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,112,993|556702|
|Using ? operator to avoid rejection|1,138,472|569269|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:38:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":556702,"opsSec":1112993.040675647},{"name":"Using ? operator to avoid rejection","samples":569269,"opsSec":1138472.6972060883}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,792,942|46896938|
|Raw usage underscore usage|91,960,943|45994050|
|Manipulating private properties using #|94,625,991|47313040|
|Manipulating private properties using underscore(_)|94,195,312|47097664|
|Manipulating private properties using Symbol|93,962,474|47211254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:42:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":46896938,"opsSec":93792942.94780356},{"name":"Raw usage underscore usage","samples":45994050,"opsSec":91960943.01391855},{"name":"Manipulating private properties using #","samples":47313040,"opsSec":94625991.0515684},{"name":"Manipulating private properties using underscore(_)","samples":47097664,"opsSec":94195312.17518756},{"name":"Manipulating private properties using Symbol","samples":47211254,"opsSec":93962474.11617546}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,938,692|3969353|
|Adding property in the object creation - small object|8,002,525|4001265|
|Adding property after the function creation - small class|272,080|136049|
|Adding property in the function creation - small class|286,231|143116|
|Adding property after the class creation - small class|273,038|136896|
|Adding property in the class creation - small class|276,752|138433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3969353,"opsSec":7938692.74238312},{"name":"Adding property in the object creation - small object","samples":4001265,"opsSec":8002525.438560499},{"name":"Adding property after the function creation - small class","samples":136049,"opsSec":272080.9720844431},{"name":"Adding property in the function creation - small class","samples":143116,"opsSec":286231.03311157017},{"name":"Adding property after the class creation - small class","samples":136896,"opsSec":273038.929689789},{"name":"Adding property in the class creation - small class","samples":138433,"opsSec":276752.65041696874}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,389,176|47697071|
|Getter|46,252,939|23129073|
|Method|94,188,322|47094169|
|DefineProperty (getter)|94,878,105|47439776|
|DefineProperty (getter & enumerable=false)|49,614,210|24809961|
|DefineProperty (getter & configurable=false)|92,584,097|46348086|
|DefineProperty (getter & enumerable=false & configurable=false)|47,442,904|23721458|
|DefineProperty (writable)|88,802,054|44405346|
|DefineProperty (writable & enumerable=false)|95,547,479|47781942|
|DefineProperty (writable & enumerable=false & configurable=false)|95,563,620|47783752|
|DefineProperties (getter)|44,848,429|22424219|
|DefineProperties (getter & enumerable=false)|47,588,324|23794825|
|DefineProperties (getter & enumerable=false & configurable=false)|45,590,522|22795288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47697071,"opsSec":95389176.42103224},{"name":"Getter","samples":23129073,"opsSec":46252939.67660412},{"name":"Method","samples":47094169,"opsSec":94188322.5531151},{"name":"DefineProperty (getter)","samples":47439776,"opsSec":94878105.1088971},{"name":"DefineProperty (getter & enumerable=false)","samples":24809961,"opsSec":49614210.61053136},{"name":"DefineProperty (getter & configurable=false)","samples":46348086,"opsSec":92584097.09877998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23721458,"opsSec":47442904.80347446},{"name":"DefineProperty (writable)","samples":44405346,"opsSec":88802054.04659878},{"name":"DefineProperty (writable & enumerable=false)","samples":47781942,"opsSec":95547479.64431483},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47783752,"opsSec":95563620.29447123},{"name":"DefineProperties (getter)","samples":22424219,"opsSec":44848429.389101565},{"name":"DefineProperties (getter & enumerable=false)","samples":23794825,"opsSec":47588324.76033208},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":22795288,"opsSec":45590522.84145036}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|87,696,332|43849137|
|Setter|11,437,669|5718839|
|Method|91,208,039|45608071|
|DefineProperty (setter)|96,175,088|48087561|
|DefineProperty (setter & enumerable=false)|11,634,714|5822792|
|DefineProperty (setter & configurable=false)|11,570,890|5785450|
|DefineProperty (setter & enumerable=false & configurable=false)|11,506,773|5753389|
|DefineProperty (writable)|96,331,391|48165704|
|DefineProperty (writable & enumerable=false)|97,301,417|48650731|
|DefineProperty (writable & enumerable=false & configurable=false)|94,001,193|47000613|
|DefineProperties (setter)|96,208,163|48104682|
|DefineProperties (setter & enumerable=false)|11,415,173|5707590|
|DefineProperties (setter & enumerable=false & configurable=false)|11,355,838|5677923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:56:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":43849137,"opsSec":87696332.4032006},{"name":"Setter","samples":5718839,"opsSec":11437669.421747932},{"name":"Method","samples":45608071,"opsSec":91208039.62500794},{"name":"DefineProperty (setter)","samples":48087561,"opsSec":96175088.33871907},{"name":"DefineProperty (setter & enumerable=false)","samples":5822792,"opsSec":11634714.709901433},{"name":"DefineProperty (setter & configurable=false)","samples":5785450,"opsSec":11570890.21102688},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5753389,"opsSec":11506773.604412483},{"name":"DefineProperty (writable)","samples":48165704,"opsSec":96331391.23833793},{"name":"DefineProperty (writable & enumerable=false)","samples":48650731,"opsSec":97301417.63055356},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47000613,"opsSec":94001193.66358937},{"name":"DefineProperties (setter)","samples":48104682,"opsSec":96208163.32212172},{"name":"DefineProperties (setter & enumerable=false)","samples":5707590,"opsSec":11415173.858636463},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5677923,"opsSec":11355838.028201705}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,259,203|1629604|
|Using replaceAll()|3,123,365|1570211|
|Using replaceAll(//g)|2,957,739|1478961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1629604,"opsSec":3259203.0720849545},{"name":"Using replaceAll()","samples":1570211,"opsSec":3123365.1778292675},{"name":"Using replaceAll(//g)","samples":1478961,"opsSec":2957739.826888582}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,872,193|12437785|
|{ ...object, __proto__: null }|2,510,298|1256223|
|{ ...object, newProp: true }|22,548,311|11276063|
|structuredClone|286,330|143183|
|JSON.parse + JSON.stringify|297,487|148790|
|loop + object.keys starting with {}|1,693,723|846890|
|loop + object.keys starting with { __proto__: null }|832,315|416190|
|loop + object.keys starting with { randomProp: true }|615,536|307837|
|object.keys + reduce(FN, {})|1,765,996|883242|
|object.keys + reduce(FN, { __proto__: null })|855,419|427780|
|object.keys + reduce(FN, { newProp: true })|621,304|310653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:09:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12437785,"opsSec":24872193.599718835},{"name":"{ ...object, __proto__: null }","samples":1256223,"opsSec":2510298.1286739516},{"name":"{ ...object, newProp: true }","samples":11276063,"opsSec":22548311.907944147},{"name":"structuredClone","samples":143183,"opsSec":286330.5053252379},{"name":"JSON.parse + JSON.stringify","samples":148790,"opsSec":297487.4498694209},{"name":"loop + object.keys starting with {}","samples":846890,"opsSec":1693723.6599761746},{"name":"loop + object.keys starting with { __proto__: null }","samples":416190,"opsSec":832315.2275643605},{"name":"loop + object.keys starting with { randomProp: true }","samples":307837,"opsSec":615536.5593038193},{"name":"object.keys + reduce(FN, {})","samples":883242,"opsSec":1765996.8003347171},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":427780,"opsSec":855419.4460308227},{"name":"object.keys + reduce(FN, { newProp: true })","samples":310653,"opsSec":621304.2789871471}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|316,591|158308|
|Sort using first char|1,336,016|668418|
|Sort using localeCompare|1,250,330|625542|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:14:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":158308,"opsSec":316591.80732045183},{"name":"Sort using first char","samples":668418,"opsSec":1336016.2738550135},{"name":"Sort using localeCompare","samples":625542,"opsSec":1250330.7807323944}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,877|1439|
|{...smallObject} - Total keys: 2|36,940,657|18471877|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|517|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,633|3318|
|{ ...bigObject, ...anotherBigObject }|1,399|701|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,458,923|5737103|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,921,616|12961062|
|{ ...smallObject, ...anotherSmallObject }|19,576,297|9789859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:21:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1439,"opsSec":2877.424871826319},{"name":"{...smallObject} - Total keys: 2","samples":18471877,"opsSec":36940657.85570248},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":517,"opsSec":1033.5343039121376},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3318,"opsSec":6633.998801189631},{"name":"{ ...bigObject, ...anotherBigObject }","samples":701,"opsSec":1399.8250302581866},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5737103,"opsSec":11458923.462955926},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12961062,"opsSec":25921616.19553873},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9789859,"opsSec":19576297.78586124}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,884|943|
|streams.web.Readable reading 1e3 * "some data"|1,673|843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:24:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":943,"opsSec":1884.918245418954},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":843,"opsSec":1673.0415237990753}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,329|6175|
|streams.web.WritableStream writing 1e3 * "some data"|1,591|804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:27:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6175,"opsSec":12329.555771756175},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":804,"opsSec":1591.610098966415}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,506,583|47753336|
|Using backtick (`)|96,131,646|48065830|
|Using array.join|9,989,957|4994981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":47753336,"opsSec":95506583.17887765},{"name":"Using backtick (`)","samples":48065830,"opsSec":96131646.73383275},{"name":"Using array.join","samples":4994981,"opsSec":9989957.104921019}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,171,781|42085913|
|(short string) (true) String#slice and strict comparison|55,718,146|27859082|
|(long string) (true) String#endsWith|65,260,507|32630263|
|(long string) (true) String#slice and strict comparison|51,401,809|25701003|
|(short string) (false) String#endsWith|90,687,296|45357770|
|(short string) (false) String#slice and strict comparison|56,601,044|28304153|
|(long string) (false) String#endsWith|82,190,875|41095453|
|(long string) (false) String#slice and strict comparison|50,473,814|25240527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42085913,"opsSec":84171781.55729935},{"name":"(short string) (true) String#slice and strict comparison","samples":27859082,"opsSec":55718146.05875697},{"name":"(long string) (true) String#endsWith","samples":32630263,"opsSec":65260507.46601588},{"name":"(long string) (true) String#slice and strict comparison","samples":25701003,"opsSec":51401809.953496836},{"name":"(short string) (false) String#endsWith","samples":45357770,"opsSec":90687296.34842525},{"name":"(short string) (false) String#slice and strict comparison","samples":28304153,"opsSec":56601044.08604375},{"name":"(long string) (false) String#endsWith","samples":41095453,"opsSec":82190875.91813941},{"name":"(long string) (false) String#slice and strict comparison","samples":25240527,"opsSec":50473814.237980954}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,934,704|7971904|
|Using indexof|15,774,449|7887324|
|Using RegExp.test|13,286,070|6643316|
|Using RegExp.text with cached regex pattern|14,441,047|7220594|
|Using new RegExp.test|4,696,442|2348497|
|Using new RegExp.test with cached regex pattern|5,294,552|2648096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7971904,"opsSec":15934704.535168465},{"name":"Using indexof","samples":7887324,"opsSec":15774449.21039105},{"name":"Using RegExp.test","samples":6643316,"opsSec":13286070.743227523},{"name":"Using RegExp.text with cached regex pattern","samples":7220594,"opsSec":14441047.604135193},{"name":"Using new RegExp.test","samples":2348497,"opsSec":4696442.8912124885},{"name":"Using new RegExp.test with cached regex pattern","samples":2648096,"opsSec":5294552.361846373}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,669,583|43905543|
|(short string) (true) String#slice and strict comparison|57,320,293|28688500|
|(long string) (true) String#startsWith|66,700,171|33352116|
|(long string) (true) String#slice and strict comparison|52,248,185|26126168|
|(short string) (false) String#startsWith|93,131,559|46565868|
|(short string) (false) String#slice and strict comparison|57,055,401|28539094|
|(long string) (false) String#startsWith|84,588,269|42295115|
|(long string) (false) String#slice and strict comparison|51,507,369|25759440|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:22:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43905543,"opsSec":87669583.43487443},{"name":"(short string) (true) String#slice and strict comparison","samples":28688500,"opsSec":57320293.4922105},{"name":"(long string) (true) String#startsWith","samples":33352116,"opsSec":66700171.42696387},{"name":"(long string) (true) String#slice and strict comparison","samples":26126168,"opsSec":52248185.50863957},{"name":"(short string) (false) String#startsWith","samples":46565868,"opsSec":93131559.0500378},{"name":"(short string) (false) String#slice and strict comparison","samples":28539094,"opsSec":57055401.32792845},{"name":"(long string) (false) String#startsWith","samples":42295115,"opsSec":84588269.41309154},{"name":"(long string) (false) String#slice and strict comparison","samples":25759440,"opsSec":51507369.95707991}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|87,080,522|43540267|
|Using this|94,392,577|47196317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":43540267,"opsSec":87080522.67953204},{"name":"Using this","samples":47196317,"opsSec":94392577.36445358}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,497,852|6249747|
|Date.now()|19,815,226|9907615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6249747,"opsSec":12497852.232139377},{"name":"Date.now()","samples":9907615,"opsSec":19815226.27473746}]}-->
