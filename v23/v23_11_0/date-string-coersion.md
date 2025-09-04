## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,052,216|526119|
|Using brackets {}|1,084,478|542240|
|Using '' + |1,074,003|537939|
|Using date.toString()|1,189,274|594639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":526119,"opsSec":1052216.4169368558},{"name":"Using brackets {}","samples":542240,"opsSec":1084478.156387134},{"name":"Using '' + ","samples":537939,"opsSec":1074003.4344055885},{"name":"Using date.toString()","samples":594639,"opsSec":1189274.9031281522}]}-->
