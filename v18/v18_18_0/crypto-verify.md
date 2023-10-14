## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,515|90|
|crypto.verify('RSA-SHA256')|4,499|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4515.0193977735435,"cycles":4,"stats":{"deviation":0.0000042815054893696955,"mean":0.00022148299085782938,"moe":8.845681985135754e-7,"rme":0.39938425749423906,"sem":4.513103053640691e-7,"variance":1.8331289255502838e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":4499.40281607116,"cycles":3,"stats":{"deviation":0.000008100742834345195,"mean":0.0002222517167007491,"moe":0.0000016376345408851729,"rme":0.7368377464954147,"sem":8.355278269822311e-7,"variance":6.562203446819503e-11}}]}-->
