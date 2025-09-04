## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,121,098|35060568|
|using Array.includes (first item)|79,343,707|39671871|
|Using raw comparison|98,479,107|49239589|
|Using raw comparison (first item)|98,975,290|49490322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:10:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35060568,"opsSec":70121098.27484912},{"name":"using Array.includes (first item)","samples":39671871,"opsSec":79343707.8822056},{"name":"Using raw comparison","samples":49239589,"opsSec":98479107.68591711},{"name":"Using raw comparison (first item)","samples":49490322,"opsSec":98975290.42654084}]}-->
