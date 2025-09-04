## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|91,605,273|45805615|
|Using dot notation|62,781,732|31415180|
|Using define property (writable)|4,800,509|2400482|
|Using define property initialized (writable)|7,036,349|3518989|
|Using define property (getter)|2,380,140|1190131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:09:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":45805615,"opsSec":91605273.64189726},{"name":"Using dot notation","samples":31415180,"opsSec":62781732.911027625},{"name":"Using define property (writable)","samples":2400482,"opsSec":4800509.007756245},{"name":"Using define property initialized (writable)","samples":3518989,"opsSec":7036349.225881193},{"name":"Using define property (getter)","samples":1190131,"opsSec":2380140.0701844846}]}-->
