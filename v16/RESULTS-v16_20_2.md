## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,789,382|92|
|Using dot notation|817,784,209|99|
|Using define property (writable)|4,326,163|95|
|Using define property initialized (writable)|5,243,276|91|
|Using define property (getter)|2,345,056|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":820789382.4752284,"samples":6},{"name":"Using dot notation","opsSec":817784209.141806,"samples":7},{"name":"Using define property (writable)","opsSec":4326162.786449416,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5243276.437215611,"samples":4},{"name":"Using define property (getter)","opsSec":2345056.0017947108,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.002ms
array.push|100|0.035ms
new Array(length)|100|0.015ms
array.push|1,000|0.113ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.426ms
new Array(length)|10,000|0.224ms
array.push|1,000,000|24.495ms
new Array(length)|1,000,000|15.968ms
array.push|100,000,000|1,008.45ms
new Array(length)|100,000,000|3,865.372ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.055ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.298ms
new Array(length)|10,000|3.959ms
array.push|1,000,000|76.808ms
new Array(length)|1,000,000|2.934ms
array.push|100,000,000|1,368.983ms
new Array(length)|100,000,000|4,125.514ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|548|89|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":547.7822109162781,"samples":5},{"name":"Array.from","opsSec":21.748944569188946,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|823,656,823|99|
|[async] async function|14,974,816|85|
|[async] function|370,031|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":823656823.3260716,"samples":6},{"name":"[async] async function","opsSec":14974815.916439293,"samples":7},{"name":"[async] function","opsSec":370030.66259205143,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,925|86|
|new Blob (1024)|661|75|
|text (128)|30,761|75|
|text (1024)|20,291|77|
|arrayBuffer (128)|34,994|75|
|arrayBuffer (1024)|24,640|83|
|slice (0, 64)|98,835|80|
|slice (0, 512)|52,635|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":4924.629202522782,"samples":3},{"name":"new Blob (1024)","opsSec":661.3534200930154,"samples":2},{"name":"text (128)","opsSec":30761.06299744654,"samples":4},{"name":"text (1024)","opsSec":20290.97399701821,"samples":3},{"name":"arrayBuffer (128)","opsSec":34993.7388192622,"samples":4},{"name":"arrayBuffer (1024)","opsSec":24639.69486249343,"samples":5},{"name":"slice (0, 64)","opsSec":98835.48693710638,"samples":3},{"name":"slice (0, 512)","opsSec":52634.64834578858,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,996|55|
|[True conditional] Using constructor name|206,651|98|
|[True conditional] Check if property is valid then instanceof |206,970|98|
|[False conditional] Using instanceof only|824,148,309|95|
|[False conditional] Using constructor name|824,141,905|100|
|[False conditional] Check if property is valid then instanceof |825,144,967|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254996.40490013588,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206650.95018180675,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":206970.13723244166,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824148309.397934,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":824141904.8600157,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":825144967.3854347,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|30,337|98|
|crypto.verify('RSA-SHA256')|29,001|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:49:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":30337.146669924947,"samples":11},{"name":"crypto.verify('RSA-SHA256')","opsSec":29001.421414775392,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,615,966|99|
|fromUnixToISOString(new Date())|2,050,857|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:59:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2615965.683398453,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":2050857.4627796449,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,361|79|
|Intl.DateTimeFormat().format(new Date())|11,636|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,105|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,992|83|
|Reusing Intl.DateTimeFormat()|599,252|98|
|Date.toLocaleDateString()|601,013|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,546|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:07:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12361.40169490671,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11636.359602406043,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13104.911237108015,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11991.868727164912,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":599251.7616022712,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":601012.5651468339,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13546.369502652256,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|998,720|96|
|Using brackets {}|1,014,273|97|
|Using '' + |1,045,013|97|
|Using date.toString()|1,134,913|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":998719.9993017426,"samples":6},{"name":"Using brackets {}","opsSec":1014272.9504649825,"samples":7},{"name":"Using '' + ","opsSec":1045012.9521203238,"samples":6},{"name":"Using date.toString()","opsSec":1134912.55583046,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,361,756|94|
|Using delete property (proto: null)|21,296,636|94|
|Using delete property (cached proto: null)|3,371,760|95|
|Using undefined assignment|846,397,002|100|
|Using undefined assignment (proto: null)|23,182,153|95|
|Using undefined property (cached proto: null)|844,707,588|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3361755.7968024868,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21296636.250180107,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3371759.637190949,"samples":5},{"name":"Using undefined assignment","opsSec":846397002.294037,"samples":10},{"name":"Using undefined assignment (proto: null)","opsSec":23182153.057241373,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":844707587.6997187,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,878|52|
|NodeError|187,170|92|
|NodeError Range|187,285|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:43:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":236877.95103868045,"samples":3},{"name":"NodeError","opsSec":187169.52350310798,"samples":3},{"name":"NodeError Range","opsSec":187284.62798631392,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,676,001|96|
|Function returning explicitly undefined|1,722,205|97|
|Function returning implicitly undefined|1,739,007|97|
|Function returning string|1,737,901|95|
|Function returning integer|1,760,844|95|
|Function returning float|1,683,783|96|
|Function returning functions|1,691,274|97|
|Function returning arrow functions|1,731,315|98|
|Function returning empty object|1,760,455|94|
|Function returning empty array|1,753,844|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1676000.9055937154,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1722205.1437102216,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1739007.121220127,"samples":5},{"name":"Function returning string","opsSec":1737901.4278521151,"samples":6},{"name":"Function returning integer","opsSec":1760844.2040569524,"samples":9},{"name":"Function returning float","opsSec":1683782.7093010256,"samples":7},{"name":"Function returning functions","opsSec":1691274.1662719145,"samples":7},{"name":"Function returning arrow functions","opsSec":1731315.4739865796,"samples":7},{"name":"Function returning empty object","opsSec":1760455.0759310338,"samples":9},{"name":"Function returning empty array","opsSec":1753843.9362748198,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,791,446|100|
|using Array.includes (first item)|848,805,588|100|
|Using raw comparison|850,117,820|92|
|Using raw comparison (first item)|849,573,467|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:12:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848791446.454233,"samples":6},{"name":"using Array.includes (first item)","opsSec":848805587.5451869,"samples":7},{"name":"Using raw comparison","opsSec":850117820.0981616,"samples":7},{"name":"Using raw comparison (first item)","opsSec":849573466.674274,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,396,567|94|
|Using Object.getOwnPropertyNames()|91,465,322|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":89396567.45244552,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":91465322.4085564,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,434,886|98|
|Length = 10_000 - Array.at|26,104,977|99|
|Length = 1_000_000 - Array.at|26,731,142|99|
|Length = 100 - Array[length - 1]|846,494,735|92|
|Length = 10_000 - Array[length - 1]|845,402,075|88|
|Length = 1_000_000 - Array[length - 1]|847,545,252|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:34:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26434885.532525904,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":26104976.614542816,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":26731142.283102203,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":846494735.2293371,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845402075.3443291,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":847545251.7191346,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,163,772|94|
|Object.create({})|2,063,168|91|
|Cached Empty.prototype|849,255,661|101|
|Empty.prototype|2,114,444|86|
|Empty class|1,341,769|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:46:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":68163771.90852368,"samples":6},{"name":"Object.create({})","opsSec":2063168.22896695,"samples":3},{"name":"Cached Empty.prototype","opsSec":849255660.5634505,"samples":7},{"name":"Empty.prototype","opsSec":2114444.313945456,"samples":3},{"name":"Empty class","opsSec":1341769.313719762,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,497,678|97|
|Using optional chain (obj.field?.field2) (undefined)|848,272,085|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,622,312|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|846,639,391|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:56:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848497677.9276032,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848272084.8644434,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":849622312.1515096,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":846639390.611505,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|295,201,744|92|
|Using parseInt(x, 10) - big number (10 len)|21,681,932|96|
|Using + - small number (2 len)|850,069,781|91|
|Using + - big number (10 len)|849,397,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":295201743.9700857,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21681932.347579516,"samples":7},{"name":"Using + - small number (2 len)","opsSec":850069780.8771013,"samples":7},{"name":"Using + - big number (10 len)","opsSec":849397109.9664569,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,069,189|82|
|Using ? operator to avoid rejection|1,122,781|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:16:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1069189.0255853368,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1122781.2044182501,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,232,815|90|
|Raw usage underscore usage|10,720,391|100|
|Manipulating private properties using #|3,940,415|93|
|Manipulating private properties using underscore(_)|839,568,393|96|
|Manipulating private properties using Symbol|836,968,527|93|
|Manipulating private properties using PrivateSymbol|47,978,656|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:23:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":13232815.08948039,"samples":7},{"name":"Raw usage underscore usage","opsSec":10720390.508033333,"samples":5},{"name":"Manipulating private properties using #","opsSec":3940415.018164132,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":839568393.355536,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":836968526.6078831,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":47978656.22308202,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,713,089|97|
|Adding property in the object creation - small object|3,717,585|97|
|Adding property after the function creation - small class|232,414|91|
|Adding property in the function creation - small class|232,291|91|
|Adding property after the class creation - small class|195,516|89|
|Adding property in the class creation - small class|195,019|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:37:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3713088.918297227,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3717584.5673434203,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":232414.21713676135,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":232291.2551283422,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":195516.11338704758,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":195019.00635187747,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,029,434|100|
|Getter|92,344,900|97|
|Method|850,428,726|97|
|DefineProperty (getter)|849,866,240|99|
|DefineProperty (getter & enumerable=false)|93,684,577|96|
|DefineProperty (getter & configurable=false)|848,791,193|100|
|DefineProperty (getter & enumerable=false & configurable=false)|93,702,349|97|
|DefineProperty (writable)|848,446,985|97|
|DefineProperty (writable & enumerable=false)|849,548,973|98|
|DefineProperty (writable & enumerable=false & configurable=false)|164,337,971|23|
|DefineProperties (getter)|58,854,739|93|
|DefineProperties (getter & enumerable=false)|93,302,758|97|
|DefineProperties (getter & enumerable=false & configurable=false)|93,742,216|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:53:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":850029434.3282126,"samples":6},{"name":"Getter","opsSec":92344899.56958947,"samples":5},{"name":"Method","opsSec":850428726.2542101,"samples":7},{"name":"DefineProperty (getter)","opsSec":849866240.3648822,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93684577.25135566,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848791193.3648393,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":93702349.47712547,"samples":5},{"name":"DefineProperty (writable)","opsSec":848446985.1862284,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849548973.1576467,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":164337970.95195612,"samples":7},{"name":"DefineProperties (getter)","opsSec":58854739.373962924,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93302757.8796666,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93742215.52711877,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,367,151|98|
|Setter|11,535,570|99|
|Method|843,479,844|98|
|DefineProperty (setter)|845,502,286|94|
|DefineProperty (setter & enumerable=false)|11,472,355|98|
|DefineProperty (setter & configurable=false)|11,703,951|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,682,589|96|
|DefineProperty (writable)|848,389,820|98|
|DefineProperty (writable & enumerable=false)|694,651,317|85|
|DefineProperty (writable & enumerable=false & configurable=false)|140,619,079|82|
|DefineProperties (setter)|114,962,745|88|
|DefineProperties (setter & enumerable=false)|11,656,864|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,460,999|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:11:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":837367150.7368085,"samples":6},{"name":"Setter","opsSec":11535570.065001272,"samples":5},{"name":"Method","opsSec":843479843.6631336,"samples":6},{"name":"DefineProperty (setter)","opsSec":845502285.9177407,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11472355.190668756,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11703951.395803507,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11682588.925213298,"samples":5},{"name":"DefineProperty (writable)","opsSec":848389819.5999658,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":694651317.0855881,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":140619078.90489835,"samples":5},{"name":"DefineProperties (setter)","opsSec":114962745.0315896,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11656864.289178126,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11460999.204503264,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,425,403|91|
|Using replaceAll()|3,207,289|100|
|Using replaceAll(//g)|3,113,274|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3425403.189450646,"samples":5},{"name":"Using replaceAll()","opsSec":3207288.8150915634,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3113273.644084804,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,046,274|95|
|{ ...object, __proto__: null }|20,416,910|98|
|{ ...object, newProp: true }|768,854|92|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|207,772|98|
|loop + object.keys starting with {}|542,235|100|
|loop + object.keys starting with { __proto__: null }|839,828|98|
|loop + object.keys starting with { randomProp: true }|574,213|98|
|object.keys + reduce(FN, {})|546,640|100|
|object.keys + reduce(FN, { __proto__: null })|855,539|97|
|object.keys + reduce(FN, { newProp: true })|574,743|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":20046274.043922573,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20416910.36195846,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":768854.0645908923,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":207772.3805998663,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":542235.4315519489,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":839827.7945724071,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":574213.4249297562,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":546640.3214867279,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":855539.1492102519,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":574743.0817612516,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|255,602|97|
|Sort using first char|1,273,599|99|
|Sort using localeCompare|641,879|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:00:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":255602.11846997947,"samples":5},{"name":"Sort using first char","opsSec":1273598.6045191232,"samples":6},{"name":"Sort using localeCompare","opsSec":641879.3223259945,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,965|94|
|{...smallObject} - Total keys: 2|97,018,298|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,191|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,454|98|
|{ ...bigObject, ...anotherBigObject }|1,175|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,967,766|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,638,059|97|
|{ ...smallObject, ...anotherSmallObject }|22,805,310|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1964.5073934953673,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":97018298.35663606,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2191.085003700011,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6453.965601575068,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1174.9624161587499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13967766.11101359,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":34638058.834673665,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22805309.888568927,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,624|85|
|streams.web.Readable reading 1e3 * "some data"|508|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:23:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2623.7749371913196,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":508.3306882286468,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,027|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,063|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:33:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4027.0808007355645,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1062.5939286303421,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,659,979|98|
|Using backtick (`)|848,801,970|95|
|Using array.join|12,497,136|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":849659979.1084698,"samples":7},{"name":"Using backtick (`)","opsSec":848801970.1165224,"samples":8},{"name":"Using array.join","opsSec":12497135.613016132,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,089,450|100|
|Using indexof|847,309,940|98|
|Using RegExp.test|16,400,355|97|
|Using RegExp.text with cached regex pattern|16,682,721|99|
|Using new RegExp.test|5,350,419|98|
|Using new RegExp.test with cached regex pattern|6,335,787|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:51:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17089450.28032001,"samples":4},{"name":"Using indexof","opsSec":847309939.5406765,"samples":10},{"name":"Using RegExp.test","opsSec":16400354.74661546,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16682721.376659514,"samples":8},{"name":"Using new RegExp.test","opsSec":5350418.555059917,"samples":9},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6335786.836938719,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|155,702,089|94|
|Using this|160,708,221|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:06:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":155702088.7448,"samples":8},{"name":"Using this","opsSec":160708220.98082653,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,340,206|92|
|Date.now()|20,801,498|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:13:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11340206.428659873,"samples":6},{"name":"Date.now()","opsSec":20801497.69242483,"samples":7}]}-->
