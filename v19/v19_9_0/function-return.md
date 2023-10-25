## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,469,024|89|
|Function returning explicitly undefined|1,477,125|93|
|Function returning implicitly undefined|1,524,325|92|
|Function returning string|1,487,810|91|
|Function returning integer|1,522,245|91|
|Function returning float|1,495,471|90|
|Function returning functions|1,478,685|94|
|Function returning arrow functions|1,480,763|95|
|Function returning empty object|1,517,995|93|
|Function returning empty array|1,524,644|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1469023.917979952,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1477125.009423615,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1524325.175341994,"samples":5},{"name":"Function returning string","opsSec":1487810.200397172,"samples":5},{"name":"Function returning integer","opsSec":1522245.0898032219,"samples":6},{"name":"Function returning float","opsSec":1495470.6620029523,"samples":6},{"name":"Function returning functions","opsSec":1478684.9163287978,"samples":5},{"name":"Function returning arrow functions","opsSec":1480762.6429640055,"samples":5},{"name":"Function returning empty object","opsSec":1517995.3539297513,"samples":6},{"name":"Function returning empty array","opsSec":1524644.0526638583,"samples":5}]}-->
