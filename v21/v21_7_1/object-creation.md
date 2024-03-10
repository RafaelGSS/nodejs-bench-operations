## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,454,143|91|
|Object.create({})|2,676,859|82|
|Cached Empty.prototype|822,734,244|94|
|Empty.prototype|2,495,376|91|
|Empty class|1,591,273|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":83454143.13485217,"samples":6},{"name":"Object.create({})","opsSec":2676858.7910247566,"samples":3},{"name":"Cached Empty.prototype","opsSec":822734244.1221519,"samples":7},{"name":"Empty.prototype","opsSec":2495376.019396675,"samples":3},{"name":"Empty class","opsSec":1591273.3026618662,"samples":3}]}-->
