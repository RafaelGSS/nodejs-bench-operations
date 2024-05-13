## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,041,795|8020898|
|Using dot notation|16,115,290|8057646|
|Using define property (writable)|3,380,889|1690445|
|Using define property initialized (writable)|4,421,475|2210738|
|Using define property (getter)|2,208,036|1104019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:34:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16041795.96791981,"samples":8020898},{"name":"Using dot notation","opsSec":16115290.517408863,"samples":8057646},{"name":"Using define property (writable)","opsSec":3380889.57400558,"samples":1690445},{"name":"Using define property initialized (writable)","opsSec":4421475.301409127,"samples":2210738},{"name":"Using define property (getter)","opsSec":2208036.5956855104,"samples":1104019}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.311ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|21.617ms
new Array(length)|1,000,000|15.931ms
array.push|100,000,000|2,015.627ms
new Array(length)|100,000,000|4,128.881ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.509ms
new Array(length)|10,000|0.214ms
array.push|1,000,000|17.645ms
new Array(length)|1,000,000|7.87ms
array.push|100,000,000|2,612.13ms
new Array(length)|100,000,000|4,092.483ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|246|124|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:39:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":246.67323446089202,"samples":124},{"name":"Array.from","opsSec":24.24509782678767,"samples":13}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|343,290|171646|
|[True conditional] Using constructor name|332,714|166358|
|[True conditional] Check if property is valid then instanceof |339,350|169676|
|[False conditional] Using instanceof only|16,200,824|8100413|
|[False conditional] Using constructor name|16,133,671|8066836|
|[False conditional] Check if property is valid then instanceof |16,221,320|8110661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":343290.178502329,"samples":171646},{"name":"[True conditional] Using constructor name","opsSec":332714.25657723006,"samples":166358},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":339350.0921738791,"samples":169676},{"name":"[False conditional] Using instanceof only","opsSec":16200824.736390555,"samples":8100413},{"name":"[False conditional] Using constructor name","opsSec":16133671.580497459,"samples":8066836},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16221320.832042493,"samples":8110661}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,317|3659|
|crypto.verify('RSA-SHA256')|7,210|3606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:45:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7317.531195046441,"samples":3659},{"name":"crypto.verify('RSA-SHA256')","opsSec":7210.548819365727,"samples":3606}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,640|525321|
|Using brackets {}|1,045,845|522923|
|Using '' + |1,059,525|529763|
|Using date.toString()|1,166,922|583462|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:50:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1050640.7161169467,"samples":525321},{"name":"Using brackets {}","opsSec":1045845.5105443923,"samples":522923},{"name":"Using '' + ","opsSec":1059525.5465226856,"samples":529763},{"name":"Using date.toString()","opsSec":1166922.468996883,"samples":583462}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,381,200|1690601|
|Using delete property (proto: null)|9,243,254|4621628|
|Using delete property (cached proto: null)|3,348,564|1674283|
|Using undefined assignment|16,122,285|8061143|
|Using undefined assignment (proto: null)|9,015,830|4507916|
|Using undefined property (cached proto: null)|16,129,002|8064502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:52:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3381200.816579621,"samples":1690601},{"name":"Using delete property (proto: null)","opsSec":9243254.70595051,"samples":4621628},{"name":"Using delete property (cached proto: null)","opsSec":3348564.4998463425,"samples":1674283},{"name":"Using undefined assignment","opsSec":16122285.322874255,"samples":8061143},{"name":"Using undefined assignment (proto: null)","opsSec":9015830.629597118,"samples":4507916},{"name":"Using undefined property (cached proto: null)","opsSec":16129002.32263459,"samples":8064502}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|321,438|160720|
|NodeError|324,222|162112|
|NodeError Range|330,964|165483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:54:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":321438.29701991274,"samples":160720},{"name":"NodeError","opsSec":324222.7595237371,"samples":162112},{"name":"NodeError Range","opsSec":330964.0360594117,"samples":165483}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,656,007|828004|
|Function returning explicitly undefined|1,681,089|840545|
|Function returning implicitly undefined|1,711,043|855522|
|Function returning string|1,663,564|831783|
|Function returning integer|1,711,538|855770|
|Function returning float|1,693,534|846768|
|Function returning functions|1,667,595|833798|
|Function returning arrow functions|1,680,141|840072|
|Function returning empty object|1,693,944|846973|
|Function returning empty array|1,700,180|850091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:56:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1656007.4203971284,"samples":828004},{"name":"Function returning explicitly undefined","opsSec":1681089.0485038268,"samples":840545},{"name":"Function returning implicitly undefined","opsSec":1711043.4695762966,"samples":855522},{"name":"Function returning string","opsSec":1663564.26656662,"samples":831783},{"name":"Function returning integer","opsSec":1711538.5725772658,"samples":855770},{"name":"Function returning float","opsSec":1693534.259047292,"samples":846768},{"name":"Function returning functions","opsSec":1667595.0528071239,"samples":833798},{"name":"Function returning arrow functions","opsSec":1680141.6410811746,"samples":840072},{"name":"Function returning empty object","opsSec":1693944.9531426444,"samples":846973},{"name":"Function returning empty array","opsSec":1700180.1468053753,"samples":850091}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,940,904|7470453|
|using Array.includes (first item)|15,232,364|7616183|
|Using raw comparison|16,191,561|8095781|
|Using raw comparison (first item)|16,071,652|8035827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:58:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14940904.954132136,"samples":7470453},{"name":"using Array.includes (first item)","opsSec":15232364.690021653,"samples":7616183},{"name":"Using raw comparison","opsSec":16191561.287592798,"samples":8095781},{"name":"Using raw comparison (first item)","opsSec":16071652.617877457,"samples":8035827}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,845,957|6922979|
|Using Object.getOwnPropertyNames()|13,919,605|6959803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13845957.999990389,"samples":6922979},{"name":"Using Object.getOwnPropertyNames()","opsSec":13919605.053467827,"samples":6959803}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,782,314|7891158|
|Length = 10_000 - Array.at|15,849,586|7924794|
|Length = 1_000_000 - Array.at|15,849,334|7924668|
|Length = 100 - Array[length - 1]|15,821,416|7910709|
|Length = 10_000 - Array[length - 1]|15,905,223|7952612|
|Length = 1_000_000 - Array[length - 1]|15,897,925|7948963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:01:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15782314.169264073,"samples":7891158},{"name":"Length = 10_000 - Array.at","opsSec":15849586.605200244,"samples":7924794},{"name":"Length = 1_000_000 - Array.at","opsSec":15849334.383385163,"samples":7924668},{"name":"Length = 100 - Array[length - 1]","opsSec":15821416.987369973,"samples":7910709},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15905223.777300058,"samples":7952612},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15897925.42756969,"samples":7948963}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,183,281|6591641|
|Object.create({})|1,736,539|868271|
|Cached Empty.prototype|16,082,988|8041495|
|Empty.prototype|2,675,979|1341360|
|Empty class|1,548,199|774100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:05:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13183281.920893177,"samples":6591641},{"name":"Object.create({})","opsSec":1736539.912679803,"samples":868271},{"name":"Cached Empty.prototype","opsSec":16082988.713387936,"samples":8041495},{"name":"Empty.prototype","opsSec":2675979.0322025144,"samples":1341360},{"name":"Empty class","opsSec":1548199.0277323655,"samples":774100}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,093,855|8046928|
|Using optional chain (obj.field?.field2) (undefined)|16,091,201|8045601|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,187,410|8093706|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,069,436|8034719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:06:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16093855.96782248,"samples":8046928},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16091201.002344174,"samples":8045601},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16187410.348841716,"samples":8093706},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16069436.232319383,"samples":8034719}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,058,869|8029435|
|Using parseInt(x, 10) - big number (10 len)|16,004,278|8002140|
|Using + - small number (2 len)|16,118,322|8059162|
|Using + - big number (10 len)|16,069,267|8034634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16058869.646708084,"samples":8029435},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16004278.911692072,"samples":8002140},{"name":"Using + - small number (2 len)","opsSec":16118322.130239518,"samples":8059162},{"name":"Using + - big number (10 len)","opsSec":16069267.935711566,"samples":8034634}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,063,051|531526|
|Using ? operator to avoid rejection|1,246,013|623007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:11:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1063051.5322574275,"samples":531526},{"name":"Using ? operator to avoid rejection","opsSec":1246013.0231257987,"samples":623007}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,793,299|7896650|
|Raw usage underscore usage|15,831,022|7915512|
|Manipulating private properties using #|15,779,684|7889843|
|Manipulating private properties using underscore(_)|15,812,450|7906226|
|Manipulating private properties using Symbol|15,826,848|7913425|
|Manipulating private properties using PrivateSymbol|12,695,544|6347773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:12:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15793299.526192773,"samples":7896650},{"name":"Raw usage underscore usage","opsSec":15831022.891819527,"samples":7915512},{"name":"Manipulating private properties using #","opsSec":15779684.548307506,"samples":7889843},{"name":"Manipulating private properties using underscore(_)","opsSec":15812450.418672794,"samples":7906226},{"name":"Manipulating private properties using Symbol","opsSec":15826848.543897428,"samples":7913425},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12695544.654198099,"samples":6347773}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,069,472|2034737|
|Adding property in the object creation - small object|4,015,772|2007887|
|Adding property after the function creation - small class|284,472|142237|
|Adding property in the function creation - small class|324,232|162117|
|Adding property after the class creation - small class|315,996|158760|
|Adding property in the class creation - small class|316,535|158268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4069472.9337984454,"samples":2034737},{"name":"Adding property in the object creation - small object","opsSec":4015772.8514891276,"samples":2007887},{"name":"Adding property after the function creation - small class","opsSec":284472.70508029475,"samples":142237},{"name":"Adding property in the function creation - small class","opsSec":324232.3172339976,"samples":162117},{"name":"Adding property after the class creation - small class","opsSec":315996.3156931137,"samples":158760},{"name":"Adding property in the class creation - small class","opsSec":316535.74360608065,"samples":158268}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,088,357|8044179|
|Getter|13,927,130|6963566|
|Method|15,918,809|7959405|
|DefineProperty (getter)|15,901,982|7950992|
|DefineProperty (getter & enumerable=false)|13,913,962|6956982|
|DefineProperty (getter & configurable=false)|16,089,153|8044577|
|DefineProperty (getter & enumerable=false & configurable=false)|13,938,043|6969022|
|DefineProperty (writable)|16,061,869|8030935|
|DefineProperty (writable & enumerable=false)|16,095,558|8047780|
|DefineProperty (writable & enumerable=false & configurable=false)|16,115,940|8057971|
|DefineProperties (getter)|13,945,831|6972916|
|DefineProperties (getter & enumerable=false)|13,971,560|6985781|
|DefineProperties (getter & enumerable=false & configurable=false)|13,986,045|6993023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:17:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16088357.034707997,"samples":8044179},{"name":"Getter","opsSec":13927130.579502728,"samples":6963566},{"name":"Method","opsSec":15918809.522586646,"samples":7959405},{"name":"DefineProperty (getter)","opsSec":15901982.282496763,"samples":7950992},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13913962.747887697,"samples":6956982},{"name":"DefineProperty (getter & configurable=false)","opsSec":16089153.420651091,"samples":8044577},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13938043.804859005,"samples":6969022},{"name":"DefineProperty (writable)","opsSec":16061869.518085668,"samples":8030935},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16095558.647999667,"samples":8047780},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16115940.517693192,"samples":8057971},{"name":"DefineProperties (getter)","opsSec":13945831.916380178,"samples":6972916},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13971560.938181952,"samples":6985781},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13986045.804286268,"samples":6993023}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,868,906|7934454|
|Setter|6,606,385|3303193|
|Method|15,841,436|7920719|
|DefineProperty (setter)|15,782,830|7891416|
|DefineProperty (setter & enumerable=false)|6,654,243|3327122|
|DefineProperty (setter & configurable=false)|6,564,923|3282462|
|DefineProperty (setter & enumerable=false & configurable=false)|6,666,776|3333389|
|DefineProperty (writable)|15,923,404|7961703|
|DefineProperty (writable & enumerable=false)|15,955,181|7977591|
|DefineProperty (writable & enumerable=false & configurable=false)|15,911,025|7955513|
|DefineProperties (setter)|15,950,388|7975195|
|DefineProperties (setter & enumerable=false)|6,694,553|3347277|
|DefineProperties (setter & enumerable=false & configurable=false)|6,690,028|3345015|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15868906.603551507,"samples":7934454},{"name":"Setter","opsSec":6606385.326165245,"samples":3303193},{"name":"Method","opsSec":15841436.574352406,"samples":7920719},{"name":"DefineProperty (setter)","opsSec":15782830.579529034,"samples":7891416},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6654243.840304291,"samples":3327122},{"name":"DefineProperty (setter & configurable=false)","opsSec":6564923.737406592,"samples":3282462},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6666776.453338529,"samples":3333389},{"name":"DefineProperty (writable)","opsSec":15923404.375817303,"samples":7961703},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15955181.265910497,"samples":7977591},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15911025.39533649,"samples":7955513},{"name":"DefineProperties (setter)","opsSec":15950388.947293123,"samples":7975195},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6694553.718737465,"samples":3347277},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6690028.541574257,"samples":3345015}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,794,579|5397290|
|{ ...object, __proto__: null }|2,257,346|1128674|
|{ ...object, newProp: true }|10,457,773|5228887|
|structuredClone|321,805|160903|
|JSON.parse + JSON.stringify|293,127|146564|
|loop + object.keys starting with {}|1,479,388|739695|
|loop + object.keys starting with { __proto__: null }|883,264|441633|
|loop + object.keys starting with { randomProp: true }|656,987|328494|
|object.keys + reduce(FN, {})|1,541,204|770603|
|object.keys + reduce(FN, { __proto__: null })|878,181|439091|
|object.keys + reduce(FN, { newProp: true })|698,516|349259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:25:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10794579.632983554,"samples":5397290},{"name":"{ ...object, __proto__: null }","opsSec":2257346.8487518057,"samples":1128674},{"name":"{ ...object, newProp: true }","opsSec":10457773.247034859,"samples":5228887},{"name":"structuredClone","opsSec":321805.57779111405,"samples":160903},{"name":"JSON.parse + JSON.stringify","opsSec":293127.17924405326,"samples":146564},{"name":"loop + object.keys starting with {}","opsSec":1479388.7129336982,"samples":739695},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":883264.201674023,"samples":441633},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656987.8213000409,"samples":328494},{"name":"object.keys + reduce(FN, {})","opsSec":1541204.9951341543,"samples":770603},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":878181.016437999,"samples":439091},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":698516.2718705345,"samples":349259}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|329,351|164693|
|Sort using first char|1,335,892|667947|
|Sort using localeCompare|1,256,660|628331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":329351.8159163356,"samples":164693},{"name":"Sort using first char","opsSec":1335892.987393242,"samples":667947},{"name":"Sort using localeCompare","opsSec":1256660.8966520808,"samples":628331}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|12,203,319|6101660|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,479|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,939|3470|
|{ ...bigObject, ...anotherBigObject }|1,372|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,892,838|3446420|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,067,528|5533765|
|{ ...smallObject, ...anotherSmallObject }|9,426,214|4713108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:44:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.8670443830556,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":12203319.389828498,"samples":6101660},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2479.4026424801636,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6939.766879349981,"samples":3470},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1372.721186669745,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6892838.676573448,"samples":3446420},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11067528.29553802,"samples":5533765},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9426214.586051181,"samples":4713108}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,159,490|8079746|
|Using backtick (`)|16,284,069|8142035|
|Using array.join|6,030,203|3015102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:03:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16159490.577968996,"samples":8079746},{"name":"Using backtick (`)","opsSec":16284069.739465045,"samples":8142035},{"name":"Using array.join","opsSec":6030203.698494901,"samples":3015102}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,835,090|7917546|
|(short string) (true) String#slice and strict comparison|16,185,189|8092595|
|(long string) (true) String#endsWith|14,783,574|7391788|
|(long string) (true) String#slice and strict comparison|16,112,723|8056362|
|(short string) (false) String#endsWith|15,991,889|7995946|
|(short string) (false) String#slice and strict comparison|16,177,341|8088671|
|(long string) (false) String#endsWith|15,430,753|7715378|
|(long string) (false) String#slice and strict comparison|16,164,346|8082174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:15:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15835090.543204792,"samples":7917546},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16185189.35255314,"samples":8092595},{"name":"(long string) (true) String#endsWith","opsSec":14783574.31468567,"samples":7391788},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16112723.387703585,"samples":8056362},{"name":"(short string) (false) String#endsWith","opsSec":15991889.952957107,"samples":7995946},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16177341.191030499,"samples":8088671},{"name":"(long string) (false) String#endsWith","opsSec":15430753.932234822,"samples":7715378},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16164346.448357703,"samples":8082174}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,101,480|8050741|
|Using indexof|16,220,177|8110089|
|Using RegExp.test|7,966,860|3983431|
|Using RegExp.text with cached regex pattern|8,101,213|4050607|
|Using new RegExp.test|3,629,379|1814690|
|Using new RegExp.test with cached regex pattern|3,838,488|1919245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:24:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16101480.711879928,"samples":8050741},{"name":"Using indexof","opsSec":16220177.675555652,"samples":8110089},{"name":"Using RegExp.test","opsSec":7966860.820927038,"samples":3983431},{"name":"Using RegExp.text with cached regex pattern","opsSec":8101213.497715075,"samples":4050607},{"name":"Using new RegExp.test","opsSec":3629379.905642111,"samples":1814690},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3838488.203586424,"samples":1919245}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,688,371|7844186|
|(short string) (true) String#slice and strict comparison|16,114,635|8057318|
|(long string) (true) String#startsWith|14,799,262|7399632|
|(long string) (true) String#slice and strict comparison|16,161,627|8080814|
|(short string) (false) String#startsWith|16,009,767|8004884|
|(short string) (false) String#slice and strict comparison|16,204,602|8102302|
|(long string) (false) String#startsWith|15,578,299|7789150|
|(long string) (false) String#slice and strict comparison|16,209,932|8104967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:35:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15688371.341082046,"samples":7844186},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16114635.29094757,"samples":8057318},{"name":"(long string) (true) String#startsWith","opsSec":14799262.993625548,"samples":7399632},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16161627.806064576,"samples":8080814},{"name":"(short string) (false) String#startsWith","opsSec":16009767.135413107,"samples":8004884},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16204602.63881905,"samples":8102302},{"name":"(long string) (false) String#startsWith","opsSec":15578299.408096852,"samples":7789150},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16209932.897787644,"samples":8104967}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,573,012|7786507|
|Using this|15,884,157|7942079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15573012.598422483,"samples":7786507},{"name":"Using this","opsSec":15884157.587048283,"samples":7942079}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,572,076|3286039|
|Date.now()|9,558,583|4779292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:47:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6572076.067809933,"samples":3286039},{"name":"Date.now()","opsSec":9558583.522075452,"samples":4779292}]}-->
