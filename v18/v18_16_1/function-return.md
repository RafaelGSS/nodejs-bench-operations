## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,124,943|84|
|Function returning explicitly undefined|1,112,217|86|
|Function returning implicitly undefined|1,237,802|85|
|Function returning string|1,206,199|82|
|Function returning integer|1,150,016|84|
|Function returning float|1,103,641|88|
|Function returning functions|1,051,747|87|
|Function returning arrow functions|1,005,187|83|
|Function returning empty object|1,073,312|86|
|Function returning empty array|1,083,553|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1124942.565722002,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1112217.4989304633,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1237801.7673898032,"samples":8},{"name":"Function returning string","opsSec":1206198.6874068424,"samples":5},{"name":"Function returning integer","opsSec":1150016.2492667225,"samples":3},{"name":"Function returning float","opsSec":1103640.7921925331,"samples":3},{"name":"Function returning functions","opsSec":1051746.6404500236,"samples":5},{"name":"Function returning arrow functions","opsSec":1005186.674959979,"samples":5},{"name":"Function returning empty object","opsSec":1073312.2972315357,"samples":6},{"name":"Function returning empty array","opsSec":1083553.2325218124,"samples":4}]}-->
