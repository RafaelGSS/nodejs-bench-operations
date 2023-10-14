## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|699,119,817|93|
|using Array.includes (first item)|713,548,572|97|
|Using raw comparison|717,628,456|96|
|Using raw comparison (first item)|715,969,353|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":699119816.8778124,"cycles":8,"stats":{"deviation":1.7062551900671308e-10,"mean":1.4303699821668387e-9,"moe":3.467836253526083e-11,"rme":2.424433046527394,"sem":1.7693042109826952e-11,"variance":2.9113067736310205e-20}},{"name":"using Array.includes (first item)","hz":713548571.9226443,"cycles":7,"stats":{"deviation":2.990304055799734e-11,"mean":1.4014462916035516e-9,"moe":5.950939761053944e-12,"rme":0.42462845680977235,"sem":3.0361937556397675e-12,"variance":8.941918346132338e-22}},{"name":"Using raw comparison","hz":717628455.7838438,"cycles":9,"stats":{"deviation":9.265369173101598e-12,"mean":1.3934787450808796e-9,"moe":1.8534598514632986e-12,"rme":0.13300955310629595,"sem":9.45642781358826e-13,"variance":8.58470659138614e-23}},{"name":"Using raw comparison (first item)","hz":715969352.923881,"cycles":6,"stats":{"deviation":1.1669461843206086e-11,"mean":1.3967078282278318e-9,"moe":2.310435568596034e-12,"rme":0.16542010590200215,"sem":1.178793657446956e-12,"variance":1.3617633971004277e-22}}]}-->
