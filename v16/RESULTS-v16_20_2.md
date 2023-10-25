## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,196,136|97|
|Using dot notation|712,161,600|92|
|Using define property (writable)|3,059,697|98|
|Using define property initialized (writable)|3,751,052|95|
|Using define property (getter)|1,556,144|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":711196136.4482746,"samples":6},{"name":"Using dot notation","opsSec":712161599.8740793,"samples":6},{"name":"Using define property (writable)","opsSec":3059697.0996847255,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3751051.5852475585,"samples":5},{"name":"Using define property (getter)","opsSec":1556144.1803353305,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.022ms
new Array(length)|10|0.003ms
array.push|100|0.036ms
new Array(length)|100|0.015ms
array.push|1,000|0.131ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.243ms
array.push|1,000,000|46.167ms
new Array(length)|1,000,000|7.153ms
array.push|100,000,000|1,990.248ms
new Array(length)|100,000,000|5,152.373ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.022ms
array.push|100|0.073ms
new Array(length)|100|0.012ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.675ms
new Array(length)|10,000|4.451ms
array.push|1,000,000|365.487ms
new Array(length)|1,000,000|5.108ms
array.push|100,000,000|2,757.078ms
new Array(length)|100,000,000|5,675.509ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|274|80|
|Array.from|12|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":273.8762041773307,"samples":3},{"name":"Array.from","opsSec":12.226022165778884,"samples":1}]}-->
