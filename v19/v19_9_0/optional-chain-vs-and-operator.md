## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|588,510,340|96|
|Using optional chain (obj.field?.field2) (undefined)|589,846,935|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|579,081,852|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,773,611|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":588510340.2600852,"cycles":8,"stats":{"deviation":2.4565752829696633e-11,"mean":1.699205488144969e-9,"moe":4.914174032373914e-12,"rme":0.28920422318896477,"sem":2.5072316491703643e-12,"variance":6.0347621208974815e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":589846935.0097401,"cycles":7,"stats":{"deviation":3.2560630576279954e-11,"mean":1.695355083914248e-9,"moe":6.513482666903923e-12,"rme":0.3841957787312347,"sem":3.32320544229792e-12,"variance":1.060194663524977e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":579081852.4096519,"cycles":7,"stats":{"deviation":1.4259890468265351e-10,"mean":1.7268715913628455e-9,"moe":2.8827589836652586e-11,"rme":1.6693534123114435,"sem":1.4707953998292135e-11,"variance":2.03344476166925e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":588773610.5158321,"cycles":6,"stats":{"deviation":2.1245447437035458e-11,"mean":1.6984456880190117e-9,"moe":4.2949491510752285e-12,"rme":0.252875271866047,"sem":2.19130058728328e-12,"variance":4.513690367998365e-22}}]}-->
