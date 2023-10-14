## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,454,586|97|
|Using Object.getOwnPropertyNames()|48,037,161|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":49454586.37280228,"cycles":6,"stats":{"deviation":9.60927781657011e-10,"mean":2.022057150497074e-8,"moe":1.9123217026285716e-10,"rme":0.94573078815229,"sem":9.756743380758018e-11,"variance":9.233822015602642e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":48037160.7544644,"cycles":6,"stats":{"deviation":7.384830003666153e-10,"mean":2.081721701062575e-8,"moe":1.5090466311030423e-10,"rme":0.7249031560427978,"sem":7.699217505627767e-11,"variance":5.453571418304783e-19}}]}-->
