## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,469,783|98|
|Using dot notation|912,069,795|96|
|Using define property (writable)|4,753,912|97|
|Using define property initialized (writable)|6,856,884|95|
|Using define property (getter)|2,661,421|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912469783.2943633,"samples":6},{"name":"Using dot notation","opsSec":912069795.1796272,"samples":6},{"name":"Using define property (writable)","opsSec":4753912.026638876,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6856884.326699565,"samples":6},{"name":"Using define property (getter)","opsSec":2661420.8297384307,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.095ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.153ms
array.push|1,000,000|30.554ms
new Array(length)|1,000,000|8.267ms
array.push|100,000,000|1,933.705ms
new Array(length)|100,000,000|4,202.263ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.345ms
new Array(length)|10,000|0.197ms
array.push|1,000,000|21.658ms
new Array(length)|1,000,000|7.827ms
array.push|100,000,000|2,068.478ms
new Array(length)|100,000,000|4,800.218ms
