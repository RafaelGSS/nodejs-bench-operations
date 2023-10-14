## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,141,653|84|
|Using Object.getOwnPropertyNames()|46,001,626|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":51141652.61521075,"cycles":10,"stats":{"deviation":3.868503388575585e-9,"mean":1.9553533154745496e-8,"moe":8.272931148692366e-10,"rme":4.230913709159814,"sem":4.220883239128758e-10,"variance":1.496531846742078e-17}},{"name":"Using Object.getOwnPropertyNames()","hz":46001626.3653335,"cycles":5,"stats":{"deviation":7.406507379901425e-10,"mean":2.173836185830145e-8,"moe":1.547491225506337e-10,"rme":0.7118711315937456,"sem":7.895363395440495e-11,"variance":5.485635156853427e-19}}]}-->
