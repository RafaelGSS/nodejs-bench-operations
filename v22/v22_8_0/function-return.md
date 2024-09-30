## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,683,061|841547|
|Function returning explicitly undefined|1,585,153|792670|
|Function returning implicitly undefined|1,623,763|811882|
|Function returning string|1,606,354|805771|
|Function returning integer|1,628,658|814330|
|Function returning float|1,618,155|809078|
|Function returning functions|1,634,637|817319|
|Function returning arrow functions|1,605,346|802727|
|Function returning empty object|1,639,157|819579|
|Function returning empty array|1,614,479|807328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:17:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1683061.3519758943,"samples":841547},{"name":"Function returning explicitly undefined","opsSec":1585153.6525069186,"samples":792670},{"name":"Function returning implicitly undefined","opsSec":1623763.480395686,"samples":811882},{"name":"Function returning string","opsSec":1606354.0002505947,"samples":805771},{"name":"Function returning integer","opsSec":1628658.990231426,"samples":814330},{"name":"Function returning float","opsSec":1618155.9676368805,"samples":809078},{"name":"Function returning functions","opsSec":1634637.156527227,"samples":817319},{"name":"Function returning arrow functions","opsSec":1605346.9907802886,"samples":802727},{"name":"Function returning empty object","opsSec":1639157.2197611632,"samples":819579},{"name":"Function returning empty array","opsSec":1614479.2758695048,"samples":807328}]}-->
