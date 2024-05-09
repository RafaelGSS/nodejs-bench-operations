## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,206,474|7603238|
|Using dot notation|15,112,090|7556046|
|Using define property (writable)|3,394,423|1697212|
|Using define property initialized (writable)|4,206,441|2103221|
|Using define property (getter)|2,098,849|1049425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15206474.570586722,"samples":7603238},{"name":"Using dot notation","opsSec":15112090.186548922,"samples":7556046},{"name":"Using define property (writable)","opsSec":3394423.619818937,"samples":1697212},{"name":"Using define property initialized (writable)","opsSec":4206441.79808644,"samples":2103221},{"name":"Using define property (getter)","opsSec":2098849.7817223584,"samples":1049425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.3ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.957ms
new Array(length)|1,000,000|7.765ms
array.push|100,000,000|1,903.614ms
new Array(length)|100,000,000|4,170.727ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.318ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.236ms
new Array(length)|1,000,000|7.981ms
array.push|100,000,000|2,116.482ms
new Array(length)|100,000,000|4,798.587ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|236|119|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":236.7840377218385,"samples":119},{"name":"Array.from","opsSec":23.404131331198588,"samples":12}]}-->
