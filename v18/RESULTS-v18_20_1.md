## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,194,930|97|
|Using dot notation|909,618,119|96|
|Using define property (writable)|4,597,368|96|
|Using define property initialized (writable)|6,333,403|92|
|Using define property (getter)|2,568,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912194930.0470653,"samples":6},{"name":"Using dot notation","opsSec":909618119.3453944,"samples":6},{"name":"Using define property (writable)","opsSec":4597367.817724662,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6333403.29427827,"samples":5},{"name":"Using define property (getter)","opsSec":2568937.146117732,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.17ms
array.push|1,000,000|27.374ms
new Array(length)|1,000,000|15.675ms
array.push|100,000,000|2,097.062ms
new Array(length)|100,000,000|4,242.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.491ms
new Array(length)|10,000|3.087ms
array.push|1,000,000|255.431ms
new Array(length)|1,000,000|4.631ms
array.push|100,000,000|2,612.482ms
new Array(length)|100,000,000|4,647.079ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|213|90|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:30:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":213.32984953765558,"samples":2},{"name":"Array.from","opsSec":22.227805136064536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,584,628|98|
|[async] async function|17,949,683|88|
|[async] function|375,729|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911584628.1527041,"samples":6},{"name":"[async] async function","opsSec":17949682.752275303,"samples":6},{"name":"[async] function","opsSec":375729.40531532036,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,730|92|
|new Blob (1024)|742|79|
|text (128)|38,086|68|
|text (1024)|25,276|78|
|arrayBuffer (128)|42,855|76|
|arrayBuffer (1024)|25,457|80|
|slice (0, 64)|95,881|81|
|slice (0, 512)|46,825|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5729.898676544437,"samples":5},{"name":"new Blob (1024)","opsSec":742.4077273862412,"samples":2},{"name":"text (128)","opsSec":38085.552240823345,"samples":5},{"name":"text (1024)","opsSec":25276.10925766244,"samples":5},{"name":"arrayBuffer (128)","opsSec":42855.069853772584,"samples":5},{"name":"arrayBuffer (1024)","opsSec":25457.269957829416,"samples":3},{"name":"slice (0, 64)","opsSec":95881.17814201184,"samples":4},{"name":"slice (0, 512)","opsSec":46825.3703275163,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|290,693|54|
|[True conditional] Using constructor name|228,188|94|
|[True conditional] Check if property is valid then instanceof |230,936|93|
|[False conditional] Using instanceof only|910,712,844|94|
|[False conditional] Using constructor name|910,964,236|97|
|[False conditional] Check if property is valid then instanceof |912,078,083|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:56:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":290692.7411382375,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228188.32469293973,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":230936.40175932803,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":910712843.8050499,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":910964236.0701406,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912078082.58517,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,246|91|
|crypto.verify('RSA-SHA256')|7,288|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:07:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7245.855510486057,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":7288.302139348693,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,962|83|
|Intl.DateTimeFormat().format(new Date())|15,022|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,990|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,338|77|
|Reusing Intl.DateTimeFormat()|797,134|98|
|Date.toLocaleDateString()|820,734|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,420|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15962.314598180494,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15021.790156912846,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16989.986566069107,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17337.743287350593,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":797133.5746031706,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":820734.2853009058,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17420.206371605826,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,160,628|94|
|Using brackets {}|1,176,429|96|
|Using '' + |1,152,153|96|
|Using date.toString()|1,269,852|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1160627.671972728,"samples":4},{"name":"Using brackets {}","opsSec":1176428.6566399317,"samples":6},{"name":"Using '' + ","opsSec":1152152.7476630944,"samples":7},{"name":"Using date.toString()","opsSec":1269851.9360676233,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,772,673|96|
|Using delete property (proto: null)|24,059,273|98|
|Using delete property (cached proto: null)|3,789,264|93|
|Using undefined assignment|909,596,659|96|
|Using undefined assignment (proto: null)|27,099,678|99|
|Using undefined property (cached proto: null)|905,759,626|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:47:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3772673.1698026815,"samples":4},{"name":"Using delete property (proto: null)","opsSec":24059273.295125972,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3789264.2034086096,"samples":6},{"name":"Using undefined assignment","opsSec":909596658.7111686,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":27099677.550169047,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":905759626.2608111,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|285,846|56|
|NodeError|226,202|93|
|NodeError Range|229,304|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:58:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":285846.1031805708,"samples":3},{"name":"NodeError","opsSec":226201.71816837558,"samples":3},{"name":"NodeError Range","opsSec":229303.7385900014,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,836,597|95|
|Function returning explicitly undefined|1,847,448|95|
|Function returning implicitly undefined|1,868,648|95|
|Function returning string|1,857,911|98|
|Function returning integer|1,912,268|99|
|Function returning float|1,868,708|95|
|Function returning functions|1,816,450|94|
|Function returning arrow functions|1,852,249|96|
|Function returning empty object|1,856,495|99|
|Function returning empty array|1,854,095|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:08:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1836597.099405213,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1847448.0062377423,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1868648.0414301606,"samples":5},{"name":"Function returning string","opsSec":1857910.8857439812,"samples":7},{"name":"Function returning integer","opsSec":1912268.121487502,"samples":5},{"name":"Function returning float","opsSec":1868707.827950955,"samples":5},{"name":"Function returning functions","opsSec":1816450.1396833758,"samples":6},{"name":"Function returning arrow functions","opsSec":1852248.9739298292,"samples":8},{"name":"Function returning empty object","opsSec":1856494.971012339,"samples":6},{"name":"Function returning empty array","opsSec":1854095.1672356017,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|908,375,301|97|
|using Array.includes (first item)|908,884,393|100|
|Using raw comparison|910,587,233|95|
|Using raw comparison (first item)|909,549,224|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:20:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":908375301.3370847,"samples":8},{"name":"using Array.includes (first item)","opsSec":908884393.0991156,"samples":9},{"name":"Using raw comparison","opsSec":910587232.9704052,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909549223.680567,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|102,730,246|91|
|Using Object.getOwnPropertyNames()|103,426,788|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:28:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":102730245.93793716,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":103426788.3740777,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,369,150|97|
|Length = 10_000 - Array.at|26,347,917|96|
|Length = 1_000_000 - Array.at|26,347,389|95|
|Length = 100 - Array[length - 1]|908,034,845|97|
|Length = 10_000 - Array[length - 1]|907,704,148|99|
|Length = 1_000_000 - Array[length - 1]|906,910,040|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:36:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26369149.74264011,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26347917.454478644,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26347388.6337016,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":908034845.351528,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":907704147.880939,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":906910040.4311123,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|85,987,974|91|
|Object.create({})|1,742,524|86|
|Cached Empty.prototype|909,254,872|97|
|Empty.prototype|1,837,632|87|
|Empty class|1,183,291|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:45:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":85987973.66602042,"samples":5},{"name":"Object.create({})","opsSec":1742523.9726024591,"samples":4},{"name":"Cached Empty.prototype","opsSec":909254872.1831908,"samples":7},{"name":"Empty.prototype","opsSec":1837632.2003843712,"samples":3},{"name":"Empty class","opsSec":1183290.9023844937,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|909,095,908|97|
|Using optional chain (obj.field?.field2) (undefined)|909,673,892|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|910,346,989|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|908,470,337|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":909095907.986825,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":909673892.1913859,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":910346989.3285009,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":908470336.7272731,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|266,348,605|98|
|Using parseInt(x, 10) - big number (10 len)|20,651,422|96|
|Using + - small number (2 len)|910,504,203|94|
|Using + - big number (10 len)|909,025,005|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:04:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":266348604.56327185,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20651422.305236213,"samples":6},{"name":"Using + - small number (2 len)","opsSec":910504202.8332527,"samples":6},{"name":"Using + - big number (10 len)","opsSec":909025005.0117035,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|883,756|81|
|Using ? operator to avoid rejection|957,308|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:11:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":883755.6787028591,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":957307.9834961221,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|499,824,350|89|
|Raw usage underscore usage|519,824,247|97|
|Manipulating private properties using #|395,923,602|86|
|Manipulating private properties using underscore(_)|346,999,075|92|
|Manipulating private properties using Symbol|346,504,171|95|
|Manipulating private properties using PrivateSymbol|52,339,170|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:19:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":499824350.16334635,"samples":5},{"name":"Raw usage underscore usage","opsSec":519824246.8720798,"samples":10},{"name":"Manipulating private properties using #","opsSec":395923602.4908304,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":346999074.80368406,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":346504170.68175817,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":52339170.386672676,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,890,110|97|
|Adding property in the object creation - small object|3,909,711|97|
|Adding property after the function creation - small class|217,050|88|
|Adding property in the function creation - small class|217,608|90|
|Adding property after the class creation - small class|184,051|84|
|Adding property in the class creation - small class|183,977|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:29:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3890110.3814761955,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":3909711.4533382277,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":217050.4959187755,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":217607.72539266423,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":184050.89370818017,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":183976.76580390352,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,697,708|97|
|Getter|101,992,243|99|
|Method|911,971,279|92|
|DefineProperty (getter)|910,509,360|97|
|DefineProperty (getter & enumerable=false)|102,218,998|92|
|DefineProperty (getter & configurable=false)|913,181,441|96|
|DefineProperty (getter & enumerable=false & configurable=false)|102,044,415|100|
|DefineProperty (writable)|911,158,509|100|
|DefineProperty (writable & enumerable=false)|910,915,038|100|
|DefineProperty (writable & enumerable=false & configurable=false)|911,486,172|94|
|DefineProperties (getter)|92,184,184|91|
|DefineProperties (getter & enumerable=false)|64,804,711|93|
|DefineProperties (getter & enumerable=false & configurable=false)|64,294,318|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:39:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910697708.0506945,"samples":6},{"name":"Getter","opsSec":101992243.4612984,"samples":6},{"name":"Method","opsSec":911971279.4630839,"samples":6},{"name":"DefineProperty (getter)","opsSec":910509360.1468964,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102218998.18375078,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":913181441.3172257,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102044415.30891196,"samples":8},{"name":"DefineProperty (writable)","opsSec":911158509.3647696,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":910915038.190583,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":911486172.4397739,"samples":7},{"name":"DefineProperties (getter)","opsSec":92184183.65802032,"samples":8},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64804710.60995935,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64294317.54205714,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|866,154,682|97|
|Setter|11,390,856|95|
|Method|866,162,005|92|
|DefineProperty (setter)|864,183,063|96|
|DefineProperty (setter & enumerable=false)|11,473,389|96|
|DefineProperty (setter & configurable=false)|11,394,209|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,326,220|93|
|DefineProperty (writable)|907,081,806|99|
|DefineProperty (writable & enumerable=false)|334,826,674|39|
|DefineProperty (writable & enumerable=false & configurable=false)|159,470,805|82|
|DefineProperties (setter)|123,142,237|86|
|DefineProperties (setter & enumerable=false)|11,240,847|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,621,246|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:59:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":866154681.5936053,"samples":7},{"name":"Setter","opsSec":11390856.436175533,"samples":6},{"name":"Method","opsSec":866162004.9584477,"samples":7},{"name":"DefineProperty (setter)","opsSec":864183063.2422944,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11473388.796402594,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11394208.550268656,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11326219.93033601,"samples":5},{"name":"DefineProperty (writable)","opsSec":907081806.0183959,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":334826673.68198127,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":159470804.84775928,"samples":4},{"name":"DefineProperties (setter)","opsSec":123142236.67757297,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11240846.595085971,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11621245.810807385,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,614,885|95|
|Using replaceAll()|3,104,970|97|
|Using replaceAll(//g)|3,299,969|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:14:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3614884.7318083006,"samples":6},{"name":"Using replaceAll()","opsSec":3104970.3142782873,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3299969.2539847353,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|28,019,199|95|
|{ ...object, __proto__: null }|28,520,684|98|
|{ ...object, newProp: true }|758,567|88|
|structuredClone|283,211|97|
|JSON.parse + JSON.stringify|190,112|97|
|loop + object.keys starting with {}|1,271,234|96|
|loop + object.keys starting with { __proto__: null }|776,157|98|
|loop + object.keys starting with { randomProp: true }|571,259|93|
|object.keys + reduce(FN, {})|1,293,639|95|
|object.keys + reduce(FN, { __proto__: null })|788,918|96|
|object.keys + reduce(FN, { newProp: true })|575,859|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":28019199.480665065,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":28520683.849321757,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":758567.4401669378,"samples":3},{"name":"structuredClone","opsSec":283210.8263735827,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":190111.57408971403,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1271233.8938344442,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":776157.2553437745,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":571259.1853106224,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1293639.001804399,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":788917.9373211683,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":575858.6805038109,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|283,097|96|
|Sort using first char|1,351,727|98|
|Sort using localeCompare|1,234,002|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:37:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":283097.14339236467,"samples":4},{"name":"Sort using first char","opsSec":1351727.246859427,"samples":5},{"name":"Sort using localeCompare","opsSec":1234002.171579095,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,070|91|
|{...smallObject} - Total keys: 2|115,849,131|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,383|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,126|94|
|{ ...bigObject, ...anotherBigObject }|1,265|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,889,124|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,012,487|94|
|{ ...smallObject, ...anotherSmallObject }|25,267,583|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:45:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2069.7149065126896,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":115849130.73862375,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2383.104852268098,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6125.993746527885,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.0016251307616,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14889124.208295088,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37012486.699428454,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25267582.711554714,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,621|87|
|streams.web.Readable reading 1e3 * "some data"|759|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:56:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2621.031917432516,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":759.2390313583768,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,469|91|
|streams.web.WritableStream writing 1e3 * "some data"|938|47|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:03:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5468.954648716477,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":938.4438698967951,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|909,368,333|98|
|Using backtick (`)|910,124,734|97|
|Using array.join|12,709,508|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:13:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":909368333.2138094,"samples":8},{"name":"Using backtick (`)","opsSec":910124733.5655651,"samples":7},{"name":"Using array.join","opsSec":12709507.721795863,"samples":7}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,902,323|97|
|(short string) (true) String#slice and strict comparison|907,760,053|100|
|(long string) (true) String#endsWith|84,561,703|98|
|(long string) (true) String#slice and strict comparison|903,767,701|95|
|(short string) (false) String#endsWith|108,154,576|99|
|(short string) (false) String#slice and strict comparison|906,857,674|99|
|(long string) (false) String#endsWith|98,784,522|98|
|(long string) (false) String#slice and strict comparison|905,373,776|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":90902323.27760893,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907760053.027737,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":84561703.49514078,"samples":9},{"name":"(long string) (true) String#slice and strict comparison","opsSec":903767701.4178658,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":108154575.81161542,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906857674.249534,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":98784521.82054663,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905373775.9333725,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|909,372,642|98|
|Using indexof|909,056,745|97|
|Using RegExp.test|17,905,974|96|
|Using RegExp.text with cached regex pattern|18,768,098|99|
|Using new RegExp.test|3,890,292|99|
|Using new RegExp.test with cached regex pattern|4,217,987|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:33:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":909372642.313933,"samples":6},{"name":"Using indexof","opsSec":909056745.1523153,"samples":8},{"name":"Using RegExp.test","opsSec":17905974.36193884,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":18768097.865337446,"samples":5},{"name":"Using new RegExp.test","opsSec":3890291.7528793807,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4217986.729733349,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|241,817,202|99|
|(short string) (true) String#slice and strict comparison|907,157,588|96|
|(long string) (true) String#startsWith|148,746,338|96|
|(long string) (true) String#slice and strict comparison|904,148,457|99|
|(short string) (false) String#startsWith|485,509,270|95|
|(short string) (false) String#slice and strict comparison|906,785,181|100|
|(long string) (false) String#startsWith|363,965,874|95|
|(long string) (false) String#slice and strict comparison|905,654,791|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:46:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":241817201.94231617,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907157588.459929,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":148746337.50918955,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904148456.7473325,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":485509270.36906284,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906785181.3451872,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":363965874.1781214,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905654791.3415436,"samples":7}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|176,202,172|95|
|Using this|182,091,953|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:56:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":176202172.14171046,"samples":7},{"name":"Using this","opsSec":182091953.2044802,"samples":6}]}-->
