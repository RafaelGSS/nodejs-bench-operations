## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,725,190|94|
|Using replaceAll()|3,164,255|95|
|Using replaceAll(//g)|3,344,270|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3725190.0513048633,"samples":5},{"name":"Using replaceAll()","opsSec":3164254.931739993,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3344269.524509878,"samples":7}]}-->
