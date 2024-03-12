## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,241,430|93|
|Using replaceAll()|3,033,948|97|
|Using replaceAll(//g)|3,024,460|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3241429.762633252,"samples":5},{"name":"Using replaceAll()","opsSec":3033947.9433665695,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3024459.501628955,"samples":6}]}-->
