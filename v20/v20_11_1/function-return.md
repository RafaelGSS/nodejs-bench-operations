## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,796,242|96|
|Function returning explicitly undefined|1,768,738|92|
|Function returning implicitly undefined|1,799,435|91|
|Function returning string|1,772,452|94|
|Function returning integer|1,814,038|94|
|Function returning float|1,768,168|95|
|Function returning functions|1,727,759|96|
|Function returning arrow functions|1,732,423|93|
|Function returning empty object|1,781,862|93|
|Function returning empty array|1,752,801|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1796242.0277188034,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1768737.7112597253,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1799435.1740727094,"samples":6},{"name":"Function returning string","opsSec":1772451.9107914625,"samples":5},{"name":"Function returning integer","opsSec":1814037.952660146,"samples":5},{"name":"Function returning float","opsSec":1768168.0724127525,"samples":4},{"name":"Function returning functions","opsSec":1727758.7970632343,"samples":4},{"name":"Function returning arrow functions","opsSec":1732422.7928267121,"samples":7},{"name":"Function returning empty object","opsSec":1781862.3289212189,"samples":5},{"name":"Function returning empty array","opsSec":1752800.6650233904,"samples":5}]}-->
