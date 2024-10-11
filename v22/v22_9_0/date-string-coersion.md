## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|887,372|445249|
|Using brackets {}|1,025,990|513010|
|Using '' + |961,329|480669|
|Using date.toString()|1,166,408|583420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":887372.5107406296,"samples":445249},{"name":"Using brackets {}","opsSec":1025990.6464076063,"samples":513010},{"name":"Using '' + ","opsSec":961329.3134283238,"samples":480669},{"name":"Using date.toString()","opsSec":1166408.9512392515,"samples":583420}]}-->
