## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.005ms
array.push|100|0.028ms
new Array(length)|100|0.012ms
array.push|1,000|0.116ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|37.798ms
new Array(length)|1,000,000|6.235ms
array.push|100,000,000|1,572.66ms
new Array(length)|100,000,000|4,315.433ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.075ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.583ms
new Array(length)|10,000|4.342ms
array.push|1,000,000|322.767ms
new Array(length)|1,000,000|4.359ms
array.push|100,000,000|2,153.436ms
new Array(length)|100,000,000|4,702.79ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>

