## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,772,339|3886177|
|Adding property in the object creation - small object|7,124,070|3562100|
|Adding property after the function creation - small class|222,099|111921|
|Adding property in the function creation - small class|241,599|121572|
|Adding property after the class creation - small class|239,210|119824|
|Adding property in the class creation - small class|235,354|117685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7772339.869886116,"samples":3886177},{"name":"Adding property in the object creation - small object","opsSec":7124070.042714282,"samples":3562100},{"name":"Adding property after the function creation - small class","opsSec":222099.30623341314,"samples":111921},{"name":"Adding property in the function creation - small class","opsSec":241599.66498306976,"samples":121572},{"name":"Adding property after the class creation - small class","opsSec":239210.7863126896,"samples":119824},{"name":"Adding property in the class creation - small class","opsSec":235354.72971442668,"samples":117685}]}-->
