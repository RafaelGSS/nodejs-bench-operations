## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,657,533|89|
|Object.create({})|1,459,287|82|
|Cached Empty.prototype|592,641,762|95|
|Empty.prototype|1,496,194|77|
|Empty class|910,132|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48657533.361721404,"cycles":7,"stats":{"deviation":1.92081626929498e-9,"mean":2.055180217554337e-8,"moe":3.9906798997354324e-10,"rme":1.9417664035732782,"sem":2.0360611733344044e-10,"variance":3.689535140388285e-18}},{"name":"Object.create({})","hz":1459287.0107181172,"cycles":3,"stats":{"deviation":7.882183281975854e-8,"mean":6.852661557700692e-7,"moe":1.7060653961152626e-8,"rme":2.4896390719866623,"sem":8.70441528630236e-9,"variance":6.212881329065964e-15}},{"name":"Cached Empty.prototype","hz":592641761.6810778,"cycles":7,"stats":{"deviation":2.2207424541729294e-11,"mean":1.687359994954484e-9,"moe":4.4657300197342504e-12,"rme":0.26465781060873805,"sem":2.278433683537883e-12,"variance":4.931697047766005e-22}},{"name":"Empty.prototype","hz":1496193.858803984,"cycles":3,"stats":{"deviation":7.230741517705401e-8,"mean":6.683625882540196e-7,"moe":1.615078164313156e-8,"rme":2.416470030933756,"sem":8.240194715883448e-9,"variance":5.228362289586861e-15}},{"name":"Empty class","hz":910132.2409731378,"cycles":4,"stats":{"deviation":5.603803537680471e-8,"mean":0.0000010987414300703964,"moe":1.191322953615733e-8,"rme":1.0842614294970245,"sem":6.078178334774148e-9,"variance":3.140261408892016e-15}}]}-->
