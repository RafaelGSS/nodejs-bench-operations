## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,355,466|96|
|Using dot notation|854,844,464|97|
|Using define property (writable)|4,889,726|97|
|Using define property initialized (writable)|6,435,275|97|
|Using define property (getter)|2,504,807|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":854355466.2198235,"samples":7},{"name":"Using dot notation","opsSec":854844464.1211231,"samples":8},{"name":"Using define property (writable)","opsSec":4889726.246426864,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6435275.424730058,"samples":4},{"name":"Using define property (getter)","opsSec":2504806.6204305897,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.034ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|30.373ms
new Array(length)|1,000,000|6.72ms
array.push|100,000,000|1,773.091ms
new Array(length)|100,000,000|4,240.227ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.016ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.23ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|22.994ms
new Array(length)|1,000,000|4.457ms
array.push|100,000,000|2,484.939ms
new Array(length)|100,000,000|3,896.643ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|305|86|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:10:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":305.26507634628547,"samples":3},{"name":"Array.from","opsSec":22.662594308544886,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|855,176,302|95|
|[async] async function|17,762,376|85|
|[async] function|325,301|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:16:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":855176301.6924698,"samples":6},{"name":"[async] async function","opsSec":17762375.54654895,"samples":7},{"name":"[async] function","opsSec":325300.99594956206,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,550|83|
|new Blob (1024)|585|76|
|text (128)|4,961|85|
|text (1024)|627|87|
|arrayBuffer (128)|5,009|86|
|arrayBuffer (1024)|627|87|
|slice (0, 64)|70,370|69|
|slice (0, 512)|20,974|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:30:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4549.537132052786,"samples":4},{"name":"new Blob (1024)","opsSec":584.6879144015662,"samples":2},{"name":"text (128)","opsSec":4960.855318794562,"samples":5},{"name":"text (1024)","opsSec":627.2874948708021,"samples":3},{"name":"arrayBuffer (128)","opsSec":5009.469243547625,"samples":4},{"name":"arrayBuffer (1024)","opsSec":626.7600184341482,"samples":2},{"name":"slice (0, 64)","opsSec":70370.39851800003,"samples":4},{"name":"slice (0, 512)","opsSec":20973.903710032257,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|228,102|57|
|[True conditional] Using constructor name|182,100|95|
|[True conditional] Check if property is valid then instanceof |183,589|95|
|[False conditional] Using instanceof only|856,342,342|98|
|[False conditional] Using constructor name|856,111,336|95|
|[False conditional] Check if property is valid then instanceof |857,024,277|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":228101.9062307561,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":182100.05733934682,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183589.11988050034,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":856342341.5044354,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":856111336.4859843,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":857024276.9298611,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,755|95|
|crypto.verify('RSA-SHA256')|6,818|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:52:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6754.696003342115,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6817.894908993262,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,495,078|96|
|fromUnixToISOString(new Date())|2,262,681|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:03:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1495077.5111184018,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2262680.5754790404,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,925|85|
|Intl.DateTimeFormat().format(new Date())|13,741|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,611|98|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,260|78|
|Reusing Intl.DateTimeFormat()|639,797|99|
|Date.toLocaleDateString()|589,206|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,733|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:14:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12924.582507096327,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13741.349825613985,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16611.129144266837,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":13260.106853244306,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":639796.6256481508,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":589205.97531079,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14733.27883882984,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,090,838|99|
|Using brackets {}|1,093,699|99|
|Using '' + |1,080,938|97|
|Using date.toString()|1,202,522|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:25:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1090838.35088016,"samples":4},{"name":"Using brackets {}","opsSec":1093698.6763126089,"samples":6},{"name":"Using '' + ","opsSec":1080937.6187137724,"samples":6},{"name":"Using date.toString()","opsSec":1202522.4100635007,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,933,030|96|
|Using delete property (proto: null)|21,207,030|93|
|Using delete property (cached proto: null)|4,027,054|95|
|Using undefined assignment|854,266,944|99|
|Using undefined assignment (proto: null)|22,360,904|98|
|Using undefined property (cached proto: null)|852,074,633|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3933030.0523914024,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21207029.946157023,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4027053.5351204146,"samples":4},{"name":"Using undefined assignment","opsSec":854266944.3772606,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22360904.345713608,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":852074633.4504796,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|225,241|53|
|NodeError|177,599|95|
|NodeError Range|179,952|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:46:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":225240.5288816451,"samples":3},{"name":"NodeError","opsSec":177599.08636794056,"samples":3},{"name":"NodeError Range","opsSec":179951.79301296745,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,627,784|95|
|Function returning explicitly undefined|1,653,119|99|
|Function returning implicitly undefined|1,682,558|99|
|Function returning string|1,621,507|100|
|Function returning integer|1,680,692|94|
|Function returning float|1,677,546|100|
|Function returning functions|1,635,813|100|
|Function returning arrow functions|1,645,804|98|
|Function returning empty object|1,672,033|101|
|Function returning empty array|1,664,814|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1627784.4964097808,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1653119.249867937,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1682558.0666915884,"samples":5},{"name":"Function returning string","opsSec":1621506.6980784517,"samples":8},{"name":"Function returning integer","opsSec":1680692.0334194328,"samples":5},{"name":"Function returning float","opsSec":1677546.1729119397,"samples":5},{"name":"Function returning functions","opsSec":1635812.5077101968,"samples":5},{"name":"Function returning arrow functions","opsSec":1645804.039790784,"samples":6},{"name":"Function returning empty object","opsSec":1672032.9601235604,"samples":6},{"name":"Function returning empty array","opsSec":1664813.594369486,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|850,779,461|91|
|using Array.includes (first item)|852,898,347|96|
|Using raw comparison|852,942,078|94|
|Using raw comparison (first item)|855,909,080|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:18:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":850779460.5364888,"samples":7},{"name":"using Array.includes (first item)","opsSec":852898347.3714238,"samples":6},{"name":"Using raw comparison","opsSec":852942078.463235,"samples":6},{"name":"Using raw comparison (first item)","opsSec":855909080.2701449,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,176,722|90|
|Using Object.getOwnPropertyNames()|95,360,758|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:27:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":92176722.0844869,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":95360758.2297436,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|850,117,172|99|
|Length = 10_000 - Array.at|851,607,353|101|
|Length = 1_000_000 - Array.at|848,338,536|100|
|Length = 100 - Array[length - 1]|853,653,948|95|
|Length = 10_000 - Array[length - 1]|854,217,384|97|
|Length = 1_000_000 - Array[length - 1]|854,502,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:38:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":850117171.8332556,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":851607353.4236898,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":848338535.9548234,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":853653947.5620439,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":854217383.69676,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":854502798.8665735,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,537,988|96|
|Object.create({})|2,559,018|79|
|Cached Empty.prototype|853,267,614|94|
|Empty.prototype|2,382,867|77|
|Empty class|1,524,223|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:50:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78537988.08409365,"samples":6},{"name":"Object.create({})","opsSec":2559018.0392168895,"samples":3},{"name":"Cached Empty.prototype","opsSec":853267613.7520432,"samples":7},{"name":"Empty.prototype","opsSec":2382867.04106815,"samples":3},{"name":"Empty class","opsSec":1524222.7184723907,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|853,368,357|95|
|Using optional chain (obj.field?.field2) (undefined)|854,282,887|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|856,325,704|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|854,241,667|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:00:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":853368356.8121027,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":854282887.0392901,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":856325704.1402996,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":854241666.9706804,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|854,448,034|96|
|Using parseInt(x, 10) - big number (10 len)|854,444,268|97|
|Using + - small number (2 len)|855,138,709|98|
|Using + - big number (10 len)|855,600,852|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:09:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":854448034.316125,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":854444267.7405443,"samples":7},{"name":"Using + - small number (2 len)","opsSec":855138709.3596416,"samples":6},{"name":"Using + - big number (10 len)","opsSec":855600852.413198,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,154,472|84|
|Using ? operator to avoid rejection|1,219,205|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:19:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1154472.3503898769,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1219204.9924346467,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|850,065,825|98|
|Raw usage underscore usage|851,372,074|101|
|Manipulating private properties using #|842,418,754|90|
|Manipulating private properties using underscore(_)|844,072,659|96|
|Manipulating private properties using Symbol|845,190,865|93|
|Manipulating private properties using PrivateSymbol|57,089,606|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":850065825.2055167,"samples":6},{"name":"Raw usage underscore usage","opsSec":851372073.9645174,"samples":8},{"name":"Manipulating private properties using #","opsSec":842418753.7769058,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":844072659.2626686,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":845190865.0943112,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":57089605.76155635,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,450,706|96|
|Adding property in the object creation - small object|8,525,301|97|
|Adding property after the function creation - small class|262,343|90|
|Adding property in the function creation - small class|266,472|91|
|Adding property after the class creation - small class|223,371|88|
|Adding property in the class creation - small class|223,712|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:41:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8450706.06085708,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":8525300.728615263,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":262342.99759080185,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":266472.03271699225,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":223371.0257860267,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":223711.92759827056,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,853,719|93|
|Getter|95,343,100|96|
|Method|856,156,072|100|
|DefineProperty (getter)|856,210,861|100|
|DefineProperty (getter & enumerable=false)|95,307,781|96|
|DefineProperty (getter & configurable=false)|855,607,433|98|
|DefineProperty (getter & enumerable=false & configurable=false)|95,303,706|98|
|DefineProperty (writable)|856,630,745|97|
|DefineProperty (writable & enumerable=false)|856,469,505|100|
|DefineProperty (writable & enumerable=false & configurable=false)|856,106,939|96|
|DefineProperties (getter)|63,453,616|67|
|DefineProperties (getter & enumerable=false)|56,881,475|87|
|DefineProperties (getter & enumerable=false & configurable=false)|95,166,957|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854853719.3130174,"samples":7},{"name":"Getter","opsSec":95343100.2574482,"samples":5},{"name":"Method","opsSec":856156071.7782575,"samples":7},{"name":"DefineProperty (getter)","opsSec":856210861.3402681,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95307781.49496934,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":855607433.0013385,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95303706.00345857,"samples":6},{"name":"DefineProperty (writable)","opsSec":856630744.7877289,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":856469505.0903809,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":856106938.895564,"samples":7},{"name":"DefineProperties (getter)","opsSec":63453616.106404886,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56881474.57575094,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":95166957.32571647,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|840,589,708|95|
|Setter|12,701,953|99|
|Method|820,067,330|96|
|DefineProperty (setter)|848,370,983|97|
|DefineProperty (setter & enumerable=false)|12,844,240|98|
|DefineProperty (setter & configurable=false)|12,850,971|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,757,874|97|
|DefineProperty (writable)|848,507,224|99|
|DefineProperty (writable & enumerable=false)|849,324,618|97|
|DefineProperty (writable & enumerable=false & configurable=false)|848,379,857|98|
|DefineProperties (setter)|385,709,590|48|
|DefineProperties (setter & enumerable=false)|11,392,733|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,956,082|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:22:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":840589707.8924884,"samples":6},{"name":"Setter","opsSec":12701953.353314746,"samples":6},{"name":"Method","opsSec":820067329.7251879,"samples":7},{"name":"DefineProperty (setter)","opsSec":848370983.4311287,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12844239.84391175,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12850971.475711862,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12757874.32826341,"samples":5},{"name":"DefineProperty (writable)","opsSec":848507223.928437,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849324618.1189994,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848379856.9565064,"samples":7},{"name":"DefineProperties (setter)","opsSec":385709589.5464927,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11392732.735556496,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11956081.621210134,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,756,853|92|
|Using replaceAll()|3,271,622|101|
|Using replaceAll(//g)|3,397,041|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3756853.1781513263,"samples":5},{"name":"Using replaceAll()","opsSec":3271622.2305677487,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3397040.7585431216,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,115,948|92|
|{ ...object, __proto__: null }|30,144,817|97|
|{ ...object, newProp: true }|922,130|90|
|structuredClone|265,114|98|
|JSON.parse + JSON.stringify|207,862|95|
|loop + object.keys starting with {}|1,663,315|97|
|loop + object.keys starting with { __proto__: null }|817,597|92|
|loop + object.keys starting with { randomProp: true }|617,965|89|
|object.keys + reduce(FN, {})|636,972|96|
|object.keys + reduce(FN, { __proto__: null })|900,131|96|
|object.keys + reduce(FN, { newProp: true })|646,011|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:51:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29115947.93731354,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30144816.50405982,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":922130.1360683853,"samples":3},{"name":"structuredClone","opsSec":265113.89704170544,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":207861.5378240819,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1663315.1680686255,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":817597.3234927129,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":617964.977672961,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":636971.6656203235,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":900130.9232438377,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":646011.0062573452,"samples":7}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|273,823|97|
|Sort using first char|1,431,223|95|
|Sort using localeCompare|1,214,424|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:03:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":273823.3298587797,"samples":4},{"name":"Sort using first char","opsSec":1431223.1168832222,"samples":5},{"name":"Sort using localeCompare","opsSec":1214423.7295069941,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,017|96|
|{...smallObject} - Total keys: 2|108,047,596|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,153|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,553|99|
|{ ...bigObject, ...anotherBigObject }|1,229|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,983,961|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,200,768|98|
|{ ...smallObject, ...anotherSmallObject }|26,129,250|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:16:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2017.1424419097314,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":108047596.3360704,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1153.0909841172038,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6552.611687790284,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1229.410765219118,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14983960.935287554,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38200768.25342203,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26129249.791409366,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,662|86|
|streams.web.Readable reading 1e3 * "some data"|584|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:26:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2661.5131590024453,"samples":7},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":584.3817203830952,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,632|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,047|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:36:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6631.77076987607,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1047.2931859367748,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|582,597,136|90|
|Using backtick (`)|593,169,597|89|
|Using array.join|5,695,194|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":582597136.4294137,"samples":6},{"name":"Using backtick (`)","opsSec":593169597.4170164,"samples":7},{"name":"Using array.join","opsSec":5695193.605687625,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|767,984,723|89|
|Using indexof|794,100,217|90|
|Using RegExp.test|10,468,037|89|
|Using RegExp.text with cached regex pattern|11,314,003|89|
|Using new RegExp.test|2,845,682|87|
|Using new RegExp.test with cached regex pattern|3,508,246|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":767984722.7067726,"samples":6},{"name":"Using indexof","opsSec":794100217.2351176,"samples":7},{"name":"Using RegExp.test","opsSec":10468036.96194947,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11314003.461740583,"samples":5},{"name":"Using new RegExp.test","opsSec":2845682.4237784185,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3508246.125212273,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|709,202,216|95|
|Using this|714,763,092|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":709202215.8943073,"samples":7},{"name":"Using this","opsSec":714763091.7951857,"samples":10}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,061,973|92|
|Date.now()|14,079,563|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7061972.926627166,"samples":6},{"name":"Date.now()","opsSec":14079563.482732948,"samples":6}]}-->
