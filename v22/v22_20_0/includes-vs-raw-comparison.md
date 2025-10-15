## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,168,766|37105533|
|using Array.includes (first item)|83,211,763|41607427|
|Using raw comparison|97,231,204|48615606|
|Using raw comparison (first item)|98,367,872|49193854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37105533,"opsSec":74168766.06933534},{"name":"using Array.includes (first item)","samples":41607427,"opsSec":83211763.51510304},{"name":"Using raw comparison","samples":48615606,"opsSec":97231204.02704129},{"name":"Using raw comparison (first item)","samples":49193854,"opsSec":98367872.90537162}]}-->
