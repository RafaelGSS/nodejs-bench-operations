## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|578,420,055|90|
|Using dot notation|610,496,354|91|
|Using define property (writable)|2,621,369|91|
|Using define property initialized (writable)|3,200,454|90|
|Using define property (getter)|1,345,349|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":578420054.7192351,"samples":5},{"name":"Using dot notation","opsSec":610496353.9883949,"samples":7},{"name":"Using define property (writable)","opsSec":2621369.2016900238,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3200454.0926870955,"samples":5},{"name":"Using define property (getter)","opsSec":1345348.8107370017,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.112ms
new Array(length)|100|0.01ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.513ms
new Array(length)|10,000|0.246ms
array.push|1,000,000|44.389ms
new Array(length)|1,000,000|7.917ms
array.push|100,000,000|2,145.47ms
new Array(length)|100,000,000|5,185.389ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.071ms
new Array(length)|100|0.013ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.728ms
new Array(length)|10,000|4.425ms
array.push|1,000,000|350.022ms
new Array(length)|1,000,000|5.059ms
array.push|100,000,000|2,765.408ms
new Array(length)|100,000,000|5,787.415ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|266|79|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":266.1351744276534,"samples":2},{"name":"Array.from","opsSec":11.869543974504882,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,244|85|
|new Blob (1024)|412|68|
|text (128)|25,962|76|
|text (1024)|15,182|83|
|arrayBuffer (128)|31,679|86|
|arrayBuffer (1024)|18,255|82|
|slice (0, 64)|64,060|75|
|slice (0, 512)|31,705|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3244.2850093031743,"samples":5},{"name":"new Blob (1024)","opsSec":412.3146151216973,"samples":2},{"name":"text (128)","opsSec":25961.680771526397,"samples":4},{"name":"text (1024)","opsSec":15182.12769293094,"samples":3},{"name":"arrayBuffer (128)","opsSec":31679.10356252593,"samples":5},{"name":"arrayBuffer (1024)","opsSec":18255.25050482964,"samples":3},{"name":"slice (0, 64)","opsSec":64059.91729934406,"samples":3},{"name":"slice (0, 512)","opsSec":31705.251264971273,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,435|52|
|[True conditional] Using constructor name|115,781|89|
|[True conditional] Check if property is valid then instanceof |114,891|86|
|[False conditional] Using instanceof only|644,589,386|90|
|[False conditional] Using constructor name|642,673,950|88|
|[False conditional] Check if property is valid then instanceof |651,029,733|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":144435.05443439886,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":115780.59939490957,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":114890.62797608816,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":644589386.3129027,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":642673949.9575279,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":651029732.7016208,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,326|89|
|crypto.verify('RSA-SHA256')|17,758|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":18325.51164637749,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":17757.770523861043,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,453,791|83|
|fromUnixToISOString(new Date())|1,149,492|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1453790.7450743609,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1149492.0473749659,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,031|82|
|Intl.DateTimeFormat().format(new Date())|5,127|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,383|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,452|73|
|Reusing Intl.DateTimeFormat()|378,093|74|
|Date.toLocaleDateString()|386,146|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,053|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5030.7795510497945,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5126.59223732081,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5382.799320503527,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5452.415862181339,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":378093.22215500183,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":386145.5196160076,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6053.482862658436,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|546,155|91|
|Using brackets {}|576,990|92|
|Using '' + |578,107|92|
|Using date.toString()|622,211|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":546155.2684204649,"samples":3},{"name":"Using brackets {}","opsSec":576989.8518640244,"samples":4},{"name":"Using '' + ","opsSec":578107.3218892269,"samples":5},{"name":"Using date.toString()","opsSec":622211.0685042365,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,419,772|94|
|Using delete property (proto: null)|15,267,647|95|
|Using delete property (cached proto: null)|2,409,768|96|
|Using undefined assignment|591,525,300|99|
|Using undefined assignment (proto: null)|16,898,732|94|
|Using undefined property (cached proto: null)|596,768,713|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2419771.6556838243,"samples":5},{"name":"Using delete property (proto: null)","opsSec":15267646.660557212,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2409767.736943987,"samples":6},{"name":"Using undefined assignment","opsSec":591525299.5037687,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":16898732.41796002,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":596768712.6964786,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,130|54|
|NodeError|129,077|90|
|NodeError Range|130,091|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":165129.96470282692,"samples":4},{"name":"NodeError","opsSec":129076.96850511465,"samples":3},{"name":"NodeError Range","opsSec":130090.88823008267,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,052,262|85|
|Function returning explicitly undefined|976,911|85|
|Function returning implicitly undefined|1,057,475|87|
|Function returning string|1,053,573|81|
|Function returning integer|1,049,404|87|
|Function returning float|1,053,170|88|
|Function returning functions|1,019,629|86|
|Function returning arrow functions|1,034,489|88|
|Function returning empty object|1,027,462|87|
|Function returning empty array|1,031,754|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1052262.248917175,"samples":6},{"name":"Function returning explicitly undefined","opsSec":976910.8544883224,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1057474.5621459591,"samples":3},{"name":"Function returning string","opsSec":1053573.2532060803,"samples":4},{"name":"Function returning integer","opsSec":1049404.0106799044,"samples":6},{"name":"Function returning float","opsSec":1053170.4771737237,"samples":6},{"name":"Function returning functions","opsSec":1019629.3022619856,"samples":5},{"name":"Function returning arrow functions","opsSec":1034489.2442234678,"samples":4},{"name":"Function returning empty object","opsSec":1027461.7455570627,"samples":4},{"name":"Function returning empty array","opsSec":1031753.9565446102,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|587,321,522|94|
|using Array.includes (first item)|585,314,163|95|
|Using raw comparison|574,429,385|93|
|Using raw comparison (first item)|587,417,043|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":587321521.5237931,"samples":6},{"name":"using Array.includes (first item)","opsSec":585314162.5812323,"samples":7},{"name":"Using raw comparison","opsSec":574429385.4509808,"samples":8},{"name":"Using raw comparison (first item)","opsSec":587417042.9855671,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,342,638|87|
|Using Object.getOwnPropertyNames()|45,868,989|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":44342637.757409215,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":45868988.78560303,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,564,583|88|
|Length = 10_000 - Array.at|15,742,770|90|
|Length = 1_000_000 - Array.at|15,546,188|89|
|Length = 100 - Array[length - 1]|736,160,704|87|
|Length = 10_000 - Array[length - 1]|750,915,790|84|
|Length = 1_000_000 - Array[length - 1]|751,760,134|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15564583.255655084,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":15742770.419336373,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":15546188.197709,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":736160703.5384701,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":750915790.1934425,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":751760133.9647564,"samples":5}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,374,367|94|
|Object.create({})|1,250,855|79|
|Cached Empty.prototype|715,010,144|97|
|Empty.prototype|1,294,328|75|
|Empty class|923,125|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41374367.25893699,"samples":6},{"name":"Object.create({})","opsSec":1250855.3394375884,"samples":3},{"name":"Cached Empty.prototype","opsSec":715010143.7508672,"samples":12},{"name":"Empty.prototype","opsSec":1294327.6540757637,"samples":3},{"name":"Empty class","opsSec":923125.0224780288,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|744,949,557|86|
|Using optional chain (obj.field?.field2) (undefined)|765,281,611|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|761,766,591|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|759,524,116|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":744949556.9000267,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":765281611.2358072,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":761766590.7455347,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":759524115.5189598,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|215,976,297|90|
|Using parseInt(x, 10) - big number (10 len)|15,236,949|95|
|Using + - small number (2 len)|595,612,747|99|
|Using + - big number (10 len)|594,957,443|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":215976297.1850133,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15236948.71961461,"samples":7},{"name":"Using + - small number (2 len)","opsSec":595612747.1817197,"samples":6},{"name":"Using + - big number (10 len)","opsSec":594957443.2804207,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|747,626|72|
|Using ? operator to avoid rejection|841,778|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:07:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":747626.3672193522,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":841777.5383986058,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,180,042|84|
|Raw usage underscore usage|5,544,572|82|
|Manipulating private properties using #|2,144,063|84|
|Manipulating private properties using underscore(_)|636,723,776|84|
|Manipulating private properties using Symbol|623,418,494|80|
|Manipulating private properties using PrivateSymbol|27,500,289|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":7180041.5340080485,"samples":5},{"name":"Raw usage underscore usage","opsSec":5544571.57813315,"samples":5},{"name":"Manipulating private properties using #","opsSec":2144062.9614022668,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":636723776.0475416,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":623418494.4172906,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27500289.279632654,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,792,429|92|
|Adding property in the object creation - small object|2,753,250|91|
|Adding property after the function creation - small class|185,482|82|
|Adding property in the function creation - small class|186,509|83|
|Adding property after the class creation - small class|152,136|81|
|Adding property in the class creation - small class|151,820|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2792428.649220019,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":2753250.3081335323,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":185481.75569302597,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":186508.907688296,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":152136.47579096892,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":151819.5428561406,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|713,820,052|98|
|Getter|58,412,926|93|
|Method|714,466,993|97|
|DefineProperty (getter)|713,982,454|97|
|DefineProperty (getter & enumerable=false)|59,329,553|93|
|DefineProperty (getter & configurable=false)|715,678,236|97|
|DefineProperty (getter & enumerable=false & configurable=false)|59,285,582|95|
|DefineProperty (writable)|715,542,057|93|
|DefineProperty (writable & enumerable=false)|716,101,452|98|
|DefineProperty (writable & enumerable=false & configurable=false)|232,363,169|35|
|DefineProperties (getter)|36,996,616|88|
|DefineProperties (getter & enumerable=false)|58,831,476|90|
|DefineProperties (getter & enumerable=false & configurable=false)|59,062,692|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":713820052.1079543,"samples":7},{"name":"Getter","opsSec":58412925.75124048,"samples":8},{"name":"Method","opsSec":714466993.0081675,"samples":7},{"name":"DefineProperty (getter)","opsSec":713982453.8313644,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59329552.84042154,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":715678235.6943243,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":59285581.52703302,"samples":6},{"name":"DefineProperty (writable)","opsSec":715542056.688089,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":716101451.575137,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":232363168.5723853,"samples":8},{"name":"DefineProperties (getter)","opsSec":36996615.931834735,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":58831475.50469733,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59062691.53561097,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|589,645,335|97|
|Setter|7,695,172|96|
|Method|586,079,292|95|
|DefineProperty (setter)|593,027,477|97|
|DefineProperty (setter & enumerable=false)|7,653,093|98|
|DefineProperty (setter & configurable=false)|7,606,648|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,728,987|94|
|DefineProperty (writable)|592,443,448|90|
|DefineProperty (writable & enumerable=false)|471,252,757|77|
|DefineProperty (writable & enumerable=false & configurable=false)|106,992,809|84|
|DefineProperties (setter)|85,437,903|87|
|DefineProperties (setter & enumerable=false)|7,552,220|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,682,471|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Setter (class)","opsSec":589645335.1745175,"samples":6},{"name":"Setter","opsSec":7695172.185424053,"samples":6},{"name":"Method","opsSec":586079291.5281724,"samples":7},{"name":"DefineProperty (setter)","opsSec":593027477.2834554,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7653093.28869773,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7606647.783403639,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7728986.865152112,"samples":7},{"name":"DefineProperty (writable)","opsSec":592443447.8463371,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":471252757.05117553,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106992808.77135289,"samples":5},{"name":"DefineProperties (setter)","opsSec":85437903.46089074,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7552220.490497522,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7682470.903433837,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,723,174|83|
|Using replaceAll()|1,618,899|89|
|Using replaceAll(//g)|1,595,479|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1723174.165507909,"samples":3},{"name":"Using replaceAll()","opsSec":1618898.8210337749,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1595479.3580818225,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,950,216|95|
|{ ...object, __proto__: null }|14,257,341|97|
|{ ...object, newProp: true }|505,126|88|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|139,893|95|
|loop + object.keys starting with {}|384,293|98|
|loop + object.keys starting with { __proto__: null }|548,422|95|
|loop + object.keys starting with { randomProp: true }|400,537|96|
|object.keys + reduce(FN, {})|387,579|94|
|object.keys + reduce(FN, { __proto__: null })|581,221|95|
|object.keys + reduce(FN, { newProp: true })|408,639|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":13950215.91788779,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":14257341.213834552,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":505125.8020624567,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":139893.03950694785,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":384292.83723439765,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":548421.9628687573,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":400537.08337436273,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":387578.5523502446,"samples":9},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":581220.8393654302,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":408639.36108788726,"samples":7}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|142,215|89|
|Sort using first char|638,403|86|
|Sort using localeCompare|321,397|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":142215.44768839478,"samples":5},{"name":"Sort using first char","opsSec":638403.0394311722,"samples":5},{"name":"Sort using localeCompare","opsSec":321397.42345434445,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,407|95|
|{...smallObject} - Total keys: 2|66,070,827|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,562|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,593|97|
|{ ...bigObject, ...anotherBigObject }|841|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,328,097|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,721,069|97|
|{ ...smallObject, ...anotherSmallObject }|16,088,142|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1406.9196979946287,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":66070826.63284395,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1561.5480090610718,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4593.393839182266,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":840.8685665681868,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9328097.498925066,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":23721068.74250074,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16088141.81303579,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,566|86|
|streams.web.Readable reading 1e3 * "some data"|366|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1566.2343827671004,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":365.6778195116347,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,482|84|
|streams.web.WritableStream writing 1e3 * "some data"|627|52|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:46:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2482.208249953768,"samples":9},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":627.2136520287481,"samples":2}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,269,036|96|
|Using backtick (`)|714,985,899|98|
|Using array.join|6,404,049|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":710269036.4908843,"samples":8},{"name":"Using backtick (`)","opsSec":714985898.995559,"samples":6},{"name":"Using array.join","opsSec":6404049.388967138,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,555,574|97|
|Using indexof|592,289,512|96|
|Using RegExp.test|11,000,870|99|
|Using RegExp.text with cached regex pattern|11,469,963|99|
|Using new RegExp.test|3,732,153|92|
|Using new RegExp.test with cached regex pattern|4,291,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11555574.169576624,"samples":6},{"name":"Using indexof","opsSec":592289512.2118534,"samples":7},{"name":"Using RegExp.test","opsSec":11000869.594498517,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11469962.556177668,"samples":6},{"name":"Using new RegExp.test","opsSec":3732152.9224065673,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4291110.282419909,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|132,039,595|94|
|Using this|131,679,827|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:58:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":132039594.6616472,"samples":9},{"name":"Using this","opsSec":131679827.32546625,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,576,479|96|
|Date.now()|14,326,424|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7576479.405840729,"samples":8},{"name":"Date.now()","opsSec":14326423.660767758,"samples":4}]}-->
