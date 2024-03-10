## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,789,382|92|
|Using dot notation|817,784,209|99|
|Using define property (writable)|4,326,163|95|
|Using define property initialized (writable)|5,243,276|91|
|Using define property (getter)|2,345,056|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":820789382.4752284,"samples":6},{"name":"Using dot notation","opsSec":817784209.141806,"samples":7},{"name":"Using define property (writable)","opsSec":4326162.786449416,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5243276.437215611,"samples":4},{"name":"Using define property (getter)","opsSec":2345056.0017947108,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.002ms
array.push|100|0.035ms
new Array(length)|100|0.015ms
array.push|1,000|0.113ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.426ms
new Array(length)|10,000|0.224ms
array.push|1,000,000|24.495ms
new Array(length)|1,000,000|15.968ms
array.push|100,000,000|1,008.45ms
new Array(length)|100,000,000|3,865.372ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.055ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.298ms
new Array(length)|10,000|3.959ms
array.push|1,000,000|76.808ms
new Array(length)|1,000,000|2.934ms
array.push|100,000,000|1,368.983ms
new Array(length)|100,000,000|4,125.514ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|548|89|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":547.7822109162781,"samples":5},{"name":"Array.from","opsSec":21.748944569188946,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|823,656,823|99|
|[async] async function|14,974,816|85|
|[async] function|370,031|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":823656823.3260716,"samples":6},{"name":"[async] async function","opsSec":14974815.916439293,"samples":7},{"name":"[async] function","opsSec":370030.66259205143,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,925|86|
|new Blob (1024)|661|75|
|text (128)|30,761|75|
|text (1024)|20,291|77|
|arrayBuffer (128)|34,994|75|
|arrayBuffer (1024)|24,640|83|
|slice (0, 64)|98,835|80|
|slice (0, 512)|52,635|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":4924.629202522782,"samples":3},{"name":"new Blob (1024)","opsSec":661.3534200930154,"samples":2},{"name":"text (128)","opsSec":30761.06299744654,"samples":4},{"name":"text (1024)","opsSec":20290.97399701821,"samples":3},{"name":"arrayBuffer (128)","opsSec":34993.7388192622,"samples":4},{"name":"arrayBuffer (1024)","opsSec":24639.69486249343,"samples":5},{"name":"slice (0, 64)","opsSec":98835.48693710638,"samples":3},{"name":"slice (0, 512)","opsSec":52634.64834578858,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,996|55|
|[True conditional] Using constructor name|206,651|98|
|[True conditional] Check if property is valid then instanceof |206,970|98|
|[False conditional] Using instanceof only|824,148,309|95|
|[False conditional] Using constructor name|824,141,905|100|
|[False conditional] Check if property is valid then instanceof |825,144,967|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254996.40490013588,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206650.95018180675,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":206970.13723244166,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824148309.397934,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":824141904.8600157,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":825144967.3854347,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|28,314|89|
|crypto.verify('RSA-SHA256')|27,422|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":28314.314782790916,"samples":7},{"name":"crypto.verify('RSA-SHA256')","opsSec":27421.503592101828,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,407,169|89|
|fromUnixToISOString(new Date())|2,017,451|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2407169.3431048854,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2017451.197945899,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,495|78|
|Intl.DateTimeFormat().format(new Date())|11,311|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,785|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,594|71|
|Reusing Intl.DateTimeFormat()|503,552|85|
|Date.toLocaleDateString()|574,569|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,846|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9495.216919678534,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11310.955821206308,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11785.188482904721,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9593.79770966804,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":503551.578784614,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":574568.9567447116,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12845.955892729029,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,028|96|
|Using brackets {}|1,076,275|98|
|Using '' + |1,091,060|96|
|Using date.toString()|1,170,346|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1059028.2941930725,"samples":6},{"name":"Using brackets {}","opsSec":1076275.2214482091,"samples":8},{"name":"Using '' + ","opsSec":1091060.201654129,"samples":6},{"name":"Using date.toString()","opsSec":1170345.8504448133,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,049,977|94|
|Using delete property (proto: null)|20,312,974|98|
|Using delete property (cached proto: null)|3,098,573|97|
|Using undefined assignment|823,037,993|96|
|Using undefined assignment (proto: null)|22,104,650|95|
|Using undefined property (cached proto: null)|818,885,300|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3049976.854099395,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20312973.5376654,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3098572.5470733102,"samples":5},{"name":"Using undefined assignment","opsSec":823037992.6999936,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22104650.057469316,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818885300.2641113,"samples":11}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|248,558|53|
|NodeError|200,476|96|
|NodeError Range|199,604|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":248558.23947739982,"samples":3},{"name":"NodeError","opsSec":200476.35139612426,"samples":3},{"name":"NodeError Range","opsSec":199603.7225570744,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,472,334|93|
|Function returning explicitly undefined|1,480,267|91|
|Function returning implicitly undefined|1,510,369|97|
|Function returning string|1,460,344|98|
|Function returning integer|1,523,466|99|
|Function returning float|1,499,267|97|
|Function returning functions|1,463,866|94|
|Function returning arrow functions|1,476,845|97|
|Function returning empty object|1,487,109|97|
|Function returning empty array|1,467,167|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1472334.081009203,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1480267.2821750315,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1510368.569690939,"samples":6},{"name":"Function returning string","opsSec":1460343.5677137992,"samples":5},{"name":"Function returning integer","opsSec":1523466.3289313936,"samples":4},{"name":"Function returning float","opsSec":1499267.4137681106,"samples":5},{"name":"Function returning functions","opsSec":1463866.0421690645,"samples":7},{"name":"Function returning arrow functions","opsSec":1476845.4844355378,"samples":5},{"name":"Function returning empty object","opsSec":1487108.7387443134,"samples":7},{"name":"Function returning empty array","opsSec":1467167.038797181,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|821,834,159|99|
|using Array.includes (first item)|822,074,096|92|
|Using raw comparison|822,944,197|99|
|Using raw comparison (first item)|823,403,194|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":821834158.9976206,"samples":7},{"name":"using Array.includes (first item)","opsSec":822074095.8538958,"samples":7},{"name":"Using raw comparison","opsSec":822944196.5682003,"samples":6},{"name":"Using raw comparison (first item)","opsSec":823403194.0478216,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,354,737|91|
|Using Object.getOwnPropertyNames()|95,698,890|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":90354737.11638053,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":95698889.73305076,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,888,198|93|
|Length = 10_000 - Array.at|22,990,109|97|
|Length = 1_000_000 - Array.at|23,066,444|96|
|Length = 100 - Array[length - 1]|817,603,597|94|
|Length = 10_000 - Array[length - 1]|816,747,362|99|
|Length = 1_000_000 - Array[length - 1]|817,060,602|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22888197.877712585,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":22990108.901301827,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23066444.024379693,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":817603596.89857,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":816747361.5270367,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":817060601.9547316,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|59,451,321|91|
|Object.create({})|2,051,279|89|
|Cached Empty.prototype|823,754,320|98|
|Empty.prototype|2,105,414|85|
|Empty class|1,336,288|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":59451320.67587182,"samples":6},{"name":"Object.create({})","opsSec":2051279.437518368,"samples":3},{"name":"Cached Empty.prototype","opsSec":823754320.4204489,"samples":9},{"name":"Empty.prototype","opsSec":2105413.97540277,"samples":3},{"name":"Empty class","opsSec":1336287.9817983499,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,183,928|100|
|Using optional chain (obj.field?.field2) (undefined)|822,110,084|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,909,392|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,871,491|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822183928.3449476,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822110084.1180519,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821909392.1023669,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820871490.8763968,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|219,577,892|93|
|Using parseInt(x, 10) - big number (10 len)|19,532,654|99|
|Using + - small number (2 len)|824,444,283|96|
|Using + - big number (10 len)|823,453,163|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":219577892.47164357,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19532654.077238314,"samples":6},{"name":"Using + - small number (2 len)","opsSec":824444282.9343578,"samples":10},{"name":"Using + - big number (10 len)","opsSec":823453163.2129481,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,061,335|84|
|Using ? operator to avoid rejection|1,113,934|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:01:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1061334.8373386136,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1113934.2295895566,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|11,609,333|92|
|Raw usage underscore usage|8,728,367|94|
|Manipulating private properties using #|3,460,480|97|
|Manipulating private properties using underscore(_)|810,547,091|95|
|Manipulating private properties using Symbol|808,038,765|98|
|Manipulating private properties using PrivateSymbol|43,558,808|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":11609332.83782997,"samples":6},{"name":"Raw usage underscore usage","opsSec":8728367.188851764,"samples":8},{"name":"Manipulating private properties using #","opsSec":3460479.7223525285,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":810547091.2120829,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":808038764.9367205,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":43558808.292266615,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,438,169|93|
|Adding property in the object creation - small object|3,432,285|98|
|Adding property after the function creation - small class|226,241|90|
|Adding property in the function creation - small class|228,514|91|
|Adding property after the class creation - small class|194,336|88|
|Adding property in the class creation - small class|194,215|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3438168.6858248324,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3432284.702201356,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":226240.59927681176,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":228514.21384616842,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":194336.4752208137,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":194215.4630586782,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,029,434|100|
|Getter|92,344,900|97|
|Method|850,428,726|97|
|DefineProperty (getter)|849,866,240|99|
|DefineProperty (getter & enumerable=false)|93,684,577|96|
|DefineProperty (getter & configurable=false)|848,791,193|100|
|DefineProperty (getter & enumerable=false & configurable=false)|93,702,349|97|
|DefineProperty (writable)|848,446,985|97|
|DefineProperty (writable & enumerable=false)|849,548,973|98|
|DefineProperty (writable & enumerable=false & configurable=false)|164,337,971|23|
|DefineProperties (getter)|58,854,739|93|
|DefineProperties (getter & enumerable=false)|93,302,758|97|
|DefineProperties (getter & enumerable=false & configurable=false)|93,742,216|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:53:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":850029434.3282126,"samples":6},{"name":"Getter","opsSec":92344899.56958947,"samples":5},{"name":"Method","opsSec":850428726.2542101,"samples":7},{"name":"DefineProperty (getter)","opsSec":849866240.3648822,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93684577.25135566,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848791193.3648393,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":93702349.47712547,"samples":5},{"name":"DefineProperty (writable)","opsSec":848446985.1862284,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849548973.1576467,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":164337970.95195612,"samples":7},{"name":"DefineProperties (getter)","opsSec":58854739.373962924,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93302757.8796666,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93742215.52711877,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,367,151|98|
|Setter|11,535,570|99|
|Method|843,479,844|98|
|DefineProperty (setter)|845,502,286|94|
|DefineProperty (setter & enumerable=false)|11,472,355|98|
|DefineProperty (setter & configurable=false)|11,703,951|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,682,589|96|
|DefineProperty (writable)|848,389,820|98|
|DefineProperty (writable & enumerable=false)|694,651,317|85|
|DefineProperty (writable & enumerable=false & configurable=false)|140,619,079|82|
|DefineProperties (setter)|114,962,745|88|
|DefineProperties (setter & enumerable=false)|11,656,864|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,460,999|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:11:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":837367150.7368085,"samples":6},{"name":"Setter","opsSec":11535570.065001272,"samples":5},{"name":"Method","opsSec":843479843.6631336,"samples":6},{"name":"DefineProperty (setter)","opsSec":845502285.9177407,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11472355.190668756,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11703951.395803507,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11682588.925213298,"samples":5},{"name":"DefineProperty (writable)","opsSec":848389819.5999658,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":694651317.0855881,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":140619078.90489835,"samples":5},{"name":"DefineProperties (setter)","opsSec":114962745.0315896,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11656864.289178126,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11460999.204503264,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,425,403|91|
|Using replaceAll()|3,207,289|100|
|Using replaceAll(//g)|3,113,274|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3425403.189450646,"samples":5},{"name":"Using replaceAll()","opsSec":3207288.8150915634,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3113273.644084804,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,046,274|95|
|{ ...object, __proto__: null }|20,416,910|98|
|{ ...object, newProp: true }|768,854|92|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|207,772|98|
|loop + object.keys starting with {}|542,235|100|
|loop + object.keys starting with { __proto__: null }|839,828|98|
|loop + object.keys starting with { randomProp: true }|574,213|98|
|object.keys + reduce(FN, {})|546,640|100|
|object.keys + reduce(FN, { __proto__: null })|855,539|97|
|object.keys + reduce(FN, { newProp: true })|574,743|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":20046274.043922573,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20416910.36195846,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":768854.0645908923,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":207772.3805998663,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":542235.4315519489,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":839827.7945724071,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":574213.4249297562,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":546640.3214867279,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":855539.1492102519,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":574743.0817612516,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|255,602|97|
|Sort using first char|1,273,599|99|
|Sort using localeCompare|641,879|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:00:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":255602.11846997947,"samples":5},{"name":"Sort using first char","opsSec":1273598.6045191232,"samples":6},{"name":"Sort using localeCompare","opsSec":641879.3223259945,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,965|94|
|{...smallObject} - Total keys: 2|97,018,298|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,191|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,454|98|
|{ ...bigObject, ...anotherBigObject }|1,175|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,967,766|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,638,059|97|
|{ ...smallObject, ...anotherSmallObject }|22,805,310|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1964.5073934953673,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":97018298.35663606,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2191.085003700011,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6453.965601575068,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1174.9624161587499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13967766.11101359,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":34638058.834673665,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22805309.888568927,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,624|85|
|streams.web.Readable reading 1e3 * "some data"|508|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:23:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2623.7749371913196,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":508.3306882286468,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,027|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,063|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:33:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4027.0808007355645,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1062.5939286303421,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,659,979|98|
|Using backtick (`)|848,801,970|95|
|Using array.join|12,497,136|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":849659979.1084698,"samples":7},{"name":"Using backtick (`)","opsSec":848801970.1165224,"samples":8},{"name":"Using array.join","opsSec":12497135.613016132,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,089,450|100|
|Using indexof|847,309,940|98|
|Using RegExp.test|16,400,355|97|
|Using RegExp.text with cached regex pattern|16,682,721|99|
|Using new RegExp.test|5,350,419|98|
|Using new RegExp.test with cached regex pattern|6,335,787|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:51:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17089450.28032001,"samples":4},{"name":"Using indexof","opsSec":847309939.5406765,"samples":10},{"name":"Using RegExp.test","opsSec":16400354.74661546,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16682721.376659514,"samples":8},{"name":"Using new RegExp.test","opsSec":5350418.555059917,"samples":9},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6335786.836938719,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|155,702,089|94|
|Using this|160,708,221|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:06:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":155702088.7448,"samples":8},{"name":"Using this","opsSec":160708220.98082653,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,340,206|92|
|Date.now()|20,801,498|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:13:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11340206.428659873,"samples":6},{"name":"Date.now()","opsSec":20801497.69242483,"samples":7}]}-->
