## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|115,696,852|57854759|
|Using dot notation|77,682,240|38843086|
|Using define property (writable)|4,481,086|2240701|
|Using define property initialized (writable)|5,994,570|2997531|
|Using define property (getter)|2,225,164|1112620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":115696852.20280194,"samples":57854759},{"name":"Using dot notation","opsSec":77682240.65716483,"samples":38843086},{"name":"Using define property (writable)","opsSec":4481086.56735435,"samples":2240701},{"name":"Using define property initialized (writable)","opsSec":5994570.133531404,"samples":2997531},{"name":"Using define property (getter)","opsSec":2225164.273209454,"samples":1112620}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.039ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.338ms
array.push|1,000,000|32.289ms
new Array(length)|1,000,000|7.019ms
array.push|100,000,000|1,804.359ms
new Array(length)|100,000,000|4,441.603ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.021ms
new Array(length)|100|0.009ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.153ms
array.push|1,000,000|23.751ms
new Array(length)|1,000,000|4.288ms
array.push|100,000,000|2,517.665ms
new Array(length)|100,000,000|4,091.941ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|253|128|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:57:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":253.45573328492014,"samples":128},{"name":"Array.from","opsSec":22.399925309689046,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,497|2249|
|new Blob (1024)|568|286|
|text (128)|4,770|2388|
|text (1024)|592|297|
|arrayBuffer (128)|4,811|2408|
|arrayBuffer (1024)|600|301|
|slice (0, 64)|63,608|36186|
|slice (0, 512)|25,397|12699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4497.8245758458925,"samples":2249},{"name":"new Blob (1024)","opsSec":568.2936253462835,"samples":286},{"name":"text (128)","opsSec":4770.679880917197,"samples":2388},{"name":"text (1024)","opsSec":592.194577575734,"samples":297},{"name":"arrayBuffer (128)","opsSec":4811.747531507574,"samples":2408},{"name":"arrayBuffer (1024)","opsSec":600.5952749186362,"samples":301},{"name":"slice (0, 64)","opsSec":63608.04791887838,"samples":36186},{"name":"slice (0, 512)","opsSec":25397.23940347435,"samples":12699}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|398,657|199364|
|[True conditional] Using constructor name|313,121|156562|
|[True conditional] Check if property is valid then instanceof |323,157|161580|
|[False conditional] Using instanceof only|45,911,827|22955992|
|[False conditional] Using constructor name|99,758,451|49879232|
|[False conditional] Check if property is valid then instanceof |99,778,497|49907113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":398657.49343571096,"samples":199364},{"name":"[True conditional] Using constructor name","opsSec":313121.3672755439,"samples":156562},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323157.70493397955,"samples":161580},{"name":"[False conditional] Using instanceof only","opsSec":45911827.8079618,"samples":22955992},{"name":"[False conditional] Using constructor name","opsSec":99758451.03140135,"samples":49879232},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99778497.9141379,"samples":49907113}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,370|3186|
|crypto.verify('RSA-SHA256')|6,509|3255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:14:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6370.399781056598,"samples":3186},{"name":"crypto.verify('RSA-SHA256')","opsSec":6509.684762005715,"samples":3255}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,415,129|707693|
|fromUnixToISOString(new Date())|2,157,043|1078522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1415129.7652836596,"samples":707693},{"name":"fromUnixToISOString(new Date())","opsSec":2157043.1112982384,"samples":1078522}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,373|6187|
|Intl.DateTimeFormat().format(new Date())|12,395|6198|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,131|6572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,772|6387|
|Reusing Intl.DateTimeFormat()|615,579|307791|
|Date.toLocaleDateString()|603,033|301801|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,845|6424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12373.926919587613,"samples":6187},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12395.350310108846,"samples":6198},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13131.596970292812,"samples":6572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":12772.438824802446,"samples":6387},{"name":"Reusing Intl.DateTimeFormat()","opsSec":615579.6792646092,"samples":307791},{"name":"Date.toLocaleDateString()","opsSec":603033.2829290694,"samples":301801},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12845.884668171693,"samples":6424}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,497|523940|
|Using brackets {}|1,052,960|532550|
|Using '' + |1,034,777|517389|
|Using date.toString()|1,172,018|586032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1047497.9753933782,"samples":523940},{"name":"Using brackets {}","opsSec":1052960.277755163,"samples":532550},{"name":"Using '' + ","opsSec":1034777.7247491252,"samples":517389},{"name":"Using date.toString()","opsSec":1172018.0029814548,"samples":586032}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,695,299|1847708|
|Using delete property (proto: null)|15,262,244|7631124|
|Using delete property (cached proto: null)|3,638,668|1819668|
|Using undefined assignment|80,593,705|40301771|
|Using undefined assignment (proto: null)|17,063,237|8532704|
|Using undefined property (cached proto: null)|79,980,725|40024319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3695299.856725503,"samples":1847708},{"name":"Using delete property (proto: null)","opsSec":15262244.306536878,"samples":7631124},{"name":"Using delete property (cached proto: null)","opsSec":3638668.1879501287,"samples":1819668},{"name":"Using undefined assignment","opsSec":80593705.6994068,"samples":40301771},{"name":"Using undefined assignment (proto: null)","opsSec":17063237.760915663,"samples":8532704},{"name":"Using undefined property (cached proto: null)","opsSec":79980725.40628882,"samples":40024319}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|380,527|190321|
|NodeError|321,294|160648|
|NodeError Range|320,159|160096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":380527.83327840414,"samples":190321},{"name":"NodeError","opsSec":321294.5265433013,"samples":160648},{"name":"NodeError Range","opsSec":320159.7202163689,"samples":160096}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,266,535|633268|
|Function returning explicitly undefined|1,336,948|668475|
|Function returning implicitly undefined|1,367,927|683964|
|Function returning string|1,342,458|671230|
|Function returning integer|1,376,995|688498|
|Function returning float|1,348,375|674188|
|Function returning functions|1,331,879|665940|
|Function returning arrow functions|1,363,710|681856|
|Function returning empty object|1,381,021|690511|
|Function returning empty array|1,380,713|690357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:12:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1266535.0570066017,"samples":633268},{"name":"Function returning explicitly undefined","opsSec":1336948.7362074445,"samples":668475},{"name":"Function returning implicitly undefined","opsSec":1367927.968237076,"samples":683964},{"name":"Function returning string","opsSec":1342458.6251168596,"samples":671230},{"name":"Function returning integer","opsSec":1376995.1879109845,"samples":688498},{"name":"Function returning float","opsSec":1348375.7112777547,"samples":674188},{"name":"Function returning functions","opsSec":1331879.4648129551,"samples":665940},{"name":"Function returning arrow functions","opsSec":1363710.1850215958,"samples":681856},{"name":"Function returning empty object","opsSec":1381021.7372006555,"samples":690511},{"name":"Function returning empty array","opsSec":1380713.186744418,"samples":690357}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,631,537|6315769|
|using Array.includes (first item)|13,177,457|6588729|
|Using raw comparison|14,179,807|7089904|
|Using raw comparison (first item)|14,186,544|7093273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:21:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12631537.513510054,"samples":6315769},{"name":"using Array.includes (first item)","opsSec":13177457.289522547,"samples":6588729},{"name":"Using raw comparison","opsSec":14179807.76569959,"samples":7089904},{"name":"Using raw comparison (first item)","opsSec":14186544.254688341,"samples":7093273}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,125,269|6062635|
|Using Object.getOwnPropertyNames()|12,348,344|6174173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:30:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12125269.936106822,"samples":6062635},{"name":"Using Object.getOwnPropertyNames()","opsSec":12348344.251219634,"samples":6174173}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,208,323|7104162|
|Length = 10_000 - Array.at|13,473,941|6736971|
|Length = 1_000_000 - Array.at|14,522,813|7261407|
|Length = 100 - Array[length - 1]|14,151,774|7075888|
|Length = 10_000 - Array[length - 1]|13,820,689|6910345|
|Length = 1_000_000 - Array[length - 1]|13,160,206|6580104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14208323.023941977,"samples":7104162},{"name":"Length = 10_000 - Array.at","opsSec":13473941.934345797,"samples":6736971},{"name":"Length = 1_000_000 - Array.at","opsSec":14522813.674659446,"samples":7261407},{"name":"Length = 100 - Array[length - 1]","opsSec":14151774.818161294,"samples":7075888},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13820689.579024062,"samples":6910345},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13160206.959775003,"samples":6580104}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,485,785|7242893|
|~ (small)|14,318,657|7159329|
|Math.floor (long)|14,421,111|7210556|
|~ (long)|14,425,688|7212845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:53:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14485785.6124323,"samples":7242893},{"name":"~ (small)","opsSec":14318657.548973855,"samples":7159329},{"name":"Math.floor (long)","opsSec":14421111.783899926,"samples":7210556},{"name":"~ (long)","opsSec":14425688.725128869,"samples":7212845}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,048,901|5524451|
|Object.create({})|1,743,315|871658|
|Cached Empty.prototype|14,076,447|7038224|
|Empty.prototype|1,682,696|841350|
|Empty class|1,078,899|539450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:02:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11048901.312663067,"samples":5524451},{"name":"Object.create({})","opsSec":1743315.2102604252,"samples":871658},{"name":"Cached Empty.prototype","opsSec":14076447.014149591,"samples":7038224},{"name":"Empty.prototype","opsSec":1682696.6531171217,"samples":841350},{"name":"Empty class","opsSec":1078899.255541285,"samples":539450}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,383,078|7191540|
|Using optional chain (obj.field?.field2) (undefined)|14,503,744|7251873|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,304,363|7152182|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,521,815|7260908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:13:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14383078.24639639,"samples":7191540},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14503744.469365474,"samples":7251873},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14304363.921400335,"samples":7152182},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14521815.068216447,"samples":7260908}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,126,569|7063285|
|Using parseInt(x, 10) - big number (10 len)|14,323,089|7161545|
|Using + - small number (2 len)|14,264,257|7132129|
|Using + - big number (10 len)|14,223,212|7111607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14126569.38201791,"samples":7063285},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14323089.823012616,"samples":7161545},{"name":"Using + - small number (2 len)","opsSec":14264257.234433644,"samples":7132129},{"name":"Using + - big number (10 len)","opsSec":14223212.784722356,"samples":7111607}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|922,271|461136|
|Using ? operator to avoid rejection|937,849|468925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:31:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":922271.5241068468,"samples":461136},{"name":"Using ? operator to avoid rejection","opsSec":937849.330522021,"samples":468925}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,676,105|6838053|
|Raw usage underscore usage|13,738,719|6869360|
|Manipulating private properties using #|14,041,448|7020725|
|Manipulating private properties using underscore(_)|13,817,397|6908699|
|Manipulating private properties using Symbol|14,037,621|7018811|
|Manipulating private properties using PrivateSymbol|11,023,685|5511843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:40:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13676105.160793409,"samples":6838053},{"name":"Raw usage underscore usage","opsSec":13738719.612971403,"samples":6869360},{"name":"Manipulating private properties using #","opsSec":14041448.829284063,"samples":7020725},{"name":"Manipulating private properties using underscore(_)","opsSec":13817397.643029077,"samples":6908699},{"name":"Manipulating private properties using Symbol","opsSec":14037621.726553546,"samples":7018811},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11023685.143888189,"samples":5511843}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,717,136|2358569|
|Adding property in the object creation - small object|4,652,019|2326010|
|Adding property after the function creation - small class|244,519|123078|
|Adding property in the function creation - small class|238,503|119252|
|Adding property after the class creation - small class|201,237|100619|
|Adding property in the class creation - small class|202,135|101068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:50:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4717136.1138692405,"samples":2358569},{"name":"Adding property in the object creation - small object","opsSec":4652019.865743525,"samples":2326010},{"name":"Adding property after the function creation - small class","opsSec":244519.64636362516,"samples":123078},{"name":"Adding property in the function creation - small class","opsSec":238503.1070677765,"samples":119252},{"name":"Adding property after the class creation - small class","opsSec":201237.45417502234,"samples":100619},{"name":"Adding property in the class creation - small class","opsSec":202135.7921695025,"samples":101068}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,997,393|6998697|
|Getter|11,822,678|5911342|
|Method|14,085,617|7042809|
|DefineProperty (getter)|13,842,220|6921111|
|DefineProperty (getter & enumerable=false)|11,897,242|5948622|
|DefineProperty (getter & configurable=false)|13,919,810|6959906|
|DefineProperty (getter & enumerable=false & configurable=false)|11,926,482|5963242|
|DefineProperty (writable)|13,844,495|6922248|
|DefineProperty (writable & enumerable=false)|13,906,842|6953422|
|DefineProperty (writable & enumerable=false & configurable=false)|13,799,916|6899959|
|DefineProperties (getter)|12,084,174|6042088|
|DefineProperties (getter & enumerable=false)|12,124,477|6062239|
|DefineProperties (getter & enumerable=false & configurable=false)|11,823,968|5911985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":13997393.01916473,"samples":6998697},{"name":"Getter","opsSec":11822678.669134242,"samples":5911342},{"name":"Method","opsSec":14085617.034234205,"samples":7042809},{"name":"DefineProperty (getter)","opsSec":13842220.93881729,"samples":6921111},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11897242.905323436,"samples":5948622},{"name":"DefineProperty (getter & configurable=false)","opsSec":13919810.147779334,"samples":6959906},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":11926482.494324964,"samples":5963242},{"name":"DefineProperty (writable)","opsSec":13844495.545368448,"samples":6922248},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13906842.43801819,"samples":6953422},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13799916.279710865,"samples":6899959},{"name":"DefineProperties (getter)","opsSec":12084174.159342583,"samples":6042088},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12124477.794263408,"samples":6062239},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11823968.310549913,"samples":5911985}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|13,773,004|6886503|
|Setter|5,522,987|2761494|
|Method|13,991,280|6995641|
|DefineProperty (setter)|14,218,488|7109245|
|DefineProperty (setter & enumerable=false)|5,651,216|2825609|
|DefineProperty (setter & configurable=false)|5,661,469|2830735|
|DefineProperty (setter & enumerable=false & configurable=false)|5,703,932|2852011|
|DefineProperty (writable)|14,303,283|7151642|
|DefineProperty (writable & enumerable=false)|13,472,148|6736075|
|DefineProperty (writable & enumerable=false & configurable=false)|13,392,271|6696137|
|DefineProperties (setter)|13,380,082|6690042|
|DefineProperties (setter & enumerable=false)|5,512,490|2756246|
|DefineProperties (setter & enumerable=false & configurable=false)|5,519,832|2759917|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:29:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":13773004.501485698,"samples":6886503},{"name":"Setter","opsSec":5522987.555030271,"samples":2761494},{"name":"Method","opsSec":13991280.08599134,"samples":6995641},{"name":"DefineProperty (setter)","opsSec":14218488.4099537,"samples":7109245},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5651216.999630923,"samples":2825609},{"name":"DefineProperty (setter & configurable=false)","opsSec":5661469.036791583,"samples":2830735},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5703932.023623916,"samples":2852011},{"name":"DefineProperty (writable)","opsSec":14303283.902650343,"samples":7151642},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13472148.37557589,"samples":6736075},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13392271.588661825,"samples":6696137},{"name":"DefineProperties (setter)","opsSec":13380082.18435731,"samples":6690042},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5512490.333143712,"samples":2756246},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5519832.189450411,"samples":2759917}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,537,036|1268519|
|Using replaceAll()|2,201,054|1100528|
|Using replaceAll(//g)|2,294,177|1147089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2537036.9348971196,"samples":1268519},{"name":"Using replaceAll()","opsSec":2201054.835456323,"samples":1100528},{"name":"Using replaceAll(//g)","opsSec":2294177.4332232894,"samples":1147089}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,013,047|4506524|
|{ ...object, __proto__: null }|8,632,937|4316469|
|{ ...object, newProp: true }|679,518|340167|
|structuredClone|252,130|126066|
|JSON.parse + JSON.stringify|190,481|95241|
|loop + object.keys starting with {}|1,243,478|621740|
|loop + object.keys starting with { __proto__: null }|679,074|339538|
|loop + object.keys starting with { randomProp: true }|513,129|256565|
|object.keys + reduce(FN, {})|1,195,315|597658|
|object.keys + reduce(FN, { __proto__: null })|717,075|358538|
|object.keys + reduce(FN, { newProp: true })|503,606|251804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:49:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9013047.770875879,"samples":4506524},{"name":"{ ...object, __proto__: null }","opsSec":8632937.936547926,"samples":4316469},{"name":"{ ...object, newProp: true }","opsSec":679518.2717973902,"samples":340167},{"name":"structuredClone","opsSec":252130.31812123396,"samples":126066},{"name":"JSON.parse + JSON.stringify","opsSec":190481.82260636496,"samples":95241},{"name":"loop + object.keys starting with {}","opsSec":1243478.912141356,"samples":621740},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":679074.7960840289,"samples":339538},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":513129.40215513145,"samples":256565},{"name":"object.keys + reduce(FN, {})","opsSec":1195315.2517887386,"samples":597658},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":717075.6746391691,"samples":358538},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":503606.15099834115,"samples":251804}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|247,058|123530|
|Sort using first char|1,014,715|507358|
|Sort using localeCompare|958,711|479356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":247058.3759465521,"samples":123530},{"name":"Sort using first char","opsSec":1014715.0658823445,"samples":507358},{"name":"Sort using localeCompare","opsSec":958711.6791168692,"samples":479356}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,717|859|
|{...smallObject} - Total keys: 2|10,798,161|5399081|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,159|1080|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,586|3294|
|{ ...bigObject, ...anotherBigObject }|1,080|541|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,372,640|3186321|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,809,257|4904629|
|{ ...smallObject, ...anotherSmallObject }|8,119,354|4059678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:04:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1717.9592601694897,"samples":859},{"name":"{...smallObject} - Total keys: 2","opsSec":10798161.341133665,"samples":5399081},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2159.975415275373,"samples":1080},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6586.258422665515,"samples":3294},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1080.3457832589002,"samples":541},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6372640.434707347,"samples":3186321},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9809257.208895082,"samples":4904629},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8119354.712810654,"samples":4059678}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,335|1168|
|streams.web.Readable reading 1e3 * "some data"|524|263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:13:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2335.945320236795,"samples":1168},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":524.7033656345835,"samples":263}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,943|2972|
|streams.web.WritableStream writing 1e3 * "some data"|1,847|925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5943.841465893247,"samples":2972},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1847.545011583907,"samples":925}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,764,361|7382181|
|Using backtick (`)|14,829,155|7414578|
|Using array.join|5,891,417|2945709|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14764361.403233374,"samples":7382181},{"name":"Using backtick (`)","opsSec":14829155.028166773,"samples":7414578},{"name":"Using array.join","opsSec":5891417.247034107,"samples":2945709}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,101,669|6050835|
|(short string) (true) String#slice and strict comparison|12,303,487|6151744|
|(long string) (true) String#endsWith|12,184,005|6092003|
|(long string) (true) String#slice and strict comparison|12,218,985|6109493|
|(short string) (false) String#endsWith|12,588,913|6294457|
|(short string) (false) String#slice and strict comparison|12,460,160|6230081|
|(long string) (false) String#endsWith|12,040,765|6020383|
|(long string) (false) String#slice and strict comparison|11,631,452|5815727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12101669.67026855,"samples":6050835},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12303487.180853654,"samples":6151744},{"name":"(long string) (true) String#endsWith","opsSec":12184005.656405587,"samples":6092003},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12218985.97186909,"samples":6109493},{"name":"(short string) (false) String#endsWith","opsSec":12588913.322145607,"samples":6294457},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12460160.593543224,"samples":6230081},{"name":"(long string) (false) String#endsWith","opsSec":12040765.78074706,"samples":6020383},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11631452.331601022,"samples":5815727}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,783,575|3891788|
|Using indexof|7,959,196|3979599|
|Using RegExp.test|7,250,042|3625022|
|Using RegExp.text with cached regex pattern|7,258,144|3629073|
|Using new RegExp.test|3,191,626|1595814|
|Using new RegExp.test with cached regex pattern|3,587,357|1793679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:53:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7783575.134931041,"samples":3891788},{"name":"Using indexof","opsSec":7959196.284373375,"samples":3979599},{"name":"Using RegExp.test","opsSec":7250042.290739297,"samples":3625022},{"name":"Using RegExp.text with cached regex pattern","opsSec":7258144.775687831,"samples":3629073},{"name":"Using new RegExp.test","opsSec":3191626.358265431,"samples":1595814},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3587357.808601519,"samples":1793679}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,567,010|6783506|
|(short string) (true) String#slice and strict comparison|12,014,351|6007176|
|(long string) (true) String#startsWith|12,949,807|6474904|
|(long string) (true) String#slice and strict comparison|11,817,970|5908986|
|(short string) (false) String#startsWith|14,285,559|7142780|
|(short string) (false) String#slice and strict comparison|12,310,159|6155080|
|(long string) (false) String#startsWith|14,228,109|7114055|
|(long string) (false) String#slice and strict comparison|11,822,858|5911430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13567010.511262754,"samples":6783506},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12014351.9967775,"samples":6007176},{"name":"(long string) (true) String#startsWith","opsSec":12949807.424475422,"samples":6474904},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11817970.645603474,"samples":5908986},{"name":"(short string) (false) String#startsWith","opsSec":14285559.051125653,"samples":7142780},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12310159.638998596,"samples":6155080},{"name":"(long string) (false) String#startsWith","opsSec":14228109.769327292,"samples":7114055},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11822858.429758294,"samples":5911430}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,132,706|7066354|
|Using this|14,031,318|7015660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14132706.447608268,"samples":7066354},{"name":"Using this","opsSec":14031318.650892325,"samples":7015660}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,811,266|2905634|
|Date.now()|8,271,662|4135832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:29:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5811266.503038823,"samples":2905634},{"name":"Date.now()","opsSec":8271662.606452086,"samples":4135832}]}-->
