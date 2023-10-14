## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|586,465,010|93|
|using Array.includes (first item)|590,037,514|94|
|Using raw comparison|594,450,204|97|
|Using raw comparison (first item)|593,772,245|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":586465010.0020384,"cycles":6,"stats":{"deviation":6.606618701657358e-11,"mean":1.705131564450067e-9,"moe":1.3427459139877787e-11,"rme":0.7874734958770389,"sem":6.85074445912132e-12,"variance":4.364741066908876e-21}},{"name":"using Array.includes (first item)","hz":590037514.1631689,"cycles":6,"stats":{"deviation":8.695976645516613e-11,"mean":1.6948074927375892e-9,"moe":1.757966153554597e-11,"rme":1.0372659792263421,"sem":8.969215069156107e-12,"variance":7.562000981937036e-21}},{"name":"Using raw comparison","hz":594450204.2889888,"cycles":6,"stats":{"deviation":3.439462586348163e-11,"mean":1.6822266907891504e-9,"moe":6.844800488451567e-12,"rme":0.4068893048677404,"sem":3.492245147169167e-12,"variance":1.1829902882888794e-21}},{"name":"Using raw comparison (first item)","hz":593772245.3183458,"cycles":8,"stats":{"deviation":3.7996916775992965e-11,"mean":1.6841474283862136e-9,"moe":7.561684652139524e-12,"rme":0.448991847429016,"sem":3.8580023735405736e-12,"variance":1.4437656844817357e-21}}]}-->
