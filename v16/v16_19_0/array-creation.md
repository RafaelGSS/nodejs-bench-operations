## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.139ms
new Array(length)|100|0.013ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.604ms
new Array(length)|10,000|0.289ms
array.push|1,000,000|49.111ms
new Array(length)|1,000,000|8.925ms
array.push|100,000,000|2,216.384ms
new Array(length)|100,000,000|5,828.268ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.023ms
array.push|100|0.089ms
new Array(length)|100|0.021ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.729ms
new Array(length)|10,000|5.159ms
array.push|1,000,000|378.28ms
new Array(length)|1,000,000|6.85ms
array.push|100,000,000|3,048.209ms
new Array(length)|100,000,000|6,525.665ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:25 GMT+0000 (Coordinated Universal Time)
</details>

