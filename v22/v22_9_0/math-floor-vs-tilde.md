## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,701,187|69850623|
|~ (small)|96,858,535|48429433|
|Math.floor (long)|95,832,718|47916368|
|~ (long)|94,483,102|47241558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:28:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":139701187.04609907,"samples":69850623},{"name":"~ (small)","opsSec":96858535.13124399,"samples":48429433},{"name":"Math.floor (long)","opsSec":95832718.94177602,"samples":47916368},{"name":"~ (long)","opsSec":94483102.58339943,"samples":47241558}]}-->
