## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.006ms
array.push|100|0.042ms
new Array(length)|100|0.015ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.215ms
array.push|1,000,000|41.878ms
new Array(length)|1,000,000|10.499ms
array.push|100,000,000|2,051.068ms
new Array(length)|100,000,000|5,465.77ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.103ms
new Array(length)|100|0.011ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.022ms
array.push|10,000|8.452ms
new Array(length)|10,000|0.022ms
array.push|1,000,000|29.086ms
new Array(length)|1,000,000|9.622ms
array.push|100,000,000|2,731.126ms
new Array(length)|100,000,000|5,698.497ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:23 GMT+0000 (Coordinated Universal Time)
</details>

