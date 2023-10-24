## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,539,089|97|
|Using dot notation|702,037,131|96|
|Using define property (writable)|3,129,697|96|
|Using define property initialized (writable)|4,111,179|90|
|Using define property (getter)|1,691,106|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":714539089.1799048,"samples":9},{"name":"Using dot notation","opsSec":702037131.2676511,"samples":7},{"name":"Using define property (writable)","opsSec":3129697.2679763143,"samples":8},{"name":"Using define property initialized (writable)","opsSec":4111179.1929265754,"samples":5},{"name":"Using define property (getter)","opsSec":1691106.0682765488,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.012ms
array.push|1,000|0.088ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.606ms
new Array(length)|10,000|0.592ms
array.push|1,000,000|52.357ms
new Array(length)|1,000,000|10.801ms
array.push|100,000,000|2,503.85ms
new Array(length)|100,000,000|5,886.333ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.021ms
array.push|100|0.021ms
new Array(length)|100|0.014ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.442ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|29.052ms
new Array(length)|1,000,000|5.661ms
array.push|100,000,000|2,498.772ms
new Array(length)|100,000,000|6,459.78ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|77|
|Array.from|13|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":292.15671329797084,"samples":3},{"name":"Array.from","opsSec":13.145741489485331,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,212|82|
|new Blob (1024)|384|66|
|text (128)|3,732|83|
|text (1024)|472|86|
|arrayBuffer (128)|3,752|82|
|arrayBuffer (1024)|470|87|
|slice (0, 64)|47,434|61|
|slice (0, 512)|12,773|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3211.647928928569,"samples":3},{"name":"new Blob (1024)","opsSec":383.8977430042747,"samples":2},{"name":"text (128)","opsSec":3731.8518875094906,"samples":4},{"name":"text (1024)","opsSec":472.3680861224588,"samples":3},{"name":"arrayBuffer (128)","opsSec":3751.73774989339,"samples":3},{"name":"arrayBuffer (1024)","opsSec":469.94642432975235,"samples":2},{"name":"slice (0, 64)","opsSec":47434.04361033607,"samples":3},{"name":"slice (0, 512)","opsSec":12773.429012038345,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,426|56|
|[True conditional] Using constructor name|130,901|96|
|[True conditional] Check if property is valid then instanceof |131,601|98|
|[False conditional] Using instanceof only|597,454,542|95|
|[False conditional] Using constructor name|596,862,933|97|
|[False conditional] Check if property is valid then instanceof |598,456,639|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165426.23394401622,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130900.97325429757,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131600.98633036827,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597454542.1131063,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":596862932.9248109,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598456638.6070374,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,596|92|
|crypto.verify('RSA-SHA256')|4,587|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4595.684067460992,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":4586.911680059391,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|833,249|91|
|fromUnixToISOString(new Date())|1,397,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":833248.7232454087,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1397592.543552565,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,665|81|
|Intl.DateTimeFormat().format(new Date())|7,942|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,595|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,511|78|
|Reusing Intl.DateTimeFormat()|432,060|90|
|Date.toLocaleDateString()|495,581|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7665.355496494934,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7942.493962029965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8595.41907732375,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8510.697249872626,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":432060.0389791531,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":495581.2962201482,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8975.726530300342,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|611,011|90|
|Using brackets {}|650,779|83|
|Using '' + |614,205|90|
|Using date.toString()|715,967|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":611011.174286168,"samples":3},{"name":"Using brackets {}","opsSec":650779.4278579067,"samples":7},{"name":"Using '' + ","opsSec":614205.2094200691,"samples":6},{"name":"Using date.toString()","opsSec":715966.7825746011,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,231,876|88|
|Using delete property (proto: null)|10,303,595|92|
|Using delete property (cached proto: null)|2,278,416|93|
|Using undefined assignment|591,367,410|92|
|Using undefined assignment (proto: null)|11,371,054|88|
|Using undefined property (cached proto: null)|602,018,130|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2231876.0182390357,"samples":8},{"name":"Using delete property (proto: null)","opsSec":10303595.472905442,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2278416.0540333246,"samples":5},{"name":"Using undefined assignment","opsSec":591367410.0570949,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11371054.378996667,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":602018130.1430405,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|173,693|60|
|NodeError|143,949|96|
|NodeError Range|144,099|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":173692.7003148465,"samples":3},{"name":"NodeError","opsSec":143949.4096595153,"samples":3},{"name":"NodeError Range","opsSec":144098.96377015422,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,172,354|88|
|Function returning explicitly undefined|1,133,946|94|
|Function returning implicitly undefined|1,212,211|92|
|Function returning string|1,215,581|91|
|Function returning integer|1,219,698|94|
|Function returning float|1,217,919|92|
|Function returning functions|1,187,501|93|
|Function returning arrow functions|1,207,868|95|
|Function returning empty object|1,259,579|94|
|Function returning empty array|1,223,446|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1172353.8441996707,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1133945.992717131,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1212211.330182474,"samples":5},{"name":"Function returning string","opsSec":1215580.8370022492,"samples":5},{"name":"Function returning integer","opsSec":1219697.7692261643,"samples":6},{"name":"Function returning float","opsSec":1217918.8455409624,"samples":5},{"name":"Function returning functions","opsSec":1187500.6379409747,"samples":5},{"name":"Function returning arrow functions","opsSec":1207868.1868808132,"samples":5},{"name":"Function returning empty object","opsSec":1259579.0835362177,"samples":8},{"name":"Function returning empty array","opsSec":1223446.150650431,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,025,075|97|
|using Array.includes (first item)|597,212,779|95|
|Using raw comparison|599,311,170|96|
|Using raw comparison (first item)|598,256,157|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":594025074.795496,"samples":6},{"name":"using Array.includes (first item)","opsSec":597212778.712857,"samples":6},{"name":"Using raw comparison","opsSec":599311170.200288,"samples":6},{"name":"Using raw comparison (first item)","opsSec":598256156.7386185,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,106,080|92|
|Using Object.getOwnPropertyNames()|60,397,350|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":60106080.2379594,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":60397350.037962034,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|693,393,807|91|
|Length = 10_000 - Array.at|670,199,191|89|
|Length = 1_000_000 - Array.at|642,338,473|90|
|Length = 100 - Array[length - 1]|652,671,930|89|
|Length = 10_000 - Array[length - 1]|646,593,995|89|
|Length = 1_000_000 - Array[length - 1]|614,329,466|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":693393806.6183873,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":670199190.7562598,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":642338473.078916,"samples":10},{"name":"Length = 100 - Array[length - 1]","opsSec":652671930.2027539,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":646593995.4929851,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":614329465.6311858,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,798,708|90|
|Object.create({})|1,502,994|77|
|Cached Empty.prototype|720,537,702|97|
|Empty.prototype|1,441,729|72|
|Empty class|990,309|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50798707.97738807,"samples":5},{"name":"Object.create({})","opsSec":1502994.331539086,"samples":3},{"name":"Cached Empty.prototype","opsSec":720537702.370024,"samples":7},{"name":"Empty.prototype","opsSec":1441729.2104732094,"samples":3},{"name":"Empty class","opsSec":990309.3676645184,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|714,046,027|95|
|Using optional chain (obj.field?.field2) (undefined)|715,825,250|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,027,935|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|715,094,933|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":714046027.1770734,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":715825249.6935072,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":708027935.410453,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":715094932.5273639,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|715,835,678|96|
|Using parseInt(x, 10) - big number (10 len)|717,231,329|94|
|Using + - small number (2 len)|719,538,953|98|
|Using + - big number (10 len)|716,486,493|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":715835678.2776468,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":717231329.0276337,"samples":7},{"name":"Using + - small number (2 len)","opsSec":719538953.0762458,"samples":10},{"name":"Using + - big number (10 len)","opsSec":716486492.5528384,"samples":10}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|856,177|78|
|Using ? operator to avoid rejection|927,904|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":856176.9214547343,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":927904.2359826814,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|574,381,474|91|
|Raw usage underscore usage|571,047,625|92|
|Manipulating private properties using #|564,966,717|87|
|Manipulating private properties using underscore(_)|572,018,011|91|
|Manipulating private properties using Symbol|569,354,691|92|
|Manipulating private properties using PrivateSymbol|27,154,969|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":574381474.3708901,"samples":9},{"name":"Raw usage underscore usage","opsSec":571047625.4130701,"samples":8},{"name":"Manipulating private properties using #","opsSec":564966717.2201577,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":572018011.2148564,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":569354691.0414239,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27154969.36399804,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,618,559|89|
|Adding property in the object creation - small object|2,537,297|88|
|Adding property after the function creation - small class|138,178|76|
|Adding property in the function creation - small class|138,644|78|
|Adding property after the class creation - small class|118,275|76|
|Adding property in the class creation - small class|119,894|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2618558.831074692,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":2537296.5374869998,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":138177.80003775196,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":138643.87296239974,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":118274.80436021935,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":119894.35085604008,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|595,211,980|91|
|Getter|67,941,251|94|
|Method|591,422,823|92|
|DefineProperty (getter)|597,271,387|99|
|DefineProperty (getter & enumerable=false)|68,750,066|94|
|DefineProperty (getter & configurable=false)|597,245,991|99|
|DefineProperty (getter & enumerable=false & configurable=false)|68,525,449|95|
|DefineProperty (writable)|599,068,982|99|
|DefineProperty (writable & enumerable=false)|597,257,205|95|
|DefineProperty (writable & enumerable=false & configurable=false)|599,623,789|99|
|DefineProperties (getter)|68,456,711|93|
|DefineProperties (getter & enumerable=false)|68,382,229|96|
|DefineProperties (getter & enumerable=false & configurable=false)|50,228,754|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":595211980.0539547,"samples":6},{"name":"Getter","opsSec":67941250.83000727,"samples":5},{"name":"Method","opsSec":591422822.6521295,"samples":5},{"name":"DefineProperty (getter)","opsSec":597271386.7437193,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68750066.31776163,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":597245990.9416922,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":68525449.13378866,"samples":5},{"name":"DefineProperty (writable)","opsSec":599068981.768851,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597257205.1820956,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":599623789.0053993,"samples":7},{"name":"DefineProperties (getter)","opsSec":68456711.34567119,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68382229.37071343,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50228753.64049043,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|477,398,594|97|
|Setter|8,584,743|97|
|Method|482,103,883|94|
|DefineProperty (setter)|480,085,611|94|
|DefineProperty (setter & enumerable=false)|8,470,199|96|
|DefineProperty (setter & configurable=false)|8,578,790|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,568,327|96|
|DefineProperty (writable)|483,367,765|97|
|DefineProperty (writable & enumerable=false)|483,228,782|97|
|DefineProperty (writable & enumerable=false & configurable=false)|482,562,600|96|
|DefineProperties (setter)|534,935,636|73|
|DefineProperties (setter & enumerable=false)|7,732,820|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,602,625|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":477398594.06289136,"samples":8},{"name":"Setter","opsSec":8584742.539366266,"samples":5},{"name":"Method","opsSec":482103882.9149275,"samples":6},{"name":"DefineProperty (setter)","opsSec":480085611.0755976,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8470198.54359028,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8578789.909768617,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8568327.050794642,"samples":5},{"name":"DefineProperty (writable)","opsSec":483367765.3168722,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":483228782.1621504,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":482562599.88431466,"samples":6},{"name":"DefineProperties (setter)","opsSec":534935636.3878011,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7732819.6535233,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7602625.412829265,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,135,310|89|
|Using replaceAll()|2,037,161|92|
|Using replaceAll(//g)|1,973,956|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2135309.7996819536,"samples":6},{"name":"Using replaceAll()","opsSec":2037161.1466056737,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1973955.9121667137,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,410,336|89|
|{ ...object, __proto__: null }|21,471,029|95|
|{ ...object, newProp: true }|664,119|89|
|structuredClone|195,016|98|
|JSON.parse + JSON.stringify|143,682|94|
|loop + object.keys starting with {}|1,156,373|96|
|loop + object.keys starting with { __proto__: null }|596,479|91|
|loop + object.keys starting with { randomProp: true }|451,094|92|
|object.keys + reduce(FN, {})|433,975|93|
|object.keys + reduce(FN, { __proto__: null })|614,840|92|
|object.keys + reduce(FN, { newProp: true })|450,314|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20410335.816478197,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21471028.549336005,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":664119.0035461074,"samples":3},{"name":"structuredClone","opsSec":195016.2697689677,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143681.91209112125,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1156372.555159932,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":596478.7641211303,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":451093.94345376705,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":433974.89039209706,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":614840.1327644103,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":450314.3117779,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|184,318|85|
|Sort using first char|997,635|87|
|Sort using localeCompare|869,217|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":184318.46880034648,"samples":5},{"name":"Sort using first char","opsSec":997634.6455932336,"samples":7},{"name":"Sort using localeCompare","opsSec":869217.3771959001,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,248|93|
|{...smallObject} - Total keys: 2|69,727,979|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,288|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,491|98|
|{ ...bigObject, ...anotherBigObject }|788|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,964,604|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,755,240|98|
|{ ...smallObject, ...anotherSmallObject }|14,566,880|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1247.557165106978,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":69727979.22178206,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1288.0333635719558,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3490.8869972311754,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":788.3060221977894,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7964603.595346169,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19755240.013183244,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14566880.480853284,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,664|87|
|streams.web.Readable reading 1e3 * "some data"|488|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1663.7929359736636,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":487.94110691623945,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,763|93|
|streams.web.WritableStream writing 1e3 * "some data"|979|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4762.994951498457,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":978.5074627545547,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|584,965,601|93|
|Using backtick (`)|593,542,994|96|
|Using array.join|5,578,825|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":584965600.6718051,"samples":6},{"name":"Using backtick (`)","opsSec":593542994.1492763,"samples":6},{"name":"Using array.join","opsSec":5578824.644245909,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|594,340,418|94|
|Using indexof|599,742,876|97|
|Using RegExp.test|10,232,699|87|
|Using RegExp.text with cached regex pattern|10,630,026|87|
|Using new RegExp.test|3,244,380|96|
|Using new RegExp.test with cached regex pattern|3,903,174|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":594340417.7336998,"samples":5},{"name":"Using indexof","opsSec":599742876.3846713,"samples":6},{"name":"Using RegExp.test","opsSec":10232699.089201855,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":10630025.850518184,"samples":5},{"name":"Using new RegExp.test","opsSec":3244380.492413956,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3903174.0012314743,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|712,563,169|95|
|Using this|714,284,036|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":712563168.5556358,"samples":8},{"name":"Using this","opsSec":714284036.3177735,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,705,803|90|
|Date.now()|15,536,694|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7705802.704858642,"samples":5},{"name":"Date.now()","opsSec":15536694.498747312,"samples":4}]}-->
