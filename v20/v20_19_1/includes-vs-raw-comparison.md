## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,512,058|34756870|
|using Array.includes (first item)|74,904,902|37454263|
|Using raw comparison|87,510,325|43755174|
|Using raw comparison (first item)|88,876,943|44438508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34756870,"opsSec":69512058.50330481},{"name":"using Array.includes (first item)","samples":37454263,"opsSec":74904902.40044147},{"name":"Using raw comparison","samples":43755174,"opsSec":87510325.24731544},{"name":"Using raw comparison (first item)","samples":44438508,"opsSec":88876943.29866038}]}-->
