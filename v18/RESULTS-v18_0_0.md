## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,878,269|10439135|
|Using dot notation|21,038,102|10519052|
|Using define property (writable)|3,748,686|1874343|
|Using define property initialized (writable)|4,388,762|2194382|
|Using define property (getter)|2,143,459|1071730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20878269.203557234,"samples":10439135},{"name":"Using dot notation","opsSec":21038102.414983664,"samples":10519052},{"name":"Using define property (writable)","opsSec":3748686,"samples":1874343},{"name":"Using define property initialized (writable)","opsSec":4388762.248389243,"samples":2194382},{"name":"Using define property (getter)","opsSec":2143459.169048164,"samples":1071730}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.413ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|17.185ms
array.push|100,000,000|2,134.263ms
new Array(length)|100,000,000|4,208.388ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.483ms
new Array(length)|10,000|3.032ms
array.push|1,000,000|256.678ms
new Array(length)|1,000,000|4.599ms
array.push|100,000,000|2,624ms
new Array(length)|100,000,000|4,636.513ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1587820890989,"samples":114},{"name":"Array.from","opsSec":21.84401017792516,"samples":11}]}-->
