## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,474,013|96|
|Using dot notation|596,079,743|95|
|Using define property (writable)|2,647,598|96|
|Using define property initialized (writable)|3,462,715|95|
|Using define property (getter)|1,407,888|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591474012.7384559,"samples":6},{"name":"Using dot notation","opsSec":596079742.7008108,"samples":6},{"name":"Using define property (writable)","opsSec":2647597.84386132,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3462714.5357824177,"samples":5},{"name":"Using define property (getter)","opsSec":1407888.025319229,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.003ms
array.push|100|0.036ms
new Array(length)|100|0.011ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.568ms
array.push|1,000,000|39.531ms
new Array(length)|1,000,000|9.656ms
array.push|100,000,000|2,052.482ms
new Array(length)|100,000,000|5,831.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.02ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.416ms
new Array(length)|10,000|0.439ms
array.push|1,000,000|30.719ms
new Array(length)|1,000,000|5.774ms
array.push|100,000,000|2,199.721ms
new Array(length)|100,000,000|5,960.651ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|320|81|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":320.1380734584321,"samples":5},{"name":"Array.from","opsSec":16.059831738252115,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,800|81|
|new Blob (1024)|379|66|
|text (128)|3,010|79|
|text (1024)|389|78|
|arrayBuffer (128)|3,039|82|
|arrayBuffer (1024)|387|81|
|slice (0, 64)|37,360|64|
|slice (0, 512)|10,812|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2800.177702631949,"samples":3},{"name":"new Blob (1024)","opsSec":378.7273947485891,"samples":2},{"name":"text (128)","opsSec":3010.072479340216,"samples":4},{"name":"text (1024)","opsSec":388.81848918816985,"samples":2},{"name":"arrayBuffer (128)","opsSec":3039.1856191172606,"samples":4},{"name":"arrayBuffer (1024)","opsSec":386.98008929393563,"samples":2},{"name":"slice (0, 64)","opsSec":37359.90329147215,"samples":4},{"name":"slice (0, 512)","opsSec":10811.981482266869,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,320|62|
|[True conditional] Using constructor name|147,048|95|
|[True conditional] Check if property is valid then instanceof |148,326|96|
|[False conditional] Using instanceof only|718,306,226|96|
|[False conditional] Using constructor name|717,501,939|94|
|[False conditional] Check if property is valid then instanceof |718,967,558|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181319.67023824682,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":147047.94090217812,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148326.1491487359,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":718306226.1584672,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":717501938.6842595,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718967557.7443843,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,288|83|
|crypto.verify('RSA-SHA256')|3,504|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3287.5270011181387,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3504.316536143563,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,079,499|98|
|fromUnixToISOString(new Date())|1,612,949|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1079499.490225639,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1612949.4240480254,"samples":7}]}-->
