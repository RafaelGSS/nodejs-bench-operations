## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,104,847|94|
|[async] async function|16,754,381|84|
|[async] function|204,595|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822104846.9222684,"samples":6},{"name":"[async] async function","opsSec":16754380.719680255,"samples":6},{"name":"[async] function","opsSec":204595.31457990562,"samples":3}]}-->
