## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,091,956|93|
|Object.create({})|1,552,226|79|
|Cached Empty.prototype|716,230,658|98|
|Empty.prototype|1,452,959|74|
|Empty class|1,003,532|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":49091956.14866825,"cycles":7,"stats":{"deviation":9.147593469439325e-10,"mean":2.036993590093736e-8,"moe":1.8591800599646552e-10,"rme":0.9127078597626327,"sem":9.485612550840078e-11,"variance":8.367846628212898e-19}},{"name":"Object.create({})","hz":1552226.1297853754,"cycles":3,"stats":{"deviation":7.107338151293015e-8,"mean":6.442360303123288e-7,"moe":1.5672905117147023e-8,"rme":2.432789285248253,"sem":7.996380161809706e-9,"variance":5.051425559682522e-15}},{"name":"Cached Empty.prototype","hz":716230657.5160822,"cycles":6,"stats":{"deviation":1.9540058064627262e-11,"mean":1.3961982630959163e-9,"moe":3.86873411743751e-12,"rme":0.2770905980687167,"sem":1.9738439374681174e-12,"variance":3.8181386916900493e-22}},{"name":"Empty.prototype","hz":1452959.4284666593,"cycles":3,"stats":{"deviation":6.60150103127315e-8,"mean":6.882504634388329e-7,"moe":1.5041214578187675e-8,"rme":2.185427453696795,"sem":7.674089070503916e-9,"variance":4.357981586590045e-15}},{"name":"Empty class","hz":1003532.3461485268,"cycles":3,"stats":{"deviation":1.0286243900801356e-7,"mean":9.964800874011849e-7,"moe":2.2827880363515097e-8,"rme":2.290851633879619,"sem":1.1646877736487295e-8,"variance":1.058068135867731e-14}}]}-->
