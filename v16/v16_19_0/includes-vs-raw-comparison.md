## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,930,634|95|
|using Array.includes (first item)|593,615,453|98|
|Using raw comparison|594,067,120|98|
|Using raw comparison (first item)|593,519,969|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":594930633.8476771,"cycles":7,"stats":{"deviation":9.341402393269018e-12,"mean":1.680868227498325e-9,"moe":1.8784790201876507e-12,"rme":0.11175647141498025,"sem":9.584076633610464e-13,"variance":8.726179867297214e-23}},{"name":"using Array.includes (first item)","hz":593615453.0482411,"cycles":8,"stats":{"deviation":1.3184194867263781e-11,"mean":1.6845922640068693e-9,"moe":2.6103374066355864e-12,"rme":0.15495366222487544,"sem":1.3318047993038705e-12,"variance":1.7382299429798463e-22}},{"name":"Using raw comparison","hz":594067120.4851276,"cycles":7,"stats":{"deviation":1.0868931111107464e-11,"mean":1.6833114735980998e-9,"moe":2.151938570015787e-12,"rme":0.12783959497501615,"sem":1.0979278418447893e-12,"variance":1.1813366349799972e-22}},{"name":"Using raw comparison (first item)","hz":593519969.0838349,"cycles":6,"stats":{"deviation":1.3322955842242834e-11,"mean":1.6848632768727443e-9,"moe":2.665146233795375e-12,"rme":0.158181751028613,"sem":1.3597684866302934e-12,"variance":1.7750115237435245e-22}}]}-->
