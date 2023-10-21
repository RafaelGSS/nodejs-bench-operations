## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|697,041,518|96|
|Using dot notation|716,643,858|96|
|Using define property (writable)|3,209,257|99|
|Using define property initialized (writable)|4,211,520|93|
|Using define property (getter)|1,664,151|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":697041517.7193738,"samples":6},{"name":"Using dot notation","opsSec":716643857.9136379,"samples":8},{"name":"Using define property (writable)","opsSec":3209257.318857637,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4211519.805450716,"samples":6},{"name":"Using define property (getter)","opsSec":1664150.6633438529,"samples":7}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.008ms
array.push|100|0.042ms
new Array(length)|100|0.016ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.653ms
new Array(length)|10,000|0.615ms
array.push|1,000,000|42.835ms
new Array(length)|1,000,000|11.009ms
array.push|100,000,000|2,137.97ms
new Array(length)|100,000,000|6,281.278ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.417ms
new Array(length)|10,000|0.289ms
array.push|1,000,000|33.777ms
new Array(length)|1,000,000|5.038ms
array.push|100,000,000|3,646.907ms
new Array(length)|100,000,000|5,759.764ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|289|72|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":289.1888667878623,"samples":4},{"name":"Array.from","opsSec":13.173350582264876,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,180|82|
|new Blob (1024)|388|66|
|text (128)|4,034|83|
|text (1024)|490|88|
|arrayBuffer (128)|3,984|85|
|arrayBuffer (1024)|487|87|
|slice (0, 64)|50,008|66|
|slice (0, 512)|16,504|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3180.2739807739886,"samples":4},{"name":"new Blob (1024)","opsSec":388.4510061931157,"samples":2},{"name":"text (128)","opsSec":4033.614187348395,"samples":4},{"name":"text (1024)","opsSec":490.26089794441464,"samples":3},{"name":"arrayBuffer (128)","opsSec":3983.516173697305,"samples":6},{"name":"arrayBuffer (1024)","opsSec":487.481419183441,"samples":2},{"name":"slice (0, 64)","opsSec":50008.41172049519,"samples":3},{"name":"slice (0, 512)","opsSec":16503.821635413802,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|180,317|55|
|[True conditional] Using constructor name|143,296|92|
|[True conditional] Check if property is valid then instanceof |146,546|97|
|[False conditional] Using instanceof only|719,353,900|97|
|[False conditional] Using constructor name|719,050,466|98|
|[False conditional] Check if property is valid then instanceof |720,660,211|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":180316.52456796018,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":143295.88364721253,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146545.87697056407,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719353899.6824243,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":719050465.7015859,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":720660210.9817837,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,419|88|
|crypto.verify('RSA-SHA256')|3,390|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3418.992605406877,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":3390.1962120762446,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|854,932|90|
|fromUnixToISOString(new Date())|1,384,771|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":854932.2441422401,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1384771.2319938762,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,865|85|
|Intl.DateTimeFormat().format(new Date())|11,211|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,640|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,199|93|
|Reusing Intl.DateTimeFormat()|520,167|84|
|Date.toLocaleDateString()|590,474|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,576|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12865.134575299155,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11210.594471121263,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13639.908042010687,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15198.884212152852,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520167.39963347965,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":590474.2530933486,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14575.81146967258,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|599,006|91|
|Using brackets {}|604,815|93|
|Using '' + |607,423|87|
|Using date.toString()|669,508|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":599005.7628800211,"samples":5},{"name":"Using brackets {}","opsSec":604815.0798930395,"samples":4},{"name":"Using '' + ","opsSec":607423.1946196813,"samples":5},{"name":"Using date.toString()","opsSec":669508.2092696779,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,099,664|84|
|Using delete property (proto: null)|11,276,819|85|
|Using delete property (cached proto: null)|2,173,249|89|
|Using undefined assignment|725,048,442|89|
|Using undefined assignment (proto: null)|11,962,224|87|
|Using undefined property (cached proto: null)|605,342,841|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2099664.3185698134,"samples":4},{"name":"Using delete property (proto: null)","opsSec":11276819.448321722,"samples":4},{"name":"Using delete property (cached proto: null)","opsSec":2173248.686660263,"samples":6},{"name":"Using undefined assignment","opsSec":725048442.2571164,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11962223.710665952,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":605342840.5752105,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|149,005|57|
|NodeError|125,857|83|
|NodeError Range|123,120|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":149005.43747937543,"samples":3},{"name":"NodeError","opsSec":125857.30311931716,"samples":3},{"name":"NodeError Range","opsSec":123119.6902798332,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,385,777|93|
|Function returning explicitly undefined|1,409,278|92|
|Function returning implicitly undefined|1,452,029|83|
|Function returning string|1,438,256|97|
|Function returning integer|1,455,670|96|
|Function returning float|1,449,251|96|
|Function returning functions|1,407,256|96|
|Function returning arrow functions|1,405,492|96|
|Function returning empty object|1,426,469|97|
|Function returning empty array|1,441,265|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1385777.1796427986,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1409278.3343048047,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1452029.3310118348,"samples":5},{"name":"Function returning string","opsSec":1438255.6578008202,"samples":5},{"name":"Function returning integer","opsSec":1455669.5351149363,"samples":6},{"name":"Function returning float","opsSec":1449251.1561969614,"samples":5},{"name":"Function returning functions","opsSec":1407255.5039116272,"samples":5},{"name":"Function returning arrow functions","opsSec":1405492.4810236092,"samples":5},{"name":"Function returning empty object","opsSec":1426469.1695920497,"samples":5},{"name":"Function returning empty array","opsSec":1441265.3876839804,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,260,922|96|
|using Array.includes (first item)|713,371,568|98|
|Using raw comparison|716,852,867|96|
|Using raw comparison (first item)|717,460,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":712260921.5684067,"samples":7},{"name":"using Array.includes (first item)","opsSec":713371567.6199031,"samples":7},{"name":"Using raw comparison","opsSec":716852866.6311618,"samples":6},{"name":"Using raw comparison (first item)","opsSec":717460752.2979897,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,915,352|91|
|Using Object.getOwnPropertyNames()|51,454,330|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":55915351.916528635,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":51454329.78166747,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|606,049,240|94|
|Length = 10_000 - Array.at|616,716,328|94|
|Length = 1_000_000 - Array.at|608,750,632|90|
|Length = 100 - Array[length - 1]|607,302,986|93|
|Length = 10_000 - Array[length - 1]|611,535,451|94|
|Length = 1_000_000 - Array[length - 1]|600,708,027|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":606049239.7999021,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":616716327.5848482,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":608750631.654489,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":607302985.7899483,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":611535451.1648036,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":600708027.1070099,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,176,728|94|
|Object.create({})|1,451,096|76|
|Cached Empty.prototype|715,626,580|98|
|Empty.prototype|1,375,697|74|
|Empty class|952,548|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50176727.792036094,"samples":5},{"name":"Object.create({})","opsSec":1451096.3499235727,"samples":3},{"name":"Cached Empty.prototype","opsSec":715626579.797154,"samples":6},{"name":"Empty.prototype","opsSec":1375696.7788124494,"samples":3},{"name":"Empty class","opsSec":952548.4561103187,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|663,278,428|90|
|Using optional chain (obj.field?.field2) (undefined)|689,342,325|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|701,312,453|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|701,118,661|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":663278427.8247685,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":689342325.4603521,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":701312453.0695192,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":701118661.251884,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|593,139,222|96|
|Using parseInt(x, 10) - big number (10 len)|598,446,340|94|
|Using + - small number (2 len)|599,057,031|98|
|Using + - big number (10 len)|598,966,164|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":593139221.7400622,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":598446340.4315716,"samples":8},{"name":"Using + - small number (2 len)","opsSec":599057031.2625668,"samples":7},{"name":"Using + - big number (10 len)","opsSec":598966163.9727032,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|790,722|69|
|Using ? operator to avoid rejection|898,156|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":790722.007969379,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":898155.5814206818,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|595,002,787|85|
|Raw usage underscore usage|592,743,501|86|
|Manipulating private properties using #|586,983,092|89|
|Manipulating private properties using underscore(_)|607,252,467|90|
|Manipulating private properties using Symbol|594,339,468|90|
|Manipulating private properties using PrivateSymbol|27,178,962|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":595002787.308033,"samples":9},{"name":"Raw usage underscore usage","opsSec":592743500.9648696,"samples":8},{"name":"Manipulating private properties using #","opsSec":586983092.2205663,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":607252466.9459469,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":594339468.3647113,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27178961.514738984,"samples":6}]}-->
