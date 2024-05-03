## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,276,527|95|
|Using dot notation|911,621,739|99|
|Using define property (writable)|4,637,360|97|
|Using define property initialized (writable)|6,771,919|94|
|Using define property (getter)|2,675,824|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:20:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911276527.1248406,"samples":6},{"name":"Using dot notation","opsSec":911621738.5536375,"samples":10},{"name":"Using define property (writable)","opsSec":4637359.525829851,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6771918.923551921,"samples":5},{"name":"Using define property (getter)","opsSec":2675824.2833474968,"samples":4}]}-->
