## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|114,811,061|57421649|
|Using dot notation|74,526,862|37289026|
|Using define property (writable)|3,852,599|1926579|
|Using define property initialized (writable)|5,437,804|2719472|
|Using define property (getter)|2,109,718|1054860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:41:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":114811061.57975176,"samples":57421649},{"name":"Using dot notation","opsSec":74526862.62818894,"samples":37289026},{"name":"Using define property (writable)","opsSec":3852599.7891113563,"samples":1926579},{"name":"Using define property initialized (writable)","opsSec":5437804.138372123,"samples":2719472},{"name":"Using define property (getter)","opsSec":2109718.3164447835,"samples":1054860}]}-->
