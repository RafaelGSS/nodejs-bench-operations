## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.389ms
new Array(length)|10,000|0.395ms
array.push|1,000,000|34.689ms
new Array(length)|1,000,000|8.545ms
array.push|100,000,000|1,444.48ms
new Array(length)|100,000,000|4,988.137ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.405ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|93.586ms
new Array(length)|1,000,000|8.566ms
array.push|100,000,000|2,182.881ms
new Array(length)|100,000,000|4,878.685ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:23 GMT+0000 (Coordinated Universal Time)
</details>

