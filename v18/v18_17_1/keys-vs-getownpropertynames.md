## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,266,274|92|
|Using Object.getOwnPropertyNames()|49,908,825|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":49266274.44077764,"cycles":6,"stats":{"deviation":2.1932224130683034e-9,"mean":2.0297861191068696e-8,"moe":4.481721166306253e-10,"rme":2.207977049462859,"sem":2.2865924317889047e-10,"variance":4.810224553185151e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":49908825.29911372,"cycles":7,"stats":{"deviation":7.180545407450609e-10,"mean":2.003653650445181e-8,"moe":1.4516087502222302e-10,"rme":0.7244808751750609,"sem":7.406167092970563e-11,"variance":5.156023234846004e-19}}]}-->
