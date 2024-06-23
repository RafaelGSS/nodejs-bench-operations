## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,606,257|803129|
|Function returning explicitly undefined|1,599,007|799504|
|Function returning implicitly undefined|1,657,084|828543|
|Function returning string|1,592,236|796119|
|Function returning integer|1,652,631|826316|
|Function returning float|1,614,024|807013|
|Function returning functions|1,613,884|806943|
|Function returning arrow functions|1,633,853|816927|
|Function returning empty object|1,652,535|826268|
|Function returning empty array|1,611,526|805764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:32:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1606257.1326208692,"samples":803129},{"name":"Function returning explicitly undefined","opsSec":1599007.517100113,"samples":799504},{"name":"Function returning implicitly undefined","opsSec":1657084.4357130171,"samples":828543},{"name":"Function returning string","opsSec":1592236.8599586147,"samples":796119},{"name":"Function returning integer","opsSec":1652631.1835993328,"samples":826316},{"name":"Function returning float","opsSec":1614024.6797280195,"samples":807013},{"name":"Function returning functions","opsSec":1613884.3280157254,"samples":806943},{"name":"Function returning arrow functions","opsSec":1633853.8627557654,"samples":816927},{"name":"Function returning empty object","opsSec":1652535.272885307,"samples":826268},{"name":"Function returning empty array","opsSec":1611526.6430964053,"samples":805764}]}-->
