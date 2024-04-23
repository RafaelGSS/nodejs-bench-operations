## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,842,504|98|
|Using dot notation|842,235,008|92|
|Using define property (writable)|4,198,907|95|
|Using define property initialized (writable)|6,394,467|97|
|Using define property (getter)|2,518,204|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":844842503.5279866,"samples":6},{"name":"Using dot notation","opsSec":842235008.3317577,"samples":6},{"name":"Using define property (writable)","opsSec":4198907.078119428,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6394466.714124829,"samples":5},{"name":"Using define property (getter)","opsSec":2518204.237919781,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.034ms
new Array(length)|100|0.017ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.43ms
new Array(length)|10,000|0.417ms
array.push|1,000,000|28.874ms
new Array(length)|1,000,000|5.655ms
array.push|100,000,000|1,105.293ms
new Array(length)|100,000,000|3,669.615ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.243ms
new Array(length)|10,000|0.283ms
array.push|1,000,000|21.577ms
new Array(length)|1,000,000|2.771ms
array.push|100,000,000|1,336.387ms
new Array(length)|100,000,000|3,618.18ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|591|85|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":591.2910992161028,"samples":3},{"name":"Array.from","opsSec":22.160196247303674,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,127,751|96|
|[async] async function|17,554,029|87|
|[async] function|188,970|22|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:42:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":845127750.7061504,"samples":6},{"name":"[async] async function","opsSec":17554029.15227519,"samples":6},{"name":"[async] function","opsSec":188970.33019063598,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,246|89|
|new Blob (1024)|663|85|
|text (128)|5,694|86|
|text (1024)|735|89|
|arrayBuffer (128)|5,668|85|
|arrayBuffer (1024)|725|85|
|slice (0, 64)|73,567|69|
|slice (0, 512)|21,484|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:43:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5246.4801686687715,"samples":3},{"name":"new Blob (1024)","opsSec":662.7970801668866,"samples":2},{"name":"text (128)","opsSec":5694.09235630435,"samples":7},{"name":"text (1024)","opsSec":735.090866487838,"samples":3},{"name":"arrayBuffer (128)","opsSec":5668.456850854706,"samples":3},{"name":"arrayBuffer (1024)","opsSec":725.152750533585,"samples":3},{"name":"slice (0, 64)","opsSec":73567.34427315889,"samples":3},{"name":"slice (0, 512)","opsSec":21484.4212731437,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,621|56|
|[True conditional] Using constructor name|186,488|94|
|[True conditional] Check if property is valid then instanceof |186,795|92|
|[False conditional] Using instanceof only|843,010,413|99|
|[False conditional] Using constructor name|843,350,298|93|
|[False conditional] Check if property is valid then instanceof |845,393,668|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:45:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227620.8549725511,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":186488.24001015464,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":186795.20464174703,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":843010412.9589269,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":843350297.9634844,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845393667.8249674,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,777|95|
|crypto.verify('RSA-SHA256')|6,634|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:46:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6777.491702038741,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6634.48201481491,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,466,589|92|
|fromUnixToISOString(new Date())|2,281,669|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1466588.5407221112,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2281668.6728250654,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,988|82|
|Intl.DateTimeFormat().format(new Date())|16,760|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,599|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,579|82|
|Reusing Intl.DateTimeFormat()|773,430|96|
|Date.toLocaleDateString()|733,582|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,728|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:48:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15987.901077176793,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16759.7129151989,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17598.815672600544,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19579.244480133162,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":773429.841817145,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":733582.0711842473,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17727.96428808991,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,119,526|95|
|Using brackets {}|1,127,972|95|
|Using '' + |1,135,503|97|
|Using date.toString()|1,241,786|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:49:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1119525.7821298533,"samples":6},{"name":"Using brackets {}","opsSec":1127972.0434978097,"samples":4},{"name":"Using '' + ","opsSec":1135503.4884222962,"samples":4},{"name":"Using date.toString()","opsSec":1241786.0561446345,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,791,388|93|
|Using delete property (proto: null)|20,678,411|92|
|Using delete property (cached proto: null)|3,881,707|93|
|Using undefined assignment|847,342,789|95|
|Using undefined assignment (proto: null)|22,936,053|97|
|Using undefined property (cached proto: null)|843,332,271|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3791388.1036514975,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20678410.87383906,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3881706.6801168304,"samples":5},{"name":"Using undefined assignment","opsSec":847342788.5321482,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22936053.012243874,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843332271.0752435,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,361|56|
|NodeError|190,460|96|
|NodeError Range|189,425|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:52:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Error","opsSec":226361.14441945925,"samples":3},{"name":"NodeError","opsSec":190460.44227243637,"samples":3},{"name":"NodeError Range","opsSec":189424.95756936332,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,727,970|94|
|Function returning explicitly undefined|1,724,253|94|
|Function returning implicitly undefined|1,796,492|96|
|Function returning string|1,748,725|95|
|Function returning integer|1,788,767|96|
|Function returning float|1,762,810|96|
|Function returning functions|1,700,840|96|
|Function returning arrow functions|1,730,062|93|
|Function returning empty object|1,779,976|95|
|Function returning empty array|1,762,901|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1727970.4978148441,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1724253.3378660523,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1796491.621021522,"samples":6},{"name":"Function returning string","opsSec":1748725.0220642488,"samples":5},{"name":"Function returning integer","opsSec":1788767.0052299532,"samples":6},{"name":"Function returning float","opsSec":1762809.6603888636,"samples":7},{"name":"Function returning functions","opsSec":1700839.8471186054,"samples":5},{"name":"Function returning arrow functions","opsSec":1730061.6463511707,"samples":4},{"name":"Function returning empty object","opsSec":1779976.4175164849,"samples":6},{"name":"Function returning empty array","opsSec":1762901.16886407,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|857,670,809|98|
|using Array.includes (first item)|854,096,807|93|
|Using raw comparison|847,832,021|97|
|Using raw comparison (first item)|840,776,253|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":857670809.1599735,"samples":9},{"name":"using Array.includes (first item)","opsSec":854096806.5144886,"samples":6},{"name":"Using raw comparison","opsSec":847832020.5644073,"samples":7},{"name":"Using raw comparison (first item)","opsSec":840776253.4506136,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,353,420|93|
|Using Object.getOwnPropertyNames()|94,333,261|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:56:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":93353420.4285434,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":94333260.7665331,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|888,956,742|94|
|Length = 10_000 - Array.at|893,175,888|99|
|Length = 1_000_000 - Array.at|896,976,364|99|
|Length = 100 - Array[length - 1]|785,346,735|94|
|Length = 10_000 - Array[length - 1]|787,764,820|97|
|Length = 1_000_000 - Array[length - 1]|780,563,259|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:57:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":888956742.2858129,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":893175887.5904894,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":896976364.4964765,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":785346734.9315332,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":787764820.253667,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":780563259.3793459,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,774,603|92|
|Object.create({})|2,413,505|82|
|Cached Empty.prototype|841,532,221|99|
|Empty.prototype|2,441,979|87|
|Empty class|1,405,406|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:59:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":84774603.21721475,"samples":5},{"name":"Object.create({})","opsSec":2413505.1002787007,"samples":3},{"name":"Cached Empty.prototype","opsSec":841532221.4716969,"samples":8},{"name":"Empty.prototype","opsSec":2441979.17757374,"samples":5},{"name":"Empty class","opsSec":1405405.7449573213,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|835,545,831|99|
|Using optional chain (obj.field?.field2) (undefined)|835,331,791|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|836,069,219|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|834,559,413|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:00:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":835545830.8180912,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":835331790.7665097,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":836069218.6836102,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":834559412.5879385,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|846,178,591|94|
|Using parseInt(x, 10) - big number (10 len)|846,667,323|98|
|Using + - small number (2 len)|844,034,949|99|
|Using + - big number (10 len)|847,806,512|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:01:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":846178590.6939977,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846667323.383189,"samples":6},{"name":"Using + - small number (2 len)","opsSec":844034949.1108434,"samples":6},{"name":"Using + - big number (10 len)","opsSec":847806511.581959,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,182,099|82|
|Using ? operator to avoid rejection|1,378,880|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using if to check function existence","opsSec":1182098.545613064,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1378879.5265121025,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|837,809,830|99|
|Raw usage underscore usage|840,552,004|96|
|Manipulating private properties using #|834,279,222|98|
|Manipulating private properties using underscore(_)|832,303,637|98|
|Manipulating private properties using Symbol|830,362,990|97|
|Manipulating private properties using PrivateSymbol|50,503,401|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:03:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Raw usage private field","opsSec":837809830.2774006,"samples":7},{"name":"Raw usage underscore usage","opsSec":840552003.967589,"samples":7},{"name":"Manipulating private properties using #","opsSec":834279222.2510769,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":832303637.3131934,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":830362989.629263,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50503400.84618472,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,016,420|96|
|Adding property in the object creation - small object|5,054,878|98|
|Adding property after the function creation - small class|258,426|89|
|Adding property in the function creation - small class|260,119|89|
|Adding property after the class creation - small class|268,331|89|
|Adding property in the class creation - small class|267,422|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5016419.694956264,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":5054878.457449984,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":258426.31999259995,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260118.8335859503,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":268331.46592896857,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":267421.907966488,"samples":6}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|845,803,147|98|
|Getter|88,688,114|96|
|Method|798,912,273|98|
|DefineProperty (getter)|849,901,993|98|
|DefineProperty (getter & enumerable=false)|86,204,464|96|
|DefineProperty (getter & configurable=false)|848,173,224|97|
|DefineProperty (getter & enumerable=false & configurable=false)|89,210,427|97|
|DefineProperty (writable)|847,676,067|99|
|DefineProperty (writable & enumerable=false)|847,309,101|95|
|DefineProperty (writable & enumerable=false & configurable=false)|846,354,388|96|
|DefineProperties (getter)|89,094,667|96|
|DefineProperties (getter & enumerable=false)|88,705,751|98|
|DefineProperties (getter & enumerable=false & configurable=false)|67,131,419|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":845803147.0122418,"samples":6},{"name":"Getter","opsSec":88688114.08085996,"samples":5},{"name":"Method","opsSec":798912272.9052001,"samples":7},{"name":"DefineProperty (getter)","opsSec":849901993.2908306,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":86204463.53542814,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":848173223.8831502,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":89210426.93597564,"samples":6},{"name":"DefineProperty (writable)","opsSec":847676066.9248631,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847309101.1711836,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":846354387.7523081,"samples":7},{"name":"DefineProperties (getter)","opsSec":89094667.26508854,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":88705751.3200447,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67131418.64868568,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|778,136,073|93|
|Setter|11,263,116|93|
|Method|621,952,063|93|
|DefineProperty (setter)|784,277,082|97|
|DefineProperty (setter & enumerable=false)|11,583,866|94|
|DefineProperty (setter & configurable=false)|11,100,188|97|
|DefineProperty (setter & enumerable=false & configurable=false)|11,699,870|95|
|DefineProperty (writable)|783,434,031|94|
|DefineProperty (writable & enumerable=false)|786,217,647|100|
|DefineProperty (writable & enumerable=false & configurable=false)|424,226,082|56|
|DefineProperties (setter)|102,048,834|81|
|DefineProperties (setter & enumerable=false)|10,537,931|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,615,804|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:09:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":778136073.1391925,"samples":5},{"name":"Setter","opsSec":11263116.20888593,"samples":5},{"name":"Method","opsSec":621952062.7606215,"samples":6},{"name":"DefineProperty (setter)","opsSec":784277081.7395037,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11583866.231096502,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11100187.72256073,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11699870.17784133,"samples":6},{"name":"DefineProperty (writable)","opsSec":783434030.5308703,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786217647.3730175,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":424226082.10579896,"samples":6},{"name":"DefineProperties (setter)","opsSec":102048834.20979856,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10537931.264266485,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11615804.231793258,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,298,957|96|
|Using replaceAll()|2,771,996|98|
|Using replaceAll(//g)|3,062,187|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:11:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3298957.24993738,"samples":5},{"name":"Using replaceAll()","opsSec":2771996.4011319648,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3062186.6039855448,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,415,210|90|
|{ ...object, __proto__: null }|26,956,538|93|
|{ ...object, newProp: true }|859,779|85|
|structuredClone|289,403|97|
|JSON.parse + JSON.stringify|174,257|99|
|loop + object.keys starting with {}|1,462,764|97|
|loop + object.keys starting with { __proto__: null }|810,846|96|
|loop + object.keys starting with { randomProp: true }|617,738|93|
|object.keys + reduce(FN, {})|591,417|91|
|object.keys + reduce(FN, { __proto__: null })|792,610|98|
|object.keys + reduce(FN, { newProp: true })|619,668|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:13:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26415210.08414497,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":26956538.48966435,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":859778.8538697894,"samples":3},{"name":"structuredClone","opsSec":289402.8494784316,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174256.74487066251,"samples":8},{"name":"loop + object.keys starting with {}","opsSec":1462764.0533532565,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":810845.6242119513,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":617738.097115379,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":591416.6530786603,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":792610.3241137913,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":619668.2018694625,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|261,667|94|
|Sort using first char|1,401,579|98|
|Sort using localeCompare|1,272,033|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:14:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":261666.64221877078,"samples":4},{"name":"Sort using first char","opsSec":1401579.1423077094,"samples":8},{"name":"Sort using localeCompare","opsSec":1272032.8075476557,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,130|91|
|{...smallObject} - Total keys: 2|103,504,067|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,231|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,209|98|
|{ ...bigObject, ...anotherBigObject }|1,296|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,593,774|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,326,323|97|
|{ ...smallObject, ...anotherSmallObject }|24,955,454|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:15:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2130.245259055448,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":103504067.29540017,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2230.5759285649738,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6209.104669218487,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1295.9007186494339,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13593774.053798413,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37326323.01597121,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24955453.81897754,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,087|86|
|streams.web.Readable reading 1e3 * "some data"|2,499|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:16:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2086.8823092391535,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2499.054142862824,"samples":7}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,043|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,592|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:17:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6042.515513540507,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1592.016621716704,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,329,694|97|
|Using backtick (`)|849,382,652|95|
|Using array.join|11,286,567|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:19:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using + sign","opsSec":847329693.814029,"samples":6},{"name":"Using backtick (`)","opsSec":849382652.0299623,"samples":9},{"name":"Using array.join","opsSec":11286567.324460557,"samples":7}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,177,348|96|
|(short string) (true) String#slice and strict comparison|855,122,908|95|
|(long string) (true) String#endsWith|76,983,121|99|
|(long string) (true) String#slice and strict comparison|858,251,008|100|
|(short string) (false) String#endsWith|98,750,407|97|
|(short string) (false) String#slice and strict comparison|851,218,007|98|
|(long string) (false) String#endsWith|90,024,853|99|
|(long string) (false) String#slice and strict comparison|858,022,375|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81177348.12553892,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":855122907.7698252,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76983121.1744247,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":858251007.8730205,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":98750407.41628405,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":851218007.271222,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":90024853.2071861,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":858022374.9564378,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|844,990,866|95|
|Using indexof|847,317,061|99|
|Using RegExp.test|17,313,008|96|
|Using RegExp.text with cached regex pattern|17,888,824|96|
|Using new RegExp.test|4,585,297|96|
|Using new RegExp.test with cached regex pattern|5,553,933|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:21:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":844990865.767045,"samples":6},{"name":"Using indexof","opsSec":847317061.4250976,"samples":7},{"name":"Using RegExp.test","opsSec":17313008.370021172,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17888823.633109223,"samples":5},{"name":"Using new RegExp.test","opsSec":4585296.609554741,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5553933.314038393,"samples":4}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|299,301,827|89|
|(short string) (true) String#slice and strict comparison|856,166,520|99|
|(long string) (true) String#startsWith|199,198,310|95|
|(long string) (true) String#slice and strict comparison|856,154,473|96|
|(short string) (false) String#startsWith|881,760,592|97|
|(short string) (false) String#slice and strict comparison|852,153,824|99|
|(long string) (false) String#startsWith|872,006,720|92|
|(long string) (false) String#slice and strict comparison|857,325,714|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":299301826.860121,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":856166519.6409274,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":199198309.79338887,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":856154473.2630231,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":881760592.4785908,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":852153824.3334799,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":872006719.8026365,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":857325713.6724315,"samples":8}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|876,498,682|94|
|Using this|838,512,530|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:22:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":876498681.7218424,"samples":6},{"name":"Using this","opsSec":838512529.7108049,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,964,005|92|
|Date.now()|21,368,552|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11964005.42464168,"samples":4},{"name":"Date.now()","opsSec":21368552.060921557,"samples":5}]}-->
