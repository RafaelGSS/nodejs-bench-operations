## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,913,258|98|
|[async] async function|17,300,010|84|
|[async] function|350,030|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:16:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":845913258.0648053,"samples":6},{"name":"[async] async function","opsSec":17300010.272144042,"samples":7},{"name":"[async] function","opsSec":350029.57607912517,"samples":3}]}-->
