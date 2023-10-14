## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,808,446|87|
|Length = 10_000 - Array.at|16,485,716|86|
|Length = 1_000_000 - Array.at|16,126,841|88|
|Length = 100 - Array[length - 1]|727,295,557|88|
|Length = 10_000 - Array[length - 1]|730,199,334|88|
|Length = 1_000_000 - Array[length - 1]|763,655,631|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":16808445.566478442,"cycles":4,"stats":{"deviation":3.590538921542591e-9,"mean":5.949390120846917e-8,"moe":7.544945097833227e-10,"rme":1.2681879897899815,"sem":3.8494617846087893e-10,"variance":1.289196974711223e-17}},{"name":"Length = 10_000 - Array.at","hz":16485716.376048384,"cycles":4,"stats":{"deviation":4.206101203031009e-9,"mean":6.065857116484612e-8,"moe":8.889688919104184e-10,"rme":1.4655289019165172,"sem":4.5355555709715223e-10,"variance":1.76912873301389e-17}},{"name":"Length = 1_000_000 - Array.at","hz":16126841.091051692,"cycles":6,"stats":{"deviation":3.265970184752632e-9,"mean":6.200842399041623e-8,"moe":6.8238103932562e-10,"rme":1.100465058475097,"sem":3.4815359149266323e-10,"variance":1.0666561247693142e-17}},{"name":"Length = 100 - Array[length - 1]","hz":727295557.3289608,"cycles":7,"stats":{"deviation":6.544518611383294e-11,"mean":1.3749568382798371e-9,"moe":1.3673901350265523e-11,"rme":0.9944967703402594,"sem":6.976480280747716e-12,"variance":4.283072385474233e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":730199334.2121863,"cycles":8,"stats":{"deviation":7.047982213028385e-11,"mean":1.3694890602425736e-9,"moe":1.472582159545667e-11,"rme":1.0752785124729898,"sem":7.513174283396261e-12,"variance":4.96740532751645e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":763655630.5246428,"cycles":9,"stats":{"deviation":7.359523224401852e-11,"mean":1.3094907704837914e-9,"moe":1.5738600385483247e-11,"rme":1.2018870800951595,"sem":8.0298981558588e-12,"variance":5.4162582090510236e-21}}]}-->
