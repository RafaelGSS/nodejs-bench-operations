## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,034,518|93|
|Using replaceAll()|1,903,400|98|
|Using replaceAll(//g)|1,816,386|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2034517.5669384664,"samples":7},{"name":"Using replaceAll()","opsSec":1903400.1917699254,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1816385.6341086053,"samples":7}]}-->
