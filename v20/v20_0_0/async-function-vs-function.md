## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,877,407|98|
|[async] async function|16,467,134|82|
|[async] function|347,875|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822877406.9997112,"samples":6},{"name":"[async] async function","opsSec":16467133.73367403,"samples":6},{"name":"[async] function","opsSec":347874.8311839141,"samples":3}]}-->
