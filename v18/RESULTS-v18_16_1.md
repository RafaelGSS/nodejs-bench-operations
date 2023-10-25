## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|570,659,597|92|
|Using dot notation|585,830,378|92|
|Using define property (writable)|2,410,346|95|
|Using define property initialized (writable)|3,040,983|94|
|Using define property (getter)|1,267,524|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":570659597.1228856,"samples":7},{"name":"Using dot notation","opsSec":585830378.0294738,"samples":8},{"name":"Using define property (writable)","opsSec":2410345.531767152,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3040983.3671818683,"samples":6},{"name":"Using define property (getter)","opsSec":1267524.487084279,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.01ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.384ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|40.832ms
new Array(length)|1,000,000|7.033ms
array.push|100,000,000|1,551.469ms
new Array(length)|100,000,000|4,366.957ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.601ms
new Array(length)|10,000|4.34ms
array.push|1,000,000|319.931ms
new Array(length)|1,000,000|4.054ms
array.push|100,000,000|2,190.372ms
new Array(length)|100,000,000|4,821.431ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|69|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":308.9086504676448,"samples":5},{"name":"Array.from","opsSec":14.55278821404406,"samples":1}]}-->
