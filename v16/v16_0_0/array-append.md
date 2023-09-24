## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.004ms
array.push|100|0.041ms
new Array(length)|100|0.012ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.587ms
new Array(length)|10,000|0.299ms
array.push|1,000,000|32.02ms
new Array(length)|1,000,000|10.643ms
array.push|100,000,000|1,823.022ms
new Array(length)|100,000,000|5,102.172ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.016ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.491ms
new Array(length)|10,000|4.267ms
array.push|1,000,000|28.431ms
new Array(length)|1,000,000|10.162ms
array.push|100,000,000|2,828.073ms
new Array(length)|100,000,000|5,156.102ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:25 GMT+0000 (Coordinated Universal Time)
</details>

