## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,809,137|99|
|Using dot notation|824,461,652|94|
|Using define property (writable)|4,248,464|94|
|Using define property initialized (writable)|6,184,803|94|
|Using define property (getter)|2,402,528|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:01:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Directly in the object","opsSec":822809136.5087881,"samples":6},{"name":"Using dot notation","opsSec":824461652.3780397,"samples":7},{"name":"Using define property (writable)","opsSec":4248464.368032984,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6184802.784895606,"samples":5},{"name":"Using define property (getter)","opsSec":2402528.1955595966,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.02ms
new Array(length)|10|0.002ms
array.push|100|0.093ms
new Array(length)|100|0.015ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.302ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|24.855ms
new Array(length)|1,000,000|6.509ms
array.push|100,000,000|987.503ms
new Array(length)|100,000,000|3,539.28ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.004ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|18.184ms
new Array(length)|1,000,000|6.005ms
array.push|100,000,000|1,135.327ms
new Array(length)|100,000,000|3,513.401ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|82|
|Array.from|14|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:03:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":325.7372625182449,"samples":3},{"name":"Array.from","opsSec":13.52972871053892,"samples":1}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|705,664,986|97|
|[async] async function|10,405,689|84|
|[async] function|137,648|18|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:04:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":705664985.850223,"samples":7},{"name":"[async] async function","opsSec":10405689.21774717,"samples":8},{"name":"[async] function","opsSec":137648.24492586945,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,497|94|
|new Blob (1024)|685|77|
|text (128)|5,869|86|
|text (1024)|750|89|
|arrayBuffer (128)|5,882|88|
|arrayBuffer (1024)|748|87|
|slice (0, 64)|199,445|56|
|slice (0, 512)|24,811|54|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:06:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Blob (128)","opsSec":5497.432550594937,"samples":4},{"name":"new Blob (1024)","opsSec":684.9151095843624,"samples":2},{"name":"text (128)","opsSec":5868.597805609598,"samples":4},{"name":"text (1024)","opsSec":749.8718519558171,"samples":2},{"name":"arrayBuffer (128)","opsSec":5881.785178289786,"samples":4},{"name":"arrayBuffer (1024)","opsSec":748.1073239410351,"samples":2},{"name":"slice (0, 64)","opsSec":199444.78399374164,"samples":4},{"name":"slice (0, 512)","opsSec":24811.368970799474,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,644|57|
|[True conditional] Using constructor name|148,511|93|
|[True conditional] Check if property is valid then instanceof |149,433|96|
|[False conditional] Using instanceof only|711,024,837|98|
|[False conditional] Using constructor name|709,262,433|93|
|[False conditional] Check if property is valid then instanceof |711,207,790|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:08:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181644.4759846955,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":148510.87727933642,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":149433.02874965558,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":711024836.6365867,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":709262433.1540836,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711207789.6975405,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,358|92|
|crypto.verify('RSA-SHA256')|6,324|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6357.860446230705,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6324.091811516023,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,483,398|92|
|fromUnixToISOString(new Date())|2,187,871|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:10:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1483398.2436451355,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2187870.9465366066,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,313|80|
|Intl.DateTimeFormat().format(new Date())|11,290|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,283|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,607|76|
|Reusing Intl.DateTimeFormat()|481,251|86|
|Date.toLocaleDateString()|464,119|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,703|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:11:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10312.688792421455,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11289.86064729094,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12282.55434950144,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11606.844633386112,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481251.2479674371,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":464118.5076270662,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12703.219418464932,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,215|93|
|Using brackets {}|724,712|97|
|Using '' + |719,196|98|
|Using date.toString()|773,932|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":703214.9877394234,"samples":5},{"name":"Using brackets {}","opsSec":724712.2778841893,"samples":5},{"name":"Using '' + ","opsSec":719196.4954585568,"samples":5},{"name":"Using date.toString()","opsSec":773932.4270978996,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,874,583|95|
|Using delete property (proto: null)|13,965,148|98|
|Using delete property (cached proto: null)|2,901,961|97|
|Using undefined assignment|709,383,723|96|
|Using undefined assignment (proto: null)|15,203,266|94|
|Using undefined property (cached proto: null)|711,567,261|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2874582.511943404,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13965147.723686738,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2901961.245361903,"samples":6},{"name":"Using undefined assignment","opsSec":709383723.4963546,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":15203265.655995462,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":711567261.0928358,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|246,014|53|
|NodeError|205,321|94|
|NodeError Range|204,643|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Error","opsSec":246014.23073437423,"samples":3},{"name":"NodeError","opsSec":205320.87775352626,"samples":3},{"name":"NodeError Range","opsSec":204643.26785462163,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,524,672|95|
|Function returning explicitly undefined|1,515,726|92|
|Function returning implicitly undefined|1,549,997|97|
|Function returning string|1,529,365|99|
|Function returning integer|1,563,908|97|
|Function returning float|1,545,612|98|
|Function returning functions|1,512,319|96|
|Function returning arrow functions|1,538,784|98|
|Function returning empty object|1,525,054|97|
|Function returning empty array|1,547,381|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Function returning null","opsSec":1524672.437082224,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1515725.9682633914,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1549997.3850691386,"samples":5},{"name":"Function returning string","opsSec":1529365.0283631594,"samples":4},{"name":"Function returning integer","opsSec":1563908.1480309176,"samples":8},{"name":"Function returning float","opsSec":1545611.8310749256,"samples":6},{"name":"Function returning functions","opsSec":1512318.5679233407,"samples":5},{"name":"Function returning arrow functions","opsSec":1538784.1872013847,"samples":6},{"name":"Function returning empty object","opsSec":1525054.4788102605,"samples":6},{"name":"Function returning empty array","opsSec":1547381.1835323053,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,931,615|96|
|using Array.includes (first item)|710,322,369|95|
|Using raw comparison|710,544,561|99|
|Using raw comparison (first item)|709,022,177|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":703931615.1054384,"samples":6},{"name":"using Array.includes (first item)","opsSec":710322369.0328821,"samples":7},{"name":"Using raw comparison","opsSec":710544561.379697,"samples":9},{"name":"Using raw comparison (first item)","opsSec":709022176.5600064,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,693,565|94|
|Using Object.getOwnPropertyNames()|89,331,068|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using Object.keys()","opsSec":91693565.38924392,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89331068.16948788,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|469,054,888|95|
|Length = 10_000 - Array.at|475,155,531|94|
|Length = 1_000_000 - Array.at|477,175,162|97|
|Length = 100 - Array[length - 1]|709,210,387|95|
|Length = 10_000 - Array[length - 1]|709,904,119|94|
|Length = 1_000_000 - Array[length - 1]|708,776,444|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":469054888.413436,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":475155531.2872154,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":477175162.13329935,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":709210387.0663595,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":709904118.8204696,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":708776444.4857594,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,922,787|89|
|Object.create({})|2,407,396|82|
|Cached Empty.prototype|823,094,236|96|
|Empty.prototype|2,466,289|90|
|Empty class|1,532,782|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":82922786.97740807,"samples":5},{"name":"Object.create({})","opsSec":2407395.8418029076,"samples":3},{"name":"Cached Empty.prototype","opsSec":823094236.4460421,"samples":8},{"name":"Empty.prototype","opsSec":2466289.4266340137,"samples":4},{"name":"Empty class","opsSec":1532781.72967432,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|683,627,176|85|
|Using optional chain (obj.field?.field2) (undefined)|689,133,230|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|684,908,509|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|694,870,707|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":683627175.7003326,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":689133229.9296433,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":684908508.8296854,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":694870706.5004257,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,943,347|99|
|Using parseInt(x, 10) - big number (10 len)|823,613,617|99|
|Using + - small number (2 len)|821,196,932|94|
|Using + - big number (10 len)|823,924,162|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822943346.7172403,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823613616.8819836,"samples":7},{"name":"Using + - small number (2 len)","opsSec":821196931.8782394,"samples":6},{"name":"Using + - big number (10 len)","opsSec":823924162.1681443,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|787,099|70|
|Using ? operator to avoid rejection|904,229|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:28:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":787099.0458984433,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":904228.6440508441,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|472,881,447|94|
|Raw usage underscore usage|477,981,213|94|
|Manipulating private properties using #|473,545,256|96|
|Manipulating private properties using underscore(_)|474,352,282|97|
|Manipulating private properties using Symbol|473,327,538|98|
|Manipulating private properties using PrivateSymbol|40,231,893|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":472881447.2985066,"samples":8},{"name":"Raw usage underscore usage","opsSec":477981213.25002426,"samples":8},{"name":"Manipulating private properties using #","opsSec":473545255.644407,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":474352281.98570645,"samples":11},{"name":"Manipulating private properties using Symbol","opsSec":473327538.12156415,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":40231892.6226876,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,813,260|95|
|Adding property in the object creation - small object|5,903,147|97|
|Adding property after the function creation - small class|186,117|87|
|Adding property in the function creation - small class|189,763|89|
|Adding property after the class creation - small class|182,776|84|
|Adding property in the class creation - small class|182,144|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5813259.806687427,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5903146.959169575,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":186116.8714789931,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":189763.06833285256,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":182775.86766304023,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":182143.78095326366,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|703,473,919|94|
|Getter|56,558,992|94|
|Method|709,523,658|96|
|DefineProperty (getter)|710,872,894|93|
|DefineProperty (getter & enumerable=false)|56,474,879|96|
|DefineProperty (getter & configurable=false)|711,505,018|96|
|DefineProperty (getter & enumerable=false & configurable=false)|57,063,402|98|
|DefineProperty (writable)|712,759,965|98|
|DefineProperty (writable & enumerable=false)|710,835,018|93|
|DefineProperty (writable & enumerable=false & configurable=false)|709,153,598|98|
|DefineProperties (getter)|57,185,903|96|
|DefineProperties (getter & enumerable=false)|42,506,541|73|
|DefineProperties (getter & enumerable=false & configurable=false)|37,102,059|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":703473919.0698085,"samples":6},{"name":"Getter","opsSec":56558991.79756999,"samples":7},{"name":"Method","opsSec":709523658.3538618,"samples":9},{"name":"DefineProperty (getter)","opsSec":710872894.2109172,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56474878.66391017,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":711505018.4111184,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57063402.068451285,"samples":5},{"name":"DefineProperty (writable)","opsSec":712759964.8577704,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":710835018.0735443,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":709153598.4228256,"samples":9},{"name":"DefineProperties (getter)","opsSec":57185902.9439867,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":42506540.677409686,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37102058.91989677,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|572,997,096|82|
|Setter|7,076,096|85|
|Method|593,206,620|86|
|DefineProperty (setter)|574,917,413|87|
|DefineProperty (setter & enumerable=false)|7,078,691|87|
|DefineProperty (setter & configurable=false)|7,331,518|82|
|DefineProperty (setter & enumerable=false & configurable=false)|7,333,610|83|
|DefineProperty (writable)|582,510,792|82|
|DefineProperty (writable & enumerable=false)|603,371,393|87|
|DefineProperty (writable & enumerable=false & configurable=false)|466,421,230|68|
|DefineProperties (setter)|549,981,562|80|
|DefineProperties (setter & enumerable=false)|6,691,355|87|
|DefineProperties (setter & enumerable=false & configurable=false)|6,648,044|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":572997096.1106516,"samples":6},{"name":"Setter","opsSec":7076095.846181372,"samples":6},{"name":"Method","opsSec":593206620.2630024,"samples":7},{"name":"DefineProperty (setter)","opsSec":574917413.0103852,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7078691.216090669,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7331517.739678454,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7333609.773759889,"samples":4},{"name":"DefineProperty (writable)","opsSec":582510792.100051,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":603371393.0796366,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":466421230.2207872,"samples":6},{"name":"DefineProperties (setter)","opsSec":549981562.3649402,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6691355.227291437,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6648043.852068301,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,921,039|86|
|Using replaceAll()|1,717,939|85|
|Using replaceAll(//g)|1,706,094|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1921039.0444206402,"samples":7},{"name":"Using replaceAll()","opsSec":1717939.103971522,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706093.5146477818,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,560,740|93|
|{ ...object, __proto__: null }|1,833,391|86|
|{ ...object, newProp: true }|22,955,145|94|
|structuredClone|190,487|95|
|JSON.parse + JSON.stringify|194,712|95|
|loop + object.keys starting with {}|1,158,899|95|
|loop + object.keys starting with { __proto__: null }|620,694|92|
|loop + object.keys starting with { randomProp: true }|448,474|99|
|object.keys + reduce(FN, {})|429,893|91|
|object.keys + reduce(FN, { __proto__: null })|627,623|96|
|object.keys + reduce(FN, { newProp: true })|451,289|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":24560740.114840984,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":1833390.9214714998,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":22955144.658031773,"samples":7},{"name":"structuredClone","opsSec":190487.33197297703,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":194711.79166008852,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1158899.121275618,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":620693.6633310496,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":448473.5348311612,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":429893.2404082583,"samples":3},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":627623.1758068737,"samples":8},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":451288.62521930283,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|214,244|86|
|Sort using first char|874,335|93|
|Sort using localeCompare|797,309|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":214244.004888239,"samples":4},{"name":"Sort using first char","opsSec":874335.1962185736,"samples":8},{"name":"Sort using localeCompare","opsSec":797309.4350821063,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,192|90|
|{...smallObject} - Total keys: 2|62,255,381|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,126|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,114|93|
|{ ...bigObject, ...anotherBigObject }|713|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,055,691|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,075,426|95|
|{ ...smallObject, ...anotherSmallObject }|11,986,944|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1192.0645863479322,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":62255381.47263774,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1126.4919067749934,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3113.9384324521943,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":713.438840783722,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7055691.250805437,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":17075425.934784476,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11986943.582671937,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,680|83|
|streams.web.Readable reading 1e3 * "some data"|1,936|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1679.6153957381594,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1936.0089548201597,"samples":7}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,090|84|
|streams.web.WritableStream writing 1e3 * "some data"|744|52|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3089.939233358323,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":744.133747747133,"samples":2}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|627,371,293|93|
|Using backtick (`)|636,422,129|93|
|Using array.join|5,775,743|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":627371293.2098783,"samples":7},{"name":"Using backtick (`)","opsSec":636422128.8838285,"samples":6},{"name":"Using array.join","opsSec":5775742.788628642,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|589,625,041|97|
|Using indexof|588,445,361|97|
|Using RegExp.test|11,348,416|95|
|Using RegExp.text with cached regex pattern|11,936,201|96|
|Using new RegExp.test|3,498,577|97|
|Using new RegExp.test with cached regex pattern|4,080,064|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":589625041.4996359,"samples":6},{"name":"Using indexof","opsSec":588445360.9616747,"samples":6},{"name":"Using RegExp.test","opsSec":11348416.352562878,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11936200.806427885,"samples":5},{"name":"Using new RegExp.test","opsSec":3498577.3439141996,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4080063.6235764846,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|583,488,857|98|
|Using this|589,164,353|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":583488856.6546882,"samples":6},{"name":"Using this","opsSec":589164352.8081888,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,124,256|93|
|Date.now()|17,527,035|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":9124255.758472113,"samples":5},{"name":"Date.now()","opsSec":17527035.25197094,"samples":5}]}-->
