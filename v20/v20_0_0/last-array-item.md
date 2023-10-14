## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|709,846,288|94|
|Length = 10_000 - Array.at|711,874,903|94|
|Length = 1_000_000 - Array.at|709,264,053|94|
|Length = 100 - Array[length - 1]|714,069,326|96|
|Length = 10_000 - Array[length - 1]|710,776,016|96|
|Length = 1_000_000 - Array[length - 1]|714,545,472|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":709846288.0625906,"cycles":9,"stats":{"deviation":3.345854706212637e-11,"mean":1.4087556937563715e-9,"moe":6.763931836530067e-12,"rme":0.48013519068692495,"sem":3.450985630882687e-12,"variance":1.1194743715085254e-21}},{"name":"Length = 10_000 - Array.at","hz":711874902.930791,"cycles":7,"stats":{"deviation":1.3708878055547762e-11,"mean":1.4047411924243952e-9,"moe":2.7713671054171276e-12,"rme":0.19728666891544053,"sem":1.4139628088862896e-12,"variance":1.87933337541879e-22}},{"name":"Length = 1_000_000 - Array.at","hz":709264053.216112,"cycles":9,"stats":{"deviation":2.4221500716054556e-11,"mean":1.4099121412759672e-9,"moe":4.8965838091430045e-12,"rme":0.34729708793851566,"sem":2.4982570454811246e-12,"variance":5.866810969378313e-22}},{"name":"Length = 100 - Array[length - 1]","hz":714069325.6904368,"cycles":6,"stats":{"deviation":1.1167665908669336e-11,"mean":1.4004242501708018e-9,"moe":2.233998452686052e-12,"rme":0.15952297687030084,"sem":1.1397951289214551e-12,"variance":1.247167618476553e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":710776015.8717364,"cycles":7,"stats":{"deviation":4.742881159422784e-11,"mean":1.4069129763383234e-9,"moe":9.48773831351732e-12,"rme":0.6743656838115467,"sem":4.8406828130190404e-12,"variance":2.2494921692407614e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":714545471.8800645,"cycles":7,"stats":{"deviation":1.7235025586541598e-11,"mean":1.3994910601964443e-9,"moe":3.4477231685852075e-12,"rme":0.24635549784085478,"sem":1.7590424329516365e-12,"variance":2.9704610696874357e-22}}]}-->
