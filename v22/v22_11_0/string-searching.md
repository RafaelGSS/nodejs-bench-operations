## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|137,463,093|68731564|
|Using indexof|16,078,526|8040203|
|Using RegExp.test|13,268,565|6635279|
|Using RegExp.text with cached regex pattern|14,521,533|7261833|
|Using new RegExp.test|4,704,632|2352429|
|Using new RegExp.test with cached regex pattern|5,507,605|2753804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":137463093.9091527,"samples":68731564},{"name":"Using indexof","opsSec":16078526.80610101,"samples":8040203},{"name":"Using RegExp.test","opsSec":13268565.167660339,"samples":6635279},{"name":"Using RegExp.text with cached regex pattern","opsSec":14521533.83223048,"samples":7261833},{"name":"Using new RegExp.test","opsSec":4704632.516372755,"samples":2352429},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5507605.907109756,"samples":2753804}]}-->
