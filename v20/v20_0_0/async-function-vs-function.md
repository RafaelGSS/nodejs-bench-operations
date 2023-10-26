## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|881,304,516|87|
|[async] - function|122,377,182|85|
|[async] - await function|701,340|23|
|[async] - await async function|287,715|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":881304516.2787012,"samples":10},{"name":"[async] - function","opsSec":122377182.3031844,"samples":7},{"name":"[async] - await function","opsSec":701340.3583845956,"samples":3},{"name":"[async] - await async function","opsSec":287715.10875332495,"samples":3}]}-->
