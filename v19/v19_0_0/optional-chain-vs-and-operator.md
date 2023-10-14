## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,626,447|96|
|Using optional chain (obj.field?.field2) (undefined)|710,403,079|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,550,777|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|712,432,682|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":712626447.2708188,"cycles":7,"stats":{"deviation":3.1576464573230785e-11,"mean":1.403259735629726e-9,"moe":6.316608463647959e-12,"rme":0.450138224825023,"sem":3.2227594202285508e-12,"variance":9.970731149444987e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":710403078.8993604,"cycles":6,"stats":{"deviation":6.020966211450045e-11,"mean":1.4076515568447662e-9,"moe":1.2107666743504465e-11,"rme":0.8601323732872965,"sem":6.177380991583911e-12,"variance":3.6252034119423104e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":714550777.1634406,"cycles":10,"stats":{"deviation":1.6506220058956405e-11,"mean":1.3994806694769965e-9,"moe":3.3368737485892187e-12,"rme":0.23843657303507093,"sem":1.7024866064230708e-12,"variance":2.7245530063469483e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":712432681.7292823,"cycles":6,"stats":{"deviation":2.8252415458801948e-11,"mean":1.4036413904717396e-9,"moe":5.622452411603842e-12,"rme":0.4005618849494195,"sem":2.8685981691856334e-12,"variance":7.981989792567513e-22}}]}-->
