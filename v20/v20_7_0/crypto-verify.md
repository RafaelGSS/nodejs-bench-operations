## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,264|88|
|crypto.verify('RSA-SHA256')|3,248|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3263.907162024928,"cycles":5,"stats":{"deviation":0.000014124811844785416,"mean":0.0003063812634240491,"moe":0.0000029511916036225323,"rme":0.9632415411571416,"sem":0.0000015057100018482309,"variance":1.9951030965059036e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":3247.721456603932,"cycles":4,"stats":{"deviation":0.000016388486312003582,"mean":0.00030790817912250304,"moe":0.000003424156281269214,"rme":1.1120705825443156,"sem":0.00000174701851085164,"variance":2.6858248359872877e-10}}]}-->
