## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.396ms
new Array(length)|10,000|0.202ms
array.push|1,000,000|28.512ms
new Array(length)|1,000,000|16.799ms
array.push|100,000,000|1,585.444ms
new Array(length)|100,000,000|4,321.086ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.017ms
new Array(length)|100|0.025ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.048ms
array.push|10,000|0.639ms
new Array(length)|10,000|4.689ms
array.push|1,000,000|340.893ms
new Array(length)|1,000,000|4.339ms
array.push|100,000,000|2,136.942ms
new Array(length)|100,000,000|4,720.001ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:25 GMT+0000 (Coordinated Universal Time)
</details>

