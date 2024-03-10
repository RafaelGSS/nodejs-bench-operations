## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,454,787|97|
|[async] async function|16,638,530|85|
|[async] function|282,008|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822454787.4152462,"samples":6},{"name":"[async] async function","opsSec":16638529.62999609,"samples":6},{"name":"[async] function","opsSec":282007.6160876214,"samples":3}]}-->
