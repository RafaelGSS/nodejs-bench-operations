## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,543,562|10782261|
|Length = 10_000 - Array.at|21,462,620|10778946|
|Length = 1_000_000 - Array.at|21,295,465|10653680|
|Length = 100 - Array[length - 1]|102,272,843|51137584|
|Length = 10_000 - Array[length - 1]|102,123,031|51068463|
|Length = 1_000_000 - Array[length - 1]|101,565,000|50787003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10782261,"opsSec":21543562.09608822},{"name":"Length = 10_000 - Array.at","samples":10778946,"opsSec":21462620.244315054},{"name":"Length = 1_000_000 - Array.at","samples":10653680,"opsSec":21295465.800895296},{"name":"Length = 100 - Array[length - 1]","samples":51137584,"opsSec":102272843.33827092},{"name":"Length = 10_000 - Array[length - 1]","samples":51068463,"opsSec":102123031.54881959},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50787003,"opsSec":101565000.0283175}]}-->
