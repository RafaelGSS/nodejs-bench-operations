## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,417,233|1708746|
|Using replaceAll()|3,128,439|1564222|
|Using replaceAll(//g)|3,121,176|1562610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3417233.691305274,"samples":1708746},{"name":"Using replaceAll()","opsSec":3128439.019525081,"samples":1564222},{"name":"Using replaceAll(//g)","opsSec":3121176.9584574467,"samples":1562610}]}-->
