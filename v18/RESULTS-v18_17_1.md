## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|698,759,773|95|
|Using dot notation|706,187,680|94|
|Using define property (writable)|2,900,254|97|
|Using define property initialized (writable)|3,758,843|92|
|Using define property (getter)|1,492,693|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":698759772.592362,"samples":6},{"name":"Using dot notation","opsSec":706187680.0460653,"samples":6},{"name":"Using define property (writable)","opsSec":2900254.164579769,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3758843.3797920495,"samples":7},{"name":"Using define property (getter)","opsSec":1492692.9832559023,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.38ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|28.99ms
new Array(length)|1,000,000|17.374ms
array.push|100,000,000|1,579.417ms
new Array(length)|100,000,000|4,341.191ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.612ms
new Array(length)|10,000|4.323ms
array.push|1,000,000|336.253ms
new Array(length)|1,000,000|4.379ms
array.push|100,000,000|2,143.975ms
new Array(length)|100,000,000|4,750.627ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|381|86|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":381.1493476840628,"samples":5},{"name":"Array.from","opsSec":16.064440387951755,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,378|91|
|new Blob (1024)|430|71|
|text (128)|31,171|78|
|text (1024)|22,674|83|
|arrayBuffer (128)|31,141|81|
|arrayBuffer (1024)|23,523|86|
|slice (0, 64)|54,420|75|
|slice (0, 512)|27,201|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3378.054237974091,"samples":3},{"name":"new Blob (1024)","opsSec":430.0173153812039,"samples":2},{"name":"text (128)","opsSec":31171.47618106299,"samples":4},{"name":"text (1024)","opsSec":22673.522626879192,"samples":4},{"name":"arrayBuffer (128)","opsSec":31141.42176477799,"samples":5},{"name":"arrayBuffer (1024)","opsSec":23523.115307515083,"samples":5},{"name":"slice (0, 64)","opsSec":54419.9762709935,"samples":4},{"name":"slice (0, 512)","opsSec":27200.766638190118,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,929|56|
|[True conditional] Using constructor name|147,195|95|
|[True conditional] Check if property is valid then instanceof |148,436|92|
|[False conditional] Using instanceof only|710,383,937|96|
|[False conditional] Using constructor name|711,270,795|96|
|[False conditional] Check if property is valid then instanceof |709,187,161|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186928.61680602902,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":147195.09400614188,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148435.6472283005,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710383936.9322736,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":711270794.9951831,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709187160.6412472,"samples":10}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,135|84|
|crypto.verify('RSA-SHA256')|3,276|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3134.8081558040385,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":3276.1473921331185,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,943,380|96|
|fromUnixToISOString(new Date())|1,481,966|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1943379.5663908797,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1481966.3058995241,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,360|82|
|Intl.DateTimeFormat().format(new Date())|7,681|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,327|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,835|89|
|Reusing Intl.DateTimeFormat()|453,595|85|
|Date.toLocaleDateString()|468,965|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,475|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7360.390332306133,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7680.972570099218,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7326.667020333126,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8835.432616243752,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":453595.3069313207,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":468965.2657166706,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8474.506643035857,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|662,440|96|
|Using brackets {}|671,277|97|
|Using '' + |673,280|95|
|Using date.toString()|729,625|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":662440.4410756422,"samples":6},{"name":"Using brackets {}","opsSec":671276.7889527377,"samples":3},{"name":"Using '' + ","opsSec":673279.6464200801,"samples":5},{"name":"Using date.toString()","opsSec":729625.2253810893,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,357,652|93|
|Using delete property (proto: null)|15,623,236|94|
|Using delete property (cached proto: null)|2,342,636|97|
|Using undefined assignment|591,401,134|95|
|Using undefined assignment (proto: null)|18,389,836|95|
|Using undefined property (cached proto: null)|596,774,611|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2357652.029733667,"samples":6},{"name":"Using delete property (proto: null)","opsSec":15623235.951504914,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2342636.438515452,"samples":8},{"name":"Using undefined assignment","opsSec":591401133.7591665,"samples":9},{"name":"Using undefined assignment (proto: null)","opsSec":18389836.432212405,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":596774611.3276551,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|147,145|58|
|NodeError|114,439|90|
|NodeError Range|115,260|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Error","opsSec":147145.472953704,"samples":3},{"name":"NodeError","opsSec":114438.67271547753,"samples":3},{"name":"NodeError Range","opsSec":115260.01499788812,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,169,279|95|
|Function returning explicitly undefined|1,155,889|95|
|Function returning implicitly undefined|1,175,871|94|
|Function returning string|1,164,542|94|
|Function returning integer|1,186,502|94|
|Function returning float|1,173,853|93|
|Function returning functions|1,153,259|97|
|Function returning arrow functions|1,158,654|95|
|Function returning empty object|1,119,176|99|
|Function returning empty array|1,142,587|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1169278.5168891784,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1155889.3298547731,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1175870.6054133289,"samples":5},{"name":"Function returning string","opsSec":1164541.6430596157,"samples":5},{"name":"Function returning integer","opsSec":1186501.6731318068,"samples":5},{"name":"Function returning float","opsSec":1173852.7365177416,"samples":5},{"name":"Function returning functions","opsSec":1153259.4257190733,"samples":8},{"name":"Function returning arrow functions","opsSec":1158653.9715933606,"samples":5},{"name":"Function returning empty object","opsSec":1119176.1153974072,"samples":8},{"name":"Function returning empty array","opsSec":1142587.203505465,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|763,863,292|83|
|using Array.includes (first item)|755,063,585|88|
|Using raw comparison|753,269,747|85|
|Using raw comparison (first item)|738,311,208|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":763863291.9535702,"samples":7},{"name":"using Array.includes (first item)","opsSec":755063584.7079412,"samples":8},{"name":"Using raw comparison","opsSec":753269746.9506811,"samples":6},{"name":"Using raw comparison (first item)","opsSec":738311208.2220647,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,089,443|95|
|Using Object.getOwnPropertyNames()|68,462,971|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":63089442.7971204,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":68462971.3523513,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,255,130|96|
|Length = 10_000 - Array.at|18,901,674|94|
|Length = 1_000_000 - Array.at|18,703,211|97|
|Length = 100 - Array[length - 1]|592,374,453|94|
|Length = 10_000 - Array[length - 1]|591,399,045|96|
|Length = 1_000_000 - Array[length - 1]|591,312,685|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19255129.613928806,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":18901674.170357093,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18703211.478133112,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":592374453.1636695,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":591399044.8258128,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":591312685.4918702,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,480,209|91|
|Object.create({})|1,023,335|79|
|Cached Empty.prototype|592,101,543|98|
|Empty.prototype|1,135,659|82|
|Empty class|655,152|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":55480208.69424268,"samples":6},{"name":"Object.create({})","opsSec":1023335.1740491575,"samples":3},{"name":"Cached Empty.prototype","opsSec":592101543.0796096,"samples":7},{"name":"Empty.prototype","opsSec":1135659.481125978,"samples":4},{"name":"Empty class","opsSec":655151.6085755026,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,027,840|97|
|Using optional chain (obj.field?.field2) (undefined)|709,207,674|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,949,208|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,173,819|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":709027839.7148709,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":709207673.9851993,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709949208.388079,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":708173819.297855,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,868,069|96|
|Using parseInt(x, 10) - big number (10 len)|13,890,102|98|
|Using + - small number (2 len)|711,941,634|97|
|Using + - big number (10 len)|710,131,081|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157868069.44599557,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13890102.408264643,"samples":5},{"name":"Using + - small number (2 len)","opsSec":711941634.1934459,"samples":6},{"name":"Using + - big number (10 len)","opsSec":710131081.0532333,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|639,801|75|
|Using ? operator to avoid rejection|680,665|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":639800.7679826062,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":680664.8714630165,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|112,401,086|81|
|Raw usage underscore usage|111,904,759|84|
|Manipulating private properties using #|72,023,178|80|
|Manipulating private properties using underscore(_)|55,860,301|81|
|Manipulating private properties using Symbol|57,480,219|83|
|Manipulating private properties using PrivateSymbol|23,471,708|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":112401086.1323972,"samples":5},{"name":"Raw usage underscore usage","opsSec":111904759.02305834,"samples":8},{"name":"Manipulating private properties using #","opsSec":72023177.64947855,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":55860301.33196139,"samples":10},{"name":"Manipulating private properties using Symbol","opsSec":57480218.5587273,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":23471708.032987703,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,600,913|95|
|Adding property in the object creation - small object|1,648,914|95|
|Adding property after the function creation - small class|129,648|84|
|Adding property in the function creation - small class|128,808|86|
|Adding property after the class creation - small class|105,451|82|
|Adding property in the class creation - small class|104,065|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1600912.9813040034,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":1648913.9840061658,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":129648.48326843743,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":128807.90837424061,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":105450.90077755273,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":104065.35762563278,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,704,176|99|
|Getter|53,256,969|97|
|Method|708,168,472|98|
|DefineProperty (getter)|706,345,582|96|
|DefineProperty (getter & enumerable=false)|52,857,148|93|
|DefineProperty (getter & configurable=false)|709,699,629|98|
|DefineProperty (getter & enumerable=false & configurable=false)|53,236,417|96|
|DefineProperty (writable)|707,975,729|96|
|DefineProperty (writable & enumerable=false)|659,693,435|89|
|DefineProperty (writable & enumerable=false & configurable=false)|81,267,582|81|
|DefineProperties (getter)|33,227,988|88|
|DefineProperties (getter & enumerable=false)|52,770,954|97|
|DefineProperties (getter & enumerable=false & configurable=false)|53,210,154|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":709704176.3227296,"samples":7},{"name":"Getter","opsSec":53256969.39796021,"samples":6},{"name":"Method","opsSec":708168471.9267535,"samples":12},{"name":"DefineProperty (getter)","opsSec":706345581.8188125,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52857147.542358495,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":709699628.8134824,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53236417.45400242,"samples":6},{"name":"DefineProperty (writable)","opsSec":707975729.0565277,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":659693434.8836887,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81267582.4592105,"samples":5},{"name":"DefineProperties (getter)","opsSec":33227988.42516913,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52770953.95493766,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53210153.85194033,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|379,928,546|93|
|Setter|6,252,856|84|
|Method|394,899,558|93|
|DefineProperty (setter)|394,570,479|95|
|DefineProperty (setter & enumerable=false)|6,288,935|95|
|DefineProperty (setter & configurable=false)|6,405,530|89|
|DefineProperty (setter & enumerable=false & configurable=false)|6,247,006|96|
|DefineProperty (writable)|586,034,650|94|
|DefineProperty (writable & enumerable=false)|492,518,182|87|
|DefineProperty (writable & enumerable=false & configurable=false)|68,653,988|82|
|DefineProperties (setter)|51,476,021|87|
|DefineProperties (setter & enumerable=false)|6,260,336|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,234,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":379928546.49337554,"samples":6},{"name":"Setter","opsSec":6252855.6792115355,"samples":6},{"name":"Method","opsSec":394899558.0374539,"samples":8},{"name":"DefineProperty (setter)","opsSec":394570479.29677445,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6288934.693085386,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6405529.913741313,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6247005.9578157645,"samples":5},{"name":"DefineProperty (writable)","opsSec":586034649.967778,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":492518181.74035215,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68653987.86405645,"samples":6},{"name":"DefineProperties (setter)","opsSec":51476020.824865684,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6260336.365752524,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6234452.503545127,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,697,665|90|
|Using replaceAll()|1,638,665|98|
|Using replaceAll(//g)|1,559,961|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1697665.285439036,"samples":6},{"name":"Using replaceAll()","opsSec":1638664.7801619328,"samples":9},{"name":"Using replaceAll(//g)","opsSec":1559960.6055223013,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,106,684|93|
|{ ...object, __proto__: null }|15,274,991|95|
|{ ...object, newProp: true }|449,041|78|
|structuredClone|178,343|96|
|JSON.parse + JSON.stringify|143,616|91|
|loop + object.keys starting with {}|670,125|96|
|loop + object.keys starting with { __proto__: null }|413,038|96|
|loop + object.keys starting with { randomProp: true }|305,773|94|
|object.keys + reduce(FN, {})|293,787|94|
|object.keys + reduce(FN, { __proto__: null })|411,605|95|
|object.keys + reduce(FN, { newProp: true })|313,683|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15106684.44706906,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15274990.712962182,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":449041.0319354011,"samples":3},{"name":"structuredClone","opsSec":178343.02407880692,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143616.160702538,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":670124.5119239046,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":413038.25979211787,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":305772.6044440031,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":293787.4716147355,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":411604.5858491956,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":313683.3836347075,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,910|97|
|Sort using first char|916,881|94|
|Sort using localeCompare|805,103|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":194909.64035435478,"samples":4},{"name":"Sort using first char","opsSec":916880.6269323294,"samples":5},{"name":"Sort using localeCompare","opsSec":805102.7724834387,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,127|80|
|{...smallObject} - Total keys: 2|58,392,893|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,206|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,171|83|
|{ ...bigObject, ...anotherBigObject }|747|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,898,753|82|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,836,130|87|
|{ ...smallObject, ...anotherSmallObject }|13,781,999|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1127.423931383736,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":58392892.69958252,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1206.369680743507,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3170.5005598445414,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":746.9290753107937,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8898752.95286418,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22836130.12847688,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13781999.289870199,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,517|87|
|streams.web.Readable reading 1e3 * "some data"|412|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1517.1825249290305,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":411.56830170768137,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,443|92|
|streams.web.WritableStream writing 1e3 * "some data"|709|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3443.4756874801633,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":709.4233537283618,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|768,167,593|89|
|Using backtick (`)|771,200,341|91|
|Using array.join|5,677,096|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":768167592.983268,"samples":8},{"name":"Using backtick (`)","opsSec":771200340.8412478,"samples":9},{"name":"Using array.join","opsSec":5677095.820128852,"samples":8}]}-->
