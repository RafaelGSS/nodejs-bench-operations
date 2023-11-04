## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,524,672|95|
|Function returning explicitly undefined|1,515,726|92|
|Function returning implicitly undefined|1,549,997|97|
|Function returning string|1,529,365|99|
|Function returning integer|1,563,908|97|
|Function returning float|1,545,612|98|
|Function returning functions|1,512,319|96|
|Function returning arrow functions|1,538,784|98|
|Function returning empty object|1,525,054|97|
|Function returning empty array|1,547,381|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Function returning null","opsSec":1524672.437082224,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1515725.9682633914,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1549997.3850691386,"samples":5},{"name":"Function returning string","opsSec":1529365.0283631594,"samples":4},{"name":"Function returning integer","opsSec":1563908.1480309176,"samples":8},{"name":"Function returning float","opsSec":1545611.8310749256,"samples":6},{"name":"Function returning functions","opsSec":1512318.5679233407,"samples":5},{"name":"Function returning arrow functions","opsSec":1538784.1872013847,"samples":6},{"name":"Function returning empty object","opsSec":1525054.4788102605,"samples":6},{"name":"Function returning empty array","opsSec":1547381.1835323053,"samples":5}]}-->
