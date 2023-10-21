## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,758,921|97|
|using Array.includes (first item)|590,797,569|93|
|Using raw comparison|594,483,680|97|
|Using raw comparison (first item)|592,961,886|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":592758920.7875453,"samples":9},{"name":"using Array.includes (first item)","opsSec":590797569.381624,"samples":6},{"name":"Using raw comparison","opsSec":594483679.5673215,"samples":8},{"name":"Using raw comparison (first item)","opsSec":592961885.5486453,"samples":6}]}-->
