## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,100,681|96|
|Using replaceAll()|2,848,256|95|
|Using replaceAll(//g)|2,831,403|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3100680.735657664,"samples":6},{"name":"Using replaceAll()","opsSec":2848255.5699358704,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2831403.225102305,"samples":7}]}-->
