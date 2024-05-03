## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,751,941|98|
|[async] async function|18,802,937|88|
|[async] function|340,866|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911751940.5422845,"samples":6},{"name":"[async] async function","opsSec":18802936.579410058,"samples":7},{"name":"[async] function","opsSec":340866.39330481016,"samples":3}]}-->
