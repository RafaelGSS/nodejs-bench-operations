## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,378,274|54196583|
|Using dot notation|68,900,560|34456560|
|Using define property (writable)|4,265,259|2132631|
|Using define property initialized (writable)|5,611,183|2805686|
|Using define property (getter)|2,148,049|1075555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108378274.17485873,"samples":54196583},{"name":"Using dot notation","opsSec":68900560.80577633,"samples":34456560},{"name":"Using define property (writable)","opsSec":4265259.261703554,"samples":2132631},{"name":"Using define property initialized (writable)","opsSec":5611183.049022008,"samples":2805686},{"name":"Using define property (getter)","opsSec":2148049.7937496332,"samples":1075555}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.105ms
new Array(length)|100|0.009ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.264ms
new Array(length)|10,000|0.276ms
array.push|1,000,000|31.859ms
new Array(length)|1,000,000|7.492ms
array.push|100,000,000|1,783.54ms
new Array(length)|100,000,000|4,423.956ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.228ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|23.143ms
new Array(length)|1,000,000|4.683ms
array.push|100,000,000|2,033.361ms
new Array(length)|100,000,000|4,982.298ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|259|131|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:56:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":259.18208015572645,"samples":131},{"name":"Array.from","opsSec":22.765274264964212,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,315|2164|
|new Blob (1024)|561|283|
|text (128)|4,528|2265|
|text (1024)|582|292|
|arrayBuffer (128)|4,662|2332|
|arrayBuffer (1024)|589|295|
|slice (0, 64)|62,458|32700|
|slice (0, 512)|25,236|12619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:02:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4315.139443202682,"samples":2164},{"name":"new Blob (1024)","opsSec":561.3574281165448,"samples":283},{"name":"text (128)","opsSec":4528.757462929926,"samples":2265},{"name":"text (1024)","opsSec":582.5287397835381,"samples":292},{"name":"arrayBuffer (128)","opsSec":4662.603037503934,"samples":2332},{"name":"arrayBuffer (1024)","opsSec":589.5883069936989,"samples":295},{"name":"slice (0, 64)","opsSec":62458.53944372801,"samples":32700},{"name":"slice (0, 512)","opsSec":25236.26995274966,"samples":12619}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|389,154|194653|
|[True conditional] Using constructor name|316,366|158368|
|[True conditional] Check if property is valid then instanceof |311,526|155807|
|[False conditional] Using instanceof only|95,233,142|47629468|
|[False conditional] Using constructor name|94,440,548|47224649|
|[False conditional] Check if property is valid then instanceof |94,052,955|47026484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":389154.4897042145,"samples":194653},{"name":"[True conditional] Using constructor name","opsSec":316366.32468414126,"samples":158368},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":311526.831054349,"samples":155807},{"name":"[False conditional] Using instanceof only","opsSec":95233142.6747054,"samples":47629468},{"name":"[False conditional] Using constructor name","opsSec":94440548.0832201,"samples":47224649},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":94052955.39690398,"samples":47026484}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,659|3331|
|crypto.verify('RSA-SHA256')|6,813|3407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:14:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6659.063246563254,"samples":3331},{"name":"crypto.verify('RSA-SHA256')","opsSec":6813.891945301531,"samples":3407}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,429,240|714714|
|fromUnixToISOString(new Date())|2,082,578|1041290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1429240.2064123186,"samples":714714},{"name":"fromUnixToISOString(new Date())","opsSec":2082578.1881569761,"samples":1041290}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,097|8075|
|Intl.DateTimeFormat().format(new Date())|17,590|8796|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,094|9048|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,902|8952|
|Reusing Intl.DateTimeFormat()|557,312|320733|
|Date.toLocaleDateString()|933,139|466600|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,193|10598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16097.71744693064,"samples":8075},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17590.257931215525,"samples":8796},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18094.16966617325,"samples":9048},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17902.609253702733,"samples":8952},{"name":"Reusing Intl.DateTimeFormat()","opsSec":557312.6377068497,"samples":320733},{"name":"Date.toLocaleDateString()","opsSec":933139.644527792,"samples":466600},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21193.92786967218,"samples":10598}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,017,318|508707|
|Using brackets {}|993,233|496820|
|Using '' + |985,750|493589|
|Using date.toString()|1,148,418|574276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1017318.4351408398,"samples":508707},{"name":"Using brackets {}","opsSec":993233.064467623,"samples":496820},{"name":"Using '' + ","opsSec":985750.4086571712,"samples":493589},{"name":"Using date.toString()","opsSec":1148418.3332933513,"samples":574276}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,566,450|1783277|
|Using delete property (proto: null)|15,261,359|7641671|
|Using delete property (cached proto: null)|3,577,214|1788844|
|Using undefined assignment|75,853,503|37929663|
|Using undefined assignment (proto: null)|16,133,292|8067634|
|Using undefined property (cached proto: null)|74,966,947|37488128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3566450.9580989187,"samples":1783277},{"name":"Using delete property (proto: null)","opsSec":15261359.354848964,"samples":7641671},{"name":"Using delete property (cached proto: null)","opsSec":3577214.362509547,"samples":1788844},{"name":"Using undefined assignment","opsSec":75853503.0299864,"samples":37929663},{"name":"Using undefined assignment (proto: null)","opsSec":16133292.57512393,"samples":8067634},{"name":"Using undefined property (cached proto: null)","opsSec":74966947.05431648,"samples":37488128}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|366,562|183412|
|NodeError|305,735|152869|
|NodeError Range|292,796|146427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:43:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":366562.55365735455,"samples":183412},{"name":"NodeError","opsSec":305735.89470262907,"samples":152869},{"name":"NodeError Range","opsSec":292796.9935965347,"samples":146427}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,781,267|890699|
|Function returning explicitly undefined|1,819,541|910136|
|Function returning implicitly undefined|1,596,113|798057|
|Function returning string|1,596,069|798183|
|Function returning integer|1,619,177|809589|
|Function returning float|1,605,276|802639|
|Function returning functions|1,715,332|857930|
|Function returning arrow functions|1,863,065|931784|
|Function returning empty object|1,905,747|952880|
|Function returning empty array|1,890,428|945511|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1781267.4366594278,"samples":890699},{"name":"Function returning explicitly undefined","opsSec":1819541.337702267,"samples":910136},{"name":"Function returning implicitly undefined","opsSec":1596113.4732825537,"samples":798057},{"name":"Function returning string","opsSec":1596069.5013608714,"samples":798183},{"name":"Function returning integer","opsSec":1619177.8542739933,"samples":809589},{"name":"Function returning float","opsSec":1605276.0993530983,"samples":802639},{"name":"Function returning functions","opsSec":1715332.9125026464,"samples":857930},{"name":"Function returning arrow functions","opsSec":1863065.78080973,"samples":931784},{"name":"Function returning empty object","opsSec":1905747.9213696744,"samples":952880},{"name":"Function returning empty array","opsSec":1890428.9724313484,"samples":945511}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,141,248|43570646|
|using Array.includes (first item)|76,740,110|38370575|
|Using raw comparison|97,477,239|48738967|
|Using raw comparison (first item)|97,356,634|48686082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":87141248.42937578,"samples":43570646},{"name":"using Array.includes (first item)","opsSec":76740110.47846347,"samples":38370575},{"name":"Using raw comparison","opsSec":97477239.96205147,"samples":48738967},{"name":"Using raw comparison (first item)","opsSec":97356634.83789027,"samples":48686082}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,285,677|25153872|
|Using Object.getOwnPropertyNames()|42,779,797|21393256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:00:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":50285677.23682951,"samples":25153872},{"name":"Using Object.getOwnPropertyNames()","opsSec":42779797.45411079,"samples":21393256}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|129,064,654|64535788|
|Length = 10_000 - Array.at|96,423,125|48251514|
|Length = 1_000_000 - Array.at|95,536,669|47813136|
|Length = 100 - Array[length - 1]|91,192,396|45603841|
|Length = 10_000 - Array[length - 1]|96,525,002|48268790|
|Length = 1_000_000 - Array[length - 1]|89,748,052|44874042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":129064654.77882284,"samples":64535788},{"name":"Length = 10_000 - Array.at","opsSec":96423125.24165225,"samples":48251514},{"name":"Length = 1_000_000 - Array.at","opsSec":95536669.68608813,"samples":47813136},{"name":"Length = 100 - Array[length - 1]","opsSec":91192396.87758976,"samples":45603841},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96525002.79213619,"samples":48268790},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":89748052.58818159,"samples":44874042}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,704,999|70854895|
|~ (small)|93,488,711|46750300|
|Math.floor (long)|93,852,244|46926128|
|~ (long)|95,386,481|47693246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141704999.8041866,"samples":70854895},{"name":"~ (small)","opsSec":93488711.22757062,"samples":46750300},{"name":"Math.floor (long)","opsSec":93852244.9254351,"samples":46926128},{"name":"~ (long)","opsSec":95386481.88903292,"samples":47693246}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,859,083|21977707|
|Object.create({})|1,942,370|971186|
|Cached Empty.prototype|73,793,449|36966231|
|Empty.prototype|2,165,339|1094492|
|Empty class|1,448,752|726876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:17:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43859083.05032443,"samples":21977707},{"name":"Object.create({})","opsSec":1942370.2635209844,"samples":971186},{"name":"Cached Empty.prototype","opsSec":73793449.16253312,"samples":36966231},{"name":"Empty.prototype","opsSec":2165339.8486857763,"samples":1094492},{"name":"Empty class","opsSec":1448752.8955908988,"samples":726876}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,029,708|74024859|
|Using optional chain (obj.field?.field2) (undefined)|97,460,159|48730095|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,041,313|49525260|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,711,327|48865062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:23:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148029708.52823883,"samples":74024859},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97460159.98227073,"samples":48730095},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99041313.71372505,"samples":49525260},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97711327.46735775,"samples":48865062}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,095,279|70571986|
|Using parseInt(x, 10) - big number (10 len)|90,612,451|45306235|
|Using + - small number (2 len)|97,437,345|48730745|
|Using + - big number (10 len)|97,094,972|48547503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141095279.17258587,"samples":70571986},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":90612451.15261017,"samples":45306235},{"name":"Using + - small number (2 len)","opsSec":97437345.220729,"samples":48730745},{"name":"Using + - big number (10 len)","opsSec":97094972.01675978,"samples":48547503}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|995,345|502819|
|Using ? operator to avoid rejection|1,106,747|554893|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:35:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":995345.1930882952,"samples":502819},{"name":"Using ? operator to avoid rejection","opsSec":1106747.7406080146,"samples":554893}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|134,549,224|67314858|
|Raw usage underscore usage|96,231,293|48115677|
|Manipulating private properties using #|73,201,903|36600953|
|Manipulating private properties using underscore(_)|98,584,124|49301024|
|Manipulating private properties using Symbol|98,550,429|49285201|
|Manipulating private properties using PrivateSymbol|35,701,231|17854385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:41:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":134549224.88629472,"samples":67314858},{"name":"Raw usage underscore usage","opsSec":96231293.37428518,"samples":48115677},{"name":"Manipulating private properties using #","opsSec":73201903.21832767,"samples":36600953},{"name":"Manipulating private properties using underscore(_)","opsSec":98584124.42033914,"samples":49301024},{"name":"Manipulating private properties using Symbol","opsSec":98550429.17872006,"samples":49285201},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35701231.47076756,"samples":17854385}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,497,923|3753895|
|Adding property in the object creation - small object|7,276,462|3638430|
|Adding property after the function creation - small class|235,094|118005|
|Adding property in the function creation - small class|246,744|123828|
|Adding property after the class creation - small class|239,478|121024|
|Adding property in the class creation - small class|240,504|122008|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7497923.931773615,"samples":3753895},{"name":"Adding property in the object creation - small object","opsSec":7276462.297676657,"samples":3638430},{"name":"Adding property after the function creation - small class","opsSec":235094.63271691784,"samples":118005},{"name":"Adding property in the function creation - small class","opsSec":246744.8915270975,"samples":123828},{"name":"Adding property after the class creation - small class","opsSec":239478.77116189135,"samples":121024},{"name":"Adding property in the class creation - small class","opsSec":240504.17677012837,"samples":122008}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|139,157,160|69672211|
|Getter|48,540,734|24636728|
|Method|78,844,302|39422154|
|DefineProperty (getter)|94,547,034|47275381|
|DefineProperty (getter & enumerable=false)|50,965,342|25482677|
|DefineProperty (getter & configurable=false)|99,532,360|49799471|
|DefineProperty (getter & enumerable=false & configurable=false)|51,759,250|25879633|
|DefineProperty (writable)|99,868,106|49934059|
|DefineProperty (writable & enumerable=false)|97,644,774|48844904|
|DefineProperty (writable & enumerable=false & configurable=false)|97,438,595|48719306|
|DefineProperties (getter)|50,990,856|25506396|
|DefineProperties (getter & enumerable=false)|48,565,726|24287919|
|DefineProperties (getter & enumerable=false & configurable=false)|51,770,299|25891674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":139157160.99159682,"samples":69672211},{"name":"Getter","opsSec":48540734.486657135,"samples":24636728},{"name":"Method","opsSec":78844302.79627602,"samples":39422154},{"name":"DefineProperty (getter)","opsSec":94547034.3886222,"samples":47275381},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50965342.99148591,"samples":25482677},{"name":"DefineProperty (getter & configurable=false)","opsSec":99532360.82255137,"samples":49799471},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51759250.16166945,"samples":25879633},{"name":"DefineProperty (writable)","opsSec":99868106.01582728,"samples":49934059},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97644774.03492554,"samples":48844904},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97438595.04568447,"samples":48719306},{"name":"DefineProperties (getter)","opsSec":50990856.44742831,"samples":25506396},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48565726.71282984,"samples":24287919},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51770299.19254792,"samples":25891674}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,094,862|68138965|
|Setter|10,518,585|5259295|
|Method|86,422,445|43211232|
|DefineProperty (setter)|102,249,419|51142593|
|DefineProperty (setter & enumerable=false)|10,574,925|5287465|
|DefineProperty (setter & configurable=false)|10,352,164|5176090|
|DefineProperty (setter & enumerable=false & configurable=false)|10,575,998|5288001|
|DefineProperty (writable)|102,006,643|51050203|
|DefineProperty (writable & enumerable=false)|94,464,393|47232236|
|DefineProperty (writable & enumerable=false & configurable=false)|101,064,260|50541785|
|DefineProperties (setter)|94,259,827|47144334|
|DefineProperties (setter & enumerable=false)|10,282,397|5141892|
|DefineProperties (setter & enumerable=false & configurable=false)|10,355,379|5177692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":136094862.54003373,"samples":68138965},{"name":"Setter","opsSec":10518585.70841703,"samples":5259295},{"name":"Method","opsSec":86422445.3327518,"samples":43211232},{"name":"DefineProperty (setter)","opsSec":102249419.97088955,"samples":51142593},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10574925.050935075,"samples":5287465},{"name":"DefineProperty (setter & configurable=false)","opsSec":10352164.471753292,"samples":5176090},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10575998.086880708,"samples":5288001},{"name":"DefineProperty (writable)","opsSec":102006643.32957102,"samples":51050203},{"name":"DefineProperty (writable & enumerable=false)","opsSec":94464393.40562469,"samples":47232236},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101064260.66235785,"samples":50541785},{"name":"DefineProperties (setter)","opsSec":94259827.5090967,"samples":47144334},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10282397.480394155,"samples":5141892},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10355379.27794705,"samples":5177692}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,373,760|1687163|
|Using replaceAll()|2,925,104|1462761|
|Using replaceAll(//g)|2,961,366|1480684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3373760.6724191653,"samples":1687163},{"name":"Using replaceAll()","opsSec":2925104.4179435032,"samples":1462761},{"name":"Using replaceAll(//g)","opsSec":2961366.9457533676,"samples":1480684}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,126,539|11063277|
|{ ...object, __proto__: null }|20,269,162|10136670|
|{ ...object, newProp: true }|798,304|399359|
|structuredClone|286,171|143087|
|JSON.parse + JSON.stringify|192,178|96093|
|loop + object.keys starting with {}|1,526,342|763172|
|loop + object.keys starting with { __proto__: null }|802,120|401731|
|loop + object.keys starting with { randomProp: true }|592,881|296442|
|object.keys + reduce(FN, {})|1,561,923|781163|
|object.keys + reduce(FN, { __proto__: null })|828,837|414540|
|object.keys + reduce(FN, { newProp: true })|588,625|294313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:11:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22126539.8390145,"samples":11063277},{"name":"{ ...object, __proto__: null }","opsSec":20269162.566133443,"samples":10136670},{"name":"{ ...object, newProp: true }","opsSec":798304.0777390841,"samples":399359},{"name":"structuredClone","opsSec":286171.7993388631,"samples":143087},{"name":"JSON.parse + JSON.stringify","opsSec":192178.67683934033,"samples":96093},{"name":"loop + object.keys starting with {}","opsSec":1526342.3576556232,"samples":763172},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802120.6729555463,"samples":401731},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":592881.5976437663,"samples":296442},{"name":"object.keys + reduce(FN, {})","opsSec":1561923.9295420572,"samples":781163},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":828837.0164825739,"samples":414540},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":588625.113530579,"samples":294313}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,608|125326|
|Sort using first char|1,308,644|654426|
|Sort using localeCompare|1,237,802|618924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:18:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":250608.4497648168,"samples":125326},{"name":"Sort using first char","opsSec":1308644.7891840804,"samples":654426},{"name":"Sort using localeCompare","opsSec":1237802.0379347273,"samples":618924}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|52,544,838|26272480|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,560|3281|
|{ ...bigObject, ...anotherBigObject }|1,128|565|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,834,274|6417149|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,663,523|13833365|
|{ ...smallObject, ...anotherSmallObject }|20,680,640|10340402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.6018563572702,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":52544838.726512216,"samples":26272480},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1065.3645164581199,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6560.4844362484455,"samples":3281},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1128.2014618447797,"samples":565},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12834274.436272135,"samples":6417149},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27663523.79759186,"samples":13833365},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20680640.126607638,"samples":10340402}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,047|1034|
|streams.web.Readable reading 1e3 * "some data"|1,656|829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:29:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2047.029460523322,"samples":1034},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1656.301181567102,"samples":829}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,327|3164|
|streams.web.WritableStream writing 1e3 * "some data"|1,287|648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:35:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6327.987027626594,"samples":3164},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1287.172527045655,"samples":648}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|148,464,360|74232394|
|Using backtick (`)|96,039,451|48019729|
|Using array.join|10,174,441|5089799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":148464360.71956983,"samples":74232394},{"name":"Using backtick (`)","opsSec":96039451.85347508,"samples":48019729},{"name":"Using array.join","opsSec":10174441.104874877,"samples":5089799}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|59,266,338|29639489|
|(short string) (true) String#slice and strict comparison|59,228,404|29617964|
|(long string) (true) String#endsWith|48,739,065|24370726|
|(long string) (true) String#slice and strict comparison|55,959,525|27979766|
|(short string) (false) String#endsWith|57,441,483|28720851|
|(short string) (false) String#slice and strict comparison|59,971,058|29991728|
|(long string) (false) String#endsWith|53,719,808|26859914|
|(long string) (false) String#slice and strict comparison|55,127,935|27567520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:46:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":59266338.03102277,"samples":29639489},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59228404.09737071,"samples":29617964},{"name":"(long string) (true) String#endsWith","opsSec":48739065.05302809,"samples":24370726},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55959525.28485697,"samples":27979766},{"name":"(short string) (false) String#endsWith","opsSec":57441483.722361855,"samples":28720851},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59971058.542893775,"samples":29991728},{"name":"(long string) (false) String#endsWith","opsSec":53719808.66086888,"samples":26859914},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55127935.77317278,"samples":27567520}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|138,028,980|69014523|
|Using indexof|16,128,185|8064096|
|Using RegExp.test|13,567,496|6784451|
|Using RegExp.text with cached regex pattern|14,214,897|7107450|
|Using new RegExp.test|4,374,454|2187260|
|Using new RegExp.test with cached regex pattern|5,114,952|2557564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:52:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":138028980.57426322,"samples":69014523},{"name":"Using indexof","opsSec":16128185.968058446,"samples":8064096},{"name":"Using RegExp.test","opsSec":13567496.814354936,"samples":6784451},{"name":"Using RegExp.text with cached regex pattern","opsSec":14214897.12859078,"samples":7107450},{"name":"Using new RegExp.test","opsSec":4374454.794376834,"samples":2187260},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5114952.587815953,"samples":2557564}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|109,269,517|54748915|
|(short string) (true) String#slice and strict comparison|61,089,839|30578535|
|(long string) (true) String#startsWith|58,554,748|29277382|
|(long string) (true) String#slice and strict comparison|56,681,826|28346154|
|(short string) (false) String#startsWith|90,264,433|45132229|
|(short string) (false) String#slice and strict comparison|59,652,699|29829796|
|(long string) (false) String#startsWith|81,183,878|40608954|
|(long string) (false) String#slice and strict comparison|54,828,058|27416009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:58:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":109269517.02618867,"samples":54748915},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61089839.53197794,"samples":30578535},{"name":"(long string) (true) String#startsWith","opsSec":58554748.42443692,"samples":29277382},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56681826.736690804,"samples":28346154},{"name":"(short string) (false) String#startsWith","opsSec":90264433.80913174,"samples":45132229},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59652699.60778191,"samples":29829796},{"name":"(long string) (false) String#startsWith","opsSec":81183878.64069346,"samples":40608954},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54828058.098331906,"samples":27416009}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|121,130,542|60565284|
|Using this|98,428,854|49214772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:07:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":121130542.56258605,"samples":60565284},{"name":"Using this","opsSec":98428854.21058968,"samples":49214772}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,956,203|5478105|
|Date.now()|19,202,235|9601119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10956203.426277945,"samples":5478105},{"name":"Date.now()","opsSec":19202235.65732725,"samples":9601119}]}-->
