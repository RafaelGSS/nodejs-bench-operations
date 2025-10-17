## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|98,530,557|49332609|
|Using dot notation|70,388,128|35203573|
|Using define property (writable)|4,979,941|2490009|
|Using define property initialized (writable)|6,846,423|3423579|
|Using define property (getter)|2,375,763|1212123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":49332609,"opsSec":98530557.66626534},{"name":"Using dot notation","samples":35203573,"opsSec":70388128.5354323},{"name":"Using define property (writable)","samples":2490009,"opsSec":4979941.298944114},{"name":"Using define property initialized (writable)","samples":3423579,"opsSec":6846423.118635291},{"name":"Using define property (getter)","samples":1212123,"opsSec":2375763.304094575}]}-->
