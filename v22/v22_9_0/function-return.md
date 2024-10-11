## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,612,494|815342|
|Function returning explicitly undefined|1,711,431|855791|
|Function returning implicitly undefined|1,547,956|793952|
|Function returning string|1,477,474|739966|
|Function returning integer|1,621,327|811028|
|Function returning float|1,510,885|756622|
|Function returning functions|1,593,764|798125|
|Function returning arrow functions|1,324,756|664390|
|Function returning empty object|1,025,945|514348|
|Function returning empty array|1,278,488|639422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:03:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1612494.3318641458,"samples":815342},{"name":"Function returning explicitly undefined","opsSec":1711431.6096587328,"samples":855791},{"name":"Function returning implicitly undefined","opsSec":1547956.620326583,"samples":793952},{"name":"Function returning string","opsSec":1477474.0239795907,"samples":739966},{"name":"Function returning integer","opsSec":1621327.044875316,"samples":811028},{"name":"Function returning float","opsSec":1510885.2874769964,"samples":756622},{"name":"Function returning functions","opsSec":1593764.1900551291,"samples":798125},{"name":"Function returning arrow functions","opsSec":1324756.6583886938,"samples":664390},{"name":"Function returning empty object","opsSec":1025945.5262236185,"samples":514348},{"name":"Function returning empty array","opsSec":1278488.9048206415,"samples":639422}]}-->
