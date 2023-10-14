## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|669,304,521|84|
|using Array.includes (first item)|672,139,940|86|
|Using raw comparison|690,009,730|86|
|Using raw comparison (first item)|689,235,743|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":669304521.2006137,"cycles":8,"stats":{"deviation":1.2743741592300547e-10,"mean":1.4940882189263823e-9,"moe":2.7252941559048018e-11,"rme":1.824051700148694,"sem":1.3904562019922458e-11,"variance":1.624029497713309e-20}},{"name":"using Array.includes (first item)","hz":672139940.4483539,"cycles":7,"stats":{"deviation":9.479604282393026e-11,"mean":1.4877854146458631e-9,"moe":2.003535556537596e-11,"rme":1.3466562696573396,"sem":1.0222120186416307e-11,"variance":8.98628973507642e-21}},{"name":"Using raw comparison","hz":690009729.9460306,"cycles":6,"stats":{"deviation":8.383000611066303e-11,"mean":1.4492549258373724e-9,"moe":1.7717659191685007e-11,"rme":1.2225357234130378,"sem":9.039622036573983e-12,"variance":7.0274699245138e-21}},{"name":"Using raw comparison (first item)","hz":689235742.8836392,"cycles":6,"stats":{"deviation":7.812054628021803e-11,"mean":1.4508823872310782e-9,"moe":1.6415787311497973e-11,"rme":1.1314347362660122,"sem":8.375401689539782e-12,"variance":6.102819751119687e-21}}]}-->
