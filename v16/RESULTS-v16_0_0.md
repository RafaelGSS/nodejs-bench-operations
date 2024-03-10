## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|899,908,898|96|
|Using dot notation|860,681,249|95|
|Using define property (writable)|4,323,473|93|
|Using define property initialized (writable)|5,446,991|92|
|Using define property (getter)|2,241,496|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":899908897.8253125,"samples":6},{"name":"Using dot notation","opsSec":860681248.8331136,"samples":8},{"name":"Using define property (writable)","opsSec":4323473.232095003,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5446990.867419376,"samples":5},{"name":"Using define property (getter)","opsSec":2241495.529112959,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.007ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.213ms
array.push|1,000,000|25.019ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,663.231ms
new Array(length)|100,000,000|4,026.302ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.011ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.335ms
new Array(length)|10,000|3.138ms
array.push|1,000,000|58.566ms
new Array(length)|1,000,000|7.747ms
array.push|100,000,000|2,187.275ms
new Array(length)|100,000,000|3,970.6ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|86|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:07:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":299.0702992948422,"samples":4},{"name":"Array.from","opsSec":21.05573495559133,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,016,148|96|
|[async] async function|17,342,263|89|
|[async] function|284,104|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:08:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847016147.8083705,"samples":8},{"name":"[async] async function","opsSec":17342263.01857576,"samples":7},{"name":"[async] function","opsSec":284103.66482231906,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|8,432|92|
|new Blob (1024)|1,085|80|
|text (128)|38,672|82|
|text (1024)|16,053|79|
|arrayBuffer (128)|44,702|89|
|arrayBuffer (1024)|17,295|80|
|slice (0, 64)|185,103|83|
|slice (0, 512)|33,302|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":8432.155403390228,"samples":4},{"name":"new Blob (1024)","opsSec":1084.7525706200636,"samples":2},{"name":"text (128)","opsSec":38671.60079852136,"samples":4},{"name":"text (1024)","opsSec":16053.460661202484,"samples":5},{"name":"arrayBuffer (128)","opsSec":44701.57881841425,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17294.95972694274,"samples":4},{"name":"slice (0, 64)","opsSec":185103.20998081198,"samples":4},{"name":"slice (0, 512)","opsSec":33302.21722980631,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|406,373|84|
|[True conditional] Using constructor name|394,330|84|
|[True conditional] Check if property is valid then instanceof |394,963|83|
|[False conditional] Using instanceof only|846,622,510|91|
|[False conditional] Using constructor name|846,845,092|97|
|[False conditional] Check if property is valid then instanceof |847,938,106|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:11:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":406372.9526843884,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":394329.7953887597,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":394963.3531842482,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846622510.0507176,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":846845092.4009019,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847938106.0980846,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,711|85|
|crypto.verify('RSA-SHA256')|18,284|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":18711.070962132133,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":18283.839027042002,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,462,383|96|
|fromUnixToISOString(new Date())|1,987,538|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2462382.7760356157,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1987538.333035134,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,084|80|
|Intl.DateTimeFormat().format(new Date())|11,378|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,422|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,025|95|
|Reusing Intl.DateTimeFormat()|538,518|99|
|Date.toLocaleDateString()|634,101|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,024|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12083.821931871369,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11378.067789535595,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12422.337305368856,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16025.248160802828,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":538518.4357623901,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":634100.7504488296,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14024.481102567877,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|916,419|97|
|Using brackets {}|937,974|96|
|Using '' + |935,374|95|
|Using date.toString()|1,085,878|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":916419.2776880118,"samples":7},{"name":"Using brackets {}","opsSec":937973.6652237623,"samples":7},{"name":"Using '' + ","opsSec":935373.7495759627,"samples":6},{"name":"Using date.toString()","opsSec":1085878.0388984203,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,295,853|92|
|Using delete property (proto: null)|20,756,490|98|
|Using delete property (cached proto: null)|3,336,686|98|
|Using undefined assignment|845,539,467|100|
|Using undefined assignment (proto: null)|23,061,689|94|
|Using undefined property (cached proto: null)|841,999,299|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:17:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3295853.061550416,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20756490.46128737,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3336685.9369288282,"samples":5},{"name":"Using undefined assignment","opsSec":845539466.6653793,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23061689.04949238,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":841999298.7210851,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|389,206|82|
|NodeError|386,461|84|
|NodeError Range|383,097|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":389205.7701448689,"samples":3},{"name":"NodeError","opsSec":386460.7438754928,"samples":3},{"name":"NodeError Range","opsSec":383097.2512191307,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,758,845|94|
|Function returning explicitly undefined|1,752,954|99|
|Function returning implicitly undefined|1,792,447|96|
|Function returning string|1,724,821|95|
|Function returning integer|1,786,419|98|
|Function returning float|1,768,179|94|
|Function returning functions|1,710,527|100|
|Function returning arrow functions|1,742,528|101|
|Function returning empty object|1,771,580|99|
|Function returning empty array|1,779,848|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:20:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1758844.5349963126,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1752953.5578004783,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1792446.8612817717,"samples":8},{"name":"Function returning string","opsSec":1724820.9649384138,"samples":6},{"name":"Function returning integer","opsSec":1786418.9633959949,"samples":7},{"name":"Function returning float","opsSec":1768179.032835231,"samples":8},{"name":"Function returning functions","opsSec":1710527.3719574655,"samples":7},{"name":"Function returning arrow functions","opsSec":1742528.1694649875,"samples":7},{"name":"Function returning empty object","opsSec":1771579.8433079217,"samples":6},{"name":"Function returning empty array","opsSec":1779848.3906572664,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|845,770,689|99|
|using Array.includes (first item)|846,402,202|97|
|Using raw comparison|848,228,065|99|
|Using raw comparison (first item)|847,506,657|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:21:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":845770689.2386894,"samples":6},{"name":"using Array.includes (first item)","opsSec":846402201.7826042,"samples":8},{"name":"Using raw comparison","opsSec":848228064.8031232,"samples":9},{"name":"Using raw comparison (first item)","opsSec":847506657.0104642,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,010,518|97|
|Using Object.getOwnPropertyNames()|91,429,094|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":89010517.92677726,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":91429094.15503494,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|846,132,160|101|
|Length = 10_000 - Array[length - 1]|846,714,943|92|
|Length = 1_000_000 - Array[length - 1]|845,886,926|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:23:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":846132160.0580738,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":846714942.9995958,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845886925.8192949,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,157,057|97|
|Object.create({})|1,849,100|81|
|Cached Empty.prototype|847,465,916|100|
|Empty.prototype|2,104,646|87|
|Empty class|1,233,102|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":67157057.21986364,"samples":6},{"name":"Object.create({})","opsSec":1849100.2226923124,"samples":3},{"name":"Cached Empty.prototype","opsSec":847465915.5803816,"samples":11},{"name":"Empty.prototype","opsSec":2104646.296641374,"samples":3},{"name":"Empty class","opsSec":1233102.4465527767,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,782,439|100|
|Using optional chain (obj.field?.field2) (undefined)|847,585,988|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,702,816|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,704,390|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:26:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846782438.8531611,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847585987.6675495,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847702815.719056,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845704390.0894566,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|280,640,934|96|
|Using parseInt(x, 10) - big number (10 len)|19,432,141|97|
|Using + - small number (2 len)|847,874,700|98|
|Using + - big number (10 len)|847,515,672|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:27:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":280640934.47386605,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19432140.65330192,"samples":6},{"name":"Using + - small number (2 len)","opsSec":847874700.276059,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847515672.1283529,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,022,552|84|
|Using ? operator to avoid rejection|1,091,112|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:28:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1022551.9828586811,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1091111.932517287,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|12,299,713|97|
|Raw usage underscore usage|10,074,613|97|
|Manipulating private properties using #|3,672,539|96|
|Manipulating private properties using underscore(_)|837,094,325|99|
|Manipulating private properties using Symbol|835,510,536|97|
|Manipulating private properties using PrivateSymbol|48,804,614|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":12299712.859362835,"samples":5},{"name":"Raw usage underscore usage","opsSec":10074613.25377451,"samples":6},{"name":"Manipulating private properties using #","opsSec":3672538.7374457256,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":837094325.3202751,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":835510535.7718538,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":48804613.64980601,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,460,407|96|
|Adding property in the object creation - small object|2,486,947|98|
|Adding property after the function creation - small class|213,885|92|
|Adding property in the function creation - small class|215,526|92|
|Adding property after the class creation - small class|183,152|83|
|Adding property in the class creation - small class|183,846|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:31:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2460407.171707946,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2486946.563649534,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":213884.94720258637,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":215525.5833831604,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":183152.3717363924,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":183845.55586574588,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|846,714,279|100|
|Getter|97,437,919|95|
|Method|847,647,419|96|
|DefineProperty (getter)|846,749,206|97|
|DefineProperty (getter & enumerable=false)|96,235,684|93|
|DefineProperty (getter & configurable=false)|847,187,514|98|
|DefineProperty (getter & enumerable=false & configurable=false)|97,368,853|94|
|DefineProperty (writable)|384,091,240|46|
|DefineProperty (writable & enumerable=false)|127,601,150|79|
|DefineProperty (writable & enumerable=false & configurable=false)|136,726,862|82|
|DefineProperties (getter)|55,026,548|87|
|DefineProperties (getter & enumerable=false)|98,684,019|96|
|DefineProperties (getter & enumerable=false & configurable=false)|97,526,263|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:32:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":846714279.3434222,"samples":7},{"name":"Getter","opsSec":97437919.06917572,"samples":6},{"name":"Method","opsSec":847647419.3614761,"samples":7},{"name":"DefineProperty (getter)","opsSec":846749206.2230102,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":96235683.88728148,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":847187513.7697531,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97368853.0847806,"samples":6},{"name":"DefineProperty (writable)","opsSec":384091239.5812095,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":127601149.51143529,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":136726861.78426978,"samples":6},{"name":"DefineProperties (getter)","opsSec":55026547.79276611,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98684019.27379559,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":97526263.17530368,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,731,489|97|
|Setter|10,509,148|94|
|Method|749,834,688|88|
|DefineProperty (setter)|845,350,318|96|
|DefineProperty (setter & enumerable=false)|10,576,990|98|
|DefineProperty (setter & configurable=false)|10,198,822|92|
|DefineProperty (setter & enumerable=false & configurable=false)|10,357,436|94|
|DefineProperty (writable)|574,851,115|69|
|DefineProperty (writable & enumerable=false)|130,839,371|78|
|DefineProperty (writable & enumerable=false & configurable=false)|129,310,874|76|
|DefineProperties (setter)|107,704,301|82|
|DefineProperties (setter & enumerable=false)|10,228,015|97|
|DefineProperties (setter & enumerable=false & configurable=false)|10,478,207|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:35:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842731489.2875197,"samples":6},{"name":"Setter","opsSec":10509147.67942229,"samples":6},{"name":"Method","opsSec":749834687.8761508,"samples":5},{"name":"DefineProperty (setter)","opsSec":845350318.057046,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10576990.282538405,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":10198821.991831029,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10357436.115314681,"samples":6},{"name":"DefineProperty (writable)","opsSec":574851114.7087792,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":130839371.31633425,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":129310874.27136078,"samples":4},{"name":"DefineProperties (setter)","opsSec":107704300.94795269,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10228015.232884366,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10478207.074623032,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,522,094|93|
|Using replaceAll()|3,102,453|99|
|Using replaceAll(//g)|3,118,337|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3522094.214629903,"samples":5},{"name":"Using replaceAll()","opsSec":3102453.1704364177,"samples":8},{"name":"Using replaceAll(//g)","opsSec":3118336.681161545,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,863,645|90|
|{ ...object, __proto__: null }|21,268,026|99|
|{ ...object, newProp: true }|717,183|89|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|197,167|97|
|loop + object.keys starting with {}|509,264|96|
|loop + object.keys starting with { __proto__: null }|768,776|99|
|loop + object.keys starting with { randomProp: true }|531,037|98|
|object.keys + reduce(FN, {})|524,162|97|
|object.keys + reduce(FN, { __proto__: null })|775,408|98|
|object.keys + reduce(FN, { newProp: true })|547,058|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:38:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":20863644.752361048,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21268026.096310105,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":717182.6397502336,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":197166.8694652675,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":509263.5756268957,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":768776.4797690883,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":531037.3250860356,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":524161.9953628985,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":775408.3892716394,"samples":8},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":547058.1636305224,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,939|98|
|Sort using first char|1,307,054|99|
|Sort using localeCompare|632,272|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":261938.52264207834,"samples":4},{"name":"Sort using first char","opsSec":1307054.282468753,"samples":5},{"name":"Sort using localeCompare","opsSec":632272.4055116839,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,879|86|
|{...smallObject} - Total keys: 2|98,990,084|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,217|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,259|100|
|{ ...bigObject, ...anotherBigObject }|1,166|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,299|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,411,772|96|
|{ ...smallObject, ...anotherSmallObject }|23,649,018|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1878.897937709861,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":98990084.36820747,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2216.62132967653,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6259.167066006461,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1166.2368508548536,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931298.958567893,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33411772.322400086,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23649017.936950237,"samples":6}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|846,450,005|95|
|Using backtick (`)|845,635,522|93|
|Using array.join|11,568,231|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":846450005.4163493,"samples":7},{"name":"Using backtick (`)","opsSec":845635522.0888809,"samples":6},{"name":"Using array.join","opsSec":11568230.705848597,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,210,832|99|
|Using indexof|846,752,253|96|
|Using RegExp.test|16,428,218|99|
|Using RegExp.text with cached regex pattern|16,985,902|99|
|Using new RegExp.test|4,895,095|95|
|Using new RegExp.test with cached regex pattern|5,954,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17210831.740558516,"samples":6},{"name":"Using indexof","opsSec":846752252.6599853,"samples":7},{"name":"Using RegExp.test","opsSec":16428217.644120723,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":16985901.951608106,"samples":5},{"name":"Using new RegExp.test","opsSec":4895095.097784198,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5954897.874729524,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|158,989,270|89|
|Using this|163,976,869|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":158989269.752552,"samples":6},{"name":"Using this","opsSec":163976868.53811935,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,783,602|89|
|Date.now()|20,973,403|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10783601.896675928,"samples":5},{"name":"Date.now()","opsSec":20973402.680272274,"samples":5}]}-->
