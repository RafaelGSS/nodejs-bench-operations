## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,756,853|92|
|Using replaceAll()|3,271,622|101|
|Using replaceAll(//g)|3,397,041|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3756853.1781513263,"samples":5},{"name":"Using replaceAll()","opsSec":3271622.2305677487,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3397040.7585431216,"samples":5}]}-->
