## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,329,710|52173974|
|Using dot notation|71,123,845|35564524|
|Using define property (writable)|4,265,114|2132850|
|Using define property initialized (writable)|5,560,742|2780678|
|Using define property (getter)|2,091,548|1051454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:40:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":104329710.12337333,"samples":52173974},{"name":"Using dot notation","opsSec":71123845.71742885,"samples":35564524},{"name":"Using define property (writable)","opsSec":4265114.689780892,"samples":2132850},{"name":"Using define property initialized (writable)","opsSec":5560742.494402077,"samples":2780678},{"name":"Using define property (getter)","opsSec":2091548.5238823895,"samples":1051454}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.081ms
new Array(length)|100|0.008ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|31.572ms
new Array(length)|1,000,000|7.443ms
array.push|100,000,000|1,821.839ms
new Array(length)|100,000,000|4,401.088ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|28.286ms
new Array(length)|1,000,000|4.668ms
array.push|100,000,000|2,555.187ms
new Array(length)|100,000,000|4,078.468ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|258|130|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:44:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Array","opsSec":258.0822306884179,"samples":130},{"name":"Array.from","opsSec":22.733492533329304,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,468|2237|
|new Blob (1024)|556|280|
|text (128)|4,362|2183|
|text (1024)|571|287|
|arrayBuffer (128)|4,547|2274|
|arrayBuffer (1024)|571|286|
|slice (0, 64)|61,739|35522|
|slice (0, 512)|24,802|12404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:46:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4468.439920207286,"samples":2237},{"name":"new Blob (1024)","opsSec":556.4489453780136,"samples":280},{"name":"text (128)","opsSec":4362.991010893445,"samples":2183},{"name":"text (1024)","opsSec":571.1255229584481,"samples":287},{"name":"arrayBuffer (128)","opsSec":4547.0232903031965,"samples":2274},{"name":"arrayBuffer (1024)","opsSec":571.217088715772,"samples":286},{"name":"slice (0, 64)","opsSec":61739.819671303856,"samples":35522},{"name":"slice (0, 512)","opsSec":24802.34685068702,"samples":12404}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|388,014|194694|
|[True conditional] Using constructor name|309,852|154928|
|[True conditional] Check if property is valid then instanceof |313,637|156823|
|[False conditional] Using instanceof only|96,723,406|48375828|
|[False conditional] Using constructor name|96,631,036|48334863|
|[False conditional] Check if property is valid then instanceof |96,619,138|48310127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:48:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":388014.8867106701,"samples":194694},{"name":"[True conditional] Using constructor name","opsSec":309852.5339895548,"samples":154928},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313637.07890692755,"samples":156823},{"name":"[False conditional] Using instanceof only","opsSec":96723406.76837242,"samples":48375828},{"name":"[False conditional] Using constructor name","opsSec":96631036.0927209,"samples":48334863},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96619138.43542762,"samples":48310127}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,887|3444|
|crypto.verify('RSA-SHA256')|6,935|3468|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:50:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6887.079789720977,"samples":3444},{"name":"crypto.verify('RSA-SHA256')","opsSec":6935.329520083316,"samples":3468}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,431,609|715805|
|fromUnixToISOString(new Date())|2,113,683|1056867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:51:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1431609.301374661,"samples":715805},{"name":"fromUnixToISOString(new Date())","opsSec":2113683.0221928707,"samples":1056867}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,319|8661|
|Intl.DateTimeFormat().format(new Date())|17,200|8601|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,804|8903|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,762|8882|
|Reusing Intl.DateTimeFormat()|540,193|319083|
|Date.toLocaleDateString()|931,344|465688|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,977|10489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:54:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17319.886488891534,"samples":8661},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17200.18489888799,"samples":8601},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17804.947442726974,"samples":8903},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17762.980582544365,"samples":8882},{"name":"Reusing Intl.DateTimeFormat()","opsSec":540193.8430507651,"samples":319083},{"name":"Date.toLocaleDateString()","opsSec":931344.9973877269,"samples":465688},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20977.5781828579,"samples":10489}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,026,277|513139|
|Using brackets {}|1,037,737|518872|
|Using '' + |1,041,603|520802|
|Using date.toString()|1,154,655|577328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:55:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1026277.0660878698,"samples":513139},{"name":"Using brackets {}","opsSec":1037737.0679163863,"samples":518872},{"name":"Using '' + ","opsSec":1041603.3312906612,"samples":520802},{"name":"Using date.toString()","opsSec":1154655.6512939935,"samples":577328}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,515,129|1757713|
|Using delete property (proto: null)|15,286,691|7643363|
|Using delete property (cached proto: null)|3,443,933|1722128|
|Using undefined assignment|73,379,776|36693705|
|Using undefined assignment (proto: null)|16,058,402|8029740|
|Using undefined property (cached proto: null)|73,280,777|36640390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:57:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3515129.365263124,"samples":1757713},{"name":"Using delete property (proto: null)","opsSec":15286691.635517204,"samples":7643363},{"name":"Using delete property (cached proto: null)","opsSec":3443933.6615850106,"samples":1722128},{"name":"Using undefined assignment","opsSec":73379776.44861561,"samples":36693705},{"name":"Using undefined assignment (proto: null)","opsSec":16058402.995027931,"samples":8029740},{"name":"Using undefined property (cached proto: null)","opsSec":73280777.50845356,"samples":36640390}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|363,518|181922|
|NodeError|311,681|155841|
|NodeError Range|305,810|152906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:59:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Error","opsSec":363518.25783248496,"samples":181922},{"name":"NodeError","opsSec":311681.92706642905,"samples":155841},{"name":"NodeError Range","opsSec":305810.28440430446,"samples":152906}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,818,866|914221|
|Function returning explicitly undefined|1,787,976|893989|
|Function returning implicitly undefined|1,586,654|793328|
|Function returning string|1,534,643|767347|
|Function returning integer|1,609,048|804529|
|Function returning float|1,592,236|796119|
|Function returning functions|1,653,573|826800|
|Function returning arrow functions|1,835,268|917752|
|Function returning empty object|1,890,572|945520|
|Function returning empty array|1,856,696|928356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:01:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1818866.0847651786,"samples":914221},{"name":"Function returning explicitly undefined","opsSec":1787976.2799668184,"samples":893989},{"name":"Function returning implicitly undefined","opsSec":1586654.69576984,"samples":793328},{"name":"Function returning string","opsSec":1534643.4918133975,"samples":767347},{"name":"Function returning integer","opsSec":1609048.8638205512,"samples":804529},{"name":"Function returning float","opsSec":1592236.2867537555,"samples":796119},{"name":"Function returning functions","opsSec":1653573.8603044164,"samples":826800},{"name":"Function returning arrow functions","opsSec":1835268.8433325663,"samples":917752},{"name":"Function returning empty object","opsSec":1890572.38204588,"samples":945520},{"name":"Function returning empty array","opsSec":1856696.3331963404,"samples":928356}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,490,263|42745152|
|using Array.includes (first item)|85,517,913|42759058|
|Using raw comparison|95,899,162|47949585|
|Using raw comparison (first item)|97,935,148|48985764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":85490263.64859556,"samples":42745152},{"name":"using Array.includes (first item)","opsSec":85517913.49358083,"samples":42759058},{"name":"Using raw comparison","opsSec":95899162.51986532,"samples":47949585},{"name":"Using raw comparison (first item)","opsSec":97935148.81375135,"samples":48985764}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,065,208|23033939|
|Using Object.getOwnPropertyNames()|40,463,425|20233051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:06:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":46065208.5211662,"samples":23033939},{"name":"Using Object.getOwnPropertyNames()","opsSec":40463425.50625646,"samples":20233051}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|130,176,870|65088460|
|Length = 10_000 - Array.at|72,473,806|36236907|
|Length = 1_000_000 - Array.at|95,050,145|47525447|
|Length = 100 - Array[length - 1]|95,983,924|47991967|
|Length = 10_000 - Array[length - 1]|95,937,795|47968903|
|Length = 1_000_000 - Array[length - 1]|94,047,970|47024658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":130176870.79314284,"samples":65088460},{"name":"Length = 10_000 - Array.at","opsSec":72473806.46272413,"samples":36236907},{"name":"Length = 1_000_000 - Array.at","opsSec":95050145.95535134,"samples":47525447},{"name":"Length = 100 - Array[length - 1]","opsSec":95983924.5935754,"samples":47991967},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95937795.63871807,"samples":47968903},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":94047970.54973333,"samples":47024658}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,724,834|64862437|
|~ (small)|68,045,344|34024309|
|Math.floor (long)|57,491,337|28770981|
|~ (long)|68,541,345|34270684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":129724834.04475112,"samples":64862437},{"name":"~ (small)","opsSec":68045344.61065216,"samples":34024309},{"name":"Math.floor (long)","opsSec":57491337.313032955,"samples":28770981},{"name":"~ (long)","opsSec":68541345.38135603,"samples":34270684}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,079,426|21041559|
|Object.create({})|1,857,698|934974|
|Cached Empty.prototype|75,856,869|37930164|
|Empty.prototype|2,080,244|1040291|
|Empty class|1,381,382|694240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42079426.28777292,"samples":21041559},{"name":"Object.create({})","opsSec":1857698.938807358,"samples":934974},{"name":"Cached Empty.prototype","opsSec":75856869.53360422,"samples":37930164},{"name":"Empty.prototype","opsSec":2080244.7257621225,"samples":1040291},{"name":"Empty class","opsSec":1381382.2590340378,"samples":694240}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|134,703,063|67351554|
|Using optional chain (obj.field?.field2) (undefined)|95,111,443|47558540|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,335,284|48667736|
|Using and operator (obj.field && obj.field.field2) (undefined)|96,127,870|48071092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":134703063.278583,"samples":67351554},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95111443.12521173,"samples":47558540},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97335284.72691219,"samples":48667736},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":96127870.75230072,"samples":48071092}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,841,294|66938038|
|Using parseInt(x, 10) - big number (10 len)|97,431,048|48715525|
|Using + - small number (2 len)|94,518,863|47259433|
|Using + - big number (10 len)|97,921,898|48960954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:16:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133841294.39514294,"samples":66938038},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97431048.24624114,"samples":48715525},{"name":"Using + - small number (2 len)","opsSec":94518863.35347182,"samples":47259433},{"name":"Using + - big number (10 len)","opsSec":97921898.0119664,"samples":48960954}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,024,713|517062|
|Using ? operator to avoid rejection|1,092,335|546662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:19:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":1024713.1979441922,"samples":517062},{"name":"Using ? operator to avoid rejection","opsSec":1092335.1090257987,"samples":546662}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|116,729,977|58478965|
|Raw usage underscore usage|73,241,314|36994093|
|Manipulating private properties using #|84,782,349|42395301|
|Manipulating private properties using underscore(_)|88,162,998|44081505|
|Manipulating private properties using Symbol|93,204,504|46608695|
|Manipulating private properties using PrivateSymbol|34,641,715|17320862|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:21:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":116729977.83161078,"samples":58478965},{"name":"Raw usage underscore usage","opsSec":73241314.72426552,"samples":36994093},{"name":"Manipulating private properties using #","opsSec":84782349.1165723,"samples":42395301},{"name":"Manipulating private properties using underscore(_)","opsSec":88162998.18615824,"samples":44081505},{"name":"Manipulating private properties using Symbol","opsSec":93204504.10448955,"samples":46608695},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34641715.68598823,"samples":17320862}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,452,403|3726205|
|Adding property in the object creation - small object|7,317,635|3658820|
|Adding property after the function creation - small class|234,322|118237|
|Adding property in the function creation - small class|243,098|122681|
|Adding property after the class creation - small class|239,387|121434|
|Adding property in the class creation - small class|240,724|121955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7452403.337551416,"samples":3726205},{"name":"Adding property in the object creation - small object","opsSec":7317635.155725528,"samples":3658820},{"name":"Adding property after the function creation - small class","opsSec":234322.6746200517,"samples":118237},{"name":"Adding property in the function creation - small class","opsSec":243098.18702900235,"samples":122681},{"name":"Adding property after the class creation - small class","opsSec":239387.46048999997,"samples":121434},{"name":"Adding property in the class creation - small class","opsSec":240724.4086834512,"samples":121955}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|146,476,172|73238109|
|Getter|50,730,736|25386675|
|Method|98,170,661|49085341|
|DefineProperty (getter)|100,546,805|50273538|
|DefineProperty (getter & enumerable=false)|51,223,026|25619513|
|DefineProperty (getter & configurable=false)|99,849,754|49926266|
|DefineProperty (getter & enumerable=false & configurable=false)|51,672,360|25837319|
|DefineProperty (writable)|98,757,294|49378885|
|DefineProperty (writable & enumerable=false)|98,884,315|49442171|
|DefineProperty (writable & enumerable=false & configurable=false)|96,236,234|48118150|
|DefineProperties (getter)|50,821,909|25410957|
|DefineProperties (getter & enumerable=false)|50,674,795|25467204|
|DefineProperties (getter & enumerable=false & configurable=false)|52,145,826|26072956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":146476172.88533875,"samples":73238109},{"name":"Getter","opsSec":50730736.58711272,"samples":25386675},{"name":"Method","opsSec":98170661.3841611,"samples":49085341},{"name":"DefineProperty (getter)","opsSec":100546805.52909312,"samples":50273538},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51223026.18043438,"samples":25619513},{"name":"DefineProperty (getter & configurable=false)","opsSec":99849754.77892058,"samples":49926266},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51672360.17901859,"samples":25837319},{"name":"DefineProperty (writable)","opsSec":98757294.18735659,"samples":49378885},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98884315.30123487,"samples":49442171},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96236234.36688817,"samples":48118150},{"name":"DefineProperties (getter)","opsSec":50821909.8326034,"samples":25410957},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50674795.85202092,"samples":25467204},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52145826.48084457,"samples":26072956}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,223,171|68115785|
|Setter|10,420,666|5210336|
|Method|98,168,430|49085209|
|DefineProperty (setter)|102,167,999|51084008|
|DefineProperty (setter & enumerable=false)|10,679,671|5339939|
|DefineProperty (setter & configurable=false)|10,353,368|5176686|
|DefineProperty (setter & enumerable=false & configurable=false)|10,577,395|5288701|
|DefineProperty (writable)|102,178,623|51089886|
|DefineProperty (writable & enumerable=false)|103,071,226|51537584|
|DefineProperty (writable & enumerable=false & configurable=false)|100,017,756|50008932|
|DefineProperties (setter)|95,444,580|47722302|
|DefineProperties (setter & enumerable=false)|10,232,778|5116392|
|DefineProperties (setter & enumerable=false & configurable=false)|10,242,243|5121123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":136223171.5690264,"samples":68115785},{"name":"Setter","opsSec":10420666.039379025,"samples":5210336},{"name":"Method","opsSec":98168430.0892907,"samples":49085209},{"name":"DefineProperty (setter)","opsSec":102167999.04011217,"samples":51084008},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10679671.262923691,"samples":5339939},{"name":"DefineProperty (setter & configurable=false)","opsSec":10353368.728335483,"samples":5176686},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10577395.399705272,"samples":5288701},{"name":"DefineProperty (writable)","opsSec":102178623.30791678,"samples":51089886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103071226.14402735,"samples":51537584},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100017756.38089414,"samples":50008932},{"name":"DefineProperties (setter)","opsSec":95444580.13885497,"samples":47722302},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10232778.126385355,"samples":5116392},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10242243.582830515,"samples":5121123}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,341,033|1670895|
|Using replaceAll()|2,848,990|1424886|
|Using replaceAll(//g)|2,879,067|1439534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3341033.870578546,"samples":1670895},{"name":"Using replaceAll()","opsSec":2848990.3567037154,"samples":1424886},{"name":"Using replaceAll(//g)","opsSec":2879067.0096009485,"samples":1439534}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,974,899|10487453|
|{ ...object, __proto__: null }|20,709,427|10356416|
|{ ...object, newProp: true }|787,462|395092|
|structuredClone|290,566|145284|
|JSON.parse + JSON.stringify|197,292|98648|
|loop + object.keys starting with {}|1,551,480|776157|
|loop + object.keys starting with { __proto__: null }|835,771|417886|
|loop + object.keys starting with { randomProp: true }|625,861|313122|
|object.keys + reduce(FN, {})|1,593,713|796859|
|object.keys + reduce(FN, { __proto__: null })|866,067|433035|
|object.keys + reduce(FN, { newProp: true })|619,391|309810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:49:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":20974899.749479875,"samples":10487453},{"name":"{ ...object, __proto__: null }","opsSec":20709427.16308012,"samples":10356416},{"name":"{ ...object, newProp: true }","opsSec":787462.3176154951,"samples":395092},{"name":"structuredClone","opsSec":290566.3315681242,"samples":145284},{"name":"JSON.parse + JSON.stringify","opsSec":197292.38718180594,"samples":98648},{"name":"loop + object.keys starting with {}","opsSec":1551480.867186168,"samples":776157},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":835771.3079813571,"samples":417886},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":625861.7111495957,"samples":313122},{"name":"object.keys + reduce(FN, {})","opsSec":1593713.3782312032,"samples":796859},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":866067.3550302978,"samples":433035},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":619391.82348493,"samples":309810}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|251,454|125754|
|Sort using first char|1,319,730|659946|
|Sort using localeCompare|1,219,974|610032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:51:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":251454.63277746714,"samples":125754},{"name":"Sort using first char","opsSec":1319730.3515081652,"samples":659946},{"name":"Sort using localeCompare","opsSec":1219974.495351174,"samples":610032}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|52,318,986|26159610|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,062|532|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,595|3298|
|{ ...bigObject, ...anotherBigObject }|1,156|579|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,126,658|6564725|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,381,113|13690559|
|{ ...smallObject, ...anotherSmallObject }|20,503,551|10254837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.9753311644467,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":52318986.13413198,"samples":26159610},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1062.315755734334,"samples":532},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6595.191086622844,"samples":3298},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1156.7479452780146,"samples":579},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13126658.852274923,"samples":6564725},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27381113.399972953,"samples":13690559},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20503551.63948045,"samples":10254837}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,045|1032|
|streams.web.Readable reading 1e3 * "some data"|1,639|820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:55:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2045.432978947601,"samples":1032},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1639.0805348268614,"samples":820}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,238|3122|
|streams.web.WritableStream writing 1e3 * "some data"|1,375|688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:56:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6238.988619737036,"samples":3122},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1375.7659712021707,"samples":688}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|143,823,046|71911562|
|Using backtick (`)|95,945,686|47973264|
|Using array.join|10,133,627|5067620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":143823046.04790905,"samples":71911562},{"name":"Using backtick (`)","opsSec":95945686.17254952,"samples":47973264},{"name":"Using array.join","opsSec":10133627.010321513,"samples":5067620}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|55,254,523|27641625|
|(short string) (true) String#slice and strict comparison|52,806,642|26406512|
|(long string) (true) String#endsWith|45,734,762|22870152|
|(long string) (true) String#slice and strict comparison|47,208,482|23604248|
|(short string) (false) String#endsWith|55,626,229|27818290|
|(short string) (false) String#slice and strict comparison|53,569,781|26784905|
|(long string) (false) String#endsWith|51,187,045|25593528|
|(long string) (false) String#slice and strict comparison|47,258,299|23632410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:00:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":55254523.50475702,"samples":27641625},{"name":"(short string) (true) String#slice and strict comparison","opsSec":52806642.528477006,"samples":26406512},{"name":"(long string) (true) String#endsWith","opsSec":45734762.867600486,"samples":22870152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":47208482.49837401,"samples":23604248},{"name":"(short string) (false) String#endsWith","opsSec":55626229.07129441,"samples":27818290},{"name":"(short string) (false) String#slice and strict comparison","opsSec":53569781.71515526,"samples":26784905},{"name":"(long string) (false) String#endsWith","opsSec":51187045.35309457,"samples":25593528},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47258299.20535904,"samples":23632410}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|137,347,945|68679082|
|Using indexof|15,676,536|7838271|
|Using RegExp.test|13,297,309|6649900|
|Using RegExp.text with cached regex pattern|13,555,588|6777796|
|Using new RegExp.test|4,369,931|2185097|
|Using new RegExp.test with cached regex pattern|5,118,011|2559018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":137347945.31286874,"samples":68679082},{"name":"Using indexof","opsSec":15676536.889448972,"samples":7838271},{"name":"Using RegExp.test","opsSec":13297309.467126045,"samples":6649900},{"name":"Using RegExp.text with cached regex pattern","opsSec":13555588.611102847,"samples":6777796},{"name":"Using new RegExp.test","opsSec":4369931.734177042,"samples":2185097},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5118011.597320705,"samples":2559018}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|108,793,108|54397226|
|(short string) (true) String#slice and strict comparison|61,035,223|30520773|
|(long string) (true) String#startsWith|58,874,222|29460708|
|(long string) (true) String#slice and strict comparison|55,868,540|27934318|
|(short string) (false) String#startsWith|96,130,607|48065310|
|(short string) (false) String#slice and strict comparison|60,247,883|30127214|
|(long string) (false) String#startsWith|89,227,075|44613543|
|(long string) (false) String#slice and strict comparison|55,586,914|27802466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:04:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":108793108.4051112,"samples":54397226},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61035223.60532761,"samples":30520773},{"name":"(long string) (true) String#startsWith","opsSec":58874222.65861374,"samples":29460708},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55868540.24132203,"samples":27934318},{"name":"(short string) (false) String#startsWith","opsSec":96130607.31075983,"samples":48065310},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60247883.63388816,"samples":30127214},{"name":"(long string) (false) String#startsWith","opsSec":89227075.11429682,"samples":44613543},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55586914.94677979,"samples":27802466}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|121,166,383|60586761|
|Using this|93,708,518|46855920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:06:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":121166383.1190394,"samples":60586761},{"name":"Using this","opsSec":93708518.9700877,"samples":46855920}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,823,763|5411885|
|Date.now()|18,003,194|9003545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:08:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10823763.484094381,"samples":5411885},{"name":"Date.now()","opsSec":18003194.03679766,"samples":9003545}]}-->
