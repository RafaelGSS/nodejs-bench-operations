## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,004,120|50030610|
|Using backtick (`)|99,898,013|49950838|
|Using array.join|10,614,780|5307539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50030610,"opsSec":100004120.24744584},{"name":"Using backtick (`)","samples":49950838,"opsSec":99898013.33923893},{"name":"Using array.join","samples":5307539,"opsSec":10614780.19172694}]}-->
