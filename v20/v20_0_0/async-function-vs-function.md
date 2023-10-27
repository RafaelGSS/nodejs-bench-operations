## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|760,278,025|83|
|[async] async function|9,411,154|76|
|[async] function|220,405|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"function","opsSec":760278025.4118245,"samples":6},{"name":"[async] async function","opsSec":9411153.947013495,"samples":7},{"name":"[async] function","opsSec":220404.64374461793,"samples":3}]}-->
