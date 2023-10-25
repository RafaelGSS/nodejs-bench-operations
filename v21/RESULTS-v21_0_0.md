## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|656,431,741|86|
|Using dot notation|656,346,861|89|
|Using define property (writable)|2,701,164|87|
|Using define property initialized (writable)|3,600,623|84|
|Using define property (getter)|1,466,816|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":656431741.1529161,"samples":6},{"name":"Using dot notation","opsSec":656346861.0132911,"samples":8},{"name":"Using define property (writable)","opsSec":2701164.2349922196,"samples":3},{"name":"Using define property initialized (writable)","opsSec":3600622.7051899326,"samples":5},{"name":"Using define property (getter)","opsSec":1466815.6521034078,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.003ms
array.push|100|0.091ms
new Array(length)|100|0.014ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.561ms
new Array(length)|10,000|0.279ms
array.push|1,000,000|38.211ms
new Array(length)|1,000,000|8.92ms
array.push|100,000,000|2,276.052ms
new Array(length)|100,000,000|5,668.853ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.004ms
array.push|100|0.025ms
new Array(length)|100|0.016ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.594ms
new Array(length)|10,000|0.381ms
array.push|1,000,000|25.761ms
new Array(length)|1,000,000|11.7ms
array.push|100,000,000|2,258.819ms
new Array(length)|100,000,000|5,550.143ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|267|70|
|Array.from|14|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":266.65093296363835,"samples":3},{"name":"Array.from","opsSec":14.206489465886424,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,162|80|
|new Blob (1024)|405|66|
|text (128)|3,040|83|
|text (1024)|399|84|
|arrayBuffer (128)|3,031|83|
|arrayBuffer (1024)|397|83|
|slice (0, 64)|102,424|47|
|slice (0, 512)|15,155|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3162.2462030464294,"samples":5},{"name":"new Blob (1024)","opsSec":404.72615829113164,"samples":2},{"name":"text (128)","opsSec":3040.054570621493,"samples":4},{"name":"text (1024)","opsSec":399.3013875205176,"samples":3},{"name":"arrayBuffer (128)","opsSec":3030.6571952450768,"samples":3},{"name":"arrayBuffer (1024)","opsSec":397.0467390444342,"samples":3},{"name":"slice (0, 64)","opsSec":102423.80338072422,"samples":4},{"name":"slice (0, 512)","opsSec":15155.401978842616,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,632|51|
|[True conditional] Using constructor name|149,369|89|
|[True conditional] Check if property is valid then instanceof |151,897|95|
|[False conditional] Using instanceof only|713,937,667|96|
|[False conditional] Using constructor name|711,929,813|92|
|[False conditional] Check if property is valid then instanceof |713,203,433|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":185632.31600670173,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":149368.95813736125,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":151897.37872726395,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":713937667.4616102,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":711929812.9790542,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713203433.4026605,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,221|85|
|crypto.verify('RSA-SHA256')|3,277|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3221.438889009544,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3277.2765417832443,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|742,223|83|
|fromUnixToISOString(new Date())|1,313,643|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":742223.13196516,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1313642.6560793107,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,394|83|
|Intl.DateTimeFormat().format(new Date())|8,313|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,800|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,530|77|
|Reusing Intl.DateTimeFormat()|415,563|92|
|Date.toLocaleDateString()|487,614|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,505|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8394.107159969693,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8313.145912274242,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8799.612380016508,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8529.568989470896,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":415563.07497700717,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":487614.01498355775,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9505.354613297675,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|713,803|98|
|Using brackets {}|717,630|91|
|Using '' + |727,323|98|
|Using date.toString()|779,081|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":713802.9677131473,"samples":6},{"name":"Using brackets {}","opsSec":717629.5794602821,"samples":4},{"name":"Using '' + ","opsSec":727322.7184107555,"samples":6},{"name":"Using date.toString()","opsSec":779081.094214379,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,838,829|94|
|Using delete property (proto: null)|13,312,919|91|
|Using delete property (cached proto: null)|2,892,861|96|
|Using undefined assignment|709,034,479|96|
|Using undefined assignment (proto: null)|15,542,557|96|
|Using undefined property (cached proto: null)|709,169,415|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2838829.2577523836,"samples":7},{"name":"Using delete property (proto: null)","opsSec":13312919.201534852,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":2892861.324600303,"samples":5},{"name":"Using undefined assignment","opsSec":709034478.8765527,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":15542557.197848547,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":709169414.9450946,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|170,012|47|
|NodeError|126,565|88|
|NodeError Range|119,003|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":170011.9642519244,"samples":3},{"name":"NodeError","opsSec":126565.24488181139,"samples":3},{"name":"NodeError Range","opsSec":119003.33923228875,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,522,448|92|
|Function returning explicitly undefined|1,495,758|97|
|Function returning implicitly undefined|1,540,755|97|
|Function returning string|1,502,391|95|
|Function returning integer|1,541,409|96|
|Function returning float|1,455,475|95|
|Function returning functions|1,484,846|97|
|Function returning arrow functions|1,514,837|97|
|Function returning empty object|1,540,467|93|
|Function returning empty array|1,532,296|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1522447.5434282506,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1495758.2973793268,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1540755.3681839504,"samples":7},{"name":"Function returning string","opsSec":1502390.6376579227,"samples":4},{"name":"Function returning integer","opsSec":1541408.6043599623,"samples":6},{"name":"Function returning float","opsSec":1455475.3371521435,"samples":8},{"name":"Function returning functions","opsSec":1484846.3162675851,"samples":8},{"name":"Function returning arrow functions","opsSec":1514837.0663411284,"samples":6},{"name":"Function returning empty object","opsSec":1540467.0003661253,"samples":6},{"name":"Function returning empty array","opsSec":1532296.4801934706,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,695,460|99|
|using Array.includes (first item)|590,518,885|97|
|Using raw comparison|592,507,386|96|
|Using raw comparison (first item)|592,057,440|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":588695460.1728792,"samples":9},{"name":"using Array.includes (first item)","opsSec":590518884.9202,"samples":8},{"name":"Using raw comparison","opsSec":592507385.7399098,"samples":6},{"name":"Using raw comparison (first item)","opsSec":592057439.6748314,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,527,903|89|
|Using Object.getOwnPropertyNames()|40,916,760|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":42527903.07244019,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":40916760.38148062,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|392,652,744|95|
|Length = 10_000 - Array.at|390,740,726|93|
|Length = 1_000_000 - Array.at|394,099,878|92|
|Length = 100 - Array[length - 1]|586,513,847|93|
|Length = 10_000 - Array[length - 1]|585,493,872|94|
|Length = 1_000_000 - Array[length - 1]|586,639,591|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":392652743.85273457,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":390740726.38348716,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":394099877.7461991,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":586513847.3895895,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":585493871.6251258,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586639591.0318083,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,675,931|92|
|Object.create({})|1,359,677|76|
|Cached Empty.prototype|706,727,669|97|
|Empty.prototype|1,445,485|78|
|Empty class|1,004,790|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":47675930.79136651,"samples":6},{"name":"Object.create({})","opsSec":1359676.9052763954,"samples":3},{"name":"Cached Empty.prototype","opsSec":706727669.0419743,"samples":7},{"name":"Empty.prototype","opsSec":1445484.8108577689,"samples":3},{"name":"Empty class","opsSec":1004789.5263879414,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|600,946,163|84|
|Using optional chain (obj.field?.field2) (undefined)|602,998,591|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|611,339,828|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|605,335,811|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":600946163.0955361,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":602998591.0189378,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":611339827.9649378,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":605335810.7059579,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|624,409,304|87|
|Using parseInt(x, 10) - big number (10 len)|635,623,033|91|
|Using + - small number (2 len)|632,197,890|92|
|Using + - big number (10 len)|627,208,633|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":624409304.0220356,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":635623032.5079448,"samples":6},{"name":"Using + - small number (2 len)","opsSec":632197890.055235,"samples":6},{"name":"Using + - big number (10 len)","opsSec":627208632.957935,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|833,245|73|
|Using ? operator to avoid rejection|958,858|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":833245.1993662526,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":958857.6786976159,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|715,698,796|86|
|Raw usage underscore usage|716,916,823|84|
|Manipulating private properties using #|714,703,359|84|
|Manipulating private properties using underscore(_)|775,133,241|88|
|Manipulating private properties using Symbol|738,002,968|84|
|Manipulating private properties using PrivateSymbol|36,148,104|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":715698795.9426093,"samples":7},{"name":"Raw usage underscore usage","opsSec":716916823.3577207,"samples":7},{"name":"Manipulating private properties using #","opsSec":714703359.1768054,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":775133241.4567934,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":738002967.5358034,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36148103.96917199,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,666,506|88|
|Adding property in the object creation - small object|2,708,475|90|
|Adding property after the function creation - small class|147,579|77|
|Adding property in the function creation - small class|154,546|79|
|Adding property after the class creation - small class|142,844|77|
|Adding property in the class creation - small class|146,146|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2666506.3675729604,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2708474.643725533,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":147578.9558273371,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":154545.9286653429,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":142843.6819859523,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":146146.37590441288,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|585,393,197|82|
|Getter|51,911,102|87|
|Method|604,637,956|90|
|DefineProperty (getter)|604,744,989|91|
|DefineProperty (getter & enumerable=false)|52,959,074|92|
|DefineProperty (getter & configurable=false)|605,952,103|89|
|DefineProperty (getter & enumerable=false & configurable=false)|52,503,981|94|
|DefineProperty (writable)|610,747,861|90|
|DefineProperty (writable & enumerable=false)|616,436,772|93|
|DefineProperty (writable & enumerable=false & configurable=false)|613,286,029|89|
|DefineProperties (getter)|52,219,164|90|
|DefineProperties (getter & enumerable=false)|42,020,247|74|
|DefineProperties (getter & enumerable=false & configurable=false)|32,606,688|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":585393197.101487,"samples":6},{"name":"Getter","opsSec":51911101.93455596,"samples":6},{"name":"Method","opsSec":604637956.1557711,"samples":7},{"name":"DefineProperty (getter)","opsSec":604744989.4005779,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52959074.1272898,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":605952103.2905266,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52503980.5662725,"samples":5},{"name":"DefineProperty (writable)","opsSec":610747861.1039828,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":616436771.5135764,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":613286029.2566508,"samples":7},{"name":"DefineProperties (getter)","opsSec":52219163.982723214,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":42020246.96931156,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":32606688.132211767,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|593,093,535|86|
|Setter|7,604,881|88|
|Method|576,337,465|86|
|DefineProperty (setter)|582,656,703|86|
|DefineProperty (setter & enumerable=false)|7,256,361|85|
|DefineProperty (setter & configurable=false)|7,413,311|88|
|DefineProperty (setter & enumerable=false & configurable=false)|7,443,291|86|
|DefineProperty (writable)|585,789,305|85|
|DefineProperty (writable & enumerable=false)|590,540,457|88|
|DefineProperty (writable & enumerable=false & configurable=false)|582,345,311|87|
|DefineProperties (setter)|598,746,740|83|
|DefineProperties (setter & enumerable=false)|7,422,245|88|
|DefineProperties (setter & enumerable=false & configurable=false)|7,059,010|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":593093534.9470458,"samples":7},{"name":"Setter","opsSec":7604880.518048989,"samples":6},{"name":"Method","opsSec":576337465.0854015,"samples":6},{"name":"DefineProperty (setter)","opsSec":582656702.8990158,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7256361.125352645,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7413310.760788249,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7443290.817821324,"samples":7},{"name":"DefineProperty (writable)","opsSec":585789305.3164841,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590540457.1769882,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":582345310.5003357,"samples":6},{"name":"DefineProperties (setter)","opsSec":598746739.62692,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7422244.663715215,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7059010.420402402,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,920,229|89|
|Using replaceAll()|1,696,900|88|
|Using replaceAll(//g)|1,524,861|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1920228.6248690768,"samples":7},{"name":"Using replaceAll()","opsSec":1696899.6443890608,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1524861.368743941,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,704,572|93|
|{ ...object, __proto__: null }|1,462,626|100|
|{ ...object, newProp: true }|21,483,781|93|
|structuredClone|183,723|95|
|JSON.parse + JSON.stringify|186,468|97|
|loop + object.keys starting with {}|840,257|98|
|loop + object.keys starting with { __proto__: null }|464,674|93|
|loop + object.keys starting with { randomProp: true }|378,494|95|
|object.keys + reduce(FN, {})|366,221|96|
|object.keys + reduce(FN, { __proto__: null })|466,684|94|
|object.keys + reduce(FN, { newProp: true })|370,513|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":23704572.203651957,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":1462626.4569974067,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":21483780.5166368,"samples":5},{"name":"structuredClone","opsSec":183722.82607842083,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":186467.74812313498,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":840257.4081004761,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":464674.1596876341,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378494.23981029686,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":366221.3527400278,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":466683.99717624666,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":370512.77400479495,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|221,701|89|
|Sort using first char|1,049,219|88|
|Sort using localeCompare|914,171|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":221701.37663366666,"samples":3},{"name":"Sort using first char","opsSec":1049218.9082807342,"samples":7},{"name":"Sort using localeCompare","opsSec":914170.8367619525,"samples":5}]}-->
