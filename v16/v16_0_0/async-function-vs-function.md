## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|844,739,126|99|
|[async] async function|17,274,519|88|
|[async] function|282,543|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:12:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":844739126.1236808,"samples":7},{"name":"[async] async function","opsSec":17274519.068543047,"samples":6},{"name":"[async] function","opsSec":282542.7089811349,"samples":3}]}-->
