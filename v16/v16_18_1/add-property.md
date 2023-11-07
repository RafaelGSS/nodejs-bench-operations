## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,428,177|97|
|Using dot notation|848,756,204|98|
|Using define property (writable)|4,603,486|97|
|Using define property initialized (writable)|5,913,252|94|
|Using define property (getter)|2,274,922|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849428177.4301213,"samples":6},{"name":"Using dot notation","opsSec":848756203.9423821,"samples":8},{"name":"Using define property (writable)","opsSec":4603486.043842479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5913252.225284116,"samples":4},{"name":"Using define property (getter)","opsSec":2274922.4888364654,"samples":5}]}-->
