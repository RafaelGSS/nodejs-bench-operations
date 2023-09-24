## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.006ms
array.push|100|0.036ms
new Array(length)|100|0.014ms
array.push|1,000|0.087ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.471ms
array.push|1,000,000|50.879ms
new Array(length)|1,000,000|11.053ms
array.push|100,000,000|2,649.027ms
new Array(length)|100,000,000|5,648.778ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.112ms
new Array(length)|100|0.011ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.539ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|140.95ms
new Array(length)|1,000,000|10.783ms
array.push|100,000,000|3,098.097ms
new Array(length)|100,000,000|6,648.659ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:30 GMT+0000 (Coordinated Universal Time)
</details>

