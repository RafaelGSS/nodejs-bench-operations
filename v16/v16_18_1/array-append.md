## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.108ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.489ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|29.107ms
new Array(length)|1,000,000|20.14ms
array.push|100,000,000|1,898.367ms
new Array(length)|100,000,000|4,862.458ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.071ms
new Array(length)|100|0.03ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.646ms
new Array(length)|10,000|4.339ms
array.push|1,000,000|330.707ms
new Array(length)|1,000,000|5.849ms
array.push|100,000,000|2,636.736ms
new Array(length)|100,000,000|5,473.416ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>

