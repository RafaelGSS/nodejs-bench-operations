## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,268,739|97|
|Using dot notation|697,465,135|96|
|Using define property (writable)|3,047,122|99|
|Using define property initialized (writable)|3,736,489|92|
|Using define property (getter)|1,536,490|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":710268738.668211,"samples":6},{"name":"Using dot notation","opsSec":697465134.8184451,"samples":5},{"name":"Using define property (writable)","opsSec":3047121.819636016,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3736489.4887863947,"samples":5},{"name":"Using define property (getter)","opsSec":1536489.9443602317,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.038ms
new Array(length)|100|0.015ms
array.push|1,000|0.124ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.275ms
array.push|1,000,000|33.941ms
new Array(length)|1,000,000|10.834ms
array.push|100,000,000|2,093.224ms
new Array(length)|100,000,000|5,139.946ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.021ms
array.push|100|0.072ms
new Array(length)|100|0.014ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.649ms
new Array(length)|10,000|4.393ms
array.push|1,000,000|360.91ms
new Array(length)|1,000,000|5.81ms
array.push|100,000,000|2,776.887ms
new Array(length)|100,000,000|5,655.727ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|269|64|
|Array.from|12|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":268.59635611431054,"samples":4},{"name":"Array.from","opsSec":12.366660694558881,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,229|85|
|new Blob (1024)|401|69|
|text (128)|26,224|66|
|text (1024)|17,298|84|
|arrayBuffer (128)|31,782|87|
|arrayBuffer (1024)|20,560|88|
|slice (0, 64)|67,499|80|
|slice (0, 512)|33,483|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3229.110149495295,"samples":5},{"name":"new Blob (1024)","opsSec":400.8814510570506,"samples":2},{"name":"text (128)","opsSec":26223.83963959234,"samples":4},{"name":"text (1024)","opsSec":17298.30066086861,"samples":3},{"name":"arrayBuffer (128)","opsSec":31781.719329819298,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20559.555839168806,"samples":4},{"name":"slice (0, 64)","opsSec":67499.38281966902,"samples":3},{"name":"slice (0, 512)","opsSec":33482.720960943305,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,604|53|
|[True conditional] Using constructor name|133,056|97|
|[True conditional] Check if property is valid then instanceof |135,577|91|
|[False conditional] Using instanceof only|590,623,084|96|
|[False conditional] Using constructor name|592,547,160|97|
|[False conditional] Check if property is valid then instanceof |593,698,527|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":172604.0974240875,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133056.48413338538,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":135577.16672990547,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":590623084.4277028,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":592547160.3739338,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":593698526.8541032,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,434|91|
|crypto.verify('RSA-SHA256')|20,663|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":21433.93915830019,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":20663.151685782774,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,821,416|94|
|fromUnixToISOString(new Date())|1,393,297|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1821416.1415623827,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1393297.0755363444,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,945|82|
|Intl.DateTimeFormat().format(new Date())|9,724|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,801|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,369|72|
|Reusing Intl.DateTimeFormat()|423,422|98|
|Date.toLocaleDateString()|403,380|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,325|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8944.508847031371,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9724.198516029357,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9800.739136107439,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":7368.913152455417,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":423422.3028967557,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":403379.69717151154,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10325.132520495741,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|699,738|96|
|Using brackets {}|709,196|96|
|Using '' + |706,267|95|
|Using date.toString()|761,197|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":699737.7118474317,"samples":5},{"name":"Using brackets {}","opsSec":709195.956322807,"samples":4},{"name":"Using '' + ","opsSec":706266.5030619677,"samples":5},{"name":"Using date.toString()","opsSec":761197.4083640764,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,681,033|81|
|Using delete property (proto: null)|9,878,844|83|
|Using delete property (cached proto: null)|1,639,050|84|
|Using undefined assignment|677,133,705|81|
|Using undefined assignment (proto: null)|10,741,411|82|
|Using undefined property (cached proto: null)|544,848,237|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1681032.775307486,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9878844.044845136,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1639049.648945992,"samples":5},{"name":"Using undefined assignment","opsSec":677133704.9276309,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":10741410.788392758,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":544848236.8902055,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|146,692|57|
|NodeError|121,202|90|
|NodeError Range|122,763|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":146691.93599147996,"samples":4},{"name":"NodeError","opsSec":121202.07880530268,"samples":3},{"name":"NodeError Range","opsSec":122762.7230361385,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|913,133|85|
|Function returning explicitly undefined|945,335|87|
|Function returning implicitly undefined|952,710|83|
|Function returning string|944,056|83|
|Function returning integer|950,428|85|
|Function returning float|955,881|83|
|Function returning functions|910,793|84|
|Function returning arrow functions|878,725|82|
|Function returning empty object|937,544|81|
|Function returning empty array|940,342|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":913133.124168602,"samples":7},{"name":"Function returning explicitly undefined","opsSec":945334.9187040639,"samples":5},{"name":"Function returning implicitly undefined","opsSec":952709.90123985,"samples":5},{"name":"Function returning string","opsSec":944056.2710882529,"samples":5},{"name":"Function returning integer","opsSec":950427.7887639353,"samples":3},{"name":"Function returning float","opsSec":955881.1214790394,"samples":5},{"name":"Function returning functions","opsSec":910793.0339420431,"samples":3},{"name":"Function returning arrow functions","opsSec":878725.1025532411,"samples":5},{"name":"Function returning empty object","opsSec":937543.9796305563,"samples":6},{"name":"Function returning empty array","opsSec":940341.8005974019,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|600,831,873|88|
|using Array.includes (first item)|614,460,457|92|
|Using raw comparison|615,054,879|94|
|Using raw comparison (first item)|613,454,649|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":600831872.8153632,"samples":6},{"name":"using Array.includes (first item)","opsSec":614460456.5108569,"samples":7},{"name":"Using raw comparison","opsSec":615054879.4516215,"samples":6},{"name":"Using raw comparison (first item)","opsSec":613454648.8806478,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,684,194|88|
|Using Object.getOwnPropertyNames()|56,445,470|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":55684194.01896846,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":56445470.16524296,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,868,778|88|
|Length = 10_000 - Array.at|13,816,495|91|
|Length = 1_000_000 - Array.at|13,793,853|90|
|Length = 100 - Array[length - 1]|621,981,557|91|
|Length = 10_000 - Array[length - 1]|622,692,336|87|
|Length = 1_000_000 - Array[length - 1]|627,934,346|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13868777.592273714,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":13816495.330353575,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":13793852.59770747,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":621981557.1796572,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":622692335.7334629,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":627934346.005889,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,968,263|91|
|Object.create({})|1,303,457|80|
|Cached Empty.prototype|715,081,482|95|
|Empty.prototype|1,331,675|74|
|Empty class|910,582|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41968262.91581797,"samples":7},{"name":"Object.create({})","opsSec":1303457.319883779,"samples":3},{"name":"Cached Empty.prototype","opsSec":715081481.6819216,"samples":11},{"name":"Empty.prototype","opsSec":1331674.7465556823,"samples":3},{"name":"Empty class","opsSec":910581.7180634368,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|576,968,032|94|
|Using optional chain (obj.field?.field2) (undefined)|587,438,012|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|586,950,778|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,930,301|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":576968031.5738629,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":587438012.2950528,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":586950778.4815152,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":588930300.9073159,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|165,209,015|84|
|Using parseInt(x, 10) - big number (10 len)|11,802,929|87|
|Using + - small number (2 len)|749,868,660|85|
|Using + - big number (10 len)|737,855,113|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":165209014.99866873,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11802929.323599517,"samples":7},{"name":"Using + - small number (2 len)","opsSec":749868660.2795374,"samples":6},{"name":"Using + - big number (10 len)","opsSec":737855112.8249111,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|716,585|71|
|Using ? operator to avoid rejection|763,780|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":716585.4481825166,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":763779.9841045366,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,927,325|87|
|Raw usage underscore usage|4,924,913|87|
|Manipulating private properties using #|1,869,453|82|
|Manipulating private properties using underscore(_)|556,822,615|86|
|Manipulating private properties using Symbol|543,960,720|90|
|Manipulating private properties using PrivateSymbol|21,869,759|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5927324.642899202,"samples":6},{"name":"Raw usage underscore usage","opsSec":4924913.244273668,"samples":5},{"name":"Manipulating private properties using #","opsSec":1869452.9733465884,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":556822614.9619871,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":543960719.6293284,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21869759.18480941,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,947,360|98|
|Adding property in the object creation - small object|1,960,714|98|
|Adding property after the function creation - small class|174,288|86|
|Adding property in the function creation - small class|175,364|87|
|Adding property after the class creation - small class|142,709|81|
|Adding property in the class creation - small class|142,841|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1947360.4320349675,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":1960713.6044219718,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":174287.77974391184,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":175363.6981620733,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":142709.0738033342,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":142840.75341793516,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|593,545,205|95|
|Getter|66,870,875|93|
|Method|594,231,503|98|
|DefineProperty (getter)|592,588,037|97|
|DefineProperty (getter & enumerable=false)|67,195,089|94|
|DefineProperty (getter & configurable=false)|595,446,568|95|
|DefineProperty (getter & enumerable=false & configurable=false)|65,918,814|95|
|DefineProperty (writable)|593,399,655|95|
|DefineProperty (writable & enumerable=false)|591,891,404|97|
|DefineProperty (writable & enumerable=false & configurable=false)|204,713,370|35|
|DefineProperties (getter)|40,600,637|82|
|DefineProperties (getter & enumerable=false)|67,104,780|94|
|DefineProperties (getter & enumerable=false & configurable=false)|66,575,057|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":593545204.5405294,"samples":6},{"name":"Getter","opsSec":66870874.861909494,"samples":5},{"name":"Method","opsSec":594231502.9500427,"samples":7},{"name":"DefineProperty (getter)","opsSec":592588036.9047085,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":67195088.98912974,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":595446568.3913795,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":65918814.04758675,"samples":5},{"name":"DefineProperty (writable)","opsSec":593399655.2610136,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591891404.0839648,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":204713369.58736116,"samples":6},{"name":"DefineProperties (getter)","opsSec":40600636.53121484,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":67104779.99141675,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":66575057.49135873,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|402,752,775|91|
|Setter|6,204,754|92|
|Method|412,284,077|92|
|DefineProperty (setter)|415,244,383|93|
|DefineProperty (setter & enumerable=false)|6,120,098|93|
|DefineProperty (setter & configurable=false)|6,233,321|94|
|DefineProperty (setter & enumerable=false & configurable=false)|6,342,463|93|
|DefineProperty (writable)|628,820,317|91|
|DefineProperty (writable & enumerable=false)|618,751,358|93|
|DefineProperty (writable & enumerable=false & configurable=false)|614,700,544|89|
|DefineProperties (setter)|615,919,660|88|
|DefineProperties (setter & enumerable=false)|6,250,957|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,318,930|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":402752775.3082066,"samples":6},{"name":"Setter","opsSec":6204754.045193458,"samples":6},{"name":"Method","opsSec":412284077.20129216,"samples":6},{"name":"DefineProperty (setter)","opsSec":415244383.14380336,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6120097.563446122,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6233321.059789399,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6342463.115721068,"samples":6},{"name":"DefineProperty (writable)","opsSec":628820316.9583396,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":618751357.8288717,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":614700543.6631685,"samples":7},{"name":"DefineProperties (setter)","opsSec":615919659.6681441,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6250956.89997317,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6318929.678885833,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,031,327|96|
|Using replaceAll()|1,893,842|95|
|Using replaceAll(//g)|1,821,541|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2031327.316005493,"samples":7},{"name":"Using replaceAll()","opsSec":1893842.1647432442,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1821540.6569185362,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,913,734|91|
|{ ...object, __proto__: null }|11,349,025|96|
|{ ...object, newProp: true }|428,253|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|120,619|95|
|loop + object.keys starting with {}|280,311|95|
|loop + object.keys starting with { __proto__: null }|364,263|97|
|loop + object.keys starting with { randomProp: true }|285,565|97|
|object.keys + reduce(FN, {})|282,284|96|
|object.keys + reduce(FN, { __proto__: null })|364,041|97|
|object.keys + reduce(FN, { newProp: true })|292,384|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":10913734.476816006,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":11349025.26084591,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":428253.01200958434,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":120619.06207701839,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":280311.35309943045,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":364262.8819470498,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":285564.9192385849,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":282284.21972786885,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":364040.9184767065,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":292384.3994137237,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,029|98|
|Sort using first char|781,907|94|
|Sort using localeCompare|421,317|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":174028.91830640408,"samples":6},{"name":"Sort using first char","opsSec":781907.3643396015,"samples":6},{"name":"Sort using localeCompare","opsSec":421317.34185004904,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,191|92|
|{...smallObject} - Total keys: 2|54,541,187|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,309|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,532|98|
|{ ...bigObject, ...anotherBigObject }|759|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,966,097|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,879,957|92|
|{ ...smallObject, ...anotherSmallObject }|12,661,170|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1191.3008901357862,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54541186.74201997,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1309.4499126688686,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3531.716450633576,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":759.2190137488494,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7966096.671012347,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18879956.70990873,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12661170.24000228,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,507|87|
|streams.web.Readable reading 1e3 * "some data"|395|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1506.8686927341737,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":395.18688572658857,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,929|91|
|streams.web.WritableStream writing 1e3 * "some data"|765|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2929.0334846946917,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":764.8436456021134,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|708,359,387|96|
|Using backtick (`)|713,640,502|95|
|Using array.join|6,416,157|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":708359387.3470148,"samples":6},{"name":"Using backtick (`)","opsSec":713640501.7066861,"samples":7},{"name":"Using array.join","opsSec":6416157.003927677,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,593,402|96|
|Using indexof|587,419,584|95|
|Using RegExp.test|9,584,046|96|
|Using RegExp.text with cached regex pattern|10,148,519|96|
|Using new RegExp.test|2,685,476|95|
|Using new RegExp.test with cached regex pattern|3,160,153|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10593402.011453828,"samples":5},{"name":"Using indexof","opsSec":587419583.6558661,"samples":11},{"name":"Using RegExp.test","opsSec":9584045.705192836,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":10148519.335204307,"samples":6},{"name":"Using new RegExp.test","opsSec":2685476.4860043605,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3160152.6555316458,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,982,473|93|
|Using this|131,454,977|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":130982473.27029684,"samples":7},{"name":"Using this","opsSec":131454977.15062356,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,565,996|86|
|Date.now()|11,600,851|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5565995.727853332,"samples":7},{"name":"Date.now()","opsSec":11600850.74724363,"samples":4}]}-->
