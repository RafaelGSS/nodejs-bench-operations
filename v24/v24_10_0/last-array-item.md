## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,775,555|47887784|
|Length = 10_000 - Array.at|97,102,857|48587788|
|Length = 1_000_000 - Array.at|95,233,567|47616921|
|Length = 100 - Array[length - 1]|93,851,104|46925565|
|Length = 10_000 - Array[length - 1]|96,136,553|48068715|
|Length = 1_000_000 - Array[length - 1]|94,832,901|47416485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47887784,"opsSec":95775555.54917777},{"name":"Length = 10_000 - Array.at","samples":48587788,"opsSec":97102857.41793115},{"name":"Length = 1_000_000 - Array.at","samples":47616921,"opsSec":95233567.91779153},{"name":"Length = 100 - Array[length - 1]","samples":46925565,"opsSec":93851104.8479039},{"name":"Length = 10_000 - Array[length - 1]","samples":48068715,"opsSec":96136553.81144856},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47416485,"opsSec":94832901.53064509}]}-->
