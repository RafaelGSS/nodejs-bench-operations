## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,894,000|97|
|[async] async function|16,204,933|87|
|[async] function|274,398|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818893999.9227709,"samples":6},{"name":"[async] async function","opsSec":16204933.239971623,"samples":6},{"name":"[async] function","opsSec":274398.1123098529,"samples":3}]}-->
