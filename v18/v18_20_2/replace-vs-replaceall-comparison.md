## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,917,498|1458750|
|Using replaceAll()|2,578,297|1289149|
|Using replaceAll(//g)|2,516,050|1258026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2917498.990639555,"samples":1458750},{"name":"Using replaceAll()","opsSec":2578297.214606869,"samples":1289149},{"name":"Using replaceAll(//g)","opsSec":2516050.2606256865,"samples":1258026}]}-->
