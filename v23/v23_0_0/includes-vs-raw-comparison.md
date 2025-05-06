## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,666,280|35333166|
|using Array.includes (first item)|78,891,924|39446092|
|Using raw comparison|83,555,941|41777978|
|Using raw comparison (first item)|95,406,668|47704139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:52:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35333166,"opsSec":70666280.83761267},{"name":"using Array.includes (first item)","samples":39446092,"opsSec":78891924.28778525},{"name":"Using raw comparison","samples":41777978,"opsSec":83555941.46126619},{"name":"Using raw comparison (first item)","samples":47704139,"opsSec":95406668.29869246}]}-->
