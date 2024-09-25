## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,108,338|7554170|
|using Array.includes (first item)|16,208,113|8104057|
|Using raw comparison|17,039,517|8519759|
|Using raw comparison (first item)|16,687,375|8343688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:22:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15108338.82157638,"samples":7554170},{"name":"using Array.includes (first item)","opsSec":16208113.74045947,"samples":8104057},{"name":"Using raw comparison","opsSec":17039517.591005817,"samples":8519759},{"name":"Using raw comparison (first item)","opsSec":16687375.33238383,"samples":8343688}]}-->
