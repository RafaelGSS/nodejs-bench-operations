## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|853,516,082|95|
|Using dot notation|853,250,434|95|
|Using define property (writable)|4,817,736|99|
|Using define property initialized (writable)|6,416,729|97|
|Using define property (getter)|2,483,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":853516081.7303174,"samples":7},{"name":"Using dot notation","opsSec":853250434.1669738,"samples":7},{"name":"Using define property (writable)","opsSec":4817736.400874697,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6416728.6953104,"samples":6},{"name":"Using define property (getter)","opsSec":2483205.175203627,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.307ms
array.push|1,000,000|30.753ms
new Array(length)|1,000,000|6.583ms
array.push|100,000,000|1,751.384ms
new Array(length)|100,000,000|4,240.035ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.235ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|22.929ms
new Array(length)|1,000,000|4.41ms
array.push|100,000,000|2,449.49ms
new Array(length)|100,000,000|3,952.21ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|310|88|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:10:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":309.83781862412314,"samples":4},{"name":"Array.from","opsSec":23.069157694234523,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,062,157|99|
|[async] async function|18,629,299|88|
|[async] function|189,704|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854062157.2650232,"samples":6},{"name":"[async] async function","opsSec":18629298.83960283,"samples":6},{"name":"[async] function","opsSec":189704.2634036507,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,419|84|
|new Blob (1024)|585|75|
|text (128)|5,559|88|
|text (1024)|697|89|
|arrayBuffer (128)|5,533|87|
|arrayBuffer (1024)|624|87|
|slice (0, 64)|71,020|72|
|slice (0, 512)|18,645|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4419.269917404159,"samples":3},{"name":"new Blob (1024)","opsSec":584.6887978671444,"samples":2},{"name":"text (128)","opsSec":5558.5959319675985,"samples":5},{"name":"text (1024)","opsSec":697.3334507296955,"samples":3},{"name":"arrayBuffer (128)","opsSec":5533.243904802605,"samples":3},{"name":"arrayBuffer (1024)","opsSec":624.3409560261427,"samples":3},{"name":"slice (0, 64)","opsSec":71020.32678140435,"samples":3},{"name":"slice (0, 512)","opsSec":18645.12938367271,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,486|52|
|[True conditional] Using constructor name|179,888|94|
|[True conditional] Check if property is valid then instanceof |181,847|98|
|[False conditional] Using instanceof only|855,309,809|98|
|[False conditional] Using constructor name|855,297,195|97|
|[False conditional] Check if property is valid then instanceof |855,853,707|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:41:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":231485.78453562036,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179888.0491143693,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181846.87452778968,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":855309808.6763289,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":855297194.911394,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":855853707.3279694,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,721|95|
|crypto.verify('RSA-SHA256')|6,762|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:53:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6721.182704868164,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6761.626668247793,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,491,228|99|
|fromUnixToISOString(new Date())|2,212,455|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:03:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1491228.4480469646,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2212454.900233239,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,327|84|
|Intl.DateTimeFormat().format(new Date())|19,970|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,060|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,694|84|
|Reusing Intl.DateTimeFormat()|732,132|98|
|Date.toLocaleDateString()|742,528|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,783|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18326.78091198963,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19969.862506247813,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19059.871605293127,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18694.045097944338,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":732131.8540976663,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":742528.263338057,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19782.517955133866,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,101,678|92|
|Using brackets {}|1,105,245|98|
|Using '' + |1,096,942|99|
|Using date.toString()|1,192,821|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:26:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1101677.9465396937,"samples":4},{"name":"Using brackets {}","opsSec":1105244.835398792,"samples":4},{"name":"Using '' + ","opsSec":1096941.997497316,"samples":4},{"name":"Using date.toString()","opsSec":1192821.1375497205,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,938,103|94|
|Using delete property (proto: null)|21,550,463|97|
|Using delete property (cached proto: null)|4,017,651|97|
|Using undefined assignment|851,274,202|99|
|Using undefined assignment (proto: null)|22,789,536|91|
|Using undefined property (cached proto: null)|849,684,990|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3938102.920684783,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21550463.30431913,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4017650.9096067715,"samples":6},{"name":"Using undefined assignment","opsSec":851274201.8282659,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":22789536.248348653,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":849684990.4221085,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|223,603|53|
|NodeError|179,157|98|
|NodeError Range|179,788|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:47:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":223603.12806200434,"samples":3},{"name":"NodeError","opsSec":179157.29021917522,"samples":3},{"name":"NodeError Range","opsSec":179787.65290377196,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,731,706|96|
|Function returning explicitly undefined|1,737,499|100|
|Function returning implicitly undefined|1,776,405|97|
|Function returning string|1,724,649|99|
|Function returning integer|1,758,703|98|
|Function returning float|1,754,882|97|
|Function returning functions|1,711,067|100|
|Function returning arrow functions|1,723,796|100|
|Function returning empty object|1,751,639|97|
|Function returning empty array|1,687,651|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:04:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1731706.4324786693,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1737498.9096951755,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1776404.7422540006,"samples":6},{"name":"Function returning string","opsSec":1724649.4644380081,"samples":7},{"name":"Function returning integer","opsSec":1758702.9174744554,"samples":5},{"name":"Function returning float","opsSec":1754882.1111883367,"samples":6},{"name":"Function returning functions","opsSec":1711067.0753823703,"samples":6},{"name":"Function returning arrow functions","opsSec":1723796.4410161278,"samples":9},{"name":"Function returning empty object","opsSec":1751638.954579271,"samples":6},{"name":"Function returning empty array","opsSec":1687651.4353255958,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|852,546,461|98|
|using Array.includes (first item)|854,203,095|96|
|Using raw comparison|855,520,439|101|
|Using raw comparison (first item)|855,407,256|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:16:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":852546460.7506493,"samples":7},{"name":"using Array.includes (first item)","opsSec":854203095.092206,"samples":7},{"name":"Using raw comparison","opsSec":855520438.5924753,"samples":6},{"name":"Using raw comparison (first item)","opsSec":855407255.8670951,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,164,013|89|
|Using Object.getOwnPropertyNames()|94,857,643|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":93164013.3585985,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":94857642.93171443,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,073,319|93|
|Length = 10_000 - Array.at|852,262,887|96|
|Length = 1_000_000 - Array.at|851,842,894|99|
|Length = 100 - Array[length - 1]|851,106,572|98|
|Length = 10_000 - Array[length - 1]|850,973,537|97|
|Length = 1_000_000 - Array[length - 1]|852,074,207|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:40:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":848073319.1115717,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":852262886.7064753,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":851842894.0919083,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":851106572.3805416,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":850973536.6115258,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":852074206.8342013,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,701,950|92|
|Object.create({})|2,547,311|87|
|Cached Empty.prototype|853,861,124|92|
|Empty.prototype|2,428,241|82|
|Empty class|1,497,264|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:52:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78701950.34024596,"samples":5},{"name":"Object.create({})","opsSec":2547310.8887914144,"samples":3},{"name":"Cached Empty.prototype","opsSec":853861124.2187363,"samples":8},{"name":"Empty.prototype","opsSec":2428241.283988277,"samples":3},{"name":"Empty class","opsSec":1497264.0040844532,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,225,679|100|
|Using optional chain (obj.field?.field2) (undefined)|853,461,585|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|852,463,572|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|852,402,037|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:00:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":854225679.2806755,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":853461584.5197811,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":852463571.5348133,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":852402036.9482868,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|853,592,730|97|
|Using parseInt(x, 10) - big number (10 len)|850,961,112|96|
|Using + - small number (2 len)|855,513,783|93|
|Using + - big number (10 len)|854,860,140|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:11:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":853592730.3130379,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":850961112.4529657,"samples":6},{"name":"Using + - small number (2 len)","opsSec":855513782.6729845,"samples":6},{"name":"Using + - big number (10 len)","opsSec":854860140.4841886,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,310,349|83|
|Using ? operator to avoid rejection|1,378,813|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:18:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1310348.9283583262,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1378813.1880106465,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|848,026,698|95|
|Raw usage underscore usage|849,522,112|101|
|Manipulating private properties using #|840,417,166|98|
|Manipulating private properties using underscore(_)|842,457,460|93|
|Manipulating private properties using Symbol|842,288,682|101|
|Manipulating private properties using PrivateSymbol|56,267,067|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:29:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":848026697.5394105,"samples":6},{"name":"Raw usage underscore usage","opsSec":849522112.1438316,"samples":8},{"name":"Manipulating private properties using #","opsSec":840417165.9222105,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":842457460.1048204,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":842288682.1286373,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":56267067.34366747,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,901,300|98|
|Adding property in the object creation - small object|8,031,293|96|
|Adding property after the function creation - small class|262,768|90|
|Adding property in the function creation - small class|263,311|91|
|Adding property after the class creation - small class|221,664|87|
|Adding property in the class creation - small class|221,446|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:42:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7901299.991983879,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":8031293.391543336,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":262768.2345296705,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":263310.6116307533,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":221664.3804949785,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":221446.26309426143,"samples":5}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,520,924|100|
|Getter|94,853,520|96|
|Method|854,179,066|98|
|DefineProperty (getter)|855,199,032|99|
|DefineProperty (getter & enumerable=false)|95,133,209|96|
|DefineProperty (getter & configurable=false)|855,794,227|99|
|DefineProperty (getter & enumerable=false & configurable=false)|95,043,628|97|
|DefineProperty (writable)|855,667,214|96|
|DefineProperty (writable & enumerable=false)|855,156,520|95|
|DefineProperty (writable & enumerable=false & configurable=false)|383,372,175|47|
|DefineProperties (getter)|58,386,836|94|
|DefineProperties (getter & enumerable=false)|95,188,948|97|
|DefineProperties (getter & enumerable=false & configurable=false)|94,929,664|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:03:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854520924.3243573,"samples":7},{"name":"Getter","opsSec":94853519.69006278,"samples":6},{"name":"Method","opsSec":854179065.9432762,"samples":6},{"name":"DefineProperty (getter)","opsSec":855199031.6998036,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95133209.29954898,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":855794227.4029788,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95043627.98356473,"samples":5},{"name":"DefineProperty (writable)","opsSec":855667214.4842966,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":855156519.818849,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":383372175.10142094,"samples":6},{"name":"DefineProperties (getter)","opsSec":58386836.2360827,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95188948.13224001,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":94929663.98585536,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,348,268|95|
|Setter|12,586,217|98|
|Method|846,057,702|98|
|DefineProperty (setter)|816,594,055|95|
|DefineProperty (setter & enumerable=false)|12,981,205|92|
|DefineProperty (setter & configurable=false)|12,788,339|98|
|DefineProperty (setter & enumerable=false & configurable=false)|12,237,240|98|
|DefineProperty (writable)|849,217,688|100|
|DefineProperty (writable & enumerable=false)|848,551,246|98|
|DefineProperty (writable & enumerable=false & configurable=false)|842,929,220|98|
|DefineProperties (setter)|849,542,858|100|
|DefineProperties (setter & enumerable=false)|12,277,567|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,837,170|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842348268.2663552,"samples":6},{"name":"Setter","opsSec":12586216.82179452,"samples":5},{"name":"Method","opsSec":846057702.4922757,"samples":8},{"name":"DefineProperty (setter)","opsSec":816594054.8014921,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12981204.829138659,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12788338.843347732,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12237240.04349838,"samples":5},{"name":"DefineProperty (writable)","opsSec":849217687.8946607,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":848551245.5939039,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":842929219.6560957,"samples":12},{"name":"DefineProperties (setter)","opsSec":849542858.0172374,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12277566.508969331,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11837170.122609384,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,708,006|94|
|Using replaceAll()|3,265,658|100|
|Using replaceAll(//g)|3,339,600|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3708005.5553733413,"samples":5},{"name":"Using replaceAll()","opsSec":3265657.5735082375,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3339600.0183813516,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,621,461|93|
|{ ...object, __proto__: null }|30,025,790|97|
|{ ...object, newProp: true }|905,094|90|
|structuredClone|271,053|96|
|JSON.parse + JSON.stringify|200,873|94|
|loop + object.keys starting with {}|1,656,637|95|
|loop + object.keys starting with { __proto__: null }|885,377|97|
|loop + object.keys starting with { randomProp: true }|639,886|98|
|object.keys + reduce(FN, {})|590,969|91|
|object.keys + reduce(FN, { __proto__: null })|881,798|93|
|object.keys + reduce(FN, { newProp: true })|641,680|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:53:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29621461.400679614,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30025789.54513864,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":905093.9504118102,"samples":3},{"name":"structuredClone","opsSec":271052.73334839783,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":200873.39716713663,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1656636.6852667036,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":885377.4589790177,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":639886.1844843965,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":590969.1153899104,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":881797.6139756466,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":641680.4243601972,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|272,171|98|
|Sort using first char|1,423,132|94|
|Sort using localeCompare|1,244,591|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:04:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":272170.9153321709,"samples":5},{"name":"Sort using first char","opsSec":1423131.5119307025,"samples":6},{"name":"Sort using localeCompare","opsSec":1244590.7456367498,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,040|94|
|{...smallObject} - Total keys: 2|112,215,646|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,198|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,668|99|
|{ ...bigObject, ...anotherBigObject }|1,229|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,905,988|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,171,054|97|
|{ ...smallObject, ...anotherSmallObject }|26,257,834|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2040.4272035555791,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":112215645.90620282,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2198.2454450801315,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6668.026900907219,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1228.8422915991143,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15905987.62075466,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38171053.86219077,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26257834.31489321,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,605|85|
|streams.web.Readable reading 1e3 * "some data"|706|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:27:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2605.404991334235,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":706.0721194542718,"samples":6}]}-->
