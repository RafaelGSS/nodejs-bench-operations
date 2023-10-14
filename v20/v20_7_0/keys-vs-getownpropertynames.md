## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,629,434|96|
|Using Object.getOwnPropertyNames()|57,755,421|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":58629433.98346199,"cycles":6,"stats":{"deviation":7.991309742113638e-10,"mean":1.705627927914291e-8,"moe":1.5985948849847025e-10,"rme":0.9372471327551063,"sem":8.156096351962768e-11,"variance":6.386103139440034e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":57755420.81405235,"cycles":9,"stats":{"deviation":7.633413949712142e-10,"mean":1.7314392067535454e-8,"moe":1.5770796610608353e-10,"rme":0.9108489948185158,"sem":8.046324801330793e-11,"variance":5.826900852765992e-19}}]}-->
