## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,878,269|10439135|
|Using dot notation|21,038,102|10519052|
|Using define property (writable)|3,748,686|1874343|
|Using define property initialized (writable)|4,388,762|2194382|
|Using define property (getter)|2,143,459|1071730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20878269.203557234,"samples":10439135},{"name":"Using dot notation","opsSec":21038102.414983664,"samples":10519052},{"name":"Using define property (writable)","opsSec":3748686,"samples":1874343},{"name":"Using define property initialized (writable)","opsSec":4388762.248389243,"samples":2194382},{"name":"Using define property (getter)","opsSec":2143459.169048164,"samples":1071730}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.413ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|17.185ms
array.push|100,000,000|2,134.263ms
new Array(length)|100,000,000|4,208.388ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.483ms
new Array(length)|10,000|3.032ms
array.push|1,000,000|256.678ms
new Array(length)|1,000,000|4.599ms
array.push|100,000,000|2,624ms
new Array(length)|100,000,000|4,636.513ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1587820890989,"samples":114},{"name":"Array.from","opsSec":21.84401017792516,"samples":11}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|311,807|155904|
|[True conditional] Using constructor name|309,804|154903|
|[True conditional] Check if property is valid then instanceof |315,328|157665|
|[False conditional] Using instanceof only|14,896,004|7448003|
|[False conditional] Using constructor name|21,040,787|10520394|
|[False conditional] Check if property is valid then instanceof |21,002,126|10501064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":311807.0520087416,"samples":155904},{"name":"[True conditional] Using constructor name","opsSec":309804.1096966802,"samples":154903},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315328.1280159026,"samples":157665},{"name":"[False conditional] Using instanceof only","opsSec":14896004.955863604,"samples":7448003},{"name":"[False conditional] Using constructor name","opsSec":21040787.297687955,"samples":10520394},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":21002126.417694103,"samples":10501064}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,280|1641|
|crypto.verify('RSA-SHA256')|3,406|1704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3280.8655629852565,"samples":1641},{"name":"crypto.verify('RSA-SHA256')","opsSec":3406.3462145208177,"samples":1704}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,081|517041|
|Using brackets {}|1,051,916|525959|
|Using '' + |1,060,874|530438|
|Using date.toString()|1,153,588|576795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1034081.2707222941,"samples":517041},{"name":"Using brackets {}","opsSec":1051916.4154682367,"samples":525959},{"name":"Using '' + ","opsSec":1060874.4813951524,"samples":530438},{"name":"Using date.toString()","opsSec":1153588.6495684935,"samples":576795}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,194,960|1597481|
|Using delete property (proto: null)|9,695,948|4847975|
|Using delete property (cached proto: null)|3,190,218|1595110|
|Using undefined assignment|21,056,912|10528457|
|Using undefined assignment (proto: null)|10,328,303|5164152|
|Using undefined property (cached proto: null)|20,979,719|10489860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3194960.6806698083,"samples":1597481},{"name":"Using delete property (proto: null)","opsSec":9695948.317086607,"samples":4847975},{"name":"Using delete property (cached proto: null)","opsSec":3190218.451403435,"samples":1595110},{"name":"Using undefined assignment","opsSec":21056912.564177275,"samples":10528457},{"name":"Using undefined assignment (proto: null)","opsSec":10328303.06426545,"samples":5164152},{"name":"Using undefined property (cached proto: null)","opsSec":20979719.589839697,"samples":10489860}]}-->
