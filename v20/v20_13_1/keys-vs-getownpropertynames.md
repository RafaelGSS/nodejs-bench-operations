## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,959,154|8479578|
|Using Object.getOwnPropertyNames()|16,361,323|8180662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:49:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16959154.473662738,"samples":8479578},{"name":"Using Object.getOwnPropertyNames()","opsSec":16361323.96725383,"samples":8180662}]}-->
