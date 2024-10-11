## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,024,375|512189|
|Using brackets {}|1,025,525|512844|
|Using '' + |1,024,039|512020|
|Using date.toString()|1,122,448|561225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1024375.6500822587,"samples":512189},{"name":"Using brackets {}","opsSec":1025525.616222876,"samples":512844},{"name":"Using '' + ","opsSec":1024039.9467499227,"samples":512020},{"name":"Using date.toString()","opsSec":1122448.2085726592,"samples":561225}]}-->
