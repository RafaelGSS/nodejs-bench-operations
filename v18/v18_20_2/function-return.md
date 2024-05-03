## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,868,330|96|
|Function returning explicitly undefined|1,861,668|96|
|Function returning implicitly undefined|1,897,333|99|
|Function returning string|1,878,502|99|
|Function returning integer|1,908,634|96|
|Function returning float|1,880,347|96|
|Function returning functions|1,837,610|98|
|Function returning arrow functions|1,854,184|98|
|Function returning empty object|1,824,734|96|
|Function returning empty array|1,866,038|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:06:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1868329.5456633195,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1861668.3121939697,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1897333.1901410858,"samples":8},{"name":"Function returning string","opsSec":1878501.7073614884,"samples":10},{"name":"Function returning integer","opsSec":1908634.2747750152,"samples":5},{"name":"Function returning float","opsSec":1880346.6158870445,"samples":7},{"name":"Function returning functions","opsSec":1837610.1167771677,"samples":7},{"name":"Function returning arrow functions","opsSec":1854183.8702183396,"samples":6},{"name":"Function returning empty object","opsSec":1824734.0037877732,"samples":5},{"name":"Function returning empty array","opsSec":1866037.5133866298,"samples":6}]}-->
