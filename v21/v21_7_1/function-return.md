## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,766,806|91|
|Function returning explicitly undefined|1,859,844|99|
|Function returning implicitly undefined|1,910,840|96|
|Function returning string|1,853,416|92|
|Function returning integer|1,840,595|96|
|Function returning float|1,839,237|96|
|Function returning functions|1,787,563|96|
|Function returning arrow functions|1,858,741|93|
|Function returning empty object|1,851,225|94|
|Function returning empty array|1,884,395|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Function returning null","opsSec":1766805.9930144341,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1859844.3935461424,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1910839.7076219106,"samples":5},{"name":"Function returning string","opsSec":1853415.9539396646,"samples":6},{"name":"Function returning integer","opsSec":1840595.1070678087,"samples":6},{"name":"Function returning float","opsSec":1839237.3930477027,"samples":6},{"name":"Function returning functions","opsSec":1787563.240938797,"samples":5},{"name":"Function returning arrow functions","opsSec":1858741.306221022,"samples":6},{"name":"Function returning empty object","opsSec":1851224.9852623618,"samples":6},{"name":"Function returning empty array","opsSec":1884395.4292499095,"samples":6}]}-->
