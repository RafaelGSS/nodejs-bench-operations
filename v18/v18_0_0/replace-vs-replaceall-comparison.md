## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,335,515|95|
|Using replaceAll()|3,034,607|95|
|Using replaceAll(//g)|3,001,538|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3335515.1544438764,"samples":9},{"name":"Using replaceAll()","opsSec":3034607.3786557657,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3001538.133579327,"samples":5}]}-->
