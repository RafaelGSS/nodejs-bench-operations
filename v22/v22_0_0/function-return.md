## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,463,608|731805|
|Function returning explicitly undefined|1,484,201|742101|
|Function returning implicitly undefined|1,512,135|756068|
|Function returning string|1,495,247|747624|
|Function returning integer|1,512,167|756084|
|Function returning float|1,504,098|752050|
|Function returning functions|1,460,713|730357|
|Function returning arrow functions|1,483,243|741622|
|Function returning empty object|1,514,380|757191|
|Function returning empty array|1,519,347|759674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1463608.4251571156,"samples":731805},{"name":"Function returning explicitly undefined","opsSec":1484201.8248631372,"samples":742101},{"name":"Function returning implicitly undefined","opsSec":1512135.7610841522,"samples":756068},{"name":"Function returning string","opsSec":1495247.8534641813,"samples":747624},{"name":"Function returning integer","opsSec":1512167.6612687178,"samples":756084},{"name":"Function returning float","opsSec":1504098.9381068954,"samples":752050},{"name":"Function returning functions","opsSec":1460713.4157093025,"samples":730357},{"name":"Function returning arrow functions","opsSec":1483243.830905117,"samples":741622},{"name":"Function returning empty object","opsSec":1514380.7582166905,"samples":757191},{"name":"Function returning empty array","opsSec":1519347.1461261064,"samples":759674}]}-->
