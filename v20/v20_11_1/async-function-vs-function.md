## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,864,967|95|
|[async] async function|17,754,571|86|
|[async] function|182,507|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846864967.2407211,"samples":7},{"name":"[async] async function","opsSec":17754571.47143125,"samples":6},{"name":"[async] function","opsSec":182507.42247259212,"samples":3}]}-->
