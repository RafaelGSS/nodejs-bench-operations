## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|126,546,144|63495304|
|~ (small)|98,865,056|49432537|
|Math.floor (long)|92,490,367|46432697|
|~ (long)|96,376,265|48192947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:15:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":126546144.53222068,"samples":63495304},{"name":"~ (small)","opsSec":98865056.0065598,"samples":49432537},{"name":"Math.floor (long)","opsSec":92490367.01950108,"samples":46432697},{"name":"~ (long)","opsSec":96376265.62555894,"samples":48192947}]}-->
