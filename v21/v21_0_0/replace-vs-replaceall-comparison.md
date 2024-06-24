## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,837,472|1418737|
|Using replaceAll()|2,622,071|1311036|
|Using replaceAll(//g)|2,593,490|1296746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2837472.906660182,"samples":1418737},{"name":"Using replaceAll()","opsSec":2622071.070274284,"samples":1311036},{"name":"Using replaceAll(//g)","opsSec":2593490.38726301,"samples":1296746}]}-->
