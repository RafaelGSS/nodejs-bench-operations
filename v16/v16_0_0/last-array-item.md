## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|700,627,242|98|
|Length = 10_000 - Array[length - 1]|704,261,643|94|
|Length = 1_000_000 - Array[length - 1]|701,955,113|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 10_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 1_000_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 100 - Array[length - 1]","hz":700627241.500461,"cycles":7,"stats":{"deviation":2.479067754689114e-11,"mean":1.4272924898815e-9,"moe":4.9083037370124264e-12,"rme":0.343889130770942,"sem":2.5042366005165443e-12,"variance":6.145776932339324e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":704261642.5066034,"cycles":6,"stats":{"deviation":1.2437349590702342e-11,"mean":1.41992682782042e-9,"moe":2.5143167365397066e-12,"rme":0.17707368346572963,"sem":1.2828146614998503e-12,"variance":1.546876648413437e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":701955113.1076344,"cycles":6,"stats":{"deviation":2.079736227502567e-11,"mean":1.4245925150012617e-9,"moe":4.138838318045016e-12,"rme":0.29052787196775004,"sem":2.1116522030841916e-12,"variance":4.325302775986609e-22}}]}-->
