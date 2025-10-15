## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|939,921|469963|
|Using brackets {}|990,610|495317|
|Using '' + |933,859|466930|
|Using date.toString()|1,016,831|508417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":469963,"opsSec":939921.6669611153},{"name":"Using brackets {}","samples":495317,"opsSec":990610.3759237549},{"name":"Using '' + ","samples":466930,"opsSec":933859.361240197},{"name":"Using date.toString()","samples":508417,"opsSec":1016831.7711047578}]}-->
