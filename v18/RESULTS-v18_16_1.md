## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,391,522|96|
|Using dot notation|595,081,085|94|
|Using define property (writable)|2,960,802|96|
|Using define property initialized (writable)|4,229,116|97|
|Using define property (getter)|1,559,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591391522.358185,"samples":7},{"name":"Using dot notation","opsSec":595081084.7213998,"samples":9},{"name":"Using define property (writable)","opsSec":2960801.7061163685,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4229115.713580088,"samples":6},{"name":"Using define property (getter)","opsSec":1559280.2059705523,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.038ms
new Array(length)|100|0.012ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.552ms
new Array(length)|10,000|0.28ms
array.push|1,000,000|39.672ms
new Array(length)|1,000,000|22.463ms
array.push|100,000,000|2,226.259ms
new Array(length)|100,000,000|5,580.812ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.067ms
array.push|10,000|1.374ms
new Array(length)|10,000|4.887ms
array.push|1,000,000|419.562ms
new Array(length)|1,000,000|5.429ms
array.push|100,000,000|3,308.465ms
new Array(length)|100,000,000|6,437.913ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|360|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":359.6537324754509,"samples":3},{"name":"Array.from","opsSec":15.146744451575481,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,271|88|
|new Blob (1024)|412|73|
|text (128)|31,361|63|
|text (1024)|21,020|87|
|arrayBuffer (128)|31,664|87|
|arrayBuffer (1024)|21,369|81|
|slice (0, 64)|66,013|82|
|slice (0, 512)|40,409|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3271.0525121326286,"samples":4},{"name":"new Blob (1024)","opsSec":412.36702349193297,"samples":2},{"name":"text (128)","opsSec":31361.13303942419,"samples":4},{"name":"text (1024)","opsSec":21020.17012780898,"samples":3},{"name":"arrayBuffer (128)","opsSec":31663.705209927833,"samples":3},{"name":"arrayBuffer (1024)","opsSec":21369.331575105818,"samples":3},{"name":"slice (0, 64)","opsSec":66013.08370593889,"samples":3},{"name":"slice (0, 512)","opsSec":40408.955241322255,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,778|59|
|[True conditional] Using constructor name|142,469|93|
|[True conditional] Check if property is valid then instanceof |142,795|92|
|[False conditional] Using instanceof only|709,975,328|94|
|[False conditional] Using constructor name|710,023,130|95|
|[False conditional] Check if property is valid then instanceof |707,952,581|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178778.27646198575,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":142469.4403113874,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":142794.8981362363,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":709975328.2270123,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":710023130.1245688,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":707952581.0012897,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,883|91|
|crypto.verify('RSA-SHA256')|4,859|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4882.503653532196,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":4858.643406800486,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,695,147|95|
|fromUnixToISOString(new Date())|1,439,686|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1695146.5897859924,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1439686.307682611,"samples":10}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,602|85|
|Intl.DateTimeFormat().format(new Date())|8,266|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,302|63|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,639|97|
|Reusing Intl.DateTimeFormat()|360,898|74|
|Date.toLocaleDateString()|464,063|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,409|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7601.741081670525,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8266.301403712936,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6301.656552907621,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10639.264810939765,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":360897.8904655501,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":464062.6386751792,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9409.440879578859,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,388|94|
|Using brackets {}|674,532|92|
|Using '' + |662,558|93|
|Using date.toString()|745,427|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":672388.3770604824,"samples":6},{"name":"Using brackets {}","opsSec":674531.9923515095,"samples":3},{"name":"Using '' + ","opsSec":662558.425209728,"samples":4},{"name":"Using date.toString()","opsSec":745426.6879807044,"samples":5}]}-->

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
