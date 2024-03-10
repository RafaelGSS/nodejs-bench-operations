## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|827,285,724|100|
|[async] async function|17,739,461|86|
|[async] function|352,815|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":827285723.8030511,"samples":6},{"name":"[async] async function","opsSec":17739461.388320867,"samples":6},{"name":"[async] function","opsSec":352814.6687229978,"samples":3}]}-->
