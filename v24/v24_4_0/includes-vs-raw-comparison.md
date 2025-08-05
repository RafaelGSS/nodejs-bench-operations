## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,147,832|34580204|
|using Array.includes (first item)|77,276,406|38641487|
|Using raw comparison|96,899,756|48450421|
|Using raw comparison (first item)|96,899,156|48449583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:26:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34580204,"opsSec":69147832.636861},{"name":"using Array.includes (first item)","samples":38641487,"opsSec":77276406.58730976},{"name":"Using raw comparison","samples":48450421,"opsSec":96899756.14133269},{"name":"Using raw comparison (first item)","samples":48449583,"opsSec":96899156.31008436}]}-->
