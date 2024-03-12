## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|819,180,676|95|
|[async] async function|15,939,105|81|
|[async] function|180,144|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":819180676.4569311,"samples":6},{"name":"[async] async function","opsSec":15939105.467807721,"samples":5},{"name":"[async] function","opsSec":180143.5163911745,"samples":3}]}-->
