## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|593,361,548|94|
|[async] - function|124,743,997|94|
|[async] - await function|742,143|25|
|[async] - await async function|254,941|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":593361548.1003458,"samples":7},{"name":"[async] - function","opsSec":124743996.81434906,"samples":6},{"name":"[async] - await function","opsSec":742143.4317052788,"samples":3},{"name":"[async] - await async function","opsSec":254941.1100040912,"samples":3}]}-->
