## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.012ms
array.push|100|0.041ms
new Array(length)|100|0.015ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.485ms
new Array(length)|10,000|0.467ms
array.push|1,000,000|35.389ms
new Array(length)|1,000,000|16.305ms
array.push|100,000,000|1,942.054ms
new Array(length)|100,000,000|5,648.946ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.099ms
new Array(length)|100|0.012ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.461ms
new Array(length)|10,000|0.211ms
array.push|1,000,000|22.644ms
new Array(length)|1,000,000|10.564ms
array.push|100,000,000|2,627.734ms
new Array(length)|100,000,000|5,982.561ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:19 GMT+0000 (Coordinated Universal Time)
</details>

