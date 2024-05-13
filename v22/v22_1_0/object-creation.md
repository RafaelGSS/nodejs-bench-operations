## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,372,430|6686216|
|Object.create({})|1,825,281|912642|
|Cached Empty.prototype|15,967,819|7983910|
|Empty.prototype|2,599,983|1299992|
|Empty class|1,549,861|777723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:04:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13372430.903454857,"samples":6686216},{"name":"Object.create({})","opsSec":1825281.430003617,"samples":912642},{"name":"Cached Empty.prototype","opsSec":15967819.169671902,"samples":7983910},{"name":"Empty.prototype","opsSec":2599983.9843982747,"samples":1299992},{"name":"Empty class","opsSec":1549861.1342972168,"samples":777723}]}-->
