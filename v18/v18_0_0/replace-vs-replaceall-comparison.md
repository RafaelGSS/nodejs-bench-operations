## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,767,107|1383554|
|Using replaceAll()|2,645,592|1322797|
|Using replaceAll(//g)|2,616,506|1308254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2767107.280775988,"samples":1383554},{"name":"Using replaceAll()","opsSec":2645592.9710209635,"samples":1322797},{"name":"Using replaceAll(//g)","opsSec":2616506.5340287616,"samples":1308254}]}-->
