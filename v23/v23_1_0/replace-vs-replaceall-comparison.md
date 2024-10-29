## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,282,388|1641196|
|Using replaceAll()|3,214,030|1607016|
|Using replaceAll(//g)|3,009,626|1504845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3282388.947378279,"samples":1641196},{"name":"Using replaceAll()","opsSec":3214030.5022617863,"samples":1607016},{"name":"Using replaceAll(//g)","opsSec":3009626.4968809155,"samples":1504845}]}-->
