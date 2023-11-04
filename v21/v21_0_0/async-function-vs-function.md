## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|592,882,655|97|
|[async] async function|12,942,578|82|
|[async] function|141,316|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":592882654.7597103,"samples":8},{"name":"[async] async function","opsSec":12942578.464322563,"samples":7},{"name":"[async] function","opsSec":141315.6839449993,"samples":3}]}-->
