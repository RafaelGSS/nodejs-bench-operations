## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,505,367|97|
|Using dot notation|787,157,794|94|
|Using define property (writable)|4,260,711|95|
|Using define property initialized (writable)|5,897,360|90|
|Using define property (getter)|2,286,029|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":819505367.0324596,"samples":6},{"name":"Using dot notation","opsSec":787157793.5177962,"samples":8},{"name":"Using define property (writable)","opsSec":4260711.370325327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5897360.34853542,"samples":5},{"name":"Using define property (getter)","opsSec":2286029.163858436,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.103ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|22.839ms
new Array(length)|1,000,000|14.82ms
array.push|100,000,000|970.14ms
new Array(length)|100,000,000|3,616.563ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.258ms
new Array(length)|10,000|3.355ms
array.push|1,000,000|61.532ms
new Array(length)|1,000,000|2.537ms
array.push|100,000,000|1,412.406ms
new Array(length)|100,000,000|4,103.942ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|547|84|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":547.3554196973566,"samples":3},{"name":"Array.from","opsSec":21.556509508824515,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,768,621|97|
|[async] async function|16,372,442|81|
|[async] function|351,035|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818768620.9984884,"samples":6},{"name":"[async] async function","opsSec":16372442.308637679,"samples":7},{"name":"[async] function","opsSec":351035.24399498705,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,169|82|
|new Blob (1024)|688|81|
|text (128)|33,791|77|
|text (1024)|23,490|85|
|arrayBuffer (128)|34,210|79|
|arrayBuffer (1024)|23,493|82|
|slice (0, 64)|87,050|80|
|slice (0, 512)|40,120|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5168.853133526887,"samples":6},{"name":"new Blob (1024)","opsSec":688.1115696121568,"samples":2},{"name":"text (128)","opsSec":33790.95762690655,"samples":4},{"name":"text (1024)","opsSec":23489.968085882432,"samples":3},{"name":"arrayBuffer (128)","opsSec":34210.16486714638,"samples":4},{"name":"arrayBuffer (1024)","opsSec":23492.94317770886,"samples":3},{"name":"slice (0, 64)","opsSec":87050.17579847778,"samples":3},{"name":"slice (0, 512)","opsSec":40119.951756050956,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,492|55|
|[True conditional] Using constructor name|204,829|95|
|[True conditional] Check if property is valid then instanceof |207,851|96|
|[False conditional] Using instanceof only|819,775,360|96|
|[False conditional] Using constructor name|815,010,673|90|
|[False conditional] Check if property is valid then instanceof |820,281,907|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261491.90293942794,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":204829.13889423557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207850.81729145406,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819775359.9137529,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":815010672.9061419,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":820281907.4632835,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,387|90|
|crypto.verify('RSA-SHA256')|6,472|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6387.269995427675,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":6472.086649794424,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,521,495|91|
|fromUnixToISOString(new Date())|2,121,397|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2521495.291790346,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2121396.5637922287,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,082|84|
|Intl.DateTimeFormat().format(new Date())|13,818|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,948|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,285|81|
|Reusing Intl.DateTimeFormat()|712,963|96|
|Date.toLocaleDateString()|732,657|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,900|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15082.49585147802,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13817.790465175427,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17947.646555409538,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16284.513205905036,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":712962.8377960159,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":732657.3660158613,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16900.453688701244,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|973,058|95|
|Using brackets {}|986,060|95|
|Using '' + |993,676|96|
|Using date.toString()|1,092,743|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":973058.2137640811,"samples":4},{"name":"Using brackets {}","opsSec":986059.6253381257,"samples":4},{"name":"Using '' + ","opsSec":993675.6785243332,"samples":6},{"name":"Using date.toString()","opsSec":1092743.396453077,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,446,691|96|
|Using delete property (proto: null)|21,552,372|97|
|Using delete property (cached proto: null)|3,467,848|97|
|Using undefined assignment|823,027,520|96|
|Using undefined assignment (proto: null)|23,794,827|90|
|Using undefined property (cached proto: null)|819,823,403|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3446690.9357008096,"samples":6},{"name":"Using delete property (proto: null)","opsSec":21552372.291991495,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3467848.0844576643,"samples":7},{"name":"Using undefined assignment","opsSec":823027519.5682566,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23794827.276386786,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819823402.585496,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|254,114|53|
|NodeError|203,374|92|
|NodeError Range|203,843|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":254113.88483014438,"samples":3},{"name":"NodeError","opsSec":203373.99870957347,"samples":3},{"name":"NodeError Range","opsSec":203842.60772726822,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,687,737|96|
|Function returning explicitly undefined|1,675,900|94|
|Function returning implicitly undefined|1,691,335|93|
|Function returning string|1,699,200|97|
|Function returning integer|1,697,576|98|
|Function returning float|1,695,843|98|
|Function returning functions|1,651,556|96|
|Function returning arrow functions|1,680,624|94|
|Function returning empty object|1,685,693|97|
|Function returning empty array|1,690,562|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1687737.4497575006,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1675900.4484186454,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1691334.9984938342,"samples":6},{"name":"Function returning string","opsSec":1699199.6838979109,"samples":6},{"name":"Function returning integer","opsSec":1697576.4907261806,"samples":6},{"name":"Function returning float","opsSec":1695842.722954453,"samples":4},{"name":"Function returning functions","opsSec":1651556.059745417,"samples":7},{"name":"Function returning arrow functions","opsSec":1680623.634123653,"samples":5},{"name":"Function returning empty object","opsSec":1685692.9895572504,"samples":6},{"name":"Function returning empty array","opsSec":1690561.5279137024,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|817,990,345|99|
|using Array.includes (first item)|817,542,903|97|
|Using raw comparison|817,842,502|98|
|Using raw comparison (first item)|817,846,889|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":817990345.2659092,"samples":6},{"name":"using Array.includes (first item)","opsSec":817542902.8907378,"samples":9},{"name":"Using raw comparison","opsSec":817842502.4792736,"samples":6},{"name":"Using raw comparison (first item)","opsSec":817846888.9102714,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,458,529|89|
|Using Object.getOwnPropertyNames()|89,664,767|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using Object.keys()","opsSec":92458528.85488057,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89664766.9619494,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,444,562|97|
|Length = 10_000 - Array.at|23,602,276|93|
|Length = 1_000_000 - Array.at|23,576,737|91|
|Length = 100 - Array[length - 1]|817,237,566|97|
|Length = 10_000 - Array[length - 1]|816,907,262|95|
|Length = 1_000_000 - Array[length - 1]|818,255,571|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23444561.89077845,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":23602275.709243037,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":23576736.666390363,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":817237565.8396883,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":816907261.5225508,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":818255570.5049819,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,151,309|96|
|Object.create({})|1,498,227|80|
|Cached Empty.prototype|817,297,213|97|
|Empty.prototype|1,682,609|87|
|Empty class|1,102,715|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Object.create(null)","opsSec":80151309.23055035,"samples":5},{"name":"Object.create({})","opsSec":1498226.6534553966,"samples":3},{"name":"Cached Empty.prototype","opsSec":817297212.7744421,"samples":7},{"name":"Empty.prototype","opsSec":1682608.6802692087,"samples":5},{"name":"Empty class","opsSec":1102715.1737141376,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,594,358|97|
|Using optional chain (obj.field?.field2) (undefined)|822,243,443|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|820,894,166|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,517,833|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821594358.3332707,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822243443.1645736,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":820894166.4276938,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820517832.5552204,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|237,664,346|96|
|Using parseInt(x, 10) - big number (10 len)|18,435,341|97|
|Using + - small number (2 len)|819,525,379|99|
|Using + - big number (10 len)|818,954,866|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":237664345.75315917,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18435340.7094455,"samples":7},{"name":"Using + - small number (2 len)","opsSec":819525378.8895366,"samples":6},{"name":"Using + - big number (10 len)","opsSec":818954866.2775134,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|830,102|80|
|Using ? operator to avoid rejection|877,851|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using if to check function existence","opsSec":830101.5570585587,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":877851.434585602,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|477,790,599|94|
|Raw usage underscore usage|496,355,638|98|
|Manipulating private properties using #|416,632,340|89|
|Manipulating private properties using underscore(_)|375,971,972|94|
|Manipulating private properties using Symbol|375,402,866|95|
|Manipulating private properties using PrivateSymbol|48,115,794|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":477790598.5564413,"samples":9},{"name":"Raw usage underscore usage","opsSec":496355637.9254769,"samples":9},{"name":"Manipulating private properties using #","opsSec":416632340.38096493,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":375971972.11752766,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":375402866.03481215,"samples":11},{"name":"Manipulating private properties using PrivateSymbol","opsSec":48115793.5056367,"samples":9}]}-->
