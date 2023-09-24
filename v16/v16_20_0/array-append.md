## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.005ms
array.push|100|0.028ms
new Array(length)|100|0.011ms
array.push|1,000|0.119ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.399ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|38.222ms
new Array(length)|1,000,000|6.516ms
array.push|100,000,000|1,555.573ms
new Array(length)|100,000,000|4,294.604ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.075ms
new Array(length)|100|0.01ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.562ms
new Array(length)|10,000|4.304ms
array.push|1,000,000|323.04ms
new Array(length)|1,000,000|5.058ms
array.push|100,000,000|2,129.08ms
new Array(length)|100,000,000|4,664.481ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:19 GMT+0000 (Coordinated Universal Time)
</details>

