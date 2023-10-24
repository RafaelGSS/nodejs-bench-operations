## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|631,562,764|89|
|using Array.includes (first item)|678,347,326|85|
|Using raw comparison|634,084,354|81|
|Using raw comparison (first item)|614,045,935|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":631562763.9380212,"samples":9},{"name":"using Array.includes (first item)","opsSec":678347325.904903,"samples":7},{"name":"Using raw comparison","opsSec":634084354.260003,"samples":8},{"name":"Using raw comparison (first item)","opsSec":614045934.8166256,"samples":7}]}-->
