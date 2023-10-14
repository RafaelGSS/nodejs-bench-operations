## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|644,539|94|
|Using brackets {}|665,946|97|
|Using '' + |660,561|97|
|Using date.toString()|702,245|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","hz":644538.940090355,"cycles":6,"stats":{"deviation":1.941628477541916e-7,"mean":0.0000015514966401561626,"moe":3.925168253592579e-8,"rme":2.529923785846871,"sem":2.0026368640778464e-8,"variance":3.7699211448017385e-14}},{"name":"Using brackets {}","hz":665945.7004342015,"cycles":3,"stats":{"deviation":1.0857526688747741e-8,"mean":0.0000015016239302213269,"moe":2.1607330249061646e-9,"rme":0.14389308677224466,"sem":1.1024148086255942e-9,"variance":1.1788588579686948e-16}},{"name":"Using '' + ","hz":660561.1682225094,"cycles":6,"stats":{"deviation":8.689487196904858e-9,"mean":0.0000015138643446009392,"moe":1.7292761504615857e-9,"rme":0.1142292674128229,"sem":8.822837502355029e-10,"variance":7.550718774517345e-17}},{"name":"Using date.toString()","hz":702244.6644008401,"cycles":3,"stats":{"deviation":1.644922589066162e-8,"mean":0.0000014240051234183556,"moe":3.3253518893551687e-9,"rme":0.23352106215549198,"sem":1.6966081068138616e-9,"variance":2.7057703240201257e-16}}]}-->
