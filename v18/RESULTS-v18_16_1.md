## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|590,778,703|92|
|Using dot notation|582,806,719|90|
|Using define property (writable)|2,387,992|89|
|Using define property initialized (writable)|3,118,475|92|
|Using define property (getter)|1,327,828|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":590778703.242544,"samples":7},{"name":"Using dot notation","opsSec":582806719.4788196,"samples":7},{"name":"Using define property (writable)","opsSec":2387992.3966122265,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3118474.525926337,"samples":5},{"name":"Using define property (getter)","opsSec":1327827.5908393203,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.044ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.468ms
new Array(length)|10,000|0.258ms
array.push|1,000,000|53.657ms
new Array(length)|1,000,000|7.167ms
array.push|100,000,000|2,416.346ms
new Array(length)|100,000,000|5,887.672ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.04ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.072ms
new Array(length)|1,000|0.064ms
array.push|10,000|0.866ms
new Array(length)|10,000|5.008ms
array.push|1,000,000|409.771ms
new Array(length)|1,000,000|5.316ms
array.push|100,000,000|3,091.305ms
new Array(length)|100,000,000|6,390.596ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|240|79|
|Array.from|11|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":240.3204358760593,"samples":3},{"name":"Array.from","opsSec":11.241145043113587,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,345|82|
|new Blob (1024)|415|69|
|text (128)|31,621|65|
|text (1024)|21,486|88|
|arrayBuffer (128)|31,778|86|
|arrayBuffer (1024)|21,766|86|
|slice (0, 64)|55,334|77|
|slice (0, 512)|25,542|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3344.5140802565184,"samples":3},{"name":"new Blob (1024)","opsSec":414.6249323974734,"samples":2},{"name":"text (128)","opsSec":31621.42666955989,"samples":4},{"name":"text (1024)","opsSec":21485.513496166353,"samples":5},{"name":"arrayBuffer (128)","opsSec":31778.216760966185,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21766.01032204355,"samples":3},{"name":"slice (0, 64)","opsSec":55334.38532279412,"samples":3},{"name":"slice (0, 512)","opsSec":25542.45732223904,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,590|57|
|[True conditional] Using constructor name|145,406|96|
|[True conditional] Check if property is valid then instanceof |145,389|90|
|[False conditional] Using instanceof only|710,809,317|95|
|[False conditional] Using constructor name|710,010,958|98|
|[False conditional] Check if property is valid then instanceof |711,720,264|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181590.3525774762,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":145405.85802053876,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":145389.38595254172,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710809317.4972111,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":710010957.8627003,"samples":12},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711720264.183716,"samples":11}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,764|90|
|crypto.verify('RSA-SHA256')|3,724|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3764.425028936081,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3723.633556531433,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,403,593|91|
|fromUnixToISOString(new Date())|1,115,299|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1403592.6273248093,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1115299.353517823,"samples":10}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,309|92|
|Intl.DateTimeFormat().format(new Date())|8,594|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,497|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,064|84|
|Reusing Intl.DateTimeFormat()|415,193|94|
|Date.toLocaleDateString()|419,405|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,971|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9309.455325189043,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8593.9908957384,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7497.32954162883,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10064.192113869136,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":415193.10966273485,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":419405.1001595184,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9970.968783618559,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|689,223|96|
|Using brackets {}|699,056|95|
|Using '' + |690,419|95|
|Using date.toString()|754,478|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":689222.9658939454,"samples":6},{"name":"Using brackets {}","opsSec":699055.8190362732,"samples":4},{"name":"Using '' + ","opsSec":690418.8967144209,"samples":3},{"name":"Using date.toString()","opsSec":754477.9095854331,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,500,789|90|
|Using delete property (proto: null)|16,135,128|92|
|Using delete property (cached proto: null)|2,552,750|92|
|Using undefined assignment|916,156,790|88|
|Using undefined assignment (proto: null)|18,194,065|85|
|Using undefined property (cached proto: null)|782,137,763|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2500788.756250978,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16135128.194430275,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2552750.0239717816,"samples":5},{"name":"Using undefined assignment","opsSec":916156789.9946238,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":18194065.19893527,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":782137762.8785166,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,483|54|
|NodeError|126,821|94|
|NodeError Range|127,132|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":164483.43385527897,"samples":3},{"name":"NodeError","opsSec":126821.3355511073,"samples":3},{"name":"NodeError Range","opsSec":127132.43630416741,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,124,943|84|
|Function returning explicitly undefined|1,112,217|86|
|Function returning implicitly undefined|1,237,802|85|
|Function returning string|1,206,199|82|
|Function returning integer|1,150,016|84|
|Function returning float|1,103,641|88|
|Function returning functions|1,051,747|87|
|Function returning arrow functions|1,005,187|83|
|Function returning empty object|1,073,312|86|
|Function returning empty array|1,083,553|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1124942.565722002,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1112217.4989304633,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1237801.7673898032,"samples":8},{"name":"Function returning string","opsSec":1206198.6874068424,"samples":5},{"name":"Function returning integer","opsSec":1150016.2492667225,"samples":3},{"name":"Function returning float","opsSec":1103640.7921925331,"samples":3},{"name":"Function returning functions","opsSec":1051746.6404500236,"samples":5},{"name":"Function returning arrow functions","opsSec":1005186.674959979,"samples":5},{"name":"Function returning empty object","opsSec":1073312.2972315357,"samples":6},{"name":"Function returning empty array","opsSec":1083553.2325218124,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,422,704|96|
|using Array.includes (first item)|709,797,786|96|
|Using raw comparison|711,033,780|98|
|Using raw comparison (first item)|709,154,188|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":708422703.993418,"samples":9},{"name":"using Array.includes (first item)","opsSec":709797785.7743503,"samples":8},{"name":"Using raw comparison","opsSec":711033779.6184443,"samples":7},{"name":"Using raw comparison (first item)","opsSec":709154187.6729494,"samples":10}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,427,676|87|
|Using Object.getOwnPropertyNames()|38,433,039|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":45427676.08500194,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":38433039.29139824,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,619,807|81|
|Length = 10_000 - Array.at|14,824,784|86|
|Length = 1_000_000 - Array.at|14,882,693|88|
|Length = 100 - Array[length - 1]|669,220,542|89|
|Length = 10_000 - Array[length - 1]|686,143,373|87|
|Length = 1_000_000 - Array[length - 1]|694,245,635|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14619806.511078587,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":14824783.573885597,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":14882693.205218535,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":669220542.2435826,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":686143373.2461807,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":694245634.6270293,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,978,789|81|
|Object.create({})|812,252|72|
|Cached Empty.prototype|589,622,881|92|
|Empty.prototype|849,145|75|
|Empty class|597,823|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":35978788.59848743,"samples":6},{"name":"Object.create({})","opsSec":812251.8950932032,"samples":3},{"name":"Cached Empty.prototype","opsSec":589622880.6374791,"samples":7},{"name":"Empty.prototype","opsSec":849145.3180318509,"samples":3},{"name":"Empty class","opsSec":597822.5852783542,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|581,646,973|97|
|Using optional chain (obj.field?.field2) (undefined)|590,545,473|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,120,995|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,862,463|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":581646972.7922077,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":590545472.9775139,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593120994.6961017,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":591862462.7620006,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|127,631,670|94|
|Using parseInt(x, 10) - big number (10 len)|10,699,069|95|
|Using + - small number (2 len)|588,976,785|96|
|Using + - big number (10 len)|587,139,426|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":127631669.55632302,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10699068.867558941,"samples":6},{"name":"Using + - small number (2 len)","opsSec":588976785.3078034,"samples":7},{"name":"Using + - big number (10 len)","opsSec":587139425.6872866,"samples":10}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|476,928|72|
|Using ? operator to avoid rejection|497,242|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":476928.05705826613,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":497241.95901229227,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|250,644,836|94|
|Raw usage underscore usage|256,572,879|94|
|Manipulating private properties using #|190,253,608|95|
|Manipulating private properties using underscore(_)|181,270,554|92|
|Manipulating private properties using Symbol|177,292,544|91|
|Manipulating private properties using PrivateSymbol|36,296,466|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":250644835.71324784,"samples":6},{"name":"Raw usage underscore usage","opsSec":256572878.68045524,"samples":6},{"name":"Manipulating private properties using #","opsSec":190253607.68735015,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":181270554.03973415,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":177292544.2586009,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36296466.240888394,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,578,154|97|
|Adding property in the object creation - small object|2,598,626|97|
|Adding property after the function creation - small class|148,519|87|
|Adding property in the function creation - small class|148,875|85|
|Adding property after the class creation - small class|121,296|84|
|Adding property in the class creation - small class|118,131|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2578153.9626951087,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2598626.2315333253,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":148519.06813458647,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148874.51788168974,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":121296.13463772561,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":118131.39361370928,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|655,626,966|83|
|Getter|49,043,052|88|
|Method|673,589,184|88|
|DefineProperty (getter)|659,358,234|87|
|DefineProperty (getter & enumerable=false)|48,378,128|87|
|DefineProperty (getter & configurable=false)|673,668,360|87|
|DefineProperty (getter & enumerable=false & configurable=false)|48,424,232|88|
|DefineProperty (writable)|646,796,236|84|
|DefineProperty (writable & enumerable=false)|624,925,048|84|
|DefineProperty (writable & enumerable=false & configurable=false)|621,295,088|88|
|DefineProperties (getter)|45,432,895|88|
|DefineProperties (getter & enumerable=false)|45,897,532|83|
|DefineProperties (getter & enumerable=false & configurable=false)|45,800,890|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":655626966.4390569,"samples":8},{"name":"Getter","opsSec":49043051.93218479,"samples":7},{"name":"Method","opsSec":673589183.6926804,"samples":8},{"name":"DefineProperty (getter)","opsSec":659358233.7027202,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48378128.22352022,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":673668360.1220033,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48424232.481092915,"samples":6},{"name":"DefineProperty (writable)","opsSec":646796236.4364731,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":624925048.4605443,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":621295087.6324165,"samples":6},{"name":"DefineProperties (getter)","opsSec":45432894.59945188,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45897531.955655105,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45800890.30545051,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|473,600,625|97|
|Setter|7,083,375|91|
|Method|474,887,901|95|
|DefineProperty (setter)|473,884,412|97|
|DefineProperty (setter & enumerable=false)|7,421,694|97|
|DefineProperty (setter & configurable=false)|7,329,177|98|
|DefineProperty (setter & enumerable=false & configurable=false)|7,458,390|94|
|DefineProperty (writable)|706,713,675|95|
|DefineProperty (writable & enumerable=false)|709,085,825|95|
|DefineProperty (writable & enumerable=false & configurable=false)|384,262,987|54|
|DefineProperties (setter)|61,648,555|85|
|DefineProperties (setter & enumerable=false)|7,309,938|98|
|DefineProperties (setter & enumerable=false & configurable=false)|7,229,421|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":473600625.2549864,"samples":9},{"name":"Setter","opsSec":7083374.875387866,"samples":6},{"name":"Method","opsSec":474887900.98733556,"samples":8},{"name":"DefineProperty (setter)","opsSec":473884412.4109097,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7421694.41667812,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7329177.154958923,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7458390.366860553,"samples":6},{"name":"DefineProperty (writable)","opsSec":706713675.3247832,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":709085825.2271608,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":384262987.4782049,"samples":7},{"name":"DefineProperties (setter)","opsSec":61648555.21747643,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7309938.220726118,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7229420.923330387,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,609,850|90|
|Using replaceAll()|1,484,693|89|
|Using replaceAll(//g)|1,446,895|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1609849.8984362823,"samples":6},{"name":"Using replaceAll()","opsSec":1484692.5743101886,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1446895.4713807944,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,875,759|94|
|{ ...object, __proto__: null }|14,977,415|90|
|{ ...object, newProp: true }|458,598|85|
|structuredClone|176,131|97|
|JSON.parse + JSON.stringify|144,599|96|
|loop + object.keys starting with {}|667,747|97|
|loop + object.keys starting with { __proto__: null }|414,244|95|
|loop + object.keys starting with { randomProp: true }|314,651|94|
|object.keys + reduce(FN, {})|297,446|98|
|object.keys + reduce(FN, { __proto__: null })|411,127|91|
|object.keys + reduce(FN, { newProp: true })|314,909|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":14875759.231430275,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":14977414.59211564,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":458597.69116811146,"samples":3},{"name":"structuredClone","opsSec":176130.58830721985,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":144598.99884572526,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":667747.157959436,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":414244.2887474764,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":314651.4284725838,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":297445.5670442859,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":411126.78145173745,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":314909.4065211767,"samples":7}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,799|87|
|Sort using first char|663,642|90|
|Sort using localeCompare|596,236|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":141798.90298983894,"samples":5},{"name":"Sort using first char","opsSec":663641.8689657187,"samples":4},{"name":"Sort using localeCompare","opsSec":596236.2258908792,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,122|89|
|{...smallObject} - Total keys: 2|51,378,846|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,129|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,058|93|
|{ ...bigObject, ...anotherBigObject }|684|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,688,488|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|14,468,315|94|
|{ ...smallObject, ...anotherSmallObject }|9,393,123|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1122.2704279334666,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51378846.01945004,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1129.0598918547423,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3057.869906327433,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":684.4756194492776,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6688487.52664348,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":14468314.986169232,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9393122.819099516,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,390|83|
|streams.web.Readable reading 1e3 * "some data"|424|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1390.280794483141,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":424.394881381052,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,363|96|
|streams.web.WritableStream writing 1e3 * "some data"|923|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:50:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3362.9994894667943,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":922.7741102563642,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|629,730,890|89|
|Using backtick (`)|652,194,975|87|
|Using array.join|5,224,745|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":629730889.617349,"samples":6},{"name":"Using backtick (`)","opsSec":652194974.689132,"samples":7},{"name":"Using array.join","opsSec":5224744.7567205485,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|712,294,410|96|
|Using indexof|711,280,566|97|
|Using RegExp.test|10,844,690|95|
|Using RegExp.text with cached regex pattern|11,275,156|96|
|Using new RegExp.test|2,982,075|97|
|Using new RegExp.test with cached regex pattern|3,393,676|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":712294409.5126008,"samples":7},{"name":"Using indexof","opsSec":711280565.8300632,"samples":9},{"name":"Using RegExp.test","opsSec":10844690.338203343,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11275155.760490052,"samples":6},{"name":"Using new RegExp.test","opsSec":2982074.5957367932,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3393675.66014488,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,564,467|96|
|Using this|112,970,331|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":111564467.1687492,"samples":5},{"name":"Using this","opsSec":112970331.15863858,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,482,208|85|
|Date.now()|13,723,123|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":6482208.328457439,"samples":5},{"name":"Date.now()","opsSec":13723123.131346107,"samples":4}]}-->
