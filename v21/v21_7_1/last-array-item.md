## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|866,836,825|93|
|Length = 10_000 - Array.at|872,860,834|97|
|Length = 1_000_000 - Array.at|872,666,586|99|
|Length = 100 - Array[length - 1]|820,265,782|99|
|Length = 10_000 - Array[length - 1]|819,804,151|97|
|Length = 1_000_000 - Array[length - 1]|821,175,649|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":866836825.2977268,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":872860833.708197,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":872666586.3043401,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":820265782.1211121,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":819804151.1415759,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":821175649.1701002,"samples":8}]}-->
