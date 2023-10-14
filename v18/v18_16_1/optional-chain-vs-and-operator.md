## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|708,824,891|98|
|Using optional chain (obj.field?.field2) (undefined)|710,886,034|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,159,421|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,392,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":708824890.6343275,"cycles":9,"stats":{"deviation":1.8385907650719465e-11,"mean":1.4107856724741985e-9,"moe":3.64022399386614e-12,"rme":0.25802813743366215,"sem":1.8572571397276225e-12,"variance":3.380416001407845e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":710886034.129177,"cycles":7,"stats":{"deviation":1.6322288483367044e-11,"mean":1.4066952394485884e-9,"moe":3.2482635114871074e-12,"rme":0.2309145165487584,"sem":1.6572773017791365e-12,"variance":2.6641710133425647e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":709159420.9559479,"cycles":10,"stats":{"deviation":1.4663767188473556e-11,"mean":1.4101201654375522e-9,"moe":2.918204757120848e-12,"rme":0.20694723957907132,"sem":1.4888799781228817e-12,"variance":2.150260681577536e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":708392505.3114617,"cycles":6,"stats":{"deviation":1.395615369861044e-11,"mean":1.4116467812718122e-9,"moe":2.806467468336904e-12,"rme":0.19880805209702945,"sem":1.431871157314747e-12,"variance":1.9477422605923788e-22}}]}-->
