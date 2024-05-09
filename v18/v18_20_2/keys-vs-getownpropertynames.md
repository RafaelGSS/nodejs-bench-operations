## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,922,457|6961229|
|Using Object.getOwnPropertyNames()|13,587,074|6793538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:46:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13922457.75436643,"samples":6961229},{"name":"Using Object.getOwnPropertyNames()","opsSec":13587074.652405009,"samples":6793538}]}-->
