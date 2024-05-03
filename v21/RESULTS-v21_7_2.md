## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,176,634|97|
|Using dot notation|911,858,323|99|
|Using define property (writable)|4,763,846|97|
|Using define property initialized (writable)|7,071,793|94|
|Using define property (getter)|2,785,968|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912176634.4410051,"samples":6},{"name":"Using dot notation","opsSec":911858323.3457873,"samples":6},{"name":"Using define property (writable)","opsSec":4763846.362880353,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7071792.984144087,"samples":4},{"name":"Using define property (getter)","opsSec":2785967.849058611,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.094ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|29.557ms
new Array(length)|1,000,000|7.969ms
array.push|100,000,000|1,962.148ms
new Array(length)|100,000,000|4,314.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.306ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|21.916ms
new Array(length)|1,000,000|7.309ms
array.push|100,000,000|2,083.417ms
new Array(length)|100,000,000|4,915.579ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.24651601448107,"samples":2},{"name":"Array.from","opsSec":23.261679866019588,"samples":2}]}-->
