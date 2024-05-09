## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,061,051|8030526|
|Using dot notation|16,102,673|8051337|
|Using define property (writable)|3,538,553|1769277|
|Using define property initialized (writable)|4,447,855|2223928|
|Using define property (getter)|2,220,497|1110249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16061051.196938513,"samples":8030526},{"name":"Using dot notation","opsSec":16102673.967783893,"samples":8051337},{"name":"Using define property (writable)","opsSec":3538553.547089503,"samples":1769277},{"name":"Using define property initialized (writable)","opsSec":4447855.350609663,"samples":2223928},{"name":"Using define property (getter)","opsSec":2220497.9733600337,"samples":1110249}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.171ms
array.push|1,000,000|21.194ms
new Array(length)|1,000,000|15.355ms
array.push|100,000,000|2,003.918ms
new Array(length)|100,000,000|4,025.903ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|17.575ms
new Array(length)|1,000,000|7.383ms
array.push|100,000,000|2,597.502ms
new Array(length)|100,000,000|4,097.338ms
