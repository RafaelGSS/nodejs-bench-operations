## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,020,106|97|
|Using optional chain (obj.field?.field2) (undefined)|713,029,845|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|713,501,551|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,136,664|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":713020106.1150975,"cycles":6,"stats":{"deviation":1.0458471374512517e-11,"mean":1.4024849950564753e-9,"moe":2.081317885441119e-12,"rme":0.14840214995364773,"sem":1.0618968803271015e-12,"variance":1.0937962349149775e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":713029845.2510808,"cycles":10,"stats":{"deviation":1.9384934298271752e-11,"mean":1.4024658387866889e-9,"moe":3.877794481131636e-12,"rme":0.27649831987967854,"sem":1.9784665720059368e-12,"variance":3.7577567774831253e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":713501551.4509156,"cycles":7,"stats":{"deviation":9.240287380226121e-12,"mean":1.4015386483273733e-9,"moe":1.838889709824053e-12,"rme":0.13120506609065857,"sem":9.382090356245167e-13,"variance":8.538291086916612e-23}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":711136663.7153362,"cycles":6,"stats":{"deviation":1.2243176092051857e-11,"mean":1.4061994705426889e-9,"moe":2.449145297619823e-12,"rme":0.1741677015903465,"sem":1.2495639273570526e-12,"variance":1.4989536082099017e-22}}]}-->
