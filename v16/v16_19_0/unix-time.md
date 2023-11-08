## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,270,509|99|
|Date.now()|20,870,490|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:14:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11270508.753450064,"samples":5},{"name":"Date.now()","opsSec":20870489.659960553,"samples":7}]}-->
