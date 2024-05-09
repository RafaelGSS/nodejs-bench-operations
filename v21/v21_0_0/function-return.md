## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,611,843|805922|
|Function returning explicitly undefined|1,599,497|799749|
|Function returning implicitly undefined|1,633,553|816777|
|Function returning string|1,575,682|787842|
|Function returning integer|1,643,710|821856|
|Function returning float|1,623,868|811935|
|Function returning functions|1,573,396|786699|
|Function returning arrow functions|1,603,141|801571|
|Function returning empty object|1,618,937|809469|
|Function returning empty array|1,590,523|795262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1611843.561136878,"samples":805922},{"name":"Function returning explicitly undefined","opsSec":1599497.5393292839,"samples":799749},{"name":"Function returning implicitly undefined","opsSec":1633553.74217115,"samples":816777},{"name":"Function returning string","opsSec":1575682.507830877,"samples":787842},{"name":"Function returning integer","opsSec":1643710.3940302862,"samples":821856},{"name":"Function returning float","opsSec":1623868.5806698282,"samples":811935},{"name":"Function returning functions","opsSec":1573396.9714015732,"samples":786699},{"name":"Function returning arrow functions","opsSec":1603141.2783711592,"samples":801571},{"name":"Function returning empty object","opsSec":1618937.7105113785,"samples":809469},{"name":"Function returning empty array","opsSec":1590523.9575284282,"samples":795262}]}-->
