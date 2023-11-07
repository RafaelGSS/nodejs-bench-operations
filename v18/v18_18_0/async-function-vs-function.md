## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,055,183|99|
|[async] async function|17,464,715|86|
|[async] function|295,442|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:16:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848055182.5511692,"samples":6},{"name":"[async] async function","opsSec":17464714.84648007,"samples":6},{"name":"[async] function","opsSec":295441.80535852385,"samples":3}]}-->
