## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,405,137|96|
|Using delete property (proto: null)|11,988,347|93|
|Using delete property (cached proto: null)|2,394,105|98|
|Using undefined assignment|708,817,861|96|
|Using undefined assignment (proto: null)|14,785,389|94|
|Using undefined property (cached proto: null)|710,928,356|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2405137.4149310873,"cycles":5,"stats":{"deviation":8.284371924440483e-9,"mean":4.157766594923028e-7,"moe":1.6572195311026288e-9,"rme":0.39858406990094847,"sem":8.455201689299127e-10,"variance":6.863081818245773e-17}},{"name":"Using delete property (proto: null)","hz":11988347.133411113,"cycles":5,"stats":{"deviation":8.154549574074419e-9,"mean":8.341433467613181e-8,"moe":1.6573513041175484e-9,"rme":1.9868902755772782,"sem":8.455874000599737e-10,"variance":6.649667875603728e-17}},{"name":"Using delete property (cached proto: null)","hz":2394104.7557352157,"cycles":5,"stats":{"deviation":1.873796021074917e-8,"mean":4.176926667909758e-7,"moe":3.7099268445748446e-9,"rme":0.8881953502026378,"sem":1.892819818660635e-9,"variance":3.51111152859619e-16}},{"name":"Using undefined assignment","hz":708817861.3501139,"cycles":6,"stats":{"deviation":7.530162681920767e-11,"mean":1.410799663111282e-9,"moe":1.5063462604863763e-11,"rme":1.0677251348106949,"sem":7.685440104522328e-12,"variance":5.6703350016192166e-21}},{"name":"Using undefined assignment (proto: null)","hz":14785388.543623684,"cycles":6,"stats":{"deviation":1.6988773682041666e-9,"mean":6.76343402846358e-8,"moe":3.434426096213841e-10,"rme":0.5077932425688234,"sem":1.7522582123540005e-10,"variance":2.8861843121963153e-18}},{"name":"Using undefined property (cached proto: null)","hz":710928356.2830963,"cycles":7,"stats":{"deviation":8.696837761081457e-12,"mean":1.4066114977158028e-9,"moe":1.7581402354408536e-12,"rme":0.1249911747697142,"sem":8.970103242045171e-13,"variance":7.563498704257233e-23}}]}-->
