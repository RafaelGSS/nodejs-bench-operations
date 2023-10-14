## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,367,450|90|
|fromUnixToISOString(new Date())|1,087,985|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":1367450.2952870834,"cycles":5,"stats":{"deviation":3.4804315914050965e-8,"mean":7.312880061867692e-7,"moe":7.190646165239816e-9,"rme":0.9832851221962121,"sem":3.668697023081539e-9,"variance":1.2113404062450613e-15}},{"name":"fromUnixToISOString(new Date())","hz":1087985.042777881,"cycles":6,"stats":{"deviation":4.952661081268425e-8,"mean":9.191302827534884e-7,"moe":1.040722765102112e-8,"rme":1.1322908021095361,"sem":5.309810026031184e-9,"variance":2.4528851785910924e-15}}]}-->
