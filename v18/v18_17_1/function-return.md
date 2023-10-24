## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,078,618|90|
|Function returning explicitly undefined|1,043,545|92|
|Function returning implicitly undefined|1,084,750|90|
|Function returning string|1,060,288|89|
|Function returning integer|1,051,334|91|
|Function returning float|1,077,247|90|
|Function returning functions|1,032,071|90|
|Function returning arrow functions|1,023,108|89|
|Function returning empty object|1,078,924|89|
|Function returning empty array|1,077,363|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1078618.0096200798,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1043544.5574509924,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1084750.110526481,"samples":6},{"name":"Function returning string","opsSec":1060288.3423006202,"samples":5},{"name":"Function returning integer","opsSec":1051333.7942963452,"samples":3},{"name":"Function returning float","opsSec":1077246.8358370867,"samples":8},{"name":"Function returning functions","opsSec":1032071.1413321974,"samples":6},{"name":"Function returning arrow functions","opsSec":1023107.9517148323,"samples":5},{"name":"Function returning empty object","opsSec":1078924.4198901362,"samples":7},{"name":"Function returning empty array","opsSec":1077363.1328153473,"samples":8}]}-->
