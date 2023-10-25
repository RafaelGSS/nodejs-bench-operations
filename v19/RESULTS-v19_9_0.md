## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,875,680|97|
|Using dot notation|714,497,402|96|
|Using define property (writable)|2,999,744|96|
|Using define property initialized (writable)|3,747,945|96|
|Using define property (getter)|1,595,186|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714875679.9522846,"samples":7},{"name":"Using dot notation","opsSec":714497401.6350578,"samples":6},{"name":"Using define property (writable)","opsSec":2999743.605630906,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3747945.1541666393,"samples":6},{"name":"Using define property (getter)","opsSec":1595185.6850718383,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.01ms
array.push|100|0.035ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.47ms
new Array(length)|10,000|0.451ms
array.push|1,000,000|37.588ms
new Array(length)|1,000,000|9.183ms
array.push|100,000,000|2,173.919ms
new Array(length)|100,000,000|4,866.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.096ms
new Array(length)|100|0.018ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.022ms
array.push|10,000|8.225ms
new Array(length)|10,000|0.02ms
array.push|1,000,000|84.606ms
new Array(length)|1,000,000|9.652ms
array.push|100,000,000|3,535.326ms
new Array(length)|100,000,000|4,849.887ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|78|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":299.67419703455715,"samples":5},{"name":"Array.from","opsSec":13.070674137874652,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,048|82|
|new Blob (1024)|396|67|
|text (128)|3,576|84|
|text (1024)|440|89|
|arrayBuffer (128)|3,487|85|
|arrayBuffer (1024)|434|87|
|slice (0, 64)|58,436|67|
|slice (0, 512)|21,509|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3048.0860929948803,"samples":4},{"name":"new Blob (1024)","opsSec":396.13694482724617,"samples":2},{"name":"text (128)","opsSec":3575.8894938793296,"samples":4},{"name":"text (1024)","opsSec":440.47467522056,"samples":3},{"name":"arrayBuffer (128)","opsSec":3486.609387266867,"samples":4},{"name":"arrayBuffer (1024)","opsSec":434.4433488704228,"samples":2},{"name":"slice (0, 64)","opsSec":58436.12691889784,"samples":4},{"name":"slice (0, 512)","opsSec":21508.901780861568,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|196,998|56|
|[True conditional] Using constructor name|154,863|93|
|[True conditional] Check if property is valid then instanceof |154,594|88|
|[False conditional] Using instanceof only|989,929,682|95|
|[False conditional] Using constructor name|944,256,058|89|
|[False conditional] Check if property is valid then instanceof |983,327,764|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":196998.39555315176,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":154862.58316604438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":154593.53932479725,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":989929681.515476,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":944256057.615183,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":983327764.0183756,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,741|91|
|crypto.verify('RSA-SHA256')|3,804|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3740.953822777264,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":3804.1872085846644,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|732,262|81|
|fromUnixToISOString(new Date())|1,277,465|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":732262.3721243456,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1277465.3108007568,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,263|77|
|Intl.DateTimeFormat().format(new Date())|8,435|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,077|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,228|87|
|Reusing Intl.DateTimeFormat()|483,594|98|
|Date.toLocaleDateString()|478,931|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,754|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8262.796841149953,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8435.455800217904,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7076.545006394732,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8227.729160432798,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":483593.9861800774,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":478930.7313012001,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9753.881449856915,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|760,273|94|
|Using brackets {}|767,713|95|
|Using '' + |767,758|97|
|Using date.toString()|843,646|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":760273.0711645162,"samples":5},{"name":"Using brackets {}","opsSec":767712.555209562,"samples":4},{"name":"Using '' + ","opsSec":767758.1680724251,"samples":6},{"name":"Using date.toString()","opsSec":843645.6626426608,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,088,197|83|
|Using delete property (proto: null)|12,346,193|86|
|Using delete property (cached proto: null)|2,074,698|84|
|Using undefined assignment|816,717,535|83|
|Using undefined assignment (proto: null)|15,608,164|83|
|Using undefined property (cached proto: null)|691,119,465|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2088196.9744303022,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12346192.714246873,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2074697.820772554,"samples":5},{"name":"Using undefined assignment","opsSec":816717535.4954273,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":15608164.242283737,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":691119465.45513,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|148,124|51|
|NodeError|120,191|81|
|NodeError Range|133,290|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":148124.06900498833,"samples":3},{"name":"NodeError","opsSec":120191.04341389559,"samples":3},{"name":"NodeError Range","opsSec":133289.6915189817,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,469,024|89|
|Function returning explicitly undefined|1,477,125|93|
|Function returning implicitly undefined|1,524,325|92|
|Function returning string|1,487,810|91|
|Function returning integer|1,522,245|91|
|Function returning float|1,495,471|90|
|Function returning functions|1,478,685|94|
|Function returning arrow functions|1,480,763|95|
|Function returning empty object|1,517,995|93|
|Function returning empty array|1,524,644|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1469023.917979952,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1477125.009423615,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1524325.175341994,"samples":5},{"name":"Function returning string","opsSec":1487810.200397172,"samples":5},{"name":"Function returning integer","opsSec":1522245.0898032219,"samples":6},{"name":"Function returning float","opsSec":1495470.6620029523,"samples":6},{"name":"Function returning functions","opsSec":1478684.9163287978,"samples":5},{"name":"Function returning arrow functions","opsSec":1480762.6429640055,"samples":5},{"name":"Function returning empty object","opsSec":1517995.3539297513,"samples":6},{"name":"Function returning empty array","opsSec":1524644.0526638583,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,868,021|97|
|using Array.includes (first item)|714,072,489|94|
|Using raw comparison|713,837,617|95|
|Using raw comparison (first item)|713,094,270|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":711868020.5231025,"samples":6},{"name":"using Array.includes (first item)","opsSec":714072489.4685521,"samples":6},{"name":"Using raw comparison","opsSec":713837616.8029504,"samples":6},{"name":"Using raw comparison (first item)","opsSec":713094270.4065498,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,341,610|85|
|Using Object.getOwnPropertyNames()|34,736,091|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":40341610.264727876,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":34736090.585602194,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|688,696,461|90|
|Length = 10_000 - Array.at|700,932,387|94|
|Length = 1_000_000 - Array.at|688,869,924|90|
|Length = 100 - Array[length - 1]|720,788,945|88|
|Length = 10_000 - Array[length - 1]|702,735,610|90|
|Length = 1_000_000 - Array[length - 1]|720,290,935|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":688696460.6543256,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":700932387.0604638,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":688869923.9932572,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":720788945.0687469,"samples":5},{"name":"Length = 10_000 - Array[length - 1]","opsSec":702735609.8425486,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":720290935.3379196,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,188,969|92|
|Object.create({})|1,426,287|76|
|Cached Empty.prototype|710,758,356|98|
|Empty.prototype|1,279,959|73|
|Empty class|909,210|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48188968.69238555,"samples":6},{"name":"Object.create({})","opsSec":1426287.1468762194,"samples":3},{"name":"Cached Empty.prototype","opsSec":710758356.1575743,"samples":6},{"name":"Empty.prototype","opsSec":1279959.1910986453,"samples":3},{"name":"Empty class","opsSec":909210.4428654304,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|583,358,064|94|
|Using optional chain (obj.field?.field2) (undefined)|591,205,347|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,449,609|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,483,223|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":583358064.0866516,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":591205346.7046717,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593449608.6946353,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592483222.8540349,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,347,911|88|
|Using parseInt(x, 10) - big number (10 len)|11,764,219|88|
|Using + - small number (2 len)|750,518,603|88|
|Using + - big number (10 len)|747,018,912|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157347910.5425715,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11764218.974138191,"samples":9},{"name":"Using + - small number (2 len)","opsSec":750518602.9564657,"samples":8},{"name":"Using + - big number (10 len)","opsSec":747018912.28856,"samples":10}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|788,831|78|
|Using ? operator to avoid rejection|858,956|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":788831.2540603564,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":858956.2616493716,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|594,156,019|97|
|Raw usage underscore usage|599,569,651|98|
|Manipulating private properties using #|593,321,362|95|
|Manipulating private properties using underscore(_)|594,834,061|94|
|Manipulating private properties using Symbol|592,228,604|92|
|Manipulating private properties using PrivateSymbol|39,636,626|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":594156019.0680941,"samples":8},{"name":"Raw usage underscore usage","opsSec":599569651.1309512,"samples":7},{"name":"Manipulating private properties using #","opsSec":593321361.8040087,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":594834061.1508094,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":592228603.8507948,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":39636625.65379481,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,631,490|97|
|Adding property in the object creation - small object|2,677,314|97|
|Adding property after the function creation - small class|183,316|83|
|Adding property in the function creation - small class|184,169|83|
|Adding property after the class creation - small class|152,963|78|
|Adding property in the class creation - small class|154,511|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2631490.0557040963,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2677313.6942605237,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":183316.33603767495,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":184168.86512512487,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":152962.54244482354,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":154510.84779311265,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|718,468,650|84|
|Getter|58,389,142|92|
|Method|725,545,487|87|
|DefineProperty (getter)|730,074,677|93|
|DefineProperty (getter & enumerable=false)|56,922,660|87|
|DefineProperty (getter & configurable=false)|720,557,066|89|
|DefineProperty (getter & enumerable=false & configurable=false)|53,405,587|87|
|DefineProperty (writable)|697,626,909|88|
|DefineProperty (writable & enumerable=false)|678,956,616|87|
|DefineProperty (writable & enumerable=false & configurable=false)|134,843,783|19|
|DefineProperties (getter)|34,032,711|82|
|DefineProperties (getter & enumerable=false)|34,205,583|83|
|DefineProperties (getter & enumerable=false & configurable=false)|53,799,503|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":718468650.2301061,"samples":8},{"name":"Getter","opsSec":58389141.580485374,"samples":5},{"name":"Method","opsSec":725545486.5337082,"samples":7},{"name":"DefineProperty (getter)","opsSec":730074676.9689289,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56922660.33574964,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":720557066.1180242,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53405587.28368526,"samples":9},{"name":"DefineProperty (writable)","opsSec":697626908.8639646,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":678956616.1180685,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":134843782.84644958,"samples":6},{"name":"DefineProperties (getter)","opsSec":34032711.38904726,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":34205582.84589846,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53799502.74699152,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,949,322|98|
|Setter|8,392,215|97|
|Method|588,245,440|97|
|DefineProperty (setter)|588,688,906|92|
|DefineProperty (setter & enumerable=false)|8,422,824|96|
|DefineProperty (setter & configurable=false)|8,485,589|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,464,274|98|
|DefineProperty (writable)|594,541,337|96|
|DefineProperty (writable & enumerable=false)|596,757,602|96|
|DefineProperty (writable & enumerable=false & configurable=false)|594,693,305|98|
|DefineProperties (setter)|596,123,894|98|
|DefineProperties (setter & enumerable=false)|7,764,263|91|
|DefineProperties (setter & enumerable=false & configurable=false)|7,675,114|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":587949321.5357633,"samples":6},{"name":"Setter","opsSec":8392214.836011695,"samples":5},{"name":"Method","opsSec":588245439.940387,"samples":6},{"name":"DefineProperty (setter)","opsSec":588688905.9421128,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8422824.185883362,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8485589.099289842,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8464273.740366917,"samples":6},{"name":"DefineProperty (writable)","opsSec":594541336.9740262,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":596757601.7183518,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":594693304.8060102,"samples":6},{"name":"DefineProperties (setter)","opsSec":596123893.6296272,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7764263.3307999335,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7675114.035904546,"samples":5}]}-->
