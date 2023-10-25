## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|681,319,762|84|
|Using dot notation|567,425,709|85|
|Using define property (writable)|2,197,009|84|
|Using define property initialized (writable)|2,807,326|84|
|Using define property (getter)|1,145,724|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Directly in the object","opsSec":681319762.4920262,"samples":6},{"name":"Using dot notation","opsSec":567425708.7501862,"samples":6},{"name":"Using define property (writable)","opsSec":2197009.0049782726,"samples":4},{"name":"Using define property initialized (writable)","opsSec":2807325.6213765433,"samples":6},{"name":"Using define property (getter)","opsSec":1145723.6058260226,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.052ms
new Array(length)|100|0.015ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.613ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|58.076ms
new Array(length)|1,000,000|9.245ms
array.push|100,000,000|2,597.446ms
new Array(length)|100,000,000|6,286.69ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.024ms
array.push|100|0.021ms
new Array(length)|100|0.029ms
array.push|1,000|0.091ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.817ms
new Array(length)|10,000|5.769ms
array.push|1,000,000|444.501ms
new Array(length)|1,000,000|5.627ms
array.push|100,000,000|3,237.38ms
new Array(length)|100,000,000|7,044.537ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|261|75|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":261.3788788354439,"samples":4},{"name":"Array.from","opsSec":12.854500885348575,"samples":1}]}-->
