## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,568,228|784115|
|Function returning explicitly undefined|1,539,899|769950|
|Function returning implicitly undefined|1,585,811|792906|
|Function returning string|1,571,976|785989|
|Function returning integer|1,611,168|805585|
|Function returning float|1,574,774|787388|
|Function returning functions|1,544,701|772351|
|Function returning arrow functions|1,578,286|789144|
|Function returning empty object|1,578,006|789004|
|Function returning empty array|1,593,613|796807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:09:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1568228.724460592,"samples":784115},{"name":"Function returning explicitly undefined","opsSec":1539899.222628573,"samples":769950},{"name":"Function returning implicitly undefined","opsSec":1585811.8357359655,"samples":792906},{"name":"Function returning string","opsSec":1571976.397671342,"samples":785989},{"name":"Function returning integer","opsSec":1611168.7434093559,"samples":805585},{"name":"Function returning float","opsSec":1574774.376797476,"samples":787388},{"name":"Function returning functions","opsSec":1544701.7585715267,"samples":772351},{"name":"Function returning arrow functions","opsSec":1578286.9679431275,"samples":789144},{"name":"Function returning empty object","opsSec":1578006.7978810663,"samples":789004},{"name":"Function returning empty array","opsSec":1593613.415092301,"samples":796807}]}-->
