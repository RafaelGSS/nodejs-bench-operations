## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,092,271|8046136|
|Using dot notation|16,135,624|8067813|
|Using define property (writable)|3,570,694|1785348|
|Using define property initialized (writable)|4,444,962|2222482|
|Using define property (getter)|2,317,808|1160907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Directly in the object","opsSec":16092271.388489142,"samples":8046136},{"name":"Using dot notation","opsSec":16135624.902834367,"samples":8067813},{"name":"Using define property (writable)","opsSec":3570694.7145425826,"samples":1785348},{"name":"Using define property initialized (writable)","opsSec":4444962.950998414,"samples":2222482},{"name":"Using define property (getter)","opsSec":2317808.7800722,"samples":1160907}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.317ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|22.417ms
new Array(length)|1,000,000|15.714ms
array.push|100,000,000|2,036.852ms
new Array(length)|100,000,000|4,238.187ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.504ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|16.294ms
new Array(length)|1,000,000|6.814ms
array.push|100,000,000|2,645.177ms
new Array(length)|100,000,000|4,189.174ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|242|122|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:12:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Array","opsSec":242.8476645184843,"samples":122},{"name":"Array.from","opsSec":23.714038949384104,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,460|3231|
|new Blob (1024)|793|397|
|text (128)|6,379|3190|
|text (1024)|812|407|
|arrayBuffer (128)|6,508|3255|
|arrayBuffer (1024)|809|405|
|slice (0, 64)|233,246|116624|
|slice (0, 512)|42,180|21091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:13:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":6460.842346268459,"samples":3231},{"name":"new Blob (1024)","opsSec":793.8009940907792,"samples":397},{"name":"text (128)","opsSec":6379.490049083555,"samples":3190},{"name":"text (1024)","opsSec":812.3722140503185,"samples":407},{"name":"arrayBuffer (128)","opsSec":6508.30916731152,"samples":3255},{"name":"arrayBuffer (1024)","opsSec":809.2990094769671,"samples":405},{"name":"slice (0, 64)","opsSec":233246.955520094,"samples":116624},{"name":"slice (0, 512)","opsSec":42180.55599085148,"samples":21091}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|334,413|167207|
|[True conditional] Using constructor name|324,701|162351|
|[True conditional] Check if property is valid then instanceof |334,429|167215|
|[False conditional] Using instanceof only|16,151,322|8075662|
|[False conditional] Using constructor name|16,026,072|8013037|
|[False conditional] Check if property is valid then instanceof |16,150,461|8075231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:14:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":334413.9819416551,"samples":167207},{"name":"[True conditional] Using constructor name","opsSec":324701.3603383026,"samples":162351},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334429.0803200125,"samples":167215},{"name":"[False conditional] Using instanceof only","opsSec":16151322.22339761,"samples":8075662},{"name":"[False conditional] Using constructor name","opsSec":16026072.205056304,"samples":8013037},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16150461.547758074,"samples":8075231}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,187|3594|
|crypto.verify('RSA-SHA256')|7,173|3587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:15:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7187.125729277791,"samples":3594},{"name":"crypto.verify('RSA-SHA256')","opsSec":7173.362331128854,"samples":3587}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,373,918|686960|
|fromUnixToISOString(new Date())|1,979,261|989631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:16:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1373918.0792624953,"samples":686960},{"name":"fromUnixToISOString(new Date())","opsSec":1979261.8495765075,"samples":989631}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,346|506674|
|Using brackets {}|1,022,476|511239|
|Using '' + |1,049,257|524629|
|Using date.toString()|1,150,477|575239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:18:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using String()","opsSec":1013346.5083541025,"samples":506674},{"name":"Using brackets {}","opsSec":1022476.681005055,"samples":511239},{"name":"Using '' + ","opsSec":1049257.645351052,"samples":524629},{"name":"Using date.toString()","opsSec":1150477.7975160368,"samples":575239}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,210,889|1605445|
|Using delete property (proto: null)|7,880,019|3940010|
|Using delete property (cached proto: null)|3,245,808|1622905|
|Using undefined assignment|15,852,639|7926320|
|Using undefined assignment (proto: null)|8,200,137|4100069|
|Using undefined property (cached proto: null)|15,504,516|7752259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:18:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using delete property","opsSec":3210889.267915478,"samples":1605445},{"name":"Using delete property (proto: null)","opsSec":7880019.605993748,"samples":3940010},{"name":"Using delete property (cached proto: null)","opsSec":3245808.51990504,"samples":1622905},{"name":"Using undefined assignment","opsSec":15852639.017132502,"samples":7926320},{"name":"Using undefined assignment (proto: null)","opsSec":8200137.097968743,"samples":4100069},{"name":"Using undefined property (cached proto: null)","opsSec":15504516.294541946,"samples":7752259}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|311,972|155987|
|NodeError|314,769|157385|
|NodeError Range|315,260|157631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:19:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Error","opsSec":311972.633559875,"samples":155987},{"name":"NodeError","opsSec":314769.4932211209,"samples":157385},{"name":"NodeError Range","opsSec":315260.73895705957,"samples":157631}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,655,580|827791|
|Function returning explicitly undefined|1,602,425|801213|
|Function returning implicitly undefined|1,615,001|807501|
|Function returning string|1,599,019|799510|
|Function returning integer|1,635,316|817662|
|Function returning float|1,623,487|811744|
|Function returning functions|1,608,193|804097|
|Function returning arrow functions|1,636,121|818061|
|Function returning empty object|1,645,737|822870|
|Function returning empty array|1,642,171|821086|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:20:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Function returning null","opsSec":1655580.1623059562,"samples":827791},{"name":"Function returning explicitly undefined","opsSec":1602425.9679507674,"samples":801213},{"name":"Function returning implicitly undefined","opsSec":1615001.144049001,"samples":807501},{"name":"Function returning string","opsSec":1599019.9360366154,"samples":799510},{"name":"Function returning integer","opsSec":1635316.0719853947,"samples":817662},{"name":"Function returning float","opsSec":1623487.7077699166,"samples":811744},{"name":"Function returning functions","opsSec":1608193.9131575695,"samples":804097},{"name":"Function returning arrow functions","opsSec":1636121.6367810431,"samples":818061},{"name":"Function returning empty object","opsSec":1645737.9954905568,"samples":822870},{"name":"Function returning empty array","opsSec":1642171.155923107,"samples":821086}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,745,057|7372529|
|using Array.includes (first item)|15,182,931|7591466|
|Using raw comparison|16,152,475|8076238|
|Using raw comparison (first item)|16,041,805|8020903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:21:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"using Array.includes","opsSec":14745057.439678483,"samples":7372529},{"name":"using Array.includes (first item)","opsSec":15182931.362314956,"samples":7591466},{"name":"Using raw comparison","opsSec":16152475.095464675,"samples":8076238},{"name":"Using raw comparison (first item)","opsSec":16041805.999994399,"samples":8020903}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,935,003|6967502|
|Using Object.getOwnPropertyNames()|13,947,912|6973957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:22:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13935003.999995891,"samples":6967502},{"name":"Using Object.getOwnPropertyNames()","opsSec":13947912.549436064,"samples":6973957}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,766,252|7883127|
|Length = 10_000 - Array.at|15,764,748|7882375|
|Length = 1_000_000 - Array.at|15,881,509|7940755|
|Length = 100 - Array[length - 1]|15,991,144|7995573|
|Length = 10_000 - Array[length - 1]|15,990,140|7995071|
|Length = 1_000_000 - Array[length - 1]|15,987,786|7993894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15766252.45490053,"samples":7883127},{"name":"Length = 10_000 - Array.at","opsSec":15764748.991059825,"samples":7882375},{"name":"Length = 1_000_000 - Array.at","opsSec":15881509.237614444,"samples":7940755},{"name":"Length = 100 - Array[length - 1]","opsSec":15991144.496895902,"samples":7995573},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15990140.97665006,"samples":7995071},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15987786.944704153,"samples":7993894}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,947,407|6473704|
|Object.create({})|1,905,929|952965|
|Cached Empty.prototype|16,001,405|8000703|
|Empty.prototype|2,517,862|1267986|
|Empty class|1,503,754|751878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12947407.87052884,"samples":6473704},{"name":"Object.create({})","opsSec":1905929.5235179707,"samples":952965},{"name":"Cached Empty.prototype","opsSec":16001405.839980504,"samples":8000703},{"name":"Empty.prototype","opsSec":2517862.470568615,"samples":1267986},{"name":"Empty class","opsSec":1503754.604514571,"samples":751878}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,029,000|8014501|
|Using optional chain (obj.field?.field2) (undefined)|16,111,045|8055523|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,113,602|8056802|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,120,374|8060188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:25:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16029000.813843086,"samples":8014501},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16111045.80669801,"samples":8055523},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16113602.453129107,"samples":8056802},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16120374.130103644,"samples":8060188}]}-->
