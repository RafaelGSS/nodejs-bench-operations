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
|Function returning null|1,932,412|94|
|Function returning explicitly undefined|1,924,070|95|
|Function returning implicitly undefined|1,981,217|96|
|Function returning string|1,834,648|93|
|Function returning integer|1,965,117|97|
|Function returning float|1,947,204|96|
|Function returning functions|1,895,626|94|
|Function returning arrow functions|1,901,793|95|
|Function returning empty object|1,953,149|97|
|Function returning empty array|1,953,335|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1932412.1312895406,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1924070.3549069932,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1981217.2577888928,"samples":6},{"name":"Function returning string","opsSec":1834647.8416559917,"samples":5},{"name":"Function returning integer","opsSec":1965117.3120946214,"samples":6},{"name":"Function returning float","opsSec":1947204.0516866052,"samples":5},{"name":"Function returning functions","opsSec":1895626.478698364,"samples":5},{"name":"Function returning arrow functions","opsSec":1901793.0712344758,"samples":5},{"name":"Function returning empty object","opsSec":1953149.4768564606,"samples":6},{"name":"Function returning empty array","opsSec":1953335.238470827,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,828,293|97|
|using Array.includes (first item)|852,244,473|97|
|Using raw comparison|852,668,252|98|
|Using raw comparison (first item)|852,088,124|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:17:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848828293.131362,"samples":6},{"name":"using Array.includes (first item)","opsSec":852244473.3054597,"samples":8},{"name":"Using raw comparison","opsSec":852668252.357157,"samples":6},{"name":"Using raw comparison (first item)","opsSec":852088124.1278126,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,327,229|94|
|Using Object.getOwnPropertyNames()|94,628,427|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:28:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":91327229.1187734,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":94628426.69334958,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,840,778|94|
|Length = 10_000 - Array.at|851,459,451|98|
|Length = 1_000_000 - Array.at|851,943,368|98|
|Length = 100 - Array[length - 1]|851,285,877|100|
|Length = 10_000 - Array[length - 1]|853,406,353|99|
|Length = 1_000_000 - Array[length - 1]|852,552,713|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:39:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":848840778.0274541,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":851459450.8816991,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":851943367.8012794,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":851285876.997601,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":853406353.3262714,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":852552712.9809711,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,922,345|97|
|Object.create({})|2,561,430|87|
|Cached Empty.prototype|853,794,574|99|
|Empty.prototype|2,462,674|87|
|Empty class|1,545,426|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:50:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78922344.99161421,"samples":9},{"name":"Object.create({})","opsSec":2561430.286597337,"samples":3},{"name":"Cached Empty.prototype","opsSec":853794574.1551179,"samples":6},{"name":"Empty.prototype","opsSec":2462673.7056259383,"samples":4},{"name":"Empty class","opsSec":1545426.1412864772,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|852,296,980|97|
|Using optional chain (obj.field?.field2) (undefined)|851,462,995|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,847,516|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|852,256,213|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":852296979.6503775,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":851462995.101839,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":850847516.3935051,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":852256213.4948736,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|852,198,667|95|
|Using parseInt(x, 10) - big number (10 len)|854,326,436|96|
|Using + - small number (2 len)|853,647,008|97|
|Using + - big number (10 len)|853,033,099|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:11:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":852198666.9030169,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":854326435.5307248,"samples":6},{"name":"Using + - small number (2 len)","opsSec":853647008.3421006,"samples":6},{"name":"Using + - big number (10 len)","opsSec":853033099.3163424,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,313,411|76|
|Using ? operator to avoid rejection|1,403,340|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:18:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1313410.5890770734,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1403340.2003649008,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|847,676,250|98|
|Raw usage underscore usage|850,325,431|94|
|Manipulating private properties using #|840,672,947|98|
|Manipulating private properties using underscore(_)|841,694,265|90|
|Manipulating private properties using Symbol|839,963,651|89|
|Manipulating private properties using PrivateSymbol|57,238,123|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:30:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":847676249.6741612,"samples":6},{"name":"Raw usage underscore usage","opsSec":850325431.1888927,"samples":8},{"name":"Manipulating private properties using #","opsSec":840672947.2353982,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":841694264.7981285,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":839963650.9562843,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":57238123.147293754,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,349,103|96|
|Adding property in the object creation - small object|8,503,698|98|
|Adding property after the function creation - small class|261,654|89|
|Adding property in the function creation - small class|262,058|92|
|Adding property after the class creation - small class|219,086|87|
|Adding property in the class creation - small class|218,033|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:43:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8349103.281725993,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8503698.489176273,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":261654.2157907303,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":262058.32723621346,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":219085.71493845485,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":218032.53016660258,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|852,623,855|96|
|Getter|95,083,405|97|
|Method|853,109,714|99|
|DefineProperty (getter)|853,315,778|98|
|DefineProperty (getter & enumerable=false)|95,195,019|99|
|DefineProperty (getter & configurable=false)|855,517,827|100|
|DefineProperty (getter & enumerable=false & configurable=false)|95,280,246|94|
|DefineProperty (writable)|855,435,724|100|
|DefineProperty (writable & enumerable=false)|856,014,168|99|
|DefineProperty (writable & enumerable=false & configurable=false)|855,459,946|99|
|DefineProperties (getter)|94,807,837|94|
|DefineProperties (getter & enumerable=false)|95,461,288|96|
|DefineProperties (getter & enumerable=false & configurable=false)|65,228,093|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:02:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":852623854.735423,"samples":6},{"name":"Getter","opsSec":95083404.82965504,"samples":5},{"name":"Method","opsSec":853109714.4113309,"samples":6},{"name":"DefineProperty (getter)","opsSec":853315777.5674076,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95195019.3544878,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":855517827.3374816,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95280245.87546937,"samples":6},{"name":"DefineProperty (writable)","opsSec":855435723.7673348,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":856014168.0679314,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":855459945.8472077,"samples":7},{"name":"DefineProperties (getter)","opsSec":94807836.53560084,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95461287.53391291,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":65228092.55222711,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,224,971|100|
|Setter|12,475,311|99|
|Method|847,445,309|98|
|DefineProperty (setter)|846,336,888|98|
|DefineProperty (setter & enumerable=false)|12,304,369|96|
|DefineProperty (setter & configurable=false)|12,347,672|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,170,501|98|
|DefineProperty (writable)|847,340,716|98|
|DefineProperty (writable & enumerable=false)|849,009,656|98|
|DefineProperty (writable & enumerable=false & configurable=false)|847,564,754|99|
|DefineProperties (setter)|848,767,483|100|
|DefineProperties (setter & enumerable=false)|12,094,112|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,045,309|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:23:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842224971.3315878,"samples":6},{"name":"Setter","opsSec":12475311.348692842,"samples":4},{"name":"Method","opsSec":847445309.2741455,"samples":8},{"name":"DefineProperty (setter)","opsSec":846336887.6048079,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12304369.152569126,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12347672.058002658,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12170500.797664164,"samples":4},{"name":"DefineProperty (writable)","opsSec":847340715.7938131,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849009655.5176858,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":847564753.899984,"samples":9},{"name":"DefineProperties (setter)","opsSec":848767482.8130318,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12094111.878476959,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11045308.70485468,"samples":4}]}-->

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
