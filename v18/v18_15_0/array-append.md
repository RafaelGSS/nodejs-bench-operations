## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.044ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.345ms
array.push|1,000,000|53.605ms
new Array(length)|1,000,000|7.83ms
array.push|100,000,000|2,307.09ms
new Array(length)|100,000,000|5,484.461ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.781ms
new Array(length)|10,000|5.084ms
array.push|1,000,000|399.631ms
new Array(length)|1,000,000|6.381ms
array.push|100,000,000|3,045.871ms
new Array(length)|100,000,000|6,650.89ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:26 GMT+0000 (Coordinated Universal Time)
</details>

