## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|965,354,516|98|
|Length = 10_000 - Array.at|967,883,167|98|
|Length = 1_000_000 - Array.at|966,041,750|96|
|Length = 100 - Array[length - 1]|910,884,721|97|
|Length = 10_000 - Array[length - 1]|910,610,904|98|
|Length = 1_000_000 - Array[length - 1]|909,689,130|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":965354516.379971,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":967883166.8259106,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":966041750.2843709,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":910884721.2188373,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910610904.0650043,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":909689130.3933446,"samples":7}]}-->
