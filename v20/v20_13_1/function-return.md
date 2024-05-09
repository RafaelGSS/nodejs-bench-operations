## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,592,982|796492|
|Function returning explicitly undefined|1,586,970|793486|
|Function returning implicitly undefined|1,640,283|820142|
|Function returning string|1,595,506|797754|
|Function returning integer|1,626,137|813069|
|Function returning float|1,590,566|795284|
|Function returning functions|1,586,033|793017|
|Function returning arrow functions|1,596,911|798456|
|Function returning empty object|1,635,104|817553|
|Function returning empty array|1,622,077|811039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1592982.1871864968,"samples":796492},{"name":"Function returning explicitly undefined","opsSec":1586970.733596881,"samples":793486},{"name":"Function returning implicitly undefined","opsSec":1640283.635857548,"samples":820142},{"name":"Function returning string","opsSec":1595506.2640891715,"samples":797754},{"name":"Function returning integer","opsSec":1626137.6975385079,"samples":813069},{"name":"Function returning float","opsSec":1590566.743452527,"samples":795284},{"name":"Function returning functions","opsSec":1586033.121337587,"samples":793017},{"name":"Function returning arrow functions","opsSec":1596911.6774246846,"samples":798456},{"name":"Function returning empty object","opsSec":1635104.652676088,"samples":817553},{"name":"Function returning empty array","opsSec":1622077.8896955505,"samples":811039}]}-->
