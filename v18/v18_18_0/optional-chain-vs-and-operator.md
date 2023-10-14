## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,318,499|95|
|Using optional chain (obj.field?.field2) (undefined)|696,612,267|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,909,667|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|705,549,163|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706318498.7614833,"cycles":6,"stats":{"deviation":2.933850933038355e-11,"mean":1.4157918867387472e-9,"moe":5.899732389262679e-12,"rme":0.41670901242785147,"sem":3.0100675455421832e-12,"variance":8.607481297290025e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":696612266.7839152,"cycles":6,"stats":{"deviation":1.2856563357226162e-10,"mean":1.4355187924220028e-9,"moe":2.5990643897010077e-11,"rme":1.810540136026972,"sem":1.3260532600515345e-11,"variance":1.6529122135837046e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":708909666.636961,"cycles":10,"stats":{"deviation":9.380422970137804e-12,"mean":1.4106169615995784e-9,"moe":1.8764754042794886e-12,"rme":0.1330251553300229,"sem":9.573854103466778e-13,"variance":8.799233509868895e-23}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":705549162.6995541,"cycles":7,"stats":{"deviation":3.820782700524895e-11,"mean":1.4173356767568481e-9,"moe":7.683279063969593e-12,"rme":0.542093111037076,"sem":3.920040338759997e-12,"variance":1.4598380444630305e-21}}]}-->
