## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,654,965|827483|
|Function returning explicitly undefined|1,676,600|838301|
|Function returning implicitly undefined|1,661,934|830968|
|Function returning string|1,642,480|821241|
|Function returning integer|1,685,626|842814|
|Function returning float|1,670,523|835262|
|Function returning functions|1,622,869|811435|
|Function returning arrow functions|1,645,222|822612|
|Function returning empty object|1,657,720|828861|
|Function returning empty array|1,663,365|831683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:34:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1654965.920561591,"samples":827483},{"name":"Function returning explicitly undefined","opsSec":1676600.7324902634,"samples":838301},{"name":"Function returning implicitly undefined","opsSec":1661934.5374980099,"samples":830968},{"name":"Function returning string","opsSec":1642480.2359757696,"samples":821241},{"name":"Function returning integer","opsSec":1685626.776235558,"samples":842814},{"name":"Function returning float","opsSec":1670523.752763042,"samples":835262},{"name":"Function returning functions","opsSec":1622869.6527063316,"samples":811435},{"name":"Function returning arrow functions","opsSec":1645222.4962645161,"samples":822612},{"name":"Function returning empty object","opsSec":1657720.1665618883,"samples":828861},{"name":"Function returning empty array","opsSec":1663365.4377835866,"samples":831683}]}-->
