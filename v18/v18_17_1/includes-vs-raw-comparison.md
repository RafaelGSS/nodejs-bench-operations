## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|742,757,015|89|
|using Array.includes (first item)|722,995,501|90|
|Using raw comparison|743,726,148|91|
|Using raw comparison (first item)|744,527,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":742757015.2512379,"cycles":6,"stats":{"deviation":5.09828907922983e-11,"mean":1.3463353148697621e-9,"moe":1.0592184206660667e-11,"rme":0.7867419126330577,"sem":5.4041756156431975e-12,"variance":2.5992551535394143e-21}},{"name":"using Array.includes (first item)","hz":722995501.0934469,"cycles":8,"stats":{"deviation":1.1263693711125373e-10,"mean":1.3831344710826223e-9,"moe":2.327103230253161e-11,"rme":1.6824851660530629,"sem":1.1872975664556945e-11,"variance":1.2687079601804529e-20}},{"name":"Using raw comparison","hz":743726148.2740531,"cycles":6,"stats":{"deviation":4.436996551841514e-11,"mean":1.344580935228209e-9,"moe":9.116422963530477e-12,"rme":0.678012213670365,"sem":4.6512362058828965e-12,"variance":1.9686938401053485e-21}},{"name":"Using raw comparison (first item)","hz":744527516.0292417,"cycles":6,"stats":{"deviation":6.324550991620634e-11,"mean":1.3431337035510244e-9,"moe":1.3367079904782982e-11,"rme":0.9952158798072465,"sem":6.819938726930093e-12,"variance":3.999994524560955e-21}}]}-->
