## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,657,757|49828928|
|Length = 10_000 - Array.at|100,726,650|50363335|
|Length = 1_000_000 - Array.at|99,254,720|49628154|
|Length = 100 - Array[length - 1]|98,133,582|49067127|
|Length = 10_000 - Array[length - 1]|86,939,950|43473839|
|Length = 1_000_000 - Array[length - 1]|99,581,791|49820289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:46:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49828928,"opsSec":99657757.13950492},{"name":"Length = 10_000 - Array.at","samples":50363335,"opsSec":100726650.05612329},{"name":"Length = 1_000_000 - Array.at","samples":49628154,"opsSec":99254720.91701253},{"name":"Length = 100 - Array[length - 1]","samples":49067127,"opsSec":98133582.57002807},{"name":"Length = 10_000 - Array[length - 1]","samples":43473839,"opsSec":86939950.77717492},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49820289,"opsSec":99581791.28366078}]}-->
