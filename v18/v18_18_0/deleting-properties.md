## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,868,812|90|
|Using delete property (proto: null)|12,081,369|86|
|Using delete property (cached proto: null)|1,884,914|87|
|Using undefined assignment|645,404,547|88|
|Using undefined assignment (proto: null)|13,834,978|89|
|Using undefined property (cached proto: null)|606,650,613|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using delete property","hz":1868811.955246061,"cycles":6,"stats":{"deviation":2.2467343818702487e-8,"mean":5.350993165432383e-7,"moe":4.64180132349206e-9,"rme":0.867465380721895,"sem":2.3682659813735e-9,"variance":5.047815382677888e-16}},{"name":"Using delete property (proto: null)","hz":12081368.717680756,"cycles":5,"stats":{"deviation":4.877397802457425e-9,"mean":8.27720785093271e-8,"moe":1.0308489288684674e-9,"rme":1.2454066001886217,"sem":5.259433310553405e-10,"variance":2.378900932341652e-17}},{"name":"Using delete property (cached proto: null)","hz":1884913.9219353662,"cycles":4,"stats":{"deviation":1.7873861098606504e-8,"mean":5.305282052207634e-7,"moe":3.755906943834071e-9,"rme":0.7079561287926553,"sem":1.916279052976567e-9,"variance":3.1947491057227894e-16}},{"name":"Using undefined assignment","hz":645404547.0751381,"cycles":7,"stats":{"deviation":5.954544321017264e-11,"mean":1.5494157959249393e-9,"moe":1.2441228525158703e-11,"rme":0.8029625461338341,"sem":6.347565574060562e-12,"variance":3.545659807095894e-21}},{"name":"Using undefined assignment (proto: null)","hz":13834978.344652046,"cycles":5,"stats":{"deviation":3.601483921025853e-9,"mean":7.228056127652365e-8,"moe":7.482428029482218e-10,"rme":1.0351922975330397,"sem":3.817565321164397e-10,"variance":1.297068643340775e-17}},{"name":"Using undefined property (cached proto: null)","hz":606650613.4526665,"cycles":6,"stats":{"deviation":5.318701286325754e-11,"mean":1.6483952671021643e-9,"moe":1.080986317273595e-11,"rme":0.6557810125079653,"sem":5.515236312620383e-12,"variance":2.8288583373163226e-21}}]}-->
