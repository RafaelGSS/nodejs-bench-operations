## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,474,013|96|
|Using dot notation|596,079,743|95|
|Using define property (writable)|2,647,598|96|
|Using define property initialized (writable)|3,462,715|95|
|Using define property (getter)|1,407,888|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591474012.7384559,"samples":6},{"name":"Using dot notation","opsSec":596079742.7008108,"samples":6},{"name":"Using define property (writable)","opsSec":2647597.84386132,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3462714.5357824177,"samples":5},{"name":"Using define property (getter)","opsSec":1407888.025319229,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.003ms
array.push|100|0.036ms
new Array(length)|100|0.011ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.568ms
array.push|1,000,000|39.531ms
new Array(length)|1,000,000|9.656ms
array.push|100,000,000|2,052.482ms
new Array(length)|100,000,000|5,831.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.02ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.416ms
new Array(length)|10,000|0.439ms
array.push|1,000,000|30.719ms
new Array(length)|1,000,000|5.774ms
array.push|100,000,000|2,199.721ms
new Array(length)|100,000,000|5,960.651ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|320|81|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":320.1380734584321,"samples":5},{"name":"Array.from","opsSec":16.059831738252115,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,800|81|
|new Blob (1024)|379|66|
|text (128)|3,010|79|
|text (1024)|389|78|
|arrayBuffer (128)|3,039|82|
|arrayBuffer (1024)|387|81|
|slice (0, 64)|37,360|64|
|slice (0, 512)|10,812|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2800.177702631949,"samples":3},{"name":"new Blob (1024)","opsSec":378.7273947485891,"samples":2},{"name":"text (128)","opsSec":3010.072479340216,"samples":4},{"name":"text (1024)","opsSec":388.81848918816985,"samples":2},{"name":"arrayBuffer (128)","opsSec":3039.1856191172606,"samples":4},{"name":"arrayBuffer (1024)","opsSec":386.98008929393563,"samples":2},{"name":"slice (0, 64)","opsSec":37359.90329147215,"samples":4},{"name":"slice (0, 512)","opsSec":10811.981482266869,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,320|62|
|[True conditional] Using constructor name|147,048|95|
|[True conditional] Check if property is valid then instanceof |148,326|96|
|[False conditional] Using instanceof only|718,306,226|96|
|[False conditional] Using constructor name|717,501,939|94|
|[False conditional] Check if property is valid then instanceof |718,967,558|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181319.67023824682,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":147047.94090217812,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148326.1491487359,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":718306226.1584672,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":717501938.6842595,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718967557.7443843,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,288|83|
|crypto.verify('RSA-SHA256')|3,504|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3287.5270011181387,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3504.316536143563,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,079,499|98|
|fromUnixToISOString(new Date())|1,612,949|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1079499.490225639,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1612949.4240480254,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,003|78|
|Intl.DateTimeFormat().format(new Date())|10,404|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,329|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,071|73|
|Reusing Intl.DateTimeFormat()|519,317|86|
|Date.toLocaleDateString()|495,587|83|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,070|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11002.68760808246,"samples":9},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10404.349408668168,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13329.296346602649,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11071.198531327878,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":519317.21100407187,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":495586.9213459659,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13070.273333776035,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|567,452|89|
|Using brackets {}|579,557|94|
|Using '' + |557,254|87|
|Using date.toString()|617,229|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":567452.1110172027,"samples":3},{"name":"Using brackets {}","opsSec":579557.3142243067,"samples":4},{"name":"Using '' + ","opsSec":557254.1272123803,"samples":5},{"name":"Using date.toString()","opsSec":617228.5434775515,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,714,166|95|
|Using delete property (proto: null)|12,232,547|92|
|Using delete property (cached proto: null)|2,750,584|98|
|Using undefined assignment|715,128,082|98|
|Using undefined assignment (proto: null)|13,405,165|96|
|Using undefined property (cached proto: null)|713,094,043|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2714166.170443191,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12232546.716544235,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2750583.66303476,"samples":5},{"name":"Using undefined assignment","opsSec":715128081.5746952,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13405164.557278497,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":713094043.2178687,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|150,320|57|
|NodeError|125,168|89|
|NodeError Range|121,369|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":150320.21437280008,"samples":3},{"name":"NodeError","opsSec":125167.86273457218,"samples":3},{"name":"NodeError Range","opsSec":121369.45966283901,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,245,285|83|
|Function returning explicitly undefined|1,313,577|85|
|Function returning implicitly undefined|1,357,628|86|
|Function returning string|1,295,583|88|
|Function returning integer|1,294,955|84|
|Function returning float|1,309,118|84|
|Function returning functions|1,234,784|85|
|Function returning arrow functions|1,184,480|79|
|Function returning empty object|1,303,036|89|
|Function returning empty array|1,195,027|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1245284.5675843263,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1313576.53253087,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1357627.7273810764,"samples":3},{"name":"Function returning string","opsSec":1295583.094467572,"samples":6},{"name":"Function returning integer","opsSec":1294954.9124638506,"samples":5},{"name":"Function returning float","opsSec":1309118.3250553096,"samples":5},{"name":"Function returning functions","opsSec":1234784.458605391,"samples":7},{"name":"Function returning arrow functions","opsSec":1184480.019599985,"samples":7},{"name":"Function returning empty object","opsSec":1303036.2734641526,"samples":4},{"name":"Function returning empty array","opsSec":1195027.1778084415,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|694,556,093|83|
|using Array.includes (first item)|715,230,373|89|
|Using raw comparison|716,528,313|89|
|Using raw comparison (first item)|724,270,054|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":694556093.4297596,"samples":7},{"name":"using Array.includes (first item)","opsSec":715230372.7591176,"samples":8},{"name":"Using raw comparison","opsSec":716528313.2090039,"samples":6},{"name":"Using raw comparison (first item)","opsSec":724270053.7947059,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,532,600|85|
|Using Object.getOwnPropertyNames()|47,248,800|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","opsSec":44532599.74934348,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":47248800.48849268,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,694,844|99|
|Length = 10_000 - Array.at|714,692,180|97|
|Length = 1_000_000 - Array.at|715,956,756|95|
|Length = 100 - Array[length - 1]|716,193,660|96|
|Length = 10_000 - Array[length - 1]|715,381,097|95|
|Length = 1_000_000 - Array[length - 1]|716,563,552|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":713694844.1357394,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":714692180.0335612,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":715956755.9308528,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":716193659.9812897,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":715381097.211388,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":716563551.9868115,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,342,634|80|
|Object.create({})|1,306,872|74|
|Cached Empty.prototype|681,361,367|89|
|Empty.prototype|1,178,425|73|
|Empty class|839,219|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40342633.68748828,"samples":6},{"name":"Object.create({})","opsSec":1306871.9619049723,"samples":4},{"name":"Cached Empty.prototype","opsSec":681361367.2035276,"samples":6},{"name":"Empty.prototype","opsSec":1178425.3899849874,"samples":3},{"name":"Empty class","opsSec":839218.9597348523,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|599,903,555|96|
|Using optional chain (obj.field?.field2) (undefined)|600,408,708|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,872,802|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,065,775|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":599903554.9614373,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":600408708.3300691,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":598872802.2177804,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599065774.7239271,"samples":6}]}-->
