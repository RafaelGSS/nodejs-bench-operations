## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,749,653|91|
|fromUnixToISOString(new Date())|1,339,161|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":1749652.9591617852,"cycles":7,"stats":{"deviation":5.045369706255347e-8,"mean":5.71541913362679e-7,"moe":1.0366409735098256e-8,"rme":1.8137619468898203,"sem":5.2889845587236e-9,"variance":2.545575547279917e-15}},{"name":"fromUnixToISOString(new Date())","hz":1339161.4678486579,"cycles":7,"stats":{"deviation":1.9241915650875754e-8,"mean":7.467359418625481e-7,"moe":3.829292232124488e-9,"rme":0.5128040606393293,"sem":1.9537205265941263e-9,"variance":3.7025131791541727e-16}}]}-->
