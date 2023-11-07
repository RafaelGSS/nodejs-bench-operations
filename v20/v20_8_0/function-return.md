## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,721,512|95|
|Function returning explicitly undefined|1,692,009|99|
|Function returning implicitly undefined|1,751,157|96|
|Function returning string|1,679,047|95|
|Function returning integer|1,705,659|97|
|Function returning float|1,735,915|99|
|Function returning functions|1,681,637|99|
|Function returning arrow functions|1,718,075|96|
|Function returning empty object|1,740,545|98|
|Function returning empty array|1,741,806|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:06:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1721511.740392492,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1692008.8792798114,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1751156.8116442729,"samples":5},{"name":"Function returning string","opsSec":1679046.9270889962,"samples":6},{"name":"Function returning integer","opsSec":1705658.5863769313,"samples":8},{"name":"Function returning float","opsSec":1735915.1541265273,"samples":8},{"name":"Function returning functions","opsSec":1681636.65412933,"samples":7},{"name":"Function returning arrow functions","opsSec":1718075.2850772901,"samples":5},{"name":"Function returning empty object","opsSec":1740545.192454502,"samples":5},{"name":"Function returning empty array","opsSec":1741805.6851387618,"samples":6}]}-->
