## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|141,769,786|80|
|[async] async function|19,457,725|89|
|[async] function|202,792|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":141769785.730426,"samples":5},{"name":"[async] async function","opsSec":19457725.183432702,"samples":7},{"name":"[async] function","opsSec":202791.98093113885,"samples":3}]}-->
