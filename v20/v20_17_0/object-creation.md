## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,859,083|21977707|
|Object.create({})|1,942,370|971186|
|Cached Empty.prototype|73,793,449|36966231|
|Empty.prototype|2,165,339|1094492|
|Empty class|1,448,752|726876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:17:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43859083.05032443,"samples":21977707},{"name":"Object.create({})","opsSec":1942370.2635209844,"samples":971186},{"name":"Cached Empty.prototype","opsSec":73793449.16253312,"samples":36966231},{"name":"Empty.prototype","opsSec":2165339.8486857763,"samples":1094492},{"name":"Empty class","opsSec":1448752.8955908988,"samples":726876}]}-->
