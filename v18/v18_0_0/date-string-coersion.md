## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|566,512|91|
|Using brackets {}|587,951|93|
|Using '' + |598,158|90|
|Using date.toString()|650,767|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":566512.431218513,"samples":3},{"name":"Using brackets {}","opsSec":587951.4427206039,"samples":3},{"name":"Using '' + ","opsSec":598158.4780795189,"samples":8},{"name":"Using date.toString()","opsSec":650766.9478598768,"samples":4}]}-->
