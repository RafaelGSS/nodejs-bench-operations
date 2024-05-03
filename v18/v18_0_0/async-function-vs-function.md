## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,405,458|98|
|[async] async function|18,815,139|87|
|[async] function|329,820|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:37:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911405457.9563723,"samples":6},{"name":"[async] async function","opsSec":18815138.608408354,"samples":9},{"name":"[async] function","opsSec":329820.4757901804,"samples":3}]}-->
