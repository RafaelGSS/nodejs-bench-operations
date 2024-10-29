## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|127,645,443|64845586|
|Length = 10_000 - Array.at|94,191,965|48124752|
|Length = 1_000_000 - Array.at|99,127,031|49563688|
|Length = 100 - Array[length - 1]|99,090,776|49545396|
|Length = 10_000 - Array[length - 1]|98,353,228|49200061|
|Length = 1_000_000 - Array[length - 1]|98,923,445|49464071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":127645443.91219723,"samples":64845586},{"name":"Length = 10_000 - Array.at","opsSec":94191965.29098715,"samples":48124752},{"name":"Length = 1_000_000 - Array.at","opsSec":99127031.037932,"samples":49563688},{"name":"Length = 100 - Array[length - 1]","opsSec":99090776.74002038,"samples":49545396},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98353228.16434352,"samples":49200061},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":98923445.90617593,"samples":49464071}]}-->
