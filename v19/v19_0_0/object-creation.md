## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,940,641|94|
|Object.create({})|1,422,511|77|
|Cached Empty.prototype|714,497,119|97|
|Empty.prototype|1,315,323|72|
|Empty class|964,944|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":40940640.5001307,"cycles":7,"stats":{"deviation":1.6109819579361558e-9,"mean":2.44256071176221e-8,"moe":3.256737996759684e-10,"rme":1.3333293952845402,"sem":1.6616010187549408e-10,"variance":2.59526286879581e-18}},{"name":"Object.create({})","hz":1422510.7529592281,"cycles":3,"stats":{"deviation":1.0940644915236718e-7,"mean":7.029823837322248e-7,"moe":2.4437323147059428e-8,"rme":3.4762354950231478,"sem":1.2468022013805831e-8,"variance":1.1969771116129506e-14}},{"name":"Cached Empty.prototype","hz":714497119.1707693,"cycles":7,"stats":{"deviation":2.1267228602472282e-11,"mean":1.3995857690239247e-9,"moe":4.232345404889889e-12,"rme":0.30239985991294693,"sem":2.159359900454025e-12,"variance":4.522950124298151e-22}},{"name":"Empty.prototype","hz":1315323.472729181,"cycles":3,"stats":{"deviation":1.0063185730078263e-7,"mean":7.60269257512061e-7,"moe":2.3244773108921592e-8,"rme":3.057439568842863,"sem":1.185957811679673e-8,"variance":1.0126770703805076e-14}},{"name":"Empty class","hz":964943.8299742526,"cycles":3,"stats":{"deviation":8.687149385580866e-8,"mean":0.0000010363297519884476,"moe":1.8918680884153884e-8,"rme":1.825546439041613,"sem":9.652388206200962e-9,"variance":7.5466564447398e-15}}]}-->
