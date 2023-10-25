## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|586,912,147|95|
|Using dot notation|603,479,256|95|
|Using define property (writable)|3,183,473|95|
|Using define property initialized (writable)|4,374,571|97|
|Using define property (getter)|1,679,026|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":586912147.4887776,"samples":7},{"name":"Using dot notation","opsSec":603479256.2441746,"samples":6},{"name":"Using define property (writable)","opsSec":3183473.184946333,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4374570.524907555,"samples":7},{"name":"Using define property (getter)","opsSec":1679026.3497326549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.011ms
array.push|1,000|0.082ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|36.54ms
new Array(length)|1,000,000|12.215ms
array.push|100,000,000|2,083.827ms
new Array(length)|100,000,000|6,231.648ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.042ms
array.push|10,000|9.261ms
new Array(length)|10,000|0.275ms
array.push|1,000,000|31.781ms
new Array(length)|1,000,000|11.061ms
array.push|100,000,000|2,996.849ms
new Array(length)|100,000,000|6,422.806ms
