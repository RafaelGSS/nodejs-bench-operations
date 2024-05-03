## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|266,710,040|95|
|Using parseInt(x, 10) - big number (10 len)|20,787,201|94|
|Using + - small number (2 len)|910,743,210|97|
|Using + - big number (10 len)|907,884,710|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":266710039.6432981,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20787201.494356856,"samples":6},{"name":"Using + - small number (2 len)","opsSec":910743209.6467143,"samples":7},{"name":"Using + - big number (10 len)","opsSec":907884709.5867459,"samples":9}]}-->
