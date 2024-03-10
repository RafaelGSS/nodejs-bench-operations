## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,017,288|96|
|Using brackets {}|1,047,682|92|
|Using '' + |1,052,563|97|
|Using date.toString()|1,150,498|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1017288.0013208315,"samples":5},{"name":"Using brackets {}","opsSec":1047681.9096217654,"samples":5},{"name":"Using '' + ","opsSec":1052563.4999317701,"samples":5},{"name":"Using date.toString()","opsSec":1150498.219382242,"samples":7}]}-->
