## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|717,612,932|95|
|Using dot notation|715,903,968|97|
|Using define property (writable)|3,111,163|95|
|Using define property initialized (writable)|4,066,973|91|
|Using define property (getter)|1,681,975|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":717612931.7500187,"samples":7},{"name":"Using dot notation","opsSec":715903968.4898012,"samples":6},{"name":"Using define property (writable)","opsSec":3111163.3723670156,"samples":7},{"name":"Using define property initialized (writable)","opsSec":4066973.0034286804,"samples":7},{"name":"Using define property (getter)","opsSec":1681974.687288506,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.006ms
array.push|100|0.047ms
new Array(length)|100|0.013ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.543ms
new Array(length)|10,000|0.521ms
array.push|1,000,000|38.788ms
new Array(length)|1,000,000|9.889ms
array.push|100,000,000|1,792.783ms
new Array(length)|100,000,000|5,377.163ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.054ms
new Array(length)|100|0.013ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.382ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|30.961ms
new Array(length)|1,000,000|4.449ms
array.push|100,000,000|3,088.62ms
new Array(length)|100,000,000|4,932.473ms
