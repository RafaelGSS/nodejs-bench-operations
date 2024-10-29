## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,912,337|3960460|
|Adding property in the object creation - small object|7,288,474|3644240|
|Adding property after the function creation - small class|240,251|120128|
|Adding property in the function creation - small class|252,454|126982|
|Adding property after the class creation - small class|214,674|108939|
|Adding property in the class creation - small class|213,149|106577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7912337.218799303,"samples":3960460},{"name":"Adding property in the object creation - small object","opsSec":7288474.489913286,"samples":3644240},{"name":"Adding property after the function creation - small class","opsSec":240251.83547468387,"samples":120128},{"name":"Adding property in the function creation - small class","opsSec":252454.34974866407,"samples":126982},{"name":"Adding property after the class creation - small class","opsSec":214674.6188965866,"samples":108939},{"name":"Adding property in the class creation - small class","opsSec":213149.2616919126,"samples":106577}]}-->
