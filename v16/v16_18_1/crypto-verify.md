## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,674|87|
|crypto.verify('RSA-SHA256')|21,204|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":21674.351912820886,"cycles":4,"stats":{"deviation":0.000007309481336686474,"mean":0.000046137481020065775,"moe":0.0000015359709665879996,"rme":3.3291175257703953,"sem":7.836586564224487e-7,"variance":5.342851741136788e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":21204.360849814577,"cycles":4,"stats":{"deviation":0.000005931309968231427,"mean":0.000047160110464199375,"moe":0.0000012120283501643294,"rme":2.5700286497089864,"sem":6.183818113083314e-7,"variance":3.51804379392415e-11}}]}-->
