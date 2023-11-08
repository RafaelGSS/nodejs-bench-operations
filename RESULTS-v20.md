## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|851,030,980|99|
|Using dot notation|849,606,269|99|
|Using define property (writable)|4,635,975|97|
|Using define property initialized (writable)|6,299,871|91|
|Using define property (getter)|2,426,185|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":851030980.0887882,"samples":6},{"name":"Using dot notation","opsSec":849606269.0402344,"samples":6},{"name":"Using define property (writable)","opsSec":4635974.551298018,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6299871.10605873,"samples":6},{"name":"Using define property (getter)","opsSec":2426184.601857074,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.317ms
new Array(length)|10,000|0.343ms
array.push|1,000,000|33.177ms
new Array(length)|1,000,000|6.811ms
array.push|100,000,000|1,818.088ms
new Array(length)|100,000,000|4,474.176ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.04ms
new Array(length)|100|0.009ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.235ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|23.289ms
new Array(length)|1,000,000|4.211ms
array.push|100,000,000|2,532.884ms
new Array(length)|100,000,000|4,145.757ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|270|86|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:19:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":269.75677979464086,"samples":3},{"name":"Array.from","opsSec":23.175882590603667,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|850,647,827|95|
|[async] async function|17,497,258|87|
|[async] function|170,577|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:20:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":850647826.5599637,"samples":7},{"name":"[async] async function","opsSec":17497257.883541916,"samples":7},{"name":"[async] function","opsSec":170577.4340180514,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,541|85|
|new Blob (1024)|585|78|
|text (128)|4,854|83|
|text (1024)|614|86|
|arrayBuffer (128)|4,784|83|
|arrayBuffer (1024)|620|86|
|slice (0, 64)|67,190|69|
|slice (0, 512)|19,638|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:21:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4540.960933720154,"samples":4},{"name":"new Blob (1024)","opsSec":585.012090544943,"samples":2},{"name":"text (128)","opsSec":4854.014119562184,"samples":5},{"name":"text (1024)","opsSec":614.455238321437,"samples":3},{"name":"arrayBuffer (128)","opsSec":4783.945986740943,"samples":3},{"name":"arrayBuffer (1024)","opsSec":620.2983467426109,"samples":2},{"name":"slice (0, 64)","opsSec":67190.2901746658,"samples":3},{"name":"slice (0, 512)","opsSec":19637.781751977887,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|229,336|50|
|[True conditional] Using constructor name|179,654|94|
|[True conditional] Check if property is valid then instanceof |181,405|96|
|[False conditional] Using instanceof only|852,049,857|94|
|[False conditional] Using constructor name|851,488,337|98|
|[False conditional] Check if property is valid then instanceof |852,854,621|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:23:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":229335.88735800973,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179654.16291245553,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181404.8251774534,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":852049857.3534822,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":851488337.3415248,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852854620.5026431,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,776|96|
|crypto.verify('RSA-SHA256')|6,714|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6775.747628263189,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6714.197742340635,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,549,112|97|
|fromUnixToISOString(new Date())|2,270,537|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:25:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1549112.0153936003,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2270536.611308688,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,129|85|
|Intl.DateTimeFormat().format(new Date())|19,820|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,547|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,626|83|
|Reusing Intl.DateTimeFormat()|620,552|95|
|Date.toLocaleDateString()|714,838|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,786|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:26:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19129.137298380698,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19820.03233560034,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21546.732422979476,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21626.353939318127,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":620552.1236722392,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":714838.4692849489,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19785.95554479332,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,068,925|97|
|Using brackets {}|1,098,834|99|
|Using '' + |1,098,285|93|
|Using date.toString()|1,220,889|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:28:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1068924.9407661944,"samples":5},{"name":"Using brackets {}","opsSec":1098834.1705364718,"samples":8},{"name":"Using '' + ","opsSec":1098285.2794601591,"samples":5},{"name":"Using date.toString()","opsSec":1220888.8323458058,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,903,124|98|
|Using delete property (proto: null)|21,229,518|97|
|Using delete property (cached proto: null)|3,917,481|99|
|Using undefined assignment|849,215,040|100|
|Using undefined assignment (proto: null)|21,785,239|99|
|Using undefined property (cached proto: null)|845,790,480|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3903124.390105139,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21229518.012489766,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3917481.050988109,"samples":6},{"name":"Using undefined assignment","opsSec":849215039.8672622,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":21785238.683331236,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":845790480.0491148,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|222,363|53|
|NodeError|176,965|96|
|NodeError Range|177,255|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:30:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":222363.31184257937,"samples":3},{"name":"NodeError","opsSec":176965.48139069675,"samples":3},{"name":"NodeError Range","opsSec":177254.7034785208,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,677,033|97|
|Function returning explicitly undefined|1,667,984|95|
|Function returning implicitly undefined|1,671,230|96|
|Function returning string|1,640,009|96|
|Function returning integer|1,693,062|100|
|Function returning float|1,673,988|95|
|Function returning functions|1,632,028|95|
|Function returning arrow functions|1,652,020|97|
|Function returning empty object|1,692,810|96|
|Function returning empty array|1,659,884|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:32:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1677033.0775489928,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1667983.810090664,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1671229.8511068905,"samples":5},{"name":"Function returning string","opsSec":1640009.0523227192,"samples":5},{"name":"Function returning integer","opsSec":1693062.423294456,"samples":5},{"name":"Function returning float","opsSec":1673987.7866192006,"samples":5},{"name":"Function returning functions","opsSec":1632028.1416778557,"samples":7},{"name":"Function returning arrow functions","opsSec":1652019.7992057553,"samples":5},{"name":"Function returning empty object","opsSec":1692809.8116582374,"samples":5},{"name":"Function returning empty array","opsSec":1659883.7020336415,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|849,527,945|98|
|using Array.includes (first item)|849,391,229|96|
|Using raw comparison|852,285,935|100|
|Using raw comparison (first item)|851,152,348|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:33:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":849527945.2791442,"samples":6},{"name":"using Array.includes (first item)","opsSec":849391229.3337945,"samples":5},{"name":"Using raw comparison","opsSec":852285935.1428543,"samples":6},{"name":"Using raw comparison (first item)","opsSec":851152348.3933381,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,433,883|89|
|Using Object.getOwnPropertyNames()|93,472,185|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:34:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":92433883.25033301,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":93472185.45508577,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|847,383,904|97|
|Length = 10_000 - Array.at|848,069,329|99|
|Length = 1_000_000 - Array.at|848,824,299|100|
|Length = 100 - Array[length - 1]|850,082,862|98|
|Length = 10_000 - Array[length - 1]|850,092,115|100|
|Length = 1_000_000 - Array[length - 1]|849,842,557|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:35:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":847383904.2320437,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":848069328.6103436,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":848824299.0281385,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":850082861.851655,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":850092115.2413454,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":849842556.6441283,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,124,418|95|
|Object.create({})|2,438,311|82|
|Cached Empty.prototype|850,959,605|100|
|Empty.prototype|2,317,550|79|
|Empty class|1,466,105|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:37:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78124418.20727356,"samples":5},{"name":"Object.create({})","opsSec":2438310.8228533687,"samples":3},{"name":"Cached Empty.prototype","opsSec":850959604.5600592,"samples":6},{"name":"Empty.prototype","opsSec":2317549.765228703,"samples":3},{"name":"Empty class","opsSec":1466105.491426695,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,483,127|98|
|Using optional chain (obj.field?.field2) (undefined)|851,701,944|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|851,758,107|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|850,979,192|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:38:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":850483127.3692284,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":851701943.536047,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":851758106.6122773,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":850979192.0071164,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|851,012,869|98|
|Using parseInt(x, 10) - big number (10 len)|851,531,280|95|
|Using + - small number (2 len)|852,157,458|96|
|Using + - big number (10 len)|851,373,196|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:39:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":851012869.046212,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":851531280.1261065,"samples":6},{"name":"Using + - small number (2 len)","opsSec":852157458.1081713,"samples":6},{"name":"Using + - big number (10 len)","opsSec":851373196.4850823,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,111,780|82|
|Using ? operator to avoid rejection|1,179,038|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:40:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1111780.1466911426,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1179037.5674816698,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|845,565,067|94|
|Raw usage underscore usage|847,970,393|97|
|Manipulating private properties using #|838,153,266|100|
|Manipulating private properties using underscore(_)|839,673,832|97|
|Manipulating private properties using Symbol|839,047,145|94|
|Manipulating private properties using PrivateSymbol|55,528,039|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:42:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":845565066.5686474,"samples":6},{"name":"Raw usage underscore usage","opsSec":847970392.5710006,"samples":7},{"name":"Manipulating private properties using #","opsSec":838153266.2062144,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":839673831.8499894,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":839047144.5066568,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55528039.45934223,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,453,683|92|
|Adding property in the object creation - small object|8,501,750|94|
|Adding property after the function creation - small class|253,389|89|
|Adding property in the function creation - small class|260,543|91|
|Adding property after the class creation - small class|220,891|87|
|Adding property in the class creation - small class|215,513|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:43:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8453682.870268669,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8501750.291335082,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":253388.71591678885,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260542.5296078394,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":220890.58018306713,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":215513.23845788502,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,306,210|99|
|Getter|94,727,194|97|
|Method|850,738,537|97|
|DefineProperty (getter)|851,055,231|97|
|DefineProperty (getter & enumerable=false)|94,768,870|96|
|DefineProperty (getter & configurable=false)|851,568,377|98|
|DefineProperty (getter & enumerable=false & configurable=false)|94,565,844|96|
|DefineProperty (writable)|851,144,449|100|
|DefineProperty (writable & enumerable=false)|852,411,137|99|
|DefineProperty (writable & enumerable=false & configurable=false)|394,520,868|49|
|DefineProperties (getter)|57,754,757|90|
|DefineProperties (getter & enumerable=false)|94,905,580|97|
|DefineProperties (getter & enumerable=false & configurable=false)|94,783,366|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:45:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":850306209.5957452,"samples":7},{"name":"Getter","opsSec":94727193.67656264,"samples":5},{"name":"Method","opsSec":850738536.657066,"samples":7},{"name":"DefineProperty (getter)","opsSec":851055231.4617889,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":94768870.30061729,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":851568376.9080396,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94565843.93055056,"samples":5},{"name":"DefineProperty (writable)","opsSec":851144449.4760703,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":852411136.7744956,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":394520868.3020317,"samples":6},{"name":"DefineProperties (getter)","opsSec":57754757.226097025,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":94905579.76829767,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":94783365.63300654,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|840,398,386|97|
|Setter|12,523,903|99|
|Method|843,324,101|98|
|DefineProperty (setter)|840,220,471|99|
|DefineProperty (setter & enumerable=false)|12,657,038|99|
|DefineProperty (setter & configurable=false)|12,839,287|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,738,305|99|
|DefineProperty (writable)|845,442,571|100|
|DefineProperty (writable & enumerable=false)|845,316,357|98|
|DefineProperty (writable & enumerable=false & configurable=false)|842,969,500|96|
|DefineProperties (setter)|845,814,773|98|
|DefineProperties (setter & enumerable=false)|11,865,508|94|
|DefineProperties (setter & enumerable=false & configurable=false)|11,581,846|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":840398385.9269805,"samples":7},{"name":"Setter","opsSec":12523903.091262385,"samples":5},{"name":"Method","opsSec":843324101.0436583,"samples":6},{"name":"DefineProperty (setter)","opsSec":840220470.9087466,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12657038.46545651,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":12839287.461954124,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12738305.240842918,"samples":6},{"name":"DefineProperty (writable)","opsSec":845442570.8162605,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":845316357.1990849,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":842969500.4378388,"samples":6},{"name":"DefineProperties (setter)","opsSec":845814772.7113987,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11865507.702783851,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11581846.419699987,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,725,190|94|
|Using replaceAll()|3,164,255|95|
|Using replaceAll(//g)|3,344,270|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3725190.0513048633,"samples":5},{"name":"Using replaceAll()","opsSec":3164254.931739993,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3344269.524509878,"samples":7}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,147,108|96|
|{ ...object, __proto__: null }|29,682,602|91|
|{ ...object, newProp: true }|887,687|86|
|structuredClone|262,504|99|
|JSON.parse + JSON.stringify|194,441|100|
|loop + object.keys starting with {}|1,575,811|94|
|loop + object.keys starting with { __proto__: null }|781,869|98|
|loop + object.keys starting with { randomProp: true }|573,464|96|
|object.keys + reduce(FN, {})|557,646|97|
|object.keys + reduce(FN, { __proto__: null })|797,217|97|
|object.keys + reduce(FN, { newProp: true })|577,436|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:50:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29147107.958681025,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29682602.286131367,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":887686.6800674987,"samples":3},{"name":"structuredClone","opsSec":262504.2469456401,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":194441.2373266531,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1575810.7801126204,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":781869.0385770724,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":573463.904344708,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":557645.7000258303,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":797216.5074089095,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":577435.521619565,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|253,634|97|
|Sort using first char|1,368,565|91|
|Sort using localeCompare|1,187,657|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:51:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":253634.00542544428,"samples":4},{"name":"Sort using first char","opsSec":1368564.5189684103,"samples":5},{"name":"Sort using localeCompare","opsSec":1187657.2742148757,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,814|97|
|{...smallObject} - Total keys: 2|103,957,609|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,095|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,557|99|
|{ ...bigObject, ...anotherBigObject }|1,137|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,285,089|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,978,143|97|
|{ ...smallObject, ...anotherSmallObject }|25,407,507|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:53:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.8256886083245,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":103957609.1396368,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1094.8461829931962,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6557.463981494606,"samples":6},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1137.480995928708,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15285089.250447124,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37978143.013459995,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25407507.106255464,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,325|86|
|streams.web.Readable reading 1e3 * "some data"|1,992|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:54:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2325.2138679252853,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1992.473714056108,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,924|88|
|streams.web.WritableStream writing 1e3 * "some data"|985|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3924.279870231279,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":984.7163994086271,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|692,430,959|91|
|Using backtick (`)|691,397,499|85|
|Using array.join|5,240,258|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":692430959.3550252,"samples":7},{"name":"Using backtick (`)","opsSec":691397499.1679264,"samples":6},{"name":"Using array.join","opsSec":5240257.541365095,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|713,848,568|94|
|Using indexof|715,934,030|97|
|Using RegExp.test|11,235,327|99|
|Using RegExp.text with cached regex pattern|11,742,928|96|
|Using new RegExp.test|3,291,184|95|
|Using new RegExp.test with cached regex pattern|3,974,989|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":713848568.3240275,"samples":7},{"name":"Using indexof","opsSec":715934030.0020596,"samples":8},{"name":"Using RegExp.test","opsSec":11235327.095703771,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11742928.43658616,"samples":5},{"name":"Using new RegExp.test","opsSec":3291183.961865452,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3974988.941079553,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|589,772,247|94|
|Using this|594,683,731|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using super","opsSec":589772247.2472006,"samples":6},{"name":"Using this","opsSec":594683731.3316904,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,052,982|86|
|Date.now()|15,871,351|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:18:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8052981.901177147,"samples":7},{"name":"Date.now()","opsSec":15871351.07214695,"samples":7}]}-->
