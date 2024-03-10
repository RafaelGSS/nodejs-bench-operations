## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,281,509|95|
|Using replaceAll()|2,834,053|93|
|Using replaceAll(//g)|3,049,065|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3281508.8882570975,"samples":4},{"name":"Using replaceAll()","opsSec":2834052.8108113594,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3049064.776454398,"samples":5}]}-->
