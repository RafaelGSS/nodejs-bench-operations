## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.007ms
array.push|100|0.039ms
new Array(length)|100|0.015ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.564ms
new Array(length)|10,000|3.786ms
array.push|1,000,000|46.073ms
new Array(length)|1,000,000|10.989ms
array.push|100,000,000|1,947.301ms
new Array(length)|100,000,000|5,980.522ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.106ms
new Array(length)|100|0.011ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.552ms
new Array(length)|10,000|0.304ms
array.push|1,000,000|114.687ms
new Array(length)|1,000,000|10.84ms
array.push|100,000,000|3,004.882ms
new Array(length)|100,000,000|6,421.813ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:59 GMT+0000 (Coordinated Universal Time)
</details>

