## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,300,437|96|
|Using replaceAll()|3,000,229|97|
|Using replaceAll(//g)|2,983,614|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3300436.894756047,"samples":7},{"name":"Using replaceAll()","opsSec":3000229.2022370286,"samples":4},{"name":"Using replaceAll(//g)","opsSec":2983614.225904383,"samples":5}]}-->
