## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,986,676|9993339|
|Using dot notation|20,109,250|10054626|
|Using define property (writable)|3,493,664|1746833|
|Using define property initialized (writable)|4,317,805|2158903|
|Using define property (getter)|2,254,137|1127069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19986676.88068154,"samples":9993339},{"name":"Using dot notation","opsSec":20109250.6324695,"samples":10054626},{"name":"Using define property (writable)","opsSec":3493664.9309353987,"samples":1746833},{"name":"Using define property initialized (writable)","opsSec":4317805.0414478835,"samples":2158903},{"name":"Using define property (getter)","opsSec":2254137.053265971,"samples":1127069}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.088ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|28.416ms
new Array(length)|1,000,000|12.99ms
array.push|100,000,000|2,082.54ms
new Array(length)|100,000,000|4,838.899ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.22ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|23.892ms
new Array(length)|1,000,000|4.945ms
array.push|100,000,000|2,262.333ms
new Array(length)|100,000,000|5,407.469ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|19|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1940311169064,"samples":114},{"name":"Array.from","opsSec":19.843636667409957,"samples":10}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,433|2717|
|new Blob (1024)|724|363|
|text (128)|6,038|3020|
|text (1024)|772|387|
|arrayBuffer (128)|6,163|3082|
|arrayBuffer (1024)|757|379|
|slice (0, 64)|82,819|41410|
|slice (0, 512)|29,263|14632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5433.579647411369,"samples":2717},{"name":"new Blob (1024)","opsSec":724.8833896266176,"samples":363},{"name":"text (128)","opsSec":6038.962530393164,"samples":3020},{"name":"text (1024)","opsSec":772.653135778614,"samples":387},{"name":"arrayBuffer (128)","opsSec":6163.944068371453,"samples":3082},{"name":"arrayBuffer (1024)","opsSec":757.0693104704236,"samples":379},{"name":"slice (0, 64)","opsSec":82819.22017422029,"samples":41410},{"name":"slice (0, 512)","opsSec":29263.76062243713,"samples":14632}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,096|160549|
|[True conditional] Using constructor name|313,484|156743|
|[True conditional] Check if property is valid then instanceof |318,399|159200|
|[False conditional] Using instanceof only|19,757,445|9878723|
|[False conditional] Using constructor name|19,624,379|9812190|
|[False conditional] Check if property is valid then instanceof |19,717,698|9858850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:59:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321096.8427669724,"samples":160549},{"name":"[True conditional] Using constructor name","opsSec":313484.06266856473,"samples":156743},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318399.2199218999,"samples":159200},{"name":"[False conditional] Using instanceof only","opsSec":19757445.762893375,"samples":9878723},{"name":"[False conditional] Using constructor name","opsSec":19624379.018794175,"samples":9812190},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19717698.462057948,"samples":9858850}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,118|3560|
|crypto.verify('RSA-SHA256')|7,168|3585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:04:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7118.50420294884,"samples":3560},{"name":"crypto.verify('RSA-SHA256')","opsSec":7168.496952569883,"samples":3585}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,356,650|678326|
|fromUnixToISOString(new Date())|1,930,408|965205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1356650.4588450908,"samples":678326},{"name":"fromUnixToISOString(new Date())","opsSec":1930408.3745955448,"samples":965205}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,237|7619|
|Intl.DateTimeFormat().format(new Date())|13,147|7285|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,893|10947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,592|8797|
|Reusing Intl.DateTimeFormat()|1,025,970|512986|
|Date.toLocaleDateString()|1,065,141|532571|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,252|10627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15237.335682638897,"samples":7619},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13147.084663662861,"samples":7285},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21893.022520330363,"samples":10947},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17592.510336593754,"samples":8797},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1025970.4097459741,"samples":512986},{"name":"Date.toLocaleDateString()","opsSec":1065141.6527628792,"samples":532571},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21252.90335018959,"samples":10627}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,227|521114|
|Using brackets {}|1,017,255|508628|
|Using '' + |1,015,380|507691|
|Using date.toString()|1,176,298|588150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1042227.3371435436,"samples":521114},{"name":"Using brackets {}","opsSec":1017255.0417457377,"samples":508628},{"name":"Using '' + ","opsSec":1015380.4403754831,"samples":507691},{"name":"Using date.toString()","opsSec":1176298.1508589557,"samples":588150}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,249,243|1624622|
|Using delete property (proto: null)|9,775,138|4887570|
|Using delete property (cached proto: null)|3,161,154|1580578|
|Using undefined assignment|20,098,967|10049484|
|Using undefined assignment (proto: null)|9,354,803|4677402|
|Using undefined property (cached proto: null)|20,115,985|10057993|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:22:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3249243.5256105377,"samples":1624622},{"name":"Using delete property (proto: null)","opsSec":9775138.611930337,"samples":4887570},{"name":"Using delete property (cached proto: null)","opsSec":3161154.564837837,"samples":1580578},{"name":"Using undefined assignment","opsSec":20098967.55776078,"samples":10049484},{"name":"Using undefined assignment (proto: null)","opsSec":9354803.98127793,"samples":4677402},{"name":"Using undefined property (cached proto: null)","opsSec":20115985.557439018,"samples":10057993}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|312,825|156413|
|NodeError|307,269|153635|
|NodeError Range|312,702|156352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:27:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":312825.2104291744,"samples":156413},{"name":"NodeError","opsSec":307269.325236582,"samples":153635},{"name":"NodeError Range","opsSec":312702.5096598269,"samples":156352}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,606,257|803129|
|Function returning explicitly undefined|1,599,007|799504|
|Function returning implicitly undefined|1,657,084|828543|
|Function returning string|1,592,236|796119|
|Function returning integer|1,652,631|826316|
|Function returning float|1,614,024|807013|
|Function returning functions|1,613,884|806943|
|Function returning arrow functions|1,633,853|816927|
|Function returning empty object|1,652,535|826268|
|Function returning empty array|1,611,526|805764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:32:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1606257.1326208692,"samples":803129},{"name":"Function returning explicitly undefined","opsSec":1599007.517100113,"samples":799504},{"name":"Function returning implicitly undefined","opsSec":1657084.4357130171,"samples":828543},{"name":"Function returning string","opsSec":1592236.8599586147,"samples":796119},{"name":"Function returning integer","opsSec":1652631.1835993328,"samples":826316},{"name":"Function returning float","opsSec":1614024.6797280195,"samples":807013},{"name":"Function returning functions","opsSec":1613884.3280157254,"samples":806943},{"name":"Function returning arrow functions","opsSec":1633853.8627557654,"samples":816927},{"name":"Function returning empty object","opsSec":1652535.272885307,"samples":826268},{"name":"Function returning empty array","opsSec":1611526.6430964053,"samples":805764}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|20,046,549|10023275|
|using Array.includes (first item)|19,940,557|9970279|
|Using raw comparison|20,091,000|10045501|
|Using raw comparison (first item)|20,073,006|10036504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":20046549.318397075,"samples":10023275},{"name":"using Array.includes (first item)","opsSec":19940557.44167704,"samples":9970279},{"name":"Using raw comparison","opsSec":20091000.47306269,"samples":10045501},{"name":"Using raw comparison (first item)","opsSec":20073006.75542372,"samples":10036504}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,845,730|8422866|
|Using Object.getOwnPropertyNames()|16,384,742|8192372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:44:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16845730.315434687,"samples":8422866},{"name":"Using Object.getOwnPropertyNames()","opsSec":16384742.72217871,"samples":8192372}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,722,441|9861221|
|Length = 10_000 - Array.at|19,648,343|9824172|
|Length = 1_000_000 - Array.at|19,699,036|9849519|
|Length = 100 - Array[length - 1]|19,957,274|9978638|
|Length = 10_000 - Array[length - 1]|19,870,296|9935149|
|Length = 1_000_000 - Array[length - 1]|19,901,578|9950791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:51:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19722441.289998796,"samples":9861221},{"name":"Length = 10_000 - Array.at","opsSec":19648343.764186233,"samples":9824172},{"name":"Length = 1_000_000 - Array.at","opsSec":19699036.266515613,"samples":9849519},{"name":"Length = 100 - Array[length - 1]","opsSec":19957274.28366628,"samples":9978638},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19870296.648782216,"samples":9935149},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19901578.895214066,"samples":9950791}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,442,549|7221275|
|Object.create({})|1,914,307|957156|
|Cached Empty.prototype|19,997,492|9998747|
|Empty.prototype|1,952,720|976364|
|Empty class|1,234,701|617351|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14442549.017910104,"samples":7221275},{"name":"Object.create({})","opsSec":1914307.979951547,"samples":957156},{"name":"Cached Empty.prototype","opsSec":19997492.440191932,"samples":9998747},{"name":"Empty.prototype","opsSec":1952720.1656837803,"samples":976364},{"name":"Empty class","opsSec":1234701.4937729484,"samples":617351}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,065,064|10032533|
|Using optional chain (obj.field?.field2) (undefined)|19,886,555|9943278|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,972,501|9986251|
|Using and operator (obj.field && obj.field.field2) (undefined)|19,972,027|9986014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:03:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20065064.59543619,"samples":10032533},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19886555.403360847,"samples":9943278},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19972501.76032263,"samples":9986251},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":19972027.560611177,"samples":9986014}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,716,112|9858057|
|Using parseInt(x, 10) - big number (10 len)|19,697,112|9848557|
|Using + - small number (2 len)|19,711,625|9855813|
|Using + - big number (10 len)|19,775,315|9887658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:09:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19716112.1861267,"samples":9858057},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19697112.14848133,"samples":9848557},{"name":"Using + - small number (2 len)","opsSec":19711625.21144358,"samples":9855813},{"name":"Using + - big number (10 len)","opsSec":19775315.723074622,"samples":9887658}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,112,933|556467|
|Using ? operator to avoid rejection|1,103,363|551682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:15:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1112933.7440253352,"samples":556467},{"name":"Using ? operator to avoid rejection","opsSec":1103363.3732897043,"samples":551682}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|19,794,579|9897290|
|Raw usage underscore usage|19,889,465|9944733|
|Manipulating private properties using #|19,820,179|9910090|
|Manipulating private properties using underscore(_)|19,861,856|9930929|
|Manipulating private properties using Symbol|19,858,891|9929446|
|Manipulating private properties using PrivateSymbol|14,723,493|7361747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:19:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":19794579.485350173,"samples":9897290},{"name":"Raw usage underscore usage","opsSec":19889465.44308935,"samples":9944733},{"name":"Manipulating private properties using #","opsSec":19820179.484671555,"samples":9910090},{"name":"Manipulating private properties using underscore(_)","opsSec":19861856.689225473,"samples":9930929},{"name":"Manipulating private properties using Symbol","opsSec":19858891.999948706,"samples":9929446},{"name":"Manipulating private properties using PrivateSymbol","opsSec":14723493.293227196,"samples":7361747}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,060,911|2030456|
|Adding property in the object creation - small object|4,052,325|2026163|
|Adding property after the function creation - small class|268,000|134001|
|Adding property in the function creation - small class|257,716|128859|
|Adding property after the class creation - small class|257,592|129148|
|Adding property in the class creation - small class|263,488|131745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4060911.520811917,"samples":2030456},{"name":"Adding property in the object creation - small object","opsSec":4052325.9513701773,"samples":2026163},{"name":"Adding property after the function creation - small class","opsSec":268000.4370215128,"samples":134001},{"name":"Adding property in the function creation - small class","opsSec":257716.1207339948,"samples":128859},{"name":"Adding property after the class creation - small class","opsSec":257592.3247427965,"samples":129148},{"name":"Adding property in the class creation - small class","opsSec":263488.42802808085,"samples":131745}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,902,472|9951237|
|Getter|16,062,469|8031235|
|Method|19,770,438|9885220|
|DefineProperty (getter)|19,914,447|9957224|
|DefineProperty (getter & enumerable=false)|16,122,749|8061375|
|DefineProperty (getter & configurable=false)|19,982,182|9991092|
|DefineProperty (getter & enumerable=false & configurable=false)|14,531,513|7265757|
|DefineProperty (writable)|20,168,703|10084352|
|DefineProperty (writable & enumerable=false)|19,896,524|9948263|
|DefineProperty (writable & enumerable=false & configurable=false)|19,877,231|9938616|
|DefineProperties (getter)|16,175,330|8087666|
|DefineProperties (getter & enumerable=false)|16,222,096|8111049|
|DefineProperties (getter & enumerable=false & configurable=false)|16,126,638|8063320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:36:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19902472.28838456,"samples":9951237},{"name":"Getter","opsSec":16062469.71089771,"samples":8031235},{"name":"Method","opsSec":19770438.457800627,"samples":9885220},{"name":"DefineProperty (getter)","opsSec":19914447.36280847,"samples":9957224},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16122749.387393853,"samples":8061375},{"name":"DefineProperty (getter & configurable=false)","opsSec":19982182.24152695,"samples":9991092},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14531513.331436923,"samples":7265757},{"name":"DefineProperty (writable)","opsSec":20168703.274408206,"samples":10084352},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19896524.408063833,"samples":9948263},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19877231.99890981,"samples":9938616},{"name":"DefineProperties (getter)","opsSec":16175330.802821983,"samples":8087666},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16222096.280149385,"samples":8111049},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16126638.258324355,"samples":8063320}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,753,508|9876755|
|Setter|6,681,005|3340503|
|Method|19,526,157|9763079|
|DefineProperty (setter)|19,782,853|9891427|
|DefineProperty (setter & enumerable=false)|6,547,926|3273964|
|DefineProperty (setter & configurable=false)|6,704,459|3352230|
|DefineProperty (setter & enumerable=false & configurable=false)|6,791,533|3395767|
|DefineProperty (writable)|19,615,161|9807581|
|DefineProperty (writable & enumerable=false)|19,605,862|9802932|
|DefineProperty (writable & enumerable=false & configurable=false)|19,574,751|9787481|
|DefineProperties (setter)|19,565,143|9782572|
|DefineProperties (setter & enumerable=false)|6,817,367|3408684|
|DefineProperties (setter & enumerable=false & configurable=false)|6,898,823|3449412|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:48:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19753508.498708483,"samples":9876755},{"name":"Setter","opsSec":6681005.131467799,"samples":3340503},{"name":"Method","opsSec":19526157.023730744,"samples":9763079},{"name":"DefineProperty (setter)","opsSec":19782853.683491506,"samples":9891427},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6547926.179671284,"samples":3273964},{"name":"DefineProperty (setter & configurable=false)","opsSec":6704459.5440787915,"samples":3352230},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6791533.633254638,"samples":3395767},{"name":"DefineProperty (writable)","opsSec":19615161.37216263,"samples":9807581},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19605862.666864082,"samples":9802932},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19574751.297192905,"samples":9787481},{"name":"DefineProperties (setter)","opsSec":19565143.33457137,"samples":9782572},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6817367.495632293,"samples":3408684},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6898823.986271116,"samples":3449412}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,071,372|1535687|
|Using replaceAll()|2,643,879|1321940|
|Using replaceAll(//g)|2,854,666|1427334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3071372.6793093905,"samples":1535687},{"name":"Using replaceAll()","opsSec":2643879.159246441,"samples":1321940},{"name":"Using replaceAll(//g)","opsSec":2854666.801039156,"samples":1427334}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,895,245|5947623|
|{ ...object, __proto__: null }|11,213,134|5606568|
|{ ...object, newProp: true }|823,918|411960|
|structuredClone|306,729|153365|
|JSON.parse + JSON.stringify|185,223|92612|
|loop + object.keys starting with {}|1,447,391|723696|
|loop + object.keys starting with { __proto__: null }|864,355|432178|
|loop + object.keys starting with { randomProp: true }|641,799|320900|
|object.keys + reduce(FN, {})|1,483,510|741756|
|object.keys + reduce(FN, { __proto__: null })|839,297|419649|
|object.keys + reduce(FN, { newProp: true })|659,395|329698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11895245.238688992,"samples":5947623},{"name":"{ ...object, __proto__: null }","opsSec":11213134.430146981,"samples":5606568},{"name":"{ ...object, newProp: true }","opsSec":823918.8382740747,"samples":411960},{"name":"structuredClone","opsSec":306729.3902220392,"samples":153365},{"name":"JSON.parse + JSON.stringify","opsSec":185223.6843788394,"samples":92612},{"name":"loop + object.keys starting with {}","opsSec":1447391.5542035557,"samples":723696},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":864355.5488068797,"samples":432178},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":641799.3761707437,"samples":320900},{"name":"object.keys + reduce(FN, {})","opsSec":1483510.2791265384,"samples":741756},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":839297.8354973944,"samples":419649},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":659395.0412393095,"samples":329698}]}-->
