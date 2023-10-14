## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,719|87|
|crypto.verify('RSA-SHA256')|3,870|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3718.7966387190654,"cycles":3,"stats":{"deviation":0.000042605206529797045,"mean":0.0002689041905621515,"moe":0.000008952804890109901,"rme":3.3293660732448314,"sem":0.0000045677575969948474,"variance":1.8152036234466605e-9}},{"name":"crypto.verify('RSA-SHA256')","hz":3869.611190294007,"cycles":4,"stats":{"deviation":0.000003957894305418326,"mean":0.0002584238960514329,"moe":8.087724517542525e-7,"rme":0.31296349297097753,"sem":4.126390059970676e-7,"variance":1.5664927332862808e-11}}]}-->
