## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,882,655|98|
|[async] async function|18,262,586|88|
|[async] function|215,588|25|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:23:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910882654.6548169,"samples":6},{"name":"[async] async function","opsSec":18262586.081368785,"samples":6},{"name":"[async] function","opsSec":215587.86602412837,"samples":3}]}-->
