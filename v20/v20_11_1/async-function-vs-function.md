## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,300,018|97|
|[async] async function|17,810,950|87|
|[async] function|175,000|21|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846300017.8503109,"samples":7},{"name":"[async] async function","opsSec":17810949.68794603,"samples":6},{"name":"[async] function","opsSec":174999.5703403363,"samples":3}]}-->
