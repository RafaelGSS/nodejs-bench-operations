## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,583,068|1307764|
|Using replaceAll()|2,326,868|1163435|
|Using replaceAll(//g)|2,277,736|1138869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:41:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2583068.0856178035,"samples":1307764},{"name":"Using replaceAll()","opsSec":2326868.5799828283,"samples":1163435},{"name":"Using replaceAll(//g)","opsSec":2277736.643907476,"samples":1138869}]}-->
