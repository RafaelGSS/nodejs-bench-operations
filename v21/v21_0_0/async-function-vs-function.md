## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|823,583,220|98|
|[async] async function|16,721,348|86|
|[async] function|168,367|22|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":823583220.4964,"samples":6},{"name":"[async] async function","opsSec":16721347.673194252,"samples":5},{"name":"[async] function","opsSec":168367.05586191601,"samples":3}]}-->
