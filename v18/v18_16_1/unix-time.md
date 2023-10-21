## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,482,208|85|
|Date.now()|13,723,123|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":6482208.328457439,"samples":5},{"name":"Date.now()","opsSec":13723123.131346107,"samples":4}]}-->
