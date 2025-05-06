## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,649,459|46333303|
|Using dot notation|63,154,814|31776183|
|Using define property (writable)|4,897,941|2449009|
|Using define property initialized (writable)|6,789,759|3395197|
|Using define property (getter)|2,421,244|1216326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":46333303,"opsSec":92649459.17929077},{"name":"Using dot notation","samples":31776183,"opsSec":63154814.526372746},{"name":"Using define property (writable)","samples":2449009,"opsSec":4897941.905574555},{"name":"Using define property initialized (writable)","samples":3395197,"opsSec":6789759.551288008},{"name":"Using define property (getter)","samples":1216326,"opsSec":2421244.312265251}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|32.741ms
new Array(length)|1,000,000|7.17ms
array.push|100,000,000|2,027.44ms
new Array(length)|100,000,000|4,440.007ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|15.459ms
new Array(length)|10,000|5.25ms
array.push|1,000,000|182.105ms
new Array(length)|1,000,000|8.032ms
array.push|100,000,000|2,137.956ms
new Array(length)|100,000,000|5,063.974ms
