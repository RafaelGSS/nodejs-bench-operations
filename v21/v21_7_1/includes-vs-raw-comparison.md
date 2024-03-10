## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,271,246|95|
|using Array.includes (first item)|822,581,559|97|
|Using raw comparison|822,110,800|99|
|Using raw comparison (first item)|821,772,630|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":819271245.9360431,"samples":6},{"name":"using Array.includes (first item)","opsSec":822581558.7687856,"samples":9},{"name":"Using raw comparison","opsSec":822110800.4738634,"samples":6},{"name":"Using raw comparison (first item)","opsSec":821772630.3187479,"samples":6}]}-->
