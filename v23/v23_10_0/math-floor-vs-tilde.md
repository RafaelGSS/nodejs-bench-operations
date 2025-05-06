## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,247,483|48623775|
|~ (small)|97,203,230|48602843|
|Math.floor (long)|96,927,736|48512714|
|~ (long)|86,126,048|43407537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":48623775,"opsSec":97247483.87171096},{"name":"~ (small)","samples":48602843,"opsSec":97203230.64639388},{"name":"Math.floor (long)","samples":48512714,"opsSec":96927736.27930336},{"name":"~ (long)","samples":43407537,"opsSec":86126048.72945878}]}-->
