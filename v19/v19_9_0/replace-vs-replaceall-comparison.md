## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,190,544|80|
|Using replaceAll()|2,162,654|98|
|Using replaceAll(//g)|1,989,311|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2190543.7292088266,"samples":4},{"name":"Using replaceAll()","opsSec":2162654.069801437,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1989311.2518038545,"samples":8}]}-->
