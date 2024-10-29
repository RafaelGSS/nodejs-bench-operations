## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,299,270|22210241|
|Object.create({})|1,910,672|955337|
|Cached Empty.prototype|82,621,637|41310864|
|Empty.prototype|2,197,915|1102864|
|Empty class|1,366,466|683234|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":44299270.33650526,"samples":22210241},{"name":"Object.create({})","opsSec":1910672.3988565297,"samples":955337},{"name":"Cached Empty.prototype","opsSec":82621637.77717155,"samples":41310864},{"name":"Empty.prototype","opsSec":2197915.715194419,"samples":1102864},{"name":"Empty class","opsSec":1366466.9997461562,"samples":683234}]}-->
