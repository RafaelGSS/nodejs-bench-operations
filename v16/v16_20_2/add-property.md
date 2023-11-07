## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,488,884|100|
|Using dot notation|849,250,724|99|
|Using define property (writable)|4,651,409|99|
|Using define property initialized (writable)|5,910,203|97|
|Using define property (getter)|2,275,163|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849488884.0613136,"samples":9},{"name":"Using dot notation","opsSec":849250723.5433387,"samples":8},{"name":"Using define property (writable)","opsSec":4651409.185765958,"samples":8},{"name":"Using define property initialized (writable)","opsSec":5910203.424849568,"samples":7},{"name":"Using define property (getter)","opsSec":2275162.70850562,"samples":5}]}-->
