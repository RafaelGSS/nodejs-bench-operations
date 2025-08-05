## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,266,461|46133263|
|Length = 10_000 - Array.at|91,604,897|45839527|
|Length = 1_000_000 - Array.at|92,959,039|46495237|
|Length = 100 - Array[length - 1]|94,642,917|47321522|
|Length = 10_000 - Array[length - 1]|94,081,996|47041145|
|Length = 1_000_000 - Array[length - 1]|91,196,766|45599274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:28:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46133263,"opsSec":92266461.59800981},{"name":"Length = 10_000 - Array.at","samples":45839527,"opsSec":91604897.45378383},{"name":"Length = 1_000_000 - Array.at","samples":46495237,"opsSec":92959039.9006576},{"name":"Length = 100 - Array[length - 1]","samples":47321522,"opsSec":94642917.74634773},{"name":"Length = 10_000 - Array[length - 1]","samples":47041145,"opsSec":94081996.27600762},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45599274,"opsSec":91196766.19758202}]}-->
