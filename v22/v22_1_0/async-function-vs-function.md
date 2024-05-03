## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|139,367,380|78|
|[async] async function|19,255,413|89|
|[async] function|221,145|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":139367380.38977394,"samples":4},{"name":"[async] async function","opsSec":19255413.35297198,"samples":8},{"name":"[async] function","opsSec":221145.49805896837,"samples":3}]}-->
