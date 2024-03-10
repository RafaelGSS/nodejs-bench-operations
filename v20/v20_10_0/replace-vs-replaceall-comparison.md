## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,234,719|93|
|Using replaceAll()|2,820,861|98|
|Using replaceAll(//g)|3,070,961|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3234719.4935118607,"samples":4},{"name":"Using replaceAll()","opsSec":2820861.237171506,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3070960.970624724,"samples":4}]}-->
