## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|631,927,660|87|
|using Array.includes (first item)|643,553,642|89|
|Using raw comparison|640,039,834|90|
|Using raw comparison (first item)|610,639,704|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":631927659.5005157,"samples":6},{"name":"using Array.includes (first item)","opsSec":643553642.2097802,"samples":6},{"name":"Using raw comparison","opsSec":640039834.1541454,"samples":6},{"name":"Using raw comparison (first item)","opsSec":610639703.9116043,"samples":6}]}-->
