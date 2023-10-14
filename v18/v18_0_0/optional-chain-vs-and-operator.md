## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|589,884,791|97|
|Using optional chain (obj.field?.field2) (undefined)|581,402,029|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,795,016|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,296,277|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":589884790.5544474,"cycles":6,"stats":{"deviation":4.364398004049909e-11,"mean":1.6952462853976539e-9,"moe":8.685494561996637e-12,"rme":0.5123441140565178,"sem":4.431374776528897e-12,"variance":1.9047969937754833e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":581402028.935358,"cycles":7,"stats":{"deviation":1.8641413003476723e-10,"mean":1.7199802378246996e-9,"moe":3.768521288685884e-11,"rme":2.191025923328063,"sem":1.9227149432070836e-11,"variance":3.47502278766191e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":590795015.7215044,"cycles":6,"stats":{"deviation":3.687464478019581e-11,"mean":1.6926344559267424e-9,"moe":7.300807185818044e-12,"rme":0.43132804961250437,"sem":3.724901625417369e-12,"variance":1.3597394276656218e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":591296276.9676373,"cycles":8,"stats":{"deviation":1.1875166884301156e-11,"mean":1.691199554186829e-9,"moe":2.3755281239496226e-12,"rme":0.14046409355233277,"sem":1.2120041448722566e-12,"variance":1.4101958853000282e-22}}]}-->
