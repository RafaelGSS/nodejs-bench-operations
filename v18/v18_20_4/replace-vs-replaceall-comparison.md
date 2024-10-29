## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,334,259|1667504|
|Using replaceAll()|2,941,438|1470926|
|Using replaceAll(//g)|3,030,626|1515314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:04:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3334259.0720642693,"samples":1667504},{"name":"Using replaceAll()","opsSec":2941438.5513972156,"samples":1470926},{"name":"Using replaceAll(//g)","opsSec":3030626.7513817786,"samples":1515314}]}-->
