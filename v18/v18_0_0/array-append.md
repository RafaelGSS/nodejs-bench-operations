## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.014ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.517ms
new Array(length)|10,000|0.298ms
array.push|1,000,000|37.642ms
new Array(length)|1,000,000|25.174ms
array.push|100,000,000|2,508.53ms
new Array(length)|100,000,000|6,008.5ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.072ms
array.push|10,000|0.833ms
new Array(length)|10,000|5.601ms
array.push|1,000,000|398.39ms
new Array(length)|1,000,000|5.688ms
array.push|100,000,000|3,227.077ms
new Array(length)|100,000,000|6,893.427ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:35 GMT+0000 (Coordinated Universal Time)
</details>

