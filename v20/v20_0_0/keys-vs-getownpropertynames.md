## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,237,948|91|
|Using Object.getOwnPropertyNames()|46,798,008|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":54237947.83699718,"cycles":7,"stats":{"deviation":1.483143989711372e-9,"mean":1.8437275742904725e-8,"moe":3.047324415975773e-10,"rme":1.6528062271610189,"sem":1.5547573550896802e-10,"variance":2.1997160942169665e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":46798007.569064416,"cycles":6,"stats":{"deviation":6.517124549150021e-10,"mean":2.1368431092375072e-8,"moe":1.3105400262330458e-10,"rme":0.6133066206721595,"sem":6.686428705270643e-11,"variance":4.2472912389133865e-19}}]}-->
