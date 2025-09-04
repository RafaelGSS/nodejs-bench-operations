## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,138,696|33627826|
|using Array.includes (first item)|76,462,377|38231286|
|Using raw comparison|99,187,516|49606807|
|Using raw comparison (first item)|99,826,949|49913480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33627826,"opsSec":67138696.79301874},{"name":"using Array.includes (first item)","samples":38231286,"opsSec":76462377.4797117},{"name":"Using raw comparison","samples":49606807,"opsSec":99187516.17749345},{"name":"Using raw comparison (first item)","samples":49913480,"opsSec":99826949.01903561}]}-->
