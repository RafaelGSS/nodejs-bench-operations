## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,922,345|97|
|Object.create({})|2,561,430|87|
|Cached Empty.prototype|853,794,574|99|
|Empty.prototype|2,462,674|87|
|Empty class|1,545,426|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:50:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78922344.99161421,"samples":9},{"name":"Object.create({})","opsSec":2561430.286597337,"samples":3},{"name":"Cached Empty.prototype","opsSec":853794574.1551179,"samples":6},{"name":"Empty.prototype","opsSec":2462673.7056259383,"samples":4},{"name":"Empty class","opsSec":1545426.1412864772,"samples":4}]}-->
