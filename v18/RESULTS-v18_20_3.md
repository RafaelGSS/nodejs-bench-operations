## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,543,791|8271896|
|Using dot notation|16,692,177|8346089|
|Using define property (writable)|3,218,839|1609420|
|Using define property initialized (writable)|3,963,717|1981859|
|Using define property (getter)|1,988,190|994096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16543791.768994715,"samples":8271896},{"name":"Using dot notation","opsSec":16692177.198183998,"samples":8346089},{"name":"Using define property (writable)","opsSec":3218839.8390401076,"samples":1609420},{"name":"Using define property initialized (writable)","opsSec":3963717.6195752667,"samples":1981859},{"name":"Using define property (getter)","opsSec":1988190.4174227482,"samples":994096}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|31.453ms
new Array(length)|1,000,000|9.162ms
array.push|100,000,000|2,274.403ms
new Array(length)|100,000,000|4,541.177ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.015ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.448ms
new Array(length)|10,000|3.139ms
array.push|1,000,000|280.344ms
new Array(length)|1,000,000|4.661ms
array.push|100,000,000|2,663.582ms
new Array(length)|100,000,000|4,959.206ms

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
