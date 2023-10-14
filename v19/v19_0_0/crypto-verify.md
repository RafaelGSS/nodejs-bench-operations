## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,588|93|
|crypto.verify('RSA-SHA256')|4,533|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4587.662243263501,"cycles":5,"stats":{"deviation":0.0000039723513834819785,"mean":0.00021797594220638076,"moe":8.073507538366119e-7,"rme":0.37038525704465497,"sem":4.119136499166387e-7,"variance":1.577957551385119e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":4533.158722442425,"cycles":5,"stats":{"deviation":0.000012324567418904302,"mean":0.00022059673204233386,"moe":0.00000246542695394241,"rme":1.1176171700808695,"sem":0.0000012578708948685765,"variance":1.5189496206311744e-10}}]}-->
