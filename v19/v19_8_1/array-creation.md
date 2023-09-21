## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.005ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.379ms
new Array(length)|10,000|0.4ms
array.push|1,000,000|34.06ms
new Array(length)|1,000,000|9.258ms
array.push|100,000,000|1,637.682ms
new Array(length)|100,000,000|4,404.509ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.098ms
new Array(length)|100|0.011ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.574ms
new Array(length)|10,000|0.225ms
array.push|1,000,000|322.781ms
new Array(length)|1,000,000|8.881ms
array.push|100,000,000|2,051.701ms
new Array(length)|100,000,000|5,114.16ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:19 GMT+0000 (Coordinated Universal Time)
</details>

