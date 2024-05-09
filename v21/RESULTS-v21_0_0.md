## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,918,909|7959455|
|Using dot notation|16,274,031|8137016|
|Using define property (writable)|3,368,166|1684084|
|Using define property initialized (writable)|4,283,236|2141619|
|Using define property (getter)|2,046,571|1023286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15918909.521784162,"samples":7959455},{"name":"Using dot notation","opsSec":16274031.511116035,"samples":8137016},{"name":"Using define property (writable)","opsSec":3368166.5802367893,"samples":1684084},{"name":"Using define property initialized (writable)","opsSec":4283236.980839131,"samples":2141619},{"name":"Using define property (getter)","opsSec":2046571.9756029607,"samples":1023286}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.099ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|26.878ms
new Array(length)|1,000,000|15.268ms
array.push|100,000,000|1,966.528ms
new Array(length)|100,000,000|4,304.292ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.202ms
array.push|1,000,000|21.994ms
new Array(length)|1,000,000|7.555ms
array.push|100,000,000|2,123.323ms
new Array(length)|100,000,000|4,858.063ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|235|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":235.79524303374603,"samples":118},{"name":"Array.from","opsSec":23.393467005067873,"samples":12}]}-->
