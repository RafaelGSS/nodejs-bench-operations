## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|641,493,858|92|
|[async] async function|7,492,959|81|
|[async] function|182,106|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"function","opsSec":641493858.3477589,"samples":6},{"name":"[async] async function","opsSec":7492959.315056846,"samples":7},{"name":"[async] function","opsSec":182105.62054086084,"samples":3}]}-->
