## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,869,784|97|
|using Array.includes (first item)|711,312,653|93|
|Using raw comparison|715,208,388|98|
|Using raw comparison (first item)|713,665,733|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":707869783.9923298,"samples":8},{"name":"using Array.includes (first item)","opsSec":711312653.0781958,"samples":6},{"name":"Using raw comparison","opsSec":715208388.1650547,"samples":6},{"name":"Using raw comparison (first item)","opsSec":713665732.9213796,"samples":9}]}-->
