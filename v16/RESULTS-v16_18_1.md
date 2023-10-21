## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|704,846,545|88|
|Using dot notation|734,876,826|90|
|Using define property (writable)|3,039,995|87|
|Using define property initialized (writable)|3,887,922|91|
|Using define property (getter)|1,588,909|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":704846545.0248468,"samples":7},{"name":"Using dot notation","opsSec":734876826.1622161,"samples":7},{"name":"Using define property (writable)","opsSec":3039995.3075123616,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3887921.8905846537,"samples":5},{"name":"Using define property (getter)","opsSec":1588908.5622752304,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.127ms
new Array(length)|100|0.01ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.546ms
new Array(length)|10,000|0.275ms
array.push|1,000,000|39.963ms
new Array(length)|1,000,000|23.773ms
array.push|100,000,000|2,131.665ms
new Array(length)|100,000,000|5,676.846ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.084ms
new Array(length)|100|0.012ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.782ms
new Array(length)|10,000|4.91ms
array.push|1,000,000|206.779ms
new Array(length)|1,000,000|9.367ms
array.push|100,000,000|2,748.885ms
new Array(length)|100,000,000|6,416.644ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|266|64|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":266.0486655853591,"samples":4},{"name":"Array.from","opsSec":12.954819834439915,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,866|88|
|new Blob (1024)|353|65|
|text (128)|21,954|73|
|text (1024)|12,592|79|
|arrayBuffer (128)|27,612|84|
|arrayBuffer (1024)|15,665|84|
|slice (0, 64)|58,367|72|
|slice (0, 512)|28,456|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2866.2975868717726,"samples":2},{"name":"new Blob (1024)","opsSec":353.4347358360193,"samples":2},{"name":"text (128)","opsSec":21953.94400317611,"samples":4},{"name":"text (1024)","opsSec":12591.841315910966,"samples":3},{"name":"arrayBuffer (128)","opsSec":27611.867919954584,"samples":4},{"name":"arrayBuffer (1024)","opsSec":15664.614231871366,"samples":5},{"name":"slice (0, 64)","opsSec":58367.05589176802,"samples":3},{"name":"slice (0, 512)","opsSec":28455.557368323385,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,364|56|
|[True conditional] Using constructor name|151,233|95|
|[True conditional] Check if property is valid then instanceof |153,552|90|
|[False conditional] Using instanceof only|712,514,652|99|
|[False conditional] Using constructor name|713,972,882|96|
|[False conditional] Check if property is valid then instanceof |715,640,739|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":193363.64197083036,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":151233.1752065875,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":153552.27421611777,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":712514652.4562284,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":713972881.6039538,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":715640738.5976033,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|22,215|90|
|crypto.verify('RSA-SHA256')|20,931|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":22215.14733476387,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":20930.733877621435,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,670,808|97|
|fromUnixToISOString(new Date())|1,396,581|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1670807.6158302322,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1396581.1478213551,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,578|82|
|Intl.DateTimeFormat().format(new Date())|8,670|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,610|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,105|89|
|Reusing Intl.DateTimeFormat()|350,867|71|
|Date.toLocaleDateString()|472,810|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,467|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7577.661343092724,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8670.481079111592,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7609.733983447598,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10105.334025861675,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":350867.4558907267,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":472809.59584034036,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9466.961442496464,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|686,248|96|
|Using brackets {}|675,990|93|
|Using '' + |692,496|92|
|Using date.toString()|753,806|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":686248.1087398529,"samples":6},{"name":"Using brackets {}","opsSec":675990.4039609041,"samples":7},{"name":"Using '' + ","opsSec":692496.0479652649,"samples":4},{"name":"Using date.toString()","opsSec":753806.2773390913,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,424,474|92|
|Using delete property (proto: null)|15,809,465|99|
|Using delete property (cached proto: null)|2,423,522|96|
|Using undefined assignment|590,770,983|97|
|Using undefined assignment (proto: null)|17,713,702|93|
|Using undefined property (cached proto: null)|597,255,686|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2424473.873217827,"samples":5},{"name":"Using delete property (proto: null)","opsSec":15809465.153449448,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2423522.1193872965,"samples":5},{"name":"Using undefined assignment","opsSec":590770983.3516572,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":17713701.817840464,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":597255686.0265634,"samples":10}]}-->

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
|Using super|108,240,356|93|
|Using this|108,488,031|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:00:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975248502,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":5.1173485662150324e-11,\"rme\":0.5539036319745289,\"sem\":2.6108921256199147e-11,\"deviation\":2.5178531834105005e-10,\"mean\":9.238698341754784e-9,\"sample\":[9.394361651752999e-9,8.977678926416428e-9,9.828595667526074e-9,9.385263728730023e-9,9.878795965106959e-9,9.617406726588788e-9,8.999027166971244e-9,9.342191152377315e-9,9.320502814266976e-9,9.325481598913408e-9,9.012817504976993e-9,9.323762306373632e-9,9.006154915782551e-9,9.31879271640596e-9,9.068711036918413e-9,9.0637425290972e-9,9.192876190340016e-9,9.000310453544568e-9,9.325387843518545e-9,9.02006044639538e-9,9.025243608624782e-9,9.490911414395608e-9,9.326335289828133e-9,9.358864458520404e-9,9.024385705910949e-9,9.33673736023335e-9,9.287425290972004e-9,9.21618290485859e-9,9.323707962767023e-9,8.976306871800739e-9,8.939345205753667e-9,9.31941844919786e-9,8.997540142697819e-9,9.305923996968743e-9,9.326371035774543e-9,8.947030405502017e-9,9.373109396894392e-9,9.56168946066516e-9,9.242098894735337e-9,9.306513983814235e-9,8.967459571334611e-9,8.986226371929424e-9,8.961418327661644e-9,8.982419428636793e-9,9.325673989819555e-9,8.987370242214532e-9,9.31373466498899e-9,8.963938595613258e-9,9.365030634276073e-9,9.323118154651262e-9,8.938933948640224e-9,9.306335254082187e-9,8.997879729188711e-9,9.317738389716605e-9,9.334896622722983e-9,9.311875875775688e-9,9.343690125539764e-9,8.941489783808516e-9,9.321509587062827e-9,9.348283479653406e-9,8.968210236209215e-9,9.348390717492637e-9,9.362975242357517e-9,9.355683069289943e-9,8.984939517858675e-9,8.96985454974406e-9,9.354860733792788e-9,9.333841938574165e-9,9.302617675655581e-9,9.404208727730275e-9,1.0428127770310847e-8,9.180615151991765e-9,9.29173267751437e-9,9.388730554205153e-9,9.305369934799394e-9,9.22383253739026e-9,9.267192906574395e-9,9.067084596356774e-9,9.259936300723498e-9,9.213091753975966e-9,9.008151040111818e-9,9.44224993364511e-9,9.20736770895362e-9,8.870684136099827e-9,9.20039300412501e-9,9.243896274668212e-9,8.851644905608738e-9,9.119128296631638e-9,9.187712042844741e-9,9.331466414033739e-9,9.355648654946288e-9,8.864396492798359e-9,1.007882432694477e-8],\"variance\":6.33958465321039e-20},\"times\":{\"cycle\":0.05245550916091034,\"elapsed\":5.59,\"period\":9.238698341754784e-9,\"timeStamp\":1696975242912},\"running\":false,\"count\":5677803,\"cycles\":9,\"hz\":108240356.2718838},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.4299247809329673e-10,\"rme\":1.5512972391962456,\"sem\":7.295534596596772e-11,\"deviation\":7.035558776432089e-10,\"mean\":9.217606689442936e-9,\"sample\":[9.204707176355429e-9,9.192873291926812e-9,9.197570820652e-9,9.169946439392106e-9,9.201961034413856e-9,9.150379997391166e-9,9.152511870740545e-9,9.239923827184608e-9,9.175643009166203e-9,9.179149196967892e-9,9.05451874119358e-9,8.944833853624452e-9,8.868033288951135e-9,8.910355809000596e-9,8.857585380542676e-9,8.887140418748613e-9,9.180618962561528e-9,9.158501292419782e-9,8.884785252194954e-9,9.16489886355388e-9,8.8832607097362e-9,9.19490450966842e-9,9.174629889862796e-9,8.942583589251085e-9,9.191354716042117e-9,9.34641729572483e-9,9.146513758276007e-9,9.679147929437167e-9,8.974320157123403e-9,9.824903338766341e-9,9.28444513988218e-9,9.750162522267891e-9,9.306274074797506e-9,9.241617674510768e-9,9.099571181397811e-9,9.153736970182264e-9,9.206719671031264e-9,9.131961370474653e-9,9.177067061606227e-9,9.126662994425764e-9,9.170161565059858e-9,9.336764859374307e-9,8.952517536598637e-9,9.152385399504547e-9,9.128755253385505e-9,9.113690353091438e-9,9.132375689671036e-9,9.125611478443128e-9,8.833624528261568e-9,9.21478123469593e-9,8.849943159150317e-9,8.843444034501168e-9,8.911844495727092e-9,9.132110779698924e-9,9.1497891051712e-9,9.148606017235749e-9,9.138503940359228e-9,9.145320956974912e-9,9.17043477554443e-9,9.172430430667674e-9,8.92962896179486e-9,9.209500519311849e-9,9.246835694534784e-9,9.147104684120466e-9,9.13952843552471e-9,8.877494149463266e-9,9.125611655049777e-9,9.148817768606791e-9,9.149524371805739e-9,8.924560350995117e-9,8.864654846148235e-9,8.909036450022703e-9,9.198780495773714e-9,8.925708294207601e-9,9.053890812233402e-9,8.853987627997875e-9,1.4805148472326004e-8,9.02738197775074e-9,8.89287676511722e-9,8.908948146698666e-9,8.904762392532648e-9,8.873679445864853e-9,9.721488843493132e-9,1.1289454940668112e-8,1.1249258914353016e-8,8.848919017198131e-9,8.838534193078043e-9,8.953983371777658e-9,1.0250060531928628e-8,8.901354060831455e-9,8.877547308064336e-9,8.879984303201119e-9,8.874085641155423e-9],\"variance\":4.94990872966306e-19},\"times\":{\"cycle\":0.052192863575239425,\"elapsed\":5.57,\"period\":9.217606689442936e-9,\"timeStamp\":1696975248519},\"running\":false,\"count\":5662301,\"cycles\":10,\"hz\":108488030.97069818},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":5.1173485662150324e-11,\"rme\":0.5539036319745289,\"sem\":2.6108921256199147e-11,\"deviation\":2.5178531834105005e-10,\"mean\":9.238698341754784e-9,\"sample\":[9.394361651752999e-9,8.977678926416428e-9,9.828595667526074e-9,9.385263728730023e-9,9.878795965106959e-9,9.617406726588788e-9,8.999027166971244e-9,9.342191152377315e-9,9.320502814266976e-9,9.325481598913408e-9,9.012817504976993e-9,9.323762306373632e-9,9.006154915782551e-9,9.31879271640596e-9,9.068711036918413e-9,9.0637425290972e-9,9.192876190340016e-9,9.000310453544568e-9,9.325387843518545e-9,9.02006044639538e-9,9.025243608624782e-9,9.490911414395608e-9,9.326335289828133e-9,9.358864458520404e-9,9.024385705910949e-9,9.33673736023335e-9,9.287425290972004e-9,9.21618290485859e-9,9.323707962767023e-9,8.976306871800739e-9,8.939345205753667e-9,9.31941844919786e-9,8.997540142697819e-9,9.305923996968743e-9,9.326371035774543e-9,8.947030405502017e-9,9.373109396894392e-9,9.56168946066516e-9,9.242098894735337e-9,9.306513983814235e-9,8.967459571334611e-9,8.986226371929424e-9,8.961418327661644e-9,8.982419428636793e-9,9.325673989819555e-9,8.987370242214532e-9,9.31373466498899e-9,8.963938595613258e-9,9.365030634276073e-9,9.323118154651262e-9,8.938933948640224e-9,9.306335254082187e-9,8.997879729188711e-9,9.317738389716605e-9,9.334896622722983e-9,9.311875875775688e-9,9.343690125539764e-9,8.941489783808516e-9,9.321509587062827e-9,9.348283479653406e-9,8.968210236209215e-9,9.348390717492637e-9,9.362975242357517e-9,9.355683069289943e-9,8.984939517858675e-9,8.96985454974406e-9,9.354860733792788e-9,9.333841938574165e-9,9.302617675655581e-9,9.404208727730275e-9,1.0428127770310847e-8,9.180615151991765e-9,9.29173267751437e-9,9.388730554205153e-9,9.305369934799394e-9,9.22383253739026e-9,9.267192906574395e-9,9.067084596356774e-9,9.259936300723498e-9,9.213091753975966e-9,9.008151040111818e-9,9.44224993364511e-9,9.20736770895362e-9,8.870684136099827e-9,9.20039300412501e-9,9.243896274668212e-9,8.851644905608738e-9,9.119128296631638e-9,9.187712042844741e-9,9.331466414033739e-9,9.355648654946288e-9,8.864396492798359e-9,1.007882432694477e-8],\"variance\":6.33958465321039e-20},\"times\":{\"cycle\":0.05245550916091034,\"elapsed\":5.59,\"period\":9.238698341754784e-9,\"timeStamp\":1696975242912},\"running\":false,\"count\":5677803,\"cycles\":9,\"hz\":108240356.2718838},\"aborted\":false},{\"timeStamp\":1696975254089,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":5.1173485662150324e-11,\"rme\":0.5539036319745289,\"sem\":2.6108921256199147e-11,\"deviation\":2.5178531834105005e-10,\"mean\":9.238698341754784e-9,\"sample\":[9.394361651752999e-9,8.977678926416428e-9,9.828595667526074e-9,9.385263728730023e-9,9.878795965106959e-9,9.617406726588788e-9,8.999027166971244e-9,9.342191152377315e-9,9.320502814266976e-9,9.325481598913408e-9,9.012817504976993e-9,9.323762306373632e-9,9.006154915782551e-9,9.31879271640596e-9,9.068711036918413e-9,9.0637425290972e-9,9.192876190340016e-9,9.000310453544568e-9,9.325387843518545e-9,9.02006044639538e-9,9.025243608624782e-9,9.490911414395608e-9,9.326335289828133e-9,9.358864458520404e-9,9.024385705910949e-9,9.33673736023335e-9,9.287425290972004e-9,9.21618290485859e-9,9.323707962767023e-9,8.976306871800739e-9,8.939345205753667e-9,9.31941844919786e-9,8.997540142697819e-9,9.305923996968743e-9,9.326371035774543e-9,8.947030405502017e-9,9.373109396894392e-9,9.56168946066516e-9,9.242098894735337e-9,9.306513983814235e-9,8.967459571334611e-9,8.986226371929424e-9,8.961418327661644e-9,8.982419428636793e-9,9.325673989819555e-9,8.987370242214532e-9,9.31373466498899e-9,8.963938595613258e-9,9.365030634276073e-9,9.323118154651262e-9,8.938933948640224e-9,9.306335254082187e-9,8.997879729188711e-9,9.317738389716605e-9,9.334896622722983e-9,9.311875875775688e-9,9.343690125539764e-9,8.941489783808516e-9,9.321509587062827e-9,9.348283479653406e-9,8.968210236209215e-9,9.348390717492637e-9,9.362975242357517e-9,9.355683069289943e-9,8.984939517858675e-9,8.96985454974406e-9,9.354860733792788e-9,9.333841938574165e-9,9.302617675655581e-9,9.404208727730275e-9,1.0428127770310847e-8,9.180615151991765e-9,9.29173267751437e-9,9.388730554205153e-9,9.305369934799394e-9,9.22383253739026e-9,9.267192906574395e-9,9.067084596356774e-9,9.259936300723498e-9,9.213091753975966e-9,9.008151040111818e-9,9.44224993364511e-9,9.20736770895362e-9,8.870684136099827e-9,9.20039300412501e-9,9.243896274668212e-9,8.851644905608738e-9,9.119128296631638e-9,9.187712042844741e-9,9.331466414033739e-9,9.355648654946288e-9,8.864396492798359e-9,1.007882432694477e-8],\"variance\":6.33958465321039e-20},\"times\":{\"cycle\":0.05245550916091034,\"elapsed\":5.59,\"period\":9.238698341754784e-9,\"timeStamp\":1696975242912},\"running\":false,\"count\":5677803,\"cycles\":9,\"hz\":108240356.2718838},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.4299247809329673e-10,\"rme\":1.5512972391962456,\"sem\":7.295534596596772e-11,\"deviation\":7.035558776432089e-10,\"mean\":9.217606689442936e-9,\"sample\":[9.204707176355429e-9,9.192873291926812e-9,9.197570820652e-9,9.169946439392106e-9,9.201961034413856e-9,9.150379997391166e-9,9.152511870740545e-9,9.239923827184608e-9,9.175643009166203e-9,9.179149196967892e-9,9.05451874119358e-9,8.944833853624452e-9,8.868033288951135e-9,8.910355809000596e-9,8.857585380542676e-9,8.887140418748613e-9,9.180618962561528e-9,9.158501292419782e-9,8.884785252194954e-9,9.16489886355388e-9,8.8832607097362e-9,9.19490450966842e-9,9.174629889862796e-9,8.942583589251085e-9,9.191354716042117e-9,9.34641729572483e-9,9.146513758276007e-9,9.679147929437167e-9,8.974320157123403e-9,9.824903338766341e-9,9.28444513988218e-9,9.750162522267891e-9,9.306274074797506e-9,9.241617674510768e-9,9.099571181397811e-9,9.153736970182264e-9,9.206719671031264e-9,9.131961370474653e-9,9.177067061606227e-9,9.126662994425764e-9,9.170161565059858e-9,9.336764859374307e-9,8.952517536598637e-9,9.152385399504547e-9,9.128755253385505e-9,9.113690353091438e-9,9.132375689671036e-9,9.125611478443128e-9,8.833624528261568e-9,9.21478123469593e-9,8.849943159150317e-9,8.843444034501168e-9,8.911844495727092e-9,9.132110779698924e-9,9.1497891051712e-9,9.148606017235749e-9,9.138503940359228e-9,9.145320956974912e-9,9.17043477554443e-9,9.172430430667674e-9,8.92962896179486e-9,9.209500519311849e-9,9.246835694534784e-9,9.147104684120466e-9,9.13952843552471e-9,8.877494149463266e-9,9.125611655049777e-9,9.148817768606791e-9,9.149524371805739e-9,8.924560350995117e-9,8.864654846148235e-9,8.909036450022703e-9,9.198780495773714e-9,8.925708294207601e-9,9.053890812233402e-9,8.853987627997875e-9,1.4805148472326004e-8,9.02738197775074e-9,8.89287676511722e-9,8.908948146698666e-9,8.904762392532648e-9,8.873679445864853e-9,9.721488843493132e-9,1.1289454940668112e-8,1.1249258914353016e-8,8.848919017198131e-9,8.838534193078043e-9,8.953983371777658e-9,1.0250060531928628e-8,8.901354060831455e-9,8.877547308064336e-9,8.879984303201119e-9,8.874085641155423e-9],\"variance\":4.94990872966306e-19},\"times\":{\"cycle\":0.052192863575239425,\"elapsed\":5.57,\"period\":9.217606689442936e-9,\"timeStamp\":1696975248519},\"running\":false,\"count\":5662301,\"cycles\":10,\"hz\":108488030.97069818},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.4299247809329673e-10,\"rme\":1.5512972391962456,\"sem\":7.295534596596772e-11,\"deviation\":7.035558776432089e-10,\"mean\":9.217606689442936e-9,\"sample\":[9.204707176355429e-9,9.192873291926812e-9,9.197570820652e-9,9.169946439392106e-9,9.201961034413856e-9,9.150379997391166e-9,9.152511870740545e-9,9.239923827184608e-9,9.175643009166203e-9,9.179149196967892e-9,9.05451874119358e-9,8.944833853624452e-9,8.868033288951135e-9,8.910355809000596e-9,8.857585380542676e-9,8.887140418748613e-9,9.180618962561528e-9,9.158501292419782e-9,8.884785252194954e-9,9.16489886355388e-9,8.8832607097362e-9,9.19490450966842e-9,9.174629889862796e-9,8.942583589251085e-9,9.191354716042117e-9,9.34641729572483e-9,9.146513758276007e-9,9.679147929437167e-9,8.974320157123403e-9,9.824903338766341e-9,9.28444513988218e-9,9.750162522267891e-9,9.306274074797506e-9,9.241617674510768e-9,9.099571181397811e-9,9.153736970182264e-9,9.206719671031264e-9,9.131961370474653e-9,9.177067061606227e-9,9.126662994425764e-9,9.170161565059858e-9,9.336764859374307e-9,8.952517536598637e-9,9.152385399504547e-9,9.128755253385505e-9,9.113690353091438e-9,9.132375689671036e-9,9.125611478443128e-9,8.833624528261568e-9,9.21478123469593e-9,8.849943159150317e-9,8.843444034501168e-9,8.911844495727092e-9,9.132110779698924e-9,9.1497891051712e-9,9.148606017235749e-9,9.138503940359228e-9,9.145320956974912e-9,9.17043477554443e-9,9.172430430667674e-9,8.92962896179486e-9,9.209500519311849e-9,9.246835694534784e-9,9.147104684120466e-9,9.13952843552471e-9,8.877494149463266e-9,9.125611655049777e-9,9.148817768606791e-9,9.149524371805739e-9,8.924560350995117e-9,8.864654846148235e-9,8.909036450022703e-9,9.198780495773714e-9,8.925708294207601e-9,9.053890812233402e-9,8.853987627997875e-9,1.4805148472326004e-8,9.02738197775074e-9,8.89287676511722e-9,8.908948146698666e-9,8.904762392532648e-9,8.873679445864853e-9,9.721488843493132e-9,1.1289454940668112e-8,1.1249258914353016e-8,8.848919017198131e-9,8.838534193078043e-9,8.953983371777658e-9,1.0250060531928628e-8,8.901354060831455e-9,8.877547308064336e-9,8.879984303201119e-9,8.874085641155423e-9],\"variance\":4.94990872966306e-19},\"times\":{\"cycle\":0.052192863575239425,\"elapsed\":5.57,\"period\":9.217606689442936e-9,\"timeStamp\":1696975248519},\"running\":false,\"count\":5662301,\"cycles\":10,\"hz\":108488030.97069818},\"aborted\":false}]"}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,528,416|82|
|Date.now()|13,419,478|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:04:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975490153,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.03839685037508e-9,\"rme\":1.3307502920221805,\"sem\":1.03999839304851e-9,\"deviation\":9.417585992098274e-9,\"mean\":1.5317650971750487e-7,\"sample\":[1.5928837885244968e-7,1.6306852880274064e-7,1.585174076583565e-7,1.6333797706419115e-7,1.5862569101881345e-7,1.6380712487817023e-7,1.6464302131755291e-7,1.560882866116087e-7,1.4646360262798596e-7,1.59300458663259e-7,1.444065559181252e-7,1.4881553636218423e-7,1.6054354163338886e-7,1.519366542683066e-7,1.5213033395705452e-7,1.470333475421961e-7,1.4460473013982086e-7,1.5055954031035543e-7,1.4696023024003567e-7,1.4671801806125244e-7,1.5193687595098225e-7,1.673797492653265e-7,1.554001168702486e-7,1.428304816804474e-7,1.461664074254952e-7,1.5350109389423525e-7,1.4734104940449808e-7,1.5392059033590316e-7,1.488567125584704e-7,1.4972619333274992e-7,1.6013483269769844e-7,1.516147742061151e-7,1.4376658414234457e-7,1.4126598144190786e-7,1.6351507880272922e-7,1.462911819421351e-7,1.4149972476209563e-7,1.481902049181485e-7,1.4403759044035242e-7,1.532010111817163e-7,1.4604530274758002e-7,1.48485209138463e-7,1.4528535254446854e-7,1.5410662292971694e-7,1.470401198061196e-7,1.5427684981043872e-7,1.5183185928144557e-7,1.5324504924641272e-7,1.5547012892425735e-7,1.6366977944269264e-7,1.5157327397604442e-7,1.5760684735446973e-7,1.420617831464068e-7,1.4359155824175204e-7,1.42239349704578e-7,1.6257050748223657e-7,1.5564120269083867e-7,1.67929951247604e-7,1.9885465180287883e-7,1.5017843602765364e-7,1.5351718472556664e-7,1.6158528564048566e-7,1.8376493553787133e-7,1.59934117926033e-7,1.5489819020491814e-7,1.5445385177803685e-7,1.5251389316252587e-7,1.5129549541411309e-7,1.7308754823720707e-7,1.4421064027393936e-7,1.4365451291359788e-7,1.487353255852687e-7,1.5584897202171415e-7,1.5030067270966778e-7,1.4545699090162292e-7,1.4601057760438575e-7,1.4921471210497382e-7,1.5008570770144877e-7,1.4079897860518324e-7,1.4434339838483433e-7,1.527676939628757e-7,1.548660747116262e-7],\"variance\":8.869092591856562e-17},\"times\":{\"cycle\":0.05623798966023333,\"elapsed\":5.414,\"period\":1.5317650971750487e-7,\"timeStamp\":1696975484739},\"running\":false,\"count\":367145,\"cycles\":5,\"hz\":6528416.151041996},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.2722797429254789e-9,\"rme\":1.707332976755301,\"sem\":6.491223178191219e-10,\"deviation\":6.01971273236645e-9,\"mean\":7.451854794858948e-8,\"sample\":[8.437481205849495e-8,8.080688992857523e-8,8.543877656729915e-8,7.455259422274113e-8,7.298813273640031e-8,7.517821754456699e-8,7.587609440053309e-8,8.290204362762804e-8,7.419600934037781e-8,7.281733485646449e-8,7.089337941925026e-8,7.251382577507497e-8,7.15044587984623e-8,7.102063506729495e-8,7.1747350619752e-8,7.288487157957601e-8,6.935321609230984e-8,7.003376955294181e-8,6.970673464199216e-8,6.752628022426505e-8,6.956502883598946e-8,7.341036489904059e-8,7.174414649485502e-8,6.989581041842291e-8,6.756976703731952e-8,7.015674333962238e-8,6.935106445613049e-8,7.231766154175533e-8,7.705645564877632e-8,7.049167302262721e-8,6.828498922831948e-8,7.468384783161387e-8,7.048565024821698e-8,7.130323819463958e-8,6.987105562469056e-8,7.015272904874687e-8,7.16926284238556e-8,7.42417352441358e-8,6.953652737077328e-8,7.317298382240777e-8,7.759464493597206e-8,7.433647384689495e-8,7.103186811716378e-8,7.004086146682189e-8,7.391028461322307e-8,6.860359412843054e-8,7.160739030950183e-8,7.363704120000535e-8,9.387212342606345e-8,7.751395768937417e-8,7.444820628102712e-8,7.117089906734641e-8,7.400274845115277e-8,8.510988987462031e-8,7.112500100357272e-8,6.917269479346473e-8,7.700065700560663e-8,7.54841729891748e-8,7.317539105883612e-8,7.366500742643812e-8,7.913013126731163e-8,6.969148033666519e-8,7.124529725823933e-8,7.22654757603736e-8,7.218090669449909e-8,6.902242382883064e-8,7.852895143307485e-8,7.211285233820249e-8,7.313014438815585e-8,6.894934685313949e-8,7.763936435473412e-8,7.556603161884478e-8,8.023840782932782e-8,9.549423817983416e-8,8.57451514784103e-8,7.851511357586046e-8,7.624317332377424e-8,7.391522137935761e-8,6.999115299662093e-8,7.480349056653505e-8,7.523497340495632e-8,7.300652487914939e-8,7.698700032156544e-8,7.584951396173898e-8,8.400656836955776e-8,1.0129975170930483e-7],\"variance\":3.6236941380214743e-17},\"times\":{\"cycle\":0.05654377996081431,\"elapsed\":5.514,\"period\":7.451854794858948e-8,\"timeStamp\":1696975490168},\"running\":false,\"count\":758788,\"cycles\":6,\"hz\":13419477.801552204},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.03839685037508e-9,\"rme\":1.3307502920221805,\"sem\":1.03999839304851e-9,\"deviation\":9.417585992098274e-9,\"mean\":1.5317650971750487e-7,\"sample\":[1.5928837885244968e-7,1.6306852880274064e-7,1.585174076583565e-7,1.6333797706419115e-7,1.5862569101881345e-7,1.6380712487817023e-7,1.6464302131755291e-7,1.560882866116087e-7,1.4646360262798596e-7,1.59300458663259e-7,1.444065559181252e-7,1.4881553636218423e-7,1.6054354163338886e-7,1.519366542683066e-7,1.5213033395705452e-7,1.470333475421961e-7,1.4460473013982086e-7,1.5055954031035543e-7,1.4696023024003567e-7,1.4671801806125244e-7,1.5193687595098225e-7,1.673797492653265e-7,1.554001168702486e-7,1.428304816804474e-7,1.461664074254952e-7,1.5350109389423525e-7,1.4734104940449808e-7,1.5392059033590316e-7,1.488567125584704e-7,1.4972619333274992e-7,1.6013483269769844e-7,1.516147742061151e-7,1.4376658414234457e-7,1.4126598144190786e-7,1.6351507880272922e-7,1.462911819421351e-7,1.4149972476209563e-7,1.481902049181485e-7,1.4403759044035242e-7,1.532010111817163e-7,1.4604530274758002e-7,1.48485209138463e-7,1.4528535254446854e-7,1.5410662292971694e-7,1.470401198061196e-7,1.5427684981043872e-7,1.5183185928144557e-7,1.5324504924641272e-7,1.5547012892425735e-7,1.6366977944269264e-7,1.5157327397604442e-7,1.5760684735446973e-7,1.420617831464068e-7,1.4359155824175204e-7,1.42239349704578e-7,1.6257050748223657e-7,1.5564120269083867e-7,1.67929951247604e-7,1.9885465180287883e-7,1.5017843602765364e-7,1.5351718472556664e-7,1.6158528564048566e-7,1.8376493553787133e-7,1.59934117926033e-7,1.5489819020491814e-7,1.5445385177803685e-7,1.5251389316252587e-7,1.5129549541411309e-7,1.7308754823720707e-7,1.4421064027393936e-7,1.4365451291359788e-7,1.487353255852687e-7,1.5584897202171415e-7,1.5030067270966778e-7,1.4545699090162292e-7,1.4601057760438575e-7,1.4921471210497382e-7,1.5008570770144877e-7,1.4079897860518324e-7,1.4434339838483433e-7,1.527676939628757e-7,1.548660747116262e-7],\"variance\":8.869092591856562e-17},\"times\":{\"cycle\":0.05623798966023333,\"elapsed\":5.414,\"period\":1.5317650971750487e-7,\"timeStamp\":1696975484739},\"running\":false,\"count\":367145,\"cycles\":5,\"hz\":6528416.151041996},\"aborted\":false},{\"timeStamp\":1696975495682,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.03839685037508e-9,\"rme\":1.3307502920221805,\"sem\":1.03999839304851e-9,\"deviation\":9.417585992098274e-9,\"mean\":1.5317650971750487e-7,\"sample\":[1.5928837885244968e-7,1.6306852880274064e-7,1.585174076583565e-7,1.6333797706419115e-7,1.5862569101881345e-7,1.6380712487817023e-7,1.6464302131755291e-7,1.560882866116087e-7,1.4646360262798596e-7,1.59300458663259e-7,1.444065559181252e-7,1.4881553636218423e-7,1.6054354163338886e-7,1.519366542683066e-7,1.5213033395705452e-7,1.470333475421961e-7,1.4460473013982086e-7,1.5055954031035543e-7,1.4696023024003567e-7,1.4671801806125244e-7,1.5193687595098225e-7,1.673797492653265e-7,1.554001168702486e-7,1.428304816804474e-7,1.461664074254952e-7,1.5350109389423525e-7,1.4734104940449808e-7,1.5392059033590316e-7,1.488567125584704e-7,1.4972619333274992e-7,1.6013483269769844e-7,1.516147742061151e-7,1.4376658414234457e-7,1.4126598144190786e-7,1.6351507880272922e-7,1.462911819421351e-7,1.4149972476209563e-7,1.481902049181485e-7,1.4403759044035242e-7,1.532010111817163e-7,1.4604530274758002e-7,1.48485209138463e-7,1.4528535254446854e-7,1.5410662292971694e-7,1.470401198061196e-7,1.5427684981043872e-7,1.5183185928144557e-7,1.5324504924641272e-7,1.5547012892425735e-7,1.6366977944269264e-7,1.5157327397604442e-7,1.5760684735446973e-7,1.420617831464068e-7,1.4359155824175204e-7,1.42239349704578e-7,1.6257050748223657e-7,1.5564120269083867e-7,1.67929951247604e-7,1.9885465180287883e-7,1.5017843602765364e-7,1.5351718472556664e-7,1.6158528564048566e-7,1.8376493553787133e-7,1.59934117926033e-7,1.5489819020491814e-7,1.5445385177803685e-7,1.5251389316252587e-7,1.5129549541411309e-7,1.7308754823720707e-7,1.4421064027393936e-7,1.4365451291359788e-7,1.487353255852687e-7,1.5584897202171415e-7,1.5030067270966778e-7,1.4545699090162292e-7,1.4601057760438575e-7,1.4921471210497382e-7,1.5008570770144877e-7,1.4079897860518324e-7,1.4434339838483433e-7,1.527676939628757e-7,1.548660747116262e-7],\"variance\":8.869092591856562e-17},\"times\":{\"cycle\":0.05623798966023333,\"elapsed\":5.414,\"period\":1.5317650971750487e-7,\"timeStamp\":1696975484739},\"running\":false,\"count\":367145,\"cycles\":5,\"hz\":6528416.151041996},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.2722797429254789e-9,\"rme\":1.707332976755301,\"sem\":6.491223178191219e-10,\"deviation\":6.01971273236645e-9,\"mean\":7.451854794858948e-8,\"sample\":[8.437481205849495e-8,8.080688992857523e-8,8.543877656729915e-8,7.455259422274113e-8,7.298813273640031e-8,7.517821754456699e-8,7.587609440053309e-8,8.290204362762804e-8,7.419600934037781e-8,7.281733485646449e-8,7.089337941925026e-8,7.251382577507497e-8,7.15044587984623e-8,7.102063506729495e-8,7.1747350619752e-8,7.288487157957601e-8,6.935321609230984e-8,7.003376955294181e-8,6.970673464199216e-8,6.752628022426505e-8,6.956502883598946e-8,7.341036489904059e-8,7.174414649485502e-8,6.989581041842291e-8,6.756976703731952e-8,7.015674333962238e-8,6.935106445613049e-8,7.231766154175533e-8,7.705645564877632e-8,7.049167302262721e-8,6.828498922831948e-8,7.468384783161387e-8,7.048565024821698e-8,7.130323819463958e-8,6.987105562469056e-8,7.015272904874687e-8,7.16926284238556e-8,7.42417352441358e-8,6.953652737077328e-8,7.317298382240777e-8,7.759464493597206e-8,7.433647384689495e-8,7.103186811716378e-8,7.004086146682189e-8,7.391028461322307e-8,6.860359412843054e-8,7.160739030950183e-8,7.363704120000535e-8,9.387212342606345e-8,7.751395768937417e-8,7.444820628102712e-8,7.117089906734641e-8,7.400274845115277e-8,8.510988987462031e-8,7.112500100357272e-8,6.917269479346473e-8,7.700065700560663e-8,7.54841729891748e-8,7.317539105883612e-8,7.366500742643812e-8,7.913013126731163e-8,6.969148033666519e-8,7.124529725823933e-8,7.22654757603736e-8,7.218090669449909e-8,6.902242382883064e-8,7.852895143307485e-8,7.211285233820249e-8,7.313014438815585e-8,6.894934685313949e-8,7.763936435473412e-8,7.556603161884478e-8,8.023840782932782e-8,9.549423817983416e-8,8.57451514784103e-8,7.851511357586046e-8,7.624317332377424e-8,7.391522137935761e-8,6.999115299662093e-8,7.480349056653505e-8,7.523497340495632e-8,7.300652487914939e-8,7.698700032156544e-8,7.584951396173898e-8,8.400656836955776e-8,1.0129975170930483e-7],\"variance\":3.6236941380214743e-17},\"times\":{\"cycle\":0.05654377996081431,\"elapsed\":5.514,\"period\":7.451854794858948e-8,\"timeStamp\":1696975490168},\"running\":false,\"count\":758788,\"cycles\":6,\"hz\":13419477.801552204},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.2722797429254789e-9,\"rme\":1.707332976755301,\"sem\":6.491223178191219e-10,\"deviation\":6.01971273236645e-9,\"mean\":7.451854794858948e-8,\"sample\":[8.437481205849495e-8,8.080688992857523e-8,8.543877656729915e-8,7.455259422274113e-8,7.298813273640031e-8,7.517821754456699e-8,7.587609440053309e-8,8.290204362762804e-8,7.419600934037781e-8,7.281733485646449e-8,7.089337941925026e-8,7.251382577507497e-8,7.15044587984623e-8,7.102063506729495e-8,7.1747350619752e-8,7.288487157957601e-8,6.935321609230984e-8,7.003376955294181e-8,6.970673464199216e-8,6.752628022426505e-8,6.956502883598946e-8,7.341036489904059e-8,7.174414649485502e-8,6.989581041842291e-8,6.756976703731952e-8,7.015674333962238e-8,6.935106445613049e-8,7.231766154175533e-8,7.705645564877632e-8,7.049167302262721e-8,6.828498922831948e-8,7.468384783161387e-8,7.048565024821698e-8,7.130323819463958e-8,6.987105562469056e-8,7.015272904874687e-8,7.16926284238556e-8,7.42417352441358e-8,6.953652737077328e-8,7.317298382240777e-8,7.759464493597206e-8,7.433647384689495e-8,7.103186811716378e-8,7.004086146682189e-8,7.391028461322307e-8,6.860359412843054e-8,7.160739030950183e-8,7.363704120000535e-8,9.387212342606345e-8,7.751395768937417e-8,7.444820628102712e-8,7.117089906734641e-8,7.400274845115277e-8,8.510988987462031e-8,7.112500100357272e-8,6.917269479346473e-8,7.700065700560663e-8,7.54841729891748e-8,7.317539105883612e-8,7.366500742643812e-8,7.913013126731163e-8,6.969148033666519e-8,7.124529725823933e-8,7.22654757603736e-8,7.218090669449909e-8,6.902242382883064e-8,7.852895143307485e-8,7.211285233820249e-8,7.313014438815585e-8,6.894934685313949e-8,7.763936435473412e-8,7.556603161884478e-8,8.023840782932782e-8,9.549423817983416e-8,8.57451514784103e-8,7.851511357586046e-8,7.624317332377424e-8,7.391522137935761e-8,6.999115299662093e-8,7.480349056653505e-8,7.523497340495632e-8,7.300652487914939e-8,7.698700032156544e-8,7.584951396173898e-8,8.400656836955776e-8,1.0129975170930483e-7],\"variance\":3.6236941380214743e-17},\"times\":{\"cycle\":0.05654377996081431,\"elapsed\":5.514,\"period\":7.451854794858948e-8,\"timeStamp\":1696975490168},\"running\":false,\"count\":758788,\"cycles\":6,\"hz\":13419477.801552204},\"aborted\":false}]"}-->
