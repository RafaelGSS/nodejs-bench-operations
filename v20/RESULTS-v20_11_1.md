## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,367,488|97|
|Using dot notation|846,421,153|99|
|Using define property (writable)|4,125,919|97|
|Using define property initialized (writable)|6,347,504|96|
|Using define property (getter)|2,500,459|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":847367488.4391268,"samples":6},{"name":"Using dot notation","opsSec":846421152.9888067,"samples":6},{"name":"Using define property (writable)","opsSec":4125918.7905529486,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6347503.550266142,"samples":5},{"name":"Using define property (getter)","opsSec":2500458.648157595,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.487ms
array.push|1,000,000|28.773ms
new Array(length)|1,000,000|6.424ms
array.push|100,000,000|1,097.994ms
new Array(length)|100,000,000|3,539.986ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.239ms
new Array(length)|10,000|0.174ms
array.push|1,000,000|20.478ms
new Array(length)|1,000,000|2.722ms
array.push|100,000,000|1,327.184ms
new Array(length)|100,000,000|3,515.38ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|577|82|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":577.2280433464429,"samples":3},{"name":"Array.from","opsSec":20.985733512543536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,864,967|95|
|[async] async function|17,754,571|86|
|[async] function|182,507|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846864967.2407211,"samples":7},{"name":"[async] async function","opsSec":17754571.47143125,"samples":6},{"name":"[async] function","opsSec":182507.42247259212,"samples":3}]}-->
