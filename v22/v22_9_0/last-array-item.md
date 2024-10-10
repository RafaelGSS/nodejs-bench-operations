## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,543,631|66273696|
|Length = 10_000 - Array.at|99,551,055|49778026|
|Length = 1_000_000 - Array.at|99,271,164|49635642|
|Length = 100 - Array[length - 1]|95,905,021|47980159|
|Length = 10_000 - Array[length - 1]|99,503,670|49755303|
|Length = 1_000_000 - Array[length - 1]|99,514,327|49775785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:27:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132543631.20700814,"samples":66273696},{"name":"Length = 10_000 - Array.at","opsSec":99551055.13433859,"samples":49778026},{"name":"Length = 1_000_000 - Array.at","opsSec":99271164.08043379,"samples":49635642},{"name":"Length = 100 - Array[length - 1]","opsSec":95905021.082944,"samples":47980159},{"name":"Length = 10_000 - Array[length - 1]","opsSec":99503670.39516611,"samples":49755303},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":99514327.36007145,"samples":49775785}]}-->
