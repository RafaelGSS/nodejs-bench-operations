## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,045,109|80|
|Length = 10_000 - Array.at|17,447,791|87|
|Length = 1_000_000 - Array.at|17,148,152|85|
|Length = 100 - Array[length - 1]|822,739,932|82|
|Length = 10_000 - Array[length - 1]|835,624,238|84|
|Length = 1_000_000 - Array[length - 1]|848,090,501|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16045108.903407618,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":17447791.369958274,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":17148152.30325275,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":822739932.3563603,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":835624238.1505429,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":848090501.1237621,"samples":6}]}-->
