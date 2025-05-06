## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|66,389,257|33264271|
|Using dot notation|61,178,162|30877182|
|Using define property (writable)|4,944,868|2472436|
|Using define property initialized (writable)|6,662,817|3331501|
|Using define property (getter)|2,119,399|1060347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":33264271,"opsSec":66389257.60310571},{"name":"Using dot notation","samples":30877182,"opsSec":61178162.6143821},{"name":"Using define property (writable)","samples":2472436,"opsSec":4944868.597930404},{"name":"Using define property initialized (writable)","samples":3331501,"opsSec":6662817.093500021},{"name":"Using define property (getter)","samples":1060347,"opsSec":2119399.9749125172}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.135ms
array.push|1,000,000|34.315ms
new Array(length)|1,000,000|6.886ms
array.push|100,000,000|1,996.486ms
new Array(length)|100,000,000|4,342.785ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.019ms
new Array(length)|100|0.015ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|16.257ms
new Array(length)|10,000|5.241ms
array.push|1,000,000|183.209ms
new Array(length)|1,000,000|9.218ms
array.push|100,000,000|2,145.78ms
new Array(length)|100,000,000|4,980.258ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|262|132|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:09:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":132,"opsSec":262.20490380020897},{"name":"Array.from","samples":12,"opsSec":23.854311035773186}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,395|2211|
|new Blob (1024)|559|280|
|text (128)|4,228|2118|
|text (1024)|529|265|
|arrayBuffer (128)|4,208|2105|
|arrayBuffer (1024)|527|265|
|slice (0, 64)|138,269|81553|
|slice (0, 512)|31,705|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2211,"opsSec":4395.030484366768},{"name":"new Blob (1024)","samples":280,"opsSec":559.2843453445406},{"name":"text (128)","samples":2118,"opsSec":4228.216656496555},{"name":"text (1024)","samples":265,"opsSec":529.4767900971904},{"name":"arrayBuffer (128)","samples":2105,"opsSec":4208.331379774594},{"name":"arrayBuffer (1024)","samples":265,"opsSec":527.1559399341494},{"name":"slice (0, 64)","samples":81553,"opsSec":138269.32939670252},{"name":"slice (0, 512)","samples":15878,"opsSec":31705.665797086494}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.24 ms|1|
|Gzip|136.68 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:18:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135241135},{"name":"Gzip","samples":1,"totalTime":0.136684739}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,622|3312|
|crypto.verify('RSA-SHA256')|6,902|3452|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:28:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3312,"opsSec":6622.171287398985},{"name":"crypto.verify('RSA-SHA256')","samples":3452,"opsSec":6902.994137112304}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,471,315|735838|
|fromUnixToISOString(new Date())|2,075,442|1037952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":735838,"opsSec":1471315.0834673953},{"name":"fromUnixToISOString(new Date())","samples":1037952,"opsSec":2075442.4174554732}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,492|9747|
|Intl.DateTimeFormat().format(new Date())|19,093|9547|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,004|9503|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,064|9036|
|Reusing Intl.DateTimeFormat()|518,915|259540|
|Date.toLocaleDateString()|1,025,014|512509|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,925|11463|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9747,"opsSec":19492.012165615328},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9547,"opsSec":19093.95757322627},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9503,"opsSec":19004.617338070184},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9036,"opsSec":18064.082620971723},{"name":"Reusing Intl.DateTimeFormat()","samples":259540,"opsSec":518915.6625231729},{"name":"Date.toLocaleDateString()","samples":512509,"opsSec":1025014.7015026906},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11463,"opsSec":22925.052324187025}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,084,115|542058|
|Using brackets {}|1,052,290|526193|
|Using '' + |1,075,497|537778|
|Using date.toString()|1,184,495|592249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":542058,"opsSec":1084115.0091188818},{"name":"Using brackets {}","samples":526193,"opsSec":1052290.0627149823},{"name":"Using '' + ","samples":537778,"opsSec":1075497.3230170507},{"name":"Using date.toString()","samples":592249,"opsSec":1184495.3656823067}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,866,176|1933097|
|Using delete property (proto: null)|16,721,067|8362868|
|Using delete property (cached proto: null)|3,987,514|1993759|
|Using undefined assignment|74,316,624|37162799|
|Using undefined assignment (proto: null)|17,849,822|8925877|
|Using undefined property (cached proto: null)|74,307,504|37157214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1933097,"opsSec":3866176.43982661},{"name":"Using delete property (proto: null)","samples":8362868,"opsSec":16721067.377661752},{"name":"Using delete property (cached proto: null)","samples":1993759,"opsSec":3987514.331486815},{"name":"Using undefined assignment","samples":37162799,"opsSec":74316624.11900438},{"name":"Using undefined assignment (proto: null)","samples":8925877,"opsSec":17849822.470710445},{"name":"Using undefined property (cached proto: null)","samples":37157214,"opsSec":74307504.0267748}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|342,333|171223|
|NodeError|315,228|157615|
|NodeError Range|281,306|140924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:47:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":171223,"opsSec":342333.92808795825},{"name":"NodeError","samples":157615,"opsSec":315228.5404918575},{"name":"NodeError Range","samples":140924,"opsSec":281306.0436528676}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,980,477|35990249|
|using Array.includes (first item)|83,043,861|41530266|
|Using raw comparison|96,295,181|48147605|
|Using raw comparison (first item)|98,143,734|49073318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35990249,"opsSec":71980477.8454662},{"name":"using Array.includes (first item)","samples":41530266,"opsSec":83043861.27702409},{"name":"Using raw comparison","samples":48147605,"opsSec":96295181.49662627},{"name":"Using raw comparison (first item)","samples":49073318,"opsSec":98143734.08607055}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,925,724|20968092|
|Using Object.getOwnPropertyNames()|41,447,022|20728924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:53:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20968092,"opsSec":41925724.78943678},{"name":"Using Object.getOwnPropertyNames()","samples":20728924,"opsSec":41447022.12071611}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,365,271|50217485|
|Length = 10_000 - Array.at|95,889,524|47995019|
|Length = 1_000_000 - Array.at|99,822,456|49924847|
|Length = 100 - Array[length - 1]|96,199,705|48835077|
|Length = 10_000 - Array[length - 1]|97,683,448|48862842|
|Length = 1_000_000 - Array[length - 1]|99,114,885|49564449|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50217485,"opsSec":100365271.93909352},{"name":"Length = 10_000 - Array.at","samples":47995019,"opsSec":95889524.29928091},{"name":"Length = 1_000_000 - Array.at","samples":49924847,"opsSec":99822456.84371544},{"name":"Length = 100 - Array[length - 1]","samples":48835077,"opsSec":96199705.14339468},{"name":"Length = 10_000 - Array[length - 1]","samples":48862842,"opsSec":97683448.99789058},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49564449,"opsSec":99114885.53394276}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,797,586|46898801|
|~ (small)|92,996,611|46498326|
|Math.floor (long)|87,576,357|43798421|
|~ (long)|94,103,943|47055718|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":46898801,"opsSec":93797586.80479093},{"name":"~ (small)","samples":46498326,"opsSec":92996611.63947055},{"name":"Math.floor (long)","samples":43798421,"opsSec":87576357.01433079},{"name":"~ (long)","samples":47055718,"opsSec":94103943.444023}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,669,906|15834957|
|Object.create({})|2,101,289|1050651|
|new Function with empty prototype|74,691,032|37361443|
|Empty class|72,097,488|36049277|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15834957,"opsSec":31669906.58924186},{"name":"Object.create({})","samples":1050651,"opsSec":2101289.131705357},{"name":"new Function with empty prototype","samples":37361443,"opsSec":74691032.36604479},{"name":"Empty class","samples":36049277,"opsSec":72097488.68750715}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,855,190|47932660|
|Using parseInt(x, 10) - big number (10 len)|95,977,128|47988571|
|Using + - small number (2 len)|95,671,669|47843936|
|Using + - big number (10 len)|94,092,196|47048864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47932660,"opsSec":95855190.98196894},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47988571,"opsSec":95977128.563202},{"name":"Using + - small number (2 len)","samples":47843936,"opsSec":95671669.42875223},{"name":"Using + - big number (10 len)","samples":47048864,"opsSec":94092196.69612502}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,005,086|503135|
|Using ? operator to avoid rejection|1,065,957|533189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:13:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":503135,"opsSec":1005086.2837513825},{"name":"Using ? operator to avoid rejection","samples":533189,"opsSec":1065957.196341429}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|94,565,267|47282640|
|Raw usage underscore usage|88,829,687|44415638|
|Manipulating private properties using #|98,741,174|49418621|
|Manipulating private properties using underscore(_)|96,560,410|48280214|
|Manipulating private properties using Symbol|96,729,924|48364969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:19:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":47282640,"opsSec":94565267.51738468},{"name":"Raw usage underscore usage","samples":44415638,"opsSec":88829687.01455869},{"name":"Manipulating private properties using #","samples":49418621,"opsSec":98741174.53898518},{"name":"Manipulating private properties using underscore(_)","samples":48280214,"opsSec":96560410.23288453},{"name":"Manipulating private properties using Symbol","samples":48364969,"opsSec":96729924.45781057}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,058,332|4029793|
|Adding property in the object creation - small object|8,310,938|4155644|
|Adding property after the function creation - small class|238,283|119142|
|Adding property in the function creation - small class|271,985|136168|
|Adding property after the class creation - small class|267,270|133712|
|Adding property in the class creation - small class|269,929|134965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4029793,"opsSec":8058332.494147206},{"name":"Adding property in the object creation - small object","samples":4155644,"opsSec":8310938.192611473},{"name":"Adding property after the function creation - small class","samples":119142,"opsSec":238283.64543393557},{"name":"Adding property in the function creation - small class","samples":136168,"opsSec":271985.6058397376},{"name":"Adding property after the class creation - small class","samples":133712,"opsSec":267270.20791150397},{"name":"Adding property in the class creation - small class","samples":134965,"opsSec":269929.4401663411}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|89,348,261|44674140|
|Getter|47,458,994|23729501|
|Method|89,055,039|44527694|
|DefineProperty (getter)|87,685,540|43842784|
|DefineProperty (getter & enumerable=false)|50,121,793|25061471|
|DefineProperty (getter & configurable=false)|89,625,175|44812772|
|DefineProperty (getter & enumerable=false & configurable=false)|50,163,269|25081705|
|DefineProperty (writable)|89,606,063|44803181|
|DefineProperty (writable & enumerable=false)|89,242,215|44621113|
|DefineProperty (writable & enumerable=false & configurable=false)|89,196,921|44598469|
|DefineProperties (getter)|50,277,111|25138568|
|DefineProperties (getter & enumerable=false)|47,204,287|23602147|
|DefineProperties (getter & enumerable=false & configurable=false)|49,760,080|24880222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":44674140,"opsSec":89348261.23686513},{"name":"Getter","samples":23729501,"opsSec":47458994.97606874},{"name":"Method","samples":44527694,"opsSec":89055039.08235687},{"name":"DefineProperty (getter)","samples":43842784,"opsSec":87685540.64211132},{"name":"DefineProperty (getter & enumerable=false)","samples":25061471,"opsSec":50121793.008017085},{"name":"DefineProperty (getter & configurable=false)","samples":44812772,"opsSec":89625175.99902734},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25081705,"opsSec":50163269.84382405},{"name":"DefineProperty (writable)","samples":44803181,"opsSec":89606063.61180818},{"name":"DefineProperty (writable & enumerable=false)","samples":44621113,"opsSec":89242215.82638739},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44598469,"opsSec":89196921.58776644},{"name":"DefineProperties (getter)","samples":25138568,"opsSec":50277111.062552914},{"name":"DefineProperties (getter & enumerable=false)","samples":23602147,"opsSec":47204287.95785114},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24880222,"opsSec":49760080.452852204}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|97,821,074|48948923|
|Setter|11,266,396|5633200|
|Method|94,633,692|47316853|
|DefineProperty (setter)|100,879,954|50439985|
|DefineProperty (setter & enumerable=false)|11,036,108|5518056|
|DefineProperty (setter & configurable=false)|11,505,931|5759017|
|DefineProperty (setter & enumerable=false & configurable=false)|11,667,102|5835209|
|DefineProperty (writable)|100,817,233|50409221|
|DefineProperty (writable & enumerable=false)|97,923,892|48966667|
|DefineProperty (writable & enumerable=false & configurable=false)|101,143,165|50585246|
|DefineProperties (setter)|87,852,894|44113034|
|DefineProperties (setter & enumerable=false)|11,384,302|5692270|
|DefineProperties (setter & enumerable=false & configurable=false)|10,805,090|5402546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:29:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":48948923,"opsSec":97821074.84660748},{"name":"Setter","samples":5633200,"opsSec":11266396.732744947},{"name":"Method","samples":47316853,"opsSec":94633692.18348093},{"name":"DefineProperty (setter)","samples":50439985,"opsSec":100879954.86800677},{"name":"DefineProperty (setter & enumerable=false)","samples":5518056,"opsSec":11036108.887817293},{"name":"DefineProperty (setter & configurable=false)","samples":5759017,"opsSec":11505931.210114291},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5835209,"opsSec":11667102.139569324},{"name":"DefineProperty (writable)","samples":50409221,"opsSec":100817233.20137392},{"name":"DefineProperty (writable & enumerable=false)","samples":48966667,"opsSec":97923892.17831616},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50585246,"opsSec":101143165.94856934},{"name":"DefineProperties (setter)","samples":44113034,"opsSec":87852894.73192982},{"name":"DefineProperties (setter & enumerable=false)","samples":5692270,"opsSec":11384302.341304323},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5402546,"opsSec":10805090.379236443}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,219,736|1609869|
|Using replaceAll()|3,159,707|1580647|
|Using replaceAll(//g)|2,972,112|1486346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1609869,"opsSec":3219736.943926282},{"name":"Using replaceAll()","samples":1580647,"opsSec":3159707.447696363},{"name":"Using replaceAll(//g)","samples":1486346,"opsSec":2972112.6341957655}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,494,987|11748194|
|{ ...object, __proto__: null }|2,519,732|1260087|
|{ ...object, newProp: true }|22,762,294|11383781|
|structuredClone|284,955|142509|
|JSON.parse + JSON.stringify|293,274|146642|
|loop + object.keys starting with {}|1,652,960|828554|
|loop + object.keys starting with { __proto__: null }|856,152|428116|
|loop + object.keys starting with { randomProp: true }|641,859|321013|
|object.keys + reduce(FN, {})|1,690,815|845581|
|object.keys + reduce(FN, { __proto__: null })|843,884|422133|
|object.keys + reduce(FN, { newProp: true })|608,703|304352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":11748194,"opsSec":23494987.980656207},{"name":"{ ...object, __proto__: null }","samples":1260087,"opsSec":2519732.462241177},{"name":"{ ...object, newProp: true }","samples":11383781,"opsSec":22762294.896010242},{"name":"structuredClone","samples":142509,"opsSec":284955.4716509447},{"name":"JSON.parse + JSON.stringify","samples":146642,"opsSec":293274.91610274866},{"name":"loop + object.keys starting with {}","samples":828554,"opsSec":1652960.6061319727},{"name":"loop + object.keys starting with { __proto__: null }","samples":428116,"opsSec":856152.0405363261},{"name":"loop + object.keys starting with { randomProp: true }","samples":321013,"opsSec":641859.9020619841},{"name":"object.keys + reduce(FN, {})","samples":845581,"opsSec":1690815.6093693709},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":422133,"opsSec":843884.6502143375},{"name":"object.keys + reduce(FN, { newProp: true })","samples":304352,"opsSec":608703.348687417}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|280,780|140545|
|Sort using first char|1,302,395|653362|
|Sort using localeCompare|1,212,424|606248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:46:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":140545,"opsSec":280780.70208668656},{"name":"Sort using first char","samples":653362,"opsSec":1302395.3925356488},{"name":"Sort using localeCompare","samples":606248,"opsSec":1212424.7942918313}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,735|869|
|{...smallObject} - Total keys: 2|40,100,953|20051465|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,057|530|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,626|3314|
|{ ...bigObject, ...anotherBigObject }|1,100|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,115,991|6061128|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,331,367|14166811|
|{ ...smallObject, ...anotherSmallObject }|20,370,740|10187821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":869,"opsSec":1735.8519006314875},{"name":"{...smallObject} - Total keys: 2","samples":20051465,"opsSec":40100953.26360982},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":530,"opsSec":1057.9790547574767},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3314,"opsSec":6626.726674469501},{"name":"{ ...bigObject, ...anotherBigObject }","samples":551,"opsSec":1100.5443825810892},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6061128,"opsSec":12115991.935241543},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14166811,"opsSec":28331367.78639071},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10187821,"opsSec":20370740.107325014}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,894|948|
|streams.web.Readable reading 1e3 * "some data"|1,689|845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:56:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":948,"opsSec":1894.3606543881842},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":845,"opsSec":1689.52869245501}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,293|5148|
|streams.web.WritableStream writing 1e3 * "some data"|1,637|819|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:00:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5148,"opsSec":10293.209202189011},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":819,"opsSec":1637.725314159408}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,590,527|49309397|
|Using backtick (`)|97,590,806|48795410|
|Using array.join|9,871,301|4936090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":49309397,"opsSec":98590527.89847046},{"name":"Using backtick (`)","samples":48795410,"opsSec":97590806.33728711},{"name":"Using array.join","samples":4936090,"opsSec":9871301.631838195}]}-->
