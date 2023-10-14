## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,537,552|89|
|Using Object.getOwnPropertyNames()|57,061,445|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":57537552.084251486,"cycles":5,"stats":{"deviation":9.704626737966584e-10,"mean":1.7379953852324358e-8,"moe":2.0162292186255328e-10,"rme":1.1600889368045626,"sem":1.0286883768497616e-10,"variance":9.417978012325594e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":57061445.46437813,"cycles":6,"stats":{"deviation":1.4505892078613901e-9,"mean":1.7524967898408254e-8,"moe":3.01373811078263e-10,"rme":1.7196825285234103,"sem":1.5376214850931787e-10,"variance":2.1042090499639354e-18}}]}-->
