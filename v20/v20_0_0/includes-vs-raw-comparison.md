## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,102,958|8051480|
|using Array.includes (first item)|16,142,381|8071191|
|Using raw comparison|16,148,465|8074234|
|Using raw comparison (first item)|16,099,624|8049813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16102958.425909767,"samples":8051480},{"name":"using Array.includes (first item)","opsSec":16142381.538162759,"samples":8071191},{"name":"Using raw comparison","opsSec":16148465.774645515,"samples":8074234},{"name":"Using raw comparison (first item)","opsSec":16099624.54138915,"samples":8049813}]}-->
