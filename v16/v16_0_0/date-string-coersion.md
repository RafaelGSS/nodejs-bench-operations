## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|518,692|95|
|Using brackets {}|527,727|93|
|Using '' + |539,397|94|
|Using date.toString()|577,048|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":518692.44647534424,"samples":3},{"name":"Using brackets {}","opsSec":527726.8849172133,"samples":3},{"name":"Using '' + ","opsSec":539397.095583149,"samples":4},{"name":"Using date.toString()","opsSec":577048.3708372837,"samples":3}]}-->
