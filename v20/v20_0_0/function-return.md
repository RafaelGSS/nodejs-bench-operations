## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,172,597|91|
|Function returning explicitly undefined|1,192,763|91|
|Function returning implicitly undefined|1,226,702|92|
|Function returning string|1,211,168|89|
|Function returning integer|1,180,562|90|
|Function returning float|1,214,557|90|
|Function returning functions|1,167,102|93|
|Function returning arrow functions|1,181,503|89|
|Function returning empty object|1,196,061|92|
|Function returning empty array|1,204,173|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1172597.2755620047,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1192762.9132092826,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1226702.176167109,"samples":5},{"name":"Function returning string","opsSec":1211167.5285125305,"samples":5},{"name":"Function returning integer","opsSec":1180562.276463141,"samples":4},{"name":"Function returning float","opsSec":1214556.5464750961,"samples":6},{"name":"Function returning functions","opsSec":1167102.1612851447,"samples":6},{"name":"Function returning arrow functions","opsSec":1181502.8461989807,"samples":5},{"name":"Function returning empty object","opsSec":1196060.9686248675,"samples":6},{"name":"Function returning empty array","opsSec":1204173.4886912822,"samples":4}]}-->
