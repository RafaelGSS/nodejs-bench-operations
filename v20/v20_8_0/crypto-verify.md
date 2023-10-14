## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,770|90|
|crypto.verify('RSA-SHA256')|3,809|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3770.236535879648,"cycles":3,"stats":{"deviation":0.000007336438712833305,"mean":0.00026523534809645206,"moe":0.000001515723941456765,"rme":0.57146377823878,"sem":7.73328541559574e-7,"variance":5.382333298715919e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":3809.1723126132088,"cycles":3,"stats":{"deviation":0.00000763220514969182,"mean":0.0002625242225689626,"moe":0.0000015347735434023014,"rme":0.5846216887659313,"sem":7.830477262256641e-7,"variance":5.825055544698233e-11}}]}-->
