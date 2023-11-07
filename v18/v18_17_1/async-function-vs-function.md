## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,302,785|99|
|[async] async function|17,182,390|88|
|[async] function|303,902|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:15:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848302785.4545801,"samples":7},{"name":"[async] async function","opsSec":17182390.387785655,"samples":6},{"name":"[async] function","opsSec":303902.077938215,"samples":3}]}-->
