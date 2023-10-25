## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|681,319,762|84|
|Using dot notation|567,425,709|85|
|Using define property (writable)|2,197,009|84|
|Using define property initialized (writable)|2,807,326|84|
|Using define property (getter)|1,145,724|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Directly in the object","opsSec":681319762.4920262,"samples":6},{"name":"Using dot notation","opsSec":567425708.7501862,"samples":6},{"name":"Using define property (writable)","opsSec":2197009.0049782726,"samples":4},{"name":"Using define property initialized (writable)","opsSec":2807325.6213765433,"samples":6},{"name":"Using define property (getter)","opsSec":1145723.6058260226,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.052ms
new Array(length)|100|0.015ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.613ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|58.076ms
new Array(length)|1,000,000|9.245ms
array.push|100,000,000|2,597.446ms
new Array(length)|100,000,000|6,286.69ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.024ms
array.push|100|0.021ms
new Array(length)|100|0.029ms
array.push|1,000|0.091ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.817ms
new Array(length)|10,000|5.769ms
array.push|1,000,000|444.501ms
new Array(length)|1,000,000|5.627ms
array.push|100,000,000|3,237.38ms
new Array(length)|100,000,000|7,044.537ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|261|75|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":261.3788788354439,"samples":4},{"name":"Array.from","opsSec":12.854500885348575,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,281|84|
|new Blob (1024)|439|71|
|text (128)|32,270|69|
|text (1024)|21,333|82|
|arrayBuffer (128)|32,662|86|
|arrayBuffer (1024)|21,912|87|
|slice (0, 64)|58,606|75|
|slice (0, 512)|33,342|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3280.722456632849,"samples":5},{"name":"new Blob (1024)","opsSec":438.6681264635937,"samples":2},{"name":"text (128)","opsSec":32270.14682846502,"samples":4},{"name":"text (1024)","opsSec":21332.64541632477,"samples":4},{"name":"arrayBuffer (128)","opsSec":32661.716738334788,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21912.410826105366,"samples":5},{"name":"slice (0, 64)","opsSec":58605.56962475148,"samples":3},{"name":"slice (0, 512)","opsSec":33341.8912644283,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|134,416|51|
|[True conditional] Using constructor name|101,365|82|
|[True conditional] Check if property is valid then instanceof |103,924|86|
|[False conditional] Using instanceof only|654,461,694|87|
|[False conditional] Using constructor name|662,165,747|89|
|[False conditional] Check if property is valid then instanceof |630,796,491|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":134415.67239457183,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":101365.25658969476,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":103923.52752852718,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":654461693.7737578,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":662165747.1558386,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":630796490.6541665,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,599|86|
|crypto.verify('RSA-SHA256')|3,638|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3598.719802591546,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":3637.9782865987354,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,303,717|96|
|fromUnixToISOString(new Date())|1,100,949|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1303716.990153058,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1100948.8110864162,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,984|82|
|Intl.DateTimeFormat().format(new Date())|7,926|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,517|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,092|86|
|Reusing Intl.DateTimeFormat()|453,692|73|
|Date.toLocaleDateString()|532,514|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,221|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7983.626178657142,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7926.209938821381,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8516.62091539255,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9091.675415527143,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":453692.18708741054,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":532513.909880408,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9221.470492896502,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|578,029|86|
|Using brackets {}|579,292|88|
|Using '' + |580,913|87|
|Using date.toString()|628,715|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":578029.362438797,"samples":5},{"name":"Using brackets {}","opsSec":579291.6135434817,"samples":3},{"name":"Using '' + ","opsSec":580913.4732213599,"samples":3},{"name":"Using date.toString()","opsSec":628714.8312066372,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,982,004|84|
|Using delete property (proto: null)|12,046,826|85|
|Using delete property (cached proto: null)|1,961,686|88|
|Using undefined assignment|741,970,271|89|
|Using undefined assignment (proto: null)|13,815,015|86|
|Using undefined property (cached proto: null)|635,514,254|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1982004.2885205643,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12046826.2900172,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1961685.7992785156,"samples":5},{"name":"Using undefined assignment","opsSec":741970271.1217157,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13815015.33184832,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":635514254.0737365,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|160,360|53|
|NodeError|124,579|94|
|NodeError Range|125,818|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":160360.4438521337,"samples":4},{"name":"NodeError","opsSec":124578.5345190913,"samples":3},{"name":"NodeError Range","opsSec":125818.29513196649,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,098,511|96|
|Function returning explicitly undefined|1,086,017|98|
|Function returning implicitly undefined|1,098,243|93|
|Function returning string|1,103,987|97|
|Function returning integer|1,099,816|96|
|Function returning float|1,108,111|94|
|Function returning functions|1,085,130|98|
|Function returning arrow functions|1,093,252|95|
|Function returning empty object|1,112,520|96|
|Function returning empty array|1,064,301|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1098510.9803452604,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1086016.539035531,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1098242.6688289894,"samples":5},{"name":"Function returning string","opsSec":1103986.8751665729,"samples":7},{"name":"Function returning integer","opsSec":1099815.8211284282,"samples":5},{"name":"Function returning float","opsSec":1108110.7648865841,"samples":7},{"name":"Function returning functions","opsSec":1085130.3060041699,"samples":7},{"name":"Function returning arrow functions","opsSec":1093252.079509895,"samples":5},{"name":"Function returning empty object","opsSec":1112519.751059469,"samples":7},{"name":"Function returning empty array","opsSec":1064301.4542928648,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|696,258,526|93|
|using Array.includes (first item)|708,871,154|97|
|Using raw comparison|711,336,267|97|
|Using raw comparison (first item)|709,187,927|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":696258525.6649704,"samples":6},{"name":"using Array.includes (first item)","opsSec":708871154.072438,"samples":9},{"name":"Using raw comparison","opsSec":711336266.9093094,"samples":7},{"name":"Using raw comparison (first item)","opsSec":709187926.6196059,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,208,374|87|
|Using Object.getOwnPropertyNames()|43,840,169|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":46208374.36284976,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":43840168.628720075,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,210,699|90|
|Length = 10_000 - Array.at|13,505,327|95|
|Length = 1_000_000 - Array.at|13,506,214|96|
|Length = 100 - Array[length - 1]|590,515,734|95|
|Length = 10_000 - Array[length - 1]|565,781,417|93|
|Length = 1_000_000 - Array[length - 1]|586,756,464|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13210699.098810783,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":13505327.194506293,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":13506214.100107208,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":590515733.532531,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":565781417.2999202,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586756464.3076245,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,191,941|95|
|Object.create({})|1,007,562|79|
|Cached Empty.prototype|592,354,290|98|
|Empty.prototype|1,108,332|86|
|Empty class|702,014|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":57191941.282166794,"samples":6},{"name":"Object.create({})","opsSec":1007562.3703645556,"samples":3},{"name":"Cached Empty.prototype","opsSec":592354290.3938888,"samples":8},{"name":"Empty.prototype","opsSec":1108332.4446029272,"samples":4},{"name":"Empty class","opsSec":702013.9209451607,"samples":4}]}-->
