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
