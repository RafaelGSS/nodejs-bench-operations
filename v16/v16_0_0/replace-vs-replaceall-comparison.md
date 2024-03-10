## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,159,577|94|
|Using replaceAll()|2,719,892|95|
|Using replaceAll(//g)|2,805,029|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3159576.5046655773,"samples":6},{"name":"Using replaceAll()","opsSec":2719892.249766199,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2805028.6439195513,"samples":5}]}-->
