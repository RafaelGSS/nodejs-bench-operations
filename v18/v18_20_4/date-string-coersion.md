## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|830,820|415411|
|Using brackets {}|838,118|419060|
|Using '' + |832,785|416393|
|Using date.toString()|894,724|447367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:44:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":830820.5971494169,"samples":415411},{"name":"Using brackets {}","opsSec":838118.2970321251,"samples":419060},{"name":"Using '' + ","opsSec":832785.483609348,"samples":416393},{"name":"Using date.toString()","opsSec":894724.0613794454,"samples":447367}]}-->
