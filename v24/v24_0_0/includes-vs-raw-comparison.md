## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,397,734|35204406|
|using Array.includes (first item)|79,120,035|39611822|
|Using raw comparison|98,575,417|49287735|
|Using raw comparison (first item)|99,104,683|49565776|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":35204406,"opsSec":70397734.35331763},{"name":"using Array.includes (first item)","samples":39611822,"opsSec":79120035.83834948},{"name":"Using raw comparison","samples":49287735,"opsSec":98575417.36072713},{"name":"Using raw comparison (first item)","samples":49565776,"opsSec":99104683.33288288}]}-->
