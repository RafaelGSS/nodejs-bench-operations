## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,568,979|33793786|
|using Array.includes (first item)|86,108,755|43054438|
|Using raw comparison|104,869,248|52440065|
|Using raw comparison (first item)|102,547,261|51275397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33793786,"opsSec":67568979.4493388},{"name":"using Array.includes (first item)","samples":43054438,"opsSec":86108755.2755251},{"name":"Using raw comparison","samples":52440065,"opsSec":104869248.55703123},{"name":"Using raw comparison (first item)","samples":51275397,"opsSec":102547261.04176259}]}-->
