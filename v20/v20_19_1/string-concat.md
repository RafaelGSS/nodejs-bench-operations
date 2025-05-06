## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|97,966,881|49309759|
|Using backtick (`)|102,253,055|51126532|
|Using array.join|10,622,660|5313685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":49309759,"opsSec":97966881.8347259},{"name":"Using backtick (`)","samples":51126532,"opsSec":102253055.41074334},{"name":"Using array.join","samples":5313685,"opsSec":10622660.953154145}]}-->
