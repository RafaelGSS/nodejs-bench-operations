## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|699,133,184|90|
|Using dot notation|583,727,198|89|
|Using define property (writable)|2,411,388|89|
|Using define property initialized (writable)|3,084,870|88|
|Using define property (getter)|1,230,625|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":699133184.2023561,"samples":9},{"name":"Using dot notation","opsSec":583727198.3207844,"samples":10},{"name":"Using define property (writable)","opsSec":2411387.5926445546,"samples":4},{"name":"Using define property initialized (writable)","opsSec":3084870.4389169975,"samples":5},{"name":"Using define property (getter)","opsSec":1230624.8022871173,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.462ms
array.push|1,000,000|40.1ms
new Array(length)|1,000,000|7.206ms
array.push|100,000,000|1,814.11ms
new Array(length)|100,000,000|5,302.341ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.365ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|32.365ms
new Array(length)|1,000,000|4.465ms
array.push|100,000,000|3,070.628ms
new Array(length)|100,000,000|4,925.47ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|74|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":306.8841833834791,"samples":4},{"name":"Array.from","opsSec":14.66927827006052,"samples":1}]}-->
