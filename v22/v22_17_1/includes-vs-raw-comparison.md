## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|63,903,060|32229819|
|using Array.includes (first item)|82,883,929|41454824|
|Using raw comparison|99,384,457|49692236|
|Using raw comparison (first item)|98,873,085|49447212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":32229819,"opsSec":63903060.744992614},{"name":"using Array.includes (first item)","samples":41454824,"opsSec":82883929.44822793},{"name":"Using raw comparison","samples":49692236,"opsSec":99384457.6886381},{"name":"Using raw comparison (first item)","samples":49447212,"opsSec":98873085.60615681}]}-->
