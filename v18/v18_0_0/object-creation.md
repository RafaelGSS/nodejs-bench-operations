## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,624,965|86|
|Object.create({})|1,095,339|73|
|Cached Empty.prototype|851,448,628|82|
|Empty.prototype|1,229,800|71|
|Empty class|843,559|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":43624965.35553015,"cycles":5,"stats":{"deviation":1.6553675369310727e-9,"mean":2.2922654307007586e-8,"moe":3.498656294693167e-10,"rme":1.526287596468969,"sem":1.7850287217822282e-10,"variance":2.740241682325246e-18}},{"name":"Object.create({})","hz":1095339.022613643,"cycles":5,"stats":{"deviation":1.5389012671092118e-7,"mean":9.129593480691031e-7,"moe":3.530249486591206e-8,"rme":3.8668200222251268,"sem":1.801147697240411e-8,"variance":2.3682171099103375e-14}},{"name":"Cached Empty.prototype","hz":851448627.7869116,"cycles":6,"stats":{"deviation":1.0259328077955885e-10,"mean":1.1744689783565728e-9,"moe":2.2205883820563334e-11,"rme":1.8907169307814233,"sem":1.1329532561511906e-11,"variance":1.0525381261113401e-20}},{"name":"Empty.prototype","hz":1229800.3625969456,"cycles":3,"stats":{"deviation":1.3241311133505377e-7,"mean":8.131401082760452e-7,"moe":3.080050856001719e-8,"rme":3.7878476595279467,"sem":1.571454518368224e-8,"variance":1.7533232053429348e-14}},{"name":"Empty class","hz":843558.7067386921,"cycles":4,"stats":{"deviation":1.31338899213199e-7,"mean":0.0000011854539488616391,"moe":2.992496034114382e-8,"rme":2.5243460844581933,"sem":1.5267836908746847e-8,"variance":1.7249906446534842e-14}}]}-->
