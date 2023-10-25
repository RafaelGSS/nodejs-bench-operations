## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,875,680|97|
|Using dot notation|714,497,402|96|
|Using define property (writable)|2,999,744|96|
|Using define property initialized (writable)|3,747,945|96|
|Using define property (getter)|1,595,186|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714875679.9522846,"samples":7},{"name":"Using dot notation","opsSec":714497401.6350578,"samples":6},{"name":"Using define property (writable)","opsSec":2999743.605630906,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3747945.1541666393,"samples":6},{"name":"Using define property (getter)","opsSec":1595185.6850718383,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.01ms
array.push|100|0.035ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.47ms
new Array(length)|10,000|0.451ms
array.push|1,000,000|37.588ms
new Array(length)|1,000,000|9.183ms
array.push|100,000,000|2,173.919ms
new Array(length)|100,000,000|4,866.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.096ms
new Array(length)|100|0.018ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.022ms
array.push|10,000|8.225ms
new Array(length)|10,000|0.02ms
array.push|1,000,000|84.606ms
new Array(length)|1,000,000|9.652ms
array.push|100,000,000|3,535.326ms
new Array(length)|100,000,000|4,849.887ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|78|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":299.67419703455715,"samples":5},{"name":"Array.from","opsSec":13.070674137874652,"samples":1}]}-->
