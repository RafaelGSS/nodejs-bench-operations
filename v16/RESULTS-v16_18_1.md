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
|Error|167,833|53|
|NodeError|131,567|97|
|NodeError Range|130,470|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":167833.27429839707,"samples":4},{"name":"NodeError","opsSec":131567.30494815475,"samples":3},{"name":"NodeError Range","opsSec":130469.91908193224,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,252,737|92|
|Function returning explicitly undefined|1,254,814|95|
|Function returning implicitly undefined|1,269,854|94|
|Function returning string|1,232,438|97|
|Function returning integer|1,280,857|93|
|Function returning float|1,257,636|97|
|Function returning functions|1,237,350|97|
|Function returning arrow functions|1,256,851|98|
|Function returning empty object|1,276,047|98|
|Function returning empty array|1,261,271|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1252737.2345831003,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1254814.049406034,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1269854.3195056675,"samples":7},{"name":"Function returning string","opsSec":1232437.5828259175,"samples":7},{"name":"Function returning integer","opsSec":1280856.6808250404,"samples":5},{"name":"Function returning float","opsSec":1257635.5028520224,"samples":5},{"name":"Function returning functions","opsSec":1237349.8860679846,"samples":7},{"name":"Function returning arrow functions","opsSec":1256851.1097524925,"samples":3},{"name":"Function returning empty object","opsSec":1276046.6928292823,"samples":6},{"name":"Function returning empty array","opsSec":1261271.1422705783,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,162,332|92|
|using Array.includes (first item)|712,477,914|96|
|Using raw comparison|713,029,394|97|
|Using raw comparison (first item)|712,999,282|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":711162331.5329621,"samples":8},{"name":"using Array.includes (first item)","opsSec":712477914.3427609,"samples":6},{"name":"Using raw comparison","opsSec":713029393.9479936,"samples":12},{"name":"Using raw comparison (first item)","opsSec":712999282.4611069,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,264,265|89|
|Using Object.getOwnPropertyNames()|54,279,987|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":56264265.27610437,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":54279986.92464491,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,827,110|96|
|Length = 10_000 - Array.at|18,732,067|99|
|Length = 1_000_000 - Array.at|18,811,680|95|
|Length = 100 - Array[length - 1]|592,498,894|96|
|Length = 10_000 - Array[length - 1]|591,802,220|95|
|Length = 1_000_000 - Array[length - 1]|590,519,595|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18827110.174413193,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":18732067.27626797,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18811680.418919012,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":592498894.0184777,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":591802220.2947268,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":590519595.1301861,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,383,786|94|
|Object.create({})|1,213,246|77|
|Cached Empty.prototype|713,715,824|96|
|Empty.prototype|1,243,383|71|
|Empty class|847,339|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40383785.76435981,"samples":8},{"name":"Object.create({})","opsSec":1213245.9379225434,"samples":4},{"name":"Cached Empty.prototype","opsSec":713715823.887349,"samples":8},{"name":"Empty.prototype","opsSec":1243382.9268439396,"samples":3},{"name":"Empty class","opsSec":847338.8530157141,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,126,728|95|
|Using optional chain (obj.field?.field2) (undefined)|715,326,884|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,293,772|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,163,258|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":712126727.7953262,"samples":10},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":715326883.6252136,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":714293771.5263095,"samples":12},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":713163257.7668428,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,643,196|89|
|Using parseInt(x, 10) - big number (10 len)|15,208,836|97|
|Using + - small number (2 len)|593,859,553|98|
|Using + - big number (10 len)|591,605,663|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":210643195.8451736,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15208836.208415875,"samples":6},{"name":"Using + - small number (2 len)","opsSec":593859552.5389,"samples":8},{"name":"Using + - big number (10 len)","opsSec":591605662.7159547,"samples":12}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|708,313|76|
|Using ? operator to avoid rejection|774,452|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":708313.2041818358,"samples":5},{"name":"Using ? operator to avoid rejection","opsSec":774451.8916146025,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,273,549|88|
|Raw usage underscore usage|6,091,196|87|
|Manipulating private properties using #|2,200,023|91|
|Manipulating private properties using underscore(_)|574,360,397|85|
|Manipulating private properties using Symbol|595,716,395|90|
|Manipulating private properties using PrivateSymbol|20,891,742|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":7273549.047601046,"samples":8},{"name":"Raw usage underscore usage","opsSec":6091196.438493912,"samples":12},{"name":"Manipulating private properties using #","opsSec":2200022.5231754337,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":574360397.412433,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":595716395.1070482,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":20891742.34529957,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,653,947|97|
|Adding property in the object creation - small object|2,652,931|96|
|Adding property after the function creation - small class|166,171|87|
|Adding property in the function creation - small class|167,868|88|
|Adding property after the class creation - small class|142,764|88|
|Adding property in the class creation - small class|143,168|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2653947.2588876,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2652931.0287059075,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":166170.50996983232,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":167868.25012182814,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":142764.01769196172,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":143167.96514851876,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|592,046,644|98|
|Getter|67,623,282|96|
|Method|592,698,008|93|
|DefineProperty (getter)|591,791,606|95|
|DefineProperty (getter & enumerable=false)|67,617,390|93|
|DefineProperty (getter & configurable=false)|593,359,786|98|
|DefineProperty (getter & enumerable=false & configurable=false)|67,988,590|96|
|DefineProperty (writable)|593,016,288|95|
|DefineProperty (writable & enumerable=false)|593,218,006|97|
|DefineProperty (writable & enumerable=false & configurable=false)|263,017,661|45|
|DefineProperties (getter)|41,079,609|91|
|DefineProperties (getter & enumerable=false)|67,212,028|95|
|DefineProperties (getter & enumerable=false & configurable=false)|67,419,699|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":592046643.9627706,"samples":8},{"name":"Getter","opsSec":67623281.64357294,"samples":6},{"name":"Method","opsSec":592698008.1006417,"samples":7},{"name":"DefineProperty (getter)","opsSec":591791605.7389903,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":67617390.42091495,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":593359786.3142158,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":67988590.03277133,"samples":7},{"name":"DefineProperty (writable)","opsSec":593016288.2946206,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593218006.2002131,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":263017661.2972358,"samples":9},{"name":"DefineProperties (getter)","opsSec":41079609.49882485,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":67212028.34263796,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67419698.5906192,"samples":8}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|581,750,753|95|
|Setter|7,635,714|95|
|Method|585,885,289|97|
|DefineProperty (setter)|584,078,384|97|
|DefineProperty (setter & enumerable=false)|7,658,339|94|
|DefineProperty (setter & configurable=false)|7,711,094|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,700,022|97|
|DefineProperty (writable)|593,107,032|94|
|DefineProperty (writable & enumerable=false)|146,306,032|26|
|DefineProperty (writable & enumerable=false & configurable=false)|106,170,381|85|
|DefineProperties (setter)|82,962,766|87|
|DefineProperties (setter & enumerable=false)|7,683,614|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,568,859|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":581750753.1315799,"samples":7},{"name":"Setter","opsSec":7635714.488862726,"samples":5},{"name":"Method","opsSec":585885288.8834404,"samples":7},{"name":"DefineProperty (setter)","opsSec":584078384.0999511,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7658338.916828206,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7711093.877289472,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7700021.560358976,"samples":6},{"name":"DefineProperty (writable)","opsSec":593107032.3273975,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":146306032.1788037,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106170380.82896303,"samples":5},{"name":"DefineProperties (setter)","opsSec":82962765.88966061,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7683613.894760077,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7568859.35841437,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,034,518|93|
|Using replaceAll()|1,903,400|98|
|Using replaceAll(//g)|1,816,386|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2034517.5669384664,"samples":7},{"name":"Using replaceAll()","opsSec":1903400.1917699254,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1816385.6341086053,"samples":7}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,541,696|94|
|{ ...object, __proto__: null }|13,433,380|96|
|{ ...object, newProp: true }|500,709|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|143,481|90|
|loop + object.keys starting with {}|333,630|96|
|loop + object.keys starting with { __proto__: null }|418,214|93|
|loop + object.keys starting with { randomProp: true }|347,482|94|
|object.keys + reduce(FN, {})|337,059|96|
|object.keys + reduce(FN, { __proto__: null })|429,018|95|
|object.keys + reduce(FN, { newProp: true })|341,823|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":13541695.723837744,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13433380.165856117,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":500709.1473328161,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":143480.58231552911,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":333630.4362506328,"samples":8},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":418214.4600441794,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":347482.17805170605,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":337059.0490812882,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":429018.4351377133,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":341822.5263661739,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|178,606|96|
|Sort using first char|799,534|95|
|Sort using localeCompare|424,444|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":178606.33557111834,"samples":5},{"name":"Sort using first char","opsSec":799533.7043627022,"samples":8},{"name":"Sort using localeCompare","opsSec":424444.07133906457,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,286|96|
|{...smallObject} - Total keys: 2|57,208,327|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,514|97|
|{ ...bigObject, ...anotherBigObject }|788|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,902,019|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,110,802|95|
|{ ...smallObject, ...anotherSmallObject }|12,537,050|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1285.5526522506323,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":57208327.48567783,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1318.1282264286135,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3513.7314365909106,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":787.7705803406909,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7902019.343075912,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19110802.097397458,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12537049.58716712,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,411|87|
|streams.web.Readable reading 1e3 * "some data"|402|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1410.9252380421915,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":401.5677075247,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,708|94|
|streams.web.WritableStream writing 1e3 * "some data"|878|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2707.5682170732694,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":878.3941744048389,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,440,523|94|
|Using backtick (`)|592,457,409|95|
|Using array.join|8,653,953|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":591440523.191732,"samples":7},{"name":"Using backtick (`)","opsSec":592457408.6462176,"samples":7},{"name":"Using array.join","opsSec":8653952.556777244,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,260,066|78|
|Using indexof|717,966,639|84|
|Using RegExp.test|9,479,515|81|
|Using RegExp.text with cached regex pattern|10,905,636|85|
|Using new RegExp.test|3,042,495|84|
|Using new RegExp.test with cached regex pattern|3,713,840|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10260065.896625947,"samples":7},{"name":"Using indexof","opsSec":717966638.9758413,"samples":6},{"name":"Using RegExp.test","opsSec":9479514.519866357,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":10905635.905514965,"samples":5},{"name":"Using new RegExp.test","opsSec":3042494.933287073,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3713839.885477897,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,250,230|91|
|Using this|127,989,108|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":131250229.81837898,"samples":7},{"name":"Using this","opsSec":127989108.08807063,"samples":6}]}-->

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
