## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,631,676|33320210|
|using Array.includes (first item)|77,515,874|38776204|
|Using raw comparison|94,452,587|47226301|
|Using raw comparison (first item)|91,002,030|45503504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33320210,"opsSec":66631676.0584142},{"name":"using Array.includes (first item)","samples":38776204,"opsSec":77515874.61326303},{"name":"Using raw comparison","samples":47226301,"opsSec":94452587.64320669},{"name":"Using raw comparison (first item)","samples":45503504,"opsSec":91002030.55293687}]}-->
