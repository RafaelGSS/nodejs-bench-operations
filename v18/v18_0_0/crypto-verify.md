## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,518|95|
|crypto.verify('RSA-SHA256')|1,499|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":1518.354817868792,"cycles":4,"stats":{"deviation":0.000008684298491407491,"mean":0.0006586075851516905,"moe":0.0000017463408420250502,"rme":0.2651565031129778,"sem":8.909902255229849e-7,"variance":7.541704028786243e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":1498.5150268872217,"cycles":3,"stats":{"deviation":0.000018132722845425716,"mean":0.0006673273087406017,"moe":0.0000036273000205190407,"rme":0.543556358777611,"sem":0.0000018506632757750207,"variance":3.287956377890237e-10}}]}-->
