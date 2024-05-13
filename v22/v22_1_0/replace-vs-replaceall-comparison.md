## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,784,032|1392017|
|Using replaceAll()|2,651,619|1325810|
|Using replaceAll(//g)|2,634,673|1317337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:48:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2784032.6079838616,"samples":1392017},{"name":"Using replaceAll()","opsSec":2651619.95227191,"samples":1325810},{"name":"Using replaceAll(//g)","opsSec":2634673.34660118,"samples":1317337}]}-->
