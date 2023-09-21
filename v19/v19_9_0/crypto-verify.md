## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.006ms
array.push|100|0.039ms
new Array(length)|100|0.015ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.476ms
new Array(length)|10,000|3.178ms
array.push|1,000,000|37.974ms
new Array(length)|1,000,000|10.379ms
array.push|100,000,000|2,377.668ms
new Array(length)|100,000,000|5,083.938ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.1ms
new Array(length)|100|0.011ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.452ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|124.681ms
new Array(length)|1,000,000|10.139ms
array.push|100,000,000|2,740.868ms
new Array(length)|100,000,000|5,849.984ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:22 GMT+0000 (Coordinated Universal Time)
</details>

