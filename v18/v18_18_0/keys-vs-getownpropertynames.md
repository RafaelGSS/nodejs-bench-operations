## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,962,332|95|
|Using Object.getOwnPropertyNames()|69,060,943|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":67962331.50642183,"cycles":7,"stats":{"deviation":4.0650284624481573e-10,"mean":1.4714033168587058e-8,"moe":8.174437158040344e-11,"rme":0.5555538080131506,"sem":4.170631203081808e-11,"variance":1.6524456400513628e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":69060943.16428575,"cycles":7,"stats":{"deviation":2.1047711078235198e-10,"mean":1.4479964422454357e-8,"moe":4.146134129422217e-11,"rme":0.2863359334635331,"sem":2.115374555827662e-11,"variance":4.430061416328647e-20}}]}-->
