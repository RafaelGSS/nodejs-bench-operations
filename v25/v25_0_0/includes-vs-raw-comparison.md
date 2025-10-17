## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,825,574|34413476|
|using Array.includes (first item)|78,707,323|39353669|
|Using raw comparison|99,090,813|49545512|
|Using raw comparison (first item)|90,371,844|45186727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34413476,"opsSec":68825574.66259985},{"name":"using Array.includes (first item)","samples":39353669,"opsSec":78707323.83268172},{"name":"Using raw comparison","samples":49545512,"opsSec":99090813.72929327},{"name":"Using raw comparison (first item)","samples":45186727,"opsSec":90371844.47744986}]}-->
