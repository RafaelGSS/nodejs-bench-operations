## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|91,613,130|45806576|
|Length = 10_000 - Array.at|90,904,931|45452473|
|Length = 1_000_000 - Array.at|91,665,790|45832921|
|Length = 100 - Array[length - 1]|89,528,530|44764291|
|Length = 10_000 - Array[length - 1]|90,686,142|45383290|
|Length = 1_000_000 - Array[length - 1]|90,670,134|45335179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:49:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45806576,"opsSec":91613130.56252745},{"name":"Length = 10_000 - Array.at","samples":45452473,"opsSec":90904931.6370208},{"name":"Length = 1_000_000 - Array.at","samples":45832921,"opsSec":91665790.8504887},{"name":"Length = 100 - Array[length - 1]","samples":44764291,"opsSec":89528530.2525095},{"name":"Length = 10_000 - Array[length - 1]","samples":45383290,"opsSec":90686142.47985408},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45335179,"opsSec":90670134.95146802}]}-->
