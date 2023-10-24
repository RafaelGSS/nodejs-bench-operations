## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|699,738|96|
|Using brackets {}|709,196|96|
|Using '' + |706,267|95|
|Using date.toString()|761,197|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":699737.7118474317,"samples":5},{"name":"Using brackets {}","opsSec":709195.956322807,"samples":4},{"name":"Using '' + ","opsSec":706266.5030619677,"samples":5},{"name":"Using date.toString()","opsSec":761197.4083640764,"samples":3}]}-->
