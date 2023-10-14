## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,428,574|95|
|Using delete property (proto: null)|15,711,565|97|
|Using delete property (cached proto: null)|2,427,620|99|
|Using undefined assignment|592,608,373|95|
|Using undefined assignment (proto: null)|17,409,980|94|
|Using undefined property (cached proto: null)|596,499,313|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2428573.701841588,"cycles":8,"stats":{"deviation":9.262317954157228e-9,"mean":4.117643204493649e-7,"moe":1.8625757913746142e-9,"rme":0.4523402584619173,"sem":9.50293771109497e-10,"variance":8.579053388390332e-17}},{"name":"Using delete property (proto: null)","hz":15711565.165182149,"cycles":6,"stats":{"deviation":5.931914544616502e-10,"mean":6.364738264371427e-8,"moe":1.180497550216234e-10,"rme":0.18547464187560248,"sem":6.022946684776704e-11,"variance":3.5187610164632813e-19}},{"name":"Using delete property (cached proto: null)","hz":2427620.130719734,"cycles":5,"stats":{"deviation":6.250258790685261e-9,"mean":4.1192606180256167e-7,"moe":1.23122230219982e-9,"rme":0.29889400462113785,"sem":6.281746439795e-10,"variance":3.9065734950538375e-17}},{"name":"Using undefined assignment","hz":592608373.352018,"cycles":6,"stats":{"deviation":8.695777205450867e-12,"mean":1.6874550630184656e-9,"moe":1.748649116800233e-12,"rme":0.10362641086704291,"sem":8.921679167348128e-13,"variance":7.561654120683888e-23}},{"name":"Using undefined assignment (proto: null)","hz":17409979.825447533,"cycles":5,"stats":{"deviation":5.884967387978939e-10,"mean":5.743832043609473e-8,"moe":1.189696557910312e-10,"rme":0.20712593071622906,"sem":6.069880397501593e-11,"variance":3.4632841157575654e-19}},{"name":"Using undefined property (cached proto: null)","hz":596499312.529418,"cycles":11,"stats":{"deviation":5.048496530240531e-12,"mean":1.67644786673695e-9,"moe":9.944902649269446e-13,"rme":0.059321275934612124,"sem":5.073929923096656e-13,"variance":2.548731721585068e-23}}]}-->
