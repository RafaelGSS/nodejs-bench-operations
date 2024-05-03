## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,438,657|98|
|[async] async function|18,518,351|87|
|[async] function|203,510|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911438656.687967,"samples":6},{"name":"[async] async function","opsSec":18518351.206703,"samples":8},{"name":"[async] function","opsSec":203509.58281390494,"samples":3}]}-->
