## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,472,334|93|
|Function returning explicitly undefined|1,480,267|91|
|Function returning implicitly undefined|1,510,369|97|
|Function returning string|1,460,344|98|
|Function returning integer|1,523,466|99|
|Function returning float|1,499,267|97|
|Function returning functions|1,463,866|94|
|Function returning arrow functions|1,476,845|97|
|Function returning empty object|1,487,109|97|
|Function returning empty array|1,467,167|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1472334.081009203,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1480267.2821750315,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1510368.569690939,"samples":6},{"name":"Function returning string","opsSec":1460343.5677137992,"samples":5},{"name":"Function returning integer","opsSec":1523466.3289313936,"samples":4},{"name":"Function returning float","opsSec":1499267.4137681106,"samples":5},{"name":"Function returning functions","opsSec":1463866.0421690645,"samples":7},{"name":"Function returning arrow functions","opsSec":1476845.4844355378,"samples":5},{"name":"Function returning empty object","opsSec":1487108.7387443134,"samples":7},{"name":"Function returning empty array","opsSec":1467167.038797181,"samples":8}]}-->
