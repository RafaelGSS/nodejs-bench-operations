## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|147,205,755|73605588|
|Using backtick (`)|98,783,506|49451897|
|Using array.join|9,961,293|4981066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:38:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":147205755.00086632,"samples":73605588},{"name":"Using backtick (`)","opsSec":98783506.11487196,"samples":49451897},{"name":"Using array.join","opsSec":9961293.37863304,"samples":4981066}]}-->
