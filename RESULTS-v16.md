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
|Using if to check function existence|603,471|75|
|Using ? operator to avoid rejection|646,559|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":603470.6578780032,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":646559.4868726021,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,747,648|96|
|Raw usage underscore usage|7,177,491|98|
|Manipulating private properties using #|2,606,205|96|
|Manipulating private properties using underscore(_)|699,903,937|91|
|Manipulating private properties using Symbol|698,177,591|98|
|Manipulating private properties using PrivateSymbol|24,339,528|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":8747647.50988132,"samples":6},{"name":"Raw usage underscore usage","opsSec":7177491.272944275,"samples":7},{"name":"Manipulating private properties using #","opsSec":2606204.997620039,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":699903937.1475878,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":698177590.7052616,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":24339528.270431407,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,944,438|94|
|Adding property in the object creation - small object|1,950,655|96|
|Adding property after the function creation - small class|169,383|84|
|Adding property in the function creation - small class|171,171|83|
|Adding property after the class creation - small class|137,582|78|
|Adding property in the class creation - small class|138,873|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1944438.322679529,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1950655.3614728283,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":169383.3550001924,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":171171.40506722417,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":137582.44516747614,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":138872.69254427802,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|594,551,572|96|
|Getter|61,167,029|93|
|Method|595,020,706|95|
|DefineProperty (getter)|595,186,134|98|
|DefineProperty (getter & enumerable=false)|66,374,370|96|
|DefineProperty (getter & configurable=false)|595,598,090|97|
|DefineProperty (getter & enumerable=false & configurable=false)|65,156,966|96|
|DefineProperty (writable)|546,865,838|90|
|DefineProperty (writable & enumerable=false)|101,619,505|83|
|DefineProperty (writable & enumerable=false & configurable=false)|100,902,793|82|
|DefineProperties (getter)|40,874,819|89|
|DefineProperties (getter & enumerable=false)|66,941,297|95|
|DefineProperties (getter & enumerable=false & configurable=false)|66,814,050|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":594551572.4603394,"samples":7},{"name":"Getter","opsSec":61167029.13969526,"samples":6},{"name":"Method","opsSec":595020706.2083776,"samples":7},{"name":"DefineProperty (getter)","opsSec":595186134.1062552,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":66374370.206370905,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":595598089.7739533,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":65156966.12551372,"samples":7},{"name":"DefineProperty (writable)","opsSec":546865837.6498717,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101619505.07130441,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100902792.88176225,"samples":5},{"name":"DefineProperties (getter)","opsSec":40874818.6206419,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":66941297.19096167,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":66814049.70795348,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,470,820|95|
|Setter|6,982,174|93|
|Method|478,207,967|96|
|DefineProperty (setter)|477,305,963|99|
|DefineProperty (setter & enumerable=false)|7,242,906|95|
|DefineProperty (setter & configurable=false)|7,254,464|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,295,122|95|
|DefineProperty (writable)|712,497,175|91|
|DefineProperty (writable & enumerable=false)|74,679,193|36|
|DefineProperty (writable & enumerable=false & configurable=false)|76,860,619|76|
|DefineProperties (setter)|62,650,289|80|
|DefineProperties (setter & enumerable=false)|6,424,828|92|
|DefineProperties (setter & enumerable=false & configurable=false)|7,020,313|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478470820.0377592,"samples":6},{"name":"Setter","opsSec":6982173.513040938,"samples":5},{"name":"Method","opsSec":478207966.6307366,"samples":7},{"name":"DefineProperty (setter)","opsSec":477305963.3943987,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7242905.5386748705,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":7254464.462749288,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7295121.792099639,"samples":6},{"name":"DefineProperty (writable)","opsSec":712497175.2294087,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":74679192.61948496,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":76860619.21865411,"samples":5},{"name":"DefineProperties (setter)","opsSec":62650289.19055999,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6424828.340993308,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7020313.228779117,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,673,852|94|
|Using replaceAll()|1,579,314|93|
|Using replaceAll(//g)|1,499,045|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1673851.7010961587,"samples":7},{"name":"Using replaceAll()","opsSec":1579313.521846713,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1499045.4042397863,"samples":6}]}-->

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
