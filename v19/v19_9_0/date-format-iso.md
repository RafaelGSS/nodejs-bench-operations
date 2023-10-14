## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,047,062|97|
|fromUnixToISOString(new Date())|1,509,543|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","hz":1047061.6141009066,"cycles":4,"stats":{"deviation":1.2568196802828346e-8,"mean":9.550536344116505e-7,"moe":2.5011698035736894e-9,"rme":0.2618878891670315,"sem":1.2761070426396375e-9,"variance":1.5795957087462464e-16}},{"name":"fromUnixToISOString(new Date())","hz":1509543.4304328295,"cycles":8,"stats":{"deviation":4.6659592509058163e-8,"mean":6.624519572207812e-7,"moe":9.483213731428987e-9,"rme":1.4315322987669026,"sem":4.8383743527698915e-9,"variance":2.1771175731113568e-15}}]}-->
