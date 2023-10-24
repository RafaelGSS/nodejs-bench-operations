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
|new Array|322|70|
|Array.from|17|47|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":322.214458553185,"samples":2},{"name":"Array.from","opsSec":17.45346728209954,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,127|83|
|new Blob (1024)|419|66|
|text (128)|3,392|84|
|text (1024)|431|82|
|arrayBuffer (128)|3,416|79|
|arrayBuffer (1024)|444|85|
|slice (0, 64)|38,789|64|
|slice (0, 512)|11,089|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3126.569426384419,"samples":3},{"name":"new Blob (1024)","opsSec":418.553671008715,"samples":2},{"name":"text (128)","opsSec":3391.945146817779,"samples":4},{"name":"text (1024)","opsSec":430.8956086148587,"samples":2},{"name":"arrayBuffer (128)","opsSec":3415.7801902772294,"samples":4},{"name":"arrayBuffer (1024)","opsSec":444.3779744063955,"samples":2},{"name":"slice (0, 64)","opsSec":38789.324765544654,"samples":4},{"name":"slice (0, 512)","opsSec":11089.301745628087,"samples":6}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,416|53|
|[True conditional] Using constructor name|129,623|94|
|[True conditional] Check if property is valid then instanceof |126,391|96|
|[False conditional] Using instanceof only|599,355,079|98|
|[False conditional] Using constructor name|598,961,631|97|
|[False conditional] Check if property is valid then instanceof |599,699,343|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":166416.13418465285,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":129623.01715076064,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":126390.72425536482,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":599355078.6844014,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":598961631.2536556,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":599699343.2106645,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,951|93|
|crypto.verify('RSA-SHA256')|4,482|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4951.1442055376,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4482.123015760631,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|983,330|94|
|fromUnixToISOString(new Date())|1,614,495|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":983329.9383630567,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1614494.5174961968,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,107|84|
|Intl.DateTimeFormat().format(new Date())|12,403|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,850|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,005|96|
|Reusing Intl.DateTimeFormat()|459,894|95|
|Date.toLocaleDateString()|524,034|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,665|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13107.023255716365,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12403.045261384717,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12850.135399477957,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16005.061705144575,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":459894.238611171,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":524034.15555264946,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14665.328792679553,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|697,050|96|
|Using brackets {}|720,087|95|
|Using '' + |715,500|97|
|Using date.toString()|777,075|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":697050.3393435635,"samples":4},{"name":"Using brackets {}","opsSec":720087.3448230372,"samples":3},{"name":"Using '' + ","opsSec":715499.9042007573,"samples":6},{"name":"Using date.toString()","opsSec":777075.3174471415,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,873,481|95|
|Using delete property (proto: null)|15,294,919|94|
|Using delete property (cached proto: null)|2,865,804|97|
|Using undefined assignment|597,646,785|96|
|Using undefined assignment (proto: null)|16,276,364|91|
|Using undefined property (cached proto: null)|600,791,133|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2873480.9450949007,"samples":9},{"name":"Using delete property (proto: null)","opsSec":15294918.955986233,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2865804.1380866207,"samples":5},{"name":"Using undefined assignment","opsSec":597646784.8587056,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":16276364.486070713,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":600791132.6579573,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|139,689|56|
|NodeError|112,405|88|
|NodeError Range|112,036|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":139688.9116882903,"samples":6},{"name":"NodeError","opsSec":112404.86235450249,"samples":3},{"name":"NodeError Range","opsSec":112036.38071641525,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,445,237|95|
|Function returning explicitly undefined|1,446,403|96|
|Function returning implicitly undefined|1,453,168|94|
|Function returning string|1,446,815|97|
|Function returning integer|1,457,518|97|
|Function returning float|1,426,363|97|
|Function returning functions|1,423,992|95|
|Function returning arrow functions|1,442,628|95|
|Function returning empty object|1,452,961|95|
|Function returning empty array|1,451,858|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1445236.8772207655,"samples":9},{"name":"Function returning explicitly undefined","opsSec":1446402.6197286756,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1453167.827475097,"samples":5},{"name":"Function returning string","opsSec":1446815.2577408822,"samples":6},{"name":"Function returning integer","opsSec":1457517.6644332577,"samples":7},{"name":"Function returning float","opsSec":1426362.910868644,"samples":9},{"name":"Function returning functions","opsSec":1423992.147210448,"samples":5},{"name":"Function returning arrow functions","opsSec":1442628.174388818,"samples":5},{"name":"Function returning empty object","opsSec":1452961.4650884236,"samples":5},{"name":"Function returning empty array","opsSec":1451857.506352341,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|787,741,644|86|
|using Array.includes (first item)|802,978,507|91|
|Using raw comparison|795,573,245|90|
|Using raw comparison (first item)|779,262,121|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":787741644.4229387,"samples":6},{"name":"using Array.includes (first item)","opsSec":802978506.574192,"samples":7},{"name":"Using raw comparison","opsSec":795573245.2927407,"samples":5},{"name":"Using raw comparison (first item)","opsSec":779262120.6746552,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,243,122|93|
|Using Object.getOwnPropertyNames()|61,911,826|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":59243122.43460567,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":61911826.47249659,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|708,537,754|96|
|Length = 10_000 - Array.at|714,311,272|97|
|Length = 1_000_000 - Array.at|714,199,233|97|
|Length = 100 - Array[length - 1]|716,711,399|95|
|Length = 10_000 - Array[length - 1]|716,027,784|97|
|Length = 1_000_000 - Array[length - 1]|716,219,211|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":708537753.538098,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":714311271.5303947,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":714199232.5182551,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":716711399.0179228,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":716027784.3464487,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":716219211.4158398,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,722,387|88|
|Object.create({})|1,706,380|83|
|Cached Empty.prototype|597,528,742|96|
|Empty.prototype|1,659,578|78|
|Empty class|1,065,534|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":54722386.7137612,"samples":6},{"name":"Object.create({})","opsSec":1706379.931757825,"samples":3},{"name":"Cached Empty.prototype","opsSec":597528741.5277704,"samples":9},{"name":"Empty.prototype","opsSec":1659577.8194882893,"samples":3},{"name":"Empty class","opsSec":1065534.3480722527,"samples":5}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|716,253,918|96|
|Using optional chain (obj.field?.field2) (undefined)|720,412,710|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|720,345,205|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|718,830,370|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":716253917.6492393,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":720412709.505919,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":720345204.7328719,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":718830369.7903994,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|579,930,670|89|
|Using parseInt(x, 10) - big number (10 len)|589,487,817|94|
|Using + - small number (2 len)|592,070,390|98|
|Using + - big number (10 len)|590,669,138|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":579930669.6306747,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":589487817.0513053,"samples":8},{"name":"Using + - small number (2 len)","opsSec":592070390.2545561,"samples":6},{"name":"Using + - big number (10 len)","opsSec":590669137.7957624,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|752,176|68|
|Using ? operator to avoid rejection|814,270|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":752175.560180897,"samples":5},{"name":"Using ? operator to avoid rejection","opsSec":814269.6205202434,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|587,932,534|90|
|Raw usage underscore usage|599,596,526|88|
|Manipulating private properties using #|588,938,767|82|
|Manipulating private properties using underscore(_)|594,846,629|88|
|Manipulating private properties using Symbol|600,714,603|88|
|Manipulating private properties using PrivateSymbol|28,417,136|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":587932533.5210516,"samples":8},{"name":"Raw usage underscore usage","opsSec":599596526.1317798,"samples":7},{"name":"Manipulating private properties using #","opsSec":588938767.152844,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":594846628.751147,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":600714602.8631976,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":28417135.567724608,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,822,467|95|
|Adding property in the object creation - small object|5,901,735|97|
|Adding property after the function creation - small class|201,881|81|
|Adding property in the function creation - small class|204,404|85|
|Adding property after the class creation - small class|165,311|78|
|Adding property in the class creation - small class|165,939|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5822466.851694605,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":5901734.70840849,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":201880.76834642026,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":204403.54987190542,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":165311.18189505636,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":165939.36172895908,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|580,676,655|94|
|Getter|43,145,042|93|
|Method|573,410,556|90|
|DefineProperty (getter)|567,879,825|91|
|DefineProperty (getter & enumerable=false)|45,038,118|95|
|DefineProperty (getter & configurable=false)|586,614,940|91|
|DefineProperty (getter & enumerable=false & configurable=false)|45,062,680|97|
|DefineProperty (writable)|587,745,041|89|
|DefineProperty (writable & enumerable=false)|590,553,437|95|
|DefineProperty (writable & enumerable=false & configurable=false)|254,936,494|48|
|DefineProperties (getter)|25,295,795|86|
|DefineProperties (getter & enumerable=false)|44,977,051|96|
|DefineProperties (getter & enumerable=false & configurable=false)|45,068,821|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":580676655.3954877,"samples":7},{"name":"Getter","opsSec":43145042.00112312,"samples":7},{"name":"Method","opsSec":573410556.3928417,"samples":6},{"name":"DefineProperty (getter)","opsSec":567879825.4339269,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":45038118.27400225,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":586614939.9120469,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":45062679.6294818,"samples":6},{"name":"DefineProperty (writable)","opsSec":587745041.0694197,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590553437.0029674,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":254936493.95055422,"samples":7},{"name":"DefineProperties (getter)","opsSec":25295794.545063715,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":44977050.80180999,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45068820.74315682,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|475,581,052|93|
|Setter|8,535,735|97|
|Method|481,556,222|95|
|DefineProperty (setter)|465,528,090|94|
|DefineProperty (setter & enumerable=false)|8,441,027|99|
|DefineProperty (setter & configurable=false)|8,544,475|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,580,315|97|
|DefineProperty (writable)|483,173,637|97|
|DefineProperty (writable & enumerable=false)|483,041,911|96|
|DefineProperty (writable & enumerable=false & configurable=false)|426,885,953|86|
|DefineProperties (setter)|65,149,333|85|
|DefineProperties (setter & enumerable=false)|8,464,397|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,430,473|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":475581052.4696927,"samples":6},{"name":"Setter","opsSec":8535734.977692023,"samples":5},{"name":"Method","opsSec":481556222.1272536,"samples":6},{"name":"DefineProperty (setter)","opsSec":465528090.2717145,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8441027.020148652,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8544474.704276701,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8580314.742639324,"samples":7},{"name":"DefineProperty (writable)","opsSec":483173636.7093125,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":483041911.4287671,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":426885952.9417701,"samples":7},{"name":"DefineProperties (setter)","opsSec":65149333.06178079,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8464397.411553184,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8430473.308156103,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,193,711|89|
|Using replaceAll()|2,061,722|97|
|Using replaceAll(//g)|2,007,925|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2193711.4978450923,"samples":5},{"name":"Using replaceAll()","opsSec":2061721.535319508,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2007924.971239234,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,040,118|92|
|{ ...object, __proto__: null }|21,077,367|95|
|{ ...object, newProp: true }|613,326|85|
|structuredClone|180,645|92|
|JSON.parse + JSON.stringify|149,409|98|
|loop + object.keys starting with {}|864,902|98|
|loop + object.keys starting with { __proto__: null }|501,299|97|
|loop + object.keys starting with { randomProp: true }|389,920|96|
|object.keys + reduce(FN, {})|370,701|95|
|object.keys + reduce(FN, { __proto__: null })|501,162|91|
|object.keys + reduce(FN, { newProp: true })|390,176|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20040117.612303577,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":21077366.538307697,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":613326.0877272964,"samples":3},{"name":"structuredClone","opsSec":180645.15653937607,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":149409.36881027842,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":864901.9196171783,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":501299.42545071157,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":389920.1772853752,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":370700.9029215952,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":501161.513292064,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":390175.5671899106,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,274|95|
|Sort using first char|924,130|95|
|Sort using localeCompare|829,336|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":179274.39912035016,"samples":5},{"name":"Sort using first char","opsSec":924130.2542174365,"samples":7},{"name":"Sort using localeCompare","opsSec":829335.5546839855,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,001|90|
|{...smallObject} - Total keys: 2|50,597,381|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,101|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,030|87|
|{ ...bigObject, ...anotherBigObject }|622|82|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,148,591|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,066,812|90|
|{ ...smallObject, ...anotherSmallObject }|13,262,787|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1001.0338483020508,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":50597380.88229785,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1100.6600708265294,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3029.704813831953,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":621.5368633389234,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8148591.100703348,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":21066812.126989618,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13262786.677458461,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,334|80|
|streams.web.Readable reading 1e3 * "some data"|478|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1334.3283004047719,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":478.0548835611762,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,244|89|
|streams.web.WritableStream writing 1e3 * "some data"|782|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:46:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4244.331499596762,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":781.5997936902197,"samples":3}]}-->

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
