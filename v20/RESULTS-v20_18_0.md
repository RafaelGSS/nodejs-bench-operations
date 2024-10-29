## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,188,193|54100299|
|Using dot notation|66,411,065|33217082|
|Using define property (writable)|4,255,099|2127550|
|Using define property initialized (writable)|5,674,180|2837633|
|Using define property (getter)|2,128,752|1067070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108188193.57447752,"samples":54100299},{"name":"Using dot notation","opsSec":66411065.30173314,"samples":33217082},{"name":"Using define property (writable)","opsSec":4255099.080898598,"samples":2127550},{"name":"Using define property initialized (writable)","opsSec":5674180.109455734,"samples":2837633},{"name":"Using define property (getter)","opsSec":2128752.5870128293,"samples":1067070}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.084ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.285ms
new Array(length)|10,000|0.317ms
array.push|1,000,000|32.133ms
new Array(length)|1,000,000|7.056ms
array.push|100,000,000|1,768.426ms
new Array(length)|100,000,000|4,427.88ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|25.401ms
new Array(length)|1,000,000|4.618ms
array.push|100,000,000|2,475.612ms
new Array(length)|100,000,000|4,115.02ms
