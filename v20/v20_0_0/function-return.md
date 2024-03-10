## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,758,079|95|
|Function returning explicitly undefined|1,774,508|98|
|Function returning implicitly undefined|1,783,167|93|
|Function returning string|1,699,948|96|
|Function returning integer|1,795,917|95|
|Function returning float|1,771,256|95|
|Function returning functions|1,738,168|96|
|Function returning arrow functions|1,740,856|95|
|Function returning empty object|1,758,313|95|
|Function returning empty array|1,790,263|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1758078.6417244864,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1774507.6708418028,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1783167.3326335307,"samples":5},{"name":"Function returning string","opsSec":1699947.6942179722,"samples":5},{"name":"Function returning integer","opsSec":1795917.2570271299,"samples":5},{"name":"Function returning float","opsSec":1771255.785890043,"samples":5},{"name":"Function returning functions","opsSec":1738168.159838799,"samples":5},{"name":"Function returning arrow functions","opsSec":1740856.2819786498,"samples":6},{"name":"Function returning empty object","opsSec":1758313.2619859877,"samples":5},{"name":"Function returning empty array","opsSec":1790262.641078447,"samples":5}]}-->
