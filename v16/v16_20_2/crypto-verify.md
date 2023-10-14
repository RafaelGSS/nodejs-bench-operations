## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,085|93|
|crypto.verify('RSA-SHA256')|20,619|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":21085.356952870647,"cycles":5,"stats":{"deviation":0.000002095209486609373,"mean":0.00004742627797267885,"moe":4.258356814791513e-7,"rme":0.8978897347256833,"sem":2.1726310279548536e-7,"variance":4.389902792777913e-12}},{"name":"crypto.verify('RSA-SHA256')","hz":20619.210347696706,"cycles":4,"stats":{"deviation":0.0000040226345233803595,"mean":0.00004849846250837177,"moe":8.132100198163291e-7,"rme":1.6767748455447495,"sem":4.149030713348618e-7,"variance":1.618158850869153e-11}}]}-->
