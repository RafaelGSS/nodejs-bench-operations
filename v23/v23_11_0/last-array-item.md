## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,096,041|46049516|
|Length = 10_000 - Array.at|95,561,484|47796798|
|Length = 1_000_000 - Array.at|95,015,203|47516409|
|Length = 100 - Array[length - 1]|94,104,451|47057983|
|Length = 10_000 - Array[length - 1]|91,871,457|45935838|
|Length = 1_000_000 - Array[length - 1]|93,501,247|46750649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46049516,"opsSec":92096041.825714},{"name":"Length = 10_000 - Array.at","samples":47796798,"opsSec":95561484.47437209},{"name":"Length = 1_000_000 - Array.at","samples":47516409,"opsSec":95015203.70147702},{"name":"Length = 100 - Array[length - 1]","samples":47057983,"opsSec":94104451.5675151},{"name":"Length = 10_000 - Array[length - 1]","samples":45935838,"opsSec":91871457.16218905},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46750649,"opsSec":93501247.50932634}]}-->
