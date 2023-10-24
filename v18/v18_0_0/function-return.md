## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,177,749|89|
|Function returning explicitly undefined|1,192,112|96|
|Function returning implicitly undefined|1,218,581|92|
|Function returning string|1,189,210|88|
|Function returning integer|1,215,946|91|
|Function returning float|1,213,825|96|
|Function returning functions|1,174,891|96|
|Function returning arrow functions|1,190,292|94|
|Function returning empty object|1,208,310|94|
|Function returning empty array|1,200,960|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1177749.3473721924,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1192112.1467205093,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1218580.9784771744,"samples":7},{"name":"Function returning string","opsSec":1189210.1225361251,"samples":7},{"name":"Function returning integer","opsSec":1215946.065325619,"samples":6},{"name":"Function returning float","opsSec":1213824.6070311859,"samples":7},{"name":"Function returning functions","opsSec":1174891.2978114912,"samples":7},{"name":"Function returning arrow functions","opsSec":1190291.7823264776,"samples":7},{"name":"Function returning empty object","opsSec":1208310.1635007684,"samples":7},{"name":"Function returning empty array","opsSec":1200960.0513582735,"samples":6}]}-->
