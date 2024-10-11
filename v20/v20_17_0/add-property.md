## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,329,710|52173974|
|Using dot notation|71,123,845|35564524|
|Using define property (writable)|4,265,114|2132850|
|Using define property initialized (writable)|5,560,742|2780678|
|Using define property (getter)|2,091,548|1051454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:40:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":104329710.12337333,"samples":52173974},{"name":"Using dot notation","opsSec":71123845.71742885,"samples":35564524},{"name":"Using define property (writable)","opsSec":4265114.689780892,"samples":2132850},{"name":"Using define property initialized (writable)","opsSec":5560742.494402077,"samples":2780678},{"name":"Using define property (getter)","opsSec":2091548.5238823895,"samples":1051454}]}-->
