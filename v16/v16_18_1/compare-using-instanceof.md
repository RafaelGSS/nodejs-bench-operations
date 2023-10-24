## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,435|52|
|[True conditional] Using constructor name|115,781|89|
|[True conditional] Check if property is valid then instanceof |114,891|86|
|[False conditional] Using instanceof only|644,589,386|90|
|[False conditional] Using constructor name|642,673,950|88|
|[False conditional] Check if property is valid then instanceof |651,029,733|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":144435.05443439886,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":115780.59939490957,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":114890.62797608816,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":644589386.3129027,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":642673949.9575279,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":651029732.7016208,"samples":6}]}-->
