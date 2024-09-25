## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,426,875|713438|
|Function returning explicitly undefined|1,422,745|711373|
|Function returning implicitly undefined|1,488,348|744175|
|Function returning string|1,447,449|723725|
|Function returning integer|1,441,403|720702|
|Function returning float|1,411,056|705529|
|Function returning functions|1,410,660|705331|
|Function returning arrow functions|1,473,716|736859|
|Function returning empty object|1,443,726|721864|
|Function returning empty array|1,474,395|737198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:11:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1426875.8544603162,"samples":713438},{"name":"Function returning explicitly undefined","opsSec":1422745.8378104288,"samples":711373},{"name":"Function returning implicitly undefined","opsSec":1488348.5741640036,"samples":744175},{"name":"Function returning string","opsSec":1447449.976837912,"samples":723725},{"name":"Function returning integer","opsSec":1441403.5906374243,"samples":720702},{"name":"Function returning float","opsSec":1411056.1966696214,"samples":705529},{"name":"Function returning functions","opsSec":1410660.2197494332,"samples":705331},{"name":"Function returning arrow functions","opsSec":1473716.3553379632,"samples":736859},{"name":"Function returning empty object","opsSec":1443726.6746562792,"samples":721864},{"name":"Function returning empty array","opsSec":1474395.5340900274,"samples":737198}]}-->
