## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|22,658|94|
|crypto.verify('RSA-SHA256')|21,823|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":22658.08415287235,"cycles":9,"stats":{"deviation":0.0000012060441876164128,"mean":0.00004413435810605508,"moe":2.438121614107609e-7,"rme":0.5524316470738717,"sem":1.2439395990344945e-7,"variance":1.454542582483333e-12}},{"name":"crypto.verify('RSA-SHA256')","hz":21823.137957785708,"cycles":4,"stats":{"deviation":0.0000046374835629631175,"mean":0.000045822924362865794,"moe":9.528351251218688e-7,"rme":2.079385238655855,"sem":4.861403699601372e-7,"variance":2.1506253796753088e-11}}]}-->
