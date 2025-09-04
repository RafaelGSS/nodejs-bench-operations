## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,361,280|35680673|
|using Array.includes (first item)|82,246,610|41123312|
|Using raw comparison|99,669,285|49836501|
|Using raw comparison (first item)|99,771,139|49904093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35680673,"opsSec":71361280.77578938},{"name":"using Array.includes (first item)","samples":41123312,"opsSec":82246610.67604907},{"name":"Using raw comparison","samples":49836501,"opsSec":99669285.5316811},{"name":"Using raw comparison (first item)","samples":49904093,"opsSec":99771139.57907835}]}-->
