## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,040,491|8520246|
|Using dot notation|17,108,977|8554489|
|Using define property (writable)|3,298,720|1649361|
|Using define property initialized (writable)|4,137,830|2068927|
|Using define property (getter)|2,026,725|1013363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17040491.5693464,"samples":8520246},{"name":"Using dot notation","opsSec":17108977.836836074,"samples":8554489},{"name":"Using define property (writable)","opsSec":3298720.557602524,"samples":1649361},{"name":"Using define property initialized (writable)","opsSec":4137830.71183782,"samples":2068927},{"name":"Using define property (getter)","opsSec":2026725.807682783,"samples":1013363}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.009ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|25.647ms
new Array(length)|1,000,000|16.175ms
array.push|100,000,000|2,113.526ms
new Array(length)|100,000,000|4,257.36ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.462ms
new Array(length)|10,000|3.077ms
array.push|1,000,000|255.677ms
new Array(length)|1,000,000|4.582ms
array.push|100,000,000|2,621.579ms
new Array(length)|100,000,000|4,733.294ms
