## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,620,223|810112|
|Function returning explicitly undefined|1,675,684|837843|
|Function returning implicitly undefined|1,704,154|852078|
|Function returning string|1,660,576|830289|
|Function returning integer|1,714,568|857285|
|Function returning float|1,682,814|841408|
|Function returning functions|1,665,903|832952|
|Function returning arrow functions|1,677,013|838507|
|Function returning empty object|1,698,799|849400|
|Function returning empty array|1,709,880|854941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1620223.8185347738,"samples":810112},{"name":"Function returning explicitly undefined","opsSec":1675684.5823715522,"samples":837843},{"name":"Function returning implicitly undefined","opsSec":1704154.8616249112,"samples":852078},{"name":"Function returning string","opsSec":1660576.7977417891,"samples":830289},{"name":"Function returning integer","opsSec":1714568.117404256,"samples":857285},{"name":"Function returning float","opsSec":1682814.6874032698,"samples":841408},{"name":"Function returning functions","opsSec":1665903.2403487866,"samples":832952},{"name":"Function returning arrow functions","opsSec":1677013.9362737995,"samples":838507},{"name":"Function returning empty object","opsSec":1698799.0418759962,"samples":849400},{"name":"Function returning empty array","opsSec":1709880.676550297,"samples":854941}]}-->
