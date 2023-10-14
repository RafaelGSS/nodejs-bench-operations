## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|678,165,746|89|
|Using optional chain (obj.field?.field2) (undefined)|685,522,885|81|
|Using and operator (obj.field && obj.field.field2) (Valid)|700,782,718|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|703,384,841|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":678165746.249717,"cycles":7,"stats":{"deviation":8.92402436731499e-11,"mean":1.4745657761838296e-9,"moe":1.8540515944538818e-11,"rme":1.2573542831382944,"sem":9.459446910478988e-12,"variance":7.96382109084317e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":685522885.4595311,"cycles":8,"stats":{"deviation":1.0746279929577959e-10,"mean":1.458740504818688e-9,"moe":2.3403009624414223e-11,"rme":1.6043298686165615,"sem":1.19403110328644e-11,"variance":1.1548253232485006e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":700782718.0004581,"cycles":8,"stats":{"deviation":7.808012154528801e-11,"mean":1.426975829046267e-9,"moe":1.6042640663204637e-11,"rme":1.124240532786522,"sem":8.185020746532979e-12,"variance":6.096505380526949e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":703384840.9795094,"cycles":5,"stats":{"deviation":7.642079355382855e-11,"mean":1.4216968318615378e-9,"moe":1.570170878217598e-11,"rme":1.1044343934857417,"sem":8.01107590927346e-12,"variance":5.840137687396883e-21}}]}-->
