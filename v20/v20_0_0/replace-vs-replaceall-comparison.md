## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,217,604|92|
|Using replaceAll()|2,842,298|95|
|Using replaceAll(//g)|3,030,863|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3217603.767992619,"samples":5},{"name":"Using replaceAll()","opsSec":2842298.1456802827,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3030863.246968681,"samples":4}]}-->
