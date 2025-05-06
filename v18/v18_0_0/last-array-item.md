## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,930,426|10465218|
|Length = 10_000 - Array.at|20,838,384|10419462|
|Length = 1_000_000 - Array.at|20,106,211|10053123|
|Length = 100 - Array[length - 1]|101,846,357|50923196|
|Length = 10_000 - Array[length - 1]|92,233,844|46117547|
|Length = 1_000_000 - Array[length - 1]|98,739,710|49375829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10465218,"opsSec":20930426.24642137},{"name":"Length = 10_000 - Array.at","samples":10419462,"opsSec":20838384.785955276},{"name":"Length = 1_000_000 - Array.at","samples":10053123,"opsSec":20106211.05540519},{"name":"Length = 100 - Array[length - 1]","samples":50923196,"opsSec":101846357.98331642},{"name":"Length = 10_000 - Array[length - 1]","samples":46117547,"opsSec":92233844.96927142},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49375829,"opsSec":98739710.10011905}]}-->
