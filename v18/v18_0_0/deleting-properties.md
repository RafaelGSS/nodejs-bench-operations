## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,396,034|95|
|Using delete property (proto: null)|12,542,414|96|
|Using delete property (cached proto: null)|2,412,343|95|
|Using undefined assignment|708,023,225|94|
|Using undefined assignment (proto: null)|14,303,785|92|
|Using undefined property (cached proto: null)|707,012,987|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2396033.8192949826,"cycles":6,"stats":{"deviation":1.0986096288302673e-8,"mean":4.173563795081338e-7,"moe":2.209213405281435e-9,"rme":0.5293350033094151,"sem":1.1271496965721605e-9,"variance":1.2069431165585775e-16}},{"name":"Using delete property (proto: null)","hz":12542413.833903464,"cycles":7,"stats":{"deviation":9.252319852661674e-10,"mean":7.972946940220509e-8,"moe":1.8508494437102549e-10,"rme":0.23214119667264033,"sem":9.443109406684974e-11,"variance":8.560542265595733e-19}},{"name":"Using delete property (cached proto: null)","hz":2412343.4410908106,"cycles":7,"stats":{"deviation":8.24613028098906e-9,"mean":4.1453467320052124e-7,"moe":1.6582288267266545e-9,"rme":0.40002174339817553,"sem":8.460351156768646e-10,"variance":6.799866461104471e-17}},{"name":"Using undefined assignment","hz":708023224.6944673,"cycles":8,"stats":{"deviation":1.3013206781875206e-11,"mean":1.4123830477898931e-9,"moe":2.630731199529881e-12,"rme":0.18626187871954902,"sem":1.3422097956785107e-12,"variance":1.6934355074784285e-22}},{"name":"Using undefined assignment (proto: null)","hz":14303784.520241657,"cycles":6,"stats":{"deviation":1.7911009037123018e-9,"mean":6.991156771027094e-8,"moe":3.660009483455744e-10,"rme":0.5235198699339193,"sem":1.8673517772733386e-10,"variance":3.2080424472790246e-18}},{"name":"Using undefined property (cached proto: null)","hz":707012986.7251657,"cycles":7,"stats":{"deviation":1.0084650984148297e-11,"mean":1.4144011761819672e-9,"moe":1.986549296180973e-12,"rme":0.14045161511696858,"sem":1.0135455592760067e-12,"variance":1.0170018547208322e-22}}]}-->
