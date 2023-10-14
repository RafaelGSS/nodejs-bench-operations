## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,637|89|
|crypto.verify('RSA-SHA256')|3,596|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3637.4616029507315,"cycles":3,"stats":{"deviation":0.000019973429558528196,"mean":0.00027491699134055294,"moe":0.0000041496714257452664,"rme":1.5094270476010223,"sem":0.0000021171792988496256,"variance":3.989378883294879e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":3595.8287468981307,"cycles":3,"stats":{"deviation":0.000014998770267496517,"mean":0.00027810000708811003,"moe":0.0000031700236254674374,"rme":1.1398862080802046,"sem":0.0000016173589925854273,"variance":2.2496310953713756e-10}}]}-->
