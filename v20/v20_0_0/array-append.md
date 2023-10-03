## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.003ms
array.push|100|0.109ms
new Array(length)|100|0.019ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.568ms
new Array(length)|10,000|0.517ms
array.push|1,000,000|46.41ms
new Array(length)|1,000,000|10.589ms
array.push|100,000,000|2,540.854ms
new Array(length)|100,000,000|5,821.659ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.055ms
new Array(length)|100|0.013ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.324ms
array.push|1,000,000|44.703ms
new Array(length)|1,000,000|4.747ms
array.push|100,000,000|2,853.451ms
new Array(length)|100,000,000|6,523.44ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:03 GMT+0000 (Coordinated Universal Time)
</details>

