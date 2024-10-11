## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,379,167|76493231|
|Using backtick (`)|97,593,092|48799515|
|Using array.join|9,622,591|4811298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:36:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":151379167.0511015,"samples":76493231},{"name":"Using backtick (`)","opsSec":97593092.43625619,"samples":48799515},{"name":"Using array.join","opsSec":9622591.785304798,"samples":4811298}]}-->
