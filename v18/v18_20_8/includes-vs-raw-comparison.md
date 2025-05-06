## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,997,276|36053992|
|using Array.includes (first item)|86,729,948|43369690|
|Using raw comparison|102,997,797|51499780|
|Using raw comparison (first item)|106,399,624|53199842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":36053992,"opsSec":71997276.52378587},{"name":"using Array.includes (first item)","samples":43369690,"opsSec":86729948.46502422},{"name":"Using raw comparison","samples":51499780,"opsSec":102997797.08970502},{"name":"Using raw comparison (first item)","samples":53199842,"opsSec":106399624.62900946}]}-->
