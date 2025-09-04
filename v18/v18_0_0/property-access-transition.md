## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,760,728|1880400|
|Adding property in the object creation - small object|3,734,387|1867195|
|Adding property after the function creation - small class|230,123|115204|
|Adding property in the function creation - small class|224,665|114161|
|Adding property after the class creation - small class|198,008|100259|
|Adding property in the class creation - small class|197,399|98708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1880400,"opsSec":3760728.959829949},{"name":"Adding property in the object creation - small object","samples":1867195,"opsSec":3734387.677210865},{"name":"Adding property after the function creation - small class","samples":115204,"opsSec":230123.9566196007},{"name":"Adding property in the function creation - small class","samples":114161,"opsSec":224665.58424171928},{"name":"Adding property after the class creation - small class","samples":100259,"opsSec":198008.55481722538},{"name":"Adding property in the class creation - small class","samples":98708,"opsSec":197399.40423728697}]}-->
