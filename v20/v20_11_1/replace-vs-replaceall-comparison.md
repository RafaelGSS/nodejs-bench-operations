## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,267,507|93|
|Using replaceAll()|2,663,205|95|
|Using replaceAll(//g)|3,075,674|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3267507.3313517096,"samples":5},{"name":"Using replaceAll()","opsSec":2663205.2782604196,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3075674.2197130127,"samples":4}]}-->
