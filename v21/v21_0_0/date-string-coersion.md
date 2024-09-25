## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|956,002|478002|
|Using brackets {}|966,105|483053|
|Using '' + |955,008|477505|
|Using date.toString()|1,050,839|525420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":956002.7709570406,"samples":478002},{"name":"Using brackets {}","opsSec":966105.9865405454,"samples":483053},{"name":"Using '' + ","opsSec":955008.4546747109,"samples":477505},{"name":"Using date.toString()","opsSec":1050839.5612208634,"samples":525420}]}-->
