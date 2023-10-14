## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,978,805|92|
|Using Object.getOwnPropertyNames()|55,733,510|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":63978804.88729479,"cycles":6,"stats":{"deviation":1.0272129962218972e-9,"mean":1.5630176302317654e-8,"moe":2.0990494169864064e-10,"rme":1.3429467309816319,"sem":1.0709435800951053e-10,"variance":1.0551665396071672e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":55733509.74397907,"cycles":8,"stats":{"deviation":1.0081052105745563e-9,"mean":1.7942526939244675e-8,"moe":2.0944351966234936e-10,"rme":1.167302244391482,"sem":1.0685893860323948e-10,"variance":1.0162761155875706e-18}}]}-->
