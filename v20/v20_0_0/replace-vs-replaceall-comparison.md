## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,830,527|92|
|Using replaceAll()|1,550,428|91|
|Using replaceAll(//g)|1,674,743|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1830526.8724434783,"samples":6},{"name":"Using replaceAll()","opsSec":1550428.4319635606,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1674743.449196181,"samples":4}]}-->
