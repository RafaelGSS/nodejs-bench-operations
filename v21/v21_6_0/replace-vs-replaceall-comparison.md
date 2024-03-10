## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,264,457|90|
|Using replaceAll()|3,057,063|96|
|Using replaceAll(//g)|3,021,031|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3264457.318688972,"samples":4},{"name":"Using replaceAll()","opsSec":3057062.672376462,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3021031.450870527,"samples":5}]}-->
