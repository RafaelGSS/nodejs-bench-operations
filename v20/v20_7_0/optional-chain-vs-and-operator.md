## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|762,499,066|87|
|Using optional chain (obj.field?.field2) (undefined)|762,518,368|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,204,544|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|778,052,312|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":762499066.4209808,"cycles":6,"stats":{"deviation":5.508097728346813e-11,"mean":1.3114770155638373e-9,"moe":1.1574389210637513e-11,"rme":0.8825460967504176,"sem":5.9053006176722e-12,"variance":3.033914058501932e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":762518367.7860674,"cycles":8,"stats":{"deviation":6.395204802304401e-11,"mean":1.3114438185973778e-9,"moe":1.328665092399235e-11,"rme":1.0131315375905892,"sem":6.778903532649158e-12,"variance":4.0898644463417275e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":774204543.703185,"cycles":6,"stats":{"deviation":5.2957295305947277e-11,"mean":1.2916483223112944e-9,"moe":1.094109056341054e-11,"rme":0.8470642027260481,"sem":5.582189062964562e-12,"variance":2.8044751261213054e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":778052311.7397103,"cycles":6,"stats":{"deviation":6.773538679283853e-11,"mean":1.2852606243968594e-9,"moe":1.4233511617606968e-11,"rme":1.1074416618253127,"sem":7.261995723268861e-12,"variance":4.588082623975444e-21}}]}-->
