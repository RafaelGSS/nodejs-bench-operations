## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,542,178|771090|
|Function returning explicitly undefined|1,535,828|767915|
|Function returning implicitly undefined|1,557,262|778632|
|Function returning string|1,543,109|771555|
|Function returning integer|1,565,403|782702|
|Function returning float|1,550,257|775129|
|Function returning functions|1,513,088|756545|
|Function returning arrow functions|1,526,419|763210|
|Function returning empty object|1,561,914|780958|
|Function returning empty array|1,507,046|753524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:36:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1542178.1277920557,"samples":771090},{"name":"Function returning explicitly undefined","opsSec":1535828.6269702066,"samples":767915},{"name":"Function returning implicitly undefined","opsSec":1557262.7292711886,"samples":778632},{"name":"Function returning string","opsSec":1543109.9506218794,"samples":771555},{"name":"Function returning integer","opsSec":1565403.8215422637,"samples":782702},{"name":"Function returning float","opsSec":1550257.389194998,"samples":775129},{"name":"Function returning functions","opsSec":1513088.3174467408,"samples":756545},{"name":"Function returning arrow functions","opsSec":1526419.3314326378,"samples":763210},{"name":"Function returning empty object","opsSec":1561914.5317938654,"samples":780958},{"name":"Function returning empty array","opsSec":1507046.3000511543,"samples":753524}]}-->
