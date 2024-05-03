## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,034,993|96|
|Function returning explicitly undefined|2,040,644|99|
|Function returning implicitly undefined|2,094,069|98|
|Function returning string|2,040,292|97|
|Function returning integer|2,096,066|94|
|Function returning float|2,063,155|98|
|Function returning functions|1,976,103|97|
|Function returning arrow functions|2,024,807|97|
|Function returning empty object|2,067,848|97|
|Function returning empty array|2,046,892|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2034992.9633694699,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2040644.2325710757,"samples":7},{"name":"Function returning implicitly undefined","opsSec":2094068.839481064,"samples":8},{"name":"Function returning string","opsSec":2040292.2880244078,"samples":6},{"name":"Function returning integer","opsSec":2096066.1348794284,"samples":5},{"name":"Function returning float","opsSec":2063154.5917155878,"samples":6},{"name":"Function returning functions","opsSec":1976103.0097551488,"samples":7},{"name":"Function returning arrow functions","opsSec":2024807.1889831922,"samples":5},{"name":"Function returning empty object","opsSec":2067847.7990464922,"samples":4},{"name":"Function returning empty array","opsSec":2046892.4034158909,"samples":7}]}-->
