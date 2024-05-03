## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,024,493|97|
|Function returning explicitly undefined|2,034,438|96|
|Function returning implicitly undefined|2,088,249|96|
|Function returning string|2,063,307|97|
|Function returning integer|2,087,681|96|
|Function returning float|2,054,241|96|
|Function returning functions|1,996,843|94|
|Function returning arrow functions|2,032,988|98|
|Function returning empty object|2,002,469|98|
|Function returning empty array|1,992,637|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:07:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2024493.0145249881,"samples":6},{"name":"Function returning explicitly undefined","opsSec":2034437.5351667372,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2088249.2305084404,"samples":6},{"name":"Function returning string","opsSec":2063307.4962428256,"samples":7},{"name":"Function returning integer","opsSec":2087680.7321198091,"samples":5},{"name":"Function returning float","opsSec":2054240.9435303626,"samples":5},{"name":"Function returning functions","opsSec":1996842.6526684589,"samples":5},{"name":"Function returning arrow functions","opsSec":2032988.0581651123,"samples":8},{"name":"Function returning empty object","opsSec":2002468.8199227308,"samples":6},{"name":"Function returning empty array","opsSec":1992637.257638066,"samples":6}]}-->
