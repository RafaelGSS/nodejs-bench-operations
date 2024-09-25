## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,591,288|5795645|
|Object.create({})|1,786,448|893225|
|Cached Empty.prototype|14,724,207|7362104|
|Empty.prototype|2,132,075|1066038|
|Empty class|1,176,485|588243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:08:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11591288.794584708,"samples":5795645},{"name":"Object.create({})","opsSec":1786448.6887452828,"samples":893225},{"name":"Cached Empty.prototype","opsSec":14724207.999916168,"samples":7362104},{"name":"Empty.prototype","opsSec":2132075.9701478705,"samples":1066038},{"name":"Empty class","opsSec":1176485.882355378,"samples":588243}]}-->
