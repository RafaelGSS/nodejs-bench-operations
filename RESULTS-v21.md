## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,725,300|7362651|
|Using dot notation|13,790,698|6895350|
|Using define property (writable)|3,092,854|1546428|
|Using define property initialized (writable)|3,719,171|1859586|
|Using define property (getter)|1,715,561|857781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:21:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14725300.321357463,"samples":7362651},{"name":"Using dot notation","opsSec":13790698.538083564,"samples":6895350},{"name":"Using define property (writable)","opsSec":3092854.985548825,"samples":1546428},{"name":"Using define property initialized (writable)","opsSec":3719171.3602958424,"samples":1859586},{"name":"Using define property (getter)","opsSec":1715561.6363043177,"samples":857781}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.014ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.257ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|29.497ms
new Array(length)|1,000,000|8.169ms
array.push|100,000,000|1,790.536ms
new Array(length)|100,000,000|3,924.254ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.362ms
new Array(length)|10,000|0.193ms
array.push|1,000,000|20.314ms
new Array(length)|1,000,000|7.755ms
array.push|100,000,000|1,976.023ms
new Array(length)|100,000,000|4,646.55ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|285|143|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:33:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":285.2249144154215,"samples":143},{"name":"Array.from","opsSec":23.072749970754806,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,004|2036|
|new Blob (1024)|581|291|
|text (128)|4,904|2453|
|text (1024)|606|305|
|arrayBuffer (128)|4,892|2447|
|arrayBuffer (1024)|601|301|
|slice (0, 64)|226,244|113123|
|slice (0, 512)|39,458|19730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:14:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4004.4011042983734,"samples":2036},{"name":"new Blob (1024)","opsSec":581.5411814540589,"samples":291},{"name":"text (128)","opsSec":4904.779681006012,"samples":2453},{"name":"text (1024)","opsSec":606.5136407164987,"samples":305},{"name":"arrayBuffer (128)","opsSec":4892.306175971143,"samples":2447},{"name":"arrayBuffer (1024)","opsSec":601.6340741234225,"samples":301},{"name":"slice (0, 64)","opsSec":226244.86696569718,"samples":113123},{"name":"slice (0, 512)","opsSec":39458.53048542509,"samples":19730}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|307,132|153567|
|[True conditional] Using constructor name|300,245|150123|
|[True conditional] Check if property is valid then instanceof |305,370|152686|
|[False conditional] Using instanceof only|14,433,872|7216937|
|[False conditional] Using constructor name|13,674,713|6837357|
|[False conditional] Check if property is valid then instanceof |13,988,531|6994266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":307132.1965193628,"samples":153567},{"name":"[True conditional] Using constructor name","opsSec":300245.61628616694,"samples":150123},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":305370.6844628426,"samples":152686},{"name":"[False conditional] Using instanceof only","opsSec":14433872.239092406,"samples":7216937},{"name":"[False conditional] Using constructor name","opsSec":13674713.781274153,"samples":6837357},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13988531.943981733,"samples":6994266}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,293|3647|
|crypto.verify('RSA-SHA256')|7,328|3665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7293.883720905795,"samples":3647},{"name":"crypto.verify('RSA-SHA256')","opsSec":7328.295907382958,"samples":3665}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,271,940|635971|
|fromUnixToISOString(new Date())|1,846,435|923218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1271940.957008171,"samples":635971},{"name":"fromUnixToISOString(new Date())","opsSec":1846435.852284029,"samples":923218}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,100|11551|
|Intl.DateTimeFormat().format(new Date())|22,500|11251|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,045|11023|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,015|7508|
|Reusing Intl.DateTimeFormat()|648,340|324171|
|Date.toLocaleDateString()|638,668|319335|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,098|11550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23100.851980058444,"samples":11551},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22500.55010954964,"samples":11251},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22045.263247300598,"samples":11023},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15015.20956933798,"samples":7508},{"name":"Reusing Intl.DateTimeFormat()","opsSec":648340.4984439657,"samples":324171},{"name":"Date.toLocaleDateString()","opsSec":638668.5412811341,"samples":319335},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23098.892916255856,"samples":11550}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|945,143|472572|
|Using brackets {}|961,671|480836|
|Using '' + |974,381|487191|
|Using date.toString()|1,039,496|519749|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:47:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":945143.0624173881,"samples":472572},{"name":"Using brackets {}","opsSec":961671.5634009958,"samples":480836},{"name":"Using '' + ","opsSec":974381.3783444931,"samples":487191},{"name":"Using date.toString()","opsSec":1039496.5571784094,"samples":519749}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,713,669|1356835|
|Using delete property (proto: null)|7,788,392|3894197|
|Using delete property (cached proto: null)|2,712,139|1356070|
|Using undefined assignment|13,745,504|6872753|
|Using undefined assignment (proto: null)|7,898,145|3949073|
|Using undefined property (cached proto: null)|14,240,995|7120498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:56:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2713669.131617844,"samples":1356835},{"name":"Using delete property (proto: null)","opsSec":7788392.270944002,"samples":3894197},{"name":"Using delete property (cached proto: null)","opsSec":2712139.4467241946,"samples":1356070},{"name":"Using undefined assignment","opsSec":13745504.872803612,"samples":6872753},{"name":"Using undefined assignment (proto: null)","opsSec":7898145.857854186,"samples":3949073},{"name":"Using undefined property (cached proto: null)","opsSec":14240995.54417173,"samples":7120498}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|288,087|144044|
|NodeError|286,648|143325|
|NodeError Range|286,736|143369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:03:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":288087.6479569553,"samples":144044},{"name":"NodeError","opsSec":286648.9307994361,"samples":143325},{"name":"NodeError Range","opsSec":286736.16603547457,"samples":143369}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,525,307|762654|
|Function returning explicitly undefined|1,490,092|745047|
|Function returning implicitly undefined|1,534,001|767001|
|Function returning string|1,510,718|755361|
|Function returning integer|1,526,927|763465|
|Function returning float|1,515,360|757681|
|Function returning functions|1,472,369|736185|
|Function returning arrow functions|1,495,257|747629|
|Function returning empty object|1,523,694|761848|
|Function returning empty array|1,474,492|737247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:13:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1525307.8291665362,"samples":762654},{"name":"Function returning explicitly undefined","opsSec":1490092.1820889171,"samples":745047},{"name":"Function returning implicitly undefined","opsSec":1534001.1961852831,"samples":767001},{"name":"Function returning string","opsSec":1510718.7428855943,"samples":755361},{"name":"Function returning integer","opsSec":1526927.9478149205,"samples":763465},{"name":"Function returning float","opsSec":1515360.8968150525,"samples":757681},{"name":"Function returning functions","opsSec":1472369.0311834312,"samples":736185},{"name":"Function returning arrow functions","opsSec":1495257.7607563818,"samples":747629},{"name":"Function returning empty object","opsSec":1523694.549440502,"samples":761848},{"name":"Function returning empty array","opsSec":1474492.3367706113,"samples":737247}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,475,365|6737683|
|using Array.includes (first item)|13,847,906|6923954|
|Using raw comparison|14,222,687|7111344|
|Using raw comparison (first item)|13,255,222|6627612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13475365.595790664,"samples":6737683},{"name":"using Array.includes (first item)","opsSec":13847906.144441308,"samples":6923954},{"name":"Using raw comparison","opsSec":14222687.601973029,"samples":7111344},{"name":"Using raw comparison (first item)","opsSec":13255222.43590907,"samples":6627612}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,965,044|6482523|
|Using Object.getOwnPropertyNames()|12,479,145|6239573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:32:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12965044.158981405,"samples":6482523},{"name":"Using Object.getOwnPropertyNames()","opsSec":12479145.201268017,"samples":6239573}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,686,678|7343340|
|Length = 10_000 - Array.at|14,865,304|7432653|
|Length = 1_000_000 - Array.at|14,997,965|7498983|
|Length = 100 - Array[length - 1]|14,098,997|7049499|
|Length = 10_000 - Array[length - 1]|14,298,025|7149013|
|Length = 1_000_000 - Array[length - 1]|13,969,452|6984833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14686678.590196993,"samples":7343340},{"name":"Length = 10_000 - Array.at","opsSec":14865304.721627275,"samples":7432653},{"name":"Length = 1_000_000 - Array.at","opsSec":14997965.9400976,"samples":7498983},{"name":"Length = 100 - Array[length - 1]","opsSec":14098997.80259037,"samples":7049499},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14298025.199158225,"samples":7149013},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13969452.322778368,"samples":6984833}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,856,555|7428280|
|~ (small)|14,584,729|7292365|
|Math.floor (long)|14,368,462|7184232|
|~ (long)|14,679,621|7339811|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:56:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14856555.037842836,"samples":7428280},{"name":"~ (small)","opsSec":14584729.12496392,"samples":7292365},{"name":"Math.floor (long)","opsSec":14368462.76440807,"samples":7184232},{"name":"~ (long)","opsSec":14679621.618376918,"samples":7339811}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,579,379|5789690|
|Object.create({})|1,857,879|928943|
|Cached Empty.prototype|14,101,916|7050959|
|Empty.prototype|1,899,890|949950|
|Empty class|1,164,663|582332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:06:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11579379.814740561,"samples":5789690},{"name":"Object.create({})","opsSec":1857879.7315182942,"samples":928943},{"name":"Cached Empty.prototype","opsSec":14101916.364054482,"samples":7050959},{"name":"Empty.prototype","opsSec":1899890.6335404569,"samples":949950},{"name":"Empty class","opsSec":1164663.797348456,"samples":582332}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,295,685|7147843|
|Using optional chain (obj.field?.field2) (undefined)|15,219,912|7609957|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,871,761|7435881|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,901,661|7450831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14295685.399507783,"samples":7147843},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15219912.295299701,"samples":7609957},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14871761.761945257,"samples":7435881},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14901661.016548049,"samples":7450831}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,264,265|7132133|
|Using parseInt(x, 10) - big number (10 len)|14,943,228|7471615|
|Using + - small number (2 len)|14,289,379|7144690|
|Using + - big number (10 len)|14,855,378|7427696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14264265.457825506,"samples":7132133},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14943228.385966176,"samples":7471615},{"name":"Using + - small number (2 len)","opsSec":14289379.3713118,"samples":7144690},{"name":"Using + - big number (10 len)","opsSec":14855378.362657959,"samples":7427696}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|974,823|487412|
|Using ? operator to avoid rejection|1,009,847|504925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:33:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":974823.3449184771,"samples":487412},{"name":"Using ? operator to avoid rejection","opsSec":1009847.2209004348,"samples":504925}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,362,534|7181269|
|Raw usage underscore usage|14,613,516|7306759|
|Manipulating private properties using #|14,818,331|7409166|
|Manipulating private properties using underscore(_)|14,634,009|7317005|
|Manipulating private properties using Symbol|14,754,681|7377341|
|Manipulating private properties using PrivateSymbol|11,373,974|5686988|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":14362534.438192038,"samples":7181269},{"name":"Raw usage underscore usage","opsSec":14613516.246417861,"samples":7306759},{"name":"Manipulating private properties using #","opsSec":14818331.199716045,"samples":7409166},{"name":"Manipulating private properties using underscore(_)","opsSec":14634009.004908664,"samples":7317005},{"name":"Manipulating private properties using Symbol","opsSec":14754681.232539674,"samples":7377341},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11373974.202690508,"samples":5686988}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,858,415|2429208|
|Adding property in the object creation - small object|4,831,872|2415937|
|Adding property after the function creation - small class|238,565|119283|
|Adding property in the function creation - small class|247,043|123523|
|Adding property after the class creation - small class|231,465|115733|
|Adding property in the class creation - small class|224,886|112444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4858415.416993222,"samples":2429208},{"name":"Adding property in the object creation - small object","opsSec":4831872.608419918,"samples":2415937},{"name":"Adding property after the function creation - small class","opsSec":238565.11396921915,"samples":119283},{"name":"Adding property in the function creation - small class","opsSec":247043.93915949162,"samples":123523},{"name":"Adding property after the class creation - small class","opsSec":231465.388005381,"samples":115733},{"name":"Adding property in the class creation - small class","opsSec":224886.26522729945,"samples":112444}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,865,466|6932734|
|Getter|12,020,660|6010331|
|Method|13,989,304|6994653|
|DefineProperty (getter)|14,012,324|7006163|
|DefineProperty (getter & enumerable=false)|11,872,445|5936223|
|DefineProperty (getter & configurable=false)|13,558,597|6779299|
|DefineProperty (getter & enumerable=false & configurable=false)|12,047,403|6023702|
|DefineProperty (writable)|14,037,702|7018852|
|DefineProperty (writable & enumerable=false)|12,919,662|6459874|
|DefineProperty (writable & enumerable=false & configurable=false)|13,092,252|6546127|
|DefineProperties (getter)|11,870,848|5935425|
|DefineProperties (getter & enumerable=false)|11,988,136|5994069|
|DefineProperties (getter & enumerable=false & configurable=false)|12,299,803|6149902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":13865466.558083603,"samples":6932734},{"name":"Getter","opsSec":12020660.31683533,"samples":6010331},{"name":"Method","opsSec":13989304.181305358,"samples":6994653},{"name":"DefineProperty (getter)","opsSec":14012324.458419694,"samples":7006163},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11872445.738823554,"samples":5936223},{"name":"DefineProperty (getter & configurable=false)","opsSec":13558597.810167138,"samples":6779299},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12047403.494353373,"samples":6023702},{"name":"DefineProperty (writable)","opsSec":14037702.34383471,"samples":7018852},{"name":"DefineProperty (writable & enumerable=false)","opsSec":12919662.756003376,"samples":6459874},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13092252.84814656,"samples":6546127},{"name":"DefineProperties (getter)","opsSec":11870848.527734438,"samples":5935425},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11988136.465482775,"samples":5994069},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12299803.13857408,"samples":6149902}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|13,444,455|6722228|
|Setter|5,732,877|2866439|
|Method|13,168,254|6584128|
|DefineProperty (setter)|13,322,739|6661370|
|DefineProperty (setter & enumerable=false)|5,770,518|2885260|
|DefineProperty (setter & configurable=false)|5,709,195|2854598|
|DefineProperty (setter & enumerable=false & configurable=false)|5,673,542|2836772|
|DefineProperty (writable)|13,385,608|6692805|
|DefineProperty (writable & enumerable=false)|13,065,362|6532682|
|DefineProperty (writable & enumerable=false & configurable=false)|13,411,879|6705940|
|DefineProperties (setter)|13,237,067|6618534|
|DefineProperties (setter & enumerable=false)|5,677,532|2838767|
|DefineProperties (setter & enumerable=false & configurable=false)|5,859,932|2929967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:34:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":13444455.972835615,"samples":6722228},{"name":"Setter","opsSec":5732877.72491638,"samples":2866439},{"name":"Method","opsSec":13168254.288041666,"samples":6584128},{"name":"DefineProperty (setter)","opsSec":13322739.57374431,"samples":6661370},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5770518.718954992,"samples":2885260},{"name":"DefineProperty (setter & configurable=false)","opsSec":5709195.611809627,"samples":2854598},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5673542.97876167,"samples":2836772},{"name":"DefineProperty (writable)","opsSec":13385608.848823614,"samples":6692805},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13065362.327408897,"samples":6532682},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13411879.490644477,"samples":6705940},{"name":"DefineProperties (setter)","opsSec":13237067.311211893,"samples":6618534},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5677532.785031615,"samples":2838767},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5859932.324072688,"samples":2929967}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,608,238|1304120|
|Using replaceAll()|2,417,085|1208543|
|Using replaceAll(//g)|2,390,640|1195321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2608238.7689105854,"samples":1304120},{"name":"Using replaceAll()","opsSec":2417085.874314033,"samples":1208543},{"name":"Using replaceAll(//g)","opsSec":2390640.2787355944,"samples":1195321}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,160,198|4580100|
|{ ...object, __proto__: null }|2,127,573|1063787|
|{ ...object, newProp: true }|8,602,931|4303044|
|structuredClone|269,802|134902|
|JSON.parse + JSON.stringify|241,771|120886|
|loop + object.keys starting with {}|1,236,405|618204|
|loop + object.keys starting with { __proto__: null }|662,815|331408|
|loop + object.keys starting with { randomProp: true }|477,101|238551|
|object.keys + reduce(FN, {})|1,243,600|621801|
|object.keys + reduce(FN, { __proto__: null })|657,015|328508|
|object.keys + reduce(FN, { newProp: true })|477,317|238659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9160198.845805624,"samples":4580100},{"name":"{ ...object, __proto__: null }","opsSec":2127573.0851573506,"samples":1063787},{"name":"{ ...object, newProp: true }","opsSec":8602931.56723628,"samples":4303044},{"name":"structuredClone","opsSec":269802.1572510544,"samples":134902},{"name":"JSON.parse + JSON.stringify","opsSec":241771.4366726644,"samples":120886},{"name":"loop + object.keys starting with {}","opsSec":1236405.984661611,"samples":618204},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":662815.0044493368,"samples":331408},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":477101.96278612805,"samples":238551},{"name":"object.keys + reduce(FN, {})","opsSec":1243600.0152108264,"samples":621801},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":657015.4901551043,"samples":328508},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":477317.07591425534,"samples":238659}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|305,081|152541|
|Sort using first char|1,109,897|554949|
|Sort using localeCompare|1,031,358|515680|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:59:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":305081.3642103577,"samples":152541},{"name":"Sort using first char","opsSec":1109897.4783491371,"samples":554949},{"name":"Sort using localeCompare","opsSec":1031358.4302723241,"samples":515680}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,779|890|
|{...smallObject} - Total keys: 2|10,726,574|5363288|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,218|1110|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,463|3232|
|{ ...bigObject, ...anotherBigObject }|1,100|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,191,153|3095577|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,813,106|4906554|
|{ ...smallObject, ...anotherSmallObject }|8,310,450|4155226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:09:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1779.8359062487464,"samples":890},{"name":"{...smallObject} - Total keys: 2","opsSec":10726574.605534136,"samples":5363288},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2218.7998245490685,"samples":1110},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6463.414156139415,"samples":3232},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1100.166851384643,"samples":551},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6191153.54187579,"samples":3095577},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9813106.488774307,"samples":4906554},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8310450.554035654,"samples":4155226}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,086|1044|
|streams.web.Readable reading 1e3 * "some data"|1,697|849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2086.7813781050704,"samples":1044},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1697.9670152927133,"samples":849}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,164|3083|
|streams.web.WritableStream writing 1e3 * "some data"|2,025|1022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:20:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6164.804792305698,"samples":3083},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2025.674436411132,"samples":1022}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,522,924|6761463|
|Using backtick (`)|14,409,903|7204952|
|Using array.join|5,569,815|2784908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:28:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":13522924.809980296,"samples":6761463},{"name":"Using backtick (`)","opsSec":14409903.279503178,"samples":7204952},{"name":"Using array.join","opsSec":5569815.643523451,"samples":2784908}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,576,020|7288011|
|(short string) (true) String#slice and strict comparison|12,297,375|6148688|
|(long string) (true) String#endsWith|13,585,069|6792535|
|(long string) (true) String#slice and strict comparison|11,699,620|5849811|
|(short string) (false) String#endsWith|14,892,924|7446463|
|(short string) (false) String#slice and strict comparison|12,349,434|6174718|
|(long string) (false) String#endsWith|14,496,524|7248263|
|(long string) (false) String#slice and strict comparison|12,001,264|6000633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14576020.30925425,"samples":7288011},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12297375.65573045,"samples":6148688},{"name":"(long string) (true) String#endsWith","opsSec":13585069.157892276,"samples":6792535},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11699620.548987096,"samples":5849811},{"name":"(short string) (false) String#endsWith","opsSec":14892924.391525261,"samples":7446463},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12349434.1723462,"samples":6174718},{"name":"(long string) (false) String#endsWith","opsSec":14496524.637143116,"samples":7248263},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12001264.487910893,"samples":6000633}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,769,278|3884640|
|Using indexof|7,798,396|3899199|
|Using RegExp.test|7,256,853|3628427|
|Using RegExp.text with cached regex pattern|7,306,610|3653306|
|Using new RegExp.test|3,326,510|1663256|
|Using new RegExp.test with cached regex pattern|3,612,684|1806343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:57:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7769278.2752245,"samples":3884640},{"name":"Using indexof","opsSec":7798396.549512986,"samples":3899199},{"name":"Using RegExp.test","opsSec":7256853.608148307,"samples":3628427},{"name":"Using RegExp.text with cached regex pattern","opsSec":7306610.567950998,"samples":3653306},{"name":"Using new RegExp.test","opsSec":3326510.223629264,"samples":1663256},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3612684.45374569,"samples":1806343}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,162,201|7081101|
|(short string) (true) String#slice and strict comparison|12,904,780|6452391|
|(long string) (true) String#startsWith|13,664,667|6832334|
|(long string) (true) String#slice and strict comparison|12,372,579|6186290|
|(short string) (false) String#startsWith|14,747,169|7373585|
|(short string) (false) String#slice and strict comparison|12,736,573|6368287|
|(long string) (false) String#startsWith|12,845,476|6422739|
|(long string) (false) String#slice and strict comparison|12,207,917|6103959|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:12:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14162201.716588836,"samples":7081101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12904780.373998063,"samples":6452391},{"name":"(long string) (true) String#startsWith","opsSec":13664667.562487697,"samples":6832334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12372579.307927342,"samples":6186290},{"name":"(short string) (false) String#startsWith","opsSec":14747169.056106608,"samples":7373585},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12736573.21013258,"samples":6368287},{"name":"(long string) (false) String#startsWith","opsSec":12845476.612675158,"samples":6422739},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12207917.487547088,"samples":6103959}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,939,108|7469555|
|Using this|14,609,711|7304856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:25:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14939108.446264233,"samples":7469555},{"name":"Using this","opsSec":14609711.532403022,"samples":7304856}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,176,110|3088056|
|Date.now()|8,335,937|4167969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6176110.5671432335,"samples":3088056},{"name":"Date.now()","opsSec":8335937.333135235,"samples":4167969}]}-->
