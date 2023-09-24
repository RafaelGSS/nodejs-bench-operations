## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.03ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.456ms
new Array(length)|10,000|0.42ms
array.push|1,000,000|35.374ms
new Array(length)|1,000,000|9.149ms
array.push|100,000,000|1,868.257ms
new Array(length)|100,000,000|4,409.487ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.303ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|32.136ms
new Array(length)|1,000,000|4.186ms
array.push|100,000,000|2,129.89ms
new Array(length)|100,000,000|4,794.359ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:23 GMT+0000 (Coordinated Universal Time)
</details>

