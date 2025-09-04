## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|102,666,297|51340681|
|Using backtick (`)|99,869,358|49934690|
|Using array.join|10,317,177|5159600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":51340681,"opsSec":102666297.7741276},{"name":"Using backtick (`)","samples":49934690,"opsSec":99869358.2284799},{"name":"Using array.join","samples":5159600,"opsSec":10317177.069823211}]}-->
