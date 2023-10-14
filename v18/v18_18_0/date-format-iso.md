## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,666,064|95|
|fromUnixToISOString(new Date())|1,334,039|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1666063.9439747168,"cycles":6,"stats":{"deviation":1.060312258120572e-8,"mean":6.002170586648116e-7,"moe":2.1322005496331767e-9,"rme":0.35523824570669094,"sem":1.0878574232822331e-9,"variance":1.1242620847207464e-16}},{"name":"fromUnixToISOString(new Date())","hz":1334039.489862225,"cycles":7,"stats":{"deviation":1.3324418663183106e-8,"mean":7.496029972120814e-7,"moe":2.6516638888903667e-9,"rme":0.3537424341621388,"sem":1.352889739229779e-9,"variance":1.7754013271178226e-16}}]}-->
