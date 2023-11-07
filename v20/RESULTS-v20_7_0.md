## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|852,449,418|96|
|Using dot notation|853,526,935|99|
|Using define property (writable)|4,775,186|96|
|Using define property initialized (writable)|6,443,108|95|
|Using define property (getter)|2,483,856|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":852449417.9952933,"samples":6},{"name":"Using dot notation","opsSec":853526934.8407301,"samples":6},{"name":"Using define property (writable)","opsSec":4775186.499770695,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6443108.423486155,"samples":6},{"name":"Using define property (getter)","opsSec":2483856.4074469754,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.311ms
new Array(length)|10,000|0.322ms
array.push|1,000,000|30.6ms
new Array(length)|1,000,000|7.318ms
array.push|100,000,000|1,745.578ms
new Array(length)|100,000,000|4,219.819ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.016ms
array.push|100|0.013ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.227ms
new Array(length)|10,000|0.237ms
array.push|1,000,000|22.495ms
new Array(length)|1,000,000|4.151ms
array.push|100,000,000|2,491.633ms
new Array(length)|100,000,000|3,916.569ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|312|88|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":311.53157081763237,"samples":3},{"name":"Array.from","opsSec":23.091832743776074,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,533,035|100|
|[async] async function|17,914,079|84|
|[async] function|184,520|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854533034.9119725,"samples":6},{"name":"[async] async function","opsSec":17914079.205193274,"samples":7},{"name":"[async] function","opsSec":184519.85073973157,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,590|85|
|new Blob (1024)|587|74|
|text (128)|4,946|85|
|text (1024)|624|89|
|arrayBuffer (128)|4,962|88|
|arrayBuffer (1024)|625|89|
|slice (0, 64)|70,993|72|
|slice (0, 512)|18,712|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:31:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4589.885041229884,"samples":3},{"name":"new Blob (1024)","opsSec":587.1863564063412,"samples":3},{"name":"text (128)","opsSec":4946.28556961351,"samples":5},{"name":"text (1024)","opsSec":624.4400371887767,"samples":2},{"name":"arrayBuffer (128)","opsSec":4962.145159563841,"samples":3},{"name":"arrayBuffer (1024)","opsSec":625.3830271416936,"samples":2},{"name":"slice (0, 64)","opsSec":70993.47675863247,"samples":3},{"name":"slice (0, 512)","opsSec":18711.621356796953,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,863|52|
|[True conditional] Using constructor name|180,522|97|
|[True conditional] Check if property is valid then instanceof |180,180|94|
|[False conditional] Using instanceof only|855,347,893|97|
|[False conditional] Using constructor name|855,649,052|96|
|[False conditional] Check if property is valid then instanceof |856,062,244|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:42:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227863.30548466943,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":180522.38099894827,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":180179.75801814257,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":855347892.9063548,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":855649051.5793012,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":856062244.3962877,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,731|96|
|crypto.verify('RSA-SHA256')|6,780|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:54:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6730.522752796074,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6780.110254699254,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,492,315|100|
|fromUnixToISOString(new Date())|2,153,749|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:04:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1492314.654605094,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2153749.2021152414,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,401|85|
|Intl.DateTimeFormat().format(new Date())|17,987|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,725|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,633|84|
|Reusing Intl.DateTimeFormat()|678,990|96|
|Date.toLocaleDateString()|735,723|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,825|89|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18400.957428539205,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17987.49575372949,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18724.575630803556,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21633.150283573475,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":678989.928706529,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":735722.7789387375,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19824.54152439775,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,745|95|
|Using brackets {}|1,102,085|99|
|Using '' + |1,092,398|98|
|Using date.toString()|1,201,451|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:27:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1070745.2662850157,"samples":5},{"name":"Using brackets {}","opsSec":1102084.5056902706,"samples":5},{"name":"Using '' + ","opsSec":1092397.8571778508,"samples":5},{"name":"Using date.toString()","opsSec":1201450.892540683,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,002,394|94|
|Using delete property (proto: null)|21,570,353|98|
|Using delete property (cached proto: null)|4,052,005|96|
|Using undefined assignment|851,874,978|100|
|Using undefined assignment (proto: null)|23,062,112|96|
|Using undefined property (cached proto: null)|850,982,147|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":4002394.2037013406,"samples":7},{"name":"Using delete property (proto: null)","opsSec":21570353.138589215,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4052004.887853679,"samples":5},{"name":"Using undefined assignment","opsSec":851874978.1800672,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23062111.97521027,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":850982147.027549,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|224,374|53|
|NodeError|179,191|95|
|NodeError Range|180,363|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:47:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":224374.14990139304,"samples":3},{"name":"NodeError","opsSec":179190.90753330395,"samples":3},{"name":"NodeError Range","opsSec":180363.49882835985,"samples":3}]}-->

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

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|712,772,886|94|
|Using parseInt(x, 10) - big number (10 len)|717,443,836|96|
|Using + - small number (2 len)|718,132,941|97|
|Using + - big number (10 len)|714,407,679|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":712772885.5928516,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":717443836.0608932,"samples":7},{"name":"Using + - small number (2 len)","opsSec":718132941.2196827,"samples":6},{"name":"Using + - big number (10 len)","opsSec":714407678.9062715,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|611,759|67|
|Using ? operator to avoid rejection|650,693|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":611758.8806813485,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":650692.9985602484,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|557,858,269|89|
|Raw usage underscore usage|566,656,030|90|
|Manipulating private properties using #|560,553,474|92|
|Manipulating private properties using underscore(_)|548,405,650|84|
|Manipulating private properties using Symbol|579,262,697|90|
|Manipulating private properties using PrivateSymbol|26,245,580|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":557858268.6516926,"samples":7},{"name":"Raw usage underscore usage","opsSec":566656029.8947797,"samples":6},{"name":"Manipulating private properties using #","opsSec":560553474.422821,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":548405650.05479,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":579262696.7071878,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":26245580.41485384,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,792,586|97|
|Adding property in the object creation - small object|5,823,614|94|
|Adding property after the function creation - small class|190,577|81|
|Adding property in the function creation - small class|197,572|81|
|Adding property after the class creation - small class|159,297|76|
|Adding property in the class creation - small class|159,355|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5792586.359565447,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5823613.924233706,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":190577.2552585519,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":197572.45513073466,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":159296.8133493271,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":159354.89159198056,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|714,615,317|96|
|Getter|53,870,780|93|
|Method|716,452,378|98|
|DefineProperty (getter)|715,538,115|95|
|DefineProperty (getter & enumerable=false)|53,908,067|97|
|DefineProperty (getter & configurable=false)|718,525,817|93|
|DefineProperty (getter & enumerable=false & configurable=false)|54,016,775|92|
|DefineProperty (writable)|718,052,402|99|
|DefineProperty (writable & enumerable=false)|718,545,891|96|
|DefineProperty (writable & enumerable=false & configurable=false)|580,335,910|79|
|DefineProperties (getter)|31,407,274|90|
|DefineProperties (getter & enumerable=false)|53,747,842|97|
|DefineProperties (getter & enumerable=false & configurable=false)|53,707,570|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":714615317.0029291,"samples":5},{"name":"Getter","opsSec":53870779.5812216,"samples":5},{"name":"Method","opsSec":716452377.9487798,"samples":7},{"name":"DefineProperty (getter)","opsSec":715538114.8435581,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53908067.316230446,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":718525817.3254031,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":54016774.85270814,"samples":5},{"name":"DefineProperty (writable)","opsSec":718052401.8665624,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":718545890.6598184,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":580335910.4936612,"samples":6},{"name":"DefineProperties (getter)","opsSec":31407273.892356824,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53747842.14102682,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53707569.71721647,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,639,430|96|
|Setter|8,424,897|95|
|Method|478,971,909|90|
|DefineProperty (setter)|481,229,632|93|
|DefineProperty (setter & enumerable=false)|8,538,887|94|
|DefineProperty (setter & configurable=false)|8,564,685|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,488,411|97|
|DefineProperty (writable)|482,632,603|97|
|DefineProperty (writable & enumerable=false)|482,178,287|98|
|DefineProperty (writable & enumerable=false & configurable=false)|465,087,115|92|
|DefineProperties (setter)|528,069,718|73|
|DefineProperties (setter & enumerable=false)|8,581,982|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,192,175|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478639429.7115703,"samples":6},{"name":"Setter","opsSec":8424896.517390616,"samples":6},{"name":"Method","opsSec":478971908.8113755,"samples":6},{"name":"DefineProperty (setter)","opsSec":481229632.49392205,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8538887.218901835,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8564684.677992905,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8488410.935214823,"samples":4},{"name":"DefineProperty (writable)","opsSec":482632603.0919815,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":482178287.42481714,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":465087115.38313085,"samples":6},{"name":"DefineProperties (setter)","opsSec":528069717.56123173,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8581982.35606329,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8192174.922956094,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,937,917|81|
|Using replaceAll()|1,876,475|88|
|Using replaceAll(//g)|1,718,545|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1937917.089012237,"samples":4},{"name":"Using replaceAll()","opsSec":1876475.0562634943,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1718544.9216759992,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,852,260|91|
|{ ...object, __proto__: null }|20,348,246|95|
|{ ...object, newProp: true }|579,782|84|
|structuredClone|183,957|97|
|JSON.parse + JSON.stringify|148,147|94|
|loop + object.keys starting with {}|855,158|98|
|loop + object.keys starting with { __proto__: null }|480,892|95|
|loop + object.keys starting with { randomProp: true }|378,049|96|
|object.keys + reduce(FN, {})|856,494|98|
|object.keys + reduce(FN, { __proto__: null })|479,439|95|
|object.keys + reduce(FN, { newProp: true })|361,208|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":19852260.326118883,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20348245.63173263,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":579781.5943110312,"samples":3},{"name":"structuredClone","opsSec":183956.82689615004,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":148147.30126042484,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":855158.4763738696,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":480892.18726879935,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378049.27552568633,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":856494.1810627059,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":479438.8972292367,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":361208.2608124448,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|167,101|87|
|Sort using first char|900,381|87|
|Sort using localeCompare|816,049|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":167101.3916637943,"samples":3},{"name":"Sort using first char","opsSec":900381.2513326204,"samples":4},{"name":"Sort using localeCompare","opsSec":816048.5890010904,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,055|88|
|{...smallObject} - Total keys: 2|53,534,960|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,141|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,136|89|
|{ ...bigObject, ...anotherBigObject }|670|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,655,798|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,887,446|88|
|{ ...smallObject, ...anotherSmallObject }|13,874,581|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:52:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1055.4795558868884,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":53534960.140993945,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1140.793178154641,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3136.138116735847,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":669.7542448323228,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8655797.630680146,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":21887446.161587518,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13874580.951619232,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|994|79|
|streams.web.Readable reading 1e3 * "some data"|404|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":994.1011545519042,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":404.4938893757117,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,274|89|
|streams.web.WritableStream writing 1e3 * "some data"|669|46|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3273.632409598555,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":669.176586292141,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|697,146,701|90|
|Using backtick (`)|696,815,615|92|
|Using array.join|5,027,889|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":697146701.3501972,"samples":8},{"name":"Using backtick (`)","opsSec":696815615.4607575,"samples":6},{"name":"Using array.join","opsSec":5027888.860720751,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|644,005,648|84|
|Using indexof|695,660,239|89|
|Using RegExp.test|9,339,049|86|
|Using RegExp.text with cached regex pattern|10,062,748|86|
|Using new RegExp.test|2,593,990|88|
|Using new RegExp.test with cached regex pattern|3,012,154|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":644005648.2294425,"samples":7},{"name":"Using indexof","opsSec":695660238.8227798,"samples":9},{"name":"Using RegExp.test","opsSec":9339049.00295243,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":10062748.214246212,"samples":4},{"name":"Using new RegExp.test","opsSec":2593990.21453556,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3012154.0463277553,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|585,469,171|92|
|Using this|590,956,380|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":585469171.311318,"samples":8},{"name":"Using this","opsSec":590956379.5905637,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,255,936|93|
|Date.now()|14,221,796|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7255936.017007365,"samples":5},{"name":"Date.now()","opsSec":14221796.394888004,"samples":5}]}-->
