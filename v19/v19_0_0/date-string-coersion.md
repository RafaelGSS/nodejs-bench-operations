## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|734,273|93|
|Using brackets {}|741,969|95|
|Using '' + |757,557|95|
|Using date.toString()|828,742|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":734273.431620485,"samples":8},{"name":"Using brackets {}","opsSec":741969.1759844808,"samples":3},{"name":"Using '' + ","opsSec":757557.3584446753,"samples":8},{"name":"Using date.toString()","opsSec":828741.6031011435,"samples":4}]}-->
