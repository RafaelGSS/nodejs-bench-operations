## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,987|89|
|Using delete property (proto: null)|11,185,177|91|
|Using delete property (cached proto: null)|2,343,700|92|
|Using undefined assignment|728,173,268|91|
|Using undefined assignment (proto: null)|14,115,529|90|
|Using undefined property (cached proto: null)|718,614,998|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2337986.909457394,"samples":5},{"name":"Using delete property (proto: null)","opsSec":11185176.574860435,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2343700.101390656,"samples":7},{"name":"Using undefined assignment","opsSec":728173268.38945,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14115529.487218637,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":718614998.1528685,"samples":7}]}-->
