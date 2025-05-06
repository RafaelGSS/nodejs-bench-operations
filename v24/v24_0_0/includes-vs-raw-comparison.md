## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,163,678|35081859|
|using Array.includes (first item)|78,558,790|39283828|
|Using raw comparison|97,629,149|48814603|
|Using raw comparison (first item)|97,831,492|48946335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35081859,"opsSec":70163678.98899448},{"name":"using Array.includes (first item)","samples":39283828,"opsSec":78558790.01207681},{"name":"Using raw comparison","samples":48814603,"opsSec":97629149.17983519},{"name":"Using raw comparison (first item)","samples":48946335,"opsSec":97831492.25029917}]}-->
