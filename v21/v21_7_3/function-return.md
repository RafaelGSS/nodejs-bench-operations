## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,001,859|95|
|Function returning explicitly undefined|2,006,667|95|
|Function returning implicitly undefined|2,065,058|96|
|Function returning string|1,995,468|94|
|Function returning integer|2,070,823|97|
|Function returning float|2,048,575|98|
|Function returning functions|1,981,317|95|
|Function returning arrow functions|2,010,496|97|
|Function returning empty object|2,036,019|93|
|Function returning empty array|2,005,332|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:15:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2001859.4908785587,"samples":6},{"name":"Function returning explicitly undefined","opsSec":2006666.991948874,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2065057.9120174488,"samples":6},{"name":"Function returning string","opsSec":1995468.3424151621,"samples":6},{"name":"Function returning integer","opsSec":2070823.2069681855,"samples":6},{"name":"Function returning float","opsSec":2048575.201362693,"samples":4},{"name":"Function returning functions","opsSec":1981316.9450522526,"samples":5},{"name":"Function returning arrow functions","opsSec":2010496.4586103875,"samples":6},{"name":"Function returning empty object","opsSec":2036018.5652705512,"samples":6},{"name":"Function returning empty array","opsSec":2005331.6576590745,"samples":5}]}-->
