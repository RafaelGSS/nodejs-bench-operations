## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,783,576|33891796|
|using Array.includes (first item)|74,702,079|37351898|
|Using raw comparison|91,828,209|45924845|
|Using raw comparison (first item)|91,983,146|45991580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33891796,"opsSec":67783576.95204592},{"name":"using Array.includes (first item)","samples":37351898,"opsSec":74702079.94381952},{"name":"Using raw comparison","samples":45924845,"opsSec":91828209.36160971},{"name":"Using raw comparison (first item)","samples":45991580,"opsSec":91983146.01856181}]}-->
