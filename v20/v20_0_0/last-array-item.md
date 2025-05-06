## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,217,240|47608626|
|Length = 10_000 - Array.at|89,710,115|44855482|
|Length = 1_000_000 - Array.at|99,956,268|49998563|
|Length = 100 - Array[length - 1]|98,602,128|49308159|
|Length = 10_000 - Array[length - 1]|99,434,393|49784706|
|Length = 1_000_000 - Array[length - 1]|97,651,070|48841915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47608626,"opsSec":95217240.38349666},{"name":"Length = 10_000 - Array.at","samples":44855482,"opsSec":89710115.52172738},{"name":"Length = 1_000_000 - Array.at","samples":49998563,"opsSec":99956268.87509729},{"name":"Length = 100 - Array[length - 1]","samples":49308159,"opsSec":98602128.95643891},{"name":"Length = 10_000 - Array[length - 1]","samples":49784706,"opsSec":99434393.02074891},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48841915,"opsSec":97651070.7999766}]}-->
