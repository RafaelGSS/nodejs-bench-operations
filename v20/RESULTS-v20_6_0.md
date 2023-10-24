## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|731,209,149|87|
|Using dot notation|592,872,382|88|
|Using define property (writable)|2,497,038|87|
|Using define property initialized (writable)|3,167,014|88|
|Using define property (getter)|1,202,887|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Directly in the object","opsSec":731209149.3766941,"samples":7},{"name":"Using dot notation","opsSec":592872381.8342954,"samples":7},{"name":"Using define property (writable)","opsSec":2497037.9263287196,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3167014.4242175557,"samples":4},{"name":"Using define property (getter)","opsSec":1202887.02335217,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.008ms
array.push|100|0.039ms
new Array(length)|100|0.015ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.062ms
array.push|10,000|0.62ms
new Array(length)|10,000|3.571ms
array.push|1,000,000|41.695ms
new Array(length)|1,000,000|11.227ms
array.push|100,000,000|2,135.539ms
new Array(length)|100,000,000|5,906.364ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.397ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|35.182ms
new Array(length)|1,000,000|4.801ms
array.push|100,000,000|3,586.34ms
new Array(length)|100,000,000|5,580.673ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|342|79|
|Array.from|17|46|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":342.453395820359,"samples":3},{"name":"Array.from","opsSec":16.752813012086715,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,419|81|
|new Blob (1024)|407|63|
|text (128)|3,965|85|
|text (1024)|474|85|
|arrayBuffer (128)|3,900|85|
|arrayBuffer (1024)|481|89|
|slice (0, 64)|47,388|61|
|slice (0, 512)|12,605|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3418.963106132163,"samples":4},{"name":"new Blob (1024)","opsSec":406.87683143844373,"samples":2},{"name":"text (128)","opsSec":3965.125114380847,"samples":4},{"name":"text (1024)","opsSec":474.3891725624757,"samples":3},{"name":"arrayBuffer (128)","opsSec":3899.53325722216,"samples":3},{"name":"arrayBuffer (1024)","opsSec":480.9145223801807,"samples":2},{"name":"slice (0, 64)","opsSec":47387.961651614256,"samples":3},{"name":"slice (0, 512)","opsSec":12605.338311767131,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,781|61|
|[True conditional] Using constructor name|143,084|91|
|[True conditional] Check if property is valid then instanceof |146,696|96|
|[False conditional] Using instanceof only|716,377,961|93|
|[False conditional] Using constructor name|715,745,087|97|
|[False conditional] Check if property is valid then instanceof |716,847,530|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":172781.2767911401,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":143083.84982470988,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146695.8010803075,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":716377961.41641,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":715745086.9510347,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":716847529.6233689,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,834|92|
|crypto.verify('RSA-SHA256')|4,964|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4833.72161483356,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4963.834087982402,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,078,123|90|
|fromUnixToISOString(new Date())|1,672,522|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1078122.9730304799,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1672521.6984086721,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,101|83|
|Intl.DateTimeFormat().format(new Date())|9,035|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,765|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,334|68|
|Reusing Intl.DateTimeFormat()|493,281|93|
|Date.toLocaleDateString()|451,288|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,942|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10100.981864165306,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9035.408935494204,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12764.753872187754,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9333.957780847912,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":493280.9311215761,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":451288.3726430387,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11942.12180797785,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|717,300|97|
|Using brackets {}|731,997|94|
|Using '' + |734,412|98|
|Using date.toString()|793,721|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using String()","opsSec":717299.6399118021,"samples":6},{"name":"Using brackets {}","opsSec":731996.5965366189,"samples":4},{"name":"Using '' + ","opsSec":734412.4249236775,"samples":6},{"name":"Using date.toString()","opsSec":793720.6541232369,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,687,741|98|
|Using delete property (proto: null)|12,403,845|89|
|Using delete property (cached proto: null)|2,724,589|96|
|Using undefined assignment|716,902,936|95|
|Using undefined assignment (proto: null)|13,521,583|99|
|Using undefined property (cached proto: null)|714,048,444|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2687740.6024564286,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12403845.20852419,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2724589.488338577,"samples":6},{"name":"Using undefined assignment","opsSec":716902935.8002613,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13521582.785676407,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":714048444.2656342,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|176,027|59|
|NodeError|143,954|95|
|NodeError Range|143,258|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":176026.67085196736,"samples":3},{"name":"NodeError","opsSec":143954.08257414415,"samples":3},{"name":"NodeError Range","opsSec":143257.933499395,"samples":4}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,185,219|89|
|Function returning explicitly undefined|1,186,569|92|
|Function returning implicitly undefined|1,235,518|91|
|Function returning string|1,231,144|89|
|Function returning integer|1,176,152|89|
|Function returning float|1,212,205|91|
|Function returning functions|1,181,417|96|
|Function returning arrow functions|1,194,079|91|
|Function returning empty object|1,220,099|92|
|Function returning empty array|1,203,678|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1185219.4660492064,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1186569.4300861843,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1235518.2826906727,"samples":6},{"name":"Function returning string","opsSec":1231144.0152694238,"samples":6},{"name":"Function returning integer","opsSec":1176152.471330999,"samples":5},{"name":"Function returning float","opsSec":1212205.13077317,"samples":6},{"name":"Function returning functions","opsSec":1181417.1782881743,"samples":6},{"name":"Function returning arrow functions","opsSec":1194078.9744514867,"samples":6},{"name":"Function returning empty object","opsSec":1220099.4915525366,"samples":6},{"name":"Function returning empty array","opsSec":1203678.4082786553,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,152,705|92|
|using Array.includes (first item)|717,129,298|98|
|Using raw comparison|719,240,532|96|
|Using raw comparison (first item)|717,377,360|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":714152704.6485482,"samples":8},{"name":"using Array.includes (first item)","opsSec":717129297.6554948,"samples":7},{"name":"Using raw comparison","opsSec":719240531.8843725,"samples":6},{"name":"Using raw comparison (first item)","opsSec":717377360.0748997,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,409,617|93|
|Using Object.getOwnPropertyNames()|61,031,043|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":59409616.613411665,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":61031043.1745187,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|556,371,686|88|
|Length = 10_000 - Array.at|535,614,533|81|
|Length = 1_000_000 - Array.at|554,410,862|86|
|Length = 100 - Array[length - 1]|675,980,382|86|
|Length = 10_000 - Array[length - 1]|656,954,893|86|
|Length = 1_000_000 - Array[length - 1]|655,468,637|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":556371686.1959195,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":535614532.58916944,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":554410862.3460473,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":675980381.5846635,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":656954892.6558911,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":655468636.5593085,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,831,664|91|
|Object.create({})|1,705,280|85|
|Cached Empty.prototype|594,582,388|93|
|Empty.prototype|1,588,792|82|
|Empty class|1,041,748|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":57831664.10615759,"samples":6},{"name":"Object.create({})","opsSec":1705280.1462172822,"samples":4},{"name":"Cached Empty.prototype","opsSec":594582388.0398751,"samples":6},{"name":"Empty.prototype","opsSec":1588791.5314290123,"samples":4},{"name":"Empty class","opsSec":1041748.0535464233,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|581,345,878|90|
|Using optional chain (obj.field?.field2) (undefined)|596,526,063|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,607,054|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,789,253|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":581345878.3114809,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":596526063.1968056,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597607054.2267873,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":597789252.6926597,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|660,229,954|91|
|Using parseInt(x, 10) - big number (10 len)|661,138,237|90|
|Using + - small number (2 len)|656,051,010|89|
|Using + - big number (10 len)|663,364,888|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":660229953.7242391,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":661138237.3597826,"samples":6},{"name":"Using + - small number (2 len)","opsSec":656051010.2378299,"samples":7},{"name":"Using + - big number (10 len)","opsSec":663364887.6813575,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|629,185|68|
|Using ? operator to avoid rejection|700,395|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":629184.5869955153,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":700395.1972988029,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|595,002,787|85|
|Raw usage underscore usage|592,743,501|86|
|Manipulating private properties using #|586,983,092|89|
|Manipulating private properties using underscore(_)|607,252,467|90|
|Manipulating private properties using Symbol|594,339,468|90|
|Manipulating private properties using PrivateSymbol|27,178,962|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":595002787.308033,"samples":9},{"name":"Raw usage underscore usage","opsSec":592743500.9648696,"samples":8},{"name":"Manipulating private properties using #","opsSec":586983092.2205663,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":607252466.9459469,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":594339468.3647113,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27178961.514738984,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,734,330|97|
|Adding property in the object creation - small object|5,648,430|94|
|Adding property after the function creation - small class|176,732|84|
|Adding property in the function creation - small class|184,518|85|
|Adding property after the class creation - small class|158,762|84|
|Adding property in the class creation - small class|156,890|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5734330.113786355,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5648430.027525275,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":176732.17181246594,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":184517.7177116389,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":158761.92740075308,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":156889.54239822703,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|719,079,312|96|
|Getter|53,888,444|95|
|Method|717,347,886|92|
|DefineProperty (getter)|716,975,847|94|
|DefineProperty (getter & enumerable=false)|53,872,197|98|
|DefineProperty (getter & configurable=false)|718,454,918|95|
|DefineProperty (getter & enumerable=false & configurable=false)|53,025,353|96|
|DefineProperty (writable)|719,778,227|96|
|DefineProperty (writable & enumerable=false)|341,876,606|49|
|DefineProperty (writable & enumerable=false & configurable=false)|74,470,686|84|
|DefineProperties (getter)|31,868,986|91|
|DefineProperties (getter & enumerable=false)|54,084,739|95|
|DefineProperties (getter & enumerable=false & configurable=false)|53,664,694|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":719079311.649793,"samples":6},{"name":"Getter","opsSec":53888444.23038351,"samples":7},{"name":"Method","opsSec":717347885.718248,"samples":6},{"name":"DefineProperty (getter)","opsSec":716975847.0793816,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53872197.26636611,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":718454918.1208923,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53025353.274036065,"samples":7},{"name":"DefineProperty (writable)","opsSec":719778226.5643597,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":341876606.3201052,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":74470685.70312315,"samples":5},{"name":"DefineProperties (getter)","opsSec":31868986.165078115,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":54084738.61753091,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53664694.1343155,"samples":9}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,086,496|96|
|Setter|9,044,334|98|
|Method|587,090,126|96|
|DefineProperty (setter)|587,684,848|93|
|DefineProperty (setter & enumerable=false)|9,147,762|91|
|DefineProperty (setter & configurable=false)|9,151,494|99|
|DefineProperty (setter & enumerable=false & configurable=false)|9,166,941|97|
|DefineProperty (writable)|591,056,501|99|
|DefineProperty (writable & enumerable=false)|590,313,451|96|
|DefineProperty (writable & enumerable=false & configurable=false)|590,439,222|100|
|DefineProperties (setter)|591,982,185|98|
|DefineProperties (setter & enumerable=false)|9,250,789|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,564,473|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":587086496.096732,"samples":7},{"name":"Setter","opsSec":9044333.527708754,"samples":6},{"name":"Method","opsSec":587090125.9527116,"samples":7},{"name":"DefineProperty (setter)","opsSec":587684847.5056599,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9147761.593544949,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9151493.770952646,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9166941.388646396,"samples":6},{"name":"DefineProperty (writable)","opsSec":591056501.0212436,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590313450.7212458,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":590439222.2714646,"samples":6},{"name":"DefineProperties (setter)","opsSec":591982185.477544,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9250789.125626393,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8564473.466562102,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,791,521|91|
|Using replaceAll()|1,645,806|88|
|Using replaceAll(//g)|1,663,705|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1791520.7825858747,"samples":7},{"name":"Using replaceAll()","opsSec":1645805.9035964615,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1663704.7792189915,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,852,045|88|
|{ ...object, __proto__: null }|21,445,946|95|
|{ ...object, newProp: true }|579,059|78|
|structuredClone|185,448|97|
|JSON.parse + JSON.stringify|148,145|96|
|loop + object.keys starting with {}|356,080|95|
|loop + object.keys starting with { __proto__: null }|498,191|95|
|loop + object.keys starting with { randomProp: true }|378,674|94|
|object.keys + reduce(FN, {})|356,940|94|
|object.keys + reduce(FN, { __proto__: null })|491,904|97|
|object.keys + reduce(FN, { newProp: true })|378,627|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":20852045.286312386,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":21445946.428365417,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":579059.1843859957,"samples":3},{"name":"structuredClone","opsSec":185447.93721465548,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":148144.7429208793,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":356079.70596149063,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":498190.7157424194,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378674.1067255108,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":356939.59904279426,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":491904.47030915716,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":378626.50963322486,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,002|87|
|Sort using first char|880,323|93|
|Sort using localeCompare|790,910|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":172002.1625170336,"samples":3},{"name":"Sort using first char","opsSec":880322.9296363433,"samples":4},{"name":"Sort using localeCompare","opsSec":790910.0159675602,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,294|94|
|{...smallObject} - Total keys: 2|71,130,626|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,664|98|
|{ ...bigObject, ...anotherBigObject }|819|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,042,454|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,711,503|94|
|{ ...smallObject, ...anotherSmallObject }|14,749,177|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1294.1321880189432,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":71130625.61987224,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1317.8433796728925,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3663.6240932052974,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":819.2176963140357,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8042454.468810359,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19711502.525417585,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14749177.046854941,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,317|86|
|streams.web.Readable reading 1e3 * "some data"|553|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1317.1877251747624,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":553.092195089505,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,497|91|
|streams.web.WritableStream writing 1e3 * "some data"|931|50|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3496.889795193867,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":930.8153449579723,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,010,797|96|
|Using backtick (`)|707,531,166|94|
|Using array.join|6,572,673|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":712010797.3833041,"samples":6},{"name":"Using backtick (`)","opsSec":707531165.6470691,"samples":7},{"name":"Using array.join","opsSec":6572673.145338115,"samples":8}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,478,564|94|
|Using indexof|714,403,477|98|
|Using RegExp.test|11,052,755|97|
|Using RegExp.text with cached regex pattern|11,673,266|98|
|Using new RegExp.test|3,264,592|98|
|Using new RegExp.test with cached regex pattern|3,940,151|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":714478563.7332283,"samples":6},{"name":"Using indexof","opsSec":714403476.5036268,"samples":7},{"name":"Using RegExp.test","opsSec":11052754.512865992,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11673265.827805009,"samples":7},{"name":"Using new RegExp.test","opsSec":3264592.0663516186,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3940150.5454126983,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|708,772,253|96|
|Using this|713,388,564|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":708772253.4364412,"samples":7},{"name":"Using this","opsSec":713388563.5197662,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,722,311|86|
|Date.now()|14,303,761|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":6722310.676355465,"samples":6},{"name":"Date.now()","opsSec":14303760.729479246,"samples":5}]}-->
