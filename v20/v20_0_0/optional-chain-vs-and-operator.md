## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,739,831|96|
|Using optional chain (obj.field?.field2) (undefined)|592,160,053|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|582,124,827|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,051,550|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":590739831.1319287,"cycles":7,"stats":{"deviation":3.104207693228997e-11,"mean":1.6927925751745563e-9,"moe":6.2097086716269984e-12,"rme":0.3668322252055406,"sem":3.1682187100137746e-12,"variance":9.63610540270209e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":592160052.923921,"cycles":7,"stats":{"deviation":1.6647141360946302e-11,"mean":1.6887326239962982e-9,"moe":3.3834071635434443e-12,"rme":0.20035185650270596,"sem":1.7262281446650227e-12,"variance":2.771273154913291e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":582124827.4927658,"cycles":6,"stats":{"deviation":1.8307777863946634e-10,"mean":1.7178446147144055e-9,"moe":3.7010740878895535e-11,"rme":2.1544871149506517,"sem":1.888303106066099e-11,"variance":3.351747303156144e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":593051550.043694,"cycles":7,"stats":{"deviation":2.950774333278678e-11,"mean":1.6861940583855203e-9,"moe":5.9027780278177606e-12,"rme":0.35006516589611825,"sem":3.0116214427641638e-12,"variance":8.707069165936227e-22}}]}-->
