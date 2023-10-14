## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|708,655,000|97|
|Using dot notation|690,631,992|91|
|Using define property (writable)|3,027,840|99|
|Using define property initialized (writable)|3,766,578|96|
|Using define property (getter)|1,557,334|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":708655000.4058847,"cycles":8,"stats":{"deviation":1.0123514890616816e-11,"mean":1.4111238888136629e-9,"moe":2.0146589162847314e-12,"rme":0.14276981151374757,"sem":1.0278872021860875e-12,"variance":1.0248555374054041e-22}},{"name":"Using dot notation","hz":690631991.752258,"cycles":6,"stats":{"deviation":1.9295605411725457e-10,"mean":1.4479491421514077e-9,"moe":3.964548951422312e-11,"rme":2.7380443387201177,"sem":2.0227290568481185e-11,"variance":3.723203882050087e-20}},{"name":"Using define property (writable)","hz":3027839.6671989667,"cycles":6,"stats":{"deviation":2.625935297705217e-9,"mean":3.3026847849083536e-7,"moe":5.172761978250692e-10,"rme":0.15662293906726044,"sem":2.6391642746177e-10,"variance":6.895536187734185e-18}},{"name":"Using define property initialized (writable)","hz":3766577.6921343654,"cycles":5,"stats":{"deviation":8.566742345124099e-9,"mean":2.654929970217449e-7,"moe":1.7137053794482364e-9,"rme":0.6454804453120385,"sem":8.743394793103247e-10,"variance":7.338907440774234e-17}},{"name":"Using define property (getter)","hz":1557333.691357301,"cycles":5,"stats":{"deviation":5.270554424393493e-8,"mean":6.42123140049995e-7,"moe":1.1139434598079246e-8,"rme":1.7347816802259985,"sem":5.683384999020024e-9,"variance":2.7778743940493823e-15}}]}-->
