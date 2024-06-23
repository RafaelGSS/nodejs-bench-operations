## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,919,356|7459679|
|using Array.includes (first item)|15,408,727|7704364|
|Using raw comparison|16,107,640|8053821|
|Using raw comparison (first item)|16,152,719|8076360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:39:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14919356.985495195,"samples":7459679},{"name":"using Array.includes (first item)","opsSec":15408727.599347945,"samples":7704364},{"name":"Using raw comparison","opsSec":16107640.711389363,"samples":8053821},{"name":"Using raw comparison (first item)","opsSec":16152719.935322227,"samples":8076360}]}-->
