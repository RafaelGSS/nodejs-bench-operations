## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|564,762,781|97|
|Using dot notation|559,079,646|94|
|Using define property (writable)|2,434,548|92|
|Using define property initialized (writable)|2,994,690|96|
|Using define property (getter)|1,253,917|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":564762781.4846328,"cycles":6,"stats":{"deviation":6.999371828894672e-11,"mean":1.7706549241280164e-9,"moe":1.3929299275832484e-11,"rme":0.7866749803151034,"sem":7.106785344812492e-12,"variance":4.899120599912435e-21}},{"name":"Using dot notation","hz":559079645.833629,"cycles":8,"stats":{"deviation":1.3074196602741151e-10,"mean":1.7886539197987187e-9,"moe":2.643060814151025e-11,"rme":1.4776815038922984,"sem":1.348500415383176e-11,"variance":1.7093461680712828e-20}},{"name":"Using define property (writable)","hz":2434547.8650139347,"cycles":5,"stats":{"deviation":3.683006439624186e-9,"mean":4.1075388755779355e-7,"moe":7.52600731132137e-10,"rme":0.183224250318567,"sem":3.839799648633352e-10,"variance":1.3564536434313225e-17}},{"name":"Using define property initialized (writable)","hz":2994689.772119835,"cycles":7,"stats":{"deviation":4.3793712810904576e-9,"mean":3.339244048949135e-7,"moe":8.760567110177414e-10,"rme":0.2623518072281772,"sem":4.469677097029293e-10,"variance":1.917889281763988e-17}},{"name":"Using define property (getter)","hz":1253917.0621941746,"cycles":4,"stats":{"deviation":7.330634947341581e-8,"mean":7.97500911463908e-7,"moe":1.577097771689042e-8,"rme":1.9775498046693027,"sem":8.046417202495113e-9,"variance":5.37382087311857e-15}}]}-->
