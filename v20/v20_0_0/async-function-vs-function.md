## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|916,920,915|98|
|[async] async function|19,478,582|87|
|[async] function|392,799|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:38:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":916920915.2119774,"samples":6},{"name":"[async] async function","opsSec":19478582.476929903,"samples":6},{"name":"[async] function","opsSec":392799.22467141727,"samples":3}]}-->
