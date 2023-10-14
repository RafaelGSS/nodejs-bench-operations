## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,867,194|93|
|Length = 10_000 - Array.at|599,457,954|96|
|Length = 1_000_000 - Array.at|600,419,523|96|
|Length = 100 - Array[length - 1]|599,307,720|96|
|Length = 10_000 - Array[length - 1]|597,955,776|96|
|Length = 1_000_000 - Array[length - 1]|595,640,161|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":593867194.1736088,"cycles":7,"stats":{"deviation":1.2937390826564605e-10,"mean":1.6838781630151201e-9,"moe":2.629428071227221e-11,"rme":1.5615310709410337,"sem":1.3415449342996025e-11,"variance":1.67376081399278e-20}},{"name":"Length = 10_000 - Array.at","hz":599457953.7237695,"cycles":6,"stats":{"deviation":2.0676605898366853e-11,"mean":1.6681737122480495e-9,"moe":4.1361826151956145e-12,"rme":0.24794675667329924,"sem":2.110297252650824e-12,"variance":4.27522031476379e-22}},{"name":"Length = 1_000_000 - Array.at","hz":600419523.4301423,"cycles":8,"stats":{"deviation":2.2864308561969404e-11,"mean":1.6655021380502264e-9,"moe":4.5738142927005155e-12,"rme":0.2746207397881217,"sem":2.333578720765569e-12,"variance":5.227766060169473e-22}},{"name":"Length = 100 - Array[length - 1]","hz":599307719.7748835,"cycles":7,"stats":{"deviation":1.7165162045785173e-11,"mean":1.668591888613795e-9,"moe":3.4337475497562214e-12,"rme":0.20578714143269944,"sem":1.7519120151817457e-12,"variance":2.9464278805806384e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":597955775.703387,"cycles":8,"stats":{"deviation":2.1338566055960756e-11,"mean":1.6723644801719333e-9,"moe":4.268602225515135e-12,"rme":0.25524353549271067,"sem":2.1778582783240487e-12,"variance":4.553344013246006e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":595640161.4159248,"cycles":8,"stats":{"deviation":8.078702028096389e-11,"mean":1.6788659744212883e-9,"moe":1.599501396430692e-11,"rme":0.9527272699549746,"sem":8.160721410360673e-12,"variance":6.526542645876871e-21}}]}-->
