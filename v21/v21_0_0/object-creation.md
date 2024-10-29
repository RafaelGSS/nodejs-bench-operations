## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,873,418|20484049|
|Object.create({})|1,982,277|991140|
|Cached Empty.prototype|79,580,401|39872234|
|Empty.prototype|2,235,615|1119316|
|Empty class|1,397,210|704432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":40873418.48643068,"samples":20484049},{"name":"Object.create({})","opsSec":1982277.5380112978,"samples":991140},{"name":"Cached Empty.prototype","opsSec":79580401.86030872,"samples":39872234},{"name":"Empty.prototype","opsSec":2235615.095554542,"samples":1119316},{"name":"Empty class","opsSec":1397210.249351348,"samples":704432}]}-->
