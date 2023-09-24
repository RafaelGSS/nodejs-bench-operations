## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.386ms
new Array(length)|10,000|0.203ms
array.push|1,000,000|30.892ms
new Array(length)|1,000,000|17.657ms
array.push|100,000,000|1,705.342ms
new Array(length)|100,000,000|4,345.442ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.021ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.582ms
new Array(length)|10,000|4.324ms
array.push|1,000,000|336.686ms
new Array(length)|1,000,000|4.35ms
array.push|100,000,000|2,151.72ms
new Array(length)|100,000,000|4,771.162ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:24 GMT+0000 (Coordinated Universal Time)
</details>

