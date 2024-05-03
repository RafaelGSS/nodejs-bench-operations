## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,584,628|98|
|[async] async function|17,949,683|88|
|[async] function|375,729|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911584628.1527041,"samples":6},{"name":"[async] async function","opsSec":17949682.752275303,"samples":6},{"name":"[async] function","opsSec":375729.40531532036,"samples":3}]}-->
