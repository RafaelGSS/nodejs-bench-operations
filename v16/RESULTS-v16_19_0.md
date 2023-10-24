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
|Function returning null|1,257,375|95|
|Function returning explicitly undefined|1,276,914|93|
|Function returning implicitly undefined|1,304,674|89|
|Function returning string|1,297,973|95|
|Function returning integer|1,290,807|94|
|Function returning float|1,289,293|95|
|Function returning functions|1,262,287|98|
|Function returning arrow functions|1,279,849|92|
|Function returning empty object|1,295,688|95|
|Function returning empty array|1,269,568|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1257374.9215716491,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1276913.8770213374,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1304673.6389953776,"samples":6},{"name":"Function returning string","opsSec":1297973.0929131727,"samples":6},{"name":"Function returning integer","opsSec":1290807.329479629,"samples":4},{"name":"Function returning float","opsSec":1289293.0106554863,"samples":7},{"name":"Function returning functions","opsSec":1262286.7663142863,"samples":7},{"name":"Function returning arrow functions","opsSec":1279848.9149657504,"samples":6},{"name":"Function returning empty object","opsSec":1295688.293563907,"samples":5},{"name":"Function returning empty array","opsSec":1269568.28903663,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,446,195|93|
|using Array.includes (first item)|710,208,619|91|
|Using raw comparison|714,294,583|97|
|Using raw comparison (first item)|712,576,326|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":712446195.2557806,"samples":7},{"name":"using Array.includes (first item)","opsSec":710208618.697717,"samples":8},{"name":"Using raw comparison","opsSec":714294582.9468395,"samples":7},{"name":"Using raw comparison (first item)","opsSec":712576326.0190222,"samples":9}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,276,574|95|
|Using Object.getOwnPropertyNames()|54,069,136|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":56276573.53875364,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":54069136.27403646,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,014,448|96|
|Length = 10_000 - Array.at|18,925,294|96|
|Length = 1_000_000 - Array.at|18,674,464|97|
|Length = 100 - Array[length - 1]|593,134,150|95|
|Length = 10_000 - Array[length - 1]|592,609,043|95|
|Length = 1_000_000 - Array[length - 1]|591,606,163|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19014448.062881827,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":18925294.082451656,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":18674464.4596521,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":593134150.066736,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":592609042.5641743,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":591606162.6301305,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,360,653|93|
|Object.create({})|1,415,631|82|
|Cached Empty.prototype|594,127,935|94|
|Empty.prototype|1,486,594|77|
|Empty class|882,319|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":49360653.03356063,"samples":6},{"name":"Object.create({})","opsSec":1415631.4105554924,"samples":3},{"name":"Cached Empty.prototype","opsSec":594127934.9569684,"samples":6},{"name":"Empty.prototype","opsSec":1486593.5273643197,"samples":3},{"name":"Empty class","opsSec":882319.4762698959,"samples":5}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,331,061|96|
|Using optional chain (obj.field?.field2) (undefined)|713,126,111|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,785,653|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,085,375|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":713331061.1362846,"samples":11},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":713126110.7174375,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":712785652.7067224,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":711085375.194108,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|148,458,959|86|
|Using parseInt(x, 10) - big number (10 len)|11,872,009|91|
|Using + - small number (2 len)|713,266,250|95|
|Using + - big number (10 len)|712,533,457|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":148458959.35967767,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11872008.94470574,"samples":6},{"name":"Using + - small number (2 len)","opsSec":713266249.8498825,"samples":6},{"name":"Using + - big number (10 len)","opsSec":712533457.4916795,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|547,031|68|
|Using ? operator to avoid rejection|622,170|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":547030.9322372994,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":622169.7511858683,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,064,455|95|
|Raw usage underscore usage|6,773,084|95|
|Manipulating private properties using #|2,478,950|94|
|Manipulating private properties using underscore(_)|703,393,863|93|
|Manipulating private properties using Symbol|700,219,192|94|
|Manipulating private properties using PrivateSymbol|24,758,937|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":8064455.299090387,"samples":6},{"name":"Raw usage underscore usage","opsSec":6773083.516464741,"samples":6},{"name":"Manipulating private properties using #","opsSec":2478950.1164209098,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":703393863.2628291,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":700219192.2889879,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":24758936.958896916,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,612,926|94|
|Adding property in the object creation - small object|1,609,835|92|
|Adding property after the function creation - small class|141,011|82|
|Adding property in the function creation - small class|148,106|80|
|Adding property after the class creation - small class|123,661|83|
|Adding property in the class creation - small class|119,196|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1612925.7953278543,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":1609834.6890610813,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":141010.84880315152,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148105.9570260775,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":123660.90727535883,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":119196.40920416162,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,911,360|96|
|Getter|59,497,715|96|
|Method|712,502,146|97|
|DefineProperty (getter)|711,197,365|98|
|DefineProperty (getter & enumerable=false)|59,355,020|92|
|DefineProperty (getter & configurable=false)|713,027,927|96|
|DefineProperty (getter & enumerable=false & configurable=false)|58,664,152|93|
|DefineProperty (writable)|712,495,558|92|
|DefineProperty (writable & enumerable=false)|712,064,055|97|
|DefineProperty (writable & enumerable=false & configurable=false)|84,524,307|16|
|DefineProperties (getter)|37,586,955|90|
|DefineProperties (getter & enumerable=false)|59,427,792|93|
|DefineProperties (getter & enumerable=false & configurable=false)|59,553,638|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":709911360.0692308,"samples":7},{"name":"Getter","opsSec":59497714.81441923,"samples":6},{"name":"Method","opsSec":712502145.8603761,"samples":6},{"name":"DefineProperty (getter)","opsSec":711197365.4221252,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59355019.827212185,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":713027927.4339958,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":58664152.04494845,"samples":5},{"name":"DefineProperty (writable)","opsSec":712495557.9162419,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":712064055.3429118,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":84524307.19534169,"samples":12},{"name":"DefineProperties (getter)","opsSec":37586955.141084395,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":59427791.73869281,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59553637.92263577,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|589,106,395|98|
|Setter|6,995,880|96|
|Method|593,936,804|94|
|DefineProperty (setter)|599,009,099|98|
|DefineProperty (setter & enumerable=false)|7,083,265|98|
|DefineProperty (setter & configurable=false)|7,026,046|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,069,203|97|
|DefineProperty (writable)|593,545,630|99|
|DefineProperty (writable & enumerable=false)|593,296,019|92|
|DefineProperty (writable & enumerable=false & configurable=false)|592,734,753|99|
|DefineProperties (setter)|421,072,690|71|
|DefineProperties (setter & enumerable=false)|6,474,238|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,453,124|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":589106395.1793841,"samples":7},{"name":"Setter","opsSec":6995880.185857986,"samples":5},{"name":"Method","opsSec":593936804.2727225,"samples":6},{"name":"DefineProperty (setter)","opsSec":599009099.060212,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7083264.74913048,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7026046.378648115,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7069202.985811434,"samples":6},{"name":"DefineProperty (writable)","opsSec":593545629.7144632,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593296019.303731,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":592734753.1177807,"samples":7},{"name":"DefineProperties (setter)","opsSec":421072689.84063864,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6474238.453350586,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6453123.8428842975,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,981,250|95|
|Using replaceAll()|1,876,761|94|
|Using replaceAll(//g)|1,782,065|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1981250.0767468372,"samples":6},{"name":"Using replaceAll()","opsSec":1876761.1660707847,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1782064.8979395833,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,302,251|93|
|{ ...object, __proto__: null }|13,283,507|92|
|{ ...object, newProp: true }|476,617|82|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|138,460|96|
|loop + object.keys starting with {}|311,306|94|
|loop + object.keys starting with { __proto__: null }|411,895|92|
|loop + object.keys starting with { randomProp: true }|333,019|96|
|object.keys + reduce(FN, {})|321,613|94|
|object.keys + reduce(FN, { __proto__: null })|413,923|94|
|object.keys + reduce(FN, { newProp: true })|337,544|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13302250.764122305,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13283507.249650434,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":476617.04844111094,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":138460.01995577544,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":311306.09612411703,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":411894.73594176746,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":333018.52600774483,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":321613.34286948916,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":413923.0693867003,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":337543.8055548683,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,640|93|
|Sort using first char|632,818|95|
|Sort using localeCompare|350,585|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":141640.15223166003,"samples":6},{"name":"Sort using first char","opsSec":632817.8600279596,"samples":4},{"name":"Sort using localeCompare","opsSec":350584.80607901094,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,243|89|
|{...smallObject} - Total keys: 2|55,090,629|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,311|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,509|98|
|{ ...bigObject, ...anotherBigObject }|771|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,929,584|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,947,093|95|
|{ ...smallObject, ...anotherSmallObject }|12,831,139|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1243.0109856043523,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":55090628.57649308,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1311.1039098103754,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3508.66486525725,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":770.5512703588759,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7929583.803872293,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18947093.190398306,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12831138.79892889,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,376|86|
|streams.web.Readable reading 1e3 * "some data"|399|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1376.0455025143833,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":399.4387197776687,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,700|93|
|streams.web.WritableStream writing 1e3 * "some data"|676|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2699.6092514456855,"samples":7},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":675.7820640464734,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,534,828|96|
|Using backtick (`)|593,283,217|99|
|Using array.join|8,653,160|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":593534827.7442781,"samples":7},{"name":"Using backtick (`)","opsSec":593283216.56479,"samples":7},{"name":"Using array.join","opsSec":8653160.384634828,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,850,810|97|
|Using indexof|707,245,385|95|
|Using RegExp.test|10,600,509|95|
|Using RegExp.text with cached regex pattern|11,197,197|95|
|Using new RegExp.test|3,106,584|97|
|Using new RegExp.test with cached regex pattern|3,724,192|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11850809.86557904,"samples":5},{"name":"Using indexof","opsSec":707245384.5389916,"samples":7},{"name":"Using RegExp.test","opsSec":10600508.68710348,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11197196.977843337,"samples":7},{"name":"Using new RegExp.test","opsSec":3106583.9777776427,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3724191.665522688,"samples":5}]}-->

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
