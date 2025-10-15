## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,344,782|49700380|
|Length = 10_000 - Array.at|95,684,054|47856119|
|Length = 1_000_000 - Array.at|99,120,155|49560125|
|Length = 100 - Array[length - 1]|99,670,566|49835975|
|Length = 10_000 - Array[length - 1]|97,929,295|48965024|
|Length = 1_000_000 - Array[length - 1]|98,568,256|49303645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:46:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49700380,"opsSec":99344782.79130927},{"name":"Length = 10_000 - Array.at","samples":47856119,"opsSec":95684054.64444071},{"name":"Length = 1_000_000 - Array.at","samples":49560125,"opsSec":99120155.04289147},{"name":"Length = 100 - Array[length - 1]","samples":49835975,"opsSec":99670566.97121271},{"name":"Length = 10_000 - Array[length - 1]","samples":48965024,"opsSec":97929295.3154362},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49303645,"opsSec":98568256.57612284}]}-->
