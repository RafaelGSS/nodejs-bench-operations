## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,127,751|96|
|[async] async function|17,554,029|87|
|[async] function|188,970|22|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:42:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":845127750.7061504,"samples":6},{"name":"[async] async function","opsSec":17554029.15227519,"samples":6},{"name":"[async] function","opsSec":188970.33019063598,"samples":3}]}-->
