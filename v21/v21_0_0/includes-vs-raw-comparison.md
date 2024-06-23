## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,610,548|8305275|
|using Array.includes (first item)|16,592,212|8296107|
|Using raw comparison|16,650,043|8325022|
|Using raw comparison (first item)|16,639,990|8319996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16610548.359770307,"samples":8305275},{"name":"using Array.includes (first item)","opsSec":16592212.971050898,"samples":8296107},{"name":"Using raw comparison","opsSec":16650043.379675522,"samples":8325022},{"name":"Using raw comparison (first item)","opsSec":16639990.337925445,"samples":8319996}]}-->
