## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,682,696|841349|
|Function returning explicitly undefined|1,667,797|833899|
|Function returning implicitly undefined|1,694,851|847426|
|Function returning string|1,649,479|824740|
|Function returning integer|1,707,007|853504|
|Function returning float|1,675,531|837766|
|Function returning functions|1,632,505|816253|
|Function returning arrow functions|1,659,960|829981|
|Function returning empty object|1,631,185|815593|
|Function returning empty array|1,663,517|831759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:55:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1682696.5730731005,"samples":841349},{"name":"Function returning explicitly undefined","opsSec":1667797.9266173944,"samples":833899},{"name":"Function returning implicitly undefined","opsSec":1694851.3796847307,"samples":847426},{"name":"Function returning string","opsSec":1649479.6140212226,"samples":824740},{"name":"Function returning integer","opsSec":1707007.8429564394,"samples":853504},{"name":"Function returning float","opsSec":1675531.9664892852,"samples":837766},{"name":"Function returning functions","opsSec":1632505.898783439,"samples":816253},{"name":"Function returning arrow functions","opsSec":1659960.1342044766,"samples":829981},{"name":"Function returning empty object","opsSec":1631185.569368573,"samples":815593},{"name":"Function returning empty array","opsSec":1663517.0351593934,"samples":831759}]}-->
