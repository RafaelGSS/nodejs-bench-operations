## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,840,179|89|
|Using replaceAll()|1,770,852|89|
|Using replaceAll(//g)|1,718,655|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1840178.712744644,"samples":5},{"name":"Using replaceAll()","opsSec":1770852.2441654736,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1718654.8985549593,"samples":4}]}-->
