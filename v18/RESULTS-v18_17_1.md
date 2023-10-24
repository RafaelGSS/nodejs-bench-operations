## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|697,188,673|95|
|Using dot notation|710,727,639|95|
|Using define property (writable)|2,942,769|97|
|Using define property initialized (writable)|3,798,182|98|
|Using define property (getter)|1,507,887|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":697188673.2670029,"samples":6},{"name":"Using dot notation","opsSec":710727639.4230081,"samples":7},{"name":"Using define property (writable)","opsSec":2942769.345099475,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3798182.0898761917,"samples":6},{"name":"Using define property (getter)","opsSec":1507887.4485864257,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.046ms
new Array(length)|100|0.014ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.555ms
new Array(length)|10,000|0.292ms
array.push|1,000,000|52.362ms
new Array(length)|1,000,000|12.25ms
array.push|100,000,000|2,279.701ms
new Array(length)|100,000,000|5,690.034ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.021ms
new Array(length)|100|0.014ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.773ms
new Array(length)|10,000|5.147ms
array.push|1,000,000|397.242ms
new Array(length)|1,000,000|6.31ms
array.push|100,000,000|3,328.688ms
new Array(length)|100,000,000|6,572.753ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|330|78|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":329.76407659061186,"samples":5},{"name":"Array.from","opsSec":15.993745695181119,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,214|87|
|new Blob (1024)|410|68|
|text (128)|29,299|69|
|text (1024)|20,666|82|
|arrayBuffer (128)|29,235|83|
|arrayBuffer (1024)|21,169|84|
|slice (0, 64)|58,968|75|
|slice (0, 512)|33,465|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3214.3051120811683,"samples":6},{"name":"new Blob (1024)","opsSec":410.08539203581006,"samples":2},{"name":"text (128)","opsSec":29299.195583352168,"samples":4},{"name":"text (1024)","opsSec":20666.499899484636,"samples":5},{"name":"arrayBuffer (128)","opsSec":29235.296747656274,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21169.069064396866,"samples":3},{"name":"slice (0, 64)","opsSec":58968.36729897568,"samples":3},{"name":"slice (0, 512)","opsSec":33464.8607644175,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,124|58|
|[True conditional] Using constructor name|146,418|96|
|[True conditional] Check if property is valid then instanceof |147,887|93|
|[False conditional] Using instanceof only|711,593,321|97|
|[False conditional] Using constructor name|712,178,894|97|
|[False conditional] Check if property is valid then instanceof |711,416,929|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186124.05718249932,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":146417.50688111797,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":147887.4033749991,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":711593321.3603971,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":712178894.1236073,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711416929.4315556,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,746|93|
|crypto.verify('RSA-SHA256')|3,793|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3745.6344835668474,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3793.1137737762706,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,377,495|92|
|fromUnixToISOString(new Date())|1,115,384|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1377495.0961296447,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1115383.9137975923,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,908|84|
|Intl.DateTimeFormat().format(new Date())|9,827|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,973|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,543|70|
|Reusing Intl.DateTimeFormat()|535,924|99|
|Date.toLocaleDateString()|553,640|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,756|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11907.631318002828,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9827.142329688615,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14973.129511803994,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10543.337055403754,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":535923.6140649917,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":553639.6248201143,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12755.51735009754,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|661,274|95|
|Using brackets {}|673,249|97|
|Using '' + |667,374|93|
|Using date.toString()|718,623|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":661274.164746456,"samples":5},{"name":"Using brackets {}","opsSec":673249.192917981,"samples":4},{"name":"Using '' + ","opsSec":667373.980590718,"samples":4},{"name":"Using date.toString()","opsSec":718622.5747590695,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,493,554|94|
|Using delete property (proto: null)|11,033,157|95|
|Using delete property (cached proto: null)|2,517,743|95|
|Using undefined assignment|800,597,339|98|
|Using undefined assignment (proto: null)|12,612,484|88|
|Using undefined property (cached proto: null)|779,248,015|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2493554.4995678198,"samples":6},{"name":"Using delete property (proto: null)","opsSec":11033156.59870409,"samples":4},{"name":"Using delete property (cached proto: null)","opsSec":2517742.9235036816,"samples":5},{"name":"Using undefined assignment","opsSec":800597339.0501591,"samples":9},{"name":"Using undefined assignment (proto: null)","opsSec":12612484.47556735,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":779248014.9616574,"samples":10}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,860|60|
|NodeError|142,063|94|
|NodeError Range|143,520|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":180859.70281185003,"samples":4},{"name":"NodeError","opsSec":142063.38300357747,"samples":3},{"name":"NodeError Range","opsSec":143519.63741592094,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,078,618|90|
|Function returning explicitly undefined|1,043,545|92|
|Function returning implicitly undefined|1,084,750|90|
|Function returning string|1,060,288|89|
|Function returning integer|1,051,334|91|
|Function returning float|1,077,247|90|
|Function returning functions|1,032,071|90|
|Function returning arrow functions|1,023,108|89|
|Function returning empty object|1,078,924|89|
|Function returning empty array|1,077,363|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1078618.0096200798,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1043544.5574509924,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1084750.110526481,"samples":6},{"name":"Function returning string","opsSec":1060288.3423006202,"samples":5},{"name":"Function returning integer","opsSec":1051333.7942963452,"samples":3},{"name":"Function returning float","opsSec":1077246.8358370867,"samples":8},{"name":"Function returning functions","opsSec":1032071.1413321974,"samples":6},{"name":"Function returning arrow functions","opsSec":1023107.9517148323,"samples":5},{"name":"Function returning empty object","opsSec":1078924.4198901362,"samples":7},{"name":"Function returning empty array","opsSec":1077363.1328153473,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|697,150,338|96|
|using Array.includes (first item)|709,783,528|97|
|Using raw comparison|711,237,636|98|
|Using raw comparison (first item)|708,936,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":697150337.7325624,"samples":5},{"name":"using Array.includes (first item)","opsSec":709783527.6144496,"samples":7},{"name":"Using raw comparison","opsSec":711237636.215471,"samples":14},{"name":"Using raw comparison (first item)","opsSec":708936568.5131605,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,162,194|84|
|Using Object.getOwnPropertyNames()|53,718,557|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":51162194.39711842,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":53718557.43304064,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,021,028|87|
|Length = 10_000 - Array.at|13,402,118|94|
|Length = 1_000_000 - Array.at|13,568,387|93|
|Length = 100 - Array[length - 1]|601,287,145|95|
|Length = 10_000 - Array[length - 1]|596,452,224|94|
|Length = 1_000_000 - Array[length - 1]|597,241,452|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13021028.217273327,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":13402117.765089028,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":13568387.358592471,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":601287144.799657,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":596452224.0640281,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":597241451.880043,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,056,562|85|
|Object.create({})|801,872|69|
|Cached Empty.prototype|767,828,973|84|
|Empty.prototype|897,409|75|
|Empty class|641,563|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":38056562.1839283,"samples":6},{"name":"Object.create({})","opsSec":801872.4202583049,"samples":4},{"name":"Cached Empty.prototype","opsSec":767828972.6726581,"samples":6},{"name":"Empty.prototype","opsSec":897408.9312529226,"samples":3},{"name":"Empty class","opsSec":641563.3157596869,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|625,970,363|88|
|Using optional chain (obj.field?.field2) (undefined)|609,376,283|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|618,026,572|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|611,824,455|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":625970362.673398,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":609376283.0767983,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":618026571.8937479,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":611824455.0265129,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,082,754|95|
|Using parseInt(x, 10) - big number (10 len)|13,913,402|95|
|Using + - small number (2 len)|711,339,290|98|
|Using + - big number (10 len)|710,513,763|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157082753.90944093,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13913401.60636825,"samples":8},{"name":"Using + - small number (2 len)","opsSec":711339290.2075824,"samples":7},{"name":"Using + - big number (10 len)","opsSec":710513763.0329398,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|523,595|72|
|Using ? operator to avoid rejection|591,275|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":523594.8467191659,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":591275.2755704892,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|194,704,473|82|
|Raw usage underscore usage|198,323,036|91|
|Manipulating private properties using #|123,723,357|83|
|Manipulating private properties using underscore(_)|114,555,898|89|
|Manipulating private properties using Symbol|106,979,664|86|
|Manipulating private properties using PrivateSymbol|20,738,603|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":194704473.0440749,"samples":6},{"name":"Raw usage underscore usage","opsSec":198323036.18544707,"samples":8},{"name":"Manipulating private properties using #","opsSec":123723356.7964314,"samples":11},{"name":"Manipulating private properties using underscore(_)","opsSec":114555897.59113681,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":106979663.50869668,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":20738603.17155252,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,972,476|97|
|Adding property in the object creation - small object|1,975,821|93|
|Adding property after the function creation - small class|144,460|85|
|Adding property in the function creation - small class|147,816|86|
|Adding property after the class creation - small class|118,742|79|
|Adding property in the class creation - small class|117,516|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1972475.7891704743,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1975821.2904172842,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":144459.80386044405,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":147815.92381031628,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":118742.20199153233,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":117516.429047764,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|712,216,150|97|
|Getter|52,564,856|93|
|Method|708,360,023|96|
|DefineProperty (getter)|714,084,465|95|
|DefineProperty (getter & enumerable=false)|52,629,054|94|
|DefineProperty (getter & configurable=false)|714,634,159|96|
|DefineProperty (getter & enumerable=false & configurable=false)|52,614,972|97|
|DefineProperty (writable)|714,495,907|96|
|DefineProperty (writable & enumerable=false)|715,081,545|99|
|DefineProperty (writable & enumerable=false & configurable=false)|714,718,511|93|
|DefineProperties (getter)|52,840,073|97|
|DefineProperties (getter & enumerable=false)|52,595,657|95|
|DefineProperties (getter & enumerable=false & configurable=false)|52,702,451|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":712216150.1849929,"samples":8},{"name":"Getter","opsSec":52564855.89829662,"samples":6},{"name":"Method","opsSec":708360023.4652878,"samples":7},{"name":"DefineProperty (getter)","opsSec":714084465.1485329,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52629054.440268345,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":714634159.0693209,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52614972.03345306,"samples":5},{"name":"DefineProperty (writable)","opsSec":714495906.7944237,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":715081545.0773125,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":714718510.9691728,"samples":6},{"name":"DefineProperties (getter)","opsSec":52840073.16234073,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52595657.47130039,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52702450.67488853,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|379,928,546|93|
|Setter|6,252,856|84|
|Method|394,899,558|93|
|DefineProperty (setter)|394,570,479|95|
|DefineProperty (setter & enumerable=false)|6,288,935|95|
|DefineProperty (setter & configurable=false)|6,405,530|89|
|DefineProperty (setter & enumerable=false & configurable=false)|6,247,006|96|
|DefineProperty (writable)|586,034,650|94|
|DefineProperty (writable & enumerable=false)|492,518,182|87|
|DefineProperty (writable & enumerable=false & configurable=false)|68,653,988|82|
|DefineProperties (setter)|51,476,021|87|
|DefineProperties (setter & enumerable=false)|6,260,336|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,234,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":379928546.49337554,"samples":6},{"name":"Setter","opsSec":6252855.6792115355,"samples":6},{"name":"Method","opsSec":394899558.0374539,"samples":8},{"name":"DefineProperty (setter)","opsSec":394570479.29677445,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6288934.693085386,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6405529.913741313,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6247005.9578157645,"samples":5},{"name":"DefineProperty (writable)","opsSec":586034649.967778,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":492518181.74035215,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68653987.86405645,"samples":6},{"name":"DefineProperties (setter)","opsSec":51476020.824865684,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6260336.365752524,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6234452.503545127,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,697,665|90|
|Using replaceAll()|1,638,665|98|
|Using replaceAll(//g)|1,559,961|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1697665.285439036,"samples":6},{"name":"Using replaceAll()","opsSec":1638664.7801619328,"samples":9},{"name":"Using replaceAll(//g)","opsSec":1559960.6055223013,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,106,684|93|
|{ ...object, __proto__: null }|15,274,991|95|
|{ ...object, newProp: true }|449,041|78|
|structuredClone|178,343|96|
|JSON.parse + JSON.stringify|143,616|91|
|loop + object.keys starting with {}|670,125|96|
|loop + object.keys starting with { __proto__: null }|413,038|96|
|loop + object.keys starting with { randomProp: true }|305,773|94|
|object.keys + reduce(FN, {})|293,787|94|
|object.keys + reduce(FN, { __proto__: null })|411,605|95|
|object.keys + reduce(FN, { newProp: true })|313,683|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15106684.44706906,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15274990.712962182,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":449041.0319354011,"samples":3},{"name":"structuredClone","opsSec":178343.02407880692,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143616.160702538,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":670124.5119239046,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":413038.25979211787,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":305772.6044440031,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":293787.4716147355,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":411604.5858491956,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":313683.3836347075,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,910|97|
|Sort using first char|916,881|94|
|Sort using localeCompare|805,103|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":194909.64035435478,"samples":4},{"name":"Sort using first char","opsSec":916880.6269323294,"samples":5},{"name":"Sort using localeCompare","opsSec":805102.7724834387,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,127|80|
|{...smallObject} - Total keys: 2|58,392,893|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,206|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,171|83|
|{ ...bigObject, ...anotherBigObject }|747|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,898,753|82|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,836,130|87|
|{ ...smallObject, ...anotherSmallObject }|13,781,999|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1127.423931383736,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":58392892.69958252,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1206.369680743507,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3170.5005598445414,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":746.9290753107937,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8898752.95286418,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22836130.12847688,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13781999.289870199,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,517|87|
|streams.web.Readable reading 1e3 * "some data"|412|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1517.1825249290305,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":411.56830170768137,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,443|92|
|streams.web.WritableStream writing 1e3 * "some data"|709|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3443.4756874801633,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":709.4233537283618,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|768,167,593|89|
|Using backtick (`)|771,200,341|91|
|Using array.join|5,677,096|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":768167592.983268,"samples":8},{"name":"Using backtick (`)","opsSec":771200340.8412478,"samples":9},{"name":"Using array.join","opsSec":5677095.820128852,"samples":8}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|572,261,950|94|
|Using indexof|592,834,927|93|
|Using RegExp.test|11,073,476|99|
|Using RegExp.text with cached regex pattern|11,721,758|97|
|Using new RegExp.test|3,057,441|97|
|Using new RegExp.test with cached regex pattern|3,487,838|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":572261949.8094096,"samples":5},{"name":"Using indexof","opsSec":592834927.4163827,"samples":8},{"name":"Using RegExp.test","opsSec":11073475.890387768,"samples":10},{"name":"Using RegExp.text with cached regex pattern","opsSec":11721758.012208402,"samples":4},{"name":"Using new RegExp.test","opsSec":3057441.417222986,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3487838.0069420636,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,453,571|93|
|Using this|131,926,520|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":131453570.736506,"samples":6},{"name":"Using this","opsSec":131926520.25610124,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,127,931|91|
|Date.now()|12,510,769|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6127931.319214611,"samples":5},{"name":"Date.now()","opsSec":12510768.762470616,"samples":6}]}-->
