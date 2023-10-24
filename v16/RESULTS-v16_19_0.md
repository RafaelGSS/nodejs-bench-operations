## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|567,105,477|90|
|Using dot notation|574,794,284|88|
|Using define property (writable)|2,521,946|92|
|Using define property initialized (writable)|3,030,879|94|
|Using define property (getter)|1,270,073|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":567105477.2527639,"samples":6},{"name":"Using dot notation","opsSec":574794284.3752561,"samples":6},{"name":"Using define property (writable)","opsSec":2521945.825354883,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3030879.4508539056,"samples":5},{"name":"Using define property (getter)","opsSec":1270072.5123123126,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.099ms
new Array(length)|100|0.009ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.5ms
new Array(length)|10,000|0.256ms
array.push|1,000,000|31.564ms
new Array(length)|1,000,000|19.109ms
array.push|100,000,000|1,980.349ms
new Array(length)|100,000,000|5,002.353ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.075ms
new Array(length)|100|0.011ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.673ms
new Array(length)|10,000|4.4ms
array.push|1,000,000|369.64ms
new Array(length)|1,000,000|4.974ms
array.push|100,000,000|2,747.415ms
new Array(length)|100,000,000|5,543.277ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|385|85|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":385.1057729052451,"samples":4},{"name":"Array.from","opsSec":15.357248245083639,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,529|79|
|new Blob (1024)|332|66|
|text (128)|16,275|63|
|text (1024)|8,345|66|
|arrayBuffer (128)|22,559|62|
|arrayBuffer (1024)|11,780|75|
|slice (0, 64)|42,000|73|
|slice (0, 512)|20,363|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2529.014475767379,"samples":3},{"name":"new Blob (1024)","opsSec":332.02296717311253,"samples":2},{"name":"text (128)","opsSec":16275.169614324152,"samples":3},{"name":"text (1024)","opsSec":8344.897662970317,"samples":3},{"name":"arrayBuffer (128)","opsSec":22559.332924575632,"samples":3},{"name":"arrayBuffer (1024)","opsSec":11780.314760022567,"samples":4},{"name":"slice (0, 64)","opsSec":42000.044137658886,"samples":3},{"name":"slice (0, 512)","opsSec":20362.691718742546,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,061|54|
|[True conditional] Using constructor name|141,774|85|
|[True conditional] Check if property is valid then instanceof |144,042|89|
|[False conditional] Using instanceof only|643,676,367|88|
|[False conditional] Using constructor name|679,651,554|88|
|[False conditional] Check if property is valid then instanceof |676,072,620|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":174060.85364306832,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":141773.7615161165,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144041.64029475953,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":643676366.8784913,"samples":11},{"name":"[False conditional] Using constructor name","opsSec":679651554.4556828,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":676072620.2858037,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|14,558|85|
|crypto.verify('RSA-SHA256')|14,342|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":14557.920113250204,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":14342.495240326665,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,613,545|84|
|fromUnixToISOString(new Date())|1,331,006|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1613545.2064158353,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1331006.2443556807,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,737|79|
|Intl.DateTimeFormat().format(new Date())|5,134|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,119|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,665|77|
|Reusing Intl.DateTimeFormat()|315,921|74|
|Date.toLocaleDateString()|385,148|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,583|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4736.715467575922,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5133.783959016318,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6118.589088995068,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5664.970828394802,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":315921.4290378312,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":385148.1832046572,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6582.733358050704,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|515,187|84|
|Using brackets {}|552,575|92|
|Using '' + |552,715|90|
|Using date.toString()|592,805|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":515186.80892372597,"samples":5},{"name":"Using brackets {}","opsSec":552574.6338865733,"samples":3},{"name":"Using '' + ","opsSec":552714.7728085635,"samples":3},{"name":"Using date.toString()","opsSec":592805.1932964197,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,378,195|93|
|Using delete property (proto: null)|12,017,497|96|
|Using delete property (cached proto: null)|2,391,501|95|
|Using undefined assignment|711,942,637|96|
|Using undefined assignment (proto: null)|14,656,443|95|
|Using undefined property (cached proto: null)|709,560,625|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2378194.6326632607,"samples":6},{"name":"Using delete property (proto: null)","opsSec":12017496.67640966,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2391501.434077773,"samples":6},{"name":"Using undefined assignment","opsSec":711942636.6587392,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14656442.653104883,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709560624.5850048,"samples":10}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|188,832|59|
|NodeError|151,840|94|
|NodeError Range|152,409|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":188832.16608023658,"samples":4},{"name":"NodeError","opsSec":151839.79024432664,"samples":3},{"name":"NodeError Range","opsSec":152409.0038827701,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,148,911|88|
|Function returning explicitly undefined|1,181,909|87|
|Function returning implicitly undefined|1,182,936|91|
|Function returning string|1,208,545|90|
|Function returning integer|1,212,801|92|
|Function returning float|1,200,552|90|
|Function returning functions|1,172,115|90|
|Function returning arrow functions|1,199,540|92|
|Function returning empty object|1,182,136|92|
|Function returning empty array|1,181,600|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1148911.0226582747,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1181909.0552102444,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1182936.4193758036,"samples":6},{"name":"Function returning string","opsSec":1208545.2504933502,"samples":5},{"name":"Function returning integer","opsSec":1212800.919304612,"samples":8},{"name":"Function returning float","opsSec":1200552.2400292968,"samples":9},{"name":"Function returning functions","opsSec":1172115.003845223,"samples":5},{"name":"Function returning arrow functions","opsSec":1199540.310200105,"samples":6},{"name":"Function returning empty object","opsSec":1182135.8962687105,"samples":6},{"name":"Function returning empty array","opsSec":1181599.61333502,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|635,284,986|85|
|using Array.includes (first item)|653,263,546|87|
|Using raw comparison|636,489,137|86|
|Using raw comparison (first item)|658,467,216|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":635284985.6521717,"samples":6},{"name":"using Array.includes (first item)","opsSec":653263545.6097763,"samples":6},{"name":"Using raw comparison","opsSec":636489137.272882,"samples":9},{"name":"Using raw comparison (first item)","opsSec":658467215.7906442,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,367,240|77|
|Using Object.getOwnPropertyNames()|40,079,201|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":39367239.950755656,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":40079201.12936224,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,986,828|94|
|Length = 10_000 - Array.at|18,547,190|95|
|Length = 1_000_000 - Array.at|18,981,762|97|
|Length = 100 - Array[length - 1]|593,572,977|97|
|Length = 10_000 - Array[length - 1]|593,374,815|96|
|Length = 1_000_000 - Array[length - 1]|592,917,898|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18986828.118198562,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":18547189.772391044,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18981761.880293515,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":593572976.9716222,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":593374815.4055427,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":592917897.5421089,"samples":9}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,245,744|93|
|Object.create({})|1,376,990|80|
|Cached Empty.prototype|591,936,465|90|
|Empty.prototype|1,491,007|76|
|Empty class|885,175|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":49245743.5281364,"samples":7},{"name":"Object.create({})","opsSec":1376990.4945258424,"samples":3},{"name":"Cached Empty.prototype","opsSec":591936464.6147636,"samples":10},{"name":"Empty.prototype","opsSec":1491006.5134454863,"samples":3},{"name":"Empty class","opsSec":885174.9322862757,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|763,905,121|85|
|Using optional chain (obj.field?.field2) (undefined)|769,239,586|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|763,551,551|82|
|Using and operator (obj.field && obj.field.field2) (undefined)|741,775,994|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":763905120.8344207,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":769239585.7551346,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":763551550.6497188,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":741775993.5544393,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|213,563,380|90|
|Using parseInt(x, 10) - big number (10 len)|14,778,241|94|
|Using + - small number (2 len)|594,468,719|95|
|Using + - big number (10 len)|594,033,916|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":213563379.89093274,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14778240.836249026,"samples":6},{"name":"Using + - small number (2 len)","opsSec":594468718.8108659,"samples":7},{"name":"Using + - big number (10 len)","opsSec":594033916.4666477,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|686,120|68|
|Using ? operator to avoid rejection|784,400|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":686119.7104527799,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":784400.3355557239,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,136,946|85|
|Raw usage underscore usage|5,181,662|88|
|Manipulating private properties using #|1,944,850|89|
|Manipulating private properties using underscore(_)|575,852,929|87|
|Manipulating private properties using Symbol|570,555,757|86|
|Manipulating private properties using PrivateSymbol|23,711,773|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":6136945.672047729,"samples":5},{"name":"Raw usage underscore usage","opsSec":5181661.839024742,"samples":7},{"name":"Manipulating private properties using #","opsSec":1944849.6226122177,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":575852929.2990824,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":570555757.2419302,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":23711773.259798188,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,941,529|95|
|Adding property in the object creation - small object|1,958,560|99|
|Adding property after the function creation - small class|169,054|86|
|Adding property in the function creation - small class|168,251|84|
|Adding property after the class creation - small class|139,308|81|
|Adding property in the class creation - small class|138,515|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1941528.839068448,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":1958559.947321896,"samples":8},{"name":"Adding property after the function creation - small class","opsSec":169053.69551123312,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":168251.47468504365,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":139307.5288765831,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":138514.86787911446,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|662,085,529|83|
|Getter|50,548,196|81|
|Method|697,038,816|89|
|DefineProperty (getter)|716,271,917|88|
|DefineProperty (getter & enumerable=false)|51,194,965|86|
|DefineProperty (getter & configurable=false)|705,561,501|86|
|DefineProperty (getter & enumerable=false & configurable=false)|51,077,696|91|
|DefineProperty (writable)|702,523,381|87|
|DefineProperty (writable & enumerable=false)|664,161,902|89|
|DefineProperty (writable & enumerable=false & configurable=false)|77,486,075|81|
|DefineProperties (getter)|32,773,254|83|
|DefineProperties (getter & enumerable=false)|32,435,170|80|
|DefineProperties (getter & enumerable=false & configurable=false)|53,477,417|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":662085528.6165806,"samples":6},{"name":"Getter","opsSec":50548196.27780487,"samples":5},{"name":"Method","opsSec":697038815.7842381,"samples":7},{"name":"DefineProperty (getter)","opsSec":716271917.2580218,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51194965.29012771,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":705561501.133398,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51077695.66186603,"samples":5},{"name":"DefineProperty (writable)","opsSec":702523381.3669993,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":664161901.9039012,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":77486074.95229727,"samples":5},{"name":"DefineProperties (getter)","opsSec":32773254.026850786,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":32435170.276012868,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53477417.41100435,"samples":9}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|562,188,253|85|
|Setter|4,939,173|89|
|Method|560,023,084|91|
|DefineProperty (setter)|562,737,144|90|
|DefineProperty (setter & enumerable=false)|4,906,039|84|
|DefineProperty (setter & configurable=false)|4,919,820|87|
|DefineProperty (setter & enumerable=false & configurable=false)|4,981,726|86|
|DefineProperty (writable)|693,900,688|86|
|DefineProperty (writable & enumerable=false)|695,300,345|89|
|DefineProperty (writable & enumerable=false & configurable=false)|467,939,174|64|
|DefineProperties (setter)|55,720,946|79|
|DefineProperties (setter & enumerable=false)|4,489,649|90|
|DefineProperties (setter & enumerable=false & configurable=false)|4,915,002|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":562188252.6703551,"samples":7},{"name":"Setter","opsSec":4939172.590196888,"samples":5},{"name":"Method","opsSec":560023083.8890586,"samples":7},{"name":"DefineProperty (setter)","opsSec":562737143.5025203,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":4906039.470957142,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":4919820.273797138,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":4981725.642598522,"samples":5},{"name":"DefineProperty (writable)","opsSec":693900688.4755547,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":695300344.9821886,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":467939173.59598184,"samples":7},{"name":"DefineProperties (setter)","opsSec":55720945.56394753,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":4489649.473982656,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":4915002.233198916,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,996,082|87|
|Using replaceAll()|1,885,473|93|
|Using replaceAll(//g)|1,776,806|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using replace(//g)","opsSec":1996081.7015332438,"samples":6},{"name":"Using replaceAll()","opsSec":1885473.4901117668,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1776805.902575913,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,769,480|93|
|{ ...object, __proto__: null }|12,422,515|88|
|{ ...object, newProp: true }|457,117|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|136,294|94|
|loop + object.keys starting with {}|310,160|93|
|loop + object.keys starting with { __proto__: null }|400,600|93|
|loop + object.keys starting with { randomProp: true }|326,815|94|
|object.keys + reduce(FN, {})|311,275|94|
|object.keys + reduce(FN, { __proto__: null })|400,419|92|
|object.keys + reduce(FN, { newProp: true })|326,439|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12769479.56616206,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":12422514.7964855,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":457116.6352470675,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":136294.45080095617,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":310160.47978251736,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":400600.080927068,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":326815.02936307795,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":311274.62661665614,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":400419.21887664986,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326439.4684445226,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,618|88|
|Sort using first char|713,564|84|
|Sort using localeCompare|344,145|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Sort using default","opsSec":148618.30506687638,"samples":5},{"name":"Sort using first char","opsSec":713563.923377091,"samples":5},{"name":"Sort using localeCompare","opsSec":344144.5177058347,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,292|90|
|{...smallObject} - Total keys: 2|56,739,351|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,304|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,489|98|
|{ ...bigObject, ...anotherBigObject }|794|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,947,936|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,022,764|95|
|{ ...smallObject, ...anotherSmallObject }|12,848,685|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1291.8572496679756,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":56739350.63764644,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1303.9348331807266,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3489.3475647192495,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":794.263172594846,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7947935.513104871,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19022763.765708536,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12848685.31670106,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,494|84|
|streams.web.Readable reading 1e3 * "some data"|382|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1494.0910813492508,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":382.43923762329865,"samples":3}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,788|93|
|streams.web.WritableStream writing 1e3 * "some data"|646|52|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:46:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2787.700499667685,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":646.3657449722652,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|643,981,510|89|
|Using backtick (`)|668,019,962|91|
|Using array.join|6,102,369|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:51:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":643981510.4833564,"samples":9},{"name":"Using backtick (`)","opsSec":668019962.3892723,"samples":7},{"name":"Using array.join","opsSec":6102369.207248592,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,820,992|98|
|Using indexof|717,684,510|96|
|Using RegExp.test|10,865,568|98|
|Using RegExp.text with cached regex pattern|11,221,444|95|
|Using new RegExp.test|3,123,675|95|
|Using new RegExp.test with cached regex pattern|3,782,744|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11820992.464898927,"samples":6},{"name":"Using indexof","opsSec":717684510.1204404,"samples":6},{"name":"Using RegExp.test","opsSec":10865567.598469593,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11221443.97879396,"samples":6},{"name":"Using new RegExp.test","opsSec":3123675.3798927492,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3782743.626689926,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|109,174,183|92|
|Using this|110,469,980|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":109174182.54125139,"samples":6},{"name":"Using this","opsSec":110469979.87328212,"samples":10}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,581,031|83|
|Date.now()|11,891,787|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5581031.189157882,"samples":5},{"name":"Date.now()","opsSec":11891787.45235896,"samples":5}]}-->
