## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|12,639,457|94|
|Length = 10_000 - Array.at|12,551,432|93|
|Length = 1_000_000 - Array.at|12,628,023|97|
|Length = 100 - Array[length - 1]|585,237,065|93|
|Length = 10_000 - Array[length - 1]|587,893,545|92|
|Length = 1_000_000 - Array[length - 1]|589,269,290|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Length = 100 - Array.at","hz":12639457.448328832,"cycles":5,"stats":{"deviation":1.1515986598791448e-9,"mean":7.91173200343515e-8,"moe":2.3280553169265076e-10,"rme":0.2942535611564828,"sem":1.1877833249625038e-10,"variance":1.3261794734354421e-18}},{"name":"Length = 10_000 - Array.at","hz":12551432.455980947,"cycles":5,"stats":{"deviation":1.7793290395410067e-9,"mean":7.967218112411424e-8,"moe":3.616353395548809e-10,"rme":0.45390415381188226,"sem":1.8450782630351068e-10,"variance":3.166011830953922e-18}},{"name":"Length = 1_000_000 - Array.at","hz":12628022.871565351,"cycles":6,"stats":{"deviation":8.443410021842891e-10,"mean":7.918896015398501e-8,"moe":1.6803048613204734e-10,"rme":0.2121892821995738,"sem":8.572983986328946e-11,"variance":7.129117279695697e-19}},{"name":"Length = 100 - Array[length - 1]","hz":585237065.2103019,"cycles":7,"stats":{"deviation":3.977101288501212e-11,"mean":1.7087092726101606e-9,"moe":8.083161365602745e-12,"rme":0.4730565635226646,"sem":4.12406192122589e-12,"variance":1.5817334658998002e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":587893545.1574173,"cycles":7,"stats":{"deviation":2.2443766826336754e-11,"mean":1.7009882286294452e-9,"moe":4.5862519112466764e-12,"rme":0.26962278950877894,"sem":2.3399244445136104e-12,"variance":5.037226693549742e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":589269289.6951884,"cycles":6,"stats":{"deviation":2.1946422274286902e-11,"mean":1.6970169962824134e-9,"moe":4.390198793885079e-12,"rme":0.25870093248933335,"sem":2.239897343818918e-12,"variance":4.816454506413162e-22}}]}-->
