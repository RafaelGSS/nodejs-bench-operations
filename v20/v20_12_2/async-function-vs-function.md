## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|938,428,820|98|
|[async] async function|19,620,979|89|
|[async] function|298,608|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":938428819.5340297,"samples":8},{"name":"[async] async function","opsSec":19620978.669716783,"samples":6},{"name":"[async] function","opsSec":298608.46033545485,"samples":3}]}-->
