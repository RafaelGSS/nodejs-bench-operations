## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,835,307|1417655|
|Using replaceAll()|2,466,559|1233280|
|Using replaceAll(//g)|2,603,206|1301604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2835307.093327978,"samples":1417655},{"name":"Using replaceAll()","opsSec":2466559.2444081856,"samples":1233280},{"name":"Using replaceAll(//g)","opsSec":2603206.7409862936,"samples":1301604}]}-->
