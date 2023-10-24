## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|602,633|85|
|Using brackets {}|624,557|87|
|Using '' + |631,879|85|
|Using date.toString()|660,845|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":602632.5086052603,"samples":3},{"name":"Using brackets {}","opsSec":624557.080372521,"samples":5},{"name":"Using '' + ","opsSec":631879.4615605058,"samples":3},{"name":"Using date.toString()","opsSec":660845.4290266474,"samples":5}]}-->
