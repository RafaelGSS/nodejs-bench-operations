## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.583ms
new Array(length)|10,000|0.306ms
array.push|1,000,000|31.49ms
new Array(length)|1,000,000|9.819ms
array.push|100,000,000|1,468.686ms
new Array(length)|100,000,000|4,378.732ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.014ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.453ms
new Array(length)|10,000|4.202ms
array.push|1,000,000|25.75ms
new Array(length)|1,000,000|9.21ms
array.push|100,000,000|2,200.581ms
new Array(length)|100,000,000|4,508.701ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:00 GMT+0000 (Coordinated Universal Time)
</details>

