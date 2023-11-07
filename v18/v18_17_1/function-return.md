## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,732,413|98|
|Function returning explicitly undefined|1,720,723|97|
|Function returning implicitly undefined|1,774,686|98|
|Function returning string|1,588,507|100|
|Function returning integer|1,739,796|93|
|Function returning float|1,747,188|97|
|Function returning functions|1,703,601|93|
|Function returning arrow functions|1,694,204|92|
|Function returning empty object|1,742,591|96|
|Function returning empty array|1,732,185|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1732412.6852733106,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1720723.2551671637,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1774686.0512034327,"samples":5},{"name":"Function returning string","opsSec":1588506.7526970494,"samples":9},{"name":"Function returning integer","opsSec":1739796.1365314862,"samples":5},{"name":"Function returning float","opsSec":1747188.4245436084,"samples":6},{"name":"Function returning functions","opsSec":1703600.6143422038,"samples":4},{"name":"Function returning arrow functions","opsSec":1694204.3566362844,"samples":5},{"name":"Function returning empty object","opsSec":1742591.0968536937,"samples":6},{"name":"Function returning empty array","opsSec":1732185.0017664402,"samples":5}]}-->
