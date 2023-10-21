## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,077,762|85|
|Function returning explicitly undefined|1,035,271|87|
|Function returning implicitly undefined|1,007,153|85|
|Function returning string|1,045,786|85|
|Function returning integer|1,054,195|82|
|Function returning float|1,050,069|84|
|Function returning functions|1,041,746|86|
|Function returning arrow functions|1,069,802|89|
|Function returning empty object|1,041,216|86|
|Function returning empty array|1,083,550|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1077762.3905939646,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1035271.3845324095,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1007152.871515425,"samples":7},{"name":"Function returning string","opsSec":1045786.1766853031,"samples":5},{"name":"Function returning integer","opsSec":1054194.9465663189,"samples":6},{"name":"Function returning float","opsSec":1050068.8747485962,"samples":4},{"name":"Function returning functions","opsSec":1041745.9837736204,"samples":5},{"name":"Function returning arrow functions","opsSec":1069802.438958865,"samples":4},{"name":"Function returning empty object","opsSec":1041216.3422048179,"samples":5},{"name":"Function returning empty array","opsSec":1083550.310537316,"samples":5}]}-->
