## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,734,726|1867732|
|Using delete property (proto: null)|17,362,093|8681053|
|Using delete property (cached proto: null)|3,767,456|1883987|
|Using undefined assignment|85,936,507|42972401|
|Using undefined assignment (proto: null)|18,490,556|9249688|
|Using undefined property (cached proto: null)|86,230,209|43115112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1867732,"opsSec":3734726.6006410625},{"name":"Using delete property (proto: null)","samples":8681053,"opsSec":17362093.395120196},{"name":"Using delete property (cached proto: null)","samples":1883987,"opsSec":3767456.374098937},{"name":"Using undefined assignment","samples":42972401,"opsSec":85936507.23644853},{"name":"Using undefined assignment (proto: null)","samples":9249688,"opsSec":18490556.41138401},{"name":"Using undefined property (cached proto: null)","samples":43115112,"opsSec":86230209.3408644}]}-->
