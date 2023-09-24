## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.006ms
array.push|100|0.04ms
new Array(length)|100|0.013ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.444ms
new Array(length)|10,000|2.059ms
array.push|1,000,000|36.905ms
new Array(length)|1,000,000|8.72ms
array.push|100,000,000|1,935.23ms
new Array(length)|100,000,000|4,597.047ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.095ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.017ms
array.push|10,000|7.287ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|96.167ms
new Array(length)|1,000,000|8.634ms
array.push|100,000,000|2,178.215ms
new Array(length)|100,000,000|5,023.101ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:22 GMT+0000 (Coordinated Universal Time)
</details>

