## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,278,196|47654854|
|Using dot notation|70,230,487|35125336|
|Using define property (writable)|5,037,301|2518653|
|Using define property initialized (writable)|7,000,445|3500407|
|Using define property (getter)|2,423,998|1212396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":47654854,"opsSec":95278196.83251798},{"name":"Using dot notation","samples":35125336,"opsSec":70230487.19613594},{"name":"Using define property (writable)","samples":2518653,"opsSec":5037301.436204899},{"name":"Using define property initialized (writable)","samples":3500407,"opsSec":7000445.090544619},{"name":"Using define property (getter)","samples":1212396,"opsSec":2423998.1890730425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.456ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|26.133ms
new Array(length)|1,000,000|7.658ms
array.push|10,000,000|228.439ms
new Array(length)|10,000,000|63.106ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.362ms
new Array(length)|10,000|0.117ms
array.push|1,000,000|17.45ms
new Array(length)|1,000,000|10.954ms
array.push|10,000,000|334.932ms
new Array(length)|10,000,000|49.569ms
