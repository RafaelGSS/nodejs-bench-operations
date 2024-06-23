## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,705,095|7852548|
|Using dot notation|15,763,733|7881867|
|Using define property (writable)|3,426,453|1713227|
|Using define property initialized (writable)|4,453,786|2226894|
|Using define property (getter)|2,236,901|1118451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15705095.277583892,"samples":7852548},{"name":"Using dot notation","opsSec":15763733.211811867,"samples":7881867},{"name":"Using define property (writable)","opsSec":3426453.458624022,"samples":1713227},{"name":"Using define property initialized (writable)","opsSec":4453786.298675693,"samples":2226894},{"name":"Using define property (getter)","opsSec":2236901.870270471,"samples":1118451}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.301ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|22.458ms
new Array(length)|1,000,000|15.12ms
array.push|100,000,000|2,028.027ms
new Array(length)|100,000,000|4,163.194ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.522ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|18.075ms
new Array(length)|1,000,000|6.567ms
array.push|100,000,000|2,638.877ms
new Array(length)|100,000,000|4,126.416ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|248|125|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":248.6008278041626,"samples":125},{"name":"Array.from","opsSec":23.978964597180926,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,827|2914|
|new Blob (1024)|789|395|
|text (128)|6,496|3249|
|text (1024)|828|415|
|arrayBuffer (128)|6,502|3252|
|arrayBuffer (1024)|810|406|
|slice (0, 64)|247,613|130524|
|slice (0, 512)|38,619|19310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:55:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5827.352767582675,"samples":2914},{"name":"new Blob (1024)","opsSec":789.0291989883241,"samples":395},{"name":"text (128)","opsSec":6496.429527140306,"samples":3249},{"name":"text (1024)","opsSec":828.7488064344759,"samples":415},{"name":"arrayBuffer (128)","opsSec":6502.5312992655445,"samples":3252},{"name":"arrayBuffer (1024)","opsSec":810.3278673771508,"samples":406},{"name":"slice (0, 64)","opsSec":247613.37013558764,"samples":130524},{"name":"slice (0, 512)","opsSec":38619.80303899978,"samples":19310}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|314,795|157398|
|[True conditional] Using constructor name|337,261|168631|
|[True conditional] Check if property is valid then instanceof |338,766|169384|
|[False conditional] Using instanceof only|15,712,899|7856450|
|[False conditional] Using constructor name|16,053,813|8026907|
|[False conditional] Check if property is valid then instanceof |16,127,846|8063924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:01:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":314795.4352570501,"samples":157398},{"name":"[True conditional] Using constructor name","opsSec":337261.9419908849,"samples":168631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":338766.77976208954,"samples":169384},{"name":"[False conditional] Using instanceof only","opsSec":15712899.842923226,"samples":7856450},{"name":"[False conditional] Using constructor name","opsSec":16053813.38995474,"samples":8026907},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16127846.064704522,"samples":8063924}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,265|3633|
|crypto.verify('RSA-SHA256')|7,274|3638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7265.274387985777,"samples":3633},{"name":"crypto.verify('RSA-SHA256')","opsSec":7274.6880391108725,"samples":3638}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,351,891|675946|
|fromUnixToISOString(new Date())|2,012,034|1006018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1351891.1456045606,"samples":675946},{"name":"fromUnixToISOString(new Date())","opsSec":2012034.4789022636,"samples":1006018}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,447|8724|
|Intl.DateTimeFormat().format(new Date())|15,869|7935|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,506|11254|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,613|10807|
|Reusing Intl.DateTimeFormat()|788,910|394456|
|Date.toLocaleDateString()|779,615|389808|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,409|12205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17447.783089160628,"samples":8724},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15869.821972337135,"samples":7935},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22506.608551434158,"samples":11254},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21613.392577214636,"samples":10807},{"name":"Reusing Intl.DateTimeFormat()","opsSec":788910.6872523248,"samples":394456},{"name":"Date.toLocaleDateString()","opsSec":779615.3108202708,"samples":389808},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24409.059030773627,"samples":12205}]}-->

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
|{...bigObject} - Total keys: 1000|2,373|1187|
|{...smallObject} - Total keys: 2|12,172,735|6086368|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,529|1265|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|7,029|3515|
|{ ...bigObject, ...anotherBigObject }|1,421|712|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,105,186|3552594|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,157,123|5578562|
|{ ...smallObject, ...anotherSmallObject }|8,939,032|4469517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:31:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2373.364180482753,"samples":1187},{"name":"{...smallObject} - Total keys: 2","opsSec":12172735.050528692,"samples":6086368},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2529.2024969272193,"samples":1265},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":7029.414154565314,"samples":3515},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1421.406788298249,"samples":712},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7105186.308961351,"samples":3552594},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11157123.330650711,"samples":5578562},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8939032.551852204,"samples":4469517}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,467,722|7733862|
|Using backtick (`)|15,591,893|7795947|
|Using array.join|6,341,131|3170566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:36:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15467722.917233562,"samples":7733862},{"name":"Using backtick (`)","opsSec":15591893.812899621,"samples":7795947},{"name":"Using array.join","opsSec":6341131.809785889,"samples":3170566}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,486,755|7743378|
|(short string) (true) String#slice and strict comparison|16,025,106|8012554|
|(long string) (true) String#endsWith|14,739,254|7369628|
|(long string) (true) String#slice and strict comparison|15,924,719|7962360|
|(short string) (false) String#endsWith|15,947,718|7973860|
|(short string) (false) String#slice and strict comparison|16,151,541|8075771|
|(long string) (false) String#endsWith|15,370,358|7685180|
|(long string) (false) String#slice and strict comparison|15,888,487|7944244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:40:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15486755.163709529,"samples":7743378},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16025106.10903614,"samples":8012554},{"name":"(long string) (true) String#endsWith","opsSec":14739254.437675606,"samples":7369628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15924719.10822047,"samples":7962360},{"name":"(short string) (false) String#endsWith","opsSec":15947718.437000765,"samples":7973860},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16151541.580068942,"samples":8075771},{"name":"(long string) (false) String#endsWith","opsSec":15370358.954893073,"samples":7685180},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15888487.555083701,"samples":7944244}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,061,837|8030919|
|Using indexof|16,085,973|8042987|
|Using RegExp.test|7,857,109|3928555|
|Using RegExp.text with cached regex pattern|7,933,751|3966876|
|Using new RegExp.test|3,615,639|1807820|
|Using new RegExp.test with cached regex pattern|3,836,017|1918009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16061837.935747126,"samples":8030919},{"name":"Using indexof","opsSec":16085973.163487593,"samples":8042987},{"name":"Using RegExp.test","opsSec":7857109.780008541,"samples":3928555},{"name":"Using RegExp.text with cached regex pattern","opsSec":7933751.888924203,"samples":3966876},{"name":"Using new RegExp.test","opsSec":3615639.493809484,"samples":1807820},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3836017.455287137,"samples":1918009}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,712,032|7856017|
|(short string) (true) String#slice and strict comparison|14,735,224|7367613|
|(long string) (true) String#startsWith|13,732,627|6866315|
|(long string) (true) String#slice and strict comparison|15,163,498|7581750|
|(short string) (false) String#startsWith|14,987,933|7493967|
|(short string) (false) String#slice and strict comparison|15,251,660|7625831|
|(long string) (false) String#startsWith|15,552,531|7776266|
|(long string) (false) String#slice and strict comparison|16,071,017|8035509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15712032.680186635,"samples":7856017},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14735224.968521226,"samples":7367613},{"name":"(long string) (true) String#startsWith","opsSec":13732627.830271095,"samples":6866315},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15163498.423056751,"samples":7581750},{"name":"(short string) (false) String#startsWith","opsSec":14987933.940144973,"samples":7493967},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15251660.322393922,"samples":7625831},{"name":"(long string) (false) String#startsWith","opsSec":15552531.222382,"samples":7776266},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16071017.132135782,"samples":8035509}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,650,531|7825266|
|Using this|15,873,845|7936923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15650531.499189904,"samples":7825266},{"name":"Using this","opsSec":15873845.841266742,"samples":7936923}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,649,671|3324836|
|Date.now()|9,506,508|4753255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:48:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6649671.042446956,"samples":3324836},{"name":"Date.now()","opsSec":9506508.802181067,"samples":4753255}]}-->
