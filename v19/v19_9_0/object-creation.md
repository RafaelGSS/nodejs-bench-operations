## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,736,208|87|
|Object.create({})|1,469,894|79|
|Cached Empty.prototype|714,973,173|97|
|Empty.prototype|1,325,426|76|
|Empty class|921,157|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":46736207.71875359,"cycles":6,"stats":{"deviation":2.8872536071651644e-9,"mean":2.139668682614861e-8,"moe":6.067103135654925e-10,"rme":2.8355339239906985,"sem":3.095460783497411e-10,"variance":8.336233392088253e-18}},{"name":"Object.create({})","hz":1469894.0009907493,"cycles":3,"stats":{"deviation":6.694594553119728e-8,"mean":6.803211655574975e-7,"moe":1.4762734373307725e-8,"rme":2.1699654693544956,"sem":7.532007333320268e-9,"variance":4.481759623066032e-15}},{"name":"Cached Empty.prototype","hz":714973173.4754442,"cycles":7,"stats":{"deviation":2.324619218220282e-11,"mean":1.3986538755559968e-9,"moe":4.626174688887115e-12,"rme":0.3307590798365396,"sem":2.360293208615875e-12,"variance":5.403854509719075e-22}},{"name":"Empty.prototype","hz":1325425.5022951066,"cycles":3,"stats":{"deviation":1.0016747049389961e-7,"mean":7.544746938008965e-7,"moe":2.2520393878249505e-8,"rme":2.9849104367962496,"sem":1.148999687665791e-8,"variance":1.003352214514625e-14}},{"name":"Empty class","hz":921156.8454952242,"cycles":3,"stats":{"deviation":1.0804635144318587e-7,"mean":0.0000010855914547998487,"moe":2.3826081978594175e-8,"rme":2.194755851591242,"sem":1.2156164274792946e-8,"variance":1.1674014060184433e-14}}]}-->
