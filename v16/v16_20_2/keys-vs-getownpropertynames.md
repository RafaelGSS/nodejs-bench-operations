## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,752,611|92|
|Using Object.getOwnPropertyNames()|50,920,108|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":55752610.622337684,"cycles":6,"stats":{"deviation":5.183648124895593e-10,"mean":1.793637981858634e-8,"moe":1.0592480444118458e-10,"rme":0.5905584377256629,"sem":5.404326757203295e-11,"variance":2.68702078827336e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":50920108.13888997,"cycles":6,"stats":{"deviation":1.8241196861247854e-9,"mean":1.9638607154415197e-8,"moe":3.7897834803334734e-10,"rme":1.9297618464155923,"sem":1.9335630001701394e-10,"variance":3.327412629307985e-18}}]}-->
