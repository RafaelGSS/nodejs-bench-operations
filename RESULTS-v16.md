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
|Getter (class)|821,952,734|95|
|Getter|79,973,766|97|
|Method|819,794,080|99|
|DefineProperty (getter)|818,393,840|96|
|DefineProperty (getter & enumerable=false)|80,029,591|97|
|DefineProperty (getter & configurable=false)|819,652,149|96|
|DefineProperty (getter & enumerable=false & configurable=false)|79,772,527|93|
|DefineProperty (writable)|822,363,733|89|
|DefineProperty (writable & enumerable=false)|823,704,942|97|
|DefineProperty (writable & enumerable=false & configurable=false)|124,460,267|19|
|DefineProperties (getter)|49,899,521|93|
|DefineProperties (getter & enumerable=false)|80,328,836|99|
|DefineProperties (getter & enumerable=false & configurable=false)|80,415,387|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":821952733.5351921,"samples":6},{"name":"Getter","opsSec":79973765.74624749,"samples":6},{"name":"Method","opsSec":819794080.2476497,"samples":8},{"name":"DefineProperty (getter)","opsSec":818393840.4259863,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":80029591.25384481,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":819652148.6973997,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":79772527.48646404,"samples":6},{"name":"DefineProperty (writable)","opsSec":822363733.4780642,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823704942.1735386,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":124460266.68509383,"samples":8},{"name":"DefineProperties (getter)","opsSec":49899521.41160471,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":80328836.4872614,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":80415386.55203202,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|773,814,498|98|
|Setter|8,617,862|98|
|Method|784,790,502|95|
|DefineProperty (setter)|781,339,508|95|
|DefineProperty (setter & enumerable=false)|8,590,734|98|
|DefineProperty (setter & configurable=false)|8,270,933|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,599,149|96|
|DefineProperty (writable)|822,698,990|95|
|DefineProperty (writable & enumerable=false)|823,109,783|97|
|DefineProperty (writable & enumerable=false & configurable=false)|124,287,542|18|
|DefineProperties (setter)|90,337,998|89|
|DefineProperties (setter & enumerable=false)|8,596,071|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,604,459|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":773814498.4695568,"samples":5},{"name":"Setter","opsSec":8617861.666200213,"samples":6},{"name":"Method","opsSec":784790502.4923285,"samples":7},{"name":"DefineProperty (setter)","opsSec":781339507.770731,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8590733.51259045,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8270932.832130703,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8599149.016430935,"samples":5},{"name":"DefineProperty (writable)","opsSec":822698989.5170308,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823109782.600889,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":124287541.86873128,"samples":7},{"name":"DefineProperties (setter)","opsSec":90337997.84811203,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8596070.97158624,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8604458.929681625,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,100,681|96|
|Using replaceAll()|2,848,256|95|
|Using replaceAll(//g)|2,831,403|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3100680.735657664,"samples":6},{"name":"Using replaceAll()","opsSec":2848255.5699358704,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2831403.225102305,"samples":7}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,740,151|89|
|{ ...object, __proto__: null }|18,984,977|95|
|{ ...object, newProp: true }|748,285|86|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|169,147|95|
|loop + object.keys starting with {}|528,878|97|
|loop + object.keys starting with { __proto__: null }|728,591|97|
|loop + object.keys starting with { randomProp: true }|541,041|92|
|object.keys + reduce(FN, {})|536,952|97|
|object.keys + reduce(FN, { __proto__: null })|741,998|97|
|object.keys + reduce(FN, { newProp: true })|558,475|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":18740151.107187096,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":18984977.238358144,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":748284.9400982838,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":169147.3005904002,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":528877.5796419606,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":728590.6911301545,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":541040.7382141761,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":536951.6053666454,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":741998.030082793,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":558474.8460409098,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,138|97|
|Sort using first char|1,163,617|93|
|Sort using localeCompare|642,984|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":261138.25838124927,"samples":6},{"name":"Sort using first char","opsSec":1163617.329965478,"samples":5},{"name":"Sort using localeCompare","opsSec":642983.528009433,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,952|90|
|{...smallObject} - Total keys: 2|95,227,507|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,083|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,624|96|
|{ ...bigObject, ...anotherBigObject }|1,184|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,956,364|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,929,193|98|
|{ ...smallObject, ...anotherSmallObject }|21,571,633|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1952.2573250332384,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":95227507.47957559,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2082.669525465009,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5623.746141792667,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1184.287164029494,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12956363.787700785,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31929193.32616937,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21571632.63164823,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,234|85|
|streams.web.Readable reading 1e3 * "some data"|502|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:19:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2233.5571320015874,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":501.50393487136665,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,488|90|
|streams.web.WritableStream writing 1e3 * "some data"|1,355|66|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4488.0678194051,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1354.5059076488076,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|823,629,317|96|
|Using backtick (`)|822,833,795|97|
|Using array.join|10,880,166|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":823629316.5014703,"samples":6},{"name":"Using backtick (`)","opsSec":822833794.9526607,"samples":7},{"name":"Using array.join","opsSec":10880165.867490409,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,285,727|93|
|Using indexof|820,664,152|95|
|Using RegExp.test|15,628,380|97|
|Using RegExp.text with cached regex pattern|16,265,636|98|
|Using new RegExp.test|4,811,064|93|
|Using new RegExp.test with cached regex pattern|5,776,270|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":16285726.763867728,"samples":5},{"name":"Using indexof","opsSec":820664151.7336175,"samples":6},{"name":"Using RegExp.test","opsSec":15628380.103294227,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":16265636.313712252,"samples":7},{"name":"Using new RegExp.test","opsSec":4811063.564071043,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5776270.148184683,"samples":4}]}-->

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
