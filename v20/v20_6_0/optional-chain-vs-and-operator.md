## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|724,691,555|82|
|Using optional chain (obj.field?.field2) (undefined)|735,161,329|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|764,511,214|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|751,846,461|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":724691555.0451272,"cycles":6,"stats":{"deviation":1.971118726001143e-10,"mean":1.3798974101991973e-9,"moe":4.266403520145465e-11,"rme":3.0918266014642213,"sem":2.1767364898701353e-11,"variance":3.88530903199237e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":735161329.4871227,"cycles":6,"stats":{"deviation":5.88819299507956e-11,"mean":1.3602456493428989e-9,"moe":1.2302596252992285e-11,"rme":0.9044393017493102,"sem":6.2768348229552475e-12,"variance":3.4670816747304e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":764511213.7017301,"cycles":6,"stats":{"deviation":7.348580447579368e-11,"mean":1.3080252873702708e-9,"moe":1.5622483023944053e-11,"rme":1.194356345767014,"sem":7.970654604053089e-12,"variance":5.40016345945458e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":751846460.8680363,"cycles":5,"stats":{"deviation":5.186372477418371e-11,"mean":1.3300587979698151e-9,"moe":1.0836235609231663e-11,"rme":0.8147185391933015,"sem":5.528691637363094e-12,"variance":2.6898459474522775e-21}}]}-->
