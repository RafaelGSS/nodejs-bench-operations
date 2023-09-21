## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.386ms
new Array(length)|10,000|0.205ms
array.push|1,000,000|27.048ms
new Array(length)|1,000,000|16.812ms
array.push|100,000,000|1,610.666ms
new Array(length)|100,000,000|4,301.823ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.649ms
new Array(length)|10,000|4.378ms
array.push|1,000,000|336.139ms
new Array(length)|1,000,000|5.178ms
array.push|100,000,000|2,113.071ms
new Array(length)|100,000,000|4,759.122ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>

