## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,052,599|98|
|Using dot notation|713,445,718|95|
|Using define property (writable)|3,023,785|95|
|Using define property initialized (writable)|3,712,100|96|
|Using define property (getter)|1,544,546|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":711052599.2907981,"samples":7},{"name":"Using dot notation","opsSec":713445717.6008608,"samples":7},{"name":"Using define property (writable)","opsSec":3023784.7383921244,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3712099.6654618303,"samples":4},{"name":"Using define property (getter)","opsSec":1544545.5318063279,"samples":3}]}-->
