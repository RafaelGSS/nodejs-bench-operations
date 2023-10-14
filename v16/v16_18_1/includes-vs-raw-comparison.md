## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,389,895|92|
|using Array.includes (first item)|690,404,518|90|
|Using raw comparison|714,480,308|96|
|Using raw comparison (first item)|708,562,573|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":710389895.3058752,"cycles":6,"stats":{"deviation":2.0830501147765964e-11,"mean":1.4076776803946885e-9,"moe":4.256590546514811e-12,"rme":0.3023838912698635,"sem":2.171729870670822e-12,"variance":4.339097780670791e-22}},{"name":"using Array.includes (first item)","hz":690404517.6555152,"cycles":8,"stats":{"deviation":2.2657289237523186e-10,"mean":1.4484262116299778e-9,"moe":4.681044453591811e-11,"rme":3.231814238106079,"sem":2.388287986526434e-11,"variance":5.13352755592784e-20}},{"name":"Using raw comparison","hz":714480307.72557,"cycles":7,"stats":{"deviation":8.832078387063922e-12,"mean":1.3996187007355525e-9,"moe":1.7667836423532227e-12,"rme":0.12623321204730337,"sem":9.014202256904198e-13,"variance":7.800560863524166e-23}},{"name":"Using raw comparison (first item)","hz":708562573.0305248,"cycles":8,"stats":{"deviation":6.070626523193157e-11,"mean":1.4113079607394393e-9,"moe":1.2019227305682226e-11,"rme":0.8516374625552942,"sem":6.132258829429707e-12,"variance":3.685250638409624e-21}}]}-->
