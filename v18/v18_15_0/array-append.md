## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.009ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.243ms
array.push|1,000,000|43.976ms
new Array(length)|1,000,000|6.448ms
array.push|100,000,000|2,017.136ms
new Array(length)|100,000,000|4,649.659ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.674ms
new Array(length)|10,000|4.324ms
array.push|1,000,000|327.787ms
new Array(length)|1,000,000|4.53ms
array.push|100,000,000|2,827.544ms
new Array(length)|100,000,000|5,431.845ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:55 GMT+0000 (Coordinated Universal Time)
</details>

