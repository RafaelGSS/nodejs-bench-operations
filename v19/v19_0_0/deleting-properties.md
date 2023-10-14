## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,731,188|95|
|Using delete property (proto: null)|16,212,675|88|
|Using delete property (cached proto: null)|2,760,691|97|
|Using undefined assignment|595,343,853|94|
|Using undefined assignment (proto: null)|19,000,073|96|
|Using undefined property (cached proto: null)|600,415,705|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2731188.168758371,"cycles":5,"stats":{"deviation":8.897487311318589e-9,"mean":3.661410119737782e-7,"moe":1.7892113563955821e-9,"rme":0.48866728879957305,"sem":9.128629369365215e-10,"variance":7.916528045507528e-17}},{"name":"Using delete property (proto: null)","hz":16212674.966505796,"cycles":4,"stats":{"deviation":5.469485560437766e-9,"mean":6.168013619380683e-8,"moe":1.142776274790359e-9,"rme":1.8527460302610401,"sem":5.830491197909996e-10,"variance":2.991527229583722e-17}},{"name":"Using delete property (cached proto: null)","hz":2760691.4150638203,"cycles":7,"stats":{"deviation":7.83341644256465e-9,"mean":3.6222809783935323e-7,"moe":1.5589113515911201e-9,"rme":0.4303673185183142,"sem":7.953629344852654e-10,"variance":6.136241316264221e-17}},{"name":"Using undefined assignment","hz":595343853.2187899,"cycles":7,"stats":{"deviation":2.81912865124745e-11,"mean":1.6797015616998372e-9,"moe":5.699110006193691e-12,"rme":0.33929301110051135,"sem":2.907709186833516e-12,"variance":7.947486352284267e-22}},{"name":"Using undefined assignment (proto: null)","hz":19000073.172524482,"cycles":8,"stats":{"deviation":2.3695132012986696e-9,"mean":5.26313762541754e-8,"moe":4.740013596942513e-10,"rme":0.9006060518066871,"sem":2.418374284154343e-10,"variance":5.614592811128669e-18}},{"name":"Using undefined property (cached proto: null)","hz":600415705.1112957,"cycles":6,"stats":{"deviation":2.695788542380164e-11,"mean":1.6655127297421969e-9,"moe":5.337389005093635e-12,"rme":0.3204652182946572,"sem":2.723157655660018e-12,"variance":7.26727586522817e-22}}]}-->
