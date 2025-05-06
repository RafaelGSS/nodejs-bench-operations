## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,618,379|35310707|
|using Array.includes (first item)|81,057,498|40528756|
|Using raw comparison|95,585,078|47796420|
|Using raw comparison (first item)|98,377,319|49188674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35310707,"opsSec":70618379.66946235},{"name":"using Array.includes (first item)","samples":40528756,"opsSec":81057498.22022529},{"name":"Using raw comparison","samples":47796420,"opsSec":95585078.87393574},{"name":"Using raw comparison (first item)","samples":49188674,"opsSec":98377319.0770682}]}-->
