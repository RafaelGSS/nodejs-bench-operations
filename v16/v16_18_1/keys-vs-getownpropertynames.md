## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,660,973|92|
|Using Object.getOwnPropertyNames()|47,559,579|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":52660972.75738879,"cycles":9,"stats":{"deviation":1.5884445368049263e-9,"mean":1.898939475742387e-8,"moe":3.2458931021695995e-10,"rme":1.7093188822674947,"sem":1.656067909270204e-10,"variance":2.5231560465054166e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":47559579.24479658,"cycles":7,"stats":{"deviation":1.2222323988340771e-9,"mean":2.1026258345408057e-8,"moe":2.568326523538767e-10,"rme":1.221485288227549,"sem":1.310370675274881e-10,"variance":1.4938520367597023e-18}}]}-->
