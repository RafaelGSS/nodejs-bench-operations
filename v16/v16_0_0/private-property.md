## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,432,577|83|
|Raw usage underscore usage|4,711,024|86|
|Manipulating private properties using #|1,739,635|88|
|Manipulating private properties using underscore(_)|562,976,537|90|
|Manipulating private properties using Symbol|559,946,570|89|
|Manipulating private properties using PrivateSymbol|23,383,072|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5432576.95569644,"samples":4},{"name":"Raw usage underscore usage","opsSec":4711024.257062639,"samples":8},{"name":"Manipulating private properties using #","opsSec":1739634.6115208124,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":562976536.5138581,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":559946570.2106471,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":23383071.998934586,"samples":7}]}-->
