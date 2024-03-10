## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,660,994|97|
|Function returning explicitly undefined|1,659,671|93|
|Function returning implicitly undefined|1,676,406|88|
|Function returning string|1,680,236|98|
|Function returning integer|1,694,120|98|
|Function returning float|1,691,131|97|
|Function returning functions|1,637,780|99|
|Function returning arrow functions|1,658,895|94|
|Function returning empty object|1,689,740|96|
|Function returning empty array|1,648,789|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1660993.6602539315,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1659670.9802129692,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1676406.3344962164,"samples":5},{"name":"Function returning string","opsSec":1680235.7325959885,"samples":6},{"name":"Function returning integer","opsSec":1694119.750614846,"samples":5},{"name":"Function returning float","opsSec":1691131.3549396687,"samples":7},{"name":"Function returning functions","opsSec":1637779.5258589229,"samples":6},{"name":"Function returning arrow functions","opsSec":1658895.066486014,"samples":6},{"name":"Function returning empty object","opsSec":1689739.8699976588,"samples":6},{"name":"Function returning empty array","opsSec":1648789.0683509358,"samples":5}]}-->
