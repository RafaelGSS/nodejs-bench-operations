## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,316|6554159|
|Object.create({})|1,728,506|864254|
|Cached Empty.prototype|16,017,800|8008901|
|Empty.prototype|2,605,788|1309439|
|Empty class|1,520,127|760064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:58:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108316.767814295,"samples":6554159},{"name":"Object.create({})","opsSec":1728506.9594414358,"samples":864254},{"name":"Cached Empty.prototype","opsSec":16017800.81467249,"samples":8008901},{"name":"Empty.prototype","opsSec":2605788.3745305245,"samples":1309439},{"name":"Empty class","opsSec":1520127.3007401654,"samples":760064}]}-->
