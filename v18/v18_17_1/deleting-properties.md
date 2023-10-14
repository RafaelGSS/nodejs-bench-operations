## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,294,566|95|
|Using delete property (proto: null)|11,203,591|93|
|Using delete property (cached proto: null)|2,297,487|96|
|Using undefined assignment|709,978,429|97|
|Using undefined assignment (proto: null)|13,383,272|94|
|Using undefined property (cached proto: null)|706,016,536|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2294566.3238617526,"cycles":6,"stats":{"deviation":2.325125778379787e-8,"mean":4.3581220102498543e-7,"moe":4.6756362804058985e-9,"rme":1.07285575516456,"sem":2.3855287144928054e-9,"variance":5.406209885286211e-16}},{"name":"Using delete property (proto: null)","hz":11203591.424247188,"cycles":7,"stats":{"deviation":1.4443281043793776e-9,"mean":8.925709284933102e-8,"moe":2.935489012142637e-10,"rme":0.328880195224131,"sem":1.497698475582978e-10,"variance":2.0860836731001263e-18}},{"name":"Using delete property (cached proto: null)","hz":2297487.4271520292,"cycles":6,"stats":{"deviation":1.4583302469083408e-8,"mean":4.352580946393262e-7,"moe":2.91726806813716e-9,"rme":0.6702386708177214,"sem":1.4884020755801836e-9,"variance":2.126727109047742e-16}},{"name":"Using undefined assignment","hz":709978428.9415733,"cycles":7,"stats":{"deviation":1.126658256264904e-11,"mean":1.4084934967542424e-9,"moe":2.242138354232813e-12,"rme":0.15918698662078576,"sem":1.1439481399147005e-12,"variance":1.269358826409874e-22}},{"name":"Using undefined assignment (proto: null)","hz":13383271.627174323,"cycles":6,"stats":{"deviation":1.4242484524698486e-9,"mean":7.472014525727257e-8,"moe":2.8792402231040736e-10,"rme":0.38533653985687816,"sem":1.469000113828609e-10,"variance":2.0284836543627585e-18}},{"name":"Using undefined property (cached proto: null)","hz":706016536.4404961,"cycles":9,"stats":{"deviation":2.042241532609618e-11,"mean":1.4163974190203422e-9,"moe":4.043431942281392e-12,"rme":0.28547298152223766,"sem":2.0629754807558123e-12,"variance":4.1707504775156804e-22}}]}-->
