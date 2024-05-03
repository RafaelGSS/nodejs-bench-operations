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
|Using delete property|4,017,069|93|
|Using delete property (proto: null)|20,074,567|98|
|Using delete property (cached proto: null)|4,101,282|96|
|Using undefined assignment|820,671,613|97|
|Using undefined assignment (proto: null)|23,337,966|97|
|Using undefined property (cached proto: null)|819,938,905|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":4017068.5336900013,"samples":6},{"name":"Using delete property (proto: null)","opsSec":20074567.00449739,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4101282.3198311976,"samples":4},{"name":"Using undefined assignment","opsSec":820671613.3719238,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":23337965.848891083,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819938905.4579061,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|244,706|50|
|NodeError|199,776|91|
|NodeError Range|202,116|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":244706.0016825938,"samples":3},{"name":"NodeError","opsSec":199775.78103593463,"samples":3},{"name":"NodeError Range","opsSec":202116.2767573522,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,903,949|97|
|Function returning explicitly undefined|1,886,634|95|
|Function returning implicitly undefined|1,905,564|90|
|Function returning string|1,861,707|90|
|Function returning integer|1,908,728|97|
|Function returning float|1,916,062|96|
|Function returning functions|1,845,524|93|
|Function returning arrow functions|1,857,974|95|
|Function returning empty object|1,875,594|96|
|Function returning empty array|1,908,096|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1903949.396886907,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1886633.6227991562,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1905563.7044934437,"samples":5},{"name":"Function returning string","opsSec":1861706.5838029354,"samples":4},{"name":"Function returning integer","opsSec":1908728.2466160324,"samples":6},{"name":"Function returning float","opsSec":1916062.2229818252,"samples":4},{"name":"Function returning functions","opsSec":1845524.4133406545,"samples":6},{"name":"Function returning arrow functions","opsSec":1857973.9920842866,"samples":5},{"name":"Function returning empty object","opsSec":1875594.279444251,"samples":5},{"name":"Function returning empty array","opsSec":1908096.3098239903,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|818,300,882|93|
|using Array.includes (first item)|819,701,364|97|
|Using raw comparison|820,415,245|96|
|Using raw comparison (first item)|821,583,610|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":818300882.1203499,"samples":7},{"name":"using Array.includes (first item)","opsSec":819701363.9498702,"samples":6},{"name":"Using raw comparison","opsSec":820415244.9803745,"samples":7},{"name":"Using raw comparison (first item)","opsSec":821583610.3157591,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,960,919|90|
|Using Object.getOwnPropertyNames()|89,577,180|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":89960918.53471947,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89577179.59735303,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|869,574,480|94|
|Length = 10_000 - Array.at|867,003,133|95|
|Length = 1_000_000 - Array.at|866,091,187|97|
|Length = 100 - Array[length - 1]|819,197,999|95|
|Length = 10_000 - Array[length - 1]|818,414,434|95|
|Length = 1_000_000 - Array[length - 1]|817,846,006|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":869574480.2461538,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":867003133.2834563,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":866091186.5296108,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":819197998.7777965,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":818414433.8758073,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":817846005.9767864,"samples":9}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,764,239|92|
|Object.create({})|2,522,876|83|
|Cached Empty.prototype|821,415,117|98|
|Empty.prototype|2,491,781|84|
|Empty class|1,514,630|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":82764239.07007892,"samples":5},{"name":"Object.create({})","opsSec":2522875.579246617,"samples":3},{"name":"Cached Empty.prototype","opsSec":821415117.373989,"samples":8},{"name":"Empty.prototype","opsSec":2491780.6722673103,"samples":3},{"name":"Empty class","opsSec":1514629.8212119772,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,987,511|99|
|Using optional chain (obj.field?.field2) (undefined)|824,043,221|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|823,297,455|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|823,457,755|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822987511.1280771,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":824043221.2607731,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":823297455.4797908,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":823457754.9614247,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,772,945|98|
|Using parseInt(x, 10) - big number (10 len)|823,641,441|95|
|Using + - small number (2 len)|823,505,697|94|
|Using + - big number (10 len)|823,491,820|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822772944.6580621,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823641440.957767,"samples":8},{"name":"Using + - small number (2 len)","opsSec":823505697.080757,"samples":7},{"name":"Using + - big number (10 len)","opsSec":823491819.6718252,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,335,051|83|
|Using ? operator to avoid rejection|1,355,498|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using if to check function existence","opsSec":1335051.2432839805,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1355497.771665687,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|816,928,425|93|
|Raw usage underscore usage|816,512,209|97|
|Manipulating private properties using #|807,847,422|98|
|Manipulating private properties using underscore(_)|810,403,157|97|
|Manipulating private properties using Symbol|809,643,410|95|
|Manipulating private properties using PrivateSymbol|49,289,663|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":816928425.1855978,"samples":6},{"name":"Raw usage underscore usage","opsSec":816512208.9831954,"samples":8},{"name":"Manipulating private properties using #","opsSec":807847422.1672183,"samples":10},{"name":"Manipulating private properties using underscore(_)","opsSec":810403156.6072079,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":809643410.0405134,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49289662.99536367,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,169,414|93|
|Adding property in the object creation - small object|5,211,137|96|
|Adding property after the function creation - small class|261,935|88|
|Adding property in the function creation - small class|266,664|91|
|Adding property after the class creation - small class|266,137|87|
|Adding property in the class creation - small class|265,295|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5169414.180866168,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5211136.628673651,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":261934.8825642275,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":266664.04533455404,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":266136.7574367197,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":265294.56875323656,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|798,794,094|95|
|Getter|92,245,506|95|
|Method|822,255,608|96|
|DefineProperty (getter)|820,778,422|97|
|DefineProperty (getter & enumerable=false)|91,804,656|98|
|DefineProperty (getter & configurable=false)|822,353,337|96|
|DefineProperty (getter & enumerable=false & configurable=false)|92,180,113|97|
|DefineProperty (writable)|822,925,828|97|
|DefineProperty (writable & enumerable=false)|822,786,970|93|
|DefineProperty (writable & enumerable=false & configurable=false)|823,216,480|98|
|DefineProperties (getter)|92,427,336|97|
|DefineProperties (getter & enumerable=false)|92,379,346|99|
|DefineProperties (getter & enumerable=false & configurable=false)|64,343,862|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":798794094.334074,"samples":6},{"name":"Getter","opsSec":92245505.86002871,"samples":6},{"name":"Method","opsSec":822255608.488657,"samples":6},{"name":"DefineProperty (getter)","opsSec":820778421.5567359,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91804656.02632199,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":822353337.1830765,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92180112.70444079,"samples":6},{"name":"DefineProperty (writable)","opsSec":822925828.3625282,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":822786970.231401,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823216480.3688585,"samples":6},{"name":"DefineProperties (getter)","opsSec":92427336.07400917,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":92379345.57053858,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64343862.46504556,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|767,482,045|96|
|Setter|12,447,449|94|
|Method|777,488,084|96|
|DefineProperty (setter)|755,175,888|94|
|DefineProperty (setter & enumerable=false)|12,377,748|94|
|DefineProperty (setter & configurable=false)|12,434,935|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,373,770|95|
|DefineProperty (writable)|781,623,859|99|
|DefineProperty (writable & enumerable=false)|783,725,712|97|
|DefineProperty (writable & enumerable=false & configurable=false)|782,649,337|98|
|DefineProperties (setter)|783,245,868|99|
|DefineProperties (setter & enumerable=false)|12,455,255|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,417,395|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:08:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":767482045.4953654,"samples":5},{"name":"Setter","opsSec":12447449.486412486,"samples":5},{"name":"Method","opsSec":777488084.3957238,"samples":6},{"name":"DefineProperty (setter)","opsSec":755175887.969131,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12377748.34978412,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12434935.225842612,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12373770.128823284,"samples":4},{"name":"DefineProperty (writable)","opsSec":781623858.7607074,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783725711.8135378,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":782649336.7645162,"samples":6},{"name":"DefineProperties (setter)","opsSec":783245868.0389146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12455255.38146559,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11417394.753152201,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,276,023|95|
|Using replaceAll()|2,949,450|95|
|Using replaceAll(//g)|3,022,837|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3276022.912993343,"samples":4},{"name":"Using replaceAll()","opsSec":2949449.9506338956,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3022837.3565603136,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,230,391|92|
|{ ...object, __proto__: null }|2,504,064|95|
|{ ...object, newProp: true }|27,796,549|95|
|structuredClone|258,247|94|
|JSON.parse + JSON.stringify|234,140|97|
|loop + object.keys starting with {}|1,472,067|95|
|loop + object.keys starting with { __proto__: null }|785,911|94|
|loop + object.keys starting with { randomProp: true }|637,641|93|
|object.keys + reduce(FN, {})|615,156|94|
|object.keys + reduce(FN, { __proto__: null })|803,886|91|
|object.keys + reduce(FN, { newProp: true })|637,076|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":30230390.85454098,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":2504064.0610758387,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":27796549.224317282,"samples":6},{"name":"structuredClone","opsSec":258246.7470602631,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":234139.74634877805,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1472067.4533420578,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":785910.5669302178,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":637640.7368025064,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":615156.3953766535,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":803886.0964072663,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":637075.5013332972,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|311,138|94|
|Sort using first char|1,409,314|98|
|Sort using localeCompare|1,287,091|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Sort using default","opsSec":311138.1521655483,"samples":4},{"name":"Sort using first char","opsSec":1409313.9459605892,"samples":6},{"name":"Sort using localeCompare","opsSec":1287091.3010009604,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,013|90|
|{...smallObject} - Total keys: 2|112,783,262|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,222|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,246|99|
|{ ...bigObject, ...anotherBigObject }|1,265|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,707,044|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,824,021|97|
|{ ...smallObject, ...anotherSmallObject }|24,592,468|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2013.3496995792532,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":112783262.11434326,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.6484758080114,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6246.294571543984,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.1323621429199,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14707043.672033217,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36824020.637436315,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24592468.15548503,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,420|84|
|streams.web.Readable reading 1e3 * "some data"|2,736|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2420.4699584261734,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2735.5025701838354,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,027|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,450|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6026.506064107692,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1450.2973680514704,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|820,975,114|96|
|Using backtick (`)|820,704,190|94|
|Using array.join|11,013,866|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":820975114.4725837,"samples":6},{"name":"Using backtick (`)","opsSec":820704189.7271084,"samples":7},{"name":"Using array.join","opsSec":11013866.120594366,"samples":6}]}-->

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
