## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|689,611|94|
|Using brackets {}|722,267|96|
|Using '' + |713,595|95|
|Using date.toString()|791,496|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":689611.2108667956,"cycles":3,"stats":{"deviation":2.03164423386879e-7,"mean":0.0000014500924350447643,"moe":4.1071428141968196e-8,"rme":2.8323317293011274,"sem":2.0954810276514386e-8,"variance":4.127578293012302e-14}},{"name":"Using brackets {}","hz":722266.6429249278,"cycles":3,"stats":{"deviation":1.5372804076501195e-8,"mean":0.0000013845302282690907,"moe":3.0752012820950837e-9,"rme":0.22211153063372494,"sem":1.5689802459668795e-9,"variance":2.363231051744918e-16}},{"name":"Using '' + ","hz":713595.4137476428,"cycles":5,"stats":{"deviation":1.813385511650318e-8,"mean":0.000001401354297876194,"moe":3.646568786718651e-9,"rme":0.26021747621177355,"sem":1.8604942789380873e-9,"variance":3.2883670138632856e-16}},{"name":"Using date.toString()","hz":791496.0717181809,"cycles":7,"stats":{"deviation":1.5741095581134044e-8,"mean":0.0000012634301492225963,"moe":3.199260124995029e-9,"rme":0.2532201821338182,"sem":1.6322755739770556e-9,"variance":2.4778209009439773e-16}}]}-->
