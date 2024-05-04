## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,606,493|95|
|Using replaceAll()|2,871,313|98|
|Using replaceAll(//g)|3,395,408|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:16:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3606493.257617292,"samples":7},{"name":"Using replaceAll()","opsSec":2871313.070726994,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3395408.2417856446,"samples":6}]}-->
