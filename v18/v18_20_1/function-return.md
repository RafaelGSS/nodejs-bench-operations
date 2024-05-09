## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,488,304|744153|
|Function returning explicitly undefined|1,462,248|731125|
|Function returning implicitly undefined|1,495,015|747508|
|Function returning string|1,478,354|739178|
|Function returning integer|1,511,774|755888|
|Function returning float|1,485,945|742973|
|Function returning functions|1,464,998|732500|
|Function returning arrow functions|1,497,954|748978|
|Function returning empty object|1,514,586|757294|
|Function returning empty array|1,517,224|758613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1488304.2385773086,"samples":744153},{"name":"Function returning explicitly undefined","opsSec":1462248.684280745,"samples":731125},{"name":"Function returning implicitly undefined","opsSec":1495015.2151204338,"samples":747508},{"name":"Function returning string","opsSec":1478354.2108769477,"samples":739178},{"name":"Function returning integer","opsSec":1511774.1711525572,"samples":755888},{"name":"Function returning float","opsSec":1485945.7534231558,"samples":742973},{"name":"Function returning functions","opsSec":1464998.1585811873,"samples":732500},{"name":"Function returning arrow functions","opsSec":1497954.4642972478,"samples":748978},{"name":"Function returning empty object","opsSec":1514586.7736852926,"samples":757294},{"name":"Function returning empty array","opsSec":1517224.3938988904,"samples":758613}]}-->
