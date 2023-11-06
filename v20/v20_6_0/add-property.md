## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,336,111|95|
|Using dot notation|850,144,899|100|
|Using define property (writable)|4,754,885|94|
|Using define property initialized (writable)|6,321,164|93|
|Using define property (getter)|2,447,974|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:55:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":850336110.6711495,"samples":9},{"name":"Using dot notation","opsSec":850144899.0412674,"samples":9},{"name":"Using define property (writable)","opsSec":4754884.788530899,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6321164.196122331,"samples":5},{"name":"Using define property (getter)","opsSec":2447974.4092947375,"samples":4}]}-->
