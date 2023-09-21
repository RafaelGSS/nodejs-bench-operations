## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.117ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.491ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|31.917ms
new Array(length)|1,000,000|19.968ms
array.push|100,000,000|1,952.524ms
new Array(length)|100,000,000|4,946.598ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.071ms
new Array(length)|100|0.011ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.68ms
new Array(length)|10,000|4.448ms
array.push|1,000,000|336.156ms
new Array(length)|1,000,000|5.185ms
array.push|100,000,000|2,655.828ms
new Array(length)|100,000,000|5,512.269ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:19 GMT+0000 (Coordinated Universal Time)
</details>

