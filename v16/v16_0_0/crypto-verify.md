## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,161|93|
|crypto.verify('RSA-SHA256')|20,501|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":21161.161752944834,"cycles":4,"stats":{"deviation":0.0000010866243224488555,"mean":0.0000472563846765567,"moe":2.208482788089336e-7,"rme":0.4673406150735303,"sem":1.1267769326986408e-7,"variance":1.1807524181374342e-12}},{"name":"crypto.verify('RSA-SHA256')","hz":20500.60583562953,"cycles":3,"stats":{"deviation":0.000004494985092127474,"mean":0.00004877904623979578,"moe":9.185237990266416e-7,"rme":1.8830294354490174,"sem":4.686345913401233e-7,"variance":2.020489097844824e-11}}]}-->
