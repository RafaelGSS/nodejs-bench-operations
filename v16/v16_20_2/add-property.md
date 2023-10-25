## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,196,136|97|
|Using dot notation|712,161,600|92|
|Using define property (writable)|3,059,697|98|
|Using define property initialized (writable)|3,751,052|95|
|Using define property (getter)|1,556,144|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":711196136.4482746,"samples":6},{"name":"Using dot notation","opsSec":712161599.8740793,"samples":6},{"name":"Using define property (writable)","opsSec":3059697.0996847255,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3751051.5852475585,"samples":5},{"name":"Using define property (getter)","opsSec":1556144.1803353305,"samples":3}]}-->
