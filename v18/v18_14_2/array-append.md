## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|44.518ms
new Array(length)|1,000,000|6.407ms
array.push|100,000,000|1,998.555ms
new Array(length)|100,000,000|4,609.028ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.678ms
new Array(length)|10,000|4.293ms
array.push|1,000,000|325.727ms
new Array(length)|1,000,000|4.572ms
array.push|100,000,000|2,776.477ms
new Array(length)|100,000,000|5,430.25ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:21 GMT+0000 (Coordinated Universal Time)
</details>

