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
|Using if to check function existence|795,383|81|
|Using ? operator to avoid rejection|838,503|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":795383.3490087282,"samples":5},{"name":"Using ? operator to avoid rejection","opsSec":838503.4153310648,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|585,403,946|83|
|Raw usage underscore usage|597,639,059|86|
|Manipulating private properties using #|595,224,214|87|
|Manipulating private properties using underscore(_)|611,893,536|89|
|Manipulating private properties using Symbol|618,719,393|87|
|Manipulating private properties using PrivateSymbol|28,948,448|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":585403945.7959294,"samples":5},{"name":"Raw usage underscore usage","opsSec":597639058.8578159,"samples":6},{"name":"Manipulating private properties using #","opsSec":595224213.804912,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":611893535.5636088,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":618719392.8121563,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":28948447.862604994,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,632,522|89|
|Adding property in the object creation - small object|4,772,044|91|
|Adding property after the function creation - small class|162,626|82|
|Adding property in the function creation - small class|168,631|83|
|Adding property after the class creation - small class|136,475|76|
|Adding property in the class creation - small class|135,076|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4632521.902304837,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":4772043.969145831,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":162625.5559601584,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":168630.51134994446,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":136475.1688466461,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":135076.35543171162,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|715,526,080|95|
|Getter|54,102,613|94|
|Method|714,713,731|98|
|DefineProperty (getter)|716,595,854|96|
|DefineProperty (getter & enumerable=false)|54,244,059|94|
|DefineProperty (getter & configurable=false)|713,928,127|96|
|DefineProperty (getter & enumerable=false & configurable=false)|54,207,874|96|
|DefineProperty (writable)|716,679,282|98|
|DefineProperty (writable & enumerable=false)|717,528,552|97|
|DefineProperty (writable & enumerable=false & configurable=false)|716,753,230|98|
|DefineProperties (getter)|41,721,946|75|
|DefineProperties (getter & enumerable=false)|31,885,472|92|
|DefineProperties (getter & enumerable=false & configurable=false)|53,898,305|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":715526080.0768024,"samples":6},{"name":"Getter","opsSec":54102613.020405345,"samples":5},{"name":"Method","opsSec":714713731.2147149,"samples":7},{"name":"DefineProperty (getter)","opsSec":716595854.0250132,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":54244058.62235593,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":713928126.5454024,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":54207873.58751701,"samples":5},{"name":"DefineProperty (writable)","opsSec":716679281.9810257,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":717528551.7528819,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":716753229.9766961,"samples":7},{"name":"DefineProperties (getter)","opsSec":41721946.2116753,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":31885472.192773588,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53898304.64153284,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|627,221,893|85|
|Setter|7,298,316|91|
|Method|610,881,110|88|
|DefineProperty (setter)|645,403,309|90|
|DefineProperty (setter & enumerable=false)|7,234,737|90|
|DefineProperty (setter & configurable=false)|7,368,636|89|
|DefineProperty (setter & enumerable=false & configurable=false)|7,262,257|90|
|DefineProperty (writable)|648,917,818|91|
|DefineProperty (writable & enumerable=false)|636,532,325|91|
|DefineProperty (writable & enumerable=false & configurable=false)|421,672,089|64|
|DefineProperties (setter)|69,969,435|83|
|DefineProperties (setter & enumerable=false)|7,316,082|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,200,436|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":627221893.3600446,"samples":6},{"name":"Setter","opsSec":7298316.078720093,"samples":5},{"name":"Method","opsSec":610881110.4660094,"samples":6},{"name":"DefineProperty (setter)","opsSec":645403309.3282573,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7234737.273389137,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":7368635.813282718,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7262256.713099092,"samples":5},{"name":"DefineProperty (writable)","opsSec":648917818.3182918,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":636532324.7839042,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":421672089.09814006,"samples":7},{"name":"DefineProperties (setter)","opsSec":69969435.49522248,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7316082.126856724,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7200435.751861312,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,195,780|92|
|Using replaceAll()|2,047,612|97|
|Using replaceAll(//g)|2,000,399|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2195780.3703574035,"samples":5},{"name":"Using replaceAll()","opsSec":2047611.5455181848,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2000399.048570219,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,002,248|90|
|{ ...object, __proto__: null }|17,394,913|93|
|{ ...object, newProp: true }|538,062|79|
|structuredClone|180,792|98|
|JSON.parse + JSON.stringify|141,882|94|
|loop + object.keys starting with {}|839,667|95|
|loop + object.keys starting with { __proto__: null }|440,054|98|
|loop + object.keys starting with { randomProp: true }|351,241|95|
|object.keys + reduce(FN, {})|336,426|95|
|object.keys + reduce(FN, { __proto__: null })|441,484|97|
|object.keys + reduce(FN, { newProp: true })|351,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":19002247.996049467,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":17394912.884101097,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":538061.6174997254,"samples":3},{"name":"structuredClone","opsSec":180791.96136868303,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":141882.06498750308,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":839666.6722602827,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":440053.83611931215,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":351240.9365723387,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":336425.77820800774,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":441483.70744438464,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":351634.8944256255,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,929|88|
|Sort using first char|778,549|87|
|Sort using localeCompare|673,173|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":148928.73932987664,"samples":5},{"name":"Sort using first char","opsSec":778548.9976945987,"samples":5},{"name":"Sort using localeCompare","opsSec":673172.882907149,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,027|84|
|{...smallObject} - Total keys: 2|51,723,731|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|673|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,205|86|
|{ ...bigObject, ...anotherBigObject }|692|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,673,856|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,365,653|86|
|{ ...smallObject, ...anotherSmallObject }|13,535,158|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1026.7027385926642,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51723730.985953175,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":672.5393475400007,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3205.124806707541,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":692.3389337428945,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8673856.460220512,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22365652.510697052,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13535158.033359932,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,494|86|
|streams.web.Readable reading 1e3 * "some data"|443|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1494.1460640817738,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":443.38372932498885,"samples":3}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,084|85|
|streams.web.WritableStream writing 1e3 * "some data"|707|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4083.909895584747,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":706.525042440654,"samples":3}]}-->

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
