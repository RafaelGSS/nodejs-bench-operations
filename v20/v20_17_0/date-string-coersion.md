## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|965,835|482918|
|Using brackets {}|968,727|484364|
|Using '' + |968,876|484439|
|Using date.toString()|1,057,397|528699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:46:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":965835.847398062,"samples":482918},{"name":"Using brackets {}","opsSec":968727.1765822712,"samples":484364},{"name":"Using '' + ","opsSec":968876.3180308087,"samples":484439},{"name":"Using date.toString()","opsSec":1057397.3803659026,"samples":528699}]}-->
