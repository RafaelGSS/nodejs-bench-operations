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
