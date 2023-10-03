## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.011ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.622ms
new Array(length)|10,000|0.281ms
array.push|1,000,000|42.108ms
new Array(length)|1,000,000|23.406ms
array.push|100,000,000|2,384.264ms
new Array(length)|100,000,000|5,801.057ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.681ms
new Array(length)|10,000|5.025ms
array.push|1,000,000|393.976ms
new Array(length)|1,000,000|5.168ms
array.push|100,000,000|3,163.09ms
new Array(length)|100,000,000|6,426.649ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:03 GMT+0000 (Coordinated Universal Time)
</details>

