## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,388|94|
|Using brackets {}|674,532|92|
|Using '' + |662,558|93|
|Using date.toString()|745,427|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":672388.3770604824,"samples":6},{"name":"Using brackets {}","opsSec":674531.9923515095,"samples":3},{"name":"Using '' + ","opsSec":662558.425209728,"samples":4},{"name":"Using date.toString()","opsSec":745426.6879807044,"samples":5}]}-->
