## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|657,311|95|
|Using brackets {}|663,427|93|
|Using '' + |667,114|97|
|Using date.toString()|722,244|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":657310.5048062498,"samples":5},{"name":"Using brackets {}","opsSec":663427.2841598218,"samples":4},{"name":"Using '' + ","opsSec":667113.8207507633,"samples":5},{"name":"Using date.toString()","opsSec":722243.703456463,"samples":4}]}-->
