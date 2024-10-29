## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,833|497918|
|Using brackets {}|998,615|499516|
|Using '' + |995,289|497855|
|Using date.toString()|1,085,970|542986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":995833.2913334477,"samples":497918},{"name":"Using brackets {}","opsSec":998615.1600571192,"samples":499516},{"name":"Using '' + ","opsSec":995289.7468667035,"samples":497855},{"name":"Using date.toString()","opsSec":1085970.368872506,"samples":542986}]}-->
