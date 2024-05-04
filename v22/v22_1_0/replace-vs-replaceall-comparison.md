## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,523,184|92|
|Using replaceAll()|3,372,935|99|
|Using replaceAll(//g)|3,287,984|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:20:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3523183.6172239985,"samples":6},{"name":"Using replaceAll()","opsSec":3372934.64968843,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3287983.5075019593,"samples":4}]}-->
