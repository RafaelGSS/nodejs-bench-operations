## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,653,275|35383416|
|using Array.includes (first item)|86,480,311|43240877|
|Using raw comparison|106,537,617|53268821|
|Using raw comparison (first item)|103,223,009|51611517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35383416,"opsSec":70653275.37099926},{"name":"using Array.includes (first item)","samples":43240877,"opsSec":86480311.50840403},{"name":"Using raw comparison","samples":53268821,"opsSec":106537617.49634798},{"name":"Using raw comparison (first item)","samples":51611517,"opsSec":103223009.22647777}]}-->
