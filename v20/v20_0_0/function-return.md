## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,143,295|88|
|Function returning explicitly undefined|1,159,387|96|
|Function returning implicitly undefined|1,177,450|95|
|Function returning string|1,177,800|99|
|Function returning integer|1,184,522|100|
|Function returning float|1,186,037|96|
|Function returning functions|1,146,697|98|
|Function returning arrow functions|1,162,834|100|
|Function returning empty object|1,186,328|97|
|Function returning empty array|1,189,928|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1143294.7514319806,"cycles":6,"stats":{"deviation":2.8571202349963335e-8,"mean":8.746650841766714e-7,"moe":5.969572791990217e-9,"rme":0.682498124137357,"sem":3.0457004040766414e-9,"variance":8.163136037225504e-16}},{"name":"Function returning explicitly undefined","hz":1159386.8069752764,"cycles":5,"stats":{"deviation":2.3869366604211954e-9,"mean":8.625249088428904e-7,"moe":4.77486777420613e-10,"rme":0.0553591870246599,"sem":2.436157027656189e-10,"variance":5.697466620862689e-18}},{"name":"Function returning implicitly undefined","hz":1177449.5594328523,"cycles":7,"stats":{"deviation":1.5208795756799588e-8,"mean":8.492932813883549e-7,"moe":3.0583634607211417e-9,"rme":0.3601068709411642,"sem":1.5603895207760927e-9,"variance":2.3130746837204517e-16}},{"name":"Function returning string","hz":1177799.9214948153,"cycles":5,"stats":{"deviation":8.383503665637473e-9,"mean":8.490406407319513e-7,"moe":1.651444688832657e-9,"rme":0.1945071424860133,"sem":8.425738208329882e-10,"variance":7.028313371175693e-17}},{"name":"Function returning integer","hz":1184522.017973895,"cycles":7,"stats":{"deviation":9.468438862546696e-9,"mean":8.442223823838102e-7,"moe":1.8558140170591524e-9,"rme":0.21982525644711473,"sem":9.468438862546697e-10,"variance":8.965133449378457e-17}},{"name":"Function returning float","hz":1186036.837821289,"cycles":5,"stats":{"deviation":5.64964300221341e-9,"mean":8.43144131877866e-7,"moe":1.1301639777185282e-9,"rme":0.13404161103528128,"sem":5.766142743461879e-10,"variance":3.191846605245896e-17}},{"name":"Function returning functions","hz":1146697.191851232,"cycles":5,"stats":{"deviation":1.1136885061252814e-8,"mean":8.720698080594377e-7,"moe":2.2049907454699666e-9,"rme":0.2528456695888365,"sem":1.1249952783010033e-9,"variance":1.240302088675561e-16}},{"name":"Function returning arrow functions","hz":1162833.9753894184,"cycles":6,"stats":{"deviation":3.1583285161616187e-9,"mean":8.599679929932496e-7,"moe":6.190323891676773e-10,"rme":0.07198318939906596,"sem":3.158328516161619e-10,"variance":9.975039015999651e-18}},{"name":"Function returning empty object","hz":1186327.8092010901,"cycles":6,"stats":{"deviation":1.0764431205811134e-8,"mean":8.429373333778889e-7,"moe":2.1422062931543387e-9,"rme":0.2541358898614575,"sem":1.0929623944664995e-9,"variance":1.1587297918464055e-16}},{"name":"Function returning empty array","hz":1189928.0972455775,"cycles":6,"stats":{"deviation":3.1351524009815844e-9,"mean":8.403869127174833e-7,"moe":6.239199336194376e-10,"rme":0.07424198594453643,"sem":3.1832649674461105e-10,"variance":9.829180577380594e-18}}]}-->
