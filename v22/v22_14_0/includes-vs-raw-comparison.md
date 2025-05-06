## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,980,477|35990249|
|using Array.includes (first item)|83,043,861|41530266|
|Using raw comparison|96,295,181|48147605|
|Using raw comparison (first item)|98,143,734|49073318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35990249,"opsSec":71980477.8454662},{"name":"using Array.includes (first item)","samples":41530266,"opsSec":83043861.27702409},{"name":"Using raw comparison","samples":48147605,"opsSec":96295181.49662627},{"name":"Using raw comparison (first item)","samples":49073318,"opsSec":98143734.08607055}]}-->
