## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,041,473|94|
|using Array.includes (first item)|591,495,583|94|
|Using raw comparison|592,777,154|93|
|Using raw comparison (first item)|592,101,230|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":585041473.3482649,"cycles":7,"stats":{"deviation":1.4003586369556463e-10,"mean":1.7092805306209763e-9,"moe":2.8309449150545933e-11,"rme":1.6562201840713178,"sem":1.4443596505380578e-11,"variance":1.9610043120962755e-20}},{"name":"using Array.includes (first item)","hz":591495583.4627279,"cycles":6,"stats":{"deviation":1.3537945280608635e-11,"mean":1.690629698612134e-9,"moe":2.7368115810493067e-12,"rme":0.16188119629603107,"sem":1.3963324393108708e-12,"variance":1.8327596242075363e-22}},{"name":"Using raw comparison","hz":592777153.6320626,"cycles":7,"stats":{"deviation":1.1584755839951157e-11,"mean":1.6869745972374319e-9,"moe":2.3545151114500064e-12,"rme":0.13957027659490134,"sem":1.2012832201275543e-12,"variance":1.3420656787128243e-22}},{"name":"Using raw comparison (first item)","hz":592101229.8973625,"cycles":8,"stats":{"deviation":1.0548075129657405e-11,"mean":1.6889003932205048e-9,"moe":2.1323837239890738e-12,"rme":0.12625870255870483,"sem":1.0879508795862622e-12,"variance":1.1126188894089706e-22}}]}-->
