## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,669|87|
|crypto.verify('RSA-SHA256')|3,828|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3669.106419849048,"cycles":4,"stats":{"deviation":0.00003074543352556581,"mean":0.0002725459241493304,"moe":0.000006460662675669131,"rme":2.3704858899776737,"sem":0.000003296256467178128,"variance":9.452816826749864e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":3828.2358407133443,"cycles":4,"stats":{"deviation":0.000002209938880450131,"mean":0.0002612169264403685,"moe":4.4440049235153463e-7,"rme":0.17012698924508013,"sem":2.2673494507731358e-7,"variance":4.883829855325178e-12}}]}-->
