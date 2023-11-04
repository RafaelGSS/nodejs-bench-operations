## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|823,053,163|96|
|Using dot notation|822,264,416|100|
|Using define property (writable)|4,284,771|95|
|Using define property initialized (writable)|6,178,436|90|
|Using define property (getter)|2,432,254|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Directly in the object","opsSec":823053162.6142813,"samples":8},{"name":"Using dot notation","opsSec":822264416.2285348,"samples":6},{"name":"Using define property (writable)","opsSec":4284771.00869299,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6178436.146773968,"samples":4},{"name":"Using define property (getter)","opsSec":2432254.4320893977,"samples":4}]}-->
