## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,513|90|
|crypto.verify('RSA-SHA256')|4,515|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4512.787787125109,"cycles":4,"stats":{"deviation":0.000008055563645276687,"mean":0.00022159251601703485,"moe":0.0000016642966917608375,"rme":0.751061778473103,"sem":8.491309651841007e-7,"variance":6.489210564310343e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":4515.332713362354,"cycles":4,"stats":{"deviation":0.000008275234476338798,"mean":0.00022146762231732586,"moe":0.0000016729095207071428,"rme":0.7553743085344299,"sem":8.535252656669096e-7,"variance":6.847950563838626e-11}}]}-->
