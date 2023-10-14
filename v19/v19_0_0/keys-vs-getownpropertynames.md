## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,850,253|86|
|Using Object.getOwnPropertyNames()|53,250,126|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":53850252.58005381,"cycles":5,"stats":{"deviation":1.3996476780194397e-9,"mean":1.8570015034068775e-8,"moe":2.958186656320353e-10,"rme":1.592990986217958,"sem":1.5092789062858944e-10,"variance":1.959013622585209e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":53250125.845493264,"cycles":6,"stats":{"deviation":2.1052495238516266e-9,"mean":1.8779298341970648e-8,"moe":4.4755888817100846e-10,"rme":2.3832567118375247,"sem":2.2834637151582065e-10,"variance":4.432075557677501e-18}}]}-->
