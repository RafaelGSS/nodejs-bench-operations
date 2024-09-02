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
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.128ms
array.push|1,000,000|27.528ms
new Array(length)|1,000,000|7.049ms
array.push|100,000,000|1,761.105ms
new Array(length)|100,000,000|3,811.547ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.014ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.347ms
new Array(length)|10,000|0.191ms
array.push|1,000,000|19.463ms
new Array(length)|1,000,000|7.4ms
array.push|100,000,000|1,933.664ms
new Array(length)|100,000,000|4,524.233ms

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
|new Blob (128)|4,577|2289|
|new Blob (1024)|581|291|
|text (128)|4,885|2443|
|text (1024)|630|316|
|arrayBuffer (128)|4,934|2468|
|arrayBuffer (1024)|629|315|
|slice (0, 64)|216,414|108208|
|slice (0, 512)|38,566|19284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:40:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4577.124908642896,"samples":2289},{"name":"new Blob (1024)","opsSec":581.6356424946907,"samples":291},{"name":"text (128)","opsSec":4885.218960963375,"samples":2443},{"name":"text (1024)","opsSec":630.3996435097961,"samples":316},{"name":"arrayBuffer (128)","opsSec":4934.9407051070375,"samples":2468},{"name":"arrayBuffer (1024)","opsSec":629.1204016017199,"samples":315},{"name":"slice (0, 64)","opsSec":216414.8261660382,"samples":108208},{"name":"slice (0, 512)","opsSec":38566.43474268335,"samples":19284}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|309,497|154749|
|[True conditional] Using constructor name|302,955|151478|
|[True conditional] Check if property is valid then instanceof |303,405|151704|
|[False conditional] Using instanceof only|14,638,744|7319373|
|[False conditional] Using constructor name|14,208,700|7104351|
|[False conditional] Check if property is valid then instanceof |14,682,372|7341187|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:49:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":309497.99009571865,"samples":154749},{"name":"[True conditional] Using constructor name","opsSec":302955.01539624686,"samples":151478},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":303405.9016446964,"samples":151704},{"name":"[False conditional] Using instanceof only","opsSec":14638744.858082881,"samples":7319373},{"name":"[False conditional] Using constructor name","opsSec":14208700.834837237,"samples":7104351},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14682372.59042317,"samples":7341187}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,466|3237|
|crypto.verify('RSA-SHA256')|6,792|3397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:54:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6466.416083754484,"samples":3237},{"name":"crypto.verify('RSA-SHA256')","opsSec":6792.5055672650005,"samples":3397}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,128,254|564128|
|fromUnixToISOString(new Date())|1,781,535|890768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:00:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1128254.5874258794,"samples":564128},{"name":"fromUnixToISOString(new Date())","opsSec":1781535.8824168532,"samples":890768}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,831|9916|
|Intl.DateTimeFormat().format(new Date())|19,495|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,597|11299|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,177|11089|
|Reusing Intl.DateTimeFormat()|665,939|332970|
|Date.toLocaleDateString()|657,424|328713|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,245|11623|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19831.705023215472,"samples":9916},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19495.437478652806,"samples":9748},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22597.74166261938,"samples":11299},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22177.100452455357,"samples":11089},{"name":"Reusing Intl.DateTimeFormat()","opsSec":665939.366025349,"samples":332970},{"name":"Date.toLocaleDateString()","opsSec":657424.9560084745,"samples":328713},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23245.401430918126,"samples":11623}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,862|523932|
|Using brackets {}|1,088,890|544446|
|Using '' + |1,080,410|540206|
|Using date.toString()|1,197,806|598904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1047862.5937683608,"samples":523932},{"name":"Using brackets {}","opsSec":1088890.34706448,"samples":544446},{"name":"Using '' + ","opsSec":1080410.070387922,"samples":540206},{"name":"Using date.toString()","opsSec":1197806.1314226761,"samples":598904}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,256,232|1628117|
|Using delete property (proto: null)|8,959,913|4479957|
|Using delete property (cached proto: null)|3,119,534|1559768|
|Using undefined assignment|15,407,776|7703889|
|Using undefined assignment (proto: null)|9,495,478|4747740|
|Using undefined property (cached proto: null)|15,291,161|7645581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:53:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3256232.39142106,"samples":1628117},{"name":"Using delete property (proto: null)","opsSec":8959913.838707015,"samples":4479957},{"name":"Using delete property (cached proto: null)","opsSec":3119534.309211951,"samples":1559768},{"name":"Using undefined assignment","opsSec":15407776.243527684,"samples":7703889},{"name":"Using undefined assignment (proto: null)","opsSec":9495478.613662416,"samples":4747740},{"name":"Using undefined property (cached proto: null)","opsSec":15291161.938829437,"samples":7645581}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|297,169|148585|
|NodeError|292,862|146432|
|NodeError Range|300,172|150087|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:54:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":297169.9893018678,"samples":148585},{"name":"NodeError","opsSec":292862.1362253696,"samples":146432},{"name":"NodeError Range","opsSec":300172.2127746631,"samples":150087}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,655,530|827766|
|Function returning explicitly undefined|1,634,714|817358|
|Function returning implicitly undefined|1,664,746|832378|
|Function returning string|1,612,879|806440|
|Function returning integer|1,665,229|832615|
|Function returning float|1,635,634|817818|
|Function returning functions|1,601,949|800975|
|Function returning arrow functions|1,604,881|802441|
|Function returning empty object|1,634,527|817264|
|Function returning empty array|1,620,381|810191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:56:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1655530.2252719938,"samples":827766},{"name":"Function returning explicitly undefined","opsSec":1634714.0154569459,"samples":817358},{"name":"Function returning implicitly undefined","opsSec":1664746.1613502896,"samples":832378},{"name":"Function returning string","opsSec":1612879.7258104887,"samples":806440},{"name":"Function returning integer","opsSec":1665229.7701968327,"samples":832615},{"name":"Function returning float","opsSec":1635634.7732741414,"samples":817818},{"name":"Function returning functions","opsSec":1601949.333589446,"samples":800975},{"name":"Function returning arrow functions","opsSec":1604881.0370714809,"samples":802441},{"name":"Function returning empty object","opsSec":1634527.2775418442,"samples":817264},{"name":"Function returning empty array","opsSec":1620381.4879603374,"samples":810191}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,202,932|7601467|
|using Array.includes (first item)|15,209,171|7604586|
|Using raw comparison|15,186,306|7593154|
|Using raw comparison (first item)|15,235,181|7617591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:58:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15202932.570914252,"samples":7601467},{"name":"using Array.includes (first item)","opsSec":15209171.604586026,"samples":7604586},{"name":"Using raw comparison","opsSec":15186306.207982553,"samples":7593154},{"name":"Using raw comparison (first item)","opsSec":15235181.116395166,"samples":7617591}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,199,625|6599813|
|Using Object.getOwnPropertyNames()|13,215,145|6607573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:59:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13199625.181632288,"samples":6599813},{"name":"Using Object.getOwnPropertyNames()","opsSec":13215145.36566097,"samples":6607573}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,042,685|7521343|
|Length = 10_000 - Array.at|15,110,942|7555472|
|Length = 1_000_000 - Array.at|15,149,506|7574754|
|Length = 100 - Array[length - 1]|15,071,709|7535855|
|Length = 10_000 - Array[length - 1]|15,123,403|7561702|
|Length = 1_000_000 - Array[length - 1]|15,097,466|7548734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:03:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15042685.699184122,"samples":7521343},{"name":"Length = 10_000 - Array.at","opsSec":15110942.36803694,"samples":7555472},{"name":"Length = 1_000_000 - Array.at","opsSec":15149506.60621753,"samples":7574754},{"name":"Length = 100 - Array[length - 1]","opsSec":15071709.457427924,"samples":7535855},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15123403.455646861,"samples":7561702},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15097466.641204143,"samples":7548734}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,289,607|7644804|
|~ (small)|15,347,619|7673810|
|Math.floor (long)|15,249,620|7624811|
|~ (long)|15,331,739|7665870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:28:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15289607.480160937,"samples":7644804},{"name":"~ (small)","opsSec":15347619.57022932,"samples":7673810},{"name":"Math.floor (long)","opsSec":15249620.56661346,"samples":7624811},{"name":"~ (long)","opsSec":15331739.877319379,"samples":7665870}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,701,664|6350833|
|Object.create({})|1,938,351|969182|
|Cached Empty.prototype|15,099,375|7549688|
|Empty.prototype|2,120,079|1060044|
|Empty class|1,323,167|661584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12701664.856851768,"samples":6350833},{"name":"Object.create({})","opsSec":1938351.7961369234,"samples":969182},{"name":"Cached Empty.prototype","opsSec":15099375.818809267,"samples":7549688},{"name":"Empty.prototype","opsSec":2120079.74440901,"samples":1060044},{"name":"Empty class","opsSec":1323167.8094633762,"samples":661584}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,145,834|7572919|
|Using optional chain (obj.field?.field2) (undefined)|15,176,166|7588084|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,213,603|7606802|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,259,820|7629911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15145834.910236724,"samples":7572919},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15176166.755535465,"samples":7588084},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15213603.269764507,"samples":7606802},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15259820.870777205,"samples":7629911}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,243,681|7621841|
|Using parseInt(x, 10) - big number (10 len)|15,238,506|7619254|
|Using + - small number (2 len)|15,246,900|7623451|
|Using + - big number (10 len)|15,244,565|7622283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:08:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15243681.908545421,"samples":7621841},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15238506.354232607,"samples":7619254},{"name":"Using + - small number (2 len)","opsSec":15246900.383842878,"samples":7623451},{"name":"Using + - big number (10 len)","opsSec":15244565.695122726,"samples":7622283}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,139,822|569912|
|Using ? operator to avoid rejection|1,125,317|562659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:10:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1139822.9718796783,"samples":569912},{"name":"Using ? operator to avoid rejection","opsSec":1125317.9707415227,"samples":562659}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,768,999|7384500|
|Raw usage underscore usage|14,898,631|7449317|
|Manipulating private properties using #|14,958,599|7479300|
|Manipulating private properties using underscore(_)|14,916,192|7458097|
|Manipulating private properties using Symbol|14,959,280|7479641|
|Manipulating private properties using PrivateSymbol|12,160,257|6080129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:13:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":14768999.05478159,"samples":7384500},{"name":"Raw usage underscore usage","opsSec":14898631.914210068,"samples":7449317},{"name":"Manipulating private properties using #","opsSec":14958599.102493329,"samples":7479300},{"name":"Manipulating private properties using underscore(_)","opsSec":14916192.776871018,"samples":7458097},{"name":"Manipulating private properties using Symbol","opsSec":14959280.593794493,"samples":7479641},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12160257.319021821,"samples":6080129}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,753,155|1876578|
|Adding property in the object creation - small object|3,794,957|1897479|
|Adding property after the function creation - small class|265,971|132986|
|Adding property in the function creation - small class|281,229|140615|
|Adding property after the class creation - small class|273,704|136853|
|Adding property in the class creation - small class|263,202|131602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3753155.887404202,"samples":1876578},{"name":"Adding property in the object creation - small object","opsSec":3794957.4611151055,"samples":1897479},{"name":"Adding property after the function creation - small class","opsSec":265971.16219083196,"samples":132986},{"name":"Adding property in the function creation - small class","opsSec":281229.7947022648,"samples":140615},{"name":"Adding property after the class creation - small class","opsSec":273704.24719799403,"samples":136853},{"name":"Adding property in the class creation - small class","opsSec":263202.8208513684,"samples":131602}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,232,837|7616419|
|Getter|13,318,811|6659406|
|Method|15,261,160|7630581|
|DefineProperty (getter)|15,259,185|7629593|
|DefineProperty (getter & enumerable=false)|13,319,534|6659768|
|DefineProperty (getter & configurable=false)|15,311,462|7655732|
|DefineProperty (getter & enumerable=false & configurable=false)|13,330,883|6665442|
|DefineProperty (writable)|15,296,377|7648189|
|DefineProperty (writable & enumerable=false)|15,291,267|7645634|
|DefineProperty (writable & enumerable=false & configurable=false)|15,277,680|7638841|
|DefineProperties (getter)|13,292,623|6646312|
|DefineProperties (getter & enumerable=false)|13,358,876|6679439|
|DefineProperties (getter & enumerable=false & configurable=false)|13,344,769|6672385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:18:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15232837.086022899,"samples":7616419},{"name":"Getter","opsSec":13318811.413997708,"samples":6659406},{"name":"Method","opsSec":15261160.626592072,"samples":7630581},{"name":"DefineProperty (getter)","opsSec":15259185.755876593,"samples":7629593},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13319534.614828017,"samples":6659768},{"name":"DefineProperty (getter & configurable=false)","opsSec":15311462.805760197,"samples":7655732},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13330883.866616916,"samples":6665442},{"name":"DefineProperty (writable)","opsSec":15296377.541039625,"samples":7648189},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15291267.357728835,"samples":7645634},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15277680.074972752,"samples":7638841},{"name":"DefineProperties (getter)","opsSec":13292623.733904678,"samples":6646312},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13358876.53069882,"samples":6679439},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13344769.306003794,"samples":6672385}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,040,335|7520168|
|Setter|6,845,937|3422969|
|Method|15,094,523|7547262|
|DefineProperty (setter)|15,065,769|7532885|
|DefineProperty (setter & enumerable=false)|6,801,939|3400970|
|DefineProperty (setter & configurable=false)|6,749,350|3374676|
|DefineProperty (setter & enumerable=false & configurable=false)|6,783,788|3391895|
|DefineProperty (writable)|15,067,285|7533643|
|DefineProperty (writable & enumerable=false)|15,106,583|7553292|
|DefineProperty (writable & enumerable=false & configurable=false)|15,105,445|7552723|
|DefineProperties (setter)|15,106,158|7553080|
|DefineProperties (setter & enumerable=false)|6,728,232|3364117|
|DefineProperties (setter & enumerable=false & configurable=false)|6,725,619|3362810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15040335.308143698,"samples":7520168},{"name":"Setter","opsSec":6845937.89047046,"samples":3422969},{"name":"Method","opsSec":15094523.396189976,"samples":7547262},{"name":"DefineProperty (setter)","opsSec":15065769.487748591,"samples":7532885},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6801939.673536083,"samples":3400970},{"name":"DefineProperty (setter & configurable=false)","opsSec":6749350.9471389055,"samples":3374676},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6783788.304029891,"samples":3391895},{"name":"DefineProperty (writable)","opsSec":15067285.849352853,"samples":7533643},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15106583.788500613,"samples":7553292},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15105445.758443136,"samples":7552723},{"name":"DefineProperties (setter)","opsSec":15106158.942507405,"samples":7553080},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6728232.560266227,"samples":3364117},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6725619.609830153,"samples":3362810}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,212,001|5106001|
|{ ...object, __proto__: null }|2,218,291|1109146|
|{ ...object, newProp: true }|9,830,326|4915164|
|structuredClone|278,517|139259|
|JSON.parse + JSON.stringify|249,025|124513|
|loop + object.keys starting with {}|1,427,918|713960|
|loop + object.keys starting with { __proto__: null }|818,010|409006|
|loop + object.keys starting with { randomProp: true }|653,085|326543|
|object.keys + reduce(FN, {})|1,471,564|735783|
|object.keys + reduce(FN, { __proto__: null })|830,504|415253|
|object.keys + reduce(FN, { newProp: true })|666,013|333007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10212001.754912192,"samples":5106001},{"name":"{ ...object, __proto__: null }","opsSec":2218291.5785230007,"samples":1109146},{"name":"{ ...object, newProp: true }","opsSec":9830326.309171502,"samples":4915164},{"name":"structuredClone","opsSec":278517.3928320944,"samples":139259},{"name":"JSON.parse + JSON.stringify","opsSec":249025.43172388384,"samples":124513},{"name":"loop + object.keys starting with {}","opsSec":1427918.3207673875,"samples":713960},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":818010.2314618492,"samples":409006},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":653085.6917434444,"samples":326543},{"name":"object.keys + reduce(FN, {})","opsSec":1471564.8433487476,"samples":735783},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":830504.3788561574,"samples":415253},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":666013.352635953,"samples":333007}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|326,186|163094|
|Sort using first char|1,344,727|672364|
|Sort using localeCompare|1,295,383|647692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":326186.29795990646,"samples":163094},{"name":"Sort using first char","opsSec":1344727.6638176364,"samples":672364},{"name":"Sort using localeCompare","opsSec":1295383.4429849675,"samples":647692}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,320|1161|
|{...smallObject} - Total keys: 2|12,277,303|6138652|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,467|1234|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,795|3398|
|{ ...bigObject, ...anotherBigObject }|1,392|697|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,086,912|3543457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,641,452|5320727|
|{ ...smallObject, ...anotherSmallObject }|9,147,047|4573524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:30:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2320.368776109678,"samples":1161},{"name":"{...smallObject} - Total keys: 2","opsSec":12277303.31246373,"samples":6138652},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2467.209279163705,"samples":1234},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6795.509010882921,"samples":3398},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1392.4349393314947,"samples":697},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7086912.738522635,"samples":3543457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10641452.6166237,"samples":5320727},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9147047.39629307,"samples":4573524}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,092,581|7546291|
|Using backtick (`)|15,234,371|7617186|
|Using array.join|6,265,793|3134682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15092581.215174647,"samples":7546291},{"name":"Using backtick (`)","opsSec":15234371.29919909,"samples":7617186},{"name":"Using array.join","opsSec":6265793.412577427,"samples":3134682}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,477,157|7238579|
|(short string) (true) String#slice and strict comparison|15,069,165|7534583|
|(long string) (true) String#endsWith|14,054,654|7027328|
|(long string) (true) String#slice and strict comparison|15,213,110|7606556|
|(short string) (false) String#endsWith|15,058,395|7529198|
|(short string) (false) String#slice and strict comparison|15,103,870|7551936|
|(long string) (false) String#endsWith|14,647,118|7323560|
|(long string) (false) String#slice and strict comparison|15,167,030|7583516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14477157.478829555,"samples":7238579},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15069165.638304405,"samples":7534583},{"name":"(long string) (true) String#endsWith","opsSec":14054654.229141908,"samples":7027328},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15213110.569830032,"samples":7606556},{"name":"(short string) (false) String#endsWith","opsSec":15058395.879499648,"samples":7529198},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15103870.882329552,"samples":7551936},{"name":"(long string) (false) String#endsWith","opsSec":14647118.740294077,"samples":7323560},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15167030.938275583,"samples":7583516}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,164,488|7582245|
|Using indexof|15,213,527|7606764|
|Using RegExp.test|7,840,876|3920439|
|Using RegExp.text with cached regex pattern|7,855,721|3927861|
|Using new RegExp.test|3,576,048|1788025|
|Using new RegExp.test with cached regex pattern|3,793,856|1896929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15164488.817166768,"samples":7582245},{"name":"Using indexof","opsSec":15213527.969541192,"samples":7606764},{"name":"Using RegExp.test","opsSec":7840876.886584894,"samples":3920439},{"name":"Using RegExp.text with cached regex pattern","opsSec":7855721.292958352,"samples":3927861},{"name":"Using new RegExp.test","opsSec":3576048.6697146352,"samples":1788025},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3793856.869429249,"samples":1896929}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,501,577|7250789|
|(short string) (true) String#slice and strict comparison|14,579,626|7289814|
|(long string) (true) String#startsWith|14,077,827|7038914|
|(long string) (true) String#slice and strict comparison|15,166,929|7583465|
|(short string) (false) String#startsWith|15,199,994|7599998|
|(short string) (false) String#slice and strict comparison|15,395,220|7697611|
|(long string) (false) String#startsWith|14,986,963|7493482|
|(long string) (false) String#slice and strict comparison|15,439,928|7719965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14501577.390959356,"samples":7250789},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14579626.746159712,"samples":7289814},{"name":"(long string) (true) String#startsWith","opsSec":14077827.77475345,"samples":7038914},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15166929.02939517,"samples":7583465},{"name":"(short string) (false) String#startsWith","opsSec":15199994.115084132,"samples":7599998},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15395220.645336956,"samples":7697611},{"name":"(long string) (false) String#startsWith","opsSec":14986963.37053075,"samples":7493482},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15439928.147231698,"samples":7719965}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,902,405|7451203|
|Using this|15,063,631|7531816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:47:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14902405.761562528,"samples":7451203},{"name":"Using this","opsSec":15063631.156456154,"samples":7531816}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,788,392|3394197|
|Date.now()|9,030,834|4515418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6788392.995316914,"samples":3394197},{"name":"Date.now()","opsSec":9030834.248025833,"samples":4515418}]}-->
