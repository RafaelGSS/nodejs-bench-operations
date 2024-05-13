## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,669,072|7834537|
|Length = 10_000 - Array.at|15,688,116|7844059|
|Length = 1_000_000 - Array.at|15,739,411|7869706|
|Length = 100 - Array[length - 1]|15,798,523|7899262|
|Length = 10_000 - Array[length - 1]|15,849,353|7924677|
|Length = 1_000_000 - Array[length - 1]|15,855,216|7927609|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:36:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15669072.245091872,"samples":7834537},{"name":"Length = 10_000 - Array.at","opsSec":15688116.305717424,"samples":7844059},{"name":"Length = 1_000_000 - Array.at","opsSec":15739411.496407315,"samples":7869706},{"name":"Length = 100 - Array[length - 1]","opsSec":15798523.715701941,"samples":7899262},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15849353.20722117,"samples":7924677},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15855216.382861286,"samples":7927609}]}-->
