## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,220,432|95|
|Using dot notation|911,296,597|92|
|Using define property (writable)|4,731,970|94|
|Using define property initialized (writable)|6,968,218|95|
|Using define property (getter)|2,686,781|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:18:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912220431.6895503,"samples":6},{"name":"Using dot notation","opsSec":911296597.4438951,"samples":6},{"name":"Using define property (writable)","opsSec":4731970.344156935,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6968217.542094901,"samples":6},{"name":"Using define property (getter)","opsSec":2686780.771833919,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.019ms
new Array(length)|10|0.002ms
array.push|100|0.079ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.174ms
array.push|1,000,000|31.666ms
new Array(length)|1,000,000|8.566ms
array.push|100,000,000|1,918.496ms
new Array(length)|100,000,000|4,243.751ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|19.816ms
new Array(length)|1,000,000|7.5ms
array.push|100,000,000|2,061.693ms
new Array(length)|100,000,000|4,821.549ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|219|85|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:32:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":219.07850472089567,"samples":3},{"name":"Array.from","opsSec":23.081905420349344,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,438,657|98|
|[async] async function|18,518,351|87|
|[async] function|203,510|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911438656.687967,"samples":6},{"name":"[async] async function","opsSec":18518351.206703,"samples":8},{"name":"[async] function","opsSec":203509.58281390494,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,080|92|
|new Blob (1024)|766|78|
|text (128)|6,611|87|
|text (1024)|829|90|
|arrayBuffer (128)|6,582|91|
|arrayBuffer (1024)|825|89|
|slice (0, 64)|206,923|58|
|slice (0, 512)|34,228|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:50:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6080.411644019667,"samples":6},{"name":"new Blob (1024)","opsSec":766.4817114410358,"samples":2},{"name":"text (128)","opsSec":6611.215632117522,"samples":4},{"name":"text (1024)","opsSec":828.8823967483104,"samples":2},{"name":"arrayBuffer (128)","opsSec":6581.550945950714,"samples":3},{"name":"arrayBuffer (1024)","opsSec":825.0724572293523,"samples":2},{"name":"slice (0, 64)","opsSec":206923.4884239006,"samples":3},{"name":"slice (0, 512)","opsSec":34227.792719833764,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|277,464|53|
|[True conditional] Using constructor name|231,737|99|
|[True conditional] Check if property is valid then instanceof |234,356|97|
|[False conditional] Using instanceof only|912,856,098|99|
|[False conditional] Using constructor name|913,032,554|99|
|[False conditional] Check if property is valid then instanceof |913,428,312|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":277464.0148980207,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":231737.14634359902,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":234356.18829249655,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912856097.9141179,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913032553.5364028,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913428311.9060191,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,090|93|
|crypto.verify('RSA-SHA256')|7,064|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:09:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7089.917518798939,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":7064.342793353699,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,441,574|95|
|fromUnixToISOString(new Date())|2,260,092|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1441574.3560607403,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2260092.3512562416,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,224|79|
|Intl.DateTimeFormat().format(new Date())|17,953|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,735|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,786|81|
|Reusing Intl.DateTimeFormat()|764,687|87|
|Date.toLocaleDateString()|892,473|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,918|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:31:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17224.478172394633,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17953.392637156372,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17734.567983362973,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18786.238129634505,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":764686.5000481522,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":892473.3355138191,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20917.74510971949,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,163,676|98|
|Using brackets {}|1,179,507|98|
|Using '' + |1,178,742|98|
|Using date.toString()|1,333,931|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1163675.5720150396,"samples":4},{"name":"Using brackets {}","opsSec":1179507.1067694337,"samples":6},{"name":"Using '' + ","opsSec":1178742.01444493,"samples":5},{"name":"Using date.toString()","opsSec":1333931.4833132026,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,493,768|97|
|Using delete property (proto: null)|23,969,746|100|
|Using delete property (cached proto: null)|4,550,395|95|
|Using undefined assignment|909,906,284|96|
|Using undefined assignment (proto: null)|26,558,052|99|
|Using undefined property (cached proto: null)|908,147,533|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4493768.070579155,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23969745.610712454,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4550395.406241653,"samples":4},{"name":"Using undefined assignment","opsSec":909906284.3737822,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":26558052.46354817,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":908147532.8051986,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,580|53|
|NodeError|225,185|98|
|NodeError Range|213,540|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:01:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":268579.8233857073,"samples":3},{"name":"NodeError","opsSec":225184.97427160438,"samples":3},{"name":"NodeError Range","opsSec":213540.34971516347,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,094,059|96|
|Function returning explicitly undefined|2,053,107|91|
|Function returning implicitly undefined|2,119,596|97|
|Function returning string|2,073,977|95|
|Function returning integer|2,132,187|95|
|Function returning float|2,094,369|97|
|Function returning functions|2,042,948|99|
|Function returning arrow functions|2,075,791|96|
|Function returning empty object|2,092,921|96|
|Function returning empty array|2,104,002|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2094059.2848588238,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2053106.5764822697,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2119596.1166640567,"samples":8},{"name":"Function returning string","opsSec":2073977.3940116768,"samples":7},{"name":"Function returning integer","opsSec":2132186.6646607174,"samples":6},{"name":"Function returning float","opsSec":2094369.338517464,"samples":5},{"name":"Function returning functions","opsSec":2042947.9311922146,"samples":5},{"name":"Function returning arrow functions","opsSec":2075790.934412122,"samples":8},{"name":"Function returning empty object","opsSec":2092920.9435658562,"samples":6},{"name":"Function returning empty array","opsSec":2104002.312913328,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,669,196|96|
|using Array.includes (first item)|911,323,608|97|
|Using raw comparison|912,682,196|99|
|Using raw comparison (first item)|911,842,370|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:24:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909669196.270062,"samples":7},{"name":"using Array.includes (first item)","opsSec":911323607.6722407,"samples":8},{"name":"Using raw comparison","opsSec":912682196.2182688,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911842369.5436203,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|100,582,469|94|
|Using Object.getOwnPropertyNames()|98,546,813|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:31:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":100582469.10116386,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":98546812.57765876,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|965,354,516|98|
|Length = 10_000 - Array.at|967,883,167|98|
|Length = 1_000_000 - Array.at|966,041,750|96|
|Length = 100 - Array[length - 1]|910,884,721|97|
|Length = 10_000 - Array[length - 1]|910,610,904|98|
|Length = 1_000_000 - Array[length - 1]|909,689,130|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":965354516.379971,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":967883166.8259106,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":966041750.2843709,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":910884721.2188373,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910610904.0650043,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":909689130.3933446,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|89,884,537|95|
|Object.create({})|2,902,479|84|
|Cached Empty.prototype|911,441,991|99|
|Empty.prototype|2,703,099|88|
|Empty class|1,652,578|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:49:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":89884537.40548731,"samples":5},{"name":"Object.create({})","opsSec":2902479.1859186287,"samples":4},{"name":"Cached Empty.prototype","opsSec":911441991.11608,"samples":5},{"name":"Empty.prototype","opsSec":2703099.1167327003,"samples":5},{"name":"Empty class","opsSec":1652577.9790392108,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,244,434|96|
|Using optional chain (obj.field?.field2) (undefined)|911,045,584|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,610,035|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|911,123,952|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:58:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910244434.1041954,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911045584.2475812,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911610034.5345951,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":911123952.3618616,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|910,909,018|99|
|Using parseInt(x, 10) - big number (10 len)|912,391,296|99|
|Using + - small number (2 len)|912,113,631|97|
|Using + - big number (10 len)|910,788,584|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:07:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":910909017.6393812,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912391296.4273689,"samples":7},{"name":"Using + - small number (2 len)","opsSec":912113631.0120583,"samples":7},{"name":"Using + - big number (10 len)","opsSec":910788583.8374594,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,448,174|81|
|Using ? operator to avoid rejection|1,536,106|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:13:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1448173.7750559938,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1536106.2874844999,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|902,549,204|99|
|Raw usage underscore usage|907,849,090|97|
|Manipulating private properties using #|899,503,189|96|
|Manipulating private properties using underscore(_)|900,486,657|98|
|Manipulating private properties using Symbol|899,655,699|97|
|Manipulating private properties using PrivateSymbol|55,475,947|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:23:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":902549203.7520505,"samples":7},{"name":"Raw usage underscore usage","opsSec":907849089.7898928,"samples":6},{"name":"Manipulating private properties using #","opsSec":899503189.4091221,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":900486657.3188866,"samples":11},{"name":"Manipulating private properties using Symbol","opsSec":899655698.5546087,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55475946.819393516,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,751,203|97|
|Adding property in the object creation - small object|5,794,313|94|
|Adding property after the function creation - small class|291,079|86|
|Adding property in the function creation - small class|297,271|92|
|Adding property after the class creation - small class|299,203|89|
|Adding property in the class creation - small class|298,150|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:33:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5751203.152891517,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5794312.681044055,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":291079.1665192276,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":297271.4384899222,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":299203.375858679,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":298150.2466809156,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,089,027|97|
|Getter|102,514,368|95|
|Method|910,614,908|99|
|DefineProperty (getter)|910,203,706|97|
|DefineProperty (getter & enumerable=false)|102,248,087|95|
|DefineProperty (getter & configurable=false)|910,999,781|98|
|DefineProperty (getter & enumerable=false & configurable=false)|102,572,963|96|
|DefineProperty (writable)|910,286,338|96|
|DefineProperty (writable & enumerable=false)|911,511,934|97|
|DefineProperty (writable & enumerable=false & configurable=false)|910,735,001|93|
|DefineProperties (getter)|102,483,179|95|
|DefineProperties (getter & enumerable=false)|74,003,929|73|
|DefineProperties (getter & enumerable=false & configurable=false)|63,077,209|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:48:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910089027.3583355,"samples":6},{"name":"Getter","opsSec":102514367.5549508,"samples":7},{"name":"Method","opsSec":910614908.1261979,"samples":7},{"name":"DefineProperty (getter)","opsSec":910203705.6150883,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102248087.41712777,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":910999781.004734,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102572963.14435212,"samples":6},{"name":"DefineProperty (writable)","opsSec":910286338.3581047,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":911511933.6515198,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":910735001.0421096,"samples":6},{"name":"DefineProperties (getter)","opsSec":102483179.40319425,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":74003928.52188285,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":63077209.14122853,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|865,817,046|97|
|Setter|13,844,834|97|
|Method|867,612,698|99|
|DefineProperty (setter)|867,893,189|94|
|DefineProperty (setter & enumerable=false)|13,771,726|97|
|DefineProperty (setter & configurable=false)|13,803,443|97|
|DefineProperty (setter & enumerable=false & configurable=false)|13,861,708|97|
|DefineProperty (writable)|839,915,348|97|
|DefineProperty (writable & enumerable=false)|870,128,320|94|
|DefineProperty (writable & enumerable=false & configurable=false)|869,135,689|98|
|DefineProperties (setter)|869,217,276|99|
|DefineProperties (setter & enumerable=false)|13,129,782|93|
|DefineProperties (setter & enumerable=false & configurable=false)|12,689,054|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:05:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":865817046.0675571,"samples":8},{"name":"Setter","opsSec":13844833.923152635,"samples":5},{"name":"Method","opsSec":867612698.2399642,"samples":6},{"name":"DefineProperty (setter)","opsSec":867893188.988122,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13771725.937079318,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":13803442.650033886,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13861707.76788576,"samples":8},{"name":"DefineProperty (writable)","opsSec":839915347.9429386,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":870128319.7263442,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":869135689.3316886,"samples":7},{"name":"DefineProperties (setter)","opsSec":869217276.0918585,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13129782.390579179,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12689053.63259714,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,617,234|92|
|Using replaceAll()|3,253,492|98|
|Using replaceAll(//g)|3,349,531|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3617233.5041863592,"samples":4},{"name":"Using replaceAll()","opsSec":3253492.3356168806,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3349531.3360869093,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|33,892,080|92|
|{ ...object, __proto__: null }|2,777,450|97|
|{ ...object, newProp: true }|30,881,147|96|
|structuredClone|285,036|93|
|JSON.parse + JSON.stringify|258,949|98|
|loop + object.keys starting with {}|1,660,519|97|
|loop + object.keys starting with { __proto__: null }|874,272|97|
|loop + object.keys starting with { randomProp: true }|702,198|95|
|object.keys + reduce(FN, {})|674,972|96|
|object.keys + reduce(FN, { __proto__: null })|873,438|93|
|object.keys + reduce(FN, { newProp: true })|708,889|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:30:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":33892079.83869359,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":2777449.5253428747,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":30881147.411176924,"samples":8},{"name":"structuredClone","opsSec":285035.5242830546,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":258948.6397299116,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1660519.2161455143,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":874271.7350459791,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":702198.0155159883,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":674971.5048028157,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":873438.1149492433,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708888.6706726254,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|350,420|93|
|Sort using first char|1,548,478|95|
|Sort using localeCompare|1,436,408|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:39:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":350420.0474357215,"samples":4},{"name":"Sort using first char","opsSec":1548478.0989543784,"samples":6},{"name":"Sort using localeCompare","opsSec":1436407.50241062,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,202|96|
|{...smallObject} - Total keys: 2|125,260,201|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,317|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,806|99|
|{ ...bigObject, ...anotherBigObject }|1,374|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,233,193|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,821,970|95|
|{ ...smallObject, ...anotherSmallObject }|27,225,267|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:50:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2201.6479885717986,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":125260200.52950981,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1317.2830921031766,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6806.316785123126,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1374.002692812154,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16233192.952968007,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40821970.092479415,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27225266.93178215,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,626|87|
|streams.web.Readable reading 1e3 * "some data"|3,029|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:59:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2625.864532117234,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":3028.985610151447,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,566|96|
|streams.web.WritableStream writing 1e3 * "some data"|1,595|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5565.807969968434,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1595.1024144729304,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|909,527,026|95|
|Using backtick (`)|910,524,247|97|
|Using array.join|12,047,143|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":909527026.3046536,"samples":6},{"name":"Using backtick (`)","opsSec":910524247.0303075,"samples":9},{"name":"Using array.join","opsSec":12047142.775946157,"samples":6}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|274,342,760|93|
|(short string) (true) String#slice and strict comparison|816,375,618|95|
|(long string) (true) String#endsWith|173,708,455|93|
|(long string) (true) String#slice and strict comparison|816,841,428|95|
|(short string) (false) String#endsWith|779,674,165|97|
|(short string) (false) String#slice and strict comparison|817,215,856|97|
|(long string) (false) String#endsWith|777,032,254|95|
|(long string) (false) String#slice and strict comparison|814,643,252|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":274342760.364869,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":816375618.1937544,"samples":5},{"name":"(long string) (true) String#endsWith","opsSec":173708455.20368987,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":816841428.1214546,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":779674164.6691935,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817215856.0896342,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":777032253.5746518,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":814643252.2317692,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|822,891,837|96|
|Using indexof|820,995,080|98|
|Using RegExp.test|16,916,567|98|
|Using RegExp.text with cached regex pattern|17,708,358|97|
|Using new RegExp.test|4,622,691|97|
|Using new RegExp.test with cached regex pattern|5,119,554|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using includes","opsSec":822891836.7289296,"samples":8},{"name":"Using indexof","opsSec":820995079.8876286,"samples":6},{"name":"Using RegExp.test","opsSec":16916566.83099029,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17708357.771944508,"samples":5},{"name":"Using new RegExp.test","opsSec":4622690.9102385435,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5119553.790215294,"samples":6}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|271,489,544|94|
|(short string) (true) String#slice and strict comparison|820,215,355|97|
|(long string) (true) String#startsWith|173,333,729|93|
|(long string) (true) String#slice and strict comparison|819,279,147|97|
|(short string) (false) String#startsWith|777,733,254|98|
|(short string) (false) String#slice and strict comparison|818,902,826|97|
|(long string) (false) String#startsWith|780,973,659|99|
|(long string) (false) String#slice and strict comparison|819,926,660|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":271489543.5352711,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820215354.979252,"samples":8},{"name":"(long string) (true) String#startsWith","opsSec":173333728.72526354,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819279146.9958984,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":777733254.4621341,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":818902825.5953854,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":780973658.7574512,"samples":9},{"name":"(long string) (false) String#slice and strict comparison","opsSec":819926660.2108792,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|818,171,339|97|
|Using this|819,834,839|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":818171338.7447283,"samples":8},{"name":"Using this","opsSec":819834839.2348846,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,676,653|93|
|Date.now()|21,587,913|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11676652.50871484,"samples":4},{"name":"Date.now()","opsSec":21587912.69038154,"samples":5}]}-->
