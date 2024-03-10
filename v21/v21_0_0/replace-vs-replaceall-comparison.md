## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,297,164|90|
|Using replaceAll()|2,961,297|96|
|Using replaceAll(//g)|3,050,613|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3297163.782167611,"samples":4},{"name":"Using replaceAll()","opsSec":2961297.170362676,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3050612.5763850366,"samples":5}]}-->
