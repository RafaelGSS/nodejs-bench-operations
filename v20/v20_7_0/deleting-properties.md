## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,330,876|85|
|Using delete property (proto: null)|13,728,521|87|
|Using delete property (cached proto: null)|2,413,934|90|
|Using undefined assignment|708,329,311|88|
|Using undefined assignment (proto: null)|14,330,659|91|
|Using undefined property (cached proto: null)|666,199,395|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2330875.977329578,"cycles":5,"stats":{"deviation":7.153584173965259e-8,"mean":4.2902325551686937e-7,"moe":1.5207936841045254e-8,"rme":3.5447814647537843,"sem":7.759151449512885e-9,"variance":5.117376653400621e-15}},{"name":"Using delete property (proto: null)","hz":13728521.256147826,"cycles":5,"stats":{"deviation":4.515992337554203e-9,"mean":7.284105704772725e-8,"moe":9.489637904953657e-10,"rme":1.3027869569130242,"sem":4.841651992323295e-10,"variance":2.0394186792848276e-17}},{"name":"Using delete property (cached proto: null)","hz":2413934.1382210418,"cycles":6,"stats":{"deviation":3.065561854802817e-8,"mean":4.142615095277429e-7,"moe":6.3335164092807625e-9,"rme":1.5288691475345986,"sem":3.2313859231024298e-9,"variance":9.397669485622087e-16}},{"name":"Using undefined assignment","hz":708329311.2270141,"cycles":6,"stats":{"deviation":8.78114059889686e-11,"mean":1.4117727223058651e-9,"moe":1.8347025567820615e-11,"rme":1.2995735983518792,"sem":9.360727330520722e-12,"variance":7.710843021759471e-21}},{"name":"Using undefined assignment (proto: null)","hz":14330658.977423292,"cycles":5,"stats":{"deviation":4.400756769576607e-9,"mean":6.97804617062909e-8,"moe":9.041963319631039e-10,"rme":1.2957729282000265,"sem":4.61324659164849e-10,"variance":1.9366660144974332e-17}},{"name":"Using undefined property (cached proto: null)","hz":666199395.2692924,"cycles":5,"stats":{"deviation":1.0137591193627719e-10,"mean":1.5010520980670933e-9,"moe":2.1061817340288392e-11,"rme":1.403136997537242,"sem":1.0745825173616527e-11,"variance":1.027707552091183e-20}}]}-->
