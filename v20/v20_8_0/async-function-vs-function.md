## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|851,520,713|94|
|[async] async function|17,443,859|89|
|[async] function|193,073|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:17:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":851520713.1207997,"samples":8},{"name":"[async] async function","opsSec":17443859.435324624,"samples":7},{"name":"[async] function","opsSec":193072.71119038048,"samples":3}]}-->
