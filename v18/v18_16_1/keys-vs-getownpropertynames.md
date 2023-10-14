## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,618,611|93|
|Using Object.getOwnPropertyNames()|51,549,946|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":50618611.19395194,"cycles":6,"stats":{"deviation":4.6394567781190304e-10,"mean":1.9755579546984545e-8,"moe":9.429349434650211e-11,"rme":0.47730057284446964,"sem":4.810892568699087e-11,"variance":2.1524559196034614e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":51549946.385838084,"cycles":6,"stats":{"deviation":1.1919849471206322e-9,"mean":1.9398662270475655e-8,"moe":2.3844665029112157e-10,"rme":1.229191203839,"sem":1.2165645423016407e-10,"variance":1.4208281141621762e-18}}]}-->
