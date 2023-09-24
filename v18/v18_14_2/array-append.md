## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.035ms
new Array(length)|100|0.028ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.541ms
new Array(length)|10,000|0.281ms
array.push|1,000,000|48.977ms
new Array(length)|1,000,000|8.373ms
array.push|100,000,000|2,142.3ms
new Array(length)|100,000,000|5,691.055ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.791ms
new Array(length)|10,000|5.088ms
array.push|1,000,000|402.53ms
new Array(length)|1,000,000|5.156ms
array.push|100,000,000|3,140.076ms
new Array(length)|100,000,000|6,391.633ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:30 GMT+0000 (Coordinated Universal Time)
</details>

