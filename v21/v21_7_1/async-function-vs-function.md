## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|817,382,639|99|
|[async] async function|16,029,211|84|
|[async] function|271,685|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":817382638.8484887,"samples":9},{"name":"[async] async function","opsSec":16029211.29120887,"samples":7},{"name":"[async] function","opsSec":271684.7991591355,"samples":3}]}-->
