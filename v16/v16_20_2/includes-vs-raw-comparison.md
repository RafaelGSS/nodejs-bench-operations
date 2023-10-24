## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|600,831,873|88|
|using Array.includes (first item)|614,460,457|92|
|Using raw comparison|615,054,879|94|
|Using raw comparison (first item)|613,454,649|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":600831872.8153632,"samples":6},{"name":"using Array.includes (first item)","opsSec":614460456.5108569,"samples":7},{"name":"Using raw comparison","opsSec":615054879.4516215,"samples":6},{"name":"Using raw comparison (first item)","opsSec":613454648.8806478,"samples":6}]}-->
