## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,809,617|10411301|
|Length = 10_000 - Array.at|19,728,733|9864370|
|Length = 1_000_000 - Array.at|21,448,984|10725492|
|Length = 100 - Array[length - 1]|101,700,720|50850374|
|Length = 10_000 - Array[length - 1]|101,090,654|50799685|
|Length = 1_000_000 - Array[length - 1]|62,115,886|31083079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":20809617.96372924,"samples":10411301},{"name":"Length = 10_000 - Array.at","opsSec":19728733.213315774,"samples":9864370},{"name":"Length = 1_000_000 - Array.at","opsSec":21448984.740132373,"samples":10725492},{"name":"Length = 100 - Array[length - 1]","opsSec":101700720.54080546,"samples":50850374},{"name":"Length = 10_000 - Array[length - 1]","opsSec":101090654.33074969,"samples":50799685},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":62115886.49497367,"samples":31083079}]}-->
