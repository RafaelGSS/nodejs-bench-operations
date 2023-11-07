## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,186,278|99|
|Using dot notation|842,731,648|97|
|Using define property (writable)|4,529,318|99|
|Using define property initialized (writable)|5,702,575|97|
|Using define property (getter)|2,246,192|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844186277.7038971,"samples":6},{"name":"Using dot notation","opsSec":842731648.0064249,"samples":7},{"name":"Using define property (writable)","opsSec":4529318.281502425,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5702574.946049129,"samples":5},{"name":"Using define property (getter)","opsSec":2246191.6199799525,"samples":4}]}-->

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
|Raw usage private field|5,952,269|88|
|Raw usage underscore usage|4,940,994|93|
|Manipulating private properties using #|1,822,589|88|
|Manipulating private properties using underscore(_)|569,105,188|96|
|Manipulating private properties using Symbol|560,716,065|94|
|Manipulating private properties using PrivateSymbol|21,085,129|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5952268.794462701,"samples":6},{"name":"Raw usage underscore usage","opsSec":4940993.5090916855,"samples":6},{"name":"Manipulating private properties using #","opsSec":1822588.7330868833,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":569105187.77393,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":560716065.2364923,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21085129.281573337,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,735,647|97|
|Adding property in the object creation - small object|1,740,432|97|
|Adding property after the function creation - small class|153,113|86|
|Adding property in the function creation - small class|153,862|87|
|Adding property after the class creation - small class|130,334|85|
|Adding property in the class creation - small class|130,219|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1735646.5997568844,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1740432.3713283255,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":153112.6085991084,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":153862.1011504004,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":130333.61874019098,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":130218.65911394333,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,355,185|88|
|Getter|46,788,213|88|
|Method|598,021,200|90|
|DefineProperty (getter)|602,062,995|88|
|DefineProperty (getter & enumerable=false)|47,521,007|87|
|DefineProperty (getter & configurable=false)|595,931,760|90|
|DefineProperty (getter & enumerable=false & configurable=false)|48,524,310|86|
|DefineProperty (writable)|596,854,672|89|
|DefineProperty (writable & enumerable=false)|138,081,423|22|
|DefineProperty (writable & enumerable=false & configurable=false)|74,219,188|81|
|DefineProperties (getter)|30,724,983|84|
|DefineProperties (getter & enumerable=false)|30,061,715|84|
|DefineProperties (getter & enumerable=false & configurable=false)|47,593,380|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597355184.5034064,"samples":7},{"name":"Getter","opsSec":46788213.466746,"samples":5},{"name":"Method","opsSec":598021200.0679028,"samples":6},{"name":"DefineProperty (getter)","opsSec":602062994.6004039,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47521006.70719235,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":595931759.501273,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48524309.67562897,"samples":8},{"name":"DefineProperty (writable)","opsSec":596854671.9080957,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":138081423.22967803,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":74219188.08135727,"samples":7},{"name":"DefineProperties (getter)","opsSec":30724982.80748173,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":30061715.04541202,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":47593379.67963806,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|567,554,979|90|
|Setter|5,466,843|96|
|Method|295,771,994|99|
|DefineProperty (setter)|573,802,522|92|
|DefineProperty (setter & enumerable=false)|5,288,606|97|
|DefineProperty (setter & configurable=false)|5,447,139|99|
|DefineProperty (setter & enumerable=false & configurable=false)|5,498,679|93|
|DefineProperty (writable)|586,339,496|96|
|DefineProperty (writable & enumerable=false)|197,881,183|34|
|DefineProperty (writable & enumerable=false & configurable=false)|67,109,775|80|
|DefineProperties (setter)|47,779,715|83|
|DefineProperties (setter & enumerable=false)|5,414,581|99|
|DefineProperties (setter & enumerable=false & configurable=false)|5,417,934|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":567554978.6284537,"samples":11},{"name":"Setter","opsSec":5466842.578243825,"samples":5},{"name":"Method","opsSec":295771993.5789944,"samples":7},{"name":"DefineProperty (setter)","opsSec":573802521.8954552,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5288605.915633083,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5447138.701383205,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5498678.774423502,"samples":6},{"name":"DefineProperty (writable)","opsSec":586339495.897133,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":197881182.5796395,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":67109774.66272949,"samples":4},{"name":"DefineProperties (setter)","opsSec":47779715.3697129,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5414581.269331962,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5417934.434488867,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,447,508|77|
|Using replaceAll()|1,150,890|68|
|Using replaceAll(//g)|1,134,447|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1447508.2362232364,"samples":5},{"name":"Using replaceAll()","opsSec":1150890.1886325274,"samples":3},{"name":"Using replaceAll(//g)","opsSec":1134447.0244331753,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,345,117|94|
|{ ...object, __proto__: null }|13,572,197|95|
|{ ...object, newProp: true }|463,111|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|137,288|99|
|loop + object.keys starting with {}|306,263|91|
|loop + object.keys starting with { __proto__: null }|419,911|93|
|loop + object.keys starting with { randomProp: true }|323,626|92|
|object.keys + reduce(FN, {})|314,973|97|
|object.keys + reduce(FN, { __proto__: null })|419,162|97|
|object.keys + reduce(FN, { newProp: true })|323,474|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13345117.16148596,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":13572197.461420244,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":463110.5407541469,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":137287.9788915144,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":306262.50143285166,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":419911.2478145471,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":323625.98222581093,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":314972.96820378845,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":419161.71170925687,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":323473.8309314779,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,898|93|
|Sort using first char|784,853|93|
|Sort using localeCompare|417,707|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":171897.8144577827,"samples":5},{"name":"Sort using first char","opsSec":784853.2573346342,"samples":6},{"name":"Sort using localeCompare","opsSec":417707.32200125844,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,176|93|
|{...smallObject} - Total keys: 2|51,399,344|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,337|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|98|
|{ ...bigObject, ...anotherBigObject }|757|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,152,008|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,234,540|97|
|{ ...smallObject, ...anotherSmallObject }|12,275,395|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1176.2835912808152,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51399344.0043578,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1336.8796763095975,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3689.4915147304073,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":757.4268855906447,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8152008.211484661,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18234540.25024413,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12275395.115754193,"samples":5}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|701,265,227|94|
|Using backtick (`)|708,273,160|95|
|Using array.join|6,259,799|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":701265226.7398936,"samples":7},{"name":"Using backtick (`)","opsSec":708273160.021701,"samples":7},{"name":"Using array.join","opsSec":6259799.00117586,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,777,248|96|
|Using indexof|593,109,272|99|
|Using RegExp.test|11,049,768|95|
|Using RegExp.text with cached regex pattern|11,550,026|99|
|Using new RegExp.test|3,435,098|95|
|Using new RegExp.test with cached regex pattern|4,150,370|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11777248.430725597,"samples":6},{"name":"Using indexof","opsSec":593109271.925809,"samples":9},{"name":"Using RegExp.test","opsSec":11049768.35825118,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":11550026.21015568,"samples":7},{"name":"Using new RegExp.test","opsSec":3435098.48130961,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4150370.189549999,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,025,282|84|
|Using this|149,231,697|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":145025281.90089834,"samples":6},{"name":"Using this","opsSec":149231697.0415118,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,299,295|96|
|Date.now()|14,736,393|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7299295.432304326,"samples":6},{"name":"Date.now()","opsSec":14736393.051506799,"samples":7}]}-->
