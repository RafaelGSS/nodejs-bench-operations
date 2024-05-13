## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,939,761|8469881|
|Using dot notation|16,991,364|8495683|
|Using define property (writable)|3,294,047|1647024|
|Using define property initialized (writable)|4,085,194|2042598|
|Using define property (getter)|2,052,606|1026304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16939761.44265197,"samples":8469881},{"name":"Using dot notation","opsSec":16991364.290453974,"samples":8495683},{"name":"Using define property (writable)","opsSec":3294047.1046872856,"samples":1647024},{"name":"Using define property initialized (writable)","opsSec":4085194.926667021,"samples":2042598},{"name":"Using define property (getter)","opsSec":2052606.4104953716,"samples":1026304}]}-->
