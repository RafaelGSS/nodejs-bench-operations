## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,703,621|98|
|[async] async function|15,853,446|89|
|[async] function|182,484|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822703621.3770522,"samples":6},{"name":"[async] async function","opsSec":15853445.868081078,"samples":6},{"name":"[async] function","opsSec":182484.2006750794,"samples":3}]}-->
