## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,259,669|95|
|using Array.includes (first item)|858,484,217|93|
|Using raw comparison|850,199,005|95|
|Using raw comparison (first item)|848,503,401|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":858259668.6238912,"samples":5},{"name":"using Array.includes (first item)","opsSec":858484217.2944096,"samples":6},{"name":"Using raw comparison","opsSec":850199004.5222129,"samples":6},{"name":"Using raw comparison (first item)","opsSec":848503401.4876283,"samples":7}]}-->
