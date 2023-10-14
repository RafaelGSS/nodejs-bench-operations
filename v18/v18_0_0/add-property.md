## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|594,062,720|97|
|Using dot notation|591,636,208|97|
|Using define property (writable)|3,315,771|96|
|Using define property initialized (writable)|4,165,150|94|
|Using define property (getter)|1,610,174|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":594062719.66032,"cycles":7,"stats":{"deviation":1.001064180770608e-11,"mean":1.6833239435926757e-9,"moe":1.992196286916207e-12,"rme":0.11834895443026332,"sem":1.016426676998065e-12,"variance":1.0021294940219283e-22}},{"name":"Using dot notation","hz":591636208.2240403,"cycles":9,"stats":{"deviation":1.0048289651258389e-10,"mean":1.6902278564082083e-9,"moe":1.999688503257179e-11,"rme":1.183088123696284,"sem":1.0202492363557036e-11,"variance":1.0096812491558643e-20}},{"name":"Using define property (writable)","hz":3315770.6357285506,"cycles":6,"stats":{"deviation":1.2255881781975125e-9,"mean":3.0158901500141827e-7,"moe":2.451686964953089e-10,"rme":0.08129231646389903,"sem":1.2508606964046372e-10,"variance":1.5020663825374977e-18}},{"name":"Using define property initialized (writable)","hz":4165149.7666102787,"cycles":7,"stats":{"deviation":3.5084838142337983e-9,"mean":2.400874052636598e-7,"moe":7.092700506385425e-10,"rme":0.2954215985880786,"sem":3.618724748155829e-10,"variance":1.2309458674740542e-17}},{"name":"Using define property (getter)","hz":1610173.6863346305,"cycles":4,"stats":{"deviation":3.5891387790472674e-8,"mean":6.210510136185255e-7,"moe":7.374381927573105e-9,"rme":1.1874035732759864,"sem":3.76243975896587e-9,"variance":1.2881917175260908e-15}}]}-->
