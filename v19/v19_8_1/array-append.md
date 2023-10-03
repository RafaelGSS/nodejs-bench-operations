## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.005ms
array.push|100|0.036ms
new Array(length)|100|0.015ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.381ms
new Array(length)|10,000|0.402ms
array.push|1,000,000|37.546ms
new Array(length)|1,000,000|9.504ms
array.push|100,000,000|1,594.027ms
new Array(length)|100,000,000|5,042.417ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.1ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.018ms
array.push|10,000|8.508ms
new Array(length)|10,000|0.022ms
array.push|1,000,000|17.791ms
new Array(length)|1,000,000|9.416ms
array.push|100,000,000|2,061.15ms
new Array(length)|100,000,000|5,078.453ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>

