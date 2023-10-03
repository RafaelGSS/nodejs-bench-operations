## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.115ms
new Array(length)|100|0.01ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.501ms
new Array(length)|10,000|0.251ms
array.push|1,000,000|30.266ms
new Array(length)|1,000,000|17.887ms
array.push|100,000,000|1,865.072ms
new Array(length)|100,000,000|4,918.026ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.071ms
new Array(length)|100|0.011ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.622ms
new Array(length)|10,000|4.268ms
array.push|1,000,000|322.189ms
new Array(length)|1,000,000|5.231ms
array.push|100,000,000|2,672.361ms
new Array(length)|100,000,000|5,457.897ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>

