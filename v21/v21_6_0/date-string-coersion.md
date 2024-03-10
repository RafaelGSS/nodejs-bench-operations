## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,093,349|94|
|Using brackets {}|1,105,888|96|
|Using '' + |1,108,159|96|
|Using date.toString()|1,222,243|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1093348.6023001932,"samples":4},{"name":"Using brackets {}","opsSec":1105888.3262880368,"samples":3},{"name":"Using '' + ","opsSec":1108158.6951908208,"samples":4},{"name":"Using date.toString()","opsSec":1222242.9248464368,"samples":5}]}-->
