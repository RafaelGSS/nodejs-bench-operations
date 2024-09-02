## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,118,355|7559178|
|Using dot notation|14,837,241|7418621|
|Using define property (writable)|2,876,390|1438196|
|Using define property initialized (writable)|3,731,545|1865773|
|Using define property (getter)|1,814,600|909026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15118355.637695704,"samples":7559178},{"name":"Using dot notation","opsSec":14837241.080331914,"samples":7418621},{"name":"Using define property (writable)","opsSec":2876390.3489134163,"samples":1438196},{"name":"Using define property initialized (writable)","opsSec":3731545.2163310926,"samples":1865773},{"name":"Using define property (getter)","opsSec":1814600.347054544,"samples":909026}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.143ms
array.push|1,000,000|26.412ms
new Array(length)|1,000,000|15.097ms
array.push|100,000,000|1,865.36ms
new Array(length)|100,000,000|4,179.022ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.492ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|257.752ms
new Array(length)|1,000,000|4.73ms
array.push|100,000,000|2,287.394ms
new Array(length)|100,000,000|4,417.199ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|219|111|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":219.79583418432912,"samples":111},{"name":"Array.from","opsSec":22.26214641354449,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,046|2547|
|new Blob (1024)|689|345|
|text (128)|40,030|20016|
|text (1024)|26,403|13203|
|arrayBuffer (128)|44,850|22426|
|arrayBuffer (1024)|27,978|13990|
|slice (0, 64)|99,572|49787|
|slice (0, 512)|51,589|25795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5046.72604536095,"samples":2547},{"name":"new Blob (1024)","opsSec":689.3575642467631,"samples":345},{"name":"text (128)","opsSec":40030.81805042398,"samples":20016},{"name":"text (1024)","opsSec":26403.332049010543,"samples":13203},{"name":"arrayBuffer (128)","opsSec":44850.423686743714,"samples":22426},{"name":"arrayBuffer (1024)","opsSec":27978.732227972672,"samples":13990},{"name":"slice (0, 64)","opsSec":99572.35705597838,"samples":49787},{"name":"slice (0, 512)","opsSec":51589.762480270256,"samples":25795}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|292,177|146089|
|[True conditional] Using constructor name|303,260|151631|
|[True conditional] Check if property is valid then instanceof |307,473|153737|
|[False conditional] Using instanceof only|12,869,503|6434752|
|[False conditional] Using constructor name|17,139,781|8569891|
|[False conditional] Check if property is valid then instanceof |17,139,338|8569670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:57:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":292177.787243563,"samples":146089},{"name":"[True conditional] Using constructor name","opsSec":303260.6280679862,"samples":151631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":307473.10709401837,"samples":153737},{"name":"[False conditional] Using instanceof only","opsSec":12869503.88940832,"samples":6434752},{"name":"[False conditional] Using constructor name","opsSec":17139781.123059068,"samples":8569891},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17139338.973156225,"samples":8569670}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,006|3504|
|crypto.verify('RSA-SHA256')|7,141|3571|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:03:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7006.685461603743,"samples":3504},{"name":"crypto.verify('RSA-SHA256')","opsSec":7141.3392834162405,"samples":3571}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,168,935|1084468|
|fromUnixToISOString(new Date())|1,970,003|985002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2168935.9006715743,"samples":1084468},{"name":"fromUnixToISOString(new Date())","opsSec":1970003.6018259865,"samples":985002}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,487|7744|
|Intl.DateTimeFormat().format(new Date())|15,195|7598|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,613|7807|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,812|10407|
|Reusing Intl.DateTimeFormat()|741,975|370988|
|Date.toLocaleDateString()|753,500|376751|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,610|10306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15487.638735061731,"samples":7744},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15195.193530603765,"samples":7598},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15613.789556781654,"samples":7807},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20812.34346221312,"samples":10407},{"name":"Reusing Intl.DateTimeFormat()","opsSec":741975.3661806404,"samples":370988},{"name":"Date.toLocaleDateString()","opsSec":753500.5307733028,"samples":376751},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20610.662862474393,"samples":10306}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,052,414|526208|
|Using brackets {}|1,061,966|530984|
|Using '' + |1,056,736|528369|
|Using date.toString()|1,141,853|570927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1052414.6209338037,"samples":526208},{"name":"Using brackets {}","opsSec":1061966.8360814191,"samples":530984},{"name":"Using '' + ","opsSec":1056736.723245644,"samples":528369},{"name":"Using date.toString()","opsSec":1141853.6007294378,"samples":570927}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,944,868|1472435|
|Using delete property (proto: null)|8,805,726|4402864|
|Using delete property (cached proto: null)|2,958,197|1479099|
|Using undefined assignment|17,212,604|8606303|
|Using undefined assignment (proto: null)|9,138,703|4569352|
|Using undefined property (cached proto: null)|16,970,274|8485138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:21:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2944868.990956098,"samples":1472435},{"name":"Using delete property (proto: null)","opsSec":8805726.86519047,"samples":4402864},{"name":"Using delete property (cached proto: null)","opsSec":2958197.2688355134,"samples":1479099},{"name":"Using undefined assignment","opsSec":17212604.808710355,"samples":8606303},{"name":"Using undefined assignment (proto: null)","opsSec":9138703.711108375,"samples":4569352},{"name":"Using undefined property (cached proto: null)","opsSec":16970274.627621815,"samples":8485138}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|290,662|145332|
|NodeError|288,376|144189|
|NodeError Range|300,604|150303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:26:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":290662.6792227891,"samples":145332},{"name":"NodeError","opsSec":288376.29395446583,"samples":144189},{"name":"NodeError Range","opsSec":300604.6412927901,"samples":150303}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,518,853|759427|
|Function returning explicitly undefined|1,460,991|730496|
|Function returning implicitly undefined|1,521,003|760502|
|Function returning string|1,468,817|734409|
|Function returning integer|1,523,067|761534|
|Function returning float|1,505,473|752737|
|Function returning functions|1,466,072|733037|
|Function returning arrow functions|1,487,425|743713|
|Function returning empty object|1,509,471|754736|
|Function returning empty array|1,502,224|751113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:31:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1518853.2041304207,"samples":759427},{"name":"Function returning explicitly undefined","opsSec":1460991.298403165,"samples":730496},{"name":"Function returning implicitly undefined","opsSec":1521003.911167029,"samples":760502},{"name":"Function returning string","opsSec":1468817.9291692642,"samples":734409},{"name":"Function returning integer","opsSec":1523067.7896512116,"samples":761534},{"name":"Function returning float","opsSec":1505473.5041861394,"samples":752737},{"name":"Function returning functions","opsSec":1466072.4163703104,"samples":733037},{"name":"Function returning arrow functions","opsSec":1487425.812537899,"samples":743713},{"name":"Function returning empty object","opsSec":1509471.7310638614,"samples":754736},{"name":"Function returning empty array","opsSec":1502224.4708658482,"samples":751113}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,055,383|8527692|
|using Array.includes (first item)|16,946,130|8473066|
|Using raw comparison|16,711,117|8355559|
|Using raw comparison (first item)|16,751,039|8375520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:35:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17055383.117449675,"samples":8527692},{"name":"using Array.includes (first item)","opsSec":16946130.64876562,"samples":8473066},{"name":"Using raw comparison","opsSec":16711117.044840526,"samples":8355559},{"name":"Using raw comparison (first item)","opsSec":16751039.525101488,"samples":8375520}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,613,197|7306599|
|Using Object.getOwnPropertyNames()|13,926,279|6963140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14613197.873702904,"samples":7306599},{"name":"Using Object.getOwnPropertyNames()","opsSec":13926279.764130149,"samples":6963140}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,853,961|4426981|
|Length = 10_000 - Array.at|7,894,959|3947480|
|Length = 1_000_000 - Array.at|8,332,204|4166103|
|Length = 100 - Array[length - 1]|16,438,308|8219155|
|Length = 10_000 - Array[length - 1]|17,024,379|8512190|
|Length = 1_000_000 - Array[length - 1]|17,071,602|8535802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:47:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8853961.389276098,"samples":4426981},{"name":"Length = 10_000 - Array.at","opsSec":7894959.954148223,"samples":3947480},{"name":"Length = 1_000_000 - Array.at","opsSec":8332204.497297302,"samples":4166103},{"name":"Length = 100 - Array[length - 1]","opsSec":16438308.577820962,"samples":8219155},{"name":"Length = 10_000 - Array[length - 1]","opsSec":17024379.215770658,"samples":8512190},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":17071602.026976805,"samples":8535802}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,715,639|6857820|
|Object.create({})|1,491,157|745579|
|Cached Empty.prototype|17,001,857|8500929|
|Empty.prototype|1,594,491|797246|
|Empty class|1,018,136|509069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:55:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13715639.381932499,"samples":6857820},{"name":"Object.create({})","opsSec":1491157.0373252952,"samples":745579},{"name":"Cached Empty.prototype","opsSec":17001857.24268124,"samples":8500929},{"name":"Empty.prototype","opsSec":1594491.0166663758,"samples":797246},{"name":"Empty class","opsSec":1018136.6606899322,"samples":509069}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,946,250|8473126|
|Using optional chain (obj.field?.field2) (undefined)|17,167,024|8583513|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,595,558|8297780|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,531,205|8265603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:01:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16946250.607358754,"samples":8473126},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":17167024.373441033,"samples":8583513},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16595558.047497442,"samples":8297780},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16531205.328770218,"samples":8265603}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,607,275|8303638|
|Using parseInt(x, 10) - big number (10 len)|8,496,212|4248107|
|Using + - small number (2 len)|17,169,880|8584941|
|Using + - big number (10 len)|17,212,999|8606500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:08:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16607275.49665072,"samples":8303638},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8496212.624374565,"samples":4248107},{"name":"Using + - small number (2 len)","opsSec":17169880.27067007,"samples":8584941},{"name":"Using + - big number (10 len)","opsSec":17212999.40823702,"samples":8606500}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|816,038|408020|
|Using ? operator to avoid rejection|838,721|419361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:13:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":816038.671719845,"samples":408020},{"name":"Using ? operator to avoid rejection","opsSec":838721.802218715,"samples":419361}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,529,589|8264795|
|Raw usage underscore usage|16,770,105|8385053|
|Manipulating private properties using #|14,558,172|7279087|
|Manipulating private properties using underscore(_)|13,985,393|6992697|
|Manipulating private properties using Symbol|14,477,295|7238648|
|Manipulating private properties using PrivateSymbol|11,440,664|5720333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:17:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16529589.621513773,"samples":8264795},{"name":"Raw usage underscore usage","opsSec":16770105.675231447,"samples":8385053},{"name":"Manipulating private properties using #","opsSec":14558172.433928689,"samples":7279087},{"name":"Manipulating private properties using underscore(_)","opsSec":13985393.62667995,"samples":6992697},{"name":"Manipulating private properties using Symbol","opsSec":14477295.867650552,"samples":7238648},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11440664.843703577,"samples":5720333}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,971,905|1485953|
|Adding property in the object creation - small object|2,928,764|1464383|
|Adding property after the function creation - small class|208,891|104446|
|Adding property in the function creation - small class|221,330|110666|
|Adding property after the class creation - small class|179,889|89945|
|Adding property in the class creation - small class|176,627|88314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:25:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2971905.9103563945,"samples":1485953},{"name":"Adding property in the object creation - small object","opsSec":2928764.37719442,"samples":1464383},{"name":"Adding property after the function creation - small class","opsSec":208891.29270066167,"samples":104446},{"name":"Adding property in the function creation - small class","opsSec":221330.65085042504,"samples":110666},{"name":"Adding property after the class creation - small class","opsSec":179889.3110248076,"samples":89945},{"name":"Adding property in the class creation - small class","opsSec":176627.93042772298,"samples":88314}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,144,714|8572358|
|Getter|13,611,438|6805720|
|Method|16,900,596|8450299|
|DefineProperty (getter)|17,066,321|8533161|
|DefineProperty (getter & enumerable=false)|13,953,050|6976526|
|DefineProperty (getter & configurable=false)|16,267,771|8133886|
|DefineProperty (getter & enumerable=false & configurable=false)|13,216,730|6608366|
|DefineProperty (writable)|17,023,023|8511512|
|DefineProperty (writable & enumerable=false)|17,012,180|8506091|
|DefineProperty (writable & enumerable=false & configurable=false)|17,021,878|8510940|
|DefineProperties (getter)|14,309,212|7154607|
|DefineProperties (getter & enumerable=false)|14,282,456|7141229|
|DefineProperties (getter & enumerable=false & configurable=false)|14,242,837|7121419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17144714.507987324,"samples":8572358},{"name":"Getter","opsSec":13611438.865846347,"samples":6805720},{"name":"Method","opsSec":16900596.104411557,"samples":8450299},{"name":"DefineProperty (getter)","opsSec":17066321.796839688,"samples":8533161},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13953050.70371761,"samples":6976526},{"name":"DefineProperty (getter & configurable=false)","opsSec":16267771.502728883,"samples":8133886},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13216730.827170072,"samples":6608366},{"name":"DefineProperty (writable)","opsSec":17023023.696936347,"samples":8511512},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17012180.118989125,"samples":8506091},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17021878.32403569,"samples":8510940},{"name":"DefineProperties (getter)","opsSec":14309212.847844724,"samples":7154607},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14282456.679100463,"samples":7141229},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14242837.332256215,"samples":7121419}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,898,555|8449278|
|Setter|6,202,177|3101089|
|Method|16,718,844|8359423|
|DefineProperty (setter)|16,791,782|8395892|
|DefineProperty (setter & enumerable=false)|6,241,360|3120681|
|DefineProperty (setter & configurable=false)|6,396,681|3198341|
|DefineProperty (setter & enumerable=false & configurable=false)|6,218,472|3109237|
|DefineProperty (writable)|16,815,832|8407917|
|DefineProperty (writable & enumerable=false)|16,835,216|8417609|
|DefineProperty (writable & enumerable=false & configurable=false)|15,187,633|7593817|
|DefineProperties (setter)|16,810,522|8405262|
|DefineProperties (setter & enumerable=false)|5,868,124|2934063|
|DefineProperties (setter & enumerable=false & configurable=false)|5,860,187|2930094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:45:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16898555.787977576,"samples":8449278},{"name":"Setter","opsSec":6202177.4307065355,"samples":3101089},{"name":"Method","opsSec":16718844.443123123,"samples":8359423},{"name":"DefineProperty (setter)","opsSec":16791782.770120587,"samples":8395892},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6241360.238269292,"samples":3120681},{"name":"DefineProperty (setter & configurable=false)","opsSec":6396681.081754279,"samples":3198341},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6218472.741354159,"samples":3109237},{"name":"DefineProperty (writable)","opsSec":16815832.71028824,"samples":8407917},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16835216.225292075,"samples":8417609},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15187633.239813387,"samples":7593817},{"name":"DefineProperties (setter)","opsSec":16810522.715016562,"samples":8405262},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5868124.175492712,"samples":2934063},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5860187.38274224,"samples":2930094}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,746,879|1373440|
|Using replaceAll()|2,630,981|1315491|
|Using replaceAll(//g)|2,541,313|1270657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2746879.693590432,"samples":1373440},{"name":"Using replaceAll()","opsSec":2630981.436819893,"samples":1315491},{"name":"Using replaceAll(//g)","opsSec":2541313.3507584273,"samples":1270657}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,273,812|5136907|
|{ ...object, __proto__: null }|10,455,118|5227560|
|{ ...object, newProp: true }|634,148|317075|
|structuredClone|273,847|136924|
|JSON.parse + JSON.stringify|187,686|93844|
|loop + object.keys starting with {}|1,206,249|603125|
|loop + object.keys starting with { __proto__: null }|760,843|380422|
|loop + object.keys starting with { randomProp: true }|565,999|283000|
|object.keys + reduce(FN, {})|1,224,863|612432|
|object.keys + reduce(FN, { __proto__: null })|756,232|378117|
|object.keys + reduce(FN, { newProp: true })|565,246|282624|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10273812.18035168,"samples":5136907},{"name":"{ ...object, __proto__: null }","opsSec":10455118.369349387,"samples":5227560},{"name":"{ ...object, newProp: true }","opsSec":634148.4850483369,"samples":317075},{"name":"structuredClone","opsSec":273847.17909745843,"samples":136924},{"name":"JSON.parse + JSON.stringify","opsSec":187686.0308155075,"samples":93844},{"name":"loop + object.keys starting with {}","opsSec":1206249.019975732,"samples":603125},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":760843.844994291,"samples":380422},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565999.3858579206,"samples":283000},{"name":"object.keys + reduce(FN, {})","opsSec":1224863.3487818264,"samples":612432},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":756232.2013488464,"samples":378117},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565246.2023691508,"samples":282624}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|283,178|141590|
|Sort using first char|1,159,624|579813|
|Sort using localeCompare|1,101,227|550614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:05:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":283178.28385611693,"samples":141590},{"name":"Sort using first char","opsSec":1159624.6204795276,"samples":579813},{"name":"Sort using localeCompare","opsSec":1101227.5991634345,"samples":550614}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|1088|
|{...smallObject} - Total keys: 2|13,340,143|6670072|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,424|1213|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,564|3283|
|{ ...bigObject, ...anotherBigObject }|1,291|646|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,510,774|3255388|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,482,471|5241236|
|{ ...smallObject, ...anotherSmallObject }|9,254,342|4627172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:09:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2174.8882972289566,"samples":1088},{"name":"{...smallObject} - Total keys: 2","opsSec":13340143.621565664,"samples":6670072},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2424.5798120337704,"samples":1213},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6564.703365035919,"samples":3283},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1291.1835976023137,"samples":646},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6510774.78506653,"samples":3255388},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10482471.167917313,"samples":5241236},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9254342.194572901,"samples":4627172}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,295|1148|
|streams.web.Readable reading 1e3 * "some data"|742|372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:15:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2295.163669865959,"samples":1148},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":742.7550518958263,"samples":372}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,270|2636|
|streams.web.WritableStream writing 1e3 * "some data"|2,441|1221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5270.1982457036775,"samples":2636},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2441.9074223149087,"samples":1221}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,908,036|8454019|
|Using backtick (`)|17,105,154|8552578|
|Using array.join|6,404,274|3202138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:24:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16908036.27534355,"samples":8454019},{"name":"Using backtick (`)","opsSec":17105154.33954084,"samples":8552578},{"name":"Using array.join","opsSec":6404274.14687077,"samples":3202138}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,025,411|7012706|
|(short string) (true) String#slice and strict comparison|16,696,518|8348260|
|(long string) (true) String#endsWith|13,992,560|6996281|
|(long string) (true) String#slice and strict comparison|16,679,334|8339668|
|(short string) (false) String#endsWith|14,612,870|7306436|
|(short string) (false) String#slice and strict comparison|17,027,140|8513571|
|(long string) (false) String#endsWith|14,331,148|7165575|
|(long string) (false) String#slice and strict comparison|16,972,788|8486395|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14025411.414709738,"samples":7012706},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16696518.182720795,"samples":8348260},{"name":"(long string) (true) String#endsWith","opsSec":13992560.100776495,"samples":6996281},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16679334.907101074,"samples":8339668},{"name":"(short string) (false) String#endsWith","opsSec":14612870.365795732,"samples":7306436},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17027140.506516133,"samples":8513571},{"name":"(long string) (false) String#endsWith","opsSec":14331148.822000628,"samples":7165575},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16972788.51697402,"samples":8486395}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,251,437|8625719|
|Using indexof|15,427,674|7713838|
|Using RegExp.test|8,541,000|4270501|
|Using RegExp.text with cached regex pattern|8,720,098|4360050|
|Using new RegExp.test|2,878,975|1439488|
|Using new RegExp.test with cached regex pattern|3,019,846|1509924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17251437.225330263,"samples":8625719},{"name":"Using indexof","opsSec":15427674.670946894,"samples":7713838},{"name":"Using RegExp.test","opsSec":8541000.99666039,"samples":4270501},{"name":"Using RegExp.text with cached regex pattern","opsSec":8720098.457292184,"samples":4360050},{"name":"Using new RegExp.test","opsSec":2878975.086089045,"samples":1439488},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3019846.318278021,"samples":1509924}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,592,358|7796180|
|(short string) (true) String#slice and strict comparison|16,780,318|8390160|
|(long string) (true) String#startsWith|14,391,496|7195749|
|(long string) (true) String#slice and strict comparison|16,430,008|8215005|
|(short string) (false) String#startsWith|16,019,162|8009582|
|(short string) (false) String#slice and strict comparison|16,579,690|8289846|
|(long string) (false) String#startsWith|16,306,086|8153044|
|(long string) (false) String#slice and strict comparison|16,897,107|8448554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:47:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15592358.779263303,"samples":7796180},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16780318.16822386,"samples":8390160},{"name":"(long string) (true) String#startsWith","opsSec":14391496.179748362,"samples":7195749},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16430008.232048795,"samples":8215005},{"name":"(short string) (false) String#startsWith","opsSec":16019162.9871187,"samples":8009582},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16579690.479860492,"samples":8289846},{"name":"(long string) (false) String#startsWith","opsSec":16306086.3004183,"samples":8153044},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16897107.672173943,"samples":8448554}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,031,385|8015693|
|Using this|16,797,986|8398994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":16031385.788406491,"samples":8015693},{"name":"Using this","opsSec":16797986.36028503,"samples":8398994}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,317,228|3158615|
|Date.now()|9,091,016|4545509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6317228.603192022,"samples":3158615},{"name":"Date.now()","opsSec":9091016.138823051,"samples":4545509}]}-->
