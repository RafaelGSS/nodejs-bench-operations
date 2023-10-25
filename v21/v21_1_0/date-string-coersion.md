## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|565,406|92|
|Using brackets {}|574,799|90|
|Using '' + |593,764|94|
|Using date.toString()|639,600|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":565406.1675100203,"samples":6},{"name":"Using brackets {}","opsSec":574798.884464134,"samples":5},{"name":"Using '' + ","opsSec":593763.5756847401,"samples":7},{"name":"Using date.toString()","opsSec":639599.8882514624,"samples":4}]}-->
