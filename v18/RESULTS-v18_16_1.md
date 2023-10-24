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
|Using delete property|1,995,536|93|
|Using delete property (proto: null)|10,048,187|91|
|Using delete property (cached proto: null)|1,974,970|93|
|Using undefined assignment|597,316,752|92|
|Using undefined assignment (proto: null)|11,916,324|94|
|Using undefined property (cached proto: null)|601,882,763|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1995535.5071161715,"samples":7},{"name":"Using delete property (proto: null)","opsSec":10048187.162919452,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1974970.4867711435,"samples":5},{"name":"Using undefined assignment","opsSec":597316752.4188766,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11916324.381241327,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":601882763.0746459,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|155,425|53|
|NodeError|113,468|86|
|NodeError Range|121,312|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":155424.91979041038,"samples":4},{"name":"NodeError","opsSec":113467.91508609682,"samples":3},{"name":"NodeError Range","opsSec":121311.88144562428,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,349,601|93|
|Function returning explicitly undefined|1,346,431|93|
|Function returning implicitly undefined|1,386,813|95|
|Function returning string|1,355,847|97|
|Function returning integer|1,368,909|92|
|Function returning float|1,364,769|95|
|Function returning functions|1,338,356|92|
|Function returning arrow functions|1,350,102|95|
|Function returning empty object|1,374,483|98|
|Function returning empty array|1,379,515|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1349600.9619022987,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1346430.5248447158,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1386812.5778220121,"samples":6},{"name":"Function returning string","opsSec":1355846.5625164749,"samples":5},{"name":"Function returning integer","opsSec":1368908.5035739448,"samples":7},{"name":"Function returning float","opsSec":1364768.6088557388,"samples":5},{"name":"Function returning functions","opsSec":1338355.5213830688,"samples":7},{"name":"Function returning arrow functions","opsSec":1350101.6552818425,"samples":7},{"name":"Function returning empty object","opsSec":1374483.1672656364,"samples":5},{"name":"Function returning empty array","opsSec":1379514.575953374,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|574,700,820|89|
|using Array.includes (first item)|590,633,213|92|
|Using raw comparison|591,780,026|92|
|Using raw comparison (first item)|589,667,366|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":574700820.4122958,"samples":10},{"name":"using Array.includes (first item)","opsSec":590633212.764486,"samples":7},{"name":"Using raw comparison","opsSec":591780025.5992852,"samples":6},{"name":"Using raw comparison (first item)","opsSec":589667366.185143,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,336,033|89|
|Using Object.getOwnPropertyNames()|52,894,092|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":50336033.061005555,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":52894091.68554551,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,515,714|94|
|Length = 10_000 - Array.at|15,542,850|94|
|Length = 1_000_000 - Array.at|15,591,897|94|
|Length = 100 - Array[length - 1]|710,835,340|97|
|Length = 10_000 - Array[length - 1]|709,730,341|98|
|Length = 1_000_000 - Array[length - 1]|709,622,203|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15515714.16251909,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":15542850.408344315,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":15591897.194039462,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":710835340.2584237,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":709730341.198901,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":709622202.9429415,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,088,161|86|
|Object.create({})|1,038,426|82|
|Cached Empty.prototype|593,529,279|99|
|Empty.prototype|1,138,005|83|
|Empty class|655,268|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":55088161.34340329,"samples":6},{"name":"Object.create({})","opsSec":1038425.5760410905,"samples":3},{"name":"Cached Empty.prototype","opsSec":593529278.6239476,"samples":9},{"name":"Empty.prototype","opsSec":1138004.6560157628,"samples":4},{"name":"Empty class","opsSec":655268.3813618484,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|698,368,164|81|
|Using optional chain (obj.field?.field2) (undefined)|732,901,175|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|727,546,702|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|750,215,069|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":698368163.5143964,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":732901174.6331009,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":727546702.0367265,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":750215069.3324819,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,586,009|95|
|Using parseInt(x, 10) - big number (10 len)|12,877,832|99|
|Using + - small number (2 len)|710,802,848|95|
|Using + - big number (10 len)|709,125,775|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157586008.743279,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12877832.127714409,"samples":6},{"name":"Using + - small number (2 len)","opsSec":710802847.9479543,"samples":6},{"name":"Using + - big number (10 len)","opsSec":709125774.8360568,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|512,171|75|
|Using ? operator to avoid rejection|551,341|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":512170.9507375599,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":551341.0660271614,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|243,281,001|92|
|Raw usage underscore usage|230,633,954|94|
|Manipulating private properties using #|146,951,641|84|
|Manipulating private properties using underscore(_)|132,716,856|95|
|Manipulating private properties using Symbol|132,028,315|89|
|Manipulating private properties using PrivateSymbol|27,065,926|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":243281000.94339696,"samples":8},{"name":"Raw usage underscore usage","opsSec":230633954.31895575,"samples":7},{"name":"Manipulating private properties using #","opsSec":146951641.32289782,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":132716855.95031677,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":132028315.18139383,"samples":11},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27065926.32755139,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,564,866|96|
|Adding property in the object creation - small object|2,564,156|98|
|Adding property after the function creation - small class|143,131|83|
|Adding property in the function creation - small class|148,981|86|
|Adding property after the class creation - small class|119,430|81|
|Adding property in the class creation - small class|121,481|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2564866.0620518154,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2564156.319142769,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":143130.84951239338,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148980.88414548317,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":119430.13444239329,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":121480.92689181764,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|591,276,097|97|
|Getter|70,998,916|94|
|Method|592,203,332|97|
|DefineProperty (getter)|592,132,519|96|
|DefineProperty (getter & enumerable=false)|71,008,458|93|
|DefineProperty (getter & configurable=false)|593,306,933|97|
|DefineProperty (getter & enumerable=false & configurable=false)|70,772,236|93|
|DefineProperty (writable)|593,191,832|96|
|DefineProperty (writable & enumerable=false)|591,123,825|94|
|DefineProperty (writable & enumerable=false & configurable=false)|592,454,434|96|
|DefineProperties (getter)|70,495,507|93|
|DefineProperties (getter & enumerable=false)|70,822,201|94|
|DefineProperties (getter & enumerable=false & configurable=false)|45,347,668|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":591276097.0027034,"samples":6},{"name":"Getter","opsSec":70998915.79100917,"samples":7},{"name":"Method","opsSec":592203332.086083,"samples":6},{"name":"DefineProperty (getter)","opsSec":592132518.8519146,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71008458.22146624,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":593306933.3978246,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":70772236.24725176,"samples":6},{"name":"DefineProperty (writable)","opsSec":593191831.9245576,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591123824.8398892,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":592454433.58352,"samples":6},{"name":"DefineProperties (getter)","opsSec":70495506.50704727,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":70822201.34748782,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45347668.225396894,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|722,401,359|85|
|Setter|7,347,921|82|
|Method|719,170,852|88|
|DefineProperty (setter)|711,462,801|89|
|DefineProperty (setter & enumerable=false)|7,719,247|88|
|DefineProperty (setter & configurable=false)|7,495,436|88|
|DefineProperty (setter & enumerable=false & configurable=false)|7,602,385|87|
|DefineProperty (writable)|873,239,178|86|
|DefineProperty (writable & enumerable=false)|827,958,027|85|
|DefineProperty (writable & enumerable=false & configurable=false)|845,577,939|84|
|DefineProperties (setter)|264,944,272|31|
|DefineProperties (setter & enumerable=false)|6,734,649|87|
|DefineProperties (setter & enumerable=false & configurable=false)|7,640,755|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":722401358.8788862,"samples":8},{"name":"Setter","opsSec":7347921.031756191,"samples":6},{"name":"Method","opsSec":719170852.454637,"samples":6},{"name":"DefineProperty (setter)","opsSec":711462800.7746809,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7719247.418144033,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7495436.27566757,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7602384.757184169,"samples":4},{"name":"DefineProperty (writable)","opsSec":873239178.0590935,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":827958027.2792022,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":845577938.7472682,"samples":6},{"name":"DefineProperties (setter)","opsSec":264944271.629466,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6734649.394204471,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7640754.691676607,"samples":5}]}-->

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
