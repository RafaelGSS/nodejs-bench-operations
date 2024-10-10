## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,603,741|43302638|
|using Array.includes (first item)|78,685,687|39342849|
|Using raw comparison|97,118,271|48561083|
|Using raw comparison (first item)|97,223,305|48611657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":86603741.38170272,"samples":43302638},{"name":"using Array.includes (first item)","opsSec":78685687.92823195,"samples":39342849},{"name":"Using raw comparison","opsSec":97118271.55731054,"samples":48561083},{"name":"Using raw comparison (first item)","opsSec":97223305.05545592,"samples":48611657}]}-->
