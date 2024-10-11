## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,279,966|1640114|
|Using replaceAll()|3,021,909|1513390|
|Using replaceAll(//g)|2,732,039|1366020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:12:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3279966.094707337,"samples":1640114},{"name":"Using replaceAll()","opsSec":3021909.727100679,"samples":1513390},{"name":"Using replaceAll(//g)","opsSec":2732039.366166867,"samples":1366020}]}-->
