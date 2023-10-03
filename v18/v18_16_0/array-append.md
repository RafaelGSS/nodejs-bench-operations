## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.037ms
new Array(length)|100|0.013ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.389ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|32.01ms
new Array(length)|1,000,000|18.298ms
array.push|100,000,000|1,809.449ms
new Array(length)|100,000,000|4,465.773ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.611ms
new Array(length)|10,000|4.368ms
array.push|1,000,000|343.714ms
new Array(length)|1,000,000|4.665ms
array.push|100,000,000|2,210.277ms
new Array(length)|100,000,000|4,859.036ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:57 GMT+0000 (Coordinated Universal Time)
</details>

