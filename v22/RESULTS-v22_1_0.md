## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,178,365|8089183|
|Using dot notation|15,951,208|7975605|
|Using define property (writable)|3,744,789|1872395|
|Using define property initialized (writable)|4,583,216|2291609|
|Using define property (getter)|2,222,604|1111303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:28:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16178365.741142044,"samples":8089183},{"name":"Using dot notation","opsSec":15951208.18155222,"samples":7975605},{"name":"Using define property (writable)","opsSec":3744789.9325976954,"samples":1872395},{"name":"Using define property initialized (writable)","opsSec":4583216.46919301,"samples":2291609},{"name":"Using define property (getter)","opsSec":2222604.7242289037,"samples":1111303}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.303ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|22.084ms
new Array(length)|1,000,000|15.495ms
array.push|100,000,000|2,031.292ms
new Array(length)|100,000,000|4,062.013ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.023ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.498ms
new Array(length)|10,000|0.226ms
array.push|1,000,000|17.753ms
new Array(length)|1,000,000|8.079ms
array.push|100,000,000|2,618.745ms
new Array(length)|100,000,000|4,050.317ms
