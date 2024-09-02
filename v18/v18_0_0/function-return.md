## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,635,780|817891|
|Function returning explicitly undefined|1,578,455|789228|
|Function returning implicitly undefined|1,631,083|815542|
|Function returning string|1,556,964|778483|
|Function returning integer|1,609,989|804995|
|Function returning float|1,577,930|788966|
|Function returning functions|1,525,763|762882|
|Function returning arrow functions|1,540,199|770100|
|Function returning empty object|1,664,872|832437|
|Function returning empty array|1,615,329|807665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:30:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1635780.2326339742,"samples":817891},{"name":"Function returning explicitly undefined","opsSec":1578455.5960769362,"samples":789228},{"name":"Function returning implicitly undefined","opsSec":1631083.7850279761,"samples":815542},{"name":"Function returning string","opsSec":1556964.7320968697,"samples":778483},{"name":"Function returning integer","opsSec":1609989.0151455395,"samples":804995},{"name":"Function returning float","opsSec":1577930.3581933943,"samples":788966},{"name":"Function returning functions","opsSec":1525763.4237678759,"samples":762882},{"name":"Function returning arrow functions","opsSec":1540199.2182800095,"samples":770100},{"name":"Function returning empty object","opsSec":1664872.8112213688,"samples":832437},{"name":"Function returning empty array","opsSec":1615329.9401672722,"samples":807665}]}-->
