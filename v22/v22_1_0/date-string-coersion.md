## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,154,298|96|
|Using brackets {}|1,225,401|96|
|Using '' + |1,182,984|97|
|Using date.toString()|1,350,445|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:46:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1154298.4537901836,"samples":6},{"name":"Using brackets {}","opsSec":1225400.5383298602,"samples":4},{"name":"Using '' + ","opsSec":1182984.4208674433,"samples":6},{"name":"Using date.toString()","opsSec":1350444.857227936,"samples":4}]}-->
