## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|577,324,390|97|
|[async] async function|8,581,783|87|
|[async] function|173,982|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":577324389.903635,"samples":7},{"name":"[async] async function","opsSec":8581782.93318145,"samples":7},{"name":"[async] function","opsSec":173982.0046886619,"samples":3}]}-->
