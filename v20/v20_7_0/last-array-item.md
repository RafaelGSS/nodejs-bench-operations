## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|681,416,518|86|
|Length = 10_000 - Array.at|694,261,899|88|
|Length = 1_000_000 - Array.at|689,198,172|83|
|Length = 100 - Array[length - 1]|794,178,333|82|
|Length = 10_000 - Array[length - 1]|772,995,698|82|
|Length = 1_000_000 - Array[length - 1]|828,099,869|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":681416517.8680232,"cycles":6,"stats":{"deviation":1.0467746995948156e-10,"mean":1.4675311997553898e-9,"moe":2.2123817280195002e-11,"rme":1.5075534533018877,"sem":1.1287661877650512e-11,"variance":1.0957372717118163e-20}},{"name":"Length = 10_000 - Array.at","hz":694261898.9709543,"cycles":7,"stats":{"deviation":8.365629030399602e-11,"mean":1.440378625821488e-9,"moe":1.7478869400055564e-11,"rme":1.2134913061547883,"sem":8.91779051023243e-12,"variance":6.998374907426459e-21}},{"name":"Length = 1_000_000 - Array.at","hz":689198171.883162,"cycles":7,"stats":{"deviation":1.0009841635790178e-10,"mean":1.4509614807416052e-9,"moe":2.1534968051423406e-11,"rme":1.484186061260331,"sem":1.0987228597665003e-11,"variance":1.0019692957359858e-20}},{"name":"Length = 100 - Array[length - 1]","hz":794178332.6669537,"cycles":7,"stats":{"deviation":8.287962957324661e-11,"mean":1.2591630353876195e-9,"moe":1.7938946989611546e-11,"rme":1.4246723010010565,"sem":9.152523974291605e-12,"variance":6.869032998198574e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":772995697.695809,"cycles":6,"stats":{"deviation":1.044767685368483e-10,"mean":1.2936682610017867e-9,"moe":2.261355681822963e-11,"rme":1.748018213009123,"sem":1.1537528988892669e-11,"variance":1.0915395163902174e-20}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":828099869.0872915,"cycles":8,"stats":{"deviation":7.825185672719684e-11,"mean":1.2075838160706052e-9,"moe":1.6635706882890887e-11,"rme":1.3776026691896497,"sem":8.48760555249535e-12,"variance":6.12335308125374e-21}}]}-->
