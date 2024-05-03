## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|938,989,288|98|
|[async] async function|19,522,606|86|
|[async] function|363,268|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:37:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":938989287.9784071,"samples":6},{"name":"[async] async function","opsSec":19522605.93690524,"samples":6},{"name":"[async] function","opsSec":363267.9436138555,"samples":3}]}-->
