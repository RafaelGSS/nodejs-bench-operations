## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,298,957|96|
|Using replaceAll()|2,771,996|98|
|Using replaceAll(//g)|3,062,187|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:11:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3298957.24993738,"samples":5},{"name":"Using replaceAll()","opsSec":2771996.4011319648,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3062186.6039855448,"samples":5}]}-->
