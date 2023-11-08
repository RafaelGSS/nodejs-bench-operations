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
|Length = 100 - Array.at|713,436,129|95|
|Length = 10_000 - Array.at|716,121,258|98|
|Length = 1_000_000 - Array.at|711,472,161|93|
|Length = 100 - Array[length - 1]|716,131,556|96|
|Length = 10_000 - Array[length - 1]|715,537,709|95|
|Length = 1_000_000 - Array[length - 1]|715,199,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":713436129.3001529,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":716121257.9466088,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":711472161.3344755,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":716131555.7758018,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":715537709.4737694,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":715199596.6917496,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,588,547|86|
|Object.create({})|1,193,029|72|
|Cached Empty.prototype|720,046,418|87|
|Empty.prototype|1,119,507|72|
|Empty class|816,052|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37588546.87984346,"samples":7},{"name":"Object.create({})","opsSec":1193029.0149864475,"samples":5},{"name":"Cached Empty.prototype","opsSec":720046418.0639176,"samples":6},{"name":"Empty.prototype","opsSec":1119506.6555635482,"samples":3},{"name":"Empty class","opsSec":816051.9014653382,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,564,067|87|
|Using optional chain (obj.field?.field2) (undefined)|628,310,195|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,249,322|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|683,732,201|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":594564067.0377232,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":628310195.1340344,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":638249322.4837779,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":683732201.105094,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|678,525,584|81|
|Using parseInt(x, 10) - big number (10 len)|694,901,262|88|
|Using + - small number (2 len)|631,507,092|81|
|Using + - big number (10 len)|685,590,816|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":678525583.6323838,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":694901262.3236777,"samples":6},{"name":"Using + - small number (2 len)","opsSec":631507091.6628474,"samples":10},{"name":"Using + - big number (10 len)","opsSec":685590815.764026,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|684,841|70|
|Using ? operator to avoid rejection|772,454|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":684841.085219614,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":772453.5637806996,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|710,860,444|95|
|Raw usage underscore usage|716,136,111|96|
|Manipulating private properties using #|705,183,240|93|
|Manipulating private properties using underscore(_)|705,454,737|94|
|Manipulating private properties using Symbol|708,104,156|96|
|Manipulating private properties using PrivateSymbol|33,174,968|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":710860443.7305679,"samples":7},{"name":"Raw usage underscore usage","opsSec":716136110.5079585,"samples":6},{"name":"Manipulating private properties using #","opsSec":705183240.0426404,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":705454737.3935969,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":708104155.8163626,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":33174967.969198838,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,836,506|97|
|Adding property in the object creation - small object|4,913,717|95|
|Adding property after the function creation - small class|159,671|78|
|Adding property in the function creation - small class|166,581|83|
|Adding property after the class creation - small class|127,257|73|
|Adding property in the class creation - small class|136,569|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4836505.645937885,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":4913717.441158497,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":159670.55368539388,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":166581.3665469828,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":127257.24249150496,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":136569.05701738512,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|668,245,313|87|
|Getter|51,588,297|89|
|Method|645,456,147|87|
|DefineProperty (getter)|645,472,283|89|
|DefineProperty (getter & enumerable=false)|39,160,118|89|
|DefineProperty (getter & configurable=false)|637,615,150|92|
|DefineProperty (getter & enumerable=false & configurable=false)|48,143,327|91|
|DefineProperty (writable)|684,677,587|90|
|DefineProperty (writable & enumerable=false)|677,853,303|89|
|DefineProperty (writable & enumerable=false & configurable=false)|650,495,223|88|
|DefineProperties (getter)|46,959,322|95|
|DefineProperties (getter & enumerable=false)|40,124,813|78|
|DefineProperties (getter & enumerable=false & configurable=false)|27,196,701|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":668245312.944697,"samples":8},{"name":"Getter","opsSec":51588296.7697237,"samples":9},{"name":"Method","opsSec":645456147.1541146,"samples":5},{"name":"DefineProperty (getter)","opsSec":645472282.8481256,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":39160118.43489028,"samples":4},{"name":"DefineProperty (getter & configurable=false)","opsSec":637615149.6761731,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48143327.25969553,"samples":6},{"name":"DefineProperty (writable)","opsSec":684677587.2402549,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":677853302.8774275,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":650495223.4338434,"samples":5},{"name":"DefineProperties (getter)","opsSec":46959322.110557266,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":40124813.03561731,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":27196701.264920805,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|398,887,414|94|
|Setter|6,709,546|94|
|Method|396,835,453|93|
|DefineProperty (setter)|397,492,607|93|
|DefineProperty (setter & enumerable=false)|6,646,897|95|
|DefineProperty (setter & configurable=false)|6,613,683|93|
|DefineProperty (setter & enumerable=false & configurable=false)|6,658,796|94|
|DefineProperty (writable)|401,546,125|96|
|DefineProperty (writable & enumerable=false)|407,044,355|92|
|DefineProperty (writable & enumerable=false & configurable=false)|383,117,720|95|
|DefineProperties (setter)|54,110,280|84|
|DefineProperties (setter & enumerable=false)|6,612,134|91|
|DefineProperties (setter & enumerable=false & configurable=false)|6,729,706|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":398887414.06453884,"samples":7},{"name":"Setter","opsSec":6709546.4369349675,"samples":5},{"name":"Method","opsSec":396835452.88335323,"samples":6},{"name":"DefineProperty (setter)","opsSec":397492606.9394934,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6646897.207536822,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6613682.504492846,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6658795.5126007665,"samples":5},{"name":"DefineProperty (writable)","opsSec":401546124.55719733,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":407044354.65217626,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":383117720.0894202,"samples":6},{"name":"DefineProperties (setter)","opsSec":54110279.50533904,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6612134.362026056,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6729705.77040094,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,188,327|91|
|Using replaceAll()|2,048,648|99|
|Using replaceAll(//g)|2,011,814|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2188326.6005223254,"samples":5},{"name":"Using replaceAll()","opsSec":2048647.8353346442,"samples":10},{"name":"Using replaceAll(//g)","opsSec":2011814.0469460806,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,057,243|84|
|{ ...object, __proto__: null }|15,740,084|84|
|{ ...object, newProp: true }|429,828|72|
|structuredClone|143,503|89|
|JSON.parse + JSON.stringify|109,222|91|
|loop + object.keys starting with {}|808,032|91|
|loop + object.keys starting with { __proto__: null }|360,766|90|
|loop + object.keys starting with { randomProp: true }|274,676|86|
|object.keys + reduce(FN, {})|273,529|88|
|object.keys + reduce(FN, { __proto__: null })|364,748|89|
|object.keys + reduce(FN, { newProp: true })|286,846|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":16057243.225925464,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15740084.023476662,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":429827.64346517326,"samples":3},{"name":"structuredClone","opsSec":143503.25698633128,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":109222.16627086038,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":808032.1088070995,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":360766.0711933288,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":274675.721257522,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":273529.0094185482,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":364747.6149400163,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":286845.90438605245,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,750|94|
|Sort using first char|760,264|93|
|Sort using localeCompare|700,999|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":148749.86598637816,"samples":4},{"name":"Sort using first char","opsSec":760264.0407413823,"samples":7},{"name":"Sort using localeCompare","opsSec":700998.7478825956,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,232|93|
|{...smallObject} - Total keys: 2|65,607,312|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,300|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,608|97|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,971|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,791,896|97|
|{ ...smallObject, ...anotherSmallObject }|14,613,851|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1231.7826255370333,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":65607311.99591686,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1299.8097448335739,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3607.927748015828,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.3838447391223,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013970.951960881,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19791896.195036467,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14613850.62595165,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,441|86|
|streams.web.Readable reading 1e3 * "some data"|1,720|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1441.213566063818,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1720.0200962977117,"samples":5}]}-->

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
