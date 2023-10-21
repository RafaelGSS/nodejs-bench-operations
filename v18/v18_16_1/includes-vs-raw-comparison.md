## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|574,700,820|89|
|using Array.includes (first item)|590,633,213|92|
|Using raw comparison|591,780,026|92|
|Using raw comparison (first item)|589,667,366|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":574700820.4122958,"samples":10},{"name":"using Array.includes (first item)","opsSec":590633212.764486,"samples":7},{"name":"Using raw comparison","opsSec":591780025.5992852,"samples":6},{"name":"Using raw comparison (first item)","opsSec":589667366.185143,"samples":7}]}-->
