## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|697,848|91|
|Using brackets {}|720,983|99|
|Using '' + |698,636|97|
|Using date.toString()|769,871|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":697847.9146922365,"cycles":4,"stats":{"deviation":1.2562936357804145e-7,"mean":0.0000014329769838762333,"moe":2.5812289949633594e-8,"rme":1.8013052714783178,"sem":1.316953568858857e-8,"variance":1.578273699302373e-14}},{"name":"Using brackets {}","hz":720982.7893873907,"cycles":4,"stats":{"deviation":1.2492598262346642e-8,"mean":0.0000013869956602565872,"moe":2.46088459824198e-9,"rme":0.17742554420009712,"sem":1.2555533664499898e-9,"variance":1.5606501134438635e-16}},{"name":"Using '' + ","hz":698636.4263581352,"cycles":5,"stats":{"deviation":1.4108925894414515e-7,"mean":0.0000014313596632984318,"moe":2.8077869850054462e-8,"rme":1.9616222651790878,"sem":1.4325443801048195e-8,"variance":1.9906178989408044e-14}},{"name":"Using date.toString()","hz":769870.8603776571,"cycles":7,"stats":{"deviation":2.211727207575301e-8,"mean":0.0000012989191453608907,"moe":4.595075256317123e-9,"rme":0.3537614541080947,"sem":2.3444261511822057e-9,"variance":4.891737240728839e-16}}]}-->
