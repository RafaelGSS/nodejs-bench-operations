## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|16,314,486|8157244|
|Object.create({})|1,912,245|956123|
|Cached Empty.prototype|19,989,469|9994735|
|Empty.prototype|1,795,111|897556|
|Empty class|1,299,633|649817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":16314486.669730557,"samples":8157244},{"name":"Object.create({})","opsSec":1912245.865961007,"samples":956123},{"name":"Cached Empty.prototype","opsSec":19989469.4757553,"samples":9994735},{"name":"Empty.prototype","opsSec":1795111.9075545855,"samples":897556},{"name":"Empty class","opsSec":1299633.395159629,"samples":649817}]}-->
