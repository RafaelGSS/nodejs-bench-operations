## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|993,881|497007|
|Using brackets {}|1,031,300|515651|
|Using '' + |1,013,192|506642|
|Using date.toString()|1,137,623|568814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":993881.3665316362,"samples":497007},{"name":"Using brackets {}","opsSec":1031300.5499914268,"samples":515651},{"name":"Using '' + ","opsSec":1013192.5188474733,"samples":506642},{"name":"Using date.toString()","opsSec":1137623.2993405273,"samples":568814}]}-->
