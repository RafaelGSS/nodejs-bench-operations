## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,066,908|10592784|
|Length = 10_000 - Array.at|20,687,785|10343899|
|Length = 1_000_000 - Array.at|21,198,384|10599351|
|Length = 100 - Array[length - 1]|101,568,783|50787747|
|Length = 10_000 - Array[length - 1]|102,575,249|51287638|
|Length = 1_000_000 - Array[length - 1]|89,237,507|44618763|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10592784,"opsSec":21066908.26002108},{"name":"Length = 10_000 - Array.at","samples":10343899,"opsSec":20687785.297699828},{"name":"Length = 1_000_000 - Array.at","samples":10599351,"opsSec":21198384.321012564},{"name":"Length = 100 - Array[length - 1]","samples":50787747,"opsSec":101568783.55360818},{"name":"Length = 10_000 - Array[length - 1]","samples":51287638,"opsSec":102575249.12528473},{"name":"Length = 1_000_000 - Array[length - 1]","samples":44618763,"opsSec":89237507.0816485}]}-->
