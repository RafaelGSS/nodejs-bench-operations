## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,329,996|1665348|
|Using replaceAll()|3,127,779|1564066|
|Using replaceAll(//g)|2,942,777|1471389|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:48:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3329996.201298297,"samples":1665348},{"name":"Using replaceAll()","opsSec":3127779.0739204152,"samples":1564066},{"name":"Using replaceAll(//g)","opsSec":2942777.7351500043,"samples":1471389}]}-->
