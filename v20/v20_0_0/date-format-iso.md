## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|980,715|95|
|fromUnixToISOString(new Date())|1,551,352|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":980714.8833549173,"cycles":5,"stats":{"deviation":1.4601220528615106e-8,"mean":0.0000010196643458485207,"moe":2.9361850905705683e-9,"rme":0.2879560418607362,"sem":1.4980536176380451e-9,"variance":2.1319564092525117e-16}},{"name":"fromUnixToISOString(new Date())","hz":1551352.0232067395,"cycles":5,"stats":{"deviation":4.3850080969364924e-8,"mean":6.445990239745451e-7,"moe":9.21439540633804e-9,"rme":1.4294770956249405,"sem":4.701222146090837e-9,"variance":1.92282960101986e-15}}]}-->
