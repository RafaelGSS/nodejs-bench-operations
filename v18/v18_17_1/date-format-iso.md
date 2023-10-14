## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,206,550|87|
|fromUnixToISOString(new Date())|997,933|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1206549.7543266083,"cycles":6,"stats":{"deviation":5.344942599125016e-8,"mean":8.288095840341979e-7,"moe":1.1231544718680446e-8,"rme":1.3551417521032207,"sem":5.730379958510431e-9,"variance":2.8568411387941278e-15}},{"name":"fromUnixToISOString(new Date())","hz":997932.5914203875,"cycles":6,"stats":{"deviation":5.9408369719685395e-8,"mean":0.0000010020716916126268,"moe":1.2629735144720317e-8,"rme":1.2603624321923887,"sem":6.443742420775672e-9,"variance":3.529354392750832e-15}}]}-->
