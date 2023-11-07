## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,488,884|100|
|Using dot notation|849,250,724|99|
|Using define property (writable)|4,651,409|99|
|Using define property initialized (writable)|5,910,203|97|
|Using define property (getter)|2,275,163|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849488884.0613136,"samples":9},{"name":"Using dot notation","opsSec":849250723.5433387,"samples":8},{"name":"Using define property (writable)","opsSec":4651409.185765958,"samples":8},{"name":"Using define property initialized (writable)","opsSec":5910203.424849568,"samples":7},{"name":"Using define property (getter)","opsSec":2275162.70850562,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.008ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.28ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|25.11ms
new Array(length)|1,000,000|14.556ms
array.push|100,000,000|1,801.31ms
new Array(length)|100,000,000|3,912.72ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.048ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.404ms
new Array(length)|10,000|3.213ms
array.push|1,000,000|251.772ms
new Array(length)|1,000,000|4.486ms
array.push|100,000,000|2,178.473ms
new Array(length)|100,000,000|4,157.928ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|305|86|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":305.4261269141226,"samples":3},{"name":"Array.from","opsSec":21.87378495567684,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,865,397|98|
|[async] async function|16,824,626|90|
|[async] function|337,111|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849865397.2090824,"samples":6},{"name":"[async] async function","opsSec":16824626.258270986,"samples":6},{"name":"[async] function","opsSec":337111.3723401466,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,535|84|
|new Blob (1024)|570|75|
|text (128)|43,063|84|
|text (1024)|26,628|77|
|arrayBuffer (128)|50,512|88|
|arrayBuffer (1024)|31,619|75|
|slice (0, 64)|93,278|80|
|slice (0, 512)|46,250|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:23:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4534.679272429428,"samples":4},{"name":"new Blob (1024)","opsSec":570.4805302408276,"samples":2},{"name":"text (128)","opsSec":43062.915729379354,"samples":4},{"name":"text (1024)","opsSec":26628.414028354673,"samples":5},{"name":"arrayBuffer (128)","opsSec":50512.35427616338,"samples":3},{"name":"arrayBuffer (1024)","opsSec":31619.42567457766,"samples":4},{"name":"slice (0, 64)","opsSec":93278.46746516282,"samples":3},{"name":"slice (0, 512)","opsSec":46250.499639536334,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,276|53|
|[True conditional] Using constructor name|188,282|98|
|[True conditional] Check if property is valid then instanceof |189,656|95|
|[False conditional] Using instanceof only|850,301,980|99|
|[False conditional] Using constructor name|849,596,078|97|
|[False conditional] Check if property is valid then instanceof |850,536,199|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:35:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":242275.95134254024,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":188281.58653305165,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":189656.43845615492,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850301980.2601866,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":849596077.686597,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":850536199.2631985,"samples":6}]}-->

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
|Using if to check function existence|655,287|73|
|Using ? operator to avoid rejection|694,725|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":655286.5215775007,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":694725.0112168932,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,618,685|91|
|Raw usage underscore usage|6,713,033|91|
|Manipulating private properties using #|2,508,788|91|
|Manipulating private properties using underscore(_)|698,266,060|97|
|Manipulating private properties using Symbol|695,430,515|95|
|Manipulating private properties using PrivateSymbol|24,117,773|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":8618684.725002848,"samples":6},{"name":"Raw usage underscore usage","opsSec":6713032.898269313,"samples":6},{"name":"Manipulating private properties using #","opsSec":2508788.132737166,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":698266059.9262207,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":695430515.131134,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":24117773.22856836,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,129,743|86|
|Adding property in the object creation - small object|2,168,522|84|
|Adding property after the function creation - small class|150,579|79|
|Adding property in the function creation - small class|152,674|76|
|Adding property after the class creation - small class|124,901|75|
|Adding property in the class creation - small class|124,506|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2129742.959351642,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2168521.993939475,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":150578.7502576894,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":152674.1033036861,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":124900.57921797886,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":124506.0925723913,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|755,100,523|82|
|Getter|49,756,877|85|
|Method|756,635,645|83|
|DefineProperty (getter)|819,253,309|85|
|DefineProperty (getter & enumerable=false)|59,891,814|87|
|DefineProperty (getter & configurable=false)|823,201,481|86|
|DefineProperty (getter & enumerable=false & configurable=false)|57,291,857|85|
|DefineProperty (writable)|816,383,918|86|
|DefineProperty (writable & enumerable=false)|833,045,918|88|
|DefineProperty (writable & enumerable=false & configurable=false)|96,447,019|14|
|DefineProperties (getter)|37,344,020|85|
|DefineProperties (getter & enumerable=false)|36,472,401|84|
|DefineProperties (getter & enumerable=false & configurable=false)|37,567,734|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":755100523.3390785,"samples":10},{"name":"Getter","opsSec":49756876.79240223,"samples":6},{"name":"Method","opsSec":756635645.1575266,"samples":6},{"name":"DefineProperty (getter)","opsSec":819253308.5695103,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59891814.24437717,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":823201480.8354009,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57291856.5318115,"samples":5},{"name":"DefineProperty (writable)","opsSec":816383917.848456,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":833045917.9677566,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96447018.8624729,"samples":6},{"name":"DefineProperties (getter)","opsSec":37344019.69065468,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":36472400.94953971,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37567734.02337541,"samples":8}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|555,390,546|87|
|Setter|5,780,797|82|
|Method|620,319,141|87|
|DefineProperty (setter)|594,053,858|88|
|DefineProperty (setter & enumerable=false)|5,509,065|86|
|DefineProperty (setter & configurable=false)|5,401,772|86|
|DefineProperty (setter & enumerable=false & configurable=false)|5,410,975|85|
|DefineProperty (writable)|703,634,840|88|
|DefineProperty (writable & enumerable=false)|544,997,972|73|
|DefineProperty (writable & enumerable=false & configurable=false)|68,186,270|78|
|DefineProperties (setter)|54,687,385|81|
|DefineProperties (setter & enumerable=false)|4,770,851|85|
|DefineProperties (setter & enumerable=false & configurable=false)|5,301,620|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":555390545.8856165,"samples":6},{"name":"Setter","opsSec":5780797.203422049,"samples":4},{"name":"Method","opsSec":620319140.987456,"samples":11},{"name":"DefineProperty (setter)","opsSec":594053857.969352,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5509064.936135608,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5401771.889312664,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5410974.8242252795,"samples":5},{"name":"DefineProperty (writable)","opsSec":703634839.8856195,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":544997972.251475,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68186270.01476835,"samples":5},{"name":"DefineProperties (setter)","opsSec":54687384.94880025,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":4770851.274096002,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5301620.311648539,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,030,559|89|
|Using replaceAll()|1,897,827|97|
|Using replaceAll(//g)|1,813,136|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2030558.6863702452,"samples":10},{"name":"Using replaceAll()","opsSec":1897826.6590786756,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1813135.862616253,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,495,881|94|
|{ ...object, __proto__: null }|13,649,786|95|
|{ ...object, newProp: true }|494,381|83|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|140,523|98|
|loop + object.keys starting with {}|325,603|95|
|loop + object.keys starting with { __proto__: null }|425,244|97|
|loop + object.keys starting with { randomProp: true }|339,413|94|
|object.keys + reduce(FN, {})|324,400|94|
|object.keys + reduce(FN, { __proto__: null })|421,950|93|
|object.keys + reduce(FN, { newProp: true })|333,460|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":13495880.840898832,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":13649786.270443007,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":494381.29113380634,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":140522.95271483995,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":325602.8067654857,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":425243.63053388614,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":339412.65653669153,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":324399.688014092,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":421949.7567947134,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":333460.2314349798,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,076|99|
|Sort using first char|869,755|96|
|Sort using localeCompare|444,059|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":182076.0808802993,"samples":9},{"name":"Sort using first char","opsSec":869754.9456163922,"samples":6},{"name":"Sort using localeCompare","opsSec":444058.9621225586,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,101|87|
|{...smallObject} - Total keys: 2|52,668,413|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,132|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,070|91|
|{ ...bigObject, ...anotherBigObject }|677|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,843,823|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,163,412|93|
|{ ...smallObject, ...anotherSmallObject }|12,984,396|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1101.302936625214,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":52668413.14012615,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1132.093778099815,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3070.1157457377376,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":676.5739778399635,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7843823.352217378,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19163411.982986547,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12984395.660989638,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,098|78|
|streams.web.Readable reading 1e3 * "some data"|307|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1097.895499356717,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":306.5915236134783,"samples":2}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,750|93|
|streams.web.WritableStream writing 1e3 * "some data"|902|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2750.428573261878,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":902.3770664082438,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|590,374,479|97|
|Using backtick (`)|592,183,121|95|
|Using array.join|5,296,499|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":590374478.902779,"samples":6},{"name":"Using backtick (`)","opsSec":592183120.6508073,"samples":7},{"name":"Using array.join","opsSec":5296498.790773696,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,794,983|93|
|Using indexof|584,493,564|92|
|Using RegExp.test|9,916,209|90|
|Using RegExp.text with cached regex pattern|9,682,478|88|
|Using new RegExp.test|2,668,620|93|
|Using new RegExp.test with cached regex pattern|3,271,948|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10794983.317444354,"samples":4},{"name":"Using indexof","opsSec":584493564.4688821,"samples":7},{"name":"Using RegExp.test","opsSec":9916209.058142655,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":9682478.120173505,"samples":6},{"name":"Using new RegExp.test","opsSec":2668620.0150880856,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3271948.2336071804,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,230,074|89|
|Using this|131,638,749|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":130230074.2354525,"samples":5},{"name":"Using this","opsSec":131638749.47581846,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,487,548|87|
|Date.now()|13,481,596|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6487548.371883318,"samples":5},{"name":"Date.now()","opsSec":13481596.06945632,"samples":4}]}-->
