## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.004ms
array.push|100|0.059ms
new Array(length)|100|0.017ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.516ms
new Array(length)|10,000|1.676ms
array.push|1,000,000|47.172ms
new Array(length)|1,000,000|14.998ms
array.push|100,000,000|2,216.616ms
new Array(length)|100,000,000|6,878.959ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.025ms
array.push|100|0.037ms
new Array(length)|100|0.03ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.371ms
array.push|1,000,000|38.013ms
new Array(length)|1,000,000|11.717ms
array.push|100,000,000|3,114.909ms
new Array(length)|100,000,000|6,896.814ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:23 GMT+0000 (Coordinated Universal Time)
</details>

