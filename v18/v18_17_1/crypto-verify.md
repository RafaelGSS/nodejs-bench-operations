## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,563|90|
|crypto.verify('RSA-SHA256')|4,768|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4563.414230702299,"cycles":2,"stats":{"deviation":0.000026022399130805235,"mean":0.00021913417223272809,"moe":0.000005376283360441589,"rme":2.4534207995327124,"sem":0.000002743001714511015,"variance":6.771652565229331e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":4767.852628315437,"cycles":3,"stats":{"deviation":0.0000029266642532783046,"mean":0.00020973802631003654,"moe":5.885280568662606e-7,"rme":0.28060150427671776,"sem":3.002694167685003e-7,"variance":8.565363651417057e-12}}]}-->
