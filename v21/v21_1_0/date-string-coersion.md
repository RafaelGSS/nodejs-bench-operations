## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,215|93|
|Using brackets {}|724,712|97|
|Using '' + |719,196|98|
|Using date.toString()|773,932|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":703214.9877394234,"samples":5},{"name":"Using brackets {}","opsSec":724712.2778841893,"samples":5},{"name":"Using '' + ","opsSec":719196.4954585568,"samples":5},{"name":"Using date.toString()","opsSec":773932.4270978996,"samples":6}]}-->
