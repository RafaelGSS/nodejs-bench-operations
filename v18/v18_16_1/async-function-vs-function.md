## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|593,622,745|98|
|[async] async function|11,324,161|85|
|[async] function|191,195|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"function","opsSec":593622745.268764,"samples":9},{"name":"[async] async function","opsSec":11324160.673688259,"samples":8},{"name":"[async] function","opsSec":191195.40374358904,"samples":3}]}-->
