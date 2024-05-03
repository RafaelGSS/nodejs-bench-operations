## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,935,687|97|
|Function returning explicitly undefined|1,938,374|94|
|Function returning implicitly undefined|1,953,394|95|
|Function returning string|1,876,618|98|
|Function returning integer|1,981,247|98|
|Function returning float|1,936,063|97|
|Function returning functions|1,899,211|98|
|Function returning arrow functions|1,926,871|98|
|Function returning empty object|1,958,881|96|
|Function returning empty array|1,919,178|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1935687.3036894458,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1938373.6211498058,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1953394.3128406084,"samples":5},{"name":"Function returning string","opsSec":1876617.7257771986,"samples":5},{"name":"Function returning integer","opsSec":1981247.138301932,"samples":6},{"name":"Function returning float","opsSec":1936062.644122578,"samples":5},{"name":"Function returning functions","opsSec":1899210.8615185672,"samples":5},{"name":"Function returning arrow functions","opsSec":1926870.7226528672,"samples":7},{"name":"Function returning empty object","opsSec":1958880.70250652,"samples":6},{"name":"Function returning empty array","opsSec":1919177.853011982,"samples":6}]}-->
