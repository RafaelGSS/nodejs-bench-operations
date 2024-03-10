## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,824,007|96|
|Function returning explicitly undefined|1,792,730|93|
|Function returning implicitly undefined|1,811,328|95|
|Function returning string|1,836,120|97|
|Function returning integer|1,861,598|98|
|Function returning float|1,831,474|94|
|Function returning functions|1,792,782|96|
|Function returning arrow functions|1,825,915|97|
|Function returning empty object|1,843,093|95|
|Function returning empty array|1,812,493|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1824007.0087408063,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1792729.753048454,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1811328.4135254694,"samples":5},{"name":"Function returning string","opsSec":1836120.1949380813,"samples":6},{"name":"Function returning integer","opsSec":1861598.3044414092,"samples":6},{"name":"Function returning float","opsSec":1831474.4587916746,"samples":6},{"name":"Function returning functions","opsSec":1792782.0986824466,"samples":5},{"name":"Function returning arrow functions","opsSec":1825914.9617677429,"samples":6},{"name":"Function returning empty object","opsSec":1843093.4288592546,"samples":5},{"name":"Function returning empty array","opsSec":1812492.9443549297,"samples":5}]}-->
