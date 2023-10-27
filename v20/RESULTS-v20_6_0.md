## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|718,082,898|97|
|[async] async function|11,528,474|87|
|[async] function|144,519|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":718082897.907766,"samples":8},{"name":"[async] async function","opsSec":11528474.037230631,"samples":6},{"name":"[async] function","opsSec":144518.73907157217,"samples":3}]}-->
