## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,082,682|94|
|Using replaceAll()|1,961,099|94|
|Using replaceAll(//g)|1,865,465|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2082681.8414614145,"samples":6},{"name":"Using replaceAll()","opsSec":1961098.9827011237,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1865464.8542050829,"samples":7}]}-->
