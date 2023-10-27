## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|717,747,895|96|
|[async] async function|11,247,355|85|
|[async] function|133,941|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":717747895.214021,"samples":6},{"name":"[async] async function","opsSec":11247355.07940056,"samples":7},{"name":"[async] function","opsSec":133941.39438308278,"samples":3}]}-->
