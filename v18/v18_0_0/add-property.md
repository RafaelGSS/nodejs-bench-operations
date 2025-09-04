## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,621,459|38822369|
|Using dot notation|67,935,193|33968708|
|Using define property (writable)|4,596,485|2298318|
|Using define property initialized (writable)|5,562,598|2781303|
|Using define property (getter)|2,090,041|1050156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":38822369,"opsSec":77621459.16915224},{"name":"Using dot notation","samples":33968708,"opsSec":67935193.02461384},{"name":"Using define property (writable)","samples":2298318,"opsSec":4596485.106586921},{"name":"Using define property initialized (writable)","samples":2781303,"opsSec":5562598.279113588},{"name":"Using define property (getter)","samples":1050156,"opsSec":2090041.298793023}]}-->
