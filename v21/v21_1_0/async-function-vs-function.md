## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,030,478|97|
|[async] async function|17,421,265|88|
|[async] function|178,736|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846030478.3479972,"samples":6},{"name":"[async] async function","opsSec":17421265.35641136,"samples":7},{"name":"[async] function","opsSec":178735.71804531565,"samples":3}]}-->
