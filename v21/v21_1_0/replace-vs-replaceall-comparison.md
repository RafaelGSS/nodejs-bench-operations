## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,309,412|91|
|Using replaceAll()|2,955,301|95|
|Using replaceAll(//g)|3,033,560|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:39:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3309411.641370602,"samples":4},{"name":"Using replaceAll()","opsSec":2955300.596667123,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3033559.7346116193,"samples":6}]}-->
