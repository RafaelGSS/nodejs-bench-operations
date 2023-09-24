## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.105ms
new Array(length)|100|0.009ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.429ms
new Array(length)|10,000|0.216ms
array.push|1,000,000|40.129ms
new Array(length)|1,000,000|7.314ms
array.push|100,000,000|1,576.085ms
new Array(length)|100,000,000|4,322.667ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.072ms
new Array(length)|100|0.01ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.557ms
new Array(length)|10,000|4.327ms
array.push|1,000,000|301.512ms
new Array(length)|1,000,000|5.277ms
array.push|100,000,000|2,100.679ms
new Array(length)|100,000,000|4,634.078ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:22 GMT+0000 (Coordinated Universal Time)
</details>

