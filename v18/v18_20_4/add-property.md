## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|114,069,111|57045880|
|Using dot notation|75,120,220|37566226|
|Using define property (writable)|3,729,139|1864899|
|Using define property initialized (writable)|5,433,993|2717494|
|Using define property (getter)|2,041,417|1026160|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:39:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":114069111.80598915,"samples":57045880},{"name":"Using dot notation","opsSec":75120220.47498095,"samples":37566226},{"name":"Using define property (writable)","opsSec":3729139.0462139775,"samples":1864899},{"name":"Using define property initialized (writable)","opsSec":5433993.633505004,"samples":2717494},{"name":"Using define property (getter)","opsSec":2041417.4020807075,"samples":1026160}]}-->
