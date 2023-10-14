## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,752,776|92|
|Object.create({})|1,037,857|79|
|Cached Empty.prototype|589,320,717|97|
|Empty.prototype|1,143,858|82|
|Empty class|673,783|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":56752776.02944954,"cycles":7,"stats":{"deviation":6.355225686989943e-10,"mean":1.7620283446242185e-8,"moe":1.2986530371167148e-10,"rme":0.7370216495544933,"sem":6.625780801615892e-11,"variance":4.0388893532576793e-19}},{"name":"Object.create({})","hz":1037857.145348493,"cycles":3,"stats":{"deviation":9.255412362032329e-8,"mean":9.63523741665062e-7,"moe":2.0409778834543302e-8,"rme":2.1182434798413206,"sem":1.0413152466603725e-8,"variance":8.566265799126086e-15}},{"name":"Cached Empty.prototype","hz":589320716.8884526,"cycles":6,"stats":{"deviation":2.1777986710769435e-11,"mean":1.6968689057460732e-9,"moe":4.333990277057691e-12,"rme":0.2554110257063222,"sem":2.2112195291110667e-12,"variance":4.742807051744501e-22}},{"name":"Empty.prototype","hz":1143858.3801171998,"cycles":3,"stats":{"deviation":9.891713323941461e-8,"mean":8.742340987155595e-7,"moe":2.1410197158011867e-8,"rme":2.449023343915333,"sem":1.0923569978577484e-8,"variance":9.784599248304101e-15}},{"name":"Empty class","hz":673782.6034086883,"cycles":3,"stats":{"deviation":1.0327800728444967e-7,"mean":0.0000014841582358181514,"moe":2.1702226651814604e-8,"rme":1.4622582773225066,"sem":1.1072564618272757e-8,"variance":1.0666346788646839e-14}}]}-->
