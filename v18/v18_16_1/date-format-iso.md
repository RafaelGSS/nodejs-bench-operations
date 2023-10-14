## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,656,540|95|
|fromUnixToISOString(new Date())|1,362,030|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1656539.5781087338,"cycles":5,"stats":{"deviation":9.90712406994517e-9,"mean":6.036680398193063e-7,"moe":1.9922409861283603e-9,"rme":0.33002260426520014,"sem":1.0164494827185511e-9,"variance":9.815110733728695e-17}},{"name":"fromUnixToISOString(new Date())","hz":1362029.576764631,"cycles":7,"stats":{"deviation":1.505818234481476e-8,"mean":7.341984469789583e-7,"moe":3.044140523294276e-9,"rme":0.4146209428554566,"sem":1.5531329200481001e-9,"variance":2.2674885552969095e-16}}]}-->
