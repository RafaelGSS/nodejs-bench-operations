## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,898,076|90|
|Object.create({})|1,448,511|83|
|Cached Empty.prototype|594,281,705|97|
|Empty.prototype|1,473,393|79|
|Empty class|878,559|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":47898075.870485105,"cycles":4,"stats":{"deviation":2.0385813240561024e-9,"mean":2.08776653722786e-8,"moe":4.2117526506060705e-10,"rme":2.017348480064463,"sem":2.1488533931663626e-10,"variance":4.155813814790332e-18}},{"name":"Object.create({})","hz":1448510.777983169,"cycles":3,"stats":{"deviation":6.701022434148266e-8,"mean":6.90364210746397e-7,"moe":1.441644226570852e-8,"rme":2.088237200205089,"sem":7.35532768658598e-9,"variance":4.490370166295836e-15}},{"name":"Cached Empty.prototype","hz":594281705.4194101,"cycles":8,"stats":{"deviation":1.1899521928108866e-11,"mean":1.6827036586870147e-9,"moe":2.3680982554992342e-12,"rme":0.1407317469878815,"sem":1.2082133956628747e-12,"variance":1.4159862211754375e-22}},{"name":"Empty.prototype","hz":1473393.1264790478,"cycles":3,"stats":{"deviation":7.508019484917291e-8,"mean":6.787054873736853e-7,"moe":1.655647648949867e-8,"rme":2.4394198658339294,"sem":8.447181882397282e-9,"variance":5.6370356585897705e-15}},{"name":"Empty class","hz":878559.2068193938,"cycles":4,"stats":{"deviation":7.286647366348388e-8,"mean":0.000001138227215921227,"moe":1.5224480695694744e-8,"rme":1.3375607684246746,"sem":7.767592191680991e-9,"variance":5.30952298415119e-15}}]}-->
