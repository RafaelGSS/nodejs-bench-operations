## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|60,711,812|94|
|Object.create({})|1,695,028|79|
|Cached Empty.prototype|899,290,849|100|
|Empty.prototype|2,087,033|85|
|Empty class|1,270,699|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":60711811.88676614,"samples":5},{"name":"Object.create({})","opsSec":1695028.2847122508,"samples":3},{"name":"Cached Empty.prototype","opsSec":899290849.062475,"samples":5},{"name":"Empty.prototype","opsSec":2087032.9091849274,"samples":3},{"name":"Empty class","opsSec":1270698.6144019316,"samples":3}]}-->
