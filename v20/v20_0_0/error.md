## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>

