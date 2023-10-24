## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|913,133|85|
|Function returning explicitly undefined|945,335|87|
|Function returning implicitly undefined|952,710|83|
|Function returning string|944,056|83|
|Function returning integer|950,428|85|
|Function returning float|955,881|83|
|Function returning functions|910,793|84|
|Function returning arrow functions|878,725|82|
|Function returning empty object|937,544|81|
|Function returning empty array|940,342|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":913133.124168602,"samples":7},{"name":"Function returning explicitly undefined","opsSec":945334.9187040639,"samples":5},{"name":"Function returning implicitly undefined","opsSec":952709.90123985,"samples":5},{"name":"Function returning string","opsSec":944056.2710882529,"samples":5},{"name":"Function returning integer","opsSec":950427.7887639353,"samples":3},{"name":"Function returning float","opsSec":955881.1214790394,"samples":5},{"name":"Function returning functions","opsSec":910793.0339420431,"samples":3},{"name":"Function returning arrow functions","opsSec":878725.1025532411,"samples":5},{"name":"Function returning empty object","opsSec":937543.9796305563,"samples":6},{"name":"Function returning empty array","opsSec":940341.8005974019,"samples":7}]}-->
