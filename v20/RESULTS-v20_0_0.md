## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|699,133,184|90|
|Using dot notation|583,727,198|89|
|Using define property (writable)|2,411,388|89|
|Using define property initialized (writable)|3,084,870|88|
|Using define property (getter)|1,230,625|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":699133184.2023561,"samples":9},{"name":"Using dot notation","opsSec":583727198.3207844,"samples":10},{"name":"Using define property (writable)","opsSec":2411387.5926445546,"samples":4},{"name":"Using define property initialized (writable)","opsSec":3084870.4389169975,"samples":5},{"name":"Using define property (getter)","opsSec":1230624.8022871173,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.462ms
array.push|1,000,000|40.1ms
new Array(length)|1,000,000|7.206ms
array.push|100,000,000|1,814.11ms
new Array(length)|100,000,000|5,302.341ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.365ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|32.365ms
new Array(length)|1,000,000|4.465ms
array.push|100,000,000|3,070.628ms
new Array(length)|100,000,000|4,925.47ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|74|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":306.8841833834791,"samples":4},{"name":"Array.from","opsSec":14.66927827006052,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,023|79|
|new Blob (1024)|386|64|
|text (128)|2,985|82|
|text (1024)|392|80|
|arrayBuffer (128)|2,945|82|
|arrayBuffer (1024)|392|82|
|slice (0, 64)|37,788|64|
|slice (0, 512)|13,719|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3022.696298846174,"samples":3},{"name":"new Blob (1024)","opsSec":385.97523344677325,"samples":3},{"name":"text (128)","opsSec":2984.805175593328,"samples":4},{"name":"text (1024)","opsSec":391.9509868895917,"samples":2},{"name":"arrayBuffer (128)","opsSec":2945.4226779285123,"samples":3},{"name":"arrayBuffer (1024)","opsSec":392.09387057455024,"samples":4},{"name":"slice (0, 64)","opsSec":37787.86376204858,"samples":5},{"name":"slice (0, 512)","opsSec":13718.6948745658,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,945|55|
|[True conditional] Using constructor name|129,128|94|
|[True conditional] Check if property is valid then instanceof |129,987|93|
|[False conditional] Using instanceof only|596,944,778|96|
|[False conditional] Using constructor name|597,348,310|96|
|[False conditional] Check if property is valid then instanceof |598,320,114|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165944.63509854447,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":129128.1646339486,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129987.3194858227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":596944777.6304117,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":597348310.3874255,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598320113.5361209,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,120|84|
|crypto.verify('RSA-SHA256')|3,251|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3119.7271162399347,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":3250.585806467758,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|738,521|92|
|fromUnixToISOString(new Date())|1,242,688|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":738521.492770016,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1242688.4686763887,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,834|85|
|Intl.DateTimeFormat().format(new Date())|5,801|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,446|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,442|90|
|Reusing Intl.DateTimeFormat()|348,758|81|
|Date.toLocaleDateString()|405,867|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,375|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4833.664124540381,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5800.811980176461,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5445.738453651324,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6442.352618191858,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":348757.90868272877,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":405867.22507356177,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6374.686782462092,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|633,410|86|
|Using brackets {}|654,729|87|
|Using '' + |654,443|90|
|Using date.toString()|718,794|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":633409.991499142,"samples":4},{"name":"Using brackets {}","opsSec":654729.0446645044,"samples":5},{"name":"Using '' + ","opsSec":654442.8666460891,"samples":5},{"name":"Using date.toString()","opsSec":718793.6284471028,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,152,220|87|
|Using delete property (proto: null)|12,077,432|87|
|Using delete property (cached proto: null)|2,201,136|90|
|Using undefined assignment|663,881,943|88|
|Using undefined assignment (proto: null)|13,055,140|90|
|Using undefined property (cached proto: null)|639,136,333|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2152220.0322882975,"samples":5},{"name":"Using delete property (proto: null)","opsSec":12077432.344977314,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2201136.0285486523,"samples":4},{"name":"Using undefined assignment","opsSec":663881943.1728916,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13055139.671589307,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":639136333.2510166,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|146,970|60|
|NodeError|120,055|92|
|NodeError Range|120,818|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":146970.31621173702,"samples":3},{"name":"NodeError","opsSec":120054.82134410241,"samples":3},{"name":"NodeError Range","opsSec":120817.77961628494,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,122,746|93|
|Function returning explicitly undefined|1,134,367|89|
|Function returning implicitly undefined|1,159,891|91|
|Function returning string|1,143,275|91|
|Function returning integer|1,164,777|91|
|Function returning float|1,147,766|94|
|Function returning functions|1,126,184|90|
|Function returning arrow functions|1,105,314|95|
|Function returning empty object|1,148,032|93|
|Function returning empty array|1,102,527|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1122746.0033204406,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1134366.6594932408,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1159890.925586543,"samples":5},{"name":"Function returning string","opsSec":1143274.6696105334,"samples":4},{"name":"Function returning integer","opsSec":1164777.3245441678,"samples":5},{"name":"Function returning float","opsSec":1147765.5532493612,"samples":6},{"name":"Function returning functions","opsSec":1126183.961648143,"samples":5},{"name":"Function returning arrow functions","opsSec":1105313.5086150635,"samples":6},{"name":"Function returning empty object","opsSec":1148031.5761270786,"samples":7},{"name":"Function returning empty array","opsSec":1102527.2707424618,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,761,242|94|
|using Array.includes (first item)|598,395,895|94|
|Using raw comparison|598,654,131|96|
|Using raw comparison (first item)|596,792,979|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":593761241.6874763,"samples":6},{"name":"using Array.includes (first item)","opsSec":598395895.3082687,"samples":6},{"name":"Using raw comparison","opsSec":598654130.900133,"samples":7},{"name":"Using raw comparison (first item)","opsSec":596792978.6920308,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,101,499|81|
|Using Object.getOwnPropertyNames()|46,011,460|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":39101498.9843199,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":46011460.3449344,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,765,398|85|
|Length = 10_000 - Array.at|617,121,474|93|
|Length = 1_000_000 - Array.at|614,007,908|94|
|Length = 100 - Array[length - 1]|618,464,546|92|
|Length = 10_000 - Array[length - 1]|612,678,113|94|
|Length = 1_000_000 - Array[length - 1]|619,415,201|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":600765397.695439,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":617121474.1980244,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":614007907.5873208,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":618464545.9468133,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":612678112.8378412,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":619415200.5026866,"samples":10}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,221,803|86|
|Object.create({})|1,316,804|72|
|Cached Empty.prototype|829,213,184|86|
|Empty.prototype|1,242,879|72|
|Empty class|892,553|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":40221802.57848019,"samples":7},{"name":"Object.create({})","opsSec":1316803.5068797735,"samples":3},{"name":"Cached Empty.prototype","opsSec":829213183.6339893,"samples":6},{"name":"Empty.prototype","opsSec":1242879.4987261663,"samples":4},{"name":"Empty class","opsSec":892552.7432255788,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|842,162,829|84|
|Using optional chain (obj.field?.field2) (undefined)|843,245,032|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|839,935,017|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|885,305,904|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":842162829.0699401,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":843245031.957072,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":839935017.3833706,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":885305903.9935138,"samples":5}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|715,499,734|95|
|Using parseInt(x, 10) - big number (10 len)|720,110,025|94|
|Using + - small number (2 len)|718,257,402|95|
|Using + - big number (10 len)|718,659,605|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":715499733.7036717,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":720110025.1969912,"samples":6},{"name":"Using + - small number (2 len)","opsSec":718257402.1094295,"samples":6},{"name":"Using + - big number (10 len)","opsSec":718659605.4326749,"samples":6}]}-->

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
