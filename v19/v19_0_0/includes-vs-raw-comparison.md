## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,510,328|93|
|using Array.includes (first item)|597,958,987|94|
|Using raw comparison|598,135,108|93|
|Using raw comparison (first item)|597,189,642|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":591510327.905767,"samples":6},{"name":"using Array.includes (first item)","opsSec":597958987.481519,"samples":7},{"name":"Using raw comparison","opsSec":598135108.1722621,"samples":6},{"name":"Using raw comparison (first item)","opsSec":597189642.470084,"samples":8}]}-->
