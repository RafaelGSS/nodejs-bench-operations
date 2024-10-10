## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,168|525136|
|Using brackets {}|1,033,640|517218|
|Using '' + |1,047,337|523691|
|Using date.toString()|1,140,204|570141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:15:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":1050168.4533904956,"samples":525136},{"name":"Using brackets {}","opsSec":1033640.1570302158,"samples":517218},{"name":"Using '' + ","opsSec":1047337.4818729955,"samples":523691},{"name":"Using date.toString()","opsSec":1140204.3292810896,"samples":570141}]}-->
