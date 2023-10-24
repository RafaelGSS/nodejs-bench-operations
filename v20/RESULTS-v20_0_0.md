## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|641,406,850|89|
|Using dot notation|619,830,405|89|
|Using define property (writable)|2,868,879|91|
|Using define property initialized (writable)|3,688,138|91|
|Using define property (getter)|1,525,956|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":641406850.148402,"samples":9},{"name":"Using dot notation","opsSec":619830405.0831674,"samples":7},{"name":"Using define property (writable)","opsSec":2868879.357801959,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3688138.3736254964,"samples":6},{"name":"Using define property (getter)","opsSec":1525955.7799537,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.013ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.439ms
new Array(length)|10,000|0.41ms
array.push|1,000,000|34.555ms
new Array(length)|1,000,000|9.068ms
array.push|100,000,000|1,865.123ms
new Array(length)|100,000,000|4,362.19ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.307ms
new Array(length)|10,000|0.202ms
array.push|1,000,000|29.751ms
new Array(length)|1,000,000|4.044ms
array.push|100,000,000|1,690.975ms
new Array(length)|100,000,000|4,649.012ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|327|83|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":327.382289689957,"samples":4},{"name":"Array.from","opsSec":14.708644270201722,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,165|80|
|new Blob (1024)|388|62|
|text (128)|3,550|82|
|text (1024)|446|86|
|arrayBuffer (128)|3,611|87|
|arrayBuffer (1024)|449|87|
|slice (0, 64)|48,379|63|
|slice (0, 512)|14,921|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3165.2249175745583,"samples":6},{"name":"new Blob (1024)","opsSec":387.9895969444173,"samples":2},{"name":"text (128)","opsSec":3549.6626387408146,"samples":4},{"name":"text (1024)","opsSec":446.0646387364213,"samples":2},{"name":"arrayBuffer (128)","opsSec":3611.072240950129,"samples":3},{"name":"arrayBuffer (1024)","opsSec":448.9891745074843,"samples":2},{"name":"slice (0, 64)","opsSec":48378.80262724382,"samples":3},{"name":"slice (0, 512)","opsSec":14920.716999166565,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|153,380|57|
|[True conditional] Using constructor name|119,161|85|
|[True conditional] Check if property is valid then instanceof |122,317|88|
|[False conditional] Using instanceof only|770,373,111|89|
|[False conditional] Using constructor name|760,338,493|87|
|[False conditional] Check if property is valid then instanceof |773,301,557|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":153380.33628971706,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":119161.48142880373,"samples":4},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122316.98247547568,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":770373111.3333162,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":760338493.3078115,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":773301556.6298565,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,877|90|
|crypto.verify('RSA-SHA256')|3,886|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3876.7318094890284,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3886.030123465615,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|778,091|89|
|fromUnixToISOString(new Date())|1,197,828|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":778090.8650176844,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1197827.609240521,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,818|87|
|Intl.DateTimeFormat().format(new Date())|8,994|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,792|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,279|82|
|Reusing Intl.DateTimeFormat()|444,256|98|
|Date.toLocaleDateString()|411,527|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,122|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8817.658517367827,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8993.700033410349,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9792.17063099481,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10278.550204588128,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":444255.98094782187,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":411527.03408731776,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11122.233125637415,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|648,850|88|
|Using brackets {}|654,206|91|
|Using '' + |659,233|93|
|Using date.toString()|707,167|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":648850.254240718,"samples":5},{"name":"Using brackets {}","opsSec":654205.528078814,"samples":5},{"name":"Using '' + ","opsSec":659233.1901111603,"samples":5},{"name":"Using date.toString()","opsSec":707166.657784722,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,680,353|87|
|Using delete property (proto: null)|12,172,045|89|
|Using delete property (cached proto: null)|2,714,525|94|
|Using undefined assignment|716,003,439|95|
|Using undefined assignment (proto: null)|13,460,175|99|
|Using undefined property (cached proto: null)|710,239,208|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2680352.9970410094,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12172044.629932676,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2714524.850493445,"samples":6},{"name":"Using undefined assignment","opsSec":716003438.9113151,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13460175.239197671,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":710239208.2761545,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|134,589|58|
|NodeError|114,914|87|
|NodeError Range|117,801|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":134589.0790666656,"samples":3},{"name":"NodeError","opsSec":114914.2892185105,"samples":3},{"name":"NodeError Range","opsSec":117800.624643001,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,172,597|91|
|Function returning explicitly undefined|1,192,763|91|
|Function returning implicitly undefined|1,226,702|92|
|Function returning string|1,211,168|89|
|Function returning integer|1,180,562|90|
|Function returning float|1,214,557|90|
|Function returning functions|1,167,102|93|
|Function returning arrow functions|1,181,503|89|
|Function returning empty object|1,196,061|92|
|Function returning empty array|1,204,173|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1172597.2755620047,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1192762.9132092826,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1226702.176167109,"samples":5},{"name":"Function returning string","opsSec":1211167.5285125305,"samples":5},{"name":"Function returning integer","opsSec":1180562.276463141,"samples":4},{"name":"Function returning float","opsSec":1214556.5464750961,"samples":6},{"name":"Function returning functions","opsSec":1167102.1612851447,"samples":6},{"name":"Function returning arrow functions","opsSec":1181502.8461989807,"samples":5},{"name":"Function returning empty object","opsSec":1196060.9686248675,"samples":6},{"name":"Function returning empty array","opsSec":1204173.4886912822,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|589,716,545|96|
|using Array.includes (first item)|591,850,608|92|
|Using raw comparison|594,639,397|95|
|Using raw comparison (first item)|592,434,223|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":589716544.9852834,"samples":7},{"name":"using Array.includes (first item)","opsSec":591850607.6261485,"samples":6},{"name":"Using raw comparison","opsSec":594639397.4405012,"samples":7},{"name":"Using raw comparison (first item)","opsSec":592434222.7984966,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,839,760|93|
|Using Object.getOwnPropertyNames()|48,962,627|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":49839760.0091424,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":48962627.43763115,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|603,371,795|93|
|Length = 10_000 - Array.at|608,267,142|89|
|Length = 1_000_000 - Array.at|601,728,944|94|
|Length = 100 - Array[length - 1]|619,381,079|95|
|Length = 10_000 - Array[length - 1]|613,617,087|89|
|Length = 1_000_000 - Array[length - 1]|616,382,607|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":603371795.1788844,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":608267142.3256228,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":601728944.0683215,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":619381079.3162417,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":613617087.4982859,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":616382607.4353615,"samples":5}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,887,071|94|
|Object.create({})|1,411,224|72|
|Cached Empty.prototype|713,959,002|99|
|Empty.prototype|1,379,496|70|
|Empty class|955,269|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48887071.23099205,"samples":8},{"name":"Object.create({})","opsSec":1411223.9673945024,"samples":3},{"name":"Cached Empty.prototype","opsSec":713959001.762539,"samples":6},{"name":"Empty.prototype","opsSec":1379496.2662483137,"samples":3},{"name":"Empty class","opsSec":955268.8915630617,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,133,799|93|
|Using optional chain (obj.field?.field2) (undefined)|599,762,761|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,846,268|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,113,552|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593133798.9212211,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":599762761.3881279,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":598846267.7293876,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599113552.1081407,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|591,327,328|95|
|Using parseInt(x, 10) - big number (10 len)|595,154,524|95|
|Using + - small number (2 len)|589,811,277|94|
|Using + - big number (10 len)|592,938,386|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":591327328.3466449,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":595154524.2060534,"samples":7},{"name":"Using + - small number (2 len)","opsSec":589811277.4749976,"samples":6},{"name":"Using + - big number (10 len)","opsSec":592938386.436935,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|671,712|71|
|Using ? operator to avoid rejection|767,484|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":671712.1856105461,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":767484.0591492779,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|587,384,443|87|
|Raw usage underscore usage|601,016,184|93|
|Manipulating private properties using #|567,294,588|90|
|Manipulating private properties using underscore(_)|565,694,789|91|
|Manipulating private properties using Symbol|569,252,395|87|
|Manipulating private properties using PrivateSymbol|26,298,356|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":587384443.3188394,"samples":7},{"name":"Raw usage underscore usage","opsSec":601016183.5751649,"samples":6},{"name":"Manipulating private properties using #","opsSec":567294588.3134062,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":565694789.3237684,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":569252394.9760541,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":26298355.636781413,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,900,263|96|
|Adding property in the object creation - small object|5,937,446|93|
|Adding property after the function creation - small class|199,414|84|
|Adding property in the function creation - small class|206,078|86|
|Adding property after the class creation - small class|166,398|80|
|Adding property in the class creation - small class|161,338|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5900263.00060981,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":5937445.807945457,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":199414.27433714914,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":206077.86014743085,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":166397.82195968204,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":161337.8024749741,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|595,437,299|94|
|Getter|68,298,903|95|
|Method|599,591,407|95|
|DefineProperty (getter)|599,563,424|96|
|DefineProperty (getter & enumerable=false)|68,181,487|97|
|DefineProperty (getter & configurable=false)|598,138,961|93|
|DefineProperty (getter & enumerable=false & configurable=false)|68,329,347|96|
|DefineProperty (writable)|596,672,256|98|
|DefineProperty (writable & enumerable=false)|598,798,495|96|
|DefineProperty (writable & enumerable=false & configurable=false)|599,514,420|94|
|DefineProperties (getter)|68,400,776|97|
|DefineProperties (getter & enumerable=false)|68,057,708|95|
|DefineProperties (getter & enumerable=false & configurable=false)|46,057,169|66|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":595437298.9316337,"samples":6},{"name":"Getter","opsSec":68298903.03198567,"samples":5},{"name":"Method","opsSec":599591407.0450224,"samples":7},{"name":"DefineProperty (getter)","opsSec":599563424.0893775,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68181486.85150126,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":598138961.4099581,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":68329347.35729262,"samples":7},{"name":"DefineProperty (writable)","opsSec":596672255.6862769,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":598798495.2256274,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":599514420.4229473,"samples":6},{"name":"DefineProperties (getter)","opsSec":68400776.34135513,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68057708.28944832,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":46057169.21095708,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|479,549,636|93|
|Setter|8,162,315|94|
|Method|480,925,589|95|
|DefineProperty (setter)|481,384,632|98|
|DefineProperty (setter & enumerable=false)|8,308,862|93|
|DefineProperty (setter & configurable=false)|8,306,827|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,316,907|98|
|DefineProperty (writable)|483,114,504|97|
|DefineProperty (writable & enumerable=false)|484,314,558|96|
|DefineProperty (writable & enumerable=false & configurable=false)|483,714,983|97|
|DefineProperties (setter)|521,556,846|73|
|DefineProperties (setter & enumerable=false)|8,315,714|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,462,250|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":479549635.88956606,"samples":5},{"name":"Setter","opsSec":8162314.780124082,"samples":5},{"name":"Method","opsSec":480925588.9750447,"samples":7},{"name":"DefineProperty (setter)","opsSec":481384631.63604635,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8308861.525685197,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8306826.837357643,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8316906.516797279,"samples":8},{"name":"DefineProperty (writable)","opsSec":483114504.1703881,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":484314558.3213598,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":483714983.4113202,"samples":8},{"name":"DefineProperties (setter)","opsSec":521556845.56981146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8315713.700526846,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7462250.477824795,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,830,527|92|
|Using replaceAll()|1,550,428|91|
|Using replaceAll(//g)|1,674,743|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1830526.8724434783,"samples":6},{"name":"Using replaceAll()","opsSec":1550428.4319635606,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1674743.449196181,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,567,132|93|
|{ ...object, __proto__: null }|20,867,304|92|
|{ ...object, newProp: true }|601,149|84|
|structuredClone|182,917|97|
|JSON.parse + JSON.stringify|147,633|96|
|loop + object.keys starting with {}|370,489|94|
|loop + object.keys starting with { __proto__: null }|492,120|93|
|loop + object.keys starting with { randomProp: true }|377,902|93|
|object.keys + reduce(FN, {})|365,875|95|
|object.keys + reduce(FN, { __proto__: null })|493,487|96|
|object.keys + reduce(FN, { newProp: true })|379,079|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20567132.216218166,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20867303.672608715,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":601148.8556594953,"samples":3},{"name":"structuredClone","opsSec":182916.8925366023,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":147633.14409526985,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":370489.24516725104,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":492120.47466014366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":377901.57100323826,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":365874.7388809437,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":493487.1070454872,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":379078.6634657649,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|165,893|84|
|Sort using first char|822,541|81|
|Sort using localeCompare|775,131|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":165893.22531978285,"samples":4},{"name":"Sort using first char","opsSec":822541.4887391302,"samples":6},{"name":"Sort using localeCompare","opsSec":775130.6471299805,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,320|94|
|{...smallObject} - Total keys: 2|70,597,354|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|785|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|97|
|{ ...bigObject, ...anotherBigObject }|814|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,999,571|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,793,757|98|
|{ ...smallObject, ...anotherSmallObject }|14,697,363|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1320.0493306568335,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":70597354.09740353,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":784.8419644751314,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3688.542564720888,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":814.2682036972594,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7999570.82873022,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19793757.176898394,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14697362.577226818,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,396|80|
|streams.web.Readable reading 1e3 * "some data"|372|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1396.4759551365573,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":371.9418865137751,"samples":2}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,203|94|
|streams.web.WritableStream writing 1e3 * "some data"|775|50|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4202.534246787694,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":774.7683939951687,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|580,743,812|93|
|Using backtick (`)|597,370,445|95|
|Using array.join|5,742,596|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":580743811.8169199,"samples":6},{"name":"Using backtick (`)","opsSec":597370444.7374444,"samples":6},{"name":"Using array.join","opsSec":5742596.337165756,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|704,867,895|95|
|Using indexof|716,661,892|93|
|Using RegExp.test|11,175,434|87|
|Using RegExp.text with cached regex pattern|11,816,446|96|
|Using new RegExp.test|3,313,268|96|
|Using new RegExp.test with cached regex pattern|4,012,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":704867894.6692827,"samples":5},{"name":"Using indexof","opsSec":716661891.7412158,"samples":8},{"name":"Using RegExp.test","opsSec":11175433.734687818,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11816446.49157919,"samples":7},{"name":"Using new RegExp.test","opsSec":3313268.2960559768,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4012640.245081775,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|590,898,363|98|
|Using this|593,478,723|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":590898362.6602161,"samples":6},{"name":"Using this","opsSec":593478722.9950508,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,671,117|89|
|Date.now()|17,757,075|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":9671117.220433807,"samples":4},{"name":"Date.now()","opsSec":17757075.32656472,"samples":6}]}-->
