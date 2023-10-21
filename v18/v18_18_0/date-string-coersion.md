## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,254|97|
|Using brackets {}|671,936|99|
|Using '' + |677,236|94|
|Using date.toString()|738,674|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":659253.5212277741,"samples":6},{"name":"Using brackets {}","opsSec":671935.8700392772,"samples":3},{"name":"Using '' + ","opsSec":677236.4173883579,"samples":6},{"name":"Using date.toString()","opsSec":738673.67450796,"samples":6}]}-->
