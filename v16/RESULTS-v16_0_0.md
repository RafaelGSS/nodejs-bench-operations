## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|578,568,244|92|
|Using dot notation|571,501,309|94|
|Using define property (writable)|2,452,843|96|
|Using define property initialized (writable)|3,085,000|93|
|Using define property (getter)|1,252,117|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":578568244.1663089,"samples":7},{"name":"Using dot notation","opsSec":571501308.611334,"samples":8},{"name":"Using define property (writable)","opsSec":2452842.747195422,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3085000.2901863456,"samples":5},{"name":"Using define property (getter)","opsSec":1252116.6190295815,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.688ms
new Array(length)|10,000|0.413ms
array.push|1,000,000|37.995ms
new Array(length)|1,000,000|11.773ms
array.push|100,000,000|2,064.318ms
new Array(length)|100,000,000|6,215.387ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.017ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.627ms
new Array(length)|10,000|5.123ms
array.push|1,000,000|111.511ms
new Array(length)|1,000,000|8.189ms
array.push|100,000,000|2,995.23ms
new Array(length)|100,000,000|6,006.845ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|83|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":309.4490031534857,"samples":4},{"name":"Array.from","opsSec":14.64404382922486,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,675|86|
|new Blob (1024)|575|70|
|text (128)|23,513|66|
|text (1024)|7,949|85|
|arrayBuffer (128)|24,579|83|
|arrayBuffer (1024)|8,807|83|
|slice (0, 64)|121,995|78|
|slice (0, 512)|22,429|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":4675.305176966804,"samples":4},{"name":"new Blob (1024)","opsSec":574.8932646633065,"samples":2},{"name":"text (128)","opsSec":23513.060108484457,"samples":4},{"name":"text (1024)","opsSec":7949.230290199846,"samples":4},{"name":"arrayBuffer (128)","opsSec":24578.702562179496,"samples":5},{"name":"arrayBuffer (1024)","opsSec":8806.835008697853,"samples":3},{"name":"slice (0, 64)","opsSec":121995.01519379718,"samples":4},{"name":"slice (0, 512)","opsSec":22429.474729447877,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|295,758|88|
|[True conditional] Using constructor name|291,376|83|
|[True conditional] Check if property is valid then instanceof |295,042|83|
|[False conditional] Using instanceof only|597,504,842|95|
|[False conditional] Using constructor name|597,530,054|93|
|[False conditional] Check if property is valid then instanceof |598,254,873|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":295757.5800036129,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":291376.063662766,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":295042.30199481087,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597504841.5619338,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":597530053.752214,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598254873.2192885,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,873|90|
|crypto.verify('RSA-SHA256')|20,255|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":20873.101092789806,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":20255.253343689743,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,585,569|89|
|fromUnixToISOString(new Date())|1,285,374|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1585569.390133239,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":1285374.2044676389,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,245|79|
|Intl.DateTimeFormat().format(new Date())|5,650|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,259|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,466|85|
|Reusing Intl.DateTimeFormat()|321,814|70|
|Date.toLocaleDateString()|411,805|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,427|76|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5244.723010011627,"samples":2},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5650.031979939175,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6258.824465414754,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6466.196750528312,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":321813.9888941722,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":411804.72938273515,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6427.15551913333,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|602,633|85|
|Using brackets {}|624,557|87|
|Using '' + |631,879|85|
|Using date.toString()|660,845|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":602632.5086052603,"samples":3},{"name":"Using brackets {}","opsSec":624557.080372521,"samples":5},{"name":"Using '' + ","opsSec":631879.4615605058,"samples":3},{"name":"Using date.toString()","opsSec":660845.4290266474,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,219,112|92|
|Using delete property (proto: null)|12,138,804|92|
|Using delete property (cached proto: null)|2,228,439|95|
|Using undefined assignment|704,707,617|97|
|Using undefined assignment (proto: null)|13,720,652|98|
|Using undefined property (cached proto: null)|706,255,321|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2219111.7071548626,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12138803.880772436,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2228439.0776670505,"samples":7},{"name":"Using undefined assignment","opsSec":704707617.3683493,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13720652.328208636,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":706255321.154418,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|292,775|86|
|NodeError|291,744|85|
|NodeError Range|287,891|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":292775.31276359956,"samples":4},{"name":"NodeError","opsSec":291744.3196064599,"samples":3},{"name":"NodeError Range","opsSec":287890.75726001983,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,232,984|98|
|Function returning explicitly undefined|1,212,774|91|
|Function returning implicitly undefined|1,258,891|95|
|Function returning string|1,233,040|95|
|Function returning integer|1,239,751|96|
|Function returning float|1,248,944|95|
|Function returning functions|1,206,655|97|
|Function returning arrow functions|1,226,310|97|
|Function returning empty object|1,243,132|92|
|Function returning empty array|1,252,111|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1232984.3297352113,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1212774.4520569644,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1258890.6542705284,"samples":7},{"name":"Function returning string","opsSec":1233039.5574362357,"samples":6},{"name":"Function returning integer","opsSec":1239750.7588091714,"samples":7},{"name":"Function returning float","opsSec":1248944.1611441483,"samples":6},{"name":"Function returning functions","opsSec":1206655.2612370967,"samples":7},{"name":"Function returning arrow functions","opsSec":1226310.415166324,"samples":8},{"name":"Function returning empty object","opsSec":1243132.270324563,"samples":6},{"name":"Function returning empty array","opsSec":1252111.4019044172,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|631,927,660|87|
|using Array.includes (first item)|643,553,642|89|
|Using raw comparison|640,039,834|90|
|Using raw comparison (first item)|610,639,704|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":631927659.5005157,"samples":6},{"name":"using Array.includes (first item)","opsSec":643553642.2097802,"samples":6},{"name":"Using raw comparison","opsSec":640039834.1541454,"samples":6},{"name":"Using raw comparison (first item)","opsSec":610639703.9116043,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,894,247|91|
|Using Object.getOwnPropertyNames()|52,101,262|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":55894247.48987529,"samples":9},{"name":"Using Object.getOwnPropertyNames()","opsSec":52101262.25994214,"samples":10}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|581,857,784|94|
|Length = 10_000 - Array[length - 1]|577,798,335|93|
|Length = 1_000_000 - Array[length - 1]|581,337,521|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:00:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":581857783.7169433,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":577798334.9664301,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":581337521.1558263,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,880,698|91|
|Object.create({})|1,279,069|84|
|Cached Empty.prototype|597,208,379|97|
|Empty.prototype|1,412,643|75|
|Empty class|844,024|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":47880698.27311134,"samples":6},{"name":"Object.create({})","opsSec":1279069.198215951,"samples":3},{"name":"Cached Empty.prototype","opsSec":597208378.507315,"samples":7},{"name":"Empty.prototype","opsSec":1412642.8404163637,"samples":3},{"name":"Empty class","opsSec":844023.8692182903,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,266,146|96|
|Using optional chain (obj.field?.field2) (undefined)|596,463,992|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,076,764|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,705,774|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593266145.9832981,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":596463991.670877,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597076763.9507191,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596705774.0134026,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|134,902,274|96|
|Using parseInt(x, 10) - big number (10 len)|10,918,059|94|
|Using + - small number (2 len)|704,818,605|95|
|Using + - big number (10 len)|701,968,654|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":134902274.13569093,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10918058.837425686,"samples":6},{"name":"Using + - small number (2 len)","opsSec":704818604.9131196,"samples":7},{"name":"Using + - big number (10 len)","opsSec":701968653.6844335,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|679,117|74|
|Using ? operator to avoid rejection|746,307|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":679117.2729305958,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":746307.2132510408,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,432,577|83|
|Raw usage underscore usage|4,711,024|86|
|Manipulating private properties using #|1,739,635|88|
|Manipulating private properties using underscore(_)|562,976,537|90|
|Manipulating private properties using Symbol|559,946,570|89|
|Manipulating private properties using PrivateSymbol|23,383,072|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5432576.95569644,"samples":4},{"name":"Raw usage underscore usage","opsSec":4711024.257062639,"samples":8},{"name":"Manipulating private properties using #","opsSec":1739634.6115208124,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":562976536.5138581,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":559946570.2106471,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":23383071.998934586,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,716,112|97|
|Adding property in the object creation - small object|1,737,235|97|
|Adding property after the function creation - small class|152,948|88|
|Adding property in the function creation - small class|154,166|87|
|Adding property after the class creation - small class|130,430|82|
|Adding property in the class creation - small class|130,631|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1716112.186523031,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1737235.1879072716,"samples":9},{"name":"Adding property after the function creation - small class","opsSec":152948.38740036136,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":154165.7163167123,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":130430.28615016266,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":130630.71912578121,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,206,112|97|
|Getter|67,939,834|96|
|Method|597,957,821|100|
|DefineProperty (getter)|596,856,600|95|
|DefineProperty (getter & enumerable=false)|69,287,865|94|
|DefineProperty (getter & configurable=false)|598,424,305|98|
|DefineProperty (getter & enumerable=false & configurable=false)|69,239,969|93|
|DefineProperty (writable)|368,788,511|63|
|DefineProperty (writable & enumerable=false)|92,852,863|75|
|DefineProperty (writable & enumerable=false & configurable=false)|91,103,143|76|
|DefineProperties (getter)|38,973,002|87|
|DefineProperties (getter & enumerable=false)|69,414,299|93|
|DefineProperties (getter & enumerable=false & configurable=false)|69,337,353|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597206111.7411176,"samples":9},{"name":"Getter","opsSec":67939833.71228674,"samples":5},{"name":"Method","opsSec":597957821.4628714,"samples":9},{"name":"DefineProperty (getter)","opsSec":596856600.1136036,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69287865.23050658,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":598424304.5634677,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69239968.51070358,"samples":5},{"name":"DefineProperty (writable)","opsSec":368788511.44283724,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92852863.4893125,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91103143.07506667,"samples":5},{"name":"DefineProperties (getter)","opsSec":38973001.71502672,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69414299.16218184,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69337352.84227608,"samples":8}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|536,312,482|85|
|Setter|5,548,494|92|
|Method|303,243,102|92|
|DefineProperty (setter)|538,414,104|83|
|DefineProperty (setter & enumerable=false)|5,558,657|92|
|DefineProperty (setter & configurable=false)|5,599,037|92|
|DefineProperty (setter & enumerable=false & configurable=false)|5,604,665|91|
|DefineProperty (writable)|585,876,475|94|
|DefineProperty (writable & enumerable=false)|70,965,909|52|
|DefineProperty (writable & enumerable=false & configurable=false)|67,101,894|78|
|DefineProperties (setter)|50,431,105|85|
|DefineProperties (setter & enumerable=false)|5,019,594|92|
|DefineProperties (setter & enumerable=false & configurable=false)|5,405,424|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":536312482.2620147,"samples":8},{"name":"Setter","opsSec":5548494.485961522,"samples":5},{"name":"Method","opsSec":303243101.7762311,"samples":6},{"name":"DefineProperty (setter)","opsSec":538414103.7873316,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5558657.387015978,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":5599037.255179316,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5604665.179179852,"samples":6},{"name":"DefineProperty (writable)","opsSec":585876475.1234941,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":70965909.26259995,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":67101894.35705832,"samples":6},{"name":"DefineProperties (setter)","opsSec":50431104.8063776,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5019594.218280127,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5405424.272326946,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,017,604|94|
|Using replaceAll()|1,912,319|97|
|Using replaceAll(//g)|1,780,308|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2017604.3622505632,"samples":5},{"name":"Using replaceAll()","opsSec":1912319.0001272482,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1780308.1630497423,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,621,125|93|
|{ ...object, __proto__: null }|14,993,073|92|
|{ ...object, newProp: true }|513,325|83|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|138,538|96|
|loop + object.keys starting with {}|364,365|93|
|loop + object.keys starting with { __proto__: null }|510,858|97|
|loop + object.keys starting with { randomProp: true }|373,164|94|
|object.keys + reduce(FN, {})|372,787|97|
|object.keys + reduce(FN, { __proto__: null })|523,439|97|
|object.keys + reduce(FN, { newProp: true })|387,691|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14621125.486116987,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":14993073.320287578,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":513325.39383521414,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":138538.39520592662,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":364364.8888506387,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":510858.0967656853,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":373163.71991327696,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":372786.72752792505,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":523438.91111815773,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":387690.60242647614,"samples":8}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|170,405|93|
|Sort using first char|743,219|89|
|Sort using localeCompare|401,909|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":170404.74379477132,"samples":7},{"name":"Sort using first char","opsSec":743219.1334467034,"samples":6},{"name":"Sort using localeCompare","opsSec":401908.6335774726,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,191|92|
|{...smallObject} - Total keys: 2|50,710,511|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,343|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,665|98|
|{ ...bigObject, ...anotherBigObject }|764|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,131,853|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,049,478|91|
|{ ...smallObject, ...anotherSmallObject }|12,309,255|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1191.4250601028036,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":50710511.441519074,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1343.230348928415,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3665.0773565025215,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":764.1357677953742,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8131852.802633198,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18049478.312141523,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12309254.878913946,"samples":5}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|597,199,429|99|
|Using backtick (`)|592,041,808|96|
|Using array.join|8,020,019|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":597199429.47407,"samples":7},{"name":"Using backtick (`)","opsSec":592041807.9066648,"samples":9},{"name":"Using array.join","opsSec":8020019.47264333,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,622,704|96|
|Using indexof|699,561,256|93|
|Using RegExp.test|11,609,023|95|
|Using RegExp.text with cached regex pattern|12,200,460|98|
|Using new RegExp.test|3,132,692|96|
|Using new RegExp.test with cached regex pattern|3,701,748|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":12622703.729015052,"samples":6},{"name":"Using indexof","opsSec":699561255.8077435,"samples":8},{"name":"Using RegExp.test","opsSec":11609022.6003699,"samples":9},{"name":"Using RegExp.text with cached regex pattern","opsSec":12200459.630489372,"samples":7},{"name":"Using new RegExp.test","opsSec":3132691.9476445634,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3701747.6932864753,"samples":7}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,090,522|88|
|Using this|134,620,960|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":130090522.39393044,"samples":11},{"name":"Using this","opsSec":134620959.8600578,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,315,279|96|
|Date.now()|13,747,111|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7315279.484512642,"samples":8},{"name":"Date.now()","opsSec":13747111.101360524,"samples":6}]}-->
