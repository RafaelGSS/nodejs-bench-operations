## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,433,469|98|
|Using dot notation|853,901,011|98|
|Using define property (writable)|4,701,078|99|
|Using define property initialized (writable)|6,427,858|93|
|Using define property (getter)|2,446,968|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:56:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":854433468.755534,"samples":6},{"name":"Using dot notation","opsSec":853901011.4584838,"samples":8},{"name":"Using define property (writable)","opsSec":4701078.078457609,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6427858.244403295,"samples":5},{"name":"Using define property (getter)","opsSec":2446967.927215301,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.009ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.326ms
array.push|1,000,000|30.506ms
new Array(length)|1,000,000|6.188ms
array.push|100,000,000|1,760.289ms
new Array(length)|100,000,000|4,266.606ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.04ms
new Array(length)|100|0.009ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.23ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|24.729ms
new Array(length)|1,000,000|4.411ms
array.push|100,000,000|2,530.998ms
new Array(length)|100,000,000|3,969.442ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|311|88|
|Array.from|24|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:11:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":311.20276707521305,"samples":4},{"name":"Array.from","opsSec":23.602805816255998,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,334,817|99|
|[async] async function|18,183,679|86|
|[async] function|153,308|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854334817.410835,"samples":7},{"name":"[async] async function","opsSec":18183678.69502398,"samples":6},{"name":"[async] function","opsSec":153307.66202208513,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,574|83|
|new Blob (1024)|579|75|
|text (128)|5,053|87|
|text (1024)|630|86|
|arrayBuffer (128)|5,037|88|
|arrayBuffer (1024)|631|87|
|slice (0, 64)|69,950|68|
|slice (0, 512)|18,842|65|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4573.898288650968,"samples":4},{"name":"new Blob (1024)","opsSec":578.5793106400315,"samples":2},{"name":"text (128)","opsSec":5052.862407092705,"samples":5},{"name":"text (1024)","opsSec":630.1119951637128,"samples":3},{"name":"arrayBuffer (128)","opsSec":5037.017703634407,"samples":3},{"name":"arrayBuffer (1024)","opsSec":631.1047445476887,"samples":3},{"name":"slice (0, 64)","opsSec":69950.3737489206,"samples":3},{"name":"slice (0, 512)","opsSec":18841.79032695052,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|234,813|57|
|[True conditional] Using constructor name|185,896|100|
|[True conditional] Check if property is valid then instanceof |183,416|92|
|[False conditional] Using instanceof only|854,163,120|98|
|[False conditional] Using constructor name|854,901,278|97|
|[False conditional] Check if property is valid then instanceof |855,250,372|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:44:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":234813.0380819142,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185896.232778492,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183416.17352155983,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":854163119.6240895,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":854901278.481056,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":855250372.0257632,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,780|94|
|crypto.verify('RSA-SHA256')|6,817|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:54:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6779.885625492347,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6817.3755199851275,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,454,549|98|
|fromUnixToISOString(new Date())|2,243,153|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:04:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1454548.5730179546,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2243152.755591175,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,442|81|
|Intl.DateTimeFormat().format(new Date())|19,819|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,139|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,562|82|
|Reusing Intl.DateTimeFormat()|728,437|96|
|Date.toLocaleDateString()|744,237|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,566|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18442.452141842266,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19819.386821008884,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17138.836341671347,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21562.392970844034,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":728436.5817279036,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":744236.8535372374,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19566.290397873505,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,743|98|
|Using brackets {}|1,099,115|94|
|Using '' + |1,091,622|94|
|Using date.toString()|1,193,952|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1072742.718996481,"samples":4},{"name":"Using brackets {}","opsSec":1099115.0918418572,"samples":5},{"name":"Using '' + ","opsSec":1091621.569829458,"samples":5},{"name":"Using date.toString()","opsSec":1193952.4669009373,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,920,033|95|
|Using delete property (proto: null)|20,299,604|95|
|Using delete property (cached proto: null)|3,939,913|98|
|Using undefined assignment|852,389,898|99|
|Using undefined assignment (proto: null)|21,898,293|89|
|Using undefined property (cached proto: null)|848,711,958|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3920032.70197559,"samples":5},{"name":"Using delete property (proto: null)","opsSec":20299603.827050906,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3939913.259220274,"samples":7},{"name":"Using undefined assignment","opsSec":852389898.2565745,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":21898293.27285172,"samples":9},{"name":"Using undefined property (cached proto: null)","opsSec":848711958.3870974,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,558|54|
|NodeError|180,254|95|
|NodeError Range|180,782|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":226558.25107366242,"samples":3},{"name":"NodeError","opsSec":180253.7590377801,"samples":3},{"name":"NodeError Range","opsSec":180782.210605987,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,721,512|95|
|Function returning explicitly undefined|1,692,009|99|
|Function returning implicitly undefined|1,751,157|96|
|Function returning string|1,679,047|95|
|Function returning integer|1,705,659|97|
|Function returning float|1,735,915|99|
|Function returning functions|1,681,637|99|
|Function returning arrow functions|1,718,075|96|
|Function returning empty object|1,740,545|98|
|Function returning empty array|1,741,806|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:06:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1721511.740392492,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1692008.8792798114,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1751156.8116442729,"samples":5},{"name":"Function returning string","opsSec":1679046.9270889962,"samples":6},{"name":"Function returning integer","opsSec":1705658.5863769313,"samples":8},{"name":"Function returning float","opsSec":1735915.1541265273,"samples":8},{"name":"Function returning functions","opsSec":1681636.65412933,"samples":7},{"name":"Function returning arrow functions","opsSec":1718075.2850772901,"samples":5},{"name":"Function returning empty object","opsSec":1740545.192454502,"samples":5},{"name":"Function returning empty array","opsSec":1741805.6851387618,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|850,808,372|98|
|using Array.includes (first item)|853,312,250|94|
|Using raw comparison|854,099,059|96|
|Using raw comparison (first item)|852,743,586|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:18:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":850808372.2031327,"samples":6},{"name":"using Array.includes (first item)","opsSec":853312249.8017124,"samples":6},{"name":"Using raw comparison","opsSec":854099058.942427,"samples":8},{"name":"Using raw comparison (first item)","opsSec":852743586.2247579,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,571,455|90|
|Using Object.getOwnPropertyNames()|95,983,081|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:28:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":91571454.55759266,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":95983081.34462664,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|847,843,638|98|
|Length = 10_000 - Array.at|850,894,155|96|
|Length = 1_000_000 - Array.at|850,301,338|96|
|Length = 100 - Array[length - 1]|852,497,145|101|
|Length = 10_000 - Array[length - 1]|854,689,460|96|
|Length = 1_000_000 - Array[length - 1]|853,878,402|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":847843638.4843211,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":850894155.4220963,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":850301337.6231493,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":852497144.787347,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":854689459.7952449,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":853878402.103459,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,348,788|90|
|Object.create({})|2,518,993|85|
|Cached Empty.prototype|852,004,103|100|
|Empty.prototype|2,370,380|91|
|Empty class|1,523,352|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:52:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78348788.16844244,"samples":6},{"name":"Object.create({})","opsSec":2518993.4179033763,"samples":3},{"name":"Cached Empty.prototype","opsSec":852004102.6936612,"samples":7},{"name":"Empty.prototype","opsSec":2370379.874148053,"samples":3},{"name":"Empty class","opsSec":1523352.1908419598,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|851,678,475|98|
|Using optional chain (obj.field?.field2) (undefined)|854,681,667|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|853,718,512|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|853,404,078|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:02:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":851678475.329887,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":854681666.8752655,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":853718512.2370561,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":853404077.5310298,"samples":5}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|853,033,140|95|
|Using parseInt(x, 10) - big number (10 len)|855,061,589|97|
|Using + - small number (2 len)|855,268,702|93|
|Using + - big number (10 len)|854,848,382|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:12:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":853033140.1025367,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":855061588.6188734,"samples":6},{"name":"Using + - small number (2 len)","opsSec":855268701.5088553,"samples":9},{"name":"Using + - big number (10 len)","opsSec":854848382.4355406,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,207,038|80|
|Using ? operator to avoid rejection|1,257,396|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:19:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1207038.4163627264,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1257396.158297296,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|850,222,327|95|
|Raw usage underscore usage|848,941,323|99|
|Manipulating private properties using #|841,188,750|95|
|Manipulating private properties using underscore(_)|841,043,647|101|
|Manipulating private properties using Symbol|840,534,835|92|
|Manipulating private properties using PrivateSymbol|56,301,112|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:31:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":850222326.8258239,"samples":9},{"name":"Raw usage underscore usage","opsSec":848941323.3372045,"samples":7},{"name":"Manipulating private properties using #","opsSec":841188749.6986682,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":841043647.1800582,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":840534834.730937,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":56301111.66035474,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,417,795|96|
|Adding property in the object creation - small object|8,546,162|97|
|Adding property after the function creation - small class|257,741|87|
|Adding property in the function creation - small class|262,963|90|
|Adding property after the class creation - small class|221,161|88|
|Adding property in the class creation - small class|219,880|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:43:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8417795.269482851,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":8546162.282069046,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":257741.02313129025,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":262962.98914391774,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":221161.12108547095,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":219880.45738832612,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,196,076|96|
|Getter|95,030,755|98|
|Method|854,771,988|100|
|DefineProperty (getter)|854,593,544|99|
|DefineProperty (getter & enumerable=false)|94,873,260|97|
|DefineProperty (getter & configurable=false)|855,328,379|97|
|DefineProperty (getter & enumerable=false & configurable=false)|94,662,920|95|
|DefineProperty (writable)|856,349,794|100|
|DefineProperty (writable & enumerable=false)|509,249,354|63|
|DefineProperty (writable & enumerable=false & configurable=false)|125,903,722|80|
|DefineProperties (getter)|57,995,047|91|
|DefineProperties (getter & enumerable=false)|95,035,951|97|
|DefineProperties (getter & enumerable=false & configurable=false)|95,165,621|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:06:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854196075.9718174,"samples":6},{"name":"Getter","opsSec":95030754.52429846,"samples":6},{"name":"Method","opsSec":854771988.0531981,"samples":6},{"name":"DefineProperty (getter)","opsSec":854593543.7707536,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":94873260.32613009,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":855328379.4140158,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94662919.97270286,"samples":5},{"name":"DefineProperty (writable)","opsSec":856349793.9158887,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":509249353.5912852,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":125903721.77435376,"samples":4},{"name":"DefineProperties (getter)","opsSec":57995046.59210456,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95035951.45161514,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":95165620.75923786,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|838,422,704|99|
|Setter|12,817,029|100|
|Method|847,616,361|95|
|DefineProperty (setter)|819,832,036|96|
|DefineProperty (setter & enumerable=false)|12,641,929|99|
|DefineProperty (setter & configurable=false)|12,346,945|97|
|DefineProperty (setter & enumerable=false & configurable=false)|12,630,247|94|
|DefineProperty (writable)|848,170,039|100|
|DefineProperty (writable & enumerable=false)|848,406,651|98|
|DefineProperty (writable & enumerable=false & configurable=false)|820,590,484|96|
|DefineProperties (setter)|850,064,358|101|
|DefineProperties (setter & enumerable=false)|12,367,497|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,511,277|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":838422703.7166764,"samples":7},{"name":"Setter","opsSec":12817028.541995669,"samples":5},{"name":"Method","opsSec":847616360.5254976,"samples":7},{"name":"DefineProperty (setter)","opsSec":819832036.1634698,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12641929.207374282,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12346944.628189448,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12630246.892382516,"samples":6},{"name":"DefineProperty (writable)","opsSec":848170039.1273782,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":848406651.2240232,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":820590483.6244849,"samples":6},{"name":"DefineProperties (setter)","opsSec":850064358.2845733,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12367497.015510771,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11511277.291745396,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,740,082|96|
|Using replaceAll()|3,270,415|97|
|Using replaceAll(//g)|3,381,100|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:39:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3740081.5729908245,"samples":5},{"name":"Using replaceAll()","opsSec":3270414.850509248,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3381100.2512105484,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,104,866|94|
|{ ...object, __proto__: null }|29,742,767|94|
|{ ...object, newProp: true }|887,566|89|
|structuredClone|265,584|93|
|JSON.parse + JSON.stringify|208,699|100|
|loop + object.keys starting with {}|1,661,262|93|
|loop + object.keys starting with { __proto__: null }|874,728|95|
|loop + object.keys starting with { randomProp: true }|637,673|99|
|object.keys + reduce(FN, {})|608,708|95|
|object.keys + reduce(FN, { __proto__: null })|898,272|96|
|object.keys + reduce(FN, { newProp: true })|641,796|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29104866.256744016,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29742767.030706726,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":887565.8400622496,"samples":3},{"name":"structuredClone","opsSec":265584.25356398785,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":208699.05752221184,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1661262.4045498352,"samples":8},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":874728.1638790237,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":637673.4886878112,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":608708.3337781808,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":898271.9082771736,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":641795.7393190529,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|273,285|89|
|Sort using first char|1,477,178|94|
|Sort using localeCompare|1,243,572|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":273285.0289430056,"samples":4},{"name":"Sort using first char","opsSec":1477178.368491007,"samples":6},{"name":"Sort using localeCompare","opsSec":1243572.399026705,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,063|93|
|{...smallObject} - Total keys: 2|112,441,528|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,176|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,479|100|
|{ ...bigObject, ...anotherBigObject }|1,238|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,311,938|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,198,080|96|
|{ ...smallObject, ...anotherSmallObject }|25,714,171|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2062.807507367566,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":112441528.1949085,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1175.7149733001668,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6478.833156595264,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1237.8353609297528,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15311937.907751193,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38198079.80238314,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25714170.93058486,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,613|85|
|streams.web.Readable reading 1e3 * "some data"|2,441|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:28:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2612.6445636729886,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2440.7441760168076,"samples":7}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,927|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,045|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:37:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6926.918283530288,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1045.1977134802219,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|852,918,738|93|
|Using backtick (`)|854,845,242|98|
|Using array.join|12,377,131|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":852918737.6081367,"samples":6},{"name":"Using backtick (`)","opsSec":854845242.1139603,"samples":7},{"name":"Using array.join","opsSec":12377131.262348486,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,108,534|100|
|Using indexof|853,468,205|94|
|Using RegExp.test|16,362,688|95|
|Using RegExp.text with cached regex pattern|17,117,795|99|
|Using new RegExp.test|4,735,720|99|
|Using new RegExp.test with cached regex pattern|5,642,908|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:58:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":854108534.4009155,"samples":7},{"name":"Using indexof","opsSec":853468204.575713,"samples":5},{"name":"Using RegExp.test","opsSec":16362687.914534708,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17117794.941742342,"samples":5},{"name":"Using new RegExp.test","opsSec":4735719.863370517,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5642907.937364835,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|849,343,547|96|
|Using this|850,146,366|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:10:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":849343546.6608758,"samples":6},{"name":"Using this","opsSec":850146366.4812976,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,219,224|93|
|Date.now()|12,361,193|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6219224.483932493,"samples":8},{"name":"Date.now()","opsSec":12361193.444597272,"samples":6}]}-->
