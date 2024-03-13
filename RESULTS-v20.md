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
|Using parseInt(x, 10) - small number (2 len)|843,527,584|96|
|Using parseInt(x, 10) - big number (10 len)|847,799,123|94|
|Using + - small number (2 len)|839,965,047|94|
|Using + - big number (10 len)|844,478,215|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:56:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":843527584.0068868,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":847799123.0711502,"samples":8},{"name":"Using + - small number (2 len)","opsSec":839965046.5321611,"samples":6},{"name":"Using + - big number (10 len)","opsSec":844478215.3293875,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,257,752|81|
|Using ? operator to avoid rejection|1,351,514|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1257751.8371789022,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1351514.3607365096,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|838,594,621|92|
|Raw usage underscore usage|838,847,164|98|
|Manipulating private properties using #|825,142,577|94|
|Manipulating private properties using underscore(_)|829,304,552|96|
|Manipulating private properties using Symbol|830,581,405|96|
|Manipulating private properties using PrivateSymbol|50,300,171|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Raw usage private field","opsSec":838594620.8969408,"samples":6},{"name":"Raw usage underscore usage","opsSec":838847164.1094265,"samples":8},{"name":"Manipulating private properties using #","opsSec":825142577.2741971,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":829304551.9120659,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":830581404.5183375,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50300171.326380916,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,200,886|96|
|Adding property in the object creation - small object|5,212,616|96|
|Adding property after the function creation - small class|261,592|88|
|Adding property in the function creation - small class|263,650|90|
|Adding property after the class creation - small class|270,967|88|
|Adding property in the class creation - small class|269,411|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5200885.8435557475,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5212616.349527022,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":261592.42530582345,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":263649.74209575774,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":270967.36829033133,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":269410.8468875907,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|843,194,883|96|
|Getter|88,864,122|94|
|Method|812,882,718|95|
|DefineProperty (getter)|840,221,593|96|
|DefineProperty (getter & enumerable=false)|87,928,437|93|
|DefineProperty (getter & configurable=false)|839,306,389|96|
|DefineProperty (getter & enumerable=false & configurable=false)|88,274,163|98|
|DefineProperty (writable)|839,833,692|98|
|DefineProperty (writable & enumerable=false)|838,975,314|94|
|DefineProperty (writable & enumerable=false & configurable=false)|843,431,549|95|
|DefineProperties (getter)|87,863,083|96|
|DefineProperties (getter & enumerable=false)|87,964,787|96|
|DefineProperties (getter & enumerable=false & configurable=false)|65,951,164|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":843194883.1220034,"samples":5},{"name":"Getter","opsSec":88864122.37305355,"samples":6},{"name":"Method","opsSec":812882717.7442017,"samples":7},{"name":"DefineProperty (getter)","opsSec":840221592.9656763,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":87928437.2581641,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":839306388.6512752,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":88274162.64672428,"samples":5},{"name":"DefineProperty (writable)","opsSec":839833692.0690151,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":838975314.3866265,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":843431549.4528241,"samples":7},{"name":"DefineProperties (getter)","opsSec":87863082.87876928,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":87964787.22690044,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":65951164.159100324,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|780,265,618|98|
|Setter|11,625,220|96|
|Method|629,668,332|98|
|DefineProperty (setter)|753,092,053|97|
|DefineProperty (setter & enumerable=false)|11,707,647|93|
|DefineProperty (setter & configurable=false)|11,947,832|96|
|DefineProperty (setter & enumerable=false & configurable=false)|10,579,456|91|
|DefineProperty (writable)|787,346,172|97|
|DefineProperty (writable & enumerable=false)|786,405,130|98|
|DefineProperty (writable & enumerable=false & configurable=false)|786,532,588|97|
|DefineProperties (setter)|677,155,181|79|
|DefineProperties (setter & enumerable=false)|11,590,446|94|
|DefineProperties (setter & enumerable=false & configurable=false)|11,267,341|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":780265618.2845942,"samples":6},{"name":"Setter","opsSec":11625219.50490076,"samples":6},{"name":"Method","opsSec":629668332.3087596,"samples":7},{"name":"DefineProperty (setter)","opsSec":753092053.4439439,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11707647.312761186,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11947831.599039456,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10579456.48488755,"samples":6},{"name":"DefineProperty (writable)","opsSec":787346171.5638114,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786405130.0551926,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786532588.3733943,"samples":7},{"name":"DefineProperties (setter)","opsSec":677155181.0226498,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11590446.004983978,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11267340.750191545,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,314,726|95|
|Using replaceAll()|2,737,766|94|
|Using replaceAll(//g)|2,960,462|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3314725.9291471206,"samples":9},{"name":"Using replaceAll()","opsSec":2737765.5385621316,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2960461.982306028,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,882,858|93|
|{ ...object, __proto__: null }|27,313,915|95|
|{ ...object, newProp: true }|908,876|90|
|structuredClone|287,635|95|
|JSON.parse + JSON.stringify|174,817|97|
|loop + object.keys starting with {}|1,446,735|92|
|loop + object.keys starting with { __proto__: null }|795,422|97|
|loop + object.keys starting with { randomProp: true }|615,791|96|
|object.keys + reduce(FN, {})|583,464|97|
|object.keys + reduce(FN, { __proto__: null })|798,068|97|
|object.keys + reduce(FN, { newProp: true })|622,363|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":25882858.23892322,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27313914.777105942,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":908875.6742472594,"samples":3},{"name":"structuredClone","opsSec":287635.1253061397,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174817.28186450552,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1446735.2749361994,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":795421.5530407667,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":615791.1312792045,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":583463.7405028443,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":798068.1025599233,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":622362.6389294681,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|266,859|96|
|Sort using first char|1,380,984|93|
|Sort using localeCompare|1,260,500|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":266858.8482951087,"samples":4},{"name":"Sort using first char","opsSec":1380983.7538407417,"samples":5},{"name":"Sort using localeCompare","opsSec":1260499.8134790377,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,037|94|
|{...smallObject} - Total keys: 2|101,952,047|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,185|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,131|98|
|{ ...bigObject, ...anotherBigObject }|1,260|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,472,836|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,368,050|96|
|{ ...smallObject, ...anotherSmallObject }|24,783,845|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:20:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2037.1889790563246,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":101952047.33709577,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2185.0636150872483,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6130.609812015646,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1260.3239715946236,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13472835.911090765,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37368049.985463925,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24783845.206063114,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,117|87|
|streams.web.Readable reading 1e3 * "some data"|2,353|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2117.387492085892,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2353.0450425372946,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,844|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,480|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5844.132479444871,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1479.6167451704491,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,032,517|97|
|Using backtick (`)|846,024,075|99|
|Using array.join|11,435,844|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":847032516.5327439,"samples":8},{"name":"Using backtick (`)","opsSec":846024074.787661,"samples":6},{"name":"Using array.join","opsSec":11435844.056763439,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,420,364|92|
|Using indexof|846,025,370|98|
|Using RegExp.test|17,286,974|91|
|Using RegExp.text with cached regex pattern|17,895,927|97|
|Using new RegExp.test|4,575,189|97|
|Using new RegExp.test with cached regex pattern|5,550,607|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":845420364.2812369,"samples":6},{"name":"Using indexof","opsSec":846025369.7977393,"samples":7},{"name":"Using RegExp.test","opsSec":17286973.569263462,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17895927.415573806,"samples":5},{"name":"Using new RegExp.test","opsSec":4575189.267935968,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5550606.716551011,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|889,115,602|99|
|Using this|839,309,739|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using super","opsSec":889115601.8169855,"samples":7},{"name":"Using this","opsSec":839309738.6311201,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,983,225|93|
|Date.now()|21,380,138|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().getTime()","opsSec":11983224.779789722,"samples":5},{"name":"Date.now()","opsSec":21380138.492199305,"samples":5}]}-->
